import React from "react";
import AppActions from "../actions/AppActions";
import AppStore from "../stores/AppStore";

class Movie extends React.Component {

    render() {
        const { movie } = this.props;
        return (
            <div className="well">
                <div className="row">
                    <div className="col-md-4">
                        <img className="thumbnail" src={movie.poster.thumb} />
                    </div>
                    <div className="col-md-8">
                        <h4>{movie.title}</h4>
                        <ul className="list-group">
                            <li className="list-group-item">Year Released: {movie.year}</li>
                            <li className="list-group-item">Director: {movie.director}</li>
                            <li className="list-group-item">Starring: {movie.stars.join(", ")}</li>
                        </ul>
                        <a className="btn btn-primary" href={movie.url.url}>View on IMDB</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Movie;