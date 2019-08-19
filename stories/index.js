import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from '../src/components/header/'
import FilterControls from '../src/components/filterControls/'
import Movie from '../src/components/movie/'
import MovieList from '../src/components/movieList/'
import { action } from '@storybook/addon-actions';
import { MemoryRouter, Route } from "react-router";
import LoginForm from "../src/components/authentication/loginForm";




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

storiesOf("Movie List App/Movie Page/MoviePrivate", module)
    .add("default", () => (
        <MoviePrivateDetails user={sample}/>
    ));

storiesOf("Movie List App/Header", module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
    ))
    .add("default", () => <Header />);

storiesOf("Movie List App/Login Form", module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
    ))
    .add("default", () => (
        <LoginForm />
    ));