import { useState } from 'react';
import uuid from 'react-uuid'
import './App.css';
import Sidebar from './Sidebar';
import Main from './Main';

function App() {

  //last updated May 22, 2023

  //TO DO:
  //add auth (login/logout/register components)
  //render stored notes from API
  //add more sort options
  //make notes shareable?
    //read-only for now, then collaborative?
  //enable user to bold/italicize/underline/strikethrough text
  //enable bullets for lists?
  
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
    <div className="App">
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
  );
}

export default App;
