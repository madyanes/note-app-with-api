const Register = () => {
  return (
    <>
      <article className="auth-form">
        <h1>Registration Form</h1>
        <form action="#">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <input type="text" placeholder="Confirm Password" />
          <div className="auth-buttons">
            <button className="register">Register</button>
            <p className="login"><a href="#">Already have an account? Login here</a></p>
          </div>
        </form>
      </article>
    </>
  )
}

export default Register
