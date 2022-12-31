import React, { ChangeEventHandler } from 'react';

export default function SearchField(): JSX.Element {
    const search: ChangeEventHandler<HTMLInputElement> = (e) => {

    };

    return <input onChange={search} placeholder='Search...' />;
}