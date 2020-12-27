import React, { useState, useEffect} from 'react'
import { ApiService } from '../api/ApiService'

export const MovieDetails = (props) => {
    const [movie, setMovie] = useState({ data: [] })

    const reqMovie = async () => {
        const movieResult = await ApiService.getMovieDetails(props.match.params.id)
        setMovie(movieResult)
    }
    useEffect(() => {
        reqMovie()
    }, [])

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
                    <button className="btn btn-outline-success">Favoritar</button>
                </div>
            </div>
        </div>
    )
}