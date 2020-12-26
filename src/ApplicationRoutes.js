import React from 'react'
import { Route } from 'react-router-dom'
import { Home, Movies } from './components'

export const ApplicationRoutes = () => (
    <>
        <Route path="/" exact component={Home} />
        <Route path="/filmes" exact component={Movies} />
    </>
)