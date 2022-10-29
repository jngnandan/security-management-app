
import React from 'react'

import { ContentContext } from '../../context/ContentContext'
import { useContext } from 'react'
import { useLocation } from 'react-router-dom'

import { Oval } from 'react-loader-spinner'

import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


function ViewClient() {
    const {clientList} = useContext(ContentContext)
    const {pathname} = useLocation()
    const id = pathname.split('/')[2]
    const client = clientList.find(client => client.id === id)
    const {clientName, clientEmail, contactFax, chargeRate, chargeRateSupervisor, clientAddress, contactNumber, contactEmail, contactName, invoiceTerms, paymentTerms, vat} = client
    console.log(client)

  return (
    <div>
      {client ? (
        <div className="flex flex-col justify-start items-start ">
          <div className="flex flex-row">
            <h1 className="text-2xl font-medium text-gray-800">Client Details</h1> 
          <h1 className="text-2xl">{clientName}</h1>
          </div>
          <p className="text-xl font-medium">{clientName}</p>
          <p className="text-xl font-medium">{clientAddress}</p>
          <p className="text-xl font-medium">{contactName}</p>
          <p className="text-xl font-medium">{contactEmail}</p>
          <p className="text-xl font-medium">{contactNumber}</p>
          <p className="text-xl font-medium">{contactFax}</p>
          <p className="text-xl font-medium">{invoiceTerms}</p>
          <p className="text-xl font-medium">{paymentTerms}</p>
          <p className="text-xl font-medium">{chargeRate}</p>
          <p className="text-xl font-medium">{chargeRateSupervisor}</p>
          <p className="text-xl font-medium">{vat}</p>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
                <Oval color="#00BFFF" height={80} width={80} />
        </div>
      )}
    </div>
  )
}


export default ViewClient