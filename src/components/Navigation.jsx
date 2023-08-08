import { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { putAccessToken } from '../utils/network-data'
import AuthUserContext from '../contexts/AuthUserContext'

const Navigation = () => {
  const { user, resetUser } = useContext(AuthUserContext)
  const navigate = useNavigate()

  useEffect(() => {
    console.log(user)
    if (user === null) {
      navigate('/login')
    }
  }, [user])

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
            <li onClick={onLogout}>Logout</li>
          </ul>
        )
      }
    </nav>
  )
}

export default Navigation
