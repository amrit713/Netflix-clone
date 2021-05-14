import React,{useState,useEffect} from 'react'
import "./banner.css"
import axios from "../axios"
import requests from "../Request"

function Banner() {

    const [movie,setMovie] = useState([])


    useEffect(()=>{
        const fetchData =async () =>{
            const request = await axios.get(requests.fetchNetflixOriginals)
            

            setMovie(
                request.data.results[Math.floor(Math.random() * request.data.results.length -1)]
            )
        }
        fetchData()
        

    },[])


    console.log(movie)

    const truncate = (string,n)=>{
        return string?.length > n? string.substr(0, n-1) +" ...":string;

    }

    return (
        <header className="banner" style={{
            backgroundSize:"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
            backgroundPosition:"center center"
        }}>

        <div className="banner_contents">
            <h1 className="banner_title">
                {movie?.name}
            </h1>
            <div className="banner_btns">
            <button className="banner_btn" >Play</button>
            <button className="banner_btn">My List</button>
            </div>
            <h1 className="banner_description">
            {
                truncate(movie?.overview,198)
            }
                
            </h1>
        </div>
       
            
        < div className="banner--fadeButtom" /> 
        </header>
    )
}

export default Banner
