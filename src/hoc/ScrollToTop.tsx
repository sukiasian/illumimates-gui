import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HOC } from '../types/interfaces';

export default function ScrollToTop({ children }: HOC): JSX.Element | null {
    const blackList: string[] = [];
    const { pathname } = useLocation();

    const isBlackListed = (): boolean => {
        for (const listElement of blackList) {
            if (pathname.includes(listElement)) {
                return true;
            }
        }

        return false;
    };
    const scrollToTop = (): void => {
        if (!isBlackListed()) {
            window.scrollTo(0, 0);
        }
    };

    useEffect(scrollToTop, [pathname]);

    return children || null;
}
