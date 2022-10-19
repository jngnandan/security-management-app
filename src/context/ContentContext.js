

import {createContext, useEffect, useState, useContext} from 'react'


import {collection, getDocs, setDoc, doc, query} from 'firebase/firestore'
import {db} from '../firebase'


const ContentContext = createContext();




const ContentProvider = ({children}) => {
    const [employees, setEmplyees] = useState([])
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
    const getUsers = async () => {
        const querySnapshot = await getDocs(collection(db, 'employees'))
        const users = querySnapshot.docs.map(doc => doc.data())
        setEmplyees(users)
        setLoading(false)
    } 
    getUsers()  
}, [])


return(
    <ContentContext.Provider value={{employees, posts, loading}}>
        {children}
    </ContentContext.Provider>
)
}
export {ContentContext, ContentProvider}
