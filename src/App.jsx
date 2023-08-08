import { useEffect, useMemo, useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { getUserLogged, putAccessToken } from './utils/network-data'
import AuthUserContext from './contexts/AuthUserContext'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import Navigation from './components/Navigation'
import './assets/style/App.css'

const App = () => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    console.log(user)
  }, [user])

  const authUserContextValue = useMemo(() => {
    return {
      user,
    }
  }, [user])

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken)
    const { data } = await getUserLogged()
    setUser(() => data)
    navigate('/')
  }

  return (
    <AuthUserContext.Provider value={authUserContextValue}>
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
          <Route path='/login' element={<LoginPage loginSuccess={onLoginSuccess} />} />
        </Routes>
      </main>
    </AuthUserContext.Provider>
  )
}

export default App
