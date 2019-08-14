import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from '../src/components/header/'
import FilterControls from '../src/components/filterControls/'
import Movie from '../src/components/movie/'
import MovieList from '../src/components/movieList/'
import { action } from '@storybook/addon-actions';


storiesOf("Movie List App/Header", module).add("default", () => (
    <FilterControls onUserInput={action('Search criteria changes') }/>
));

storiesOf("Movie List App/Filter Controls", module).add("default", () => (
    <FilterControls />
));

const sample = {
    name: 'Jaws',
    genre: 'Thriller',
    picture: {thumbnail: './jaws-thumb.jpg'}
}

storiesOf("Movie List App/Movie", module).add("default", () => (
    <Movie movie={sample} deleteHandler={action('Delete Confirmed')}/>
));

storiesOf("Movie List App/Movie List", module).add("default", () => {
    const samples = [sample, sample, sample, sample, sample, sample, sample, sample]
    return <MovieList movies={samples}/>
});

