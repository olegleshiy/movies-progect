// Core
import React from 'react';
import { Layout } from 'antd';

// Components
import { Footer, Header, MovieFormAdd, Spinner, Main, Catcher } from '../components';

const MoviesFormAdd = (props) => {
    return (
        <Catcher error={ props.error }>
            <Layout style={ { height: '100%' } }>
                <Spinner fetching={ props.fetching }/>
                <Header/>
                <Main>
                    <MovieFormAdd { ...props } />
                </Main>
                <Footer/>
            </Layout>
        </Catcher>
    );
};

export default MoviesFormAdd;
