import { useContext, useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { getActiveNotes, getArchivedNotes } from '../utils/network-data'
import AuthUserContext from '../contexts/AuthUserContext'
import SearchContext from '../contexts/SearchContext'
import NoteList from './NoteList'

const Notes = ({ archived }) => {
  const [notes, setNotes] = useState(null)
  const { user } = useContext(AuthUserContext)
  const { keyword } = useContext(SearchContext)

  useEffect(() => {
    if (user !== null) {
      const fetchNotes = async () => {
        const { error, data } = (archived ? await getArchivedNotes() : await getActiveNotes())

        if (!error) {
          setNotes(() => data)
        }
      }

      fetchNotes()
    }
  }, [user, archived])

  const NoteListMemo = useMemo(() => {  // agar tidak mengirim request ulang di saat komponen mengalami re-render 
    if (notes !== null) {
      return <NoteList notes={notes.filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase()))} />
    }
  }, [notes, keyword])

  return (
    user === null ? (
      <h1>You don&apos;t have access.</h1>
    ) : (
      NoteListMemo
    )
  )
}

Notes.propTypes = {
  archived: PropTypes.bool,
}

export default Notes
