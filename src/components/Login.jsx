import React, {useState} from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) =>{
            console.log(userCredential);
        })
        .catch((error) => {
            console.log(error)
        })
    }
  return (
    
    <div className='login-container'>
            <form onSubmit={handleLogin}>
                {/* {error ? <p>Username or Password was incorrect</p>: null} */}
                <h1>Log In</h1>
                <input
                    type="email"
                    placeholder='Email'
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                ></input>
                <input
                type="password"
                placeholder='Password'
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                ></input>
                <button type='submit'>Log In</button>
            </form>
            <div className='w-100 text-center mt-2'>
            Don't have an account? Sign Up
        </div>
        </div>
  )
}

export default Login