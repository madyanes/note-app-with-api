import { useContext, useEffect, useMemo, useState } from 'react'
import { getActiveNotes } from '../utils/network-data'
import AuthUserContext from '../contexts/AuthUserContext'
import SearchContext from '../contexts/SearchContext'
import ActiveNoteList from './ActiveNoteList'

const ActiveNotes = () => {
  const [notes, setNotes] = useState(null)
  const { user } = useContext(AuthUserContext)
  const { keyword } = useContext(SearchContext)

  useEffect(() => {
    if (user !== null) {
      const fetchActiveNotes = async () => {
        const { error, data } = await getActiveNotes()

        if (!error) {
          setNotes(() => data)
        }
      }

      fetchActiveNotes()
    }
  }, [user])

  const activeNoteListMemo = useMemo(() => {  // agar tidak mengirim request ulang di saat komponen mengalami re-render 
    if (notes !== null) {
      return <ActiveNoteList notes={notes.filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase()))} />
    }
  }, [notes, keyword])

  return (
    user === null ? (
      <h1>You don&apos;t have access.</h1>
    ) : (
      activeNoteListMemo
    )
  )
}

export default ActiveNotes
