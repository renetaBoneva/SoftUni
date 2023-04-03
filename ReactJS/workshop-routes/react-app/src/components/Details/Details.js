import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthContext';
import { useService } from '../../hooks/useService';

import { gameServiceFactory } from '../../services/gameService';
import * as commentsService from '../../services/commentsService';
import { Comment } from './Comment';
import { useContext } from 'react';
import { AddComment } from './AddComment';

export function Details() {
    const { gameId } = useParams();
    const { userId, isAuthenticated } = useContext(AuthContext);
    const [game, setGame] = useState({});
    const [comments, setComments] = useState([]);
    const gameService = useService(gameServiceFactory);

    useEffect(() => {
        Promise.all([
            gameService.getOne(gameId),
            commentsService.getAll(gameId)
        ]).then(([gameData, comments]) => {
            setGame({ ...gameData, comments });
            setComments(comments)
        })

        // gameService.getOne(gameId)
        //     .then(res => setGame(res));
        // gameService.getComment(gameId)
        //     .then(res => setComments(res));
    }, [gameId])

    async function onCommentSubmit(values) {
        const result = await commentsService.create(gameId, values.comment)
        // gameService.postComment(gameId, formData)
        //     .then(res => {
        //         setComments(state => ([...state, res]))
        //     })
        // setFormData({
        //     name: "",
        //     comment: ""
        // })
    }
    const isOwner = userId === game._ownerId;

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} alt='game-img' />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">{game.summery}</p>

                {/* <!-- Bonus ( for Guests and Users ) --> */}
                <div className="details-comments">
                    {comments.length !== 0
                        ? (
                            <>
                                <h2>Comments:</h2>
                                <ul>
                                    {comments.map(com => <Comment com={com} key={com._id} />)}
                                </ul>
                            </>)
                        : (
                            <p className="no-comment">No comments.</p>
                        )}
                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                {isOwner && (
                    <div className="buttons">
                        <Link to={`/games/${game._id}/edit`} className="button">Edit</Link>
                        <Link to={`/games/${game._id}/delete`} className="button">Delete</Link>
                    </div>
                )}
            </div>

            {/* <!-- Bonus --> */}
            {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            {isAuthenticated && (<AddComment onCommentSubmit={onCommentSubmit} />)}
        </section>
    );
}