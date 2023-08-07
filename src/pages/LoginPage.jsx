const LoginPage = () => {
  return (
    <article className="auth-form">
      <h1>Login Form</h1>
      <form action="#">
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <div className="auth-buttons">
          <button className="register">Login</button>
          <p className="login"><a href="#">Don&apos;t have an account? Register here</a></p>
        </div>
      </form>
    </article>
  )
}

export default LoginPage
