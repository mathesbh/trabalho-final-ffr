export const ADD_FAVORITE = 'ADD_FAVORITE'
export const DEL_FAVORITE = 'DEL_FAVORITE'

export const favoriteMovie = (favorite) => ({
    type: ADD_FAVORITE,
    playload: favorite
})

export const delFavorite = (title) => ({
    type: DEL_FAVORITE,
    title
})