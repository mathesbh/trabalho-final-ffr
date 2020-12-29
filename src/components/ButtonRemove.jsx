import React from 'react'
import { useDispatch } from 'react-redux'
import { delFavorite } from '../actions/favoriteActions'

export const ButtonRemove = ({ movie }) => {
    const dispatch = useDispatch()
    return (
        <button onClick={() => dispatch(delFavorite(movie))} className="btn btn-outline-danger btn-sm mt-2">Remover</button>
    )
}