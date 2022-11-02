
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

import AddEmployee from '../views/Employees/AddEmployee'
import ListOfEmployees from '../views/Employees/ListOfEmployees'
import DeletedEmployees from '../views/Employees/DeletedEmployees'

import {FiPlusCircle} from 'react-icons/fi'
import {FiList} from 'react-icons/fi'
import {FiTrash} from 'react-icons/fi'

const tabsList = [
  { tabId: 'AddEmployee', displayText: 'Add Employee' },
  { tabId: 'ListOfEmployees', displayText: 'List of Employees' },
  { tabId: 'Deleted Employees', displayText: 'Deleted Employees' },
]


export default function Employees() {
      const {employees, posts, clientList, loading, user} = useContext(ContentContext)
      const [currentClients, setCurrentClients] = useState([])
      const [currentPage, setCurrentPage] = useState(3)
      const [tabState, setTabState] = useState('ListOfEmployees')

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
            {/* <img src={tab.tabId === 'AddEmployee' ? add : tab.tabId === 'ListOfEmployees' ? list : deleteItem} alt="delete" className="w-8 h-8 m-1"/> */}
            {tab.tabId === 'AddEmployee' ? <FiPlusCircle className="w-8 h-8 m-1"/> : tab.tabId === 'ListOfEmployees' ? <FiList className="w-8 h-8 m-1"/> : <FiTrash className="w-8 h-8 m-1"/>}
            <p className='text-sm font-medium pt-1'>{tab.displayText}</p>
          </button>
        ))}
        </div>

        {/* Main Column */}
      <div className="mr-8">
        {tabState === 'AddEmployee' && <AddEmployee />}
        {tabState === 'ListOfEmployees' && <ListOfEmployees />}
        {tabState === 'Deleted Clients' && <DeletedEmployees />}
      </div>
      </div>

    )}
    </>
  )
}