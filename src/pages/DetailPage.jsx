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
  const { user } = useContext(AuthUserContext)
  const { getTextLocale } = useContext(LocaleContext)

  useEffect(() => {
    const fetchNote = async () => {
      const { error, data } = await getNote(id)

      if (error) {
        return <NotFound />
      }

      setNote(() => data)
    }

    fetchNote()
  }, [id])

  return (
    user === null ? (
      <h1>{getTextLocale('Not Found', 'Tidak Ditemukan')}</h1>
    ) : (
      <div className="note-detail">
        {
          note ? (
            <NoteItem note={note} />
          ) : (
            <p>{getTextLocale('Loading...', 'Memuat...')}</p>
          )
        }
      </div>
    )
  )
}

export default DetailPage
