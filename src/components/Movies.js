import React, { useEffect, useState } from 'react'
import { ApiService } from '../api/ApiService'
import { MovieList } from './MovieList'
import './Movies.css'

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
                    <h2>Filmes populares</h2>
                    <MovieList movies={movies} />
                </div>
            </div>
        </div>
    )
}