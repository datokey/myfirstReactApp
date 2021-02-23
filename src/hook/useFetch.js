import {useState, useEffect} from 'react';

const useFetch = (url) => {

    const [data , setData] = useState(null);
    const [isLoading, setisLoading] = useState(true);
    const [error, setError] = useState(null);

    // 'https://picsum.photos/v2/list?page=1&limit=3'
    
    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('Tidak Bisa Memuat Data');
                }
                return res.json();
            })
            .then(data => {

                setData(data);
                setisLoading(false);
                setError(null);
            })
            .catch(err => {
                setisLoading(false);
                setError(err.message);
                console.log(err.message)
            });
    },);

    return {data, isLoading, error}
}
 
export default useFetch;