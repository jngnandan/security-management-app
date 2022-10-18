
import React from 'react'

import clientsDashboard from '../assets/icons/clients-dashboard.svg'


const Data = [
    {
        client: 'Double Check security Ltd t/a T-Class UK',
        site: 'RALPH LAUREN NEW BOND ST ,W1S 3RL',
        postcode: 'W1S3RL',
        startTimes: '12:00',
        endTimes: '19:00',
        hours: 7,
        Employee: 'USMAAN CHEEMA RIAZ',
        contact: 3,
        sia: 1016821349294014,
        expiry: '04-08-2025',
        status: 'confirmed',
    },
    {
        client: 'Double Check security Ltd t/a T-Class UK',
        site: 'RALPH LAUREN NEW BOND ST ,W1S 3RL',
        postcode: 'W1S3RL',
        startTimes: '12:00',
        endTimes: '19:00',
        hours: 7,
        Employee: 'USMAAN CHEEMA RIAZ',
        contact: 3,
        sia: 1016821349294014,
        expiry: '04-08-2025',
        status: 'confirmed',
    },
    {
        client: 'Double Check security Ltd t/a T-Class UK',
        site: 'RALPH LAUREN NEW BOND ST ,W1S 3RL',
        postcode: 'W1S3RL',
        startTimes: '12:00',
        endTimes: '19:00',
        hours: 7,
        Employee: 'USMAAN CHEEMA RIAZ',
        contact: 3,
        sia: 1016821349294014,
        expiry: '04-08-2025',
        status: 'confirmed',
    },
]

const activeWork = [
    {
        name: 'ACTIVE STAFF',
        number: 243,
        icon: '../assets/icons/clients-dashboard.svg',
        color: 'bg-blue-200',
        contrast: 'bg-blue-400',
       
    },
     {
        name: 'ACTIVE CLIENTS',
        number: 243,
        icon: '../assets/icons/clients-dashboard.svg',
        color: 'bg-red-200',
        contrast: 'bg-red-400',
    },
    {
        name: 'ACTIVE SITES',
        number: 129,
        icon: '../assets/icons/clients-dashboard.svg',
        color: 'bg-green-200',
        contrast: 'bg-green-400',
    },

]



export default function Dashboard() {
  return (
    <div>
        <p className='pt-3 pl-3 pb-2 text-xl text-gray-500'>Dashboard</p>
        {/* Active Work */}
        <div className='grid lg:grid-cols-2 gap-3 mx-4'>
            {activeWork.map((item, index) => (
                <div key={index} className={`${item.color} grid grid-cols-3 items-center h-20 rounded-md`}>
                <div className={`${item.contrast} h-20 grid-span-2 flex flex-col justify-center items-center rounded-l-md`}>
                <img className='h-9' src={item.icon} alt='logo' />
                </div>
                <div className="pl-4">
                <p className='text-2xl font-semibold'>{item.number}</p>
                <p>{item.name}</p>
                </div>
                </div>
            ))}
        </div>

        {/* Current Shifts */}
        <div className="card shadow h-40 m-4">
            <p className='pt-3 pl-3 pb-2 text-xl text-gray-500'>Current Shifts</p>
            
        
        </div>

    </div>
  )
}
