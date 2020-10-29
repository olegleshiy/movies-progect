import React from 'react';
import { Layout } from 'antd';

import './Footer.css';
import { currentYear } from '../../utils/helpers';

const Footer = React.memo(() => {

    return (
        <Layout.Footer className='footer' style={ { background: '#000000' }}>
            <p>&copy; Copyright {currentYear()}</p>
        </Layout.Footer>
    )
})

export default Footer;
