import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { gameServiceFactory } from "../../services/gameService";

export function Edit({
    onEditGame
}) {
    const { gameId } = useParams();
    const gameService = useService(gameServiceFactory);
    const { values, changeValues, onSubmitClick, editValues } = useForm({
        _id: gameId,
        title: "",
        category: "",
        maxLevel: "",
        imageUrl: "",
        summary: ""
    }, onEditGame)

    useEffect(() => {
        gameService.getOne(gameId)
            .then(res => editValues(res))
    }, [gameId, editValues])

    return (
        <section id="edit-page" className="auth">
            <form id="edit" method="POST" onSubmit={onSubmitClick}>
                <div className="container">

                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={values.title}
                        onChange={changeValues}
                    />

                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={values.category}
                        onChange={changeValues}
                    />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min="1"
                        value={values.maxLevel}
                        onChange={changeValues}
                    />

                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={values.imageUrl}
                        onChange={changeValues}
                    />

                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        name="summary"
                        id="summary"
                        value={values.summary}
                        onChange={changeValues}
                    ></textarea>
                    <input className="btn submit" type="submit" value="Edit Game" />

                </div>
            </form>
        </section>
    );
}