import { useState } from 'react'

const SearchBar = () => {
  const [search, setSearch] = useState('')

  const onSearchChangeHandler = (event) => {
    setSearch(() => event.target.value)
  }

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search note..." value={search} onChange={onSearchChangeHandler} />
    </div>
  )
}

export default SearchBar
