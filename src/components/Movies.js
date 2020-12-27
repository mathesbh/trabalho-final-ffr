import React, { useEffect, useState } from 'react'
import { ApiService } from '../api/ApiService'
import { MovieList } from './MovieList'

export default function Movies() {
    const [movies, setMovies] = useState([])

    const getPopularMovies = async () => {
        const {
            data: { results }
        } = await ApiService.getPopularMovies()

        setMovies(results)
    }
    useEffect(() => {
        getPopularMovies()
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="m-4 text-center bg-light text-muted">Filmes Populares</h2>
                    <MovieList movies={movies} />
                </div>
            </div>
        </div>
    )
}