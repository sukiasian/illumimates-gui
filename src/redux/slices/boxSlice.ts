import { createSlice } from '@reduxjs/toolkit';

export interface BoxState {
	categoriesBoxIsOpen?: boolean;
}

export const boxState: BoxState = {};

const boxSlice = createSlice({
    name: 'box',
    initialState: boxState,
    reducers: {
        toggleCategoriesBox: (state) => {
            state.categoriesBoxIsOpen = !state.categoriesBoxIsOpen;
        }
    }
});

export const { toggleCategoriesBox } = boxSlice.actions;

export const { reducer: boxReducer } = boxSlice;
