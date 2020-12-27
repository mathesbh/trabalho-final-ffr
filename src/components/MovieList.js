import React from 'react'
import { Link } from 'react-router-dom'

export const MovieList = (props) => (
    <div className="row">
        {props.movies.map((m) => (
            <>
                <div className="col-lg-3">
                    <div className="card">
                    <img src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`} alt="" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{m.title}</h5>
                            <p className="card-text">Lançamento: {m.release_date}</p>
                            <Link className="btn btn-outline-primary btn-sm" to={`/filme/${m.id}`}>Detalhes</Link>
                        </div>
                    </div>
                </div>
            </>
        ))}
    </div>
)