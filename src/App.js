import { useState } from 'react';
import uuid from 'react-uuid'
import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { Container } from 'react-bootstrap';
import Login from './components/Login';
import Signup from './components/Signup';
import AuthDetails from './components/AuthDetails';


function App() {

  //last updated May 24, 2023

  //TO DO:
  //load different pages depending on logged in
    //move AuthDetails into App?
  //add, edit, view, delete notes live with DB
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
      <div>
        <Container 
        className='d-flex align-items-center justify-content-center'
        style={{ minHeight: '100vh'}}
        >
          <div className='w-100' style={{maxWidth: '400px'}}>
            {/* <Login />
            <Signup /> */}
            <AuthDetails />
          </div>
          
        </Container>
      </div>
      
      {/* notes components after successful login */}
      
      {/* <Sidebar 
      notes={notes} 
      onAddNote={onAddNote} 
      onDeleteNote={onDeleteNote}
      activeNote={activeNote}
      setActiveNote={setActiveNote}
      />
      <Main 
      activeNote={getActiveNote()} 
      onUpdateNote={onUpdateNote}
      /> */}
      
    </div>
  );
}

export default App;
