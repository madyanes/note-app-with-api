import { useContext, useEffect, useState } from 'react'
import { getActiveNotes } from '../utils/network-data'
import AuthUserContext from '../contexts/AuthUserContext'
import ActiveNoteItems from './ActiveNoteItems'

const ActiveNotes = () => {
  const [notes, setNotes] = useState(null)
  const { user } = useContext(AuthUserContext)

  useEffect(() => {
    const fetchActiveNotes = async () => {
      const { error, data } = await getActiveNotes()

      if (!error) {
        setNotes(() => data)
      }
    }

    if (user !== null) {
      fetchActiveNotes()
    }
  }, [user])

  return (
    user === null ? (
      <h1>You don&apos;t have access.</h1>
    ) : (
      <ActiveNoteItems notes={notes} />
    )
  )
}

export default ActiveNotes
