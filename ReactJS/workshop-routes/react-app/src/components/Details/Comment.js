export function Comment({
    com
}) {
    return (
        <li className="comment">
            <p>{com.auth.email}: {com.comment}</p>
        </li>
    );
}