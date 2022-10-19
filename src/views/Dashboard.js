
import React from 'react'

import clientsDashboard from '../assets/icons/clients-dashboard.svg'

import { useContext } from 'react'
import { ContentContext } from '../context/ContentContext'

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

const data = [
  { name: "Anom", age: 19, gender: "Male" },
  { name: "Megha", age: 19, gender: "Female" },
  { name: "Subham", age: 25, gender: "Male"},
]


export default function Dashboard() {
    const {employees, posts} = useContext(ContentContext)
    console.log(employees)



  return (
    <div>
        <p className='pt-3 pl-3 pb-2 text-xl text-gray-500'>Dashboard</p>
        {/* Active Work */}
        <div className='grid lg:grid-cols-3 gap-3 mx-4'>
            {activeWork.map((item, index) => (
                <div key={index} className={`${item.color} grid grid-cols-3 items-center h-20 rounded-md`}>
                <div className={`${item.contrast} h-20 grid-span-2 flex flex-col justify-center items-center rounded-l-md`}>
                <img className='h-9' src={item.icon} alt='logo' />
                </div>
                <div className="pl-4">
                <p className='sq-connext sq2xl font-semibold'>{item.number}</p>
                <p>{item.name}</p>
                </div>
                </div>
            ))}
        </div>

        {/* Current Shifts */}
        <div className="card shadow h-40 m-4">
            <p className='pt-3 pl-3 pb-2 text-xl text-gray-500'>Current Shifts</p>
                {/* <table>
                    <tr>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>SIA Number</th>
                    <th>SIA Type</th>
                    <th>SIA Expiry</th>
                    <th>Status</th>
                    </tr>
                    {employees.map((val, key) => {
                    return (
                        <tr key={key}>
                        <td>{val.name}</td>
                        <td>{val.contact}</td>
                        </tr>
                    )
                    })}
                </table> */}
        
        </div>

    </div>
  )
}
