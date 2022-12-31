import React, { MouseEventHandler } from 'react';
import { toggleCategoriesBox } from '../redux/slices/boxSlice';
import CategoriesBox from '../categoriesBox/CategoriesBox';
import { useDispatch } from 'react-redux';

export default function Categories(): JSX.Element {
    const dispatch = useDispatch();

    const toggleBox: MouseEventHandler<HTMLButtonElement> = () => {
        dispatch(toggleCategoriesBox());
    };

    return <>
        <li className='navbar__categories'>
            <button className='button button--text-only' onClick={toggleBox}>Pick category</button>
        </li>

        <CategoriesBox />
    </>;
}