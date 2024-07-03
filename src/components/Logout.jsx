// Logout.js

import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../src/firebase"; // Adjust path as necessary

const Logout = () => {
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
    <div>
      {authUser ? (
        <button onClick={handleSignOut}>
          Sign Out
        </button>
      ) : (
        <p>Not signed in</p>
      )}
    </div>
  );
};

export default Logout;
