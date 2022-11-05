

import React from 'react'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ContentContext } from '../../context/ContentContext'

import { Oval } from 'react-loader-spinner'

import { collection, deleteDoc, dbRef, doc, getFirestore, ref, deleteObject, setDoc } from 'firebase/firestore'
import { db } from '../../firebase'

import DeletedItem from './DeletedItem'


export default function DeletedEmployees() {
  const {deletedClients, loading} = useContext(ContentContext)
  // 'setCurrentClients' is not defined  no-undef
//   setCurrentClients' is not defined  no-undef
//   'ClientItem' is not defined         react/jsx-no-undef
//  renderClient' is not defined

  const [currentPage, setCurrentPage] = useState(10)
  const [currentClients, setCurrentClients] = useState([])
  const [clientItem, setClientItem] = useState(null)
  const [renderClient, setRenderClient] = useState(null)


  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center">
          <Oval />
        </div>
      ) : (
        <div className="card shadow bg-white w-screen">
            <p className='pt-3 pl-3 pb-1 text-xl font-semibold text-gray-500'>Current Clients</p>
        <div className='flex flex-row justify-start mb-1'>
            <div className="flex flex-row items-center mx-4">
             <p className="text-sm">Show</p>
            <select onChange={(e) => setCurrentPage(e.target.value)} className="mx-3 border border-1 border-gray-300 rounded py-1 pl-2 text-sm">
                <option selected value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
                <option value={50}>50</option>
            </select> 
            </div>

            <div className='flex flex-row mx-4 items-center'>
                <p className="text-sm">Search</p>
                <input onChange={(e) => setCurrentClients(e.target.value)} type="text" className="w-40 h-10 border border-1 mx-4 my-2 rounded" />
            </div>
        </div>
                <table className="w-11/12 mr-6">
                    <tr className="grid grid-cols-6 gap-3 text-sm items-center border border-1 py-3 mx-4 px-4 bg-gray-100">
                    {/* <button className='text-sm text-left font-semibold text-gray-700'>Name    </button> */}
                    <button className='text-sm text-left font-semibold text-gray-700'>Client</button>
                    <button  className='text-sm text-left col-span-2 font-semibold text-gray-700 hover:text-black'>Address</button>
                    <button className='text-sm text-left font-semibold text-gray-700'>Contact</button>
                    <button className='text-sm text-left font-semibold text-gray-700'>Email</button>
                    <button className='text-sm text-left font-semibold text-gray-700'>Actions</button>
                    </tr>
                    {deletedClients.slice(setCurrentClients, currentPage).map((client, index) => (
                        <DeletedItem key={index} client={client} renderClient={renderClient}/>
                    ))}
                                {/* Pagination */}
            <div className="flex flex-row justify-between items-center mx-4 my-3">   
                <p className='text-sm text-gray-500 mb-3'>Showing 1 to 2 of 2 entries</p>
                <div className="flex flex-row items-center mb-3">
                    {/* <button onClick={() =>  setCurrentShiftsStart(currenShiftsStart-10)} className="border border-2 active:bg-gray-200 border-gray-200 rounded h-8 w-8 flex justify-center items-center mx-1">
                        <img src={arrowLeft} alt="arrow-left" className='p-1' />
                    </button> */}
                    <button onClick={() =>  setCurrentPage(10)} className="border border-2 active:bg-gray-200 border-gray-200 rounded h-8 w-8 flex justify-center items-center mx-1">
                        1
                    </button>
                    <button onClick={() =>  setCurrentPage(20)} className="border border-2 active:bg-gray-200 border-gray-200 rounded h-8 w-8 flex justify-center items-center mx-1">
                        2
                    </button>
                    <button onClick={() =>  setCurrentPage(30)} className="border border-2 active:bg-gray-200 border-gray-200 rounded h-8 w-8 flex justify-center items-center mx-1">
                        3
                    </button>
                    <button onClick={() =>  setCurrentPage(currentPage+10)} className="border border-2 active:bg-gray-200 border-gray-200 rounded h-8 w-8 flex justify-center items-center mx-1">
                        <img src='https://firebasestorage.googleapis.com/v0/b/securitymanagementapp.appspot.com/o/arrow-right.svg?alt=media&token=abb0b9a9-d23c-466c-a2f4-28b4b2001f53' alt="arrow-left" className='p-1' />
                    </button>
                </div>
                </div>
                </table>

        </div>  
      )}
    </div>
  )
}
