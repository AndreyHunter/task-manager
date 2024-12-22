type TypeDebounceCallback = (...rest: any[]) => void;

export const debounce = (func: TypeDebounceCallback, delay: number) => {
    let timeoutId: ReturnType<typeof setTimeout>;

    return (...rest: any[]) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            func(...rest);
        }, delay);
    };
};
