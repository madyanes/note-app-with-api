import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import showFormattedDate from '../utils/date-conversion'

const NoteItem = ({ note }) => {
  return (
    <article className='note-item'>
      <header>
        <Link to={`/notes/${note.id}`}>
          <h1>{note.title}</h1>
        </Link>
      </header>
      <footer>
        <p>{showFormattedDate(note.createdAt)}</p>
      </footer>
      <div className="body">
        <p>{note.body}</p>
      </div>
    </article>
  )
}

NoteItem.propTypes = {
  note: PropTypes.object.isRequired,
}

export default NoteItem
