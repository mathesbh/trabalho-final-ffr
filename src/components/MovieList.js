import React from 'react'
import { Link } from 'react-router-dom'

export const MovieList = (props) => (
    <div className="row">
        {props.movies.map((m) => (
            <>
                <div className="col-md-3">
                    <div className="card">
                        <img src="" alt="" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{m.title}</h5>
                            <p className="card-text">Lançamento: {m.release_date}</p>
                            <Link className="btn btn-outline-primary btn-sm" to="/filme">Detalhes</Link>
                        </div>
                    </div>
                </div>
            </>
        ))}
    </div>
)