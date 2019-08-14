import _ from "lodash";

class StubAPI {
    constructor() {
        this.movies = [];
    }

    find(id) {
        let index = _.findIndex(
            this.movies,
            movie => `${movie.id}` === id
        );
        if (index !== -1) {
            return this.movies[index];
        }
        return null;
    }

    delete(k) {
        let elements = _.remove(this.movies, movie => movie.id === k);
        return elements;
    }

    initialize(movies) {
        this.movies = movies;
    }

    getAll() {
        return this.movies;
    }

    update(key, overview) {
        let index = _.findIndex(this.movies, movie => movie.id === key);
        if (index !== -1) {

            this.movies[index].overview = overview;
            return true;
        }
        return false;
    }
}

export default new StubAPI();