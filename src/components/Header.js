
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

export default function Header() {
  return (
    <div className='grid lg:grid-cols-12 grid-cols-6 gap-3 py-3 bg-blue-200'>
      <Link className='flex flex-col items-center' to='/'>
        <img className='h-9' src={Dashboard} alt='logo' />
        <p className='text-sm m-1'>Dashboard</p>
      </Link>
      <Link className='flex flex-col items-center' to='/workforce'>
        <img className='h-9' src={Workforce} alt='logo' />
        <p className='text-sm m-1'>Workforce</p>
      </Link>
      <Link className='flex flex-col items-center' to='/clients'>
        <img className='h-9' src={Clients} alt='logo' />
        <p className='text-sm m-1'>Clients</p>
      </Link>
      <Link className='flex flex-col items-center' to='/sites'>
        <img className='h-9' src={Sites} alt='logo' />
        <p className='text-sm m-1'>Sites</p>
      </Link>
      <Link className='flex flex-col items-center' to='/roster'>
        <img className='h-9' src={Roster} alt='logo' />
        <p className='text-sm m-1'>Roster</p>
      </Link>
      <Link className='flex flex-col items-center' to='/calls'>
        <img className='h-9' src={Calls} alt='logo' />
        <p className='text-sm m-1'>Calls</p>
      </Link>
      <Link className='flex flex-col items-center' to='/events'>
        <img className='h-9' src={Events} alt='logo' />
        <p className='text-sm m-1'>Events</p>
      </Link>
      <Link className='flex flex-col items-center' to='/finance'>
        <img className='h-9' src={Finance} alt='logo' />
        <p className='text-sm m-1'>Finance</p>
      </Link>
      <Link className='flex flex-col items-center' to='/reports'>
        <img className='h-9' src={Reports} alt='logo' />
        <p className='text-sm m-1'>Reports</p>
      </Link>
      <Link className='flex flex-col items-center' to='/permissions'>
        <img className='h-9' src={Permissions} alt='logo' />
        <p className='text-sm m-1'>Permissions</p>
      </Link>
      <Link className='flex flex-col items-center' to='/settings'>
        <img className='h-9' src={Settings} alt='logo' />
        <p className='text-sm m-1'>Settings</p>
      </Link>
      <Link className='flex flex-col items-center' to='/'>
        <img className='h-9' src={Superadmin} alt='logo' />
        <p className='text-sm m-1'>Superadmin</p>
      </Link>
    </div>
  )
}
