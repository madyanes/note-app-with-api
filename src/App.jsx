import { Routes, Route, Link } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import Navigation from './components/Navigation'
import './assets/style/App.css'

const App = () => {
  return (
    <>
      <header className="site-header">
        <Link to='/'>
          <h1>&lt;NoteApp &#47;&gt;</h1>
        </Link>
        <Navigation />
      </header>

      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
