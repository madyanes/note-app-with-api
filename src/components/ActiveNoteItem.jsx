import PropTypes from 'prop-types'

const ActiveNoteItem = ({ note }) => {
  return (
    <article className='note-item'>
      <header>
        <h1>{note.title}</h1>
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
