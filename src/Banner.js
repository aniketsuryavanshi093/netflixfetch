import React , {useState , useEffect} from 'react'
import axios from './axios'
import Request from "./Request";
import "./Banner.css"
import Youtube from "react-youtube"
const movieTrailer = require( 'movie-trailer' )
function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

function Banner() {
    const [movie, setmovie] = useState([])
    const [trailer, settrailer] = useState("")

    useEffect(()=>{async function fetchData(){
        const request = axios.get(Request.fetchTrending);
        // console.log((await request).data.results[Math.floor(Math.random()*(await request).data.results.length-1)])
        setmovie((await request).data.results[Math.floor(Math.random()*(await request).data.results.length-1)])
        return request
    
    }
    
    fetchData();
    } , [])
    const  setclickhandler = (movie)=>{
        if (trailer){
            settrailer("")
        }else{
            movieTrailer(movie || "")
            .then(url =>{
                    const urlparams =new URLSearchParams(new URL(url).search)
                    settrailer(urlparams.get('v')) 
            }).catch((err)=>{
                console.log(err)
            })
        }

    }
    const opts = {
        height: '190',
        
        width: '50%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    // console.log(movie)
    return (
        <header className = "banner"
        style={{
            backgroundSize : "cover",
            backgroundImage : `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
            backgroundPosition : "center center",
        }}
        >
            <div className="banner_contents">

                <h1 className= "banner_title">
                    {movie?.name || movie?.title || movie?.original_name}
                </h1>
                <div className="banner_buttons">
                    <button onClick = {()=>setclickhandler(movie?.title)} className = "banner_button">
                        play
                    </button>
                        <button className = "banner_button">
                            My List
                        </button>
                </div>
                <h1 className="banner_desc">{truncateString(String(movie?.overview) , 150)}</h1>
                <div className ="banner_fade"></div></div>
                {trailer &&<Youtube videoId = {trailer} opts = {opts}></Youtube>}
            
            

        </header>
    )
}

export default Banner
