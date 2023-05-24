import React, {useState} from 'react'
import uuid from 'react-uuid'
import Sidebar from './Sidebar'
import Main from './Main'

const Home = () => {
  const [notes, setNotes] = useState([])
  const [activeNote, setActiveNote] = useState(false);

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
    <div>
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