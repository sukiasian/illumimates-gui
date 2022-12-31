import React, { MouseEventHandler } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import { toggleLoginModal, toggleSignupModal } from '../redux/slices/modalSlice';
import SignupModal from '../signup/SignupModal';

export default function NavbarSignup(): JSX.Element {
    const { loginModalIsOpen } = useSelector((state:RootState) => state.modal);

    const dispatch = useDispatch();

    const toggleModal: MouseEventHandler<HTMLButtonElement> = () => {
        if (loginModalIsOpen) {
            dispatch(toggleLoginModal());
        }

        dispatch(toggleSignupModal());
    };

    return (
        <>
            <li className='navbar__signup'>
                <button onClick={toggleModal} className="button button_primary">
					Signup
                </button>
            </li>

            <SignupModal />
        </>
    );
}