import { RefObject, useEffect } from 'react';
import { EventKey } from '../types/enums';
import { HOC } from '../types/interfaces';
import { AnyFunction } from '../types/types';

interface ComponentProps extends HOC {
    innerRef: RefObject<HTMLDivElement>;
    children: JSX.Element;
    hideComponentHandler: AnyFunction;
}

export default function HideComponentOnOutsideClickOrEscapePress(props: ComponentProps): JSX.Element {
    const { innerRef, hideComponentHandler } = props;

    const closeComponentOnOutsideClick = (e: MouseEvent): void => {
        if (e.target !== innerRef.current) {
            hideComponentHandler();
        }
    };
    const closeComponentOnEscapePress = (e: KeyboardEvent): void => {
        if (e.key === EventKey.ESCAPE) {
            hideComponentHandler();
        }
    };
    const applyEventListeners = (): (() => void) => {
        document.addEventListener('click', closeComponentOnOutsideClick);
        document.addEventListener('keydown', closeComponentOnEscapePress);

        return () => {
            document.removeEventListener('click', closeComponentOnOutsideClick);
            document.removeEventListener('keydown', closeComponentOnEscapePress);
        };
    };

    useEffect(applyEventListeners);

    return props.children;
}
