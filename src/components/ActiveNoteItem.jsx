import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const ActiveNoteItem = ({ note }) => {
  return (
    <article className='note-item'>
      <header>
        <Link to={`/notes/${note.id}`}>
          <h1>{note.title}</h1>
        </Link>
      </header>
      <footer>
        <p>{note.createdAt}</p>
      </footer>
      <div className="body">
        <p>{note.body}</p>
      </div>
    </article>
  )
}

ActiveNoteItem.propTypes = {
  note: PropTypes.object.isRequired,
}

export default ActiveNoteItem
