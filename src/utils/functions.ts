import { EventHandler } from 'react';

export const stopPropagation: EventHandler<any> = (e) => {
    e.stopPropagation();
};

export const preventDefault: EventHandler<any> = (e) => {
    e.preventDefault();
};

export const makeStringUpperCase = (initial: string): string => {
    return initial[0].toUpperCase() + initial.slice(1, initial.length);
};

export const statePropToString = <T>(objWithStateKeyToCleanup: { [key: string]: keyof T}) => {
    return Object.keys(objWithStateKeyToCleanup)[0];
};
