import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import * as gameService from '../../services/gameService';
import { Comment } from './Comment';

export function Details() {
    const { gameId } = useParams();
    const [game, setGame] = useState({});
    const [comments, setComments] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        comment: ""
    });

    useEffect(() => {
        gameService.getOne(gameId)
            .then(res => setGame(res));
        gameService.getComment(gameId)
            .then(res => setComments(res));
    }, [gameId])

    console.log(comments);
    function onChange(e) {
        setFormData(state => ({ ...state, [e.target.name]: e.target.value }))
    }

    function onCommentSubmit(e) {
        e.preventDefault();
        gameService.postComment(gameId, formData)
            .then(res => {
                setComments(state => ([...state, res]))
            })
        setFormData({
            name: "",
            comment: ""
        })
    }

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">{game.summery}</p>

                {/* <!-- Bonus ( for Guests and Users ) --> */}
                <div className="details-comments">
                    {comments.length != 0
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
                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div>
            </div>

            {/* <!-- Bonus --> */}
            {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form onSubmit={onCommentSubmit} className="form">
                    <textarea name="name" placeholder="Username..." value={formData.name} onChange={onChange}></textarea>
                    <textarea name="comment" placeholder="Comment......" value={formData.comment} onChange={onChange}></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>

        </section>
    );
}