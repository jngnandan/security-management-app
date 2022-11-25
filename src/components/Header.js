
import React from 'react'
import { useState } from 'react'
import HeaderTab from './HeaderTab'


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

import {FiX} from 'react-icons/fi'
import {FiMenu} from 'react-icons/fi'
import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'

const tabsList = [
  { tabId: 'Dashboard', displayText: 'Dashboard', path: '/dashboard', icon: <FiHome size={27} /> },
  { tabId: 'Employees', displayText: 'Employees', path: '/employees', icon: <FiUsers size={27} />,
   subMenu: [{tabId: 'Employees', displayText: 'Employees', path: '/employees', icon: <HiOutlineUserGroup size={27}/>}, 
             {tabId: 'Subcontractors', displayText: 'Subcontractors', path: '/subcontractors', icon: <MdWorkOutline size={27} className="mr-3" />}] },

  { tabId: 'Clients', displayText: 'Clients', path: '/clients', icon: <FiFile size={27} /> },
  { tabId: 'Sites', displayText: 'Sites', path: '/sites', icon: <FiMap size={27} /> },
  { tabId: 'Roster', displayText: 'Roster', path: '/roster', icon: <FiCalendar size={27} /> },
  { tabId: 'Finance', displayText: 'Finance', path: '/finance', icon: <FiBarChart size={27} /> },
  { tabId: 'Reports', displayText: 'Reports', path: '/reports', icon: <FiLayers size={27} /> },
  { tabId: 'Settings', displayText: 'Settings', path: '/settings', icon: <FiSettings size={27} /> },
  { tabId: 'Superadmin', displayText: 'Superadmin' , path: '/superadmin', icon: <FiPower size={27} /> },
]



function Header() {
        const [tabState, setTabState] = useState('ListOfClients')
        const [viewMenu, setViewMenu] = useState(false)
        
        const [navbarOpen, setNavbarOpen] = useState(true);


  return (
    <div>
      {/* Seperate Column */}
        <div className="bg-green-400 p-1 md:flex md:flex-row md:justify-between hidden md:block">
        {tabsList.map((tab) => (
          <HeaderTab tab={tab} key={tab.tabId} />
        ))}
        </div>

        <div className='bg-green-400 h-20 flex flex-row justify-end items-center md:hidden'>
            {navbarOpen ?
              <button className='w-20 hover:bg-green-300 rounded p-4 h-20 m-2 flex flex-col justify-center items-center'>
              <AiOutlineMenu size={32} className="" onClick={() => setNavbarOpen(!navbarOpen)} />
              </button>
              :
              <button className='w-20 hover:bg-green-300 rounded p-4 h-20 m-2 flex flex-col justify-center items-center'>
              <AiOutlineClose size={32} className="" onClick={() => setNavbarOpen(!navbarOpen)} />
              </button>
            }
        </div>

        <div>
        
        {/* {tabsList.map((tab) => {
          if(navbarOpen) {
            <HeaderTab tab={tab} key={tab.tabId} />
          }}
          )} */}
        
        </div>
    </div>
  )
}

export default Header

