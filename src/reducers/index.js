import { ADD_MOVIES, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES } from "../actions";

const initalMovieState = {
    list: [],
    favourites: [],
    showFavourites: false
}

export default function movies (state = initalMovieState, action){
    // if (action.type === ADD_MOVIES){
    //     return {
    //         ...state,
    //         list: action.movies
    //     }
    // }
    // In react if else is avoided, switch case is used instead

    switch(action.type){
        case ADD_MOVIES:
            return{
                ...state,
                list: action.movies
            }
        case ADD_TO_FAVOURITES:
            return{
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        case REMOVE_FROM_FAVOURITES:
            const newArray = state.favourites.filter(
                movie => movie.Title !== action.movie.Title
            );
            return{
                ...state,
                favourites: newArray
            }
        case SET_SHOW_FAVOURITES:
        return{
            ...state,
            showFavourites: action.val
        }
        default:
            return state;
        
    }
}

