import { useEffect, useMemo, useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { getUserLogged, putAccessToken, archiveNote, unarchiveNote } from './utils/network-data'
import ThemeContext from './contexts/ThemeContext'
import AuthUserContext from './contexts/AuthUserContext'
import ArchiveContext from './contexts/ArchiveContext'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import Navigation from './components/Navigation'
import DetailPage from './pages/DetailPage'
import './assets/style/App.css'

const App = () => {
  const [theme, setTheme] = useState('light')
  const [user, setUser] = useState(null)
  const [initializing, setInitializing] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const getLeggedInUser = async () => {
      const { data } = await getUserLogged()
      setUser(() => data)
      setInitializing(() => false)
    }
    getLeggedInUser()
  }, [])

  const resetUser = () => {
    setUser(() => null)
  }

  const authUserContextValue = useMemo(() => {
    return {
      user,
      resetUser,
    }
  }, [user])

  const switchTheme = () => {
    setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light')
  }

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken)
    const { data } = await getUserLogged()
    setUser(() => data)
  }

  const onArchiveHandler = async ({ id, archived }) => {
    if (archived) {
      await unarchiveNote(id)
    } else {
      await archiveNote(id)
    }
    navigate('/')
  }

  if (initializing) {
    return null
  } else {
    return (
      <AuthUserContext.Provider value={authUserContextValue}>
        <ArchiveContext.Provider value={onArchiveHandler}>
          <ThemeContext.Provider value={{ theme, switchTheme }}>
            <header className="site-header">
              <Link to='/'>
                <h1>&lt;NoteApp &#47;&gt;</h1>
              </Link>
              <Navigation />
            </header>

            <main>
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/archives' element={<HomePage archived />} />
                <Route path='/notes/:id' element={<DetailPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/login' element={<LoginPage loginSuccess={onLoginSuccess} />} />
              </Routes>
            </main>
          </ThemeContext.Provider>
        </ArchiveContext.Provider>
      </AuthUserContext.Provider>
    )
  }
}

export default App
