import PropTypes from 'prop-types'
import ActiveNoteItem from './ActiveNoteItem'

const ActiveNoteList = ({ notes }) => {
  return (
    <>
      {
        notes !== null ? (
          notes.length === 0 ? (
            <p>No active notes.</p>
          ) : (
            notes.map((note) => {
              return (
                <ActiveNoteItem key={note.id} note={note} />
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

ActiveNoteList.propTypes = {
  notes: PropTypes.array,
}

export default ActiveNoteList
