import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { login } from "../utils/network-data"

const LoginPage = () => {
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const navigate = useNavigate()

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    const { error, data } = await login({
      email: userEmail,
      password: userPassword,
    })

    if (!error) {
      navigate('/')
      localStorage.setItem('accessToken', data.accessToken)
    }
  }

  const onUserEmailChangeHandler = (event) => {
    setUserEmail(() => event.target.value)
  }

  const onUserPasswordChangeHandler = (event) => {
    setUserPassword(() => event.target.value)
  }

  return (
    <article className="auth-form">
      <h1>Login Form</h1>
      <form onSubmit={onSubmitHandler}>
        <input type="text" placeholder="Email" value={userEmail} onChange={onUserEmailChangeHandler} />
        <input type="text" placeholder="Password" value={userPassword} onChange={onUserPasswordChangeHandler} />
        <div className="auth-buttons">
          <button className="register">Login</button>
          <p className="login"><a href="#">Don&apos;t have an account? Register here</a></p>
        </div>
      </form>
    </article>
  )
}

export default LoginPage
