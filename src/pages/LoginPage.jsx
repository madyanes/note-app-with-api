import { useState, useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import PropTypes from 'prop-types'
import { login } from "../utils/network-data"
import AuthUserContext from "../contexts/AuthUserContext"
import LocaleContext from "../contexts/LocaleContext"

const LoginPage = ({ loginSuccess }) => {
  const navigate = useNavigate()
  const { user } = useContext(AuthUserContext)
  const { getTextLocale } = useContext(LocaleContext)
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  useEffect(() => {
    if (user !== null) {
      navigate('/')
    }
  }, [user, navigate])

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
          <h1>{getTextLocale('You&apos;ve been logged in. Redirecting to homepage.', 'Kamu telah login. Mengarahkan ke laman utama.')}</h1>
        ) : (
          <article className="auth-form">
            <h1>{getTextLocale('Login to use the app!', 'Silakan login untuk menggunakan aplikasi!')}</h1>
            <form onSubmit={onSubmitHandler}>
              <input type="text" placeholder={getTextLocale("Email", 'Surel')} value={userEmail} onChange={onUserEmailChangeHandler} />
              <input type="password" placeholder={getTextLocale("Password", 'Kata kunci')} value={userPassword} onChange={onUserPasswordChangeHandler} />
              <div className="auth-buttons">
                <button className="register">{getTextLocale('Login', 'Masuk')}</button>
                <p className="login">
                  <Link to='/register'>{getTextLocale('Don&apos;t have an account? Register here', 'Belum punya akun? Daftar di sini.')}</Link>
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
