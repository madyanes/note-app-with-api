import { Routes, Route, Link } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import './assets/style/App.css'

const App = () => {
  return (
    <>
      <header className="site-header">
        <h1>&lt; NoteApp &#47;&gt;</h1>
        <nav className="site-navigation">
          <ul>
            <li><Link to='/register'>Register</Link></li>
            <li><a href="#">Login</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
