import React from 'react';
import { Link } from 'react-router-dom';
import { AppLocation } from '../types/enums';

export default function StartCampaign(): JSX.Element {
    return <li className='navbar__start-campaign'>
        <Link to={AppLocation.START_CAMPAIGN} />
    </li>;
}