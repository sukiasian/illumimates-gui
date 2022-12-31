import React from 'react';

interface ComponentProps {
	heading: string;
	paragraph?: string;
}

export default function Titles({ heading, paragraph }: ComponentProps): JSX.Element {
    return <section className="titles">
        <h1 className='heading heading--primary titles__heading'>{heading}</h1>
        { paragraph ? <p className='paragraph paragraph--grey titles__heading'>{paragraph}</p> : null }
    </section>;
}