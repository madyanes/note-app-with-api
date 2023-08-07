import React from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from '../utils/network-data'

const RegisterPage = () => {
  const [userName, setUserName] = React.useState('')
  const [userEmail, setUserEmail] = React.useState('')
  const [userPassword, setUserPassword] = React.useState('')
  const [userConfirmPassword, setUserConfirmPassword] = React.useState('')
  const navigate = useNavigate()

  const onRegisterHandler = async (event) => {
    event.preventDefault()

    const { error } = await register({
      name: userName,
      email: userEmail,
      password: userPassword,
    })

    if (!error) {
      navigate('/login')
    }
  }

  const onUserNameChangeHandler = (event) => {
    setUserName(() => event.target.value)
  }

  const onUserEmailChangeHandler = (event) => {
    setUserEmail(() => event.target.value)
  }

  const onUserPasswordChangeHandler = (event) => {
    setUserPassword(() => event.target.value)
  }

  const onUserConfirmPasswordHandler = (event) => {
    setUserConfirmPassword(() => event.target.value)
  }

  return (
    <article className="auth-form">
      <h1>Registration Form</h1>
      <form onSubmit={onRegisterHandler}>
        <input type="text" placeholder="Name" value={userName} onChange={onUserNameChangeHandler} />
        <input type="text" placeholder="Email" value={userEmail} onChange={onUserEmailChangeHandler} />
        <input type="text" placeholder="Password" value={userPassword} onChange={onUserPasswordChangeHandler} />
        <input type="text" placeholder="Confirm Password" value={userConfirmPassword} onChange={onUserConfirmPasswordHandler} />
        <div className="auth-buttons">
          <button className="register">Register</button>
          <p className="login"><a href="#">Already have an account? Login here</a></p>
        </div>
      </form>
    </article>
  )
}

export default RegisterPage
