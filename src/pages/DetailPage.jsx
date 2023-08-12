import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import { getNote } from '../utils/network-data'
import AuthUserContext from '../contexts/AuthUserContext'
import NotFound from './NotFound'

const DetailPage = () => {
  const { id } = useParams()
  const [note, setNote] = useState(null)
  const { user } = useContext(AuthUserContext)

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
      <h1>Not Found</h1>
    ) : (
      <>
        <section className="note-detail">
          {
            note ? (
              <h1>{note.title}</h1>
            ) : (
              <p>Loading...</p>
            )
          }
        </section>
      </>
    )
  )
}

DetailPage.propTypes = {
  note: PropTypes.object.isRequired,
}

export default DetailPage
