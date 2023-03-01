function Movie (props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.year}</p>
            <ul>
                <li>{props.cast[0]}</li>
                <li>{props.cast[1]}</li>
            </ul>
        </div>
    );
}

export default Movie;