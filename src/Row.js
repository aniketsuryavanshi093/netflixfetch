import React , {useState , useEffect} from 'react'
import axios from './axios'
import "./Row.css"
import Youtube from "react-youtube"
const movieTrailer = require( 'movie-trailer' )

const baseurl = "https://image.tmdb.org/t/p/original/"
function Row(props) {

    const [movie, setmovie] = useState([])
    const [trailer, settrailer] = useState("")

    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(props.fetchUrl)
            // console.log(request)
            setmovie(request.data.results)
            return request
        }
        fetchData();
    } , [props.fetchUrl])
    // console.log(movie)
    const  setclickhandler = (movie)=>{
        if (trailer){
            settrailer("")
        }else{
            movieTrailer(movie?.title || "")
            .then(url =>{
                    const urlparams =new URLSearchParams(new URL(url).search)
                    settrailer(urlparams.get('v')) 
            }).catch((err)=>{
                console.log(err)
            })
        }

    }
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    

    return (
        
        <div className = "row">
            <h2>{props.title}</h2>
            <div className = "row_posters">
                {movie.map(movies=>(
                    
                    <img onClick = {() => setclickhandler(movies)} key={movies.id} className = {`row_poster ${props.islargeRow && "row_posterlarge"}`} src={`${baseurl}${props.islargeRow ?  movies.poster_path: movies.backdrop_path}`} alt={movies.title} />
                ))}
            </div>
            {trailer &&<Youtube videoId = {trailer} opts = {opts}></Youtube>}
        </div>
    )
}

export default Row
