import React, { ChangeEventHandler } from 'react';
import { GeneralProps } from '../types/interfaces';
import { makeStringUpperCase } from '../utils/functions';

interface ComponentProps extends GeneralProps {
	labelClassName: string;
	inputClassName: string;
	label: string;
	onChangeHandler: ChangeEventHandler<HTMLInputElement>;
	i?: number;
}

export default function FormInput({ labelClassName, inputClassName, componentClassName, label, onChangeHandler, i }: ComponentProps): JSX.Element {
    const labelUpperCased = makeStringUpperCase(label);

    return <div className={componentClassName} key={i}>
        <label className={labelClassName}>{labelUpperCased}</label>
        <input className={inputClassName} onChange={onChangeHandler} />
    </div>;
}