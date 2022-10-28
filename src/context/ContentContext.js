

import {createContext, useEffect, useState, useContext, useMemo} from 'react'
import { useNavigate, Navigate, Outlet } from 'react-router-dom';

import {collection, getDocs, setDoc, doc, query, getFirestore, deleteDoc} from 'firebase/firestore'
import {db} from '../firebase'
import {getAuth} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from 'firebase/auth'


const ContentContext = createContext();

const ContentProvider = ({children}) => {
    const [employees, setEmplyees] = useState([])
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [clientList, setClientList] = useState([])

    const [user, setUser] = useState(null)
    const [currentUser, setCurrentUser] = useState(null)

    console.log(clientList)

    useMemo(() => {
    const getUsers = async () => {
        const querySnapshot = await getDocs(collection(db, 'employees'))
        const users = querySnapshot.docs.map(doc => doc.data())
        setEmplyees(users)
        setLoading(false)
    } 
    getUsers()  
}, [])

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


    const addUserToFirebase = async user => {
        const db = getFirestore();
        const dbRef = collection(db, "users");
        const data = {
       email: user.email,
        name: user.displayName,
        image: user.photoURL,
    };
        await setDoc(doc(dbRef, user.email), data);
    };

    const signIn = async () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        setUser(user)
        addUserToFirebase(user)
        setCurrentUser(user)
    }

    const deleteClient = async (id) => {
        // const db = getFirestore();
        // const dbRef = doc(db, "clients", id);
        // await deleteDoc(dbRef);
        const db = getFirestore();
        const dbRef = doc(db, "clients", id);
        await deleteDoc(dbRef);
    }

    const addClient = async (client) => {
       console.log(client)
        const db = getFirestore();
        const dbRef = collection(db, "deletedClients");
        const data = {
            clientName: client.clientName,
            contactEmail: client.contactEmail,
    }
        await setDoc(doc(dbRef, client.clientName), data);
    }
    


return(
    <ContentContext.Provider value={{employees, posts, loading, clientList, deleteClient, addClient}}>
        {children}
    </ContentContext.Provider>
)
}
export {ContentContext, ContentProvider}
