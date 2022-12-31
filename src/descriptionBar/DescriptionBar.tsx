import React from 'react';
import { Link } from 'react-router-dom';
import { AppLocation } from '../types/enums';

export default function DescriptionBar(): JSX.Element {
    return <section className='desc-bar'>
        <h2 className='heading heading--secondary desc-bar__heading'>A place where ideas find their destination.</h2>
        <Link className='desc-bar__link' to={AppLocation.HOW_IT_WORKS}></Link>
    </section>;
}