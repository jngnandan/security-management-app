

import {createContext, useEffect, useState, useContext, useMemo} from 'react'


import {collection, getDocs, setDoc, doc, query} from 'firebase/firestore'
import {db} from '../firebase'


const ContentContext = createContext();

const ContentProvider = ({children}) => {
    const [employees, setEmplyees] = useState([])
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [clientList, setClientList] = useState([])

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
        const clients = querySnapshot.docs.map(doc => doc.data())
        setClientList(clients)
        setLoading(false)
    } 
    getClients()  
}, [])

console.log(employees)

return(
    <ContentContext.Provider value={{employees, posts, loading, clientList}}>
        {children}
    </ContentContext.Provider>
)
}
export {ContentContext, ContentProvider}
