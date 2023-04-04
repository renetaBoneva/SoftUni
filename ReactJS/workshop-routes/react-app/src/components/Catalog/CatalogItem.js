import { Link } from "react-router-dom";

export function CatalogItem({
    _id,
    title,
    imageUrl,
    category
}) {
    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={imageUrl} alt="img" />
                <h6>{category}</h6>
                <h2>{title}</h2>
                <Link to={`/games/${_id}`} className="details-button">Details</Link>
            </div>
        </div>
    );
}