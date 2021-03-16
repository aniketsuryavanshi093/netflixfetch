const apiKey = '20182bb18ccc9276f836351538c9fdaf'
const requests = {
    fetchTrending: `/trending/all/day?api_key=${apiKey}`,
    fetchActionMovies: `/discover/movie?api_key=${apiKey}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${apiKey}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${apiKey}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${apiKey}&with_genres=10749`,
    fetchdocumentryMovies: `/discover/movie?api_key=${apiKey}&with_genres=99`,
    fetchNetflixMovies: `/discover/movie?api_key=${apiKey}&with_networks=213`,
    fetchtopratedMovies: `/movie/top_rated?api_key=${apiKey}&language=en-US`,


}
export default requests