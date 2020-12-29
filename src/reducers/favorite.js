import { ADD_FAVORITE, DEL_FAVORITE } from '../actions/favoriteActions'

const initialState = {
    favorite: []
}

export const favorite = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAVORITE:
            return{
                ...state,
                favorite: state.favorite.concat(action.playload)
            }
        case DEL_FAVORITE: 
            const title = action.title
            let indice = state.favorite.indexOf(title)
            while(indice >= 0){
                state.favorite.splice(indice, 1)
                indice = state.favorite.indexOf(title)
            }
            return {
                ...state,
                favorite: state.favorite
            } 
            
        default:
            return state
    }
}