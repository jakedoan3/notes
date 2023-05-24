import React, {useState} from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) =>{
            console.log(userCredential);
            
        })
        .catch((error) => {
            console.log(error)
            setError("Username or Password was incorrect")
            
        })
    }
  return (
    
    <div className='login-container'>
            <form onSubmit={handleLogin}>
                {error ? <p className='error'>Username or Password was incorrect</p>: null}
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
            Don't have an account? 
            <Link to="/signup">Sign Up</Link>
        </div>
        </div>
  )
}

export default Login