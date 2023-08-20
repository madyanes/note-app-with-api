import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { addNote } from '../utils/network-data'

const NewNote = () => {
  const navigate = useNavigate()
  const [noteTitle, setNoteTitle] = useState('')
  const [noteBody, setNoteBody] = useState('')

  const onTitleChangeHandler = (event) => setNoteTitle(event.target.value)
  const onBodyInputHandler = (event) => setNoteBody(event.target.innerHTML)

  const onSubmitHandler = () => {
    addNote({ title: noteTitle, body: noteBody })
    navigate('/')
  }

  return (
    <form>
      <input placeholder='Put the title of your note.' className='input-new-note-title' type="text" value={noteTitle} onChange={onTitleChangeHandler} />
      <div contentEditable data-placeholder='What do you want to write about?' className='input-new-note-body' onInput={onBodyInputHandler} />
      <BsFillCheckCircleFill className='fixed-button btn-icons' onClick={onSubmitHandler} />
    </form>
  )
}

export default NewNote
