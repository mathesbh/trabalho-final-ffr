import React from 'react'
import { useSelector } from 'react-redux'
import { ButtonRemove } from './ButtonRemove'

export const FavoriteList = () => {
    const favorites = useSelector(state => state.favorite.favorite)
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <h2 className="m-4 text-center bg-light text-muted">Meus Favoritos</h2>
                    <ul className="list-group">
                        {favorites.map((movie, index) => (
                            <div key={index} className="list-group-item text-center">
                                <li className="list-group-item text-muted bg-light">{movie}</li>
                                <ButtonRemove movie={movie} />
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}