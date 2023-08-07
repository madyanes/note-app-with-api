import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="site-navigation">
      <ul>
        <li><Link to='/register'>Register</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation
