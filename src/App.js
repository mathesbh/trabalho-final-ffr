import { Link } from 'react-router-dom'
import { ApplicationRoutes } from './ApplicationRoutes'

export default function App() {

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link className="nav-brand" to='/'><img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="Logo TMDB" width="80" height="80"/></Link>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><Link className="nav-link" to='/filmes'>Filmes</Link></li>
            <li className="nav-item"><Link className="nav-link" to='/listaFavoritos'>Meus Favoritos</Link></li>
          </ul>
        </div>
      </nav>
      <ApplicationRoutes />
    </>
  )
}
