// Core
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Page
import { MoviesFormAddContainer, MoviesContainer } from '../containers';
import { book } from './book';

const Public = () => {
    return (
        <Switch>
            <Route exact path={ book.movies } component={ MoviesContainer } />
            <Route exact path={ book.movies_add } component={ MoviesFormAddContainer } />
            <Redirect to={ book.movies }/>
        </Switch>
    );
};

export default Public;
