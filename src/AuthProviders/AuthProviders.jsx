import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../FireBase";

export const AuthConText=createContext(null);
const AuthProviders = ({children}) => {
    
    const [users, setUser]=useState();
     const [loading, setLoading] = useState(true); // 🔄 loading state

    const createUser=(email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
        
    };
    const SignIn=(email,password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
       
    };
    const LogOut=()=>{
       return signOut(auth);

    };

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, (currentUser)=>{
            console.log('user',currentUser)
            setUser(currentUser)
            setLoading(false)
            
        })
        return ()=> unsubscribe;
    },[]);


    const AuthInfo = {
        createUser,
        SignIn,
        users,
        LogOut,
        loading,
        
    }

    return (
        <AuthConText.Provider value={AuthInfo}>
            {children}
        </AuthConText.Provider>
        
    );
};

export default AuthProviders;