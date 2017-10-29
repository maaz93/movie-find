import AppActions from "../actions/AppActions";

export default {
    searchMovies(movie) {
        $.ajax({
            url: `https://theimdbapi.org/api/find/movie?title=${movie.title}`,
            dataType: "json",
            success(data) {
                AppActions.receiveMovieResults(data);
            },
            error(xhr, status, error) {
                alert(error);
            }
        });
    }
}