export function Comment({
    com
}) {
    return (
        <li className="comment">
            <p>{com.name}: {com.comment}</p>
        </li>
    );
}