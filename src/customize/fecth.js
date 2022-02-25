import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import moment from 'moment';
const useFecth = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    useEffect(
        () => {
            async function fetchData() {
                try {
                    let res = await axios.get(url);
                    console.log('check res', res);
                    let data = res && res.data ? res.data : [];
                    // if (data && data.length > 0) {
                    //     data.map(item => {
                    //         item.Date = moment(item.Date).format('DD/MM/YYYY');
                    //     })
                    // }
                    setData(data);
                    setIsLoading(false);
                }
                catch (err) {
                    setIsLoading(true);
                    setIsError(true);
                }
            }
                fetchData();
        }, [url]);
    return { data, isLoading, isError };
}

export default useFecth;