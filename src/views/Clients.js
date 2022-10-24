
import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { ContentContext } from '../context/ContentContext'
import { Oval } from 'react-loader-spinner'


import view from '../assets/icons/view.svg'
import deleteItem from '../assets/icons/delete.svg'
import add from '../assets/icons/add.svg'
import list from '../assets/icons/list.svg'

import AddClient from '../views/Clients/AddClient'
import ListOfClients from '../views/Clients/ListOfClients'
import DeletedClients from '../views/Clients/DeletedClients'

// import {AiOutlineDelete} from 'react-icons/ai'


const tabsList = [
  { tabId: 'AddClient', displayText: 'Add Client' },
  { tabId: 'ListOfClients', displayText: 'List of Clients' },
  { tabId: 'Deleted Clients', displayText: 'Deleted Clients' },
]


export default function Clients() {
      const {employees, posts, clientList, loading} = useContext(ContentContext)
      const [currentClients, setCurrentClients] = useState([])
      const [currentPage, setCurrentPage] = useState(3)
      const [tabState, setTabState] = useState('ListOfClients')

    console.log(clientList)

  return (
    <>
    {loading ? (
        <div className="flex flex-col justify-center items-center h-screen">
            <Oval color="#00BFFF" height={80} width={80} />
        </div>
    ) : (
      <div className='flex flex-row w-screen mr-4'>
        {/* Seperate Column */}
        <div className="bg-gray-400">
        {tabsList.map((tab) => (
          <button 
            key={tab.tabId}
            className={`rounded-none text-white rounded w-24 h-24 flex flex-col justify-center items-center ${tabState === tab.tabId ? 'bg-gray-200' : 'bg-gray-400'}`}
            onClick={() => setTabState(tab.tabId)}
          >
            <img src={tab.tabId === 'AddClient' ? add : tab.tabId === 'ListOfClients' ? list : deleteItem} alt="delete" className="w-8 h-8 m-1"/>
            <p className='text-xs text-gray-800'>{tab.displayText}</p>
          </button>
        ))}
        </div>


        {/* Main Column */}
      <div className="mr-8">
        {tabState === 'AddClient' && <AddClient />}
        {tabState === 'ListOfClients' && <ListOfClients />}
        {tabState === 'Deleted Clients' && <DeletedClients />}
      </div>
      </div>

    )}
    </>
  )
}