import React from 'react'
import { Link } from 'react-router-dom'
import "./../../styles/movielist.css"

const MoviewList = ({ movieList, selectMovie }) => {
    return (
        <div className="grid-container">
            {movieList.map((movie, index) => (
                <MovieItem
                    movie={movie}
                    selectMovie={selectMovie}
                    key={"tag-" + index} />
            ))}
        </div>
    );
}

const MovieItem = ({ movie, selectMovie }) => {
    return (
        <div className="grid-item" onClick={() => selectMovie(movie)}>
            <div>
                <img src={movie.image} className="image" />
            </div>
            <div className="text">
                <div className="movie-title">{movie.name}</div>
            </div>
        </div>
    );
}

export default MoviewList;
