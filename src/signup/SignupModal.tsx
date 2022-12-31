import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import SwitchModal from '../switchAuthType/SwitchAuthTypeForModal';
import { toggleSignupModal } from '../redux/slices/modalSlice';
import DarkScreen from '../hoc/DarkScreen';
import HideComponentOnOutsideClickOrEscapePress from '../hoc/HideComponentOnOutsideClickOrEscapePress';
import Titles from '../titles/Titles';
import SignupForm from './SignupForm';
import { RootState } from '../redux/rootReducer';

export default function SignupModal(): JSX.Element | null {
    const { signupModalIsOpen } = useSelector((state: RootState) => state.modal);

    const componentRef = useRef(null);

    const handleAfterSignup = (): void => {
        // dispatch(fetchUserLoginStateAction());
        // dispatch(fetchCurrentUserAction());
        // dispatch(annualizeSignupResponseAction());
        // dispatch(toggleSignupModalAction());
    };

    return signupModalIsOpen ?
        <HideComponentOnOutsideClickOrEscapePress innerRef={componentRef} hideComponentHandler={toggleSignupModal}>
            <DarkScreen>
                <div className="modal auth-modal signup-modal" onClick={(e) => e.stopPropagation()}>
                    <Titles
                        heading="Yay! Just the last steps."
                        paragraph="Sign up to join us!"
                    />
                    <SignupForm afterSignupHandler={handleAfterSignup} />
                    <SwitchModal
                        switchTo='signup'
                        switchQuestion="Уже есть аккаунт?"
                        switchCallToAction="Войдите"
                    />
                </div>
            </DarkScreen>
        </HideComponentOnOutsideClickOrEscapePress>
        : null;
}
