import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useInput from '../hooks/useInput'
import { register } from '../utils/network-data'
import AuthUserContext from '../contexts/AuthUserContext'
import LocaleContext from '../contexts/LocaleContext'

const RegisterPage = () => {
  const [userName, onUserNameChangeHandler] = useInput('')
  const [userEmail, onUserEmailChangeHandler] = useInput('')
  const [userPassword, onUserPasswordChangeHandler] = useInput('')
  const [userConfirmPassword, onUserConfirmPasswordHandler] = useInput('')
  const user = React.useContext(AuthUserContext)
  const { getTextLocale } = React.useContext(LocaleContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (user === null) {
      navigate('/')
    }
  }, [user, navigate])

  const onRegisterHandler = async (event) => {
    event.preventDefault()

    if (userConfirmPassword !== userPassword) return alert(`Passwords don't match!`)

    const { error } = await register({
      name: userName,
      email: userEmail,
      password: userPassword,
    })

    if (!error) {
      navigate('/login')
    }
  }

  return (
    <>
      {
        user === null ? (
          <h1>{getTextLocale('You&apos;ve been logged in. Redirecting to homepage.', 'Kamu telah login. Mengarahkan ke laman utama.')}</h1>
        ) : (
          <article className="auth-form">
            <h1>{getTextLocale('Registration Form', 'Formulir Pendaftaran')}</h1>
            <form onSubmit={onRegisterHandler}>
              <input type="text" placeholder={getTextLocale("Name", 'Nama')} value={userName} onChange={onUserNameChangeHandler} />
              <input type="text" placeholder={getTextLocale("Email", 'Surel')} value={userEmail} onChange={onUserEmailChangeHandler} />
              <input type="password" autoComplete='off' placeholder={getTextLocale("Password", 'Kata kunci')} value={userPassword} onChange={onUserPasswordChangeHandler} />
              <input type="password" autoComplete='off' placeholder={getTextLocale("Confirm Password", 'Konfirmasi kata kunci')} id='password-confirmation' value={userConfirmPassword} onChange={onUserConfirmPasswordHandler} />
              <div className="auth-buttons">
                <button className="register">{getTextLocale('Register', 'Daftar')}</button>
                <p className="login">
                  <Link to='/login'>{getTextLocale('Already have an account? Login here', 'Punya akun? Login di sini.')}</Link>
                </p>
              </div>
            </form>
          </article>
        )
      }
    </>
  )
}

export default RegisterPage
