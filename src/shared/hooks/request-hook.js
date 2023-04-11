import { useState, useCallback, useRef, useEffect } from 'react';

export const useHttpRequest = () => {
    const [error, setError] = useState();

    const activeHttpRequests = useRef([]);

    const sendRequest = useCallback(
        async (url, method = 'GET', body = null, headers = {}) => {
            const httpAbortControl = new AbortController();
            activeHttpRequests.current.push(httpAbortControl);

            try {
              const response = await fetch(
                url,
                {
                  method,
                  headers,
                  body,
                }
              );

              const responseData = await response.json();

              activeHttpRequests.current = activeHttpRequests.current.filter(
                (reqControl) => reqControl !== httpAbortControl);

              if (!response.ok) {
                throw new Error (responseData.message);
              }

              return responseData;
            } catch (err) {
              setError(err.message);
              throw err;
            }
        }, []
    );

    const clearError = () => {
        setError(null);
    };

    useEffect(() => {
        return () => {
            activeHttpRequests.current.forEach((abortcontrol) => abortcontrol.abort());
        };
    }, []);

    return { error, sendRequest, clearError };

}