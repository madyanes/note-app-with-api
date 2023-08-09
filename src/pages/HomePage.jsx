import { useContext, useEffect } from "react"
import ActiveNotes from "../components/ActiveNotes"
import AuthUserContext from "../contexts/AuthUserContext"

const HomePage = () => {
  const { user } = useContext(AuthUserContext)

  useEffect(() => {
    console.log(user)
  }, [])

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
