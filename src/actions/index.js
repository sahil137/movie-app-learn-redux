// {
//     type: 'ADD_MOVIES'
// }
// {
//     type: 'DECREASE_COUNT'
// }

// import { movies } from "../reducers";


// Action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITES = 'ADD_FAVOURITE';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FAVOURITE';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';
// Action creaters
export function addMovies(movies){
    return {
        type: ADD_MOVIES,
        movies
    }
}

export function addFavourite(movie){
    return{
        type: ADD_TO_FAVOURITES,
        movie
    }
}

export function removeFavourite(movie){
    return{
        type: REMOVE_FROM_FAVOURITES,
        movie
    }
}

export function setShowFavourites(val){
    return{
        type: SET_SHOW_FAVOURITES,
        val
    }
}

export function handleMovieSearch(movie){
    const url = `http://www.omdbapi.com/?apikey=e6df134c&t=${movie}`;

    return function(dispatch){
        fetch(url)
        .then(response => response.json())
        .then(movie => {
            console.log('movie', movie);
    
            // dispatch an action
            // dispatch ({type: 'ADD_SEARCH_RESULT', movie})
            
        })
    }

}