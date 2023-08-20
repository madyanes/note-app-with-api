import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getNote } from '../utils/network-data'
import AuthUserContext from '../contexts/AuthUserContext'
import LocaleContext from '../contexts/LocaleContext'
import NotFound from './NotFound'
import NoteItem from '../components/NoteItem'

const DetailPage = () => {
  const { id } = useParams()
  const [note, setNote] = useState(null)
  const [error, setError] = useState(null)
  const { user } = useContext(AuthUserContext)
  const { getTextLocale } = useContext(LocaleContext)

  useEffect(() => {
    const fetchNote = async () => {
      const { error, data } = await getNote(id)

      console.log('error', error)
      console.log('data', data)

      if (error) {
        setError(error)
      }

      setNote(() => data)
    }

    fetchNote()
  }, [id])

  return (
    user === null ? (
      <p>{getTextLocale('You must login first to see this page.', 'Kamu harus login terlebih dulu untuk melihat laman ini.')}</p>
    ) : (
      <div className="note-detail">
        {
          error ? <NotFound /> : (
            note ? (
              <NoteItem note={note} />
            ) : (
              <p>{getTextLocale('Loading...', 'Memuat...')}</p>
            )
          )
        }
      </div>
    )
  )
}

export default DetailPage
