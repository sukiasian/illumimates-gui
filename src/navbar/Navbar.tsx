import React from 'react';
import SearchField from '../searchField/SearchField';
import LogoLink from './NavbarLogo';
import CategoriesButton from './NavbarCategories';
import StartCampaign from './NavbarStartCampaign';
import NavbarLogin from './NavbarLogin';
import NavbarSignup from './NavbarSignup';

export default function Navbar(): JSX.Element {
    return (
        <header className="navbar">
            <ul className='navbar__elements'>
                <CategoriesButton />
                <SearchField />
                <LogoLink />
                <StartCampaign />
                <NavbarLogin />
                <NavbarSignup />
            </ul>
        </header>
    );
}