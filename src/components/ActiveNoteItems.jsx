import PropTypes from 'prop-types'

const ActiveNoteItems = ({ notes }) => {
  return (
    <>
      {
        notes !== null ? (
          notes.length === 0 ? (
            <p>No active notes.</p>
          ) : (
            notes.map((note) => {
              return (
                <>
                  <article>
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
                </>
              )
            })
          )
        ) : (
          <h1>Fetching notes...</h1>
        )
      }
    </>
  )
}

ActiveNoteItems.propTypes = {
  notes: PropTypes.object.isRequired,
}

export default ActiveNoteItems
