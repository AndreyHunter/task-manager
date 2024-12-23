export const generateError = (err: unknown) => {
    if (err instanceof Error) {
        console.log('error:', err.message);
    } else {
        throw new Error(`unexpected error: ${err}`);
    }
};
