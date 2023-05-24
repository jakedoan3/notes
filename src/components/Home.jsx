import React, {useState} from 'react'
import uuid from 'react-uuid'
import Sidebar from './Sidebar'
import Main from './Main'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom'

const Home = (authUser) => {
  const [notes, setNotes] = useState([])
  const [activeNote, setActiveNote] = useState(false);

  const navigate = useNavigate()

  const logOut = () => {
    signOut(auth).then (() => {
        console.log("Successfully logged out")
        navigate('/login')
    }).catch(error => console.log(error))
}

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled",
      body: "",
      lastModified: Date.now()
    };
    setNotes([newNote, ...notes ])
  }; 

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if(note.id === activeNote) {
        return updatedNote;
      }
      return note;
    })
    setNotes(updatedNotesArray)
  }

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete))
  }

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote)
  }

  return (
    <div className='App'>
      <h3 className='greet-user'> Hello, {authUser.email}</h3>
      
      <button className='logout-button' onClick={logOut}>Log Out</button>
      <Sidebar 
      notes={notes} 
      onAddNote={onAddNote} 
      onDeleteNote={onDeleteNote}
      activeNote={activeNote}
      setActiveNote={setActiveNote}
      />
      <Main 
      activeNote={getActiveNote()} 
      onUpdateNote={onUpdateNote}
      />
    </div>
  )
}

export default Home