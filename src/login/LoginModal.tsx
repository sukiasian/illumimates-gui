import { useSelector } from 'react-redux';
import React, { useRef } from 'react';
import DarkScreen from '../hoc/DarkScreen';
import HideComponentOnOutsideClickOrEscapePress from '../hoc/HideComponentOnOutsideClickOrEscapePress';
import { stopPropagation } from '../utils/functions';
import { toggleLoginModal } from '../redux/slices/modalSlice';
import SwitchAuthTypeForModal from '../switchAuthType/SwitchAuthTypeForModal';
import LoginForm from './ LoginForm';
import Titles from '../titles/Titles';
import { RootState } from '../redux/rootReducer';
import { store } from '../redux/store';

export default function LoginModal() {
    const { loginModalIsOpen } = useSelector((state: RootState) => state.modal);
    const componentRef = useRef(null);

    const handleAfterLogin = (): void => {
        toggleLoginModal();

        // annualizeLoginResponseAction();
        // fetchUserLoginStateAction();
    };
    console.log(store.getState());

    // NOTEe WHEN you navigate to another url the modal should be closed - even if we make user be unable to move through the interface he still may navigate through url
    return loginModalIsOpen ?
        <HideComponentOnOutsideClickOrEscapePress innerRef={componentRef} hideComponentHandler={() => toggleLoginModal()}>
            <DarkScreen>
                <div className="modal auth-modal login-modal" onClick={stopPropagation} ref={componentRef}>
                    <Titles
                        heading="Happy to see you!"
                        paragraph="Login to continue."
                    />
                    <LoginForm afterLoginHandler={handleAfterLogin} />
                    <SwitchAuthTypeForModal
                        switchTo="login"
                        switchQuestion="Have no account?"
                        switchCallToAction="Sign up."
                    />
                </div>
            </DarkScreen>
        </HideComponentOnOutsideClickOrEscapePress>
        : null;
}
