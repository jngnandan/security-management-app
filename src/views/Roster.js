
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

import AddShifts from './Roster/AddShifts'
import ClientRoster from './Roster/ClientRoster'
import DeletedEmployees from '../views/Roster/DeletedEmployees'

import {FiPlusCircle} from 'react-icons/fi'
import {FiList} from 'react-icons/fi'
import {FiTrash} from 'react-icons/fi'
import {FiLayers} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'

const tabsList = [
  { tabId: 'AddShifts', displayText: 'Add Shifts' },
  { tabId: 'ClientRoster', displayText: 'Client Roster' },
  { tabId: 'Deleted Employees', displayText: 'Staff Roster' },
]


export default function Roster() {
      const {employees, posts, clientList, loading, user} = useContext(ContentContext)
      const [currentClients, setCurrentClients] = useState([])
      const [currentPage, setCurrentPage] = useState(3)
      const [tabState, setTabState] = useState('ClientRoster')

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
        <div className="bg-gray-400 h-screen">
        {tabsList.map((tab) => (
          <button 
            key={tab.tabId}
            className={`rounded-none text-gray-700 focus:text-gray-400 rounded w-24 h-24 flex flex-col justify-center items-center ${tabState === tab.tabId ? 'bg-gray-200' : 'bg-gray-400'}`}
            onClick={() => setTabState(tab.tabId)}
          >
            {/* <img src={tab.tabId === 'AddShifts' ? add : tab.tabId === 'ClientRoster' ? list : deleteItem} alt="delete" className="w-8 h-8 m-1"/> */}
            {tab.tabId === 'AddShifts' ? <FiPlusCircle className="w-8 h-8 m-1"/> : tab.tabId === 'ClientRoster' ? <FiLayers className="w-8 h-8 m-1"/> : <FiUsers className="w-8 h-8 m-1"/>}
            <p className='text-sm font-medium pt-1'>{tab.displayText}</p>
          </button>
        ))}
        </div>

        {/* Main Column */}
      <div className="mr-8">
        {tabState === 'AddShifts' && <AddShifts />}
        {tabState === 'ClientRoster' && <ClientRoster />}
        {tabState === 'Deleted Clients' && <DeletedEmployees />}
      </div>
      </div>

    )}
    </>
  )
}