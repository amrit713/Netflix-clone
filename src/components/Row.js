import React, { useEffect, useState } from 'react'
import "./row.css"
import axios from "../axios"

function Row({title,fetchUrl, isLargeRow = false}) {

    const [movies,setMovies] = useState([]);
    const baseURL = "https://image.tmdb.org/t/p/original"

    useEffect(()=>{

        async function fetchData(){
            const {data} = await axios.get(fetchUrl);
            setMovies(data.results)
            console.log(data)
            return data;
        }

        fetchData();
        


    },[fetchUrl])

    console.log(title,movies)

    
    return (
        <div className="row">
            <h2>
                {title}
            </h2>

            <div className="row_posters">
            {

                movies.map(movie =>(

                (isLargeRow && movie.poster_path)||(!isLargeRow && movie.backdrop_path)) &&(

                    <img key={movie.id} className={`row_poster ${isLargeRow && "row_posterLarge"}`} src={`${baseURL}${isLargeRow? movie.poster_path: movie.backdrop_path}`} alt={movie.name} />
                )

                  
                      
                  
                    
                )
            }

            </div>
            
           

        </div>
    )
}

export default Row
