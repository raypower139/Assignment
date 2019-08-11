import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from '../src/components/header/'

storiesOf("Movie List App/Header", module).add("default", () => (
    <Header noMovies={10} />
));