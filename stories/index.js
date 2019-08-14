import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from '../src/components/header/'
import FilterControls from '../src/components/filterControls/'
import Movie from '../src/components/movie/'
import MovieList from '../src/components/movieList/'
import { action } from '@storybook/addon-actions';
import { MemoryRouter, Route } from "react-router";


storiesOf("Movie List App/Header", module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
    ))
    .add("default", () => (
    <FilterControls onUserInput={action('Search criteria changes') }/>
));

storiesOf("Movie List App/Filter Controls", module).add("default", () => (
    <FilterControls />
));

const sample = {
    title: 'Jaws',
    overview: 'Shark Film',
    original_language: 'en'
    login: {
        uuid: "c4168eac-84b8-46ea-b735-c9da9bfb97fd",
        username: "bluefrog786",
        password: "ingrid",
        salt: "GtRFz4NE",
        md5: "5c581c5748fc8c35bd7f16eac9efbb55",
        shah: "c3feb8887abed9ec1561b9aa2c9f58de21d1d3d9",
        sha256: "684c478a98b43f1ef1703b35b8bbf61b27dbc93d52acd515e141e97e04447712"
    },
    dob: {
        date: "1975-11-12T06:34:44Z",
        age: 42
    },
    registered: {
        date: "2015-11-04T22:09:36Z",
        age: 2
    },
}

storiesOf("Movie List App/Movie", module).add("default", () => (
    <Movie movie={sample} deleteHandler={action('Delete Confirmed')}/>
));

storiesOf("Movie List App/Movie List", module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
    ))
    .add("default", () => {
    const samples = [sample, sample, sample, sample, sample, sample, sample, sample]
    return <MovieList movies={samples}/>
});

