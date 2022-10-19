
import React from 'react'

import clientsDashboard from '../assets/icons/clients-dashboard.svg'

import { useContext } from 'react'
import { ContentContext } from '../context/ContentContext'

import { Oval } from 'react-loader-spinner'

import PieChart from '../components/PieChart'
import {Bar, Pie} from 'react-chartjs-2'


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
    const {employees, posts, loading} = useContext(ContentContext)
    // console.log(loading)



  return (
    <>
    {loading ? (
        <div className="flex justify-center items-center h-screen">
            <Oval type="ThreeDots" color="green" height={80} width={80} />
        </div>
    ) : (
            <div>
                <div>
                    
                </div>
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
        
        {/* Chart */}
        <div>
            {/* <BarChart /> */}
        </div>

        {/* Current Shifts */}
        <div className="card shadow">
            <p className='pt-3 pl-3 pb-2 text-xl text-gray-500'>Current Shifts</p>
        <div className='flex flex-col justify-start'>
            <div className="flex flex-row items-center mx-4">
             <p>Show</p>
            <select onSelect={10} className="w-20 h-10 border border-1 mx-4 my-2 rounded">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select> 
            </div>

            <div className='flex flex-row mx-4 items-center'>
                <p>Search</p>
                <input type="text" className="w-40 h-10 border border-1 mx-4 my-2 rounded" />
            </div>
        </div>
                <table className="w-screen mr-4">
                    <tr className="grid grid-cols-6 gap-4 text-sm items-center border border-1 py-3 mx-4">
                    <th className='text-sm text-left'>Name</th>
                    <th className='text-sm text-left'>Contact</th>
                    <th className='text-sm text-left'>SIA</th>
                    <th className='text-sm text-left'>Type</th>
                    <th className='text-sm text-left'>SIA Expiry</th>
                    <th className='text-sm text-left'>Status</th>
                    </tr>
                    {employees.map((val, key) => {
                    return (
                        <tr key={key} className="grid grid-cols-6 gap-4 text-sm px-4 items-center py-2 mx-4">
                        <td className='text-sm text-left'>{val.name}</td>
                        <td className='text-sm text-left'>{val.contact}</td>
                        <td className='text-sm text-left'>{val.sia}</td>
                        <td className='text-sm text-left'>{val.type}</td>
                        <td className='text-sm text-left'>{val.expiry}</td>
                        <td className='text-sm text-left'>{val.status}</td>
                        </tr>
                    )
                    })}
                </table>
        
        </div>

    </div>)}
    </>

  )
}
