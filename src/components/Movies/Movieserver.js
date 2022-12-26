const API_URL = "http://127.0.0.1:8000/api/movies/"

export const listMovies = async ()=>{
    return await fetch(API_URL);
}