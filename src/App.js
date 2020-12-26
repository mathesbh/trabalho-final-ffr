import './App.css';
import { Link } from 'react-router-dom'
import { ApplicationRoutes } from './ApplicationRoutes'

export default function App(){

  return(
    <>
      <nav>
        <ul>
          <li><Link to='/'>Início</Link></li>
          <li><Link to='/filmes'>Filmes</Link></li>
          <li><Link to='/series'>Séries</Link></li>
        </ul>
      </nav>
      <ApplicationRoutes />
    </>
  )
}
