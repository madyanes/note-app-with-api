import { useEffect, useMemo, useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { getUserLogged, putAccessToken, archiveNote, unarchiveNote } from './utils/network-data'
import ThemeContext from './contexts/ThemeContext'
import LocaleContext from './contexts/LocaleContext'
import AuthUserContext from './contexts/AuthUserContext'
import ArchiveContext from './contexts/ArchiveContext'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import Navigation from './components/Navigation'
import DetailPage from './pages/DetailPage'
import NewNote from './pages/NewNote'
import './assets/style/App.css'

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const [locale, setLocale] = useState(localStorage.getItem('locale') || 'en')
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

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.setAttribute('lang', locale)
  }, [locale])

  const resetUser = () => {
    setUser(() => null)
  }

  const authUserContextValue = useMemo(() => {
    return {
      user,
      resetUser,
    }
  }, [user])

  const switchLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === 'en' ? 'id' : 'en'
      localStorage.setItem('locale', newLocale)
      return newLocale
    })
  }

  const getTextLocale = (en, id) => {
    return locale === 'en' ? en : id
  }

  const switchTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', newTheme)
      return newTheme
    })
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
          <LocaleContext.Provider value={{ getTextLocale, switchLocale }}>
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
                  <Route path='/new' element={<NewNote />} />
                  <Route path='/archives' element={<HomePage archived />} />
                  <Route path='/notes/:id' element={<DetailPage />} />
                  <Route path='/register' element={<RegisterPage />} />
                  <Route path='/login' element={<LoginPage loginSuccess={onLoginSuccess} />} />
                </Routes>
              </main>
            </ThemeContext.Provider>
          </LocaleContext.Provider>
        </ArchiveContext.Provider>
      </AuthUserContext.Provider>
    )
  }
}

export default App
