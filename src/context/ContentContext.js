

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

    const [sites, setSites] = useState([])

    const [user, setUser] = useState(null)
    // const[uid, setUid] = useState(null)
    const [currentUser, setCurrentUser] = useState(null)

    const [userData, setUserData] = useState(null)

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
            // console.log(errorCode, errorMessage)
            setUser(null)
            // setError(errorMessage)
        }
    }

    useEffect(() => {
        const getUserData = async () => {
            const querySnapshot = await getDocs(collection(db, 'users'))
            const userDetails = querySnapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            }
            )
            setUserData(userDetails)
            setLoading(false)
            console.log(userDetails[0])
        }
        getUserData()
    }, [])


        useMemo(() => {
        const getSiteData = async () => {
            const querySnapshot = await getDocs(collection(db, 'sites'))
            const siteDetails = querySnapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            }
            )
            setLoading(false)
            setSites(siteDetails)
        }
        getSiteData()
    }, [])



return(
    <ContentContext.Provider value={{employees, loading, clientList, deletedClients, signIn, user, sites}}>
        {children}
    </ContentContext.Provider>
)
}
export {ContentContext, ContentProvider}
