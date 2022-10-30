
import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { ContentContext } from '../context/ContentContext'
import { Oval } from 'react-loader-spinner'
import {useNavigate} from 'react-router-dom'

import {getAuth} from "firebase/auth";

import view from '../assets/icons/view.svg'
import deleteItem from '../assets/icons/delete.svg'
import add from '../assets/icons/add.svg'
import list from '../assets/icons/list.svg'


import AddSites from '../views/Sites/AddSites'
import ListOfSites from '../views/Sites/ListOfSites'
import DeletedSites from '../views/Sites/DeletedSites'

const tabsList = [
  { tabId: 'AddSite', displayText: 'Add Sites' },
  { tabId: 'ListOfSites', displayText: 'List of Sites' },
  { tabId: 'DeletedSites', displayText: 'Deleted Sites' },
]


export default function Sites() {
      const {employees, posts, clientList, loading,user} = useContext(ContentContext)
      const [currentClients, setCurrentClients] = useState([])
      const [currentPage, setCurrentPage] = useState(3)
      const [tabState, setTabState] = useState('ListOfSites')

      const navigate = useNavigate()

        useEffect(() => {
       getAuth().onAuthStateChanged((user) => {
              if(user) {
                    
                }
                else {
                    navigate('/')
                }
            })
    }, [user, navigate])

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
            <img src={tab.tabId === 'AddSite' ? add : tab.tabId === 'ListOfSites' ? list : deleteItem} alt="delete" className="w-8 h-8 m-1"/>
            <p className='text-xs text-gray-800'>{tab.displayText}</p>
          </button>
        ))}
        </div>


        {/* Main Column */}
      <div className="mr-8">
        {tabState === 'AddSite' && <AddSites />}
        {tabState === 'ListOfSites' && <ListOfSites />}
        {tabState === 'DeletedSites' && <DeletedSites />}
      </div>
      </div>

    )}
    </>
  )
}