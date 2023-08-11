import { useState, useContext, useEffect, useMemo } from 'react'
import AuthUserContext from '../contexts/AuthUserContext'
import { getArchivedNotes } from '../utils/network-data'
import ActiveNoteList from './ActiveNoteList'


const ArchivedNotes = () => {
  const [archivedNotes, setArchivedNotes] = useState(null)
  const { user } = useContext(AuthUserContext)

  useEffect(() => {
    if (user !== null) {
      const fetchArchivedNotes = async () => {
        const { error, data } = await getArchivedNotes()

        if (!error) {
          setArchivedNotes(() => data)
        }
      }

      fetchArchivedNotes()
    }
  }, [user])

  const activeNoteListMemo = useMemo(() => {  // agar tidak mengirim request ulang di saat komponen mengalami re-render 
    if (archivedNotes !== null) {
      return <ActiveNoteList notes={archivedNotes} />
    }
  }, [archivedNotes])

  return (
    user === null ? (
      <h1>You don&apos;t have access.</h1>
    ) : (
      activeNoteListMemo
    )
  )
}

export default ArchivedNotes
