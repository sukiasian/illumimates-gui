import React, { ChangeEventHandler, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../formInput/FormInput';
import { AppLocation } from '../types/enums';
import { AnyFunction } from '../types/types';
import { preventDefault } from '../utils/functions';

interface ComponentProps {
	afterLoginHandler: AnyFunction;
}

interface Field {
	label: string;
	onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

export default function LoginForm({ afterLoginHandler }: ComponentProps): JSX.Element {
    const fields: Field[] = [
        {
            label: 'email',
            onChangeHandler: () => {}
        },
        {
            label: 'password',
            onChangeHandler: () => {}
        }
    ];

    const inputs = fields.map((field, i) =>
        <FormInput
            componentClassName={`auth-form__field auth-form__field--${field.label}`}
            labelClassName='auth-form__label'
            inputClassName='auth-form__input'
            label={field.label}
            onChangeHandler={(e) => {}} key={i}
        />);

    useEffect(() => {
        // TODO: if login request is successful, then do afterLoginHandler();
    }, []);

    return <form className='auth-form login-form' onSubmit={preventDefault}>
        {inputs}
        <Link className='login-form__password-recovery' to={AppLocation.RECOVERY}>Password recovery</Link>
        <button className='button button--primary' type='submit' onClick={() => console.log('1')}>Login</button>
    </form>;
}