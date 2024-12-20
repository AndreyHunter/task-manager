import React, { useState, useEffect } from 'react';
import axios from '../axios';

interface UseDataState<T> {
    data: T | null;
    setData: React.Dispatch<React.SetStateAction<T | null>>;
    isLoading: boolean;
    error: string | null;
}

export const useData = <T>(url: string): UseDataState<T> => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let ignore = false;
        (async () => {
            try {
                setIsLoading(true);
                const res = await axios.get(url);
                if (!ignore) {
                    setData(res.data);
                }
            } catch (err) {
                if (err instanceof Error) {
                    console.error(err.message);
                    setError(err.message);
                } else {
                    console.error('Unknown error', err);
                    setError('An unknown error occurred');
                }
            } finally {
                setIsLoading(false);
            }
        })();

        return () => {
            ignore = true;
        };
    }, [url]);

    return { data, setData, isLoading, error };
};
