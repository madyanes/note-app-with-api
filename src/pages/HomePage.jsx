import { useContext, useEffect, useMemo, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import PropTypes from "prop-types"
import ActiveNotes from "../components/ActiveNotes"
import ArchivedNotes from "../components/ArchivedNotes"
import SearchBar from "../components/SearchBar"
import AuthUserContext from "../contexts/AuthUserContext"
import SearchContext from "../contexts/SearchContext"

const HomePage = ({ archived }) => {
  const { user } = useContext(AuthUserContext)
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const [keyword, setKeyword] = useState(() => searchParams.get('search') || '')

  useEffect(() => {
    if (user === null) {
      navigate('/login')
    }
  }, [user, navigate])

  const memoizedSearchContextValue = useMemo(() => {
    const onSearchChangeHandler = (keyword) => {
      setSearchParams({ search: keyword })
      setKeyword(keyword)
    }

    return {
      keyword,
      onSearchChangeHandler
    }
  }, [keyword])

  return (
    <>
      <SearchContext.Provider value={memoizedSearchContextValue}>
        <SearchBar />
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
      </SearchContext.Provider>
    </>
  )
}

HomePage.propTypes = {
  archived: PropTypes.bool,
}

export default HomePage
