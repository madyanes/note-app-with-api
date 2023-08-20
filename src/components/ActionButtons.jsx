import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { RiInboxUnarchiveFill, RiInboxArchiveFill, RiDeleteBin2Fill } from 'react-icons/ri'
import { deleteNote } from "../utils/network-data"
import ArchiveContext from '../contexts/ArchiveContext'

const ActionButtons = ({ note }) => {
  const navigate = useNavigate()
  const archiveNote = useContext(ArchiveContext)

  const onDeleteHandler = async () => {
    const { error } = await deleteNote(note.id)

    if (!error) {
      navigate('/')
    }
  }

  const onArchiveNoteHandler = async () => {
    await archiveNote(note)
  }

  return (
    <div className="action-buttons fixed-button">
      <div onClick={onDeleteHandler}><RiDeleteBin2Fill /></div>
      <div onClick={onArchiveNoteHandler}>{note.archived ? <RiInboxUnarchiveFill /> : <RiInboxArchiveFill />}</div>
    </div>
  )
}

ActionButtons.propTypes = {
  note: PropTypes.object.isRequired,
}

export default ActionButtons
