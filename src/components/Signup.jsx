import React, { useRef, useState } from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'


const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSignUp = (e) => {
        e.preventDefault()
        if (password !== passwordConfirm) {
            return setError ('Passwords do not match')
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
        }).catch((error) => {
            console.log(error)
        })
        
        setLoading(false)
    }
  return (
    <>

        <div className='sign-up-container'>
            <form onSubmit={handleSignUp}>
                {error ? <p className='error'>Passwords do not match</p>: null}
                <h1>Create Account</h1>
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
                <input
                type="password"
                placeholder='Confirm password'
                value={passwordConfirm}
                onChange={(e)=> setPasswordConfirm(e.target.value)}
                ></input>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
        <div className='w-100 text-center mt-2'>
            Already have an account? Login
        </div>
    </>
  )
}

export default Signup