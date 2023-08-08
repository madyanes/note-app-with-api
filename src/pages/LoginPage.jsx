import { useState, useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import PropTypes from 'prop-types'
import { login } from "../utils/network-data"
import AuthUserContext from "../contexts/AuthUserContext"

const LoginPage = ({ loginSuccess }) => {
  const navigate = useNavigate()
  const { user } = useContext(AuthUserContext)
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  useEffect(() => {
    if (user !== null) {
      navigate('/')
    }
  })

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    const { error, data } = await login({
      email: userEmail,
      password: userPassword,
    })

    if (!error) {
      loginSuccess(data)
    }
  }

  const onUserEmailChangeHandler = (event) => {
    setUserEmail(() => event.target.value)
  }

  const onUserPasswordChangeHandler = (event) => {
    setUserPassword(() => event.target.value)
  }

  return (
    <>
      {
        user !== null ? (
          <h1>You&apos;ve been logged in. Redirecting to homepage.</h1>
        ) : (
          <article className="auth-form">
            <h1>Login Form</h1>
            <form onSubmit={onSubmitHandler}>
              <input type="text" placeholder="Email" value={userEmail} onChange={onUserEmailChangeHandler} />
              <input type="text" placeholder="Password" value={userPassword} onChange={onUserPasswordChangeHandler} />
              <div className="auth-buttons">
                <button className="register">Login</button>
                <p className="login">
                  <Link to='/register'>Don&apos;t have an account? Register here</Link>
                </p>
              </div>
            </form>
          </article>
        )
      }
    </>
  )
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
}

export default LoginPage
