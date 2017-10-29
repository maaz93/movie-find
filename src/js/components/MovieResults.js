import React from "react";
import Movie from "./Movie";

class MovieResults extends React.Component {

    _getMovies(movies = []) {
        if (movies.length > 0) {
            return this.props.movies.map((movie, i) => {
                return <Movie movie={movie} key={i} />
            });
        } else {
            return <h5 className="text-center">There was a problem with the search. Please check your query or try again later. Thank you.</h5>;
        }
    }

    render() {
        return (
            <div>
                <h3 className="text-center">Results</h3>
                {this._getMovies(this.props.movies)}
            </div>
        );
    }
}

export default MovieResults;