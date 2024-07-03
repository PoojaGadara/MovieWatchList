import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, firestore } from '../firebase'
import { collection, addDoc } from 'firebase/firestore';
import '../styles/movieForm.scss'

const SignUp = () => {

    const navigate = useNavigate()

    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    console.log(username, email, password)

    const user = collection(firestore, 'users');

    const signUp = async (e) => {
        try {
            console.log("I am inside the signup")
            e.preventDefault();
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const uid = userCredential.user.uid;
            await setDoc(doc(user, uid), {
                username: username,
                email: email
            })

            console.log("Document Added", uid)

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className='movieform'>
            <main>
                <h1 >Create Account</h1>
                <form onSubmit={signUp}>
                    <div>
                        <label>Username</label>
                        <input type="text" name="username" value={username} onChange={(e) => setUserName(e.target.value)} required />
                    </div>
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
                        Sign Up
                    </button>
                    {/* <button type="submit" onClick={() => {navigate('/login')}}>
                        Login
                    </button> */}
                </form>
            </main>
        </div>
    )
}


export default SignUp
