
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


export default function RosterItem(props) {
    const {client, key, renderClient,} = props
    const {id, name, address, contact, email,} = client

    const {addClient, clientList} = useContext(ContentContext)

    const navigate = useNavigate()

    const deleteItem = async (id) => {
        const dbRef = collection(db, "clients");
        await deleteDoc(doc(dbRef, id))
        window.location.reload(false);
    }

    // clientName, clientEmail, contactFax, chargeRate, chargeRateSupervisor, clientAddress, contactNumber, contactEmail, contactName, invoiceTerms, paymentTerms, vat
    const addUserToFirebase = async () => {
        console.log(client)
        const db = getFirestore();
        const dbRef = collection(db, "deletedClients");
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
    
    const viewInfo = () => {
        renderClient(id)
        // navigate('/clients')
    }


  return (
        <tr className="grid grid-cols-6 gap-3 text-sm items-center border border-1 py-3 mx-4 px-4 text-gray-800">
                        <td className='text-sm text-left'>{client.clientName}</td>
                        <td className='text-sm text-left'>{client.clientAddress}</td>
                        <td className='text-sm text-left col-span-2'>{client.contactNumber}</td>
                        <td className='text-sm text-left'>{client.contactEmail}</td>
        </tr>
  )
}
