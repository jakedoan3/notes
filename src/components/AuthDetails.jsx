import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import Login from './Login'

const AuthDetails = () => {
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
  return (
    <div>
        {authUser ? 
        <>
            <p>Hello, {authUser.email}
            </p>
            <button onClick={logOut}>Log Out</button>
        </> 
        : 
        <>
            <Login />
        </>}
    </div>
  )
}

export default AuthDetails