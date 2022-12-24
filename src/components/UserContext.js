import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { app } from '../firebase/firebase.config';
export const  AuthContext = createContext();
export  const auth = getAuth(app);
const UserContext = ({children}) => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
const  createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
}
function googleSignIn(){
    return signInWithPopup(auth, new GoogleAuthProvider());
}
const signIn = function(email, password){
    return signInWithEmailAndPassword(auth, email, password );
}
const signOut = () =>{
    return signOut(auth);
}
useEffect(()=>{
    const subscription =  onAuthStateChanged(auth, function(currentUser){
        setUser(currentUser);
        setIsLoading(false);
        console.log('currentUser is ', currentUser);

        return ()=>{
            subscription.unsubscribe(); //done by documentation   // should clarify this 
            // subscription(); it has done by instructor jankar
        }
    })
},[])
const authInfo = {
    signIn, googleSignIn, createUser, signOut, user, isLoading
}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;