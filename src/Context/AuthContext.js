import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase';


export const AuthProvider = createContext();
const auth = getAuth(app);
const AuthContext = ({children}) => {
    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider;
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo)
    }

    const googleuser = () =>{
       return signInWithPopup(auth, provider)
    }

    useEffect(() =>{
        const unSubcribe = onAuthStateChanged(auth, (currentUser) =>{
             setUser(currentUser)
         })
         
         return () => unSubcribe();
     },[])
    const authInfo = {user, createUser, loginUser, logOut, updateUser, googleuser}
    return (
        <AuthProvider.Provider value={authInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;