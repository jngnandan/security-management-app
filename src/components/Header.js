
import React from 'react'
import { useState } from 'react'

import { Link } from 'react-router-dom'
import Dashboard from '../assets/icons/dashboard.svg'
import Employees from '../assets/icons/Employees.svg'
import Clients from '../assets/icons/clients.svg'
import Sites from '../assets/icons/sites.svg'
import Roster from '../assets/icons/roster.svg'
import Calls from '../assets/icons/calls.svg'
import Events from '../assets/icons/events.svg'
import Finance from '../assets/icons/finance.svg'
import Reports from '../assets/icons/reports.svg'
import Permissions from '../assets/icons/permissions.svg'
import Settings from '../assets/icons/settings.svg'
import Superadmin from '../assets/icons/superadmin.svg'

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

import Dropdown from 'react-bootstrap/Dropdown';
import {MdWorkOutline} from 'react-icons/md'
import {HiOutlineUserGroup} from 'react-icons/hi'


const tabsList = [
  { tabId: 'Dashboard', displayText: 'Dashboard' },
  { tabId: 'Employees', displayText: 'Employees' },
  { tabId: 'Clients', displayText: 'Clients' },
  { tabId: 'Sites', displayText: 'Sites' },
  { tabId: 'Roster', displayText: 'Roster' },
  { tabId: 'Finance', displayText: 'Finance' },
  { tabId: 'Reports', displayText: 'Reports' },
  { tabId: 'Permissions', displayText: 'Permissions' },
  { tabId: 'Settings', displayText: 'Settings' },
  { tabId: 'Superadmin', displayText: 'Superadmin' },
]


function Header() {
        const [tabState, setTabState] = useState('ListOfClients')
        const [viewMenu, setViewMenu] = useState(false)

  return (
    <div>
      {/* Seperate Column */}
        <div className="bg-green-400 flex flex-row justify-between">
        {tabsList.map((tab) => (
          <button 
            key={tab.tabId}
            className={`rounded-none text-gray-700 w-24 h-24 flex flex-col justify-center items-center ${tabState === tab.tabId ? 'bg-green-300' : 'bg-green-400'}`}
            onClick={() => setTabState(tab.tabId)}
          >
            <Link to={`/${tab.tabId}`} className="flex flex-col justify-center items-center">
              {tab.tabId === 'Dashboard' && <FiHome size={27} />}
              {/* {tab.tabId === 'Employees' && <FiUsers size={27} />} */}
              
              <Dropdown className="flex flex-col justify-around">
                  <Dropdown.Toggle variant="success" id="dropdown-basic" className="">
                   {tab.tabId === 'Employees' &&  <FiUsers size={27} />}
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="bg-white shadow-lg mt-36 flex flex-col grid grid-flow-row rounded">
                    {/* <Dropdown.Item className="flex flex-row items-center hover:bg-gray-200 text-sm font-semibold p-2 text-gray-600" href="#/action-1">
                      <Link to={`${'/'}`} className="flex flex-row items-center">
                      <HiOutlineUserGroup size={27} className="mr-3" /> Employees
                      </Link>
                      </Dropdown.Item> */}
                    <Dropdown.Item className="flex flex-row items-center hover:bg-gray-200 text-sm font-semibold p-2 text-gray-600" href="#/action-2" >
                      <Link to={`${'/subscontractor'}`} className="flex flex-row items-center">
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

