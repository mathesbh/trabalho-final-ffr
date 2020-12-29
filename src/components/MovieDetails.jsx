import React, { useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { ApiService } from '../api/ApiService'
import { FavoriteButton } from './FavoriteButton'
import { FavoriteInfo } from './FavoriteInfo'

export const MovieDetails = (props) => {
    const [movie, setMovie] = useState({ data: [] })

    const reqMovie = async () => {
        const movieResult = await ApiService.getMovieDetails(props.match.params.id)
        setMovie(movieResult)
    }
    useEffect(() => {
        reqMovie()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const favorites = useSelector(state => state.favorite.favorite)

    const hasFavorite = favorites.filter(m => m === movie.data.title).length !== 0

    return (
        <div className="container">
            <div className="row m-4">
                <div className="col-md-4">
                    <img className="img-fluid" src={`https://image.tmdb.org/t/p/w500/${movie.data.poster_path}`} alt=""/>
                </div>
                <div className="col-md-8">
                    <h2>{movie.data.title} | {movie.data.release_date}</h2>
                    <h5>Sinopse:</h5>
                    <h5>{movie.data.overview}</h5>
                    <p><strong>Votos: {movie.data.vote_average}</strong></p>
                    <span>
                        { hasFavorite ? <FavoriteInfo /> : <FavoriteButton movie={movie} /> }
                    </span>
                </div>
            </div>
        </div>
    )
}