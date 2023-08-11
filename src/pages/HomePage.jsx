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
  }, [user, navigate])

  return (
    <>
      {
        user === null ? (
          <p>Loading...</p>
        ) : (
          <section className="note-list">
            <h1>Active Notes</h1>
            <div className="note-item-wrapper">
              <ActiveNotes />
            </div>
          </section>
        )
      }
    </>
  )
}

export default HomePage
