
import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { ContentContext } from '../../context/ContentContext'

import moment from 'moment'
import {collection, getDocs, setDoc, doc, query} from 'firebase/firestore'
import {db} from '../../firebase'

import {FiTrash} from 'react-icons/fi'
import {FiEye} from 'react-icons/fi'

import {Link} from 'react-router-dom'

import EmployeeItem from './RosterItem'
import { Oval } from 'react-loader-spinner'
import {BsFillXCircleFill} from 'react-icons/bs'
import {BsCalendarPlus} from 'react-icons/bs'
import {GrPrevious} from 'react-icons/gr'
import {GrNext} from 'react-icons/gr'

export default function ClientRoster() {
      const {employees, posts, clientList, loading,} = useContext(ContentContext)
      const [currentClients, setCurrentClients] = useState([])
      const [currentPage, setCurrentPage] = useState(10)
      const [tabState, setTabState] = useState('ListOfClients')

      const [clientDetails, setClientDetails] = useState(null)
      var now = moment();
var monday = now.clone().weekday(1).format('ddd, DD MMM YY');
var tuesday = now.clone().weekday(2).format('ddd, DD MMM YY');
var wednesday = now.clone().weekday(3).format('ddd, DD MMM YY');
var thursday = now.clone().weekday(4).format('ddd, DD MMM YY');
var friday = now.clone().weekday(5).format('ddd, DD MMM YY');
var saturday = now.clone().weekday(6).format('ddd, DD MMM YY');
var sunday = now.clone().weekday(7).format('ddd, DD MMM YY');
var isNowWeekday = now.isBetween(monday, friday, null, '[]');

      const [firstDay, setFirstDay] = useState(monday)
      const [secondDay, setSecondDay] = useState(tuesday)
        const [thirdDay, setThirdDay] = useState(wednesday)
        const [fourthDay, setFourthDay] = useState(thursday)
        const [fifthDay, setFifthDay] = useState(friday)
        const [sixthDay, setSixthDay] = useState(saturday)
        const [seventhDay, setSeventhDay] = useState(sunday)
        

      const renderClient = async (id) => {
            const findClient = await clientList.find(client => client.id === id)
            setClientDetails(findClient)
      }

const currentWeek = () => {
        var now = moment();
var monday = now.clone().weekday(1).format('ddd, DD MMM YY');
var tuesday = now.clone().weekday(2).format('ddd, DD MMM YY');
var wednesday = now.clone().weekday(3).format('ddd, DD MMM YY');
var thursday = now.clone().weekday(4).format('ddd, DD MMM YY');
var friday = now.clone().weekday(5).format('ddd, DD MMM YY');
var saturday = now.clone().weekday(6).format('ddd, DD MMM YY');
var sunday = now.clone().weekday(7).format('ddd, DD MMM YY');
var isNowWeekday = now.isBetween(monday, friday, null, '[]');
}



const previousWeek = () => {
        now = now.subtract(1, 'weeks');
        setFirstDay(now.clone().weekday(1).format('ddd, DD MMM YY'));
        setSecondDay(now.clone().weekday(2).format('ddd, DD MMM YY'));
        setThirdDay(now.clone().weekday(3).format('ddd, DD MMM YY'));
        setFourthDay(now.clone().weekday(4).format('ddd, DD MMM YY'));
        setFifthDay(now.clone().weekday(5).format('ddd, DD MMM YY'));
        setSixthDay(now.clone().weekday(6).format('ddd, DD MMM YY'));
        setSeventhDay(now.clone().weekday(7).format('ddd, DD MMM YY'));
    }

    const nextWeek = () => {
        now = now.add(1, 'weeks');
        setFirstDay(now.clone().weekday(1).format('ddd, DD MMM YY'));
        setSecondDay(now.clone().weekday(2).format('ddd, DD MMM YY'));
        setThirdDay(now.clone().weekday(3).format('ddd, DD MMM YY'));
        setFourthDay(now.clone().weekday(4).format('ddd, DD MMM YY'));
        setFifthDay(now.clone().weekday(5).format('ddd, DD MMM YY'));
        setSixthDay(now.clone().weekday(6).format('ddd, DD MMM YY'));
        setSeventhDay(now.clone().weekday(7).format('ddd, DD MMM YY'));
    }


  return (
    <div className="bg-gray-200 w-screen">
      {clientDetails ? (
        <div className="card shadow w-10/12 card">
            <div className="flex flex-row justify-end">
                <BsFillXCircleFill className='w-8 h-8 m-4 mt-8 text-gray-500 hover:text-gray-900' onClick={() => setClientDetails(null)} />
            </div>
            <div>
                <h1 className="text-2xl text-center font-bold text-gray-900">Client Details</h1>
            </div>

            {clientDetails ? (
                <div>
                <div className="flex flex-col items-start justify-start pl-16">
                    <div className="flex flex-row justify-start items-center w-54 m-1">
                        <p className="text-sm font-semibold text-gray-700">Client Cool:</p>
                    <p className="m-2 w-54 text-sm">{clientDetails.clientName}</p>
                    </div>
                    <div className="flex flex-row justify-start items-center w-54 m-1">
                        <p className="text-sm font-semibold text-gray-700">Client Address:</p>
                    <p className="m-2 w-54 text-sm">{clientDetails.clientAddress}</p>
                    </div>
                    <div className="flex flex-row justify-start items-center w-54 m-1">
                        <p className="text-sm font-semibold text-gray-700">Contact Person:</p>
                    <p className="m-2 w-54 text-sm">{clientDetails.contactPerson}</p>
                    </div>
                    <div className="flex flex-row justify-start items-center w-54 m-1">
                        <p className="text-sm font-semibold text-gray-700">Contact Number</p>
                    <p className="m-2 w-54 text-sm">{clientDetails.contactNumber}</p>
                    </div>
                    <div className="flex flex-row justify-start items-center w-54 m-1">
                        <p className="text-sm font-semibold text-gray-700">Contact Email</p>
                    <p className="m-2 w-54 text-sm">{clientDetails.contactEmail}</p>
                    </div>
                    <div className="flex flex-row justify-start items-center w-54 m-1">
                        <p className="text-sm font-semibold text-gray-700">Invoice Terms</p>
                    <p className="m-2 w-54 text-sm">{clientDetails.invoiceTerms}</p>
                    </div>
                    <div className="flex flex-row justify-start items-center w-54 m-1">
                        <p className="text-sm font-semibold text-gray-700">Payment Terms</p>
                    <p className="m-2 w-54 text-sm">{clientDetails.paymentTerms}</p>
                    </div>
                    <div className="flex flex-row justify-start items-center w-54 m-1">
                        <p className="text-sm font-semibold text-gray-700">VAT</p>
                    <p className="m-2 w-54 text-sm">{clientDetails.vat}</p>
                    </div>
                    <div className="flex flex-row justify-start items-center w-54 m-1">
                        <p className="text-sm font-semibold text-gray-700">Charge Rate</p>
                    <p className="m-2 w-54 text-sm">{clientDetails.chargeRate}</p>
                    </div>
                    <div className="flex flex-row justify-start items-center w-54 m-1">
                        <p className="text-sm font-semibold text-gray-700">Charge Rate Supervisor</p>
                    <p className="m-2 w-54 text-sm">{clientDetails.chargeRateSupervisor}</p>
                    </div>
                    <div className="flex flex-row justify-start items-center w-54 m-1">
                        <p className="text-sm font-semibold text-gray-700">Contract Start</p>
                    <p className="m-2 w-54 text-sm">{clientDetails.contractStartDate}</p>
                    </div>
                    <div className="flex flex-row justify-start items-center w-54 m-1">
                        <p className="text-sm font-semibold text-gray-700">Contract End</p>
                    <p className="m-2 w-54 text-sm">{clientDetails.contractEndDate}</p>
                    </div>
                </div>

                <div>
                    <h1 className="text-2xl text-center font-bold text-gray-900">Site Group</h1>


                </div>


                </div>
            ) : (
                <>
                </>
            )}
        </div>)
        : (  
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

            <div className="flex flex-row justify-center items-center">
              {/* change week */}
              <button className="bg-gray-200 hover:bg-gray-300 p-2.5 rounded m-4" onClick={previousWeek}><GrPrevious/></button>
               <button><BsCalendarPlus className="text-2xl text-gray-500" onClick={currentWeek}/></button>
                <button className="bg-gray-200 hover:bg-gray-300 p-2.5 rounded m-4 hover:text-gray-500" onClick={nextWeek}><GrNext /></button>
            </div>
        </div>
                <table className="w-11/12 mr-6">
                    <tr className="grid grid-cols-11 gap-3 text-sm items-center border border-1 py-3 mx-4 px-4 bg-gray-100">
                    {/* <button className='text-sm text-left font-semibold text-gray-700'>Name    </button> */}
                    <button className='text-sm text-left font-semibold text-gray-700'>Client</button>
                    <button  className='text-sm text-left font-semibold text-gray-700 hover:text-black'>Sid</button>
                    <button className='text-sm text-left col-span-2 font-semibold text-gray-700'>Site Name</button>
                    <button className='text-sm text-left font-semibold text-gray-700'>{firstDay}</button>
                    <button className='text-sm text-left font-semibold text-gray-700'>{secondDay}</button>
                    <button className='text-sm text-left font-semibold text-gray-700'>{thirdDay}</button>
                    <button className='text-sm text-left font-semibold text-gray-700'>{fourthDay}</button>
                    <button className='text-sm text-left font-semibold text-gray-700'>{fifthDay}</button>
                    <button className='text-sm text-left font-semibold text-gray-700'>{sixthDay}</button>
                    <button className='text-sm text-left font-semibold text-gray-700'>{seventhDay}</button>
                    </tr>
                    {clientList.slice(setCurrentClients, currentPage).map((client, index) => (
                        <EmployeeItem key={index} client={client} renderClient={renderClient}/>
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

        </div>)}
      
    </div>
  )
}
