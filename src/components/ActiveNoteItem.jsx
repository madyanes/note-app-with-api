import PropTypes from 'prop-types'

const ActiveNoteItem = ({ note }) => {
  console.log(note)
  return (
    <article key={note.id}>
      <header>
        <h1>{note.title}</h1>
      </header>
      <div className="body">
        <p>{note.body}</p>
      </div>
      <footer>
        <p>{note.createdAt}</p>
      </footer>
    </article>
  )
}

ActiveNoteItem.propTypes = {
  note: PropTypes.object.isRequired,
}

export default ActiveNoteItem
