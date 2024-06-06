const API_KEY=process.env.REACT_APP_API_KEY;

const requests ={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchAdventureMovies:`/discover/movie?api_key=${API_KEY}&with_genres=12`,
    fetchAnimationMovies:`/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,

   
}