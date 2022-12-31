import React from 'react';
import { Link } from 'react-router-dom';
import { AppLocation } from '../types/enums';

interface ComponentProps {
	question: string;
	action: string;
    navigateTo: AppLocation;
}

export default function SwitchAuthForPage({ question, action, navigateTo }: ComponentProps): JSX.Element {
    return (
        <div className='switch-type-of-auth'>
            <p className="paragraph paragraph--black">
                {question}{' '}
                <span className="auth-action">
                    <Link to={navigateTo}>{action}</Link>
                </span>
            </p>
        </div>
    );
}
