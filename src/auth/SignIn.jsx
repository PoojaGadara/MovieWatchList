import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../firebase'
import '../styles/movieForm.scss'

export default function SignIn() {
        const [email , setEmail] = useState('')
        const [password , setPassword] = useState('')
        const navigate = useNavigate()
        const signIn = (e) => {
            e.preventDefault();
            signInWithEmailAndPassword (auth , email , password)
            .then((userCredential) => {
                navigate('/')
                console.log(userCredential)
            }).catch((error)=> {
                console.log(error)
            })
        }

  return (
    <div className='movieform'>
            <main>
                <h1 >Login</h1>
                <form onSubmit={signIn}>
                    <div>
                        <label>Email</label>
                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                    </div>
                    <button type="submit">
                        Login
                    </button>
                    {/* <button type="submit" onClick={() => {navigate('/signup')}}>
                        Signup
                    </button> */}
                </form>
            </main>
        </div>
  )
}
