import { useContext } from "react"
import LoginPage from "../pages/LoginPage"
import ActiveNotes from "../components/ActiveNotes"
import AuthUserContext from "../contexts/AuthUserContext"

const HomePage = () => {
  const { user } = useContext(AuthUserContext)

  return (
    <>
      {
        user === null ? (
          <LoginPage />
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
