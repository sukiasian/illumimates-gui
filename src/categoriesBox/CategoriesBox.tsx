import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import { toggleCategoriesBox } from '../redux/slices/boxSlice';

export default function CategoriesBox(): JSX.Element | null {
    const { categoriesBoxIsOpen } = useSelector((state: RootState) => state.box);

    const categories = ['hello', 'world'].map((category: string, i) => {
        return <li className='list-item categories-box__item' onClick={() => pickCategory(category)} key={i} >
            <button className='button button--text'>{category}</button>
        </li>;
    });

    const pickCategory = (category: string): void => {
        // localStorage.setItem('category', category); 
    };

    useEffect(() => {
        return () => {
            toggleCategoriesBox();
        };
    }, []);

    return categoriesBoxIsOpen ? <div className="box categories-box">
        <ul className='list categories-box__list'>
            {categories}
        </ul>
    </div> : null;
}