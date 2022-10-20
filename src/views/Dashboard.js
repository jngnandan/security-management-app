
import React from 'react'

import clientsDashboard from '../assets/icons/clients-dashboard.svg'

import { useContext, useState } from 'react'
import { ContentContext } from '../context/ContentContext'

import { Oval } from 'react-loader-spinner'

import PieChart from '../components/PieChart'
import {Bar, Pie} from 'react-chartjs-2'
import arrowLeft from '../../src/assets/icons/arrow-left.svg' 
import arrowRight from '../../src/assets/icons/arrow-right.svg' 


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
    const [currentShifts, setCurrentShifts] = useState(2)
    const [currenShiftsStart, setCurrentShiftsStart] = useState(0)
    const [currentSearchQuery, setCurrentSearchQuery] = useState('')

    // const currestShiftEmployees = employees.filter(employee => employee.name.toLowerCase().includes(currentSearchQuery.toLowerCase()) && employee.name === currentSearchQuery)


  return (
    <>
    {loading ? (
        <div className="flex justify-center items-center h-screen">
            <Oval type="ThreeDots" color="green" height={80} width={80} />
        </div>
    ) : (
            <div className="bg-gray-100">
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
        <div className="card shadow my-4 bg-white">
            <p className='pt-3 pl-3 pb-1 text-xl text-gray-500'>Current Licesnces</p>
        <div className='flex flex-row justify-start mb-1'>
            <div className="flex flex-row items-center mx-4">
             <p className="text-sm">Show</p>
            <select onChange={(e) => setCurrentShifts(e.target.value)} className="mx-3 border border-gray-300 rounded py-1 pl-2 text-sm">
                <option value="1">1</option>
                <option selected value="2">2</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select> 
            </div>

            <div className='flex flex-row mx-4 items-center'>
                <p className="text-sm">Search</p>
                <input onChange={(e) => setCurrentSearchQuery(e.target.value)} type="text" className="w-40 h-10 border border-1 mx-4 my-2 rounded" />
            </div>
        </div>
                <table className="w-screen mr-6">
                    <tr className="grid grid-cols-6 gap-4 text-sm items-center border border-1 py-3 mx-4 px-4 bg-gray-100">
                    <th className='text-sm text-left'>Name    </th>
                    <th className='text-sm text-left'>Contact </th>
                    <th className='text-sm text-left'>SIA  </th>
                    <th className='text-sm text-left'>Type  </th>
                    <th className='text-sm text-left'>SIA Expiry</th>
                    <th className='text-sm text-left'>Status</th>
                    </tr>
                    {employees.slice(currenShiftsStart, currentShifts).map((employee, index) => (
                        <tr key={index} className="grid grid-cols-6 gap-4 text-sm items-center border border-1 py-3 mx-4 px-4">
                        <td className='text-sm text-left'>{employee.name}</td>
                        <td className='text-sm text-left'>{employee.contact}</td>
                        <td className='text-sm text-left'>{employee.sia}</td>
                        <td className='text-sm text-left'>{employee.type}</td>
                        <td className='text-sm text-left'>{employee.expiry}</td>
                        <td className='text-sm text-left'>{employee.status}</td>
                        </tr>
                    ))}
                </table>
            {/* Pagination */}
            <div className="flex flex-row justify-between items-center mx-4 my-3">   
                <p className='text-sm text-gray-500 mb-3'>Showing 1 to 2 of 2 entries</p>
                <div className="flex flex-row items-center mb-3">
                    {/* <button onClick={() =>  setCurrentShiftsStart(currenShiftsStart-10)} className="border border-2 active:bg-gray-200 border-gray-200 rounded h-8 w-8 flex justify-center items-center mx-1">
                        <img src={arrowLeft} alt="arrow-left" className='p-1' />
                    </button> */}
                    <button onClick={() =>  setCurrentShiftsStart(0)} className="border border-2 active:bg-gray-200 border-gray-200 rounded h-8 w-8 flex justify-center items-center mx-1">
                        1
                    </button>
                    <button onClick={() =>  setCurrentShiftsStart(1)} className="border border-2 active:bg-gray-200 border-gray-200 rounded h-8 w-8 flex justify-center items-center mx-1">
                        2
                    </button>
                    <button onClick={() =>  setCurrentShiftsStart(3)} className="border border-2 active:bg-gray-200 border-gray-200 rounded h-8 w-8 flex justify-center items-center mx-1">
                        3
                    </button>
                    <button onClick={() =>  setCurrentShiftsStart(currenShiftsStart+10)} className="border border-2 active:bg-gray-200 border-gray-200 rounded h-8 w-8 flex justify-center items-center mx-1">
                        <img src={arrowRight} alt="arrow-left" className='p-1' />
                    </button>
                </div>
                </div>
        </div>



    </div>)}
    </>

  )
}
