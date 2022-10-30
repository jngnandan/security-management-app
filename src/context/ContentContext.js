

import {createContext, useEffect, useState, useContext, useMemo} from 'react'
import { useNavigate, Outlet } from 'react-router-dom';

import {collection, getDocs, setDoc, doc, query, getFirestore, deleteDoc,} from 'firebase/firestore'
import {db,} from '../firebase'
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from 'firebase/auth'

import firebase from 'firebase/compat/app'; //v9

const ContentContext = createContext();



const ContentProvider = ({children}) => {
    const [employees, setEmplyees] = useState([])
    const [loading, setLoading] = useState(true)
    const [clientList, setClientList] = useState([])
    const [deletedClients, setDeletedClients] = useState([])
    const [error, setError] = useState(null)

    const [user, setUser] = useState(null)
    // const[uid, setUid] = useState(null)
    const [currentUser, setCurrentUser] = useState(null)
        // const navigate = useNavigate()


    const auth = getAuth();

    useMemo(() => {
    const getClients = async () => {
        const querySnapshot = await getDocs(collection(db, 'clients'))
        const clients = querySnapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        }
        )
        setClientList(clients)
        setLoading(false)
    }
    getClients()
}, [])

    useMemo(() => {
    const getDeletedClients = async () => {
        const querySnapshot = await getDocs(collection(db, 'deletedClients'))
        const clients = querySnapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        }
        )
        setDeletedClients(clients)
        setLoading(false)
    }
    getDeletedClients()
}, [])
    

    const signIn = async (email, password) => {
        const auth = getAuth();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            const user = userCredential.user;
            setUser(user)
            return user
            
        }   catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            setUser(null)
            setError(errorMessage)
        }
    }





return(
    <ContentContext.Provider value={{employees, loading, clientList, deletedClients, signIn, user}}>
        {children}
    </ContentContext.Provider>
)
}
export {ContentContext, ContentProvider}
