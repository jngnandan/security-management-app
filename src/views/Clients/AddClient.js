
import React from 'react'
import { useContext, useState, useEffect,} from 'react'
import { useNavigate,} from 'react-router-dom'

import { useRef } from 'react'

import {collection, getDocs, setDoc, doc, query} from 'firebase/firestore'
import {db} from '../../firebase'


export default function AddClient() {
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
    setDoc(doc(db, 'clients', clientName), newClient)
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


  return (
    <div className="p-4 w-screen pr-8">
      <h1 className='text-2xl text-gray-800'>Add New Client</h1>
      <form ref={inputRef} onSubmit={handleSubmit} className='grid grid-cols-2 gap-y-4 mt-6'>
        <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1' htmlFor="name">Name</label>
          <input onChange={(e) => setClientName(e.target.value)} className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="text" name="name" id="name" placeholder='Client Name' />
        </div>
        
          <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1'  htmlFor="address">Invoice terms</label>
        <select onChange={(e) => setInvoiceTerms(e.target.value)} className='h-10 border rounded pl-3 placeholder:font-sm w-4/5' name="type" id="type">
          <option selected className="text-gray-500" value="select">Select Invoice Term</option>
          <option className="text-gray-500" value='weekly'>Weekly Invoice</option>
          <option className="text-gray-500" value="fortnightly">Fortnightly Invoice</option>
          <option className="text-gray-500" value="monthly">Monthly Invoice</option>
        </select>
        </div>


        <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1'  htmlFor="address">Address</label>
          <textarea onChange={(e) => setClientAddress(e.target.value)} className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="text" name="address" id="address" placeholder='Address' />
        </div>

        <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1'  htmlFor="address">Payment Terms</label>
          <textarea onChange={(e) => setPaymentTerms(e.target.value)} className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="text" name="address" id="address" placeholder='Payment Terms' />
        </div>

        <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1' htmlFor="name">Contact Person</label>
          <input onChange={(e) => setContactPerson(e.target.value)} className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="text" name="name" id="name" placeholder='Contact Person' />
        </div>

        <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1' htmlFor="date">Contact Start</label>
          <input onChange={(e) => setContractStartDate(e.target.value)} className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="date" name="name" id="name" placeholder='00/00/0000' />
        </div>

      <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1'  htmlFor="phone">Contact Number</label>
          <input onChange={(e) => setContactNumber(e.target.value)} className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="tel" name="phone" id="phone" placeholder='Contact Number' />
        </div>

        <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1' htmlFor="date">Contact End</label>
          <input onChange={(e) => setContractEndDate(e.target.value)} className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="date" name="date" id="name" placeholder='' />
        </div>

        <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1'  htmlFor="phone">Contact Fax</label>
          <input onChange={(e) => setContactFax(e.target.value)} className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="tel" name="phone" id="phone" placeholder='Contact Fax' />
        </div>

          <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1'  htmlFor="charge">Charge Rate (Guard)</label>
          <input onChange={(e) => setChargeRate(e.target.value)} className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="text" name="charge" id="phone" placeholder='Contact Fax' />
        </div>

        <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1' htmlFor="email">Email</label>
          <input onChange={(e) => setContactEmail(e.target.value)} className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="email" name="email" id="email" placeholder='Email' />
        </div>

        <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1'  htmlFor="charge">Charge Rate (Supervisor)</label>
          <input onChange={(e) => setChargeRateSupervisor(e.target.value)} className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="text" name="charge" id="phone" placeholder='Contact Fax' />
        </div>

        {/* checkbox */}
        <div className="flex flex-row justify-start items-center col-span-2">
          <input className='' type="checkbox" name="charge" id="phone" placeholder='Contact Fax' />
          <label onChange={(e) => setVat(e.target.value)} className='text-gray-800 text-sm p-1 pt-1.5 pl-2'  htmlFor="charge">VAT Registered</label>
        </div>

        <div className="flex flex-row justify-start grid-span-2 mt-3">
        <button onSubmit={cancelClient}  className='border border-gray-500 text-gray-700 px-4 py-2 rounded'>Cancel</button>
        <button onSubmit={handleSubmit} className='bg-green-500 text-white px-4 py-2 rounded ml-2'>Save</button>
      </div>
      </form>
      <p className="my-4">{error}</p>
    </div>
  )
}
