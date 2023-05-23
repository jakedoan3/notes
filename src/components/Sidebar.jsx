import React from 'react'

const Sidebar =  ({ notes, onAddNote, onDeleteNote, activeNote, setActiveNote }) => {
  
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified)
  
  return (
    <div className='app-sidebar'>
      <div className='app-sidebar-header'>
        Notes
        {/* dynamic list name later? */}
        <button onClick={onAddNote}>+</button>
        {/* React Icons pencil later */}
      </div>
      <div className='app-sidebar-notes'>
        {sortedNotes.map((note)=>(
           <div key={note.id} className={`app-sidebar-note ${note.id === activeNote && 'active'}`} onClick={()=>{setActiveNote(note.id)}}>
            <div className='sidebar-note-title'>
              <strong>{note.title}</strong>
              <button onClick={()=>{onDeleteNote(note.id)}}>-</button>
              {/* React Icons trash can later */}
            </div>
            <p>{note.body && note.body.substr(0,100) + "..."}</p>
            <small className='note-meta'>Last modified {new Date (note.lastModified).toLocaleDateString('en-US', {
              hour: '2-digit',
              minute: "2-digit"
            })} </small>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar