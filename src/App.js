import './App.css';
import { Link } from 'react-router-dom'
import { ApplicationRoutes } from './ApplicationRoutes'

export default function App(){

  return(
    <>
      <nav>
        <ul>
          <li><Link to='/'>Início</Link></li>
          <li>Filmes</li>
          <li>Séries</li>
        </ul>
      </nav>
      <ApplicationRoutes />
    </>
  )
}
