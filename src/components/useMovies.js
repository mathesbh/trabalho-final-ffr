import { useEffect, useState } from 'react'
import { ApiService } from '../api/ApiService'

export const useMovies = () => {
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

    return movies
}