import { useState, useEffect } from "react";

const CONTEXT_KEY = 'e3b3e05c0bd8349a0';
const API_KEY = 'AIzaSyBUB50lASpxgoLK7v0yHVTjgpQpA10NV04';

export const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(response => response.json())
            .then(result => {
                setData(result) //put the value of "result" into "data"
            })
        }

        fetchData();
    }, [term])

    return { data }
};