import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);

   const [user, setUser] = useState(null);

   const googleProvider = new GoogleAuthProvider();
   const githubProvider = new GithubAuthProvider();

   const createUser = (email, password) => {
        setLoading(true);
          return createUserWithEmailAndPassword(auth,email,password);
   } 


   const signIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth,email,password);
   }

   
   const logOut = () => {
     setLoading(true);
      return signOut(auth);
   }


   const popUpSignIn = () => {
      return signInWithPopup(auth, googleProvider);
   }


   const gitHubSignIn = () => {
     return signInWithPopup(auth, githubProvider);
   }

  

   useEffect(()=>{
     const unsubscribe =   onAuthStateChanged(auth, loggedUser =>{
            console.log('log user', loggedUser);
            setUser(loggedUser);
            setLoading(false);
        })
        return () => {
             unsubscribe();
        }
   },[])


    const authInfo = {user, createUser, signIn, logOut, loading, popUpSignIn, gitHubSignIn,}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;