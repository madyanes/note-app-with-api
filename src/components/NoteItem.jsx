import { Link, useLocation, matchPath } from 'react-router-dom'
import PropTypes from 'prop-types'
import parser from 'html-react-parser'
import showFormattedDate from '../utils/date-conversion'
import ActionButtons from './ActionButtons'

const NoteItem = ({ note }) => {
  const { pathname } = useLocation()

  // periksa apakah komponen NoteItem sedang berada di dalam komponen DetailPage atau tidak
  const isInDetailPage = () => {
    return matchPath('/notes/:id', pathname) ? true : false
  }

  return (
    <article className='note-item'>
      {isInDetailPage() ? <ActionButtons note={note} /> : <></>}
      <header>
        <Link to={`/notes/${note.id}`}>
          <h1>{note.title}</h1>
        </Link>
      </header>
      <footer>
        <p>{showFormattedDate(note.createdAt)}</p>
      </footer>
      <div className="body">
        {parser(note.body)}
      </div>
    </article>
  )
}

NoteItem.propTypes = {
  note: PropTypes.object.isRequired,
}

export default NoteItem
