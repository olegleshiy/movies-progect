// Core
import React from 'react';

// Instruments
import './Catcher.css';

const Catcher = ({ children, error }) => {
    if (error) {
        return (
            <section className='catcher'>
                <span>A mysterious 👽 &nbsp;error 📛 &nbsp;occured.</span>
                <p>
                    Our space 🛰 &nbsp;engineers strike team 👩🏼‍🚀 👨🏼‍🚀 &nbsp;is
                    already working 🚀 &nbsp;in order to fix that for you!
                </p>
            </section>
        );
    }

    return (children);
}

export default Catcher;
