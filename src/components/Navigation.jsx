import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { putAccessToken } from '../utils/network-data'
import AuthUserContext from '../contexts/AuthUserContext'
import LocaleContext from '../contexts/LocaleContext'
import SwitchTheme from './SwitchTheme'
import SwitchLocale from './SwitchLocale'

const Navigation = () => {
  const { user, resetUser } = useContext(AuthUserContext)
  const { getTextLocale } = useContext(LocaleContext)

  const onLogout = () => {
    resetUser()
    putAccessToken('')
  }
  return (
    <nav className="site-navigation">
      {
        user === null ? (
          <ul>
            <li><Link to='/register'>{getTextLocale('Register', 'Daftar')}</Link></li>
            <li><Link to='/login'>{getTextLocale('Login', 'Masuk')}</Link></li>
          </ul>
        ) : (
          <ul className='site-navigation-list'>
            <div>
              <li><Link to='/'>{getTextLocale('Notes', 'Catatan')}</Link></li>
              <li><Link to='/archives'>{getTextLocale('Archives', 'Arsip')}</Link></li>
            </div>
            <div>
              <li><SwitchLocale /></li>
              <li><SwitchTheme /></li>
              <li onClick={onLogout}>{getTextLocale('Logout', 'Keluar')}</li>
            </div>
          </ul>
        )
      }
    </nav>
  )
}

export default Navigation
