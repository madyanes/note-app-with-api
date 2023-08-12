import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState(() => searchParams.get('search') || '')

  useEffect(() => {
    console.log(search)
  }, [search])

  const onSearchChangeHandler = (event) => {
    const value = event.target.value
    setSearch(() => value)
    setSearchParams(() => ({ search: value }))
  }

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search note..." value={search} onChange={onSearchChangeHandler} />
    </div>
  )
}

export default SearchBar
