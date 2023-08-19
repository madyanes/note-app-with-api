import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { putAccessToken } from '../utils/network-data'
import AuthUserContext from '../contexts/AuthUserContext'
import SwitchTheme from './SwitchTheme'
import SwitchLocale from './SwitchLocale'

const Navigation = () => {
  const { user, resetUser } = useContext(AuthUserContext)

  const onLogout = () => {
    resetUser()
    putAccessToken('')
  }
  return (
    <nav className="site-navigation">
      {
        user === null ? (
          <ul>
            <li><Link to='/register'>Register</Link></li>
            <li><Link to='/login'>Login</Link></li>
          </ul>
        ) : (
          <ul>
            <li><Link to='/'>Notes</Link></li>
            <li><Link to='/archives'>Archives</Link></li>
            <li><SwitchLocale /></li>
            <li><SwitchTheme /></li>
            <li onClick={onLogout}>Logout</li>
          </ul>
        )
      }
    </nav>
  )
}

export default Navigation
