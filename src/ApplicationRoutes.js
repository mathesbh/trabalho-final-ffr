import React from 'react'
import { Route } from 'react-router-dom'
import { Home, Movies, Series } from './components'

export const ApplicationRoutes = () => (
    <>
        <Route path="/" exact component={Home} />
        <Route path="/filmes" exact component={Movies} />
        <Route path="/series" exact component={Series} />
    </>
)