import React, { useEffect, useState } from 'react'
import requests from './requests';
import axios from './axios';

function Banner() {


    const [movie , setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals)
          setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length -1 )
            ]
          )
            

        }
       fetchData();
    }, [])

console.log(movie)

    return (
        <div>
            <h1>Banner</h1>
        </div>
    )
}

export default Banner
