import { useRef, useCallback } from 'react';

type TypeDebounceCallback = (...rest: any[]) => void;

export const useDebounce = (callback: TypeDebounceCallback, delay: number) => {
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    return useCallback(
        (...args: any[]) => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }

            timerRef.current = setTimeout(() => {
                callback(...args);
            }, delay);
        },
        [callback, delay],
    );
};
