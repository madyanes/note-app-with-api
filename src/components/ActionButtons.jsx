import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { deleteNote } from "../utils/network-data"

const ActionButtons = ({ id }) => {
  const navigate = useNavigate()

  const onDeleteHandler = async () => {
    const { error } = await deleteNote(id)

    if (!error) {
      navigate('/')
    }
  }

  return (
    <div className="action-buttons">
      <button onClick={onDeleteHandler}>Delete</button>
      <button>Archive</button>
    </div>
  )
}

ActionButtons.propTypes = {
  id: PropTypes.string.isRequired,
}

export default ActionButtons
