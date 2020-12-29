import React from 'react'
import { Link } from 'react-router-dom'
import { useMovies } from './useMovies'

export const MovieList = () => {

    const movies = useMovies()

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="m-4 text-center bg-light text-muted">Filmes Populares</h2>
                    <div className="row">
                        {movies.map((m) => (
                            <div key={m.id} className="col-lg-3">
                                <div className="card">
                                    <img src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`} alt="" className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">{m.title}</h5>
                                        <p className="card-text">Lançamento: {m.release_date}</p>
                                        <Link className="btn btn-outline-primary btn-sm" to={`/filme/${m.id}`}>Detalhes</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}




