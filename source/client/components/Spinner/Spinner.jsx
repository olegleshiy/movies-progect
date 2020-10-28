// Core
import React from 'react';

// Instruments
import './Spinner.css';

const Spinner = (props) => {

    return props.fetching ? <div className = 'spinner' /> : null;
}

export default Spinner;
