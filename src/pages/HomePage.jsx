import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import ActiveNotes from "../components/ActiveNotes"
import AuthUserContext from "../contexts/AuthUserContext"

const HomePage = () => {
  const { user } = useContext(AuthUserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (user === null) {
      navigate('/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  return (
    <>
      {
        user === null ? (
          <p>Loading...</p>
        ) : (
          <section className="note-list">
            <h1>Active Notes</h1>
            <ActiveNotes />
          </section>
        )
      }
    </>
  )
}

export default HomePage
