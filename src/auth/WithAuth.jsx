import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../src/firebase';

const WithAuth = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      setAuthUser(user);
      setLoading(false);
    });

    return () => {
      listen();
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!authUser) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default WithAuth;
