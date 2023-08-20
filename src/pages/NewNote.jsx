import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addNote } from '../utils/network-data'

const NewNote = () => {
  const navigate = useNavigate()
  const [noteTitle, setNoteTitle] = useState('')
  const [noteBody, setNoteBody] = useState('')

  const onTitleChangeHandler = (event) => setNoteTitle(event.target.value)
  const onBodyInputHandler = (event) => setNoteBody(event.target.innerHTML)

  const onSubmitHandler = (event) => {
    event.preventDefault()
    addNote({ title: noteTitle, body: noteBody })
    navigate('/')
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <input type="text" value={noteTitle} onChange={onTitleChangeHandler} />
      <div contentEditable onInput={onBodyInputHandler} />
      <button>Submit</button>
    </form>
  )
}

export default NewNote
