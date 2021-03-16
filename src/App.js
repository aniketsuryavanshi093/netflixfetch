// import logo from './logo.svg';
import './App.css';
import React from 'react'
import Row from './Row'
import Request from "./Request";
import Banner from "./Banner"
import  Nav  from "./Nav";
function App() {
  return (
    <div className="App">
      {/* nav */}
      <Nav></Nav>
      {/* header */}
      <Banner/>
    
      <Row title = "NETFLIX ORIGINALS" fetchUrl = {Request.fetchNetflixMovies} islargeRow/>
      <Row title = "Trending Now" fetchUrl = {Request.fetchTrending}/>
      <Row title = "Top Rated" fetchUrl = {Request.fetchtopratedMovies}/>
      <Row title = "Action Movies" fetchUrl = {Request.fetchActionMovies}/>
      <Row title = "Comedy Movies" fetchUrl = {Request.fetchComedyMovies}/>
      <Row title = "Horror Movies" fetchUrl = {Request.fetchHorrorMovies}/>
      <Row title = "Romance Movies" fetchUrl = {Request.fetchRomanceMovies}/>
      <Row title = "Dcoumentry " fetchUrl = {Request.fetchdocumentryMovies}/>

      
    </div>
  );
}
// https://api.themoviedb.org/3/movie/550?api_key=20182bb18ccc9276f836351538c9fdaf
// api key 20182bb18ccc9276f836351538c9fdaf
export default App;
