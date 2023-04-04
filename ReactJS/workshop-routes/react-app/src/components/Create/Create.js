import { useForm } from "../../hooks/useForm"; 

export function Create({
    onGameCreateHandler
}) {
    const {values, changeValues, onSubmitClick} = useForm({
        title: "",
        imageUrl: "",
        maxLevel: "",
        category: "",
        summary: ""
    }, onGameCreateHandler);
    
    return (
        <section id="create-page" className="auth">
            <form id="create" method="POST" onSubmit={onSubmitClick}>
                <div className="container">

                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input value={values.title} onChange={changeValues} type="text" id="title" name="title" placeholder="Enter game title..." />

                    <label htmlFor="category">Category:</label>
                    <input value={values.category} onChange={changeValues} type="text" id="category" name="category" placeholder="Enter game category..." />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input value={values.maxLevel} onChange={changeValues} type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" />

                    <label htmlFor="game-img">Image:</label>
                    <input value={values.imageUrl} onChange={changeValues} type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="summary">Summary:</label>
                    <textarea value={values.summary} onChange={changeValues} name="summary" id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Create Game" />
                </div>
            </form>
        </section>
    );
}