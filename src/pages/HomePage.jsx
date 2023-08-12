import { useContext, useEffect, useMemo, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import PropTypes from "prop-types"
import ActiveNotes from "../components/ActiveNotes"
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
  }, [keyword, setSearchParams])  // masih belum paham kenapa eslint merekomendasikan supaya menjadikan setSearchParams sebagai dependensi

  return (
    <>
      <SearchContext.Provider value={memoizedSearchContextValue}>
        <SearchBar />
        {
          user === null ? (
            <p>Loading...</p>
          ) : (
            <section className="note-list">
              <h1>{archived ? 'Archived Notes' : 'Active Notes'}</h1>
              <div className="note-item-wrapper">
                {archived ? <ActiveNotes archived /> : <ActiveNotes />}
              </div>
            </section>
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
