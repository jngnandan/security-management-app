
import React, { useEffect } from 'react'

import clientsDashboard from '../assets/icons/clients-dashboard.svg'

import { useContext, useState } from 'react'
import { ContentContext } from '../context/ContentContext'
import { useNavigate } from 'react-router-dom'

import { Oval } from 'react-loader-spinner'

import arrowLeft from '../../src/assets/icons/arrow-left.svg' 
import arrowRight from '../../src/assets/icons/arrow-right.svg' 

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {Bar, Pie} from 'react-chartjs-2'
import PieChart from './Dashboard/PieChart'

import {FaUserFriends} from 'react-icons/fa'
import {FaThList} from 'react-icons/fa'
import {FaStream} from 'react-icons/fa'

import {getAuth} from "firebase/auth";


const activeWork = [
    {
        name: 'ACTIVE STAFF',
        number: 243,
        icon: FaUserFriends,
        color: 'bg-blue-200',
        contrast: 'bg-blue-400',
       
    },
     {
        name: 'ACTIVE CLIENTS',
        number: 243,
        icon: FaThList,
        color: 'bg-red-200',
        contrast: 'bg-red-400',
    },
    {
        name: 'ACTIVE SITES',
        number: 129,
        icon: FaStream,
        color: 'bg-green-200',
        contrast: 'bg-green-400',
    },
]


export default function Dashboard() {
    const {employees, posts, loading,} = useContext(ContentContext)
    const [employeeList, setEmployeeList] = useState([])
    const [expiredList, setExpiredList] = useState([])
        const navigate = useNavigate()
useEffect(() => {
    getAuth().onAuthStateChanged((user) => {
        if (user) {
            // console.log(user.email)
        } else {
            console.log('no user')
            navigate('/')
        }
    })
}, [])


    useEffect(() => {
    const filterActive = employees.filter(eachitem => eachitem.status.includes('Active'))
        setEmployeeList(filterActive)
    }, [employees])

    useEffect(() => {
        const filterExpired = employees.filter(eachitem => eachitem.status.includes('Expired'))
        setExpiredList(filterExpired)
    }, [employees])

    const [currentShifts, setCurrentShifts] = useState(5)
    const [currenShiftsStart, setCurrentShiftsStart] = useState(0)
    const [currentSearchQuery, setCurrentSearchQuery] = useState('')
    const [currentSearchResults, setCurrentSearchResults] = useState([])




  return (
    <>
    {loading ? (
        <div className="flex justify-center items-center h-screen">
            <Oval type="ThreeDots" color="green" height={80} width={80} />
        </div>
    ) : (
    <div>
 <div className="bg-gray-100">
        <p className='pt-3 pl-3 pb-2 font-semibold text-xl text-gray-500'>Dashboard</p>
        {/* Active Work */}
        <div className='grid lg:grid-cols-3 gap-3 mx-4'>
            {activeWork.map((item, index) => (
                <div key={index} className={`${item.color} grid grid-cols-3 items-center h-20 rounded-md`}>
                <div className={`${item.contrast} h-20 grid-span-2 flex flex-col justify-center items-center rounded-l-md`}>
                {/* icons */}
                <div className='text-2xl font-semibold text-white'>
                    {item.icon === FaUserFriends ? <FaUserFriends/> : item.icon === FaThList ? <FaThList/> : <FaStream/>}
                </div>
        </div>
                <div className="pl-4">
                <p className='sq-connext sq2xl font-semibold'>{item.number}</p>
                <p>{item.name}</p>
                </div>
                </div>
            ))}
        </div>
        
    {/* Current Shifts */}
        <div className="card shadow my-8 bg-white">
                    <p className='pt-3 pl-3 pb-1 text-xl font-semibold text-gray-500'>Current Shifts</p>
                <div className='flex flex-row justify-start mb-1'>
                    <div className="flex flex-row items-center mx-4">
                    <p className="text-sm">Show</p>
                    <select onChange={(e) => setCurrentShifts(e.target.value)} className="mx-3 border border-1 border-gray-300 rounded py-1 pl-2 text-sm">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option selected value="3">3</option>
                        <option value="100">100</option>
                    </select> 
                    </div>

                    <div className='flex flex-row mx-4 items-center'>
                        <p className="text-sm">Search</p>
                        <input onChange={(e) => setCurrentSearchQuery(e.target.value)} type="text" className="w-40 h-10 border border-1 mx-4 my-2 rounded" />
                    </div>
                </div>
                        <table className="w-screen mr-6">
                            <tr className="grid grid-cols-6 gap-3 text-sm items-center border border-1 py-3 mx-4 px-4 bg-gray-100">
                            {/* <button className='text-sm text-left font-semibold text-gray-700'>Name    </button> */}
                            <button className='text-sm text-left font-semibold text-gray-700'>Client    </button>
                            <button  className='text-sm text-left font-semibold text-gray-700 hover:text-black'>Site </button>
                            <button className='text-sm text-left font-semibold text-gray-700'>Postcode  </button>
                            <button className='text-sm text-left font-semibold text-gray-700'>Start Time  </button>
                            <button className='text-sm text-left font-semibold text-gray-700'>End Time</button>
                            <button className='text-sm text-left font-semibold text-gray-700'>Hours</button>
                            </tr>
                            {expiredList.slice(currenShiftsStart, currentShifts).map((employee, index) => (
                                <tr key={index} className="grid grid-cols-6 gap-3 text-sm items-center border border-1 py-3 mx-4 px-4 text-gray-800">
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
                    <div className="flex flex-row justify-between items-center mx-8 my-3">   
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

         {/* Pie Chart    */}
         <div className="flex flex-row justify-between mb-8">
         <div className="bg-white py-4 card w-3/5 flex flex-col justify-center items-center m-2">
            <div className="w-2/5">
           <PieChart />
            </div>
         </div>
                  <div className="bg-white py-4 card w-3/5 flex flex-col justify-center items-center m-2">
            <div className="w-2/5">
           <PieChart />
            </div>
         </div>
         </div>


        {/* Current Employees */}
        <div className="card shadow my-4 bg-white">
            <p className='pt-3 pl-3 pb-1 text-xl font-semibold text-gray-500'>Current Licesnces</p>
        <div className='flex flex-row justify-start mb-1'>
            <div className="flex flex-row items-center mx-4">
             <p className="text-sm">Show</p>
            <select onChange={(e) => setCurrentShifts(e.target.value)} className="mx-3 border border-1 border-gray-300 rounded py-1 pl-2 text-sm">
                <option value="1">1</option>
                <option value="2">2</option>
                <option selected value="3">3</option>
                <option value="100">100</option>
            </select> 
            </div>

            <div className='flex flex-row mx-4 items-center'>
                <p className="text-sm">Search</p>
                <input onChange={(e) => setCurrentSearchQuery(e.target.value)} type="text" className="w-40 h-10 border border-1 mx-4 my-2 rounded" />
            </div>
        </div>
                <table className="w-screen mr-6">
                    <tr className="grid grid-cols-6 gap-3 text-sm items-center border border-1 py-3 mx-4 px-4 bg-gray-100">
                    {/* <button className='text-sm text-left font-semibold text-gray-700'>Name    </button> */}
                    <button className='text-sm text-left font-semibold text-gray-700'>Name    </button>
                    <button  className='text-sm text-left font-semibold text-gray-700 hover:text-black'>Contact </button>
                    <button className='text-sm text-left font-semibold text-gray-700'>SIA  </button>
                    <button className='text-sm text-left font-semibold text-gray-700'>Type  </button>
                    <button className='text-sm text-left font-semibold text-gray-700'>SIA Expiry</button>
                    <button className='text-sm text-left font-semibold text-gray-700'>Status</button>
                    </tr>
                    {employeeList.slice(currenShiftsStart, currentShifts).map((employee, index) => (
                        <tr key={index} className="grid grid-cols-6 gap-3 text-sm items-center border border-1 py-3 mx-4 px-4 text-gray-800">
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

        {/* Expired Employees */}
        <div className="card shadow my-8 bg-white">
                    <p className='pt-3 pl-3 pb-1 text-xl font-semibold text-gray-500'>SIA License Expiry</p>
                <div className='flex flex-row justify-start mb-1'>
                    <div className="flex flex-row items-center mx-4">
                    <p className="text-sm">Show</p>
                    <select onChange={(e) => setCurrentShifts(e.target.value)} className="mx-3 border border-1 border-gray-300 rounded py-1 pl-2 text-sm">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option selected value="3">3</option>
                        <option value="100">100</option>
                    </select> 
                    </div>

                    <div className='flex flex-row mx-4 items-center'>
                        <p className="text-sm">Search</p>
                        <input onChange={(e) => setCurrentSearchQuery(e.target.value)} type="text" className="w-40 h-10 border border-1 mx-4 my-2 rounded" />
                    </div>
                </div>
                        <table className="w-screen mr-6">
                            <tr className="grid grid-cols-6 gap-3 text-sm items-center border border-1 py-3 mx-4 px-4 bg-gray-100">
                            {/* <button className='text-sm text-left font-semibold text-gray-700'>Name    </button> */}
                            <button className='text-sm text-left font-semibold text-gray-700'>Name    </button>
                            <button  className='text-sm text-left font-semibold text-gray-700 hover:text-black'>Contact </button>
                            <button className='text-sm text-left font-semibold text-gray-700'>SIA  </button>
                            <button className='text-sm text-left font-semibold text-gray-700'>Type  </button>
                            <button className='text-sm text-left font-semibold text-gray-700'>SIA Expiry</button>
                            <button className='text-sm text-left font-semibold text-gray-700'>Status</button>
                            </tr>
                            {expiredList.slice(currenShiftsStart, currentShifts).map((employee, index) => (
                                <tr key={index} className="grid grid-cols-6 gap-3 text-sm items-center border border-1 py-3 mx-4 px-4 text-gray-800">
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


    </div>
    </div>
   
    )}
    </>

  )
}
