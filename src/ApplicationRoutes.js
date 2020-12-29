import React from 'react'
import { Route } from 'react-router-dom'
import { Home } from './components/Home'
import { MovieDetails } from './components/MovieDetails'
import { MovieList } from './components/MovieList'
import { FavoriteList } from './components/FavoriteList'

export const ApplicationRoutes = () => (
    <>
        <Route path="/" exact component={Home} />
        <Route path="/filmes" component={MovieList} />
        <Route path="/filme/:id" component={MovieDetails} />
        <Route path="/listaFavoritos" component={FavoriteList} />
    </>
)