import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo(): JSX.Element {
    return <li className='navbar__logo'>
        <Link to={'/'} className='link'>
            <object id="logo" data="../assets/illumimates.svg" type="image/svg+xml"></object>
        </Link>
    </li>;
}