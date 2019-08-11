import _ from "lodash";

class StubAPI {
    constructor() {
        this.movies = [];
    }

    find(id) {
        let index = _.findIndex(
            this.movies,
            movie => `${movie.title}` === id
        );
        if (index !== -1) {
            return this.movies[index];
        }
        return null;
    }

    delete(k) {
        let elements = _.remove(this.movies, movie => movie.title === k);
        return elements;
    }

    initialize(movies) {
        this.movies = movies;
    }

    getAll() {
        return this.movies;
    }

    update(key, genre, year) {
        let index = _.findIndex(this.movies, movie => movie.title === key);
        if (index !== -1) {
            this.movies[index].genre = genre;
            this.movies[index].year = year;
            return true;
        }
        return false;
    }
}

export default new StubAPI();