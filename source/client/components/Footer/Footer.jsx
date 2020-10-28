import React from 'react';
import { Layout } from 'antd';

import './Footer.css';

const Footer = React.memo(() => {

    return (
        <Layout.Footer className='footer' style={ { background: '#000000' }}>
            <p>&copy; Copyright {new Date().getFullYear()}</p>
        </Layout.Footer>
    )
})

export default Footer;
