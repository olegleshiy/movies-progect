// Core
import React from 'react';
import { Layout } from 'antd';

// Components
import { Spinner, Footer, Header, Catcher, Main, MoviesTable } from '../components';

const Movies = (props) => {
    return (
        <Catcher error={ props.error }>
            <Layout style={ { height: '100%' } }>
                <Spinner fetching={ props.fetching }/>
                <Header/>
                <Main>
                    <MoviesTable { ...props }/>
                </Main>
                <Footer/>
            </Layout>
        </Catcher>
    );
};

export default Movies;
