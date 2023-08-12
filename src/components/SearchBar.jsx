import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import SearchContext from '../contexts/SearchContext'

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState(() => searchParams.get('search') || '')

  const onSearchChangeHandler = (event) => {
    const value = event.target.value
    setSearch(() => value)
    setSearchParams(() => ({ search: value }))
  }

  return (
    <SearchContext.Provider value={search}>
      <div className="search-bar">
        <input type="text" placeholder="Search note..." value={search} onChange={onSearchChangeHandler} />
      </div>
    </SearchContext.Provider>
  )
}

export default SearchBar
