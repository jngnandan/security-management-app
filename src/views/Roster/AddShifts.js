
import React from 'react'
import { useContext, useState, useEffect,} from 'react'
import { useNavigate,} from 'react-router-dom'

import { useRef } from 'react'

import {collection, getDocs, setDoc, doc, query} from 'firebase/firestore'
import {db} from '../../firebase'


export default function AddShifts() {
  const inputRef = useRef()

  const [clientName, setClientName] = useState('')
  const [clientAddress, setClientAddress] = useState('')
  const [contactPerson, setContactPerson] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [contactFax, setContactFax] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [invoiceTerms, setInvoiceTerms] = useState('')
  const [paymentTerms, setPaymentTerms] = useState('')
  const [contractStartDate, setContractStartDate] = useState('')
  const [contractEndDate, setContractEndDate] = useState('')
  const [chargeRate, setChargeRate] = useState('')
  const [chargeRateSupervisor, setChargeRateSupervisor] = useState('')
  const [vat, setVat] = useState('')

  const [clientList, setClientList] = useState([])

  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const cancelClient = (e) => {
    e.preventDefault()
    setClientName('')
    setClientAddress('')
    setContactPerson('')
    setContactNumber('')
    setContactFax('')
    setContactEmail('')
    setInvoiceTerms('')
    setPaymentTerms('')
    setContractStartDate('')
    setContractEndDate('')
    setChargeRate('')
    setChargeRateSupervisor('')
    setVat('')
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const newClient = {
      clientName: clientName,
      clientAddress: clientAddress,
      contactPerson: contactPerson,
      contactNumber: contactNumber,
      contactFax: contactFax,
      contactEmail: contactEmail,
      invoiceTerms: invoiceTerms,
      paymentTerms: paymentTerms,
      contractStartDate: contractStartDate,
      contractEndDate: contractEndDate,
      chargeRate: chargeRate,
      chargeRateSupervisor: chargeRateSupervisor,
      vat: vat,
    }
    setDoc(doc(db, 'clients'), newClient)
    setClientName('')
    setClientAddress('')
    setContactPerson('')
    setContactNumber('')
    setContactFax('')
    setContactEmail('')
    setInvoiceTerms('')
    setPaymentTerms('')
    setContractStartDate('')
    setContractEndDate('')
    setChargeRate('')
    setChargeRateSupervisor('')
    setVat('')
    setError('Successfully added client') 
  }

  const testForm = (e) => {
    e.preventDefault()
    // console.log(inputRef)
    console.log(inputRef.current.value)
  }

  return (
    <div className="p-4 w-screen pr-8">
      <h1 className='text-2xl text-gray-800'>Add New Shift</h1>
      <form ref={inputRef} onSubmit={testForm} className='grid  md:grid-cols-2 gap-y-4 mt-6'>
       
       {/* Client Name */}
       
        <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1' htmlFor="name">Client Name</label>
          <input ref={inputRef} className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="text" name="name" id="name" placeholder='Client Name' value={clientName} onChange={(e) => setClientName(e.target.value)} />
        </div>
        {/* Payable Rates */}
        <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1' htmlFor="address">Payable Rates</label>
          <input ref={inputRef} className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="number" name="address" id="address" placeholder='Client Address' value={clientAddress} onChange={(e) => setClientAddress(e.target.value)} />
        </div>
        {/* Site Name */}
        <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1' htmlFor="name">Site Name</label>
          <input ref={inputRef} className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="text" name="name" id="name" placeholder='Client Name' value={clientName} onChange={(e) => setClientName(e.target.value)} />
        </div>
        {/* Amount */}
        <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1' htmlFor="name">Amount</label>
          <input ref={inputRef} className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="number" name="name" id="name" placeholder='Client Name' value={clientName} onChange={(e) => setClientName(e.target.value)} />
        </div>
        {/* Staff */}
        <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1' htmlFor="name">Staff</label>
          <input ref={inputRef} className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="text" name="name" id="name" placeholder='Client Name' value={clientName} onChange={(e) => setClientName(e.target.value)} />
        </div>

        {/* Payable Expenses */}
        <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1' htmlFor="name">Payable Expenses</label>
          <input ref={inputRef} className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="number" name="name" id="name" placeholder='Client Name' value={clientName} onChange={(e) => setClientName(e.target.value)} />
        </div>

        <div className='flex flex-col'>
        </div>

         {/* Billable Guards */}
         <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1' htmlFor="name">Billable Rates</label>
          <input ref={inputRef} className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="number" name="name" id="name" placeholder='Client Name' value={clientName} onChange={(e) => setClientName(e.target.value)} />
        </div>

        <div className='flex flex-col'>
        </div>

       {/* Amount */}
       <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1' htmlFor="name">Amount</label>
          <input ref={inputRef} className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="text" name="name" id="name" placeholder='Client Name' value={clientName} onChange={(e) => setClientName(e.target.value)} />
        </div>

        <div className='flex flex-col'>
        </div>

        {/* Billable Expenses */}
       <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1' htmlFor="name">Billable Expenses</label>
          <input ref={inputRef} className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="text" name="name" id="name" placeholder='Client Name' value={clientName} onChange={(e) => setClientName(e.target.value)} />
        </div>
 
 <hr className='cols-span-2 my-6' /> 

        <div className='flex flex-col'>
        </div>
        {/* Same Multiple Shifts */}
        <div className='grid grid-cols-2 gap-2 mr-12'>
        <div className="flex flex-row justify-start items-center">
         <input ref={inputRef} value="" name="default-radio" type='radio' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
          <label className='pl-2 text-gray-800 text-md pb-1' htmlFor="name">Same Multiple Shifts</label>
        </div>

        <div className="flex flex-row justify-start items-center">
         <input ref={inputRef} value="" name="default-radio" type='radio' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
          <label className='pl-2 text-gray-800 text-md pb-1' htmlFor="name">Different Multiple Shifts</label>
        </div>
        </div>

        <div className='flex flex-col'>
        </div>
        {/* Shift Date */}
        <div className='grid grid-cols-2 gap-2'>
        <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1' htmlFor="name">Shift Start</label>
          <input ref={inputRef} className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="date" name="name" value='' id="name" placeholder='Client Name' value={clientName} onChange={(e) => setClientName(e.target.value)} />
        </div>

        <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1' htmlFor="name">Shift End</label>
          <input ref={inputRef} className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="date" name="name" value='' id="name" placeholder='Client Name' value={clientName} onChange={(e) => setClientName(e.target.value)} />
        </div>
        </div>

          {/* Penalty deduction */}
        <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1' htmlFor="name">Penalty Deduction</label>
          <input ref={inputRef} className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="number" name="name" id="name" placeholder='Client Name' value={clientName} onChange={(e) => setClientName(e.target.value)} />
        </div>

         {/* Shift Times */}
        <div className='grid grid-cols-2 gap-2'>
        <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1' htmlFor="name">Shift Time</label>
          <input ref={inputRef} className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="time" name="name" value='' id="name" placeholder='Client Name' value={clientName} onChange={(e) => setClientName(e.target.value)} />
        </div>

        <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1' htmlFor="name">End Time</label>
          <input ref={inputRef} className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="time" name="name" value='' id="name" placeholder='Client Name' value={clientName} onChange={(e) => setClientName(e.target.value)} />
        </div>
        </div>

         {/* Unpaid Shift */}
         <div className='grid grid-cols-2 gap-2 mr-12'>
        <div className="flex flex-row justify-start items-center">
         <input ref={inputRef} value="" name="default-radio" type='checkbox' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
          <label className='pl-2 text-gray-800 text-md pb-1' htmlFor="name">Same Multiple Shifts</label>
        </div>

        <div className="flex flex-row justify-start items-center">
         <input ref={inputRef} value="" name="default-radio" type='checkbox' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
          <label className='pl-2 text-gray-800 text-md pb-1' htmlFor="name">Different Multiple Shifts</label>
        </div>
        </div>

        
        <div className='flex flex-col'>
        </div>

        {/* Confirm shift */}
        <div className='grid grid-cols-2 gap-2 mr-12'>
        <div className="flex flex-row justify-start items-center">
         <input ref={inputRef} value="" name="default-radio" type='radio' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
          <label className='pl-2 text-gray-800 text-md pb-1' htmlFor="name">Confirm Shift</label>
        </div>

        <div className="flex flex-row justify-start items-center">
         <input ref={inputRef} value="" name="default-radio" type='radio' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
          <label className='pl-2 text-gray-800 text-md pb-1' htmlFor="name">Unconfirm Shift</label>
        </div>
        </div>

        <div className='flex flex-col'>
        </div>

        {/* PO Number */}
        <div className="flex flex-row justify-start items-center">
         <input ref={inputRef} value="" name="default-radio" type='checkbox' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
          <label className='pl-2 text-gray-800 text-md pb-1' htmlFor="name">PO Number Recieved?</label>
        </div>


        {/* Add Break */}
        <div className="flex flex-row justify-start items-center">
         <input ref={inputRef} value="" name="default-radio" type='checkbox' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
          <label className='pl-2 text-gray-800 text-md pb-1' htmlFor="name">Add Break to Shift?</label>
        </div>

       {/* Comments */}
       <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1' htmlFor="name">Comments</label>
          <textarea onChange={(e) => setClientAddress(e.target.value)} className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="text" name="address" id="address" placeholder='Address' />
        </div>

            {/* Add Check Calls to Shift ? */}
        <div className="flex flex-row justify-start items-center">
         <input ref={inputRef} value="" name="default-radio" type='checkbox' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
          <label className='pl-2 text-gray-800 text-md pb-1' htmlFor="name">PO Number Recieved?</label>
        </div>

        {/* Shift instructions */}
       <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1' htmlFor="name">Shift Instructions</label>
          <textarea className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="text" name="address" id="address" placeholder='Address' />
        </div>

        <div className='flex flex-col'>
        </div>
        
        <div className="flex flex-row justify-start row-span-2 mt-3 h-min cols-span-2">
        <button className='border border-gray-500 text-gray-700 px-4 py-2 rounded'>Cancel</button>
        <button onSubmit={testForm} className='bg-green-500 text-white px-4 py-2 rounded ml-2'>Save</button>
        </div>

 

        
 
      </form>
      <p className="my-4">{error}</p>
    </div>
  )
}
