import { useForm } from "../../hooks/useForm";

export function AddComment({
    onCommentSubmit
}) {
    const {values, changeValues, onSubmitClick} = useForm({
        comment: ""
    }, onCommentSubmit)
    return (
        <article className="create-comment">
            <label>Add new comment:</label>
            <form onSubmit={onSubmitClick} className="form">
                <textarea
                    name="comment"
                    placeholder="Comment......"
                    value={values.comment}
                    onChange={changeValues}
                ></textarea>
                <input className="btn submit" type="submit" value="Add Comment" />
            </form>
        </article>

    );
}