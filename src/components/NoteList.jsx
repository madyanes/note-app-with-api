import PropTypes from 'prop-types'
import NoteItem from './NoteItem'

const NoteList = ({ notes }) => {
  return (
    <>
      {
        notes !== null ? (
          notes.length === 0 ? (
            <p>No active notes.</p>
          ) : (
            notes.map((note) => {
              return (
                <NoteItem key={note.id} note={note} />
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

NoteList.propTypes = {
  notes: PropTypes.array,
}

export default NoteList
