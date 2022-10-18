
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

export default function Header() {
  return (
    <div className='grid grid-cols-11 gap-3'>
      <Link className='flex flex-col items-center' to='/'>
        <img className='h-10' src={Dashboard} alt='logo' />
        <p className='text-sm'>Dashboard</p>
      </Link>
      <Link className='flex flex-col items-center' to='/workforce'>
        <img className='h-10' src={Workforce} alt='logo' />
        <p className='text-sm'>Workforce</p>
      </Link>
      <Link className='flex flex-col items-center' to='/clients'>
        <img className='h-10' src={Clients} alt='logo' />
        <p className='text-sm'>Clients</p>
      </Link>
      <Link className='flex flex-col items-center' to='/sites'>
        <img className='h-10' src={Sites} alt='logo' />
        <p className='text-sm'>Sites</p>
      </Link>
      <Link className='flex flex-col items-center' to='/roster'>
        <img className='h-10' src={Roster} alt='logo' />
        <p className='text-sm'>Roster</p>
      </Link>
      <Link className='flex flex-col items-center' to='/calls'>
        <img className='h-10' src={Calls} alt='logo' />
        <p className='text-sm'>Calls</p>
      </Link>
      <Link className='flex flex-col items-center' to='/events'>
        <img className='h-10' src={Events} alt='logo' />
        <p className='text-sm'>Events</p>
      </Link>
      <Link className='flex flex-col items-center' to='/finance'>
        <img className='h-10' src={Finance} alt='logo' />
        <p className='text-sm'>Finance</p>
      </Link>
      <Link className='flex flex-col items-center' to='/reports'>
        <img className='h-10' src={Reports} alt='logo' />
        <p className='text-sm'>Reports</p>
      </Link>
      <Link className='flex flex-col items-center' to='/permissions'>
        <img className='h-10' src={Permissions} alt='logo' />
        <p className='text-sm'>Permissions</p>
      </Link>
      <Link className='flex flex-col items-center' to='/settings'>
        <img className='h-10' src={Settings} alt='logo' />
        <p className='text-sm'>Settings</p>
      </Link>
    </div>
  )
}
