import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const res = await fetch(url);

                console.log(res);

                if(!res.ok){
                    setError('failed to fetch');
                }
                const result = await res.json();
                
                setData(result.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);
    
    return{
        data, error, loading,
    };
};

export default useFetch;