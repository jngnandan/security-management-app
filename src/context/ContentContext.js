

import {createContext, useEffect, useState, useContext} from 'react'


import {collection, getDocs, setDoc, doc, query} from 'firebase/firestore'
import {db} from '../firebase'


const ContentContext = createContext();




const ContentProvider = ({children}) => {
    const [employees, setEmplyees] = useState([])
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [clientList, setClientList] = useState([])

    useEffect(() => {
    const getUsers = async () => {
        const querySnapshot = await getDocs(collection(db, 'employees'))
        const users = querySnapshot.docs.map(doc => doc.data())
        setEmplyees(users)
        setLoading(false)
    } 
    getUsers()  
}, [])

        useEffect(() => {
    const getClients = async () => {
        const querySnapshot = await getDocs(collection(db, 'clients'))
        const clients = querySnapshot.docs.map(doc => doc.data())
        setClientList(clients)
        setLoading(false)
    } 
    getClients()  
}, [])


return(
    <ContentContext.Provider value={{employees, posts, loading, clientList}}>
        {children}
    </ContentContext.Provider>
)
}
export {ContentContext, ContentProvider}
