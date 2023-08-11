import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import PropTypes from "prop-types"
import ActiveNotes from "../components/ActiveNotes"
import ArchivedNotes from "../components/ArchivedNotes"
import AuthUserContext from "../contexts/AuthUserContext"

const HomePage = ({ archived }) => {
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
          !archived ? (
            <section className="note-list">
              <h1>Active Notes</h1>
              <div className="note-item-wrapper">
                <ActiveNotes />
              </div>
            </section>
          ) : (
            <section className="note-list">
              <h1>Archived Notes</h1>
              <div className="note-item-wrapper">
                <ArchivedNotes />
              </div>
            </section>
          )
        )
      }
    </>
  )
}

HomePage.propTypes = {
  archived: PropTypes.bool,
}

export default HomePage
