
import React from 'react'
import { useState } from 'react'

import { Link } from 'react-router-dom'

import Dropdown from 'react-bootstrap/Dropdown';


import {FiSettings} from 'react-icons/fi' 
import {FiLayers} from 'react-icons/fi'
import {FiHome} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {FiMap} from 'react-icons/fi'
import {FiCalendar} from 'react-icons/fi'
import {FiPhoneIncoming} from 'react-icons/fi'
import {FiCodesandbox} from 'react-icons/fi'
import {FiBarChart } from 'react-icons/fi'
import {FiFile} from 'react-icons/fi'
import {FiUserCheck} from 'react-icons/fi'
import {FiPower } from 'react-icons/fi'

import {FiPlusCircle} from 'react-icons/fi'
import {FiList} from 'react-icons/fi'
import {FiTrash} from 'react-icons/fi'
import {MdWorkOutline} from 'react-icons/md'
import {HiOutlineUserGroup} from 'react-icons/hi'


const tabsList = [
  { tabId: 'Dashboard', displayText: 'Dashboard' },
  { tabId: 'Employees', displayText: 'Employees' },
    // { tabId: 'Subcontractor', displayText: 'Subcontractor' },
  { tabId: 'Clients', displayText: 'Clients', icon: <FiFile size={27} /> },
  { tabId: 'Sites', displayText: 'Sites' , icon: <FiMap size={27} />},
  { tabId: 'Roster', displayText: 'Roster', icon: <FiCalendar size={27} /> },
  { tabId: 'Finance', displayText: 'Finance', icon: <FiBarChart size={27} /> },
  { tabId: 'Reports', displayText: 'Reports' , icon: <FiLayers size={27} />},
  { tabId: 'Permissions', displayText: 'Permissions', icon: <FiUserCheck size={27} /> },
  { tabId: 'Settings', displayText: 'Settings', icon: <FiSettings size={27} /> },
  { tabId: 'Superadmin', displayText: 'Superadmin', icon: <FiPower size={27} /> },
]


function Header() {
        const [tabState, setTabState] = useState('ListOfClients')
        const [showEmployee, setShowEmployee] = useState(false)

  return (
    <div>
      {/* Seperate Column */}
        <div className="bg-green-400 flex flex-row justify-between">
        {tabsList.map((tab) => (
          <button 
            key={tab.tabId}
            className={`rounded-none text-gray-700 w-24 h-24 flex flex-col justify-center items-center  ${tabState === tab.tabId ? 'bg-green-300' : ''} ${'hover'? 'bg-green-300' && setShowEmployee(true) : ''}`}
            onClick={() => setTabState(tab.tabId)}
          >
            <Link to={`/${tab.tabId}`} className="flex flex-col justify-center items-center">
              {tab.tabId === 'Dashboard' && <FiHome size={27} />}
              
              <Dropdown className="flex flex-col justify-around">
                  <Dropdown.Toggle variant="success" id="dropdown-basic" className="">
                   {tab.tabId === 'Employees' &&  <FiUsers size={27} />}
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="bg-white shadow-lg mt-36 flex flex-col grid grid-flow-row rounded">
                    <Dropdown.Item className="flex flex-row items-center hover:bg-gray-200 text-sm font-semibold p-2 text-gray-600" href="#/action-1">
                      <Link to="/employees" className="flex flex-row items-center">
                      <HiOutlineUserGroup size={27} className="mr-3" /> Employees
                      </Link>
                      </Dropdown.Item>
                    <Dropdown.Item className="flex flex-row items-center hover:bg-gray-200 text-sm font-semibold p-2 text-gray-600" href="#/action-2" >
                      <Link to="/subcontractor" className="flex flex-row items-center">
                      <MdWorkOutline size={27} className="mr-3" /> Subcontractors
                      </Link>
                      </Dropdown.Item>
                  </Dropdown.Menu>

                  </Dropdown>
              {tab.tabId === 'Clients' && <FiFile size={27} />}
              {tab.tabId === 'Sites' && <FiMap size={27} />}
              {tab.tabId === 'Roster' && <FiCalendar size={27} />}
              {tab.tabId === 'Finance' && <FiBarChart size={27} />}
              {tab.tabId === 'Reports' && <FiLayers size={27} />}
              {tab.tabId === 'Permissions' && <FiUserCheck size={27} />}
              {tab.tabId === 'Settings' && <FiSettings size={27} />}
              {tab.tabId === 'Superadmin' && <FiPower size={27} />}
              <div className="text-sm font-medium pt-1">{tab.displayText}</div>
            </Link>            
          </button>
        ))}
        </div>
        
    </div>
  )
}

export default Header