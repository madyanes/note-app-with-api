import { useContext } from 'react'
import SearchContext from '../contexts/SearchContext'
import LocaleContext from '../contexts/LocaleContext'

const SearchBar = () => {
  const { keyword, onSearchChangeHandler } = useContext(SearchContext)
  const { getTextLocale } = useContext(LocaleContext)

  return (
    <div className="search-bar">
      <input type="text" placeholder={getTextLocale('search note...', 'cari catatan...')} value={keyword} onChange={(e) => onSearchChangeHandler(e.target.value)} />
    </div>
  )
}

export default SearchBar
