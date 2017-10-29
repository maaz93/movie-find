import AppDispatcher from "../dispatcher/AppDispatcher";
import AppConstants from "../constants/AppConstants";
import { EventEmitter } from "events";
import AppAPI from "../utils/appAPI";

const CHANGE_EVENT = "change";

let _movies = [], _searchInProgress = false;

const AppStore = Object.assign({}, EventEmitter.prototype, {
    getMovieResults() {
        return _movies;
    },
    getSearchInProgress() {
        return _searchInProgress;
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
            _searchInProgress = true;
            AppStore.emitChange();
            break;
        case AppConstants.RECEIVE_MOVIE_RESULTS:
            _movies = action.movies;
            _searchInProgress = false;
            AppStore.emitChange();
            break;
    };
    return true;
});

export default AppStore;