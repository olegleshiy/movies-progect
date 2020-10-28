import React from 'react';
import { NavLink } from 'react-router-dom';

import { book } from '../../navigation/book';
import './Header.css';

const Header = React.memo(() => {
    return (
        <header className={'header'}>
            <ul>
                <li>
                    <NavLink to={ book.movies }>Movies</NavLink>
                </li>
                <li>
                    <NavLink to={ book.movies_add }>Form</NavLink>
                </li>
            </ul>
        </header>
    )
})

export default Header;
