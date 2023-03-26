import { useState } from "react";

export function Create({
    onGameCreateHandler
}) {
    const [values, setValues] = useState({
        title: "",
        imageUrl: "",
        maxLevel: "",
        category: "",
        summary: ""
    });
    
    function onSubmit(e){
        e.preventDefault();
        onGameCreateHandler(values)
    }

    function onChange(e){
        setValues(state => ({...state, [e.target.name]: e.target.value}))
    }

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onSubmit}>
                <div className="container">

                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input value={values.title} onChange={onChange} type="text" id="title" name="title" placeholder="Enter game title..." />

                    <label htmlFor="category">Category:</label>
                    <input value={values.category} onChange={onChange} type="text" id="category" name="category" placeholder="Enter game category..." />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input value={values.maxLevel} onChange={onChange} type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" />

                    <label htmlFor="game-img">Image:</label>
                    <input value={values.imageUrl} onChange={onChange} type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="summary">Summary:</label>
                    <textarea value={values.summary} onChange={onChange} name="summary" id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Create Game" />
                </div>
            </form>
        </section>
    );
}