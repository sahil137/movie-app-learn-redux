import { ADD_MOVIES, ADD_FAVOURITE } from "../actions";

const initalMovieState = {
    list: [],
    favourites: []
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
        case ADD_FAVOURITE:
            return{
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        default:
            return state;
        
    }
}

