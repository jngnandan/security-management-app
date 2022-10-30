
import React from 'react'
    import { useContext } from 'react'
    import { useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom'

import {FiTrash} from 'react-icons/fi'
import {FiEye} from 'react-icons/fi'

import { ContentContext } from '../../context/ContentContext'

import {collection, deleteDoc, dbRef, doc, getFirestore, ref, deleteObject, setDoc} from 'firebase/firestore'
import { db } from '../../firebase'

import { Oval } from 'react-loader-spinner'

import {MdRestore} from 'react-icons/md'


export default function DeltedSite(props) {
    const {client, key, renderClient,} = props
    const {id, clientName} = client
    console.log(client)

    const {addClient, clientList} = useContext(ContentContext)

    const navigate = useNavigate()

        const deleteItem = async (id) => {
        const dbRef = collection(db, "deletedClients");
        await deleteDoc(doc(dbRef, id))
        // window.location.reload(false);
    }

    // clientName, clientEmail, contactFax, chargeRate, chargeRateSupervisor, clientAddress, contactNumber, contactEmail, contactName, invoiceTerms, paymentTerms, vat
    const addUserToFirebase = async () => {
        console.log(client)
        const db = getFirestore();
        const dbRef = collection(db, "clients");
        const data = {
         id: client.id,   
        clientName: client.clientName,
        contactFax: client.contactFax,
        chargeRate: client.chargeRate,
        chargeRateSupervisor: client.chargeRateSupervisor,
        clientAddress: client.clientAddress,
        contactNumber: client.contactNumber,
        contactEmail: client.contactEmail,
        contactPerson: client.contactPerson,
        invoiceTerms: client.invoiceTerms,
        paymentTerms: client.paymentTerms,
        vat: client.vat,
        }
        console.log(data)
        await setDoc(doc(dbRef), data);
        deleteItem(id)
    };

            const deleteSeperate = async (id) => {
        const dbRef = collection(db, "clients");
        await deleteDoc(doc(dbRef, id))
        window.location.reload(false);
    }
    
    const deletePermanant = () => {
        deleteSeperate(id)
        // console.log(client)
    }


  return (
        <tr className="grid grid-cols-6 gap-3 text-sm items-center border border-1 py-3 mx-4 px-4 text-gray-800">
                        <td className='text-sm text-left'>{client.clientName}</td>
                        <td className='text-sm text-left col-span-2'>{client.clientAddress}</td>
                        <td className='text-sm text-left'>{client.contactNumber}</td>
                        <td className='text-sm text-left'>{client.contactEmail}</td>
                        <td className='text-sm text-left flex flex-row'>
                            <button onClick={addUserToFirebase} id={client.id} className='bg-blue-400 hover:bg-blue-500 text-white rounded p-1 m-1'>
                                {/* <Link to={`/clients/${client.id}`}> */}
                                <MdRestore className="w-6 h-6 m-1" />
                                {/* </Link> */}
                            </button>
                            <button id={client.id} onClick={deletePermanant} className='bg-red-400 hover:bg-red-500 text-white rounded p-1 m-1'>
                                <FiTrash className="w-6 h-6 m-1" />
                            </button>
                        </td>
        </tr>
  )
}
