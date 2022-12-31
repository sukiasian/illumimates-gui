import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleLoginModal, toggleSignupModal } from '../redux/slices/modalSlice';

interface ComponentProps {
	switchTo: 'login' | 'signup';
    switchQuestion: string;
    switchCallToAction: string;
}

export default function SwitchAuthTypeForModal({
    switchTo,
    switchQuestion,
    switchCallToAction
}: ComponentProps): JSX.Element {
    const dispatch = useDispatch();

    const switchModals = (): void => {
        dispatch(toggleLoginModal());
        dispatch(toggleSignupModal());
    };

    return (
        <div className={`auth-modal__counter-action ${switchTo}-modal__counter-action}`}>
            <p className="paragraph">
                {switchQuestion}{' '}
                <span className={`${switchTo}-modal__call-to-action`} onClick={switchModals}>
                    {switchCallToAction}
                </span>
            </p>
        </div>
    );
}
