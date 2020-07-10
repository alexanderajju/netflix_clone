import React, { useState,useEffect } from 'react'
import axios from './axios'


function Row({ title, fetchUrl }) {

    const [movies, setMovies ] = useState([]);

    const base_url ="https://images.tmdb.org/t/p/original";


    useEffect(() => {

        async function fetchData() {
             const request = await axios.get(fetchUrl)
            //  console.log('====================================');
            //  console.log(request);
            //  console.log('====================================');
             setMovies(request.data.results);
             return request
        }
        fetchData();

    },[fetchUrl])

    console.log(movies)

    return (
        <div className="row" >
            <h2>{title}</h2>

            <div className="row__posters" >
                {movies.map(movie => (
                    <img src={`${base_url}${movie.poster_path}`} alt={movie.name}/>
                ))}
            </div>
            
        </div>
    )
}

export default Row
