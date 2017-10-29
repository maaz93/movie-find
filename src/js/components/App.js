import React from "react";
import AppActions from "../actions/AppActions";
import AppStore from "../stores/AppStore";
import SearchForm from "./SearchForm";

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
        console.log(this.state.movies);
        return (<SearchForm />);
    }
}

export default App;