import React, { ChangeEventHandler, useEffect } from 'react';
import FormInput from '../formInput/FormInput';
import { AnyFunction } from '../types/types';
import { preventDefault } from '../utils/functions';

interface ComponentProps {
	afterSignupHandler: AnyFunction;
}

interface Field {
	label: string;
	onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

export default function SignupForm({ afterSignupHandler }: ComponentProps): JSX.Element {
    const fields: Field[] = [
        {
            label: 'email',
            onChangeHandler: () => {}
        },
        {
            label: 'password',
            onChangeHandler: () => {}
        },
        {
            label: 'password',
            onChangeHandler: () => {}
        },
        {
            label: 'password',
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
        />
    );

    useEffect(() => {
        // TODO: if login request is successful, then do afterLoginHandler();
    }, []);

    return <form className='auth-form signup-form' onSubmit={preventDefault}>
        {inputs}

        <button className='button button--primary' type='submit' onClick={() => console.log('1')}>Signup</button>
    </form>;
}