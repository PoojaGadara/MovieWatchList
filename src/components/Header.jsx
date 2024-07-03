
import { Link } from 'react-router-dom'
import '../styles/header.scss'
import {HashLink} from 'react-router-hash-link'
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../src/firebase"; 
function Header() {
  const [authUser, setAuthUser] = useState(null);

  console.log("I am called")
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out successful");
      })
      .catch((error) => console.error("Error signing out:", error));
  };
  return (

    <nav>
        <div>Watch Movies</div>
        <main>
        <Link to={'/signup'}>SignUp</Link>
        <Link to={'/login'}>Login</Link>
        <Link to={'/addMovie'}>Add Movie</Link>
        <Link to={'/listMovie'}>List Movie</Link>
        <Link to={'/watchlist'}>Watch List</Link>
        {authUser ? (
        <button onClick={handleSignOut}>
          SignOut
        </button>
      ) : null}
        </main>
    </nav>
    
  )
}

export default Header