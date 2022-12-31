import React, { MouseEventHandler } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginModal from '../login/LoginModal';
import { RootState } from '../redux/rootReducer';
import { toggleLoginModal, toggleSignupModal } from '../redux/slices/modalSlice';

export default function NavbarLogin(): JSX.Element {
    const { signupModalIsOpen } = useSelector((state: RootState) => state.modal);
    const dispatch = useDispatch();

    const toggleModal: MouseEventHandler<HTMLButtonElement> = () => {
        if (signupModalIsOpen) {
            dispatch(toggleSignupModal());
        }

        dispatch(toggleLoginModal());
    };

    return (
        <>
            <li className='navbar__login'>
                <button className="button button--primary" onClick={toggleModal}>
					Login
                </button>
            </li>

            <LoginModal />
        </>
    );
}