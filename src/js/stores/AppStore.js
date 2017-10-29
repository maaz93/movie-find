import AppDispatcher from "../dispatcher/AppDispatcher";
import AppConstants from "../constants/AppConstants";
import { EventEmitter } from "events";
import AppAPI from "../utils/appAPI";

const CHANGE_EVENT = "change";

let _movies = [],
    _selected = [];

const AppStore = Object.assign({}, EventEmitter.prototype, {
    setMovieResults(movies = []) {
        _movies = movies;
    },
    getMovieResults() {
        return _movies;
    },
    emitChange() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register((payload) => {
    const action = payload.action;

    switch (action.actionType) {
        case AppConstants.SEARCH_MOVIES:
            const { movie } = action;
            console.log(`Searching for ${movie.title}`);
            AppAPI.searchMovies(movie);
            AppStore.emit(CHANGE_EVENT);
            break;
        case AppConstants.RECEIVE_MOVIE_RESULTS:
            AppStore.setMovieResults(action.movies);
            AppStore.emit(CHANGE_EVENT);
            break;
    };
    return true;
});

export default AppStore;