import './App.css';
import { Link } from 'react-router-dom'
import { ApplicationRoutes } from './ApplicationRoutes'

export default function App() {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="nav-brand" to='/'><img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="Logo TMDB" width="80" height="80"/></Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><Link className="nav-link" to='/filmes'>Filmes</Link></li>
            <li className="nav-item"><Link className="nav-link" to='/series'>Séries</Link></li>
          </ul>
        </div>
      </nav>
      <ApplicationRoutes />
    </>
  )
}
