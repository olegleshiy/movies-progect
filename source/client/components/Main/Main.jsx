import React from 'react';
import { Layout } from 'antd';

import './Main.css';

const Main = ({children}) => {
    return (
        <Layout.Content style={{ height: '100%', overflowY: 'auto' }}>
            <div className='container'>
                <div className='row'>
                    { children }
                </div>
            </div>
        </Layout.Content>
    );
}

export default Main;
