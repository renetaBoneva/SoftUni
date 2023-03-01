import Movie from "./Movie";

function MoviesList (props) {
    const movies = props.movies;

    return (
        <div>
            <h1>Movies</h1>
            <Movie 
                title={movies[0].title}
                year={movies[0].year}
                cast={movies[0].cast}
            />
            <Movie 
                title={movies[1].title}
                year={movies[1].year}
                cast={movies[1].cast}
            />
            <Movie 
                title={movies[2].title}
                year={movies[2].year}
                cast={movies[2].cast}
            />
        </div>
    );
}

export default MoviesList;