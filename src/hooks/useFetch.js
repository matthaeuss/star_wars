import {useEffect, useState} from "react";

const useFetch = (url, formatData = (data) => data) => {
    const[response, setResponse] = useState(null);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null)

    const doRequest = async () => {
        console.log('Fetching');

        setLoading(true);
        setError(null);
        setResponse(null);


        const responseData = await fetch(url)
        const data = await responseData.json()
        setResponse(formatData(data));
        setLoading(false);
    }

    useEffect(() => {
        doRequest()
            .catch((error) => {
                setError(error);
            }).finally(() => {
                setLoading(false);
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url, formatData])

    return[response, loading, error]
}

export default useFetch;