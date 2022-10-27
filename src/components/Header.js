
import React from 'react'

import { Link } from 'react-router-dom'
import Dashboard from '../assets/icons/dashboard.svg'
import Workforce from '../assets/icons/workforce.svg'
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


export default function Header() {
  return (
    <div className='grid lg:grid-cols-12 grid-cols-6 gap-3 py-2 bg-green-400'>
      <Link className='flex flex-col items-center' to='/'>
        <button className='text-gray-700 p-1 hover:text-white'>
              <FiHome className="w-8 h-8" />
          </button>
        <p className='text-sm font-semibold text-gray-700 m-1'>Dashboard</p>
      </Link>
      <Link className='flex flex-col items-center' to='/workforce'>
        <button className='text-gray-700 p-1 hover:text-white'>
              <FiUsers className="w-8 h-8" />
          </button>
        <p className='text-sm font-semibold text-gray-700 m-1'>Workforce</p>
      </Link>
      <Link className='flex flex-col items-center' to='/clients'>
        <button className='text-gray-700 p-1 hover:text-white'>
              <FiLayers className="w-8 h-8" />
          </button>
        <p className='text-sm font-semibold text-gray-700 m-1'>Clients</p>
      </Link>
      <Link className='flex flex-col items-center' to='/sites'>
        <button className='text-gray-700 p-1 hover:text-white'>
              <FiMap className="w-8 h-8" />
          </button>
        <p className='text-sm font-semibold text-gray-700 m-1'>Sites</p>
      </Link>
      <Link className='flex flex-col items-center' to='/roster'>
        <button className='text-gray-700 p-1 hover:text-white'>
              <FiCalendar className="w-8 h-8" />
          </button>
        <p className='text-sm font-semibold text-gray-700 m-1'>Roster</p>
      </Link>
      <Link className='flex flex-col items-center' to='/calls'>
        <button className='text-gray-700 p-1 hover:text-white'>
              <FiPhoneIncoming className="w-8 h-8" />
          </button>
        <p className='text-sm font-semibold text-gray-700 m-1'>Calls</p>
      </Link>
      <Link className='flex flex-col items-center' to='/events'>
        <button className='text-gray-700 p-1 hover:text-white'>
              <FiCodesandbox className="w-8 h-8" />
          </button>
        <p className='text-sm font-semibold text-gray-700 m-1'>Events</p>
      </Link>
      <Link className='flex flex-col items-center' to='/finance'>
          <button className='text-gray-700 p-1 hover:text-white'>
              <FiBarChart className="w-8 h-8" />
          </button>
        <p className='text-sm font-semibold text-gray-700 m-1'>Finance</p>
      </Link>
      <Link className='flex flex-col items-center' to='/reports'>
      <button className='text-gray-700 p-1 hover:text-white'>
          <FiFile className="w-8 h-8" />
          </button>
        <p className='text-sm font-semibold text-gray-700 m-1'>Reports</p>
      </Link>
      <Link className='flex flex-col items-center' to='/permissions'>
          <button className='text-gray-700 p-1 hover:text-white'>
              <FiUserCheck className="w-8 h-8" />
          </button>
          <p className='text-sm font-semibold text-gray-700 m-1'>Permissions</p>
      </Link>
      <Link className='flex flex-col items-center' to='/settings'>
        <button className='text-gray-700 p-1 hover:text-white'>
              <FiSettings className="w-8 h-8" />
          </button>
        <p className='text-sm font-semibold text-gray-700 m-1'>Settings</p>
      </Link>
      <Link className='flex flex-col items-center' to='/'>
        <button className='text-gray-700 p-1 hover:text-white'>
              <FiPower className="w-8 h-8" />
          </button>        
        <p className='text-sm font-semibold text-gray-700 m-1'>Superadmin</p>
      </Link>
    </div>
  )
}
