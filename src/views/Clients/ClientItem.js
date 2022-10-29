
import React from 'react'
    import { useContext } from 'react'
    import { useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom'

import {FiTrash} from 'react-icons/fi'
import {FiEye} from 'react-icons/fi'

import { ContentContext } from '../../context/ContentContext'

import {collection, deleteDoc, dbRef, doc} from 'firebase/firestore'
import { db } from '../../firebase'



export default function ClientItem(props) {
    const {client, key, viewClient} = props
    const {id, name, address, contact, email} = client

    const {addClient} = useContext(ContentContext)

    const navigate = useNavigate()

    const deleteItem = async (id) => {
        const dbRef = collection(db, "clients");
        await deleteDoc(doc(dbRef, id))
        window.location.reload(false);
    }

    const deleteClient = async () => {
        deleteItem(id)
        navigate('/clients')
    }
    


  return (
        <tr className="grid grid-cols-6 gap-3 text-sm items-center border border-1 py-3 mx-4 px-4 text-gray-800">
                        <td className='text-sm text-left'>{client.clientName}</td>
                        <td className='text-sm text-left col-span-2'>{client.clientAddress}</td>
                        <td className='text-sm text-left'>{client.contactNumber}</td>
                        <td className='text-sm text-left'>{client.contactEmail}</td>
                        <td className='text-sm text-left flex flex-row'>
                            <button id={client.id} className='bg-blue-400 hover:bg-blue-500 text-white rounded p-1 m-1'>
                                <Link to={`/clients/${client.id}`}>
                                <FiEye className="w-6 h-6 m-1" />
                                </Link>
                            </button>
                            <button client={client.id} onClick={deleteClient} className='bg-red-400 hover:bg-red-500 text-white rounded p-1 m-1'>
                                <FiTrash className="w-6 h-6 m-1" />
                            </button>
                        </td>
        </tr>
  )
}


    // <tr className="grid grid-cols-6 gap-3 text-sm items-center border border-1 py-3 mx-4 px-4 text-gray-800">
    //                     <td className='text-sm text-left'>{client.clientName}</td>
    //                     <td className='text-sm text-left col-span-2'>{client.clientAddress}</td>
    //                     <td className='text-sm text-left'>{client.contactName}</td>
    //                     <td className='text-sm text-left'>{client.contactEmail}</td>
    //                     <td className='text-sm text-left'>
    //                         <button onClick={() => console.log('cool')} className='bg-blue-400 hover:bg-blue-500 text-white rounded p-1 m-1'>
    //                             {/* <Link to={`/viewclient/${client.id}`}> */}
    //                             <FiEye className="w-6 h-6 m-1" />
    //                             {/* </Link> */}
    //                         </button>
    //                         <button className='bg-red-400 hover:bg-red-500 text-white rounded p-1 m-1'>
    //                             <FiTrash className="w-6 h-6 m-1" />
    //                         </button>
    //                     </td>
    //                     </tr>