import React from 'react';
import SwitchAuthForPage from '../switchAuthType/SwitchAuthTypeForPage';
import Titles from '../titles/Titles';
import { AppLocation } from '../types/enums';
import LoginForm from './ LoginForm';

export default function Login(): JSX.Element {
    // TODO after user is logged in bring them back to the page which led them to login

    const handleAfterLogin = (): void => {};

    return (
        <div className="page login-page">
            <Titles heading='Login' />
            <LoginForm afterLoginHandler={handleAfterLogin} />
            <SwitchAuthForPage
                question="Have no account yet?"
                action="Signup!"
                navigateTo={AppLocation.SIGNUP}
            />
        </div>
    );
}
