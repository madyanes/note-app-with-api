import { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthUserContext from '../contexts/AuthUserContext'

const Navigation = () => {
  const { user } = useContext(AuthUserContext)
  const navigate = useNavigate()

  useEffect(() => {
    console.log(user)
    if (user === null) {
      navigate('/login')
    }
  }, [user])

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
            <li><Link to='/notes'>Notes</Link></li>
            <li><Link to='/archives'>Archives</Link></li>
          </ul>
        )
      }
    </nav>
  )
}

export default Navigation
