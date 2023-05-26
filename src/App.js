import { useState, useEffect } from "react";
import "./App.css";
import { onAuthStateChanged } from "firebase/auth";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { auth } from "./firebase";
import PrivateRoutes from "./utils/PrivateRoutes";

//last updated May 25, 2023

//TO DO:
//keep authenticated users logged in with cookies
  //universal-cookie (ref chat project)

//add, edit, view, delete notes live with DB
  //save updates manually at first, then find away to save automatically? (i.e. Google Docs)
//add more sort options
//make notes shareable?
//read-only for now, then collaborative?
//enable user to bold/italicize/underline/strikethrough text
//enable bullets for lists?

function App() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        console.log("user is " + user.email);
      } else {
        setAuthUser(null);
        console.log("user is " + user);
      }
    });
    return () => {
      listen();
    };
  }, []);

  // const logOut = () => {
  //     signOut(auth).then (() => {
  //         console.log("Successfully logged out")
  //         //navigate to login route
  //     }).catch(error => console.log(error))
  // }

  return (
    <div className="App">
      {/* {authUser ? */}

      <div>
        <Routes>
          <Route element={<PrivateRoutes authUser={authUser} />}>
            <Route element={<Home authUser={authUser} />} path="/" exact />
          </Route>
          <Route element={<Login />} path="/login" exact />
          <Route element={<Signup />} path="/signup" exact />
        </Routes>
      </div>
      <div>
        <Routes></Routes>
      </div>

      {/* <div> */}
      {/* <Container  */}
      {/* className='d-flex align-items-center justify-content-center' */}
      {/* style={{ minHeight: '100vh'}} */}
      {/* > */}
      {/* <div className='w-100' style={{maxWidth: '400px'}}> */}

      {/* <> */}
      {/* <Routes> */}
      {/* <Route exact path="/" element={<Home />}/> */}
      {/* <Route path="/signup" element={<Signup />}/> */}
      {/* <Route path="/login" element={<Login />}/> */}
      {/* </Routes> */}
      {/* </>} */}

      {/* </div> */}

      {/* </Container> */}
      {/* </div> */}
    </div>
  );
}

export default App;
