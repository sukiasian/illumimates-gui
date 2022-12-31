import React, { useState } from 'react';

interface CampaignType {
	name: string;
	src: string;
	description: string;
}

export default function CampaignTypePicker(): JSX.Element {
    // NOTE: fetch from server

    const [campaignTypes, setCampaignTypes] = useState(null);

    return <section className='campaign-type-picker'>
        <div className='campaign-types'>
            {/* 3  types  in separate divs */}
        </div>
        <p className='paragraph paragraph--light'>{/* description */}</p>
    </section>;
}