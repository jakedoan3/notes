import React, { useRef, useState } from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
// import { Form, Button, Card, Alert } from 'react-bootstrap'

const Signup = () => {
    // const emailRef = useRef()
    // const passwordRef = useRef()
    // const passwordConfirmRef = useRef()
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
        {/* <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Sign Up</h2>
                
                <Form >
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required></Form.Control>
                    </Form.Group>
                    <Form.Group id='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required></Form.Control>
                    </Form.Group>
                    <Form.Group id='password-confirm'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} required></Form.Control>
                    </Form.Group>
                    <Button disabled={loading} className='w-100' type="submit"> Sign Up</Button>
                </Form>
            </Card.Body>
        </Card> */}

        <div className='sign-up-container'>
            <form onSubmit={handleSignUp}>
                {error ? <p>Passwords do not match</p>: null}
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