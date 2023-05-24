import { useState, useEffect } from 'react';
import './App.css';
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { Container } from 'react-bootstrap';
import Login from './components/Login';
import Signup from './components/Signup';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { auth } from './firebase';

function App() {
  const [authUser, setAuthUser] = useState(null)


  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
        if (user) {
            setAuthUser(user)
        } else {
            setAuthUser(null)
        }
    });
    return () => {
        listen();
    }    
}, [])

const logOut = () => {
    signOut(auth).then (() => {
        console.log("Successfully logged out")
    }).catch(error => console.log(error))
}
  //last updated May 24, 2023

  //TO DO:
  //load different pages depending on logged in
    //navigate to login upon successful logout
    //navigate to home upon successful login
  //clean up CSS
  //add, edit, view, delete notes live with DB
  //add more sort options
  //make notes shareable?
    //read-only for now, then collaborative?
  //enable user to bold/italicize/underline/strikethrough text
  //enable bullets for lists?


  return (
    <div className="App">
      <div>
        <Container 
        className='d-flex align-items-center justify-content-center'
        style={{ minHeight: '100vh'}}
        >
          <div className='w-100' style={{maxWidth: '400px'}}>
          {authUser ? 
        <>
            <p>Hello, {authUser.email}
            </p>
            <button onClick={logOut}>Log Out</button>
            <Routes>
              <Route exact path="/" element={<Home />}/>
            </Routes>
        </> 
        : 
        <>
            <Routes>
              {/* <Route exact path="/" element={<Home />}/> */}
              <Route path="/signup" element={<Signup />}/>
              <Route path="/login" element={<Login />}/>
            </Routes>
        </>}
            
          </div>
          
        </Container>
      </div>
    </div>
  );
}

export default App;
