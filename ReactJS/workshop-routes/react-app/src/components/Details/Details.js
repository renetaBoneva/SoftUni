import { useState, useEffect, useReducer } from 'react';
import { Link, useParams } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthContext';
import { useService } from '../../hooks/useService';

import { gameServiceFactory } from '../../services/gameService';
import * as commentsService from '../../services/commentsService';
import { Comment } from './Comment';
import { useContext } from 'react';
import { AddComment } from './AddComment';

function gameReducer(state, action) {
    switch(action.type) {
        case "FETCH_GAMEDATA":
            return action.gamedata;
        case "ADD_COMMENT":
            return({
                ...state,
                comments: [
                    ...state.comments,
                    {
                        ...action.result,
                        auth: {
                            email: action.userEmail,
                            _id: action.userId
                        }
                    }]
            });
        default:
            return state
    }
}

export function Details() {
    const { gameId } = useParams();
    const { userId, isAuthenticated, userEmail } = useContext(AuthContext);
    const [game, setGame] = useState({});
    const [state, dispatch] = useReducer(gameReducer, {})
    const gameService = useService(gameServiceFactory);

    useEffect(() => {
        Promise.all([
            gameService.getOne(gameId),
            commentsService.getAll(gameId)
        ]).then(([gameData, comments]) => {
            dispatch({type: "FETCH_GAMEDATA",  gamedata: { ...gameData, comments }})
            setGame({ ...gameData, comments });
        })

    }, [gameId])

    async function onCommentSubmit(values) {
        const result = await commentsService.create(gameId, values.comment);
        dispatch({type: "ADD_COMMENT",  result, userId, userEmail})

        setGame(state => ({
            ...state,
            comments: [
                ...state.comments,
                {
                    ...result,
                    auth: {
                        email: userEmail,
                        _id: userId
                    }
                }]
        }))
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
                    {game.comments && game.comments.length !== 0
                        ? (
                            <>
                                <h2>Comments:</h2>
                                <ul>
                                    {game.comments.map(com => <Comment com={com} key={com._id} />)}
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