import { createSlice } from '@reduxjs/toolkit';

export interface ModalState {
	loginModalIsOpen?: boolean;
	signupModalIsOpen?: boolean;
}

export const modalState: ModalState = {};

const modalSlice = createSlice({
    name: 'modal',
    initialState: modalState,
    reducers: {
        toggleLoginModal: (state) => {
            state.loginModalIsOpen = !state.loginModalIsOpen;
        },
        toggleSignupModal: (state) => {
            state.signupModalIsOpen = !state.signupModalIsOpen;
        }
    }
});

export const { toggleLoginModal, toggleSignupModal } = modalSlice.actions;

export const { reducer: modalReducer } = modalSlice;
