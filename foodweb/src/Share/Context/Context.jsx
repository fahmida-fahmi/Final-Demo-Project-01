import React, { createContext, useEffect, useState } from 'react';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../../firebase.config';
import axios from 'axios';


export const AuthProvider = createContext()
const auth = getAuth(app);

const Context = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)

            if (currentUser) {
                axios.post('http://localhost:8000/jwt', { email: currentUser.email })
                    .then(data => {
                        // console.log(data.data)
                        // console.log(data)
                        localStorage.setItem('access-token', data.data)
                        setLoading(false)

                    })
            }
            else {
                localStorage.removeItem('access-token')
            }

        })
        return () => {
            unsubscribe()
        }
    }, [])

    const emailVerification = () => {
        return sendEmailVerification(auth.currentUser)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const googleProvider = new GoogleAuthProvider()
    const googleSignIN = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const gitHubProvider = new GithubAuthProvider()
    const gitHubSignIn = () => {
        return signInWithPopup(auth, gitHubProvider)
    }
    const facebookProvider = new FacebookAuthProvider()
    const facebookSignIn = () => {
        return signInWithPopup(auth, facebookProvider)
    }

    const authInfo = {
        user,
        loading,
        register,
        logIn,
        logOut,
        googleSignIN,
        gitHubSignIn,
        facebookSignIn,
        emailVerification,


    }
    return (
        <AuthProvider.Provider value={authInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default Context;