import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { deleteNote, archiveNote, unarchiveNote } from "../utils/network-data"

const ActionButtons = ({ note }) => {
  const navigate = useNavigate()

  const onDeleteHandler = async () => {
    const { error } = await deleteNote(note.id)

    if (!error) {
      navigate('/')
    }
  }

  const onArchiveHandler = async () => {
    note.archived ? await unarchiveNote(note.id) : await archiveNote(note.id)
  }

  return (
    <div className="action-buttons">
      <button onClick={onDeleteHandler}>Delete</button>
      <button onClick={onArchiveHandler}>{note.archived ? 'Unarchive' : 'Archive'}</button>
    </div>
  )
}

ActionButtons.propTypes = {
  note: PropTypes.object.isRequired,
}

export default ActionButtons
