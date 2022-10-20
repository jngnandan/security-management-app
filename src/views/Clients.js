
import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { ContentContext } from '../context/ContentContext'
import { Oval } from 'react-loader-spinner'
import {collection, getDocs, setDoc, doc, query} from 'firebase/firestore'
import {db} from '../firebase'

import arrowLeft from '../../src/assets/icons/arrow-left.svg' 
import arrowRight from '../../src/assets/icons/arrow-right.svg' 

import view from '../assets/icons/view.svg'
import deleteItem from '../assets/icons/delete.svg'
import add from '../assets/icons/add.svg'
import list from '../assets/icons/list.svg'


export default function Clients() {
      const {employees, posts, clientList, loading} = useContext(ContentContext)
      const [currentClients, setCurrentClients] = useState([])
      const [currentPage, setCurrentPage] = useState(3)


    console.log(clientList)

  return (
    <>
    {loading ? (
        <div className="flex flex-col justify-center items-center h-screen">
            <Oval color="#00BFFF" height={80} width={80} />
        </div>
    ) : (
      <div className='flex flex-row w-screen'>
        {/* Seperate Column */}
        <div className='w-24 bg-gray-400 flex flex-col justify-start'>
          <button className='rounded-null text-white rounded w-24 h-20 flex flex-col justify-center items-center'>
            <img src={add} alt="delete" className="w-8 h-8 m-1"/>
            <p className='text-xs text-gray-800'>Add Client</p>
          </button>
          <button className='bg-gray-200 rounded-null text-white rounded w-24 h-20 flex flex-col justify-center items-center'>
            <img src={list} alt="delete" className="w-8 h-8 m-1"/>
            <p className='text-xs text-gray-800'>List of Clients</p>
          </button>
          <button className='rounded-null text-white rounded w-24 h-20 flex flex-col justify-center items-center'>
            <img src={deleteItem} alt="delete" className="w-10 h-10 m-1"/>
            <p className='text-xs text-gray-800'>Deleted Clients</p>
          </button>
        </div>
        {/* Main Column */}
      <div className="bg-gray-200 h-screen">
        <div className="card shadow bg-white">
            <p className='pt-3 pl-3 pb-1 text-xl font-semibold text-gray-500'>Current Clients</p>
        <div className='flex flex-row justify-start mb-1'>
            <div className="flex flex-row items-center mx-4">
             <p className="text-sm">Show</p>
            <select onChange={(e) => setCurrentPage(e.target.value)} className="mx-3 border border-1 border-gray-300 rounded py-1 pl-2 text-sm">
                <option value="1">1</option>
                <option value="2">2</option>
                <option selected value="3">3</option>
                <option value="100">100</option>
            </select> 
            </div>

            <div className='flex flex-row mx-4 items-center'>
                <p className="text-sm">Search</p>
                <input onChange={(e) => setCurrentClients(e.target.value)} type="text" className="w-40 h-10 border border-1 mx-4 my-2 rounded" />
            </div>
        </div>
                <table className="w-auto mr-6">
                    <tr className="grid grid-cols-6 gap-3 text-sm items-center border border-1 py-3 mx-4 px-4 bg-gray-100">
                    {/* <button className='text-sm text-left font-semibold text-gray-700'>Name    </button> */}
                    <button className='text-sm text-left font-semibold text-gray-700'>Client</button>
                    <button  className='text-sm text-left col-span-2 font-semibold text-gray-700 hover:text-black'>Address</button>
                    <button className='text-sm text-left font-semibold text-gray-700'>Contact</button>
                    <button className='text-sm text-left font-semibold text-gray-700'>Email</button>
                    <button className='text-sm text-left font-semibold text-gray-700'>Actions</button>
                    </tr>
                    {clientList.slice(setCurrentClients, currentPage).map((client, index) => (
                        <tr key={index} className="grid grid-cols-6 gap-3 text-sm items-center border border-1 py-3 mx-4 px-4 text-gray-800">
                        <td className='text-sm text-left'>{client.client}</td>
                        <td className='text-sm text-left col-span-2'>{client.address}</td>
                        <td className='text-sm text-left'>{client.contact}</td>
                        <td className='text-sm text-left'>{client.email}</td>
                        <td className='text-sm text-left'>
                            <button className='bg-blue-400 text-white rounded p-1 m-1'>
                              <img src={view} alt="view" className="w-8 h-8 m-1" />
                            </button>
                            <button className='bg-red-400 text-white rounded p-1 m-1'>
                              <img src={deleteItem} alt="delete" className="w-8 h-8 m-1"/>
                            </button>
                        </td>
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
                    <button onClick={() =>  setCurrentPage(1)} className="border border-2 active:bg-gray-200 border-gray-200 rounded h-8 w-8 flex justify-center items-center mx-1">
                        1
                    </button>
                    <button onClick={() =>  setCurrentPage(2)} className="border border-2 active:bg-gray-200 border-gray-200 rounded h-8 w-8 flex justify-center items-center mx-1">
                        2
                    </button>
                    <button onClick={() =>  setCurrentPage(3)} className="border border-2 active:bg-gray-200 border-gray-200 rounded h-8 w-8 flex justify-center items-center mx-1">
                        3
                    </button>
                    <button onClick={() =>  setCurrentPage(currentPage+10)} className="border border-2 active:bg-gray-200 border-gray-200 rounded h-8 w-8 flex justify-center items-center mx-1">
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
