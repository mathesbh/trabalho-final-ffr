import React from 'react'
import { Route } from 'react-router-dom'
import { Home } from './components/Home'
import { MovieDetails } from './components/MovieDetails'
import Movies from './components/Movies'
import { Series } from './components/Series'

export const ApplicationRoutes = () => (
    <>
        <Route path="/" exact component={Home} />
        <Route path="/filmes" component={Movies} />
        <Route path="/filme" component={MovieDetails} />
        <Route path="/series" component={Series} />
    </>
)