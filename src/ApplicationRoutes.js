import React from 'react'
import { Route } from 'react-router-dom'
import { Home } from './components/Home'
import { MovieDetails } from './components/MovieDetails'
import Movies from './components/Movies'
import { Series } from './components/Series'
import { FavoriteList } from './components/FavoriteList'

export const ApplicationRoutes = () => (
    <>
        <Route path="/" exact component={Home} />
        <Route path="/filmes" component={Movies} />
        <Route path="/filme/:id" component={MovieDetails} />
        <Route path="/series" component={Series} />
        <Route path="/listaFavoritos" component={FavoriteList} />
    </>
)