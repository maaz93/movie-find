import React from "react";
import AppActions from "../actions/AppActions";
import AppStore from "../stores/AppStore";

class SearchForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const movie = {
            title: this.refs.title.value.trim()
        };
        AppActions.searchMovies(movie);
    }

    render() {
        return (
            <div className="search-form">
                <h1 className="text-center">Search for movies</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" ref="title" placeholder="Enter a movie title..." />
                    </div>
                    <button className="btn btn-primary btn-block">Search Movies</button>
                </form>
            </div>
        );
    }
}

export default SearchForm;