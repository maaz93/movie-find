import React from "react";
import AppStore from "../stores/AppStore";
import SearchForm from "./SearchForm";
import MovieResults from "./MovieResults";

class App extends React.Component {

    constructor(props) {
        super(props);
        this._handleChange = this._handleChange.bind(this);
        this.state = {
            movies: AppStore.getMovieResults()
        }
    }

    _handleChange() {
        this.setState({
            movies: AppStore.getMovieResults()
        });
    }

    componentDidMount() {
        AppStore.addChangeListener(this._handleChange);
    }

    componentWillUnmount() {
        AppStore.removeChangeListener(this._handleChange);
    }

    render() {
        const isResultsAvailable = this.state.movies.length !== 0;
        return (
            <div>
                <SearchForm />
                {isResultsAvailable ? <MovieResults movies={this.state.movies} /> : null}
            </div>
        );
    }
}

export default App;