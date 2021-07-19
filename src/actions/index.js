// {
//     type: 'ADD_MOVIES'
// }
// {
//     type: 'DECREASE_COUNT'
// }


// Action types
export const ADD_MOVIES = 'ADD_MOVIES';

// Action creaters
export function addMovies(movies){
    return {
        type: ADD_MOVIES,
        movies
    }
}