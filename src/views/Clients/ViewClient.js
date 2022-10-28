
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
    const {name, clientName, clientAddress, contactName, contactEmail} = client

  return (
    <div>
      {client ? (
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="text-xl font-medium">{clientName}</p>
          <p className="text-xl font-medium">{clientAddress}</p>
          <p className="text-xl font-medium">{contactName}</p>
          <p className="text-xl font-medium">{contactEmail}</p>
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