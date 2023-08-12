import { useContext } from 'react'
import SearchContext from '../contexts/SearchContext'

const SearchBar = () => {
  const { keyword, onSearchChangeHandler } = useContext(SearchContext)

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search note..." value={keyword} onChange={(e) => onSearchChangeHandler(e.target.value)} />
    </div>
  )
}

export default SearchBar
