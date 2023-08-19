import { useContext, useEffect, useMemo, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import PropTypes from "prop-types"
import Notes from "../components/Notes"
import SearchBar from "../components/SearchBar"
import AuthUserContext from "../contexts/AuthUserContext"
import LocaleContext from "../contexts/LocaleContext"
import SearchContext from "../contexts/SearchContext"

const HomePage = ({ archived }) => {
  const { user } = useContext(AuthUserContext)
  const { getTextLocale } = useContext(LocaleContext)
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
            <p>{getTextLocale('Loading...', 'Memuat...')}</p>
          ) : (
            <section className="note-list">
              <h1>{archived ? getTextLocale('Archived Notes', 'Catatan Terarsip') : getTextLocale('Active Notes', 'Catatan Aktif')}</h1>
              <div className="note-item-wrapper">
                {archived ? <Notes archived /> : <Notes />}
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
