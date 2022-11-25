
import React from 'react'
import { useContext, useState, useEffect,} from 'react'
import { useNavigate,} from 'react-router-dom'

import { useRef } from 'react'

import {collection, getDocs, setDoc, doc, query} from 'firebase/firestore'
import {db} from '../../firebase'
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import firebase from 'firebase/compat/app'; //v9

import { Oval } from 'react-loader-spinner'
import {HiCheckCircle} from 'react-icons/hi'

import {ContentContext} from '../../context/ContentContext'

export default function AddClient() {
  const {user} = useContext(ContentContext)


  const checkInput = useRef()

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

  const [loading, setLoading] = useState(null)

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
  
  const handleSubmit = (e, user) => {
    e.preventDefault()
    setLoading(false)

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


    getAuth().onAuthStateChanged((user) => {
      // console.log(newClient)
      if (user) {
        // update data in the array users, users.email, clients array update newClients
        // setDoc(doc(db, 'users', user.email), {
        //   clients: firebase.firestore.FieldValue.arrayUnion(newClient)
        // }, {merge: true})
        console.log('user is signed in')
        
      }
    })
    setLoading(true)

    // setLoading(null)
  }

  const inputRef = useRef()

  const [cool, setCool] = useState('')
  const [cooler, setCooler] = useState('')

  const testSubmit = (e) => {
    e.preventDefault()
    // console.log(cool)
    // console.log(cooler)
    inputRef.current = {
      cool: cool, 
      cooler: cooler
    }
    console.log(inputRef.current) // {cool: 'cool', cooler: 'cooler'}


  }



  return (
    <div className="p-4 w-screen pr-8">
      <h1 className='text-2xl text-gray-800'>Add New Client</h1>
        <div>
        <input type='text' placeholder='Client Name' className='w-min border border-gray-300 rounded-md p-2 mt-4' ref={inputRef} value={cool} onChange={(e)=> setCool(e.target.value)} />
        <input type='text' placeholder='Client Name' className='w-min border border-gray-300 rounded-md p-2 mt-4' ref={inputRef} value={cooler} onChange={(e)=> setCooler(e.target.value)} />

        <button className='bg-blue-500 text-white rounded-md p-2 ml-2' onClick={testSubmit} >Add Client</button>
        </div>
      <form ref={inputRef} onSubmit={handleSubmit} className='grid grid-cols-2 gap-y-4 mt-6'>
        <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1' htmlFor="name">Name</label>
          <input value={clientName} onChange={(e) => setClientName(e.target.value)} className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="text" name="name" id="name" placeholder='Client Name' />
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
          <textarea value={clientAddress} onChange={(e) => setClientAddress(e.target.value)} className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="text" name="address" id="address" placeholder='Address' />
        </div>

        <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1'  htmlFor="address">Payment Terms</label>
          <textarea value={paymentTerms} onChange={(e) => setPaymentTerms(e.target.value)} className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="text" name="address" id="address" placeholder='Payment Terms' />
        </div>

        <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1' htmlFor="name">Contact Person</label>
          <input value={contactPerson} onChange={(e) => setContactPerson(e.target.value)} className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="text" name="name" id="name" placeholder='Contact Person' />
        </div>

        <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1' htmlFor="date">Contact Start</label>
          <input value={contractStartDate} onChange={(e) => setContractStartDate(e.target.value)} className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="date" name="name" id="name" placeholder='00/00/0000' />
        </div>

      <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1'  htmlFor="phone">Contact Number</label>
          <input value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="tel" name="phone" id="phone" placeholder='Contact Number' />
        </div>

        <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1' htmlFor="date">Contact End</label>
          <input value={contractEndDate} onChange={(e) => setContractEndDate(e.target.value)} className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="date" name="date" id="name" placeholder='' />
        </div>

        <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1'  htmlFor="phone">Contact Fax</label>
          <input value={contactFax} onChange={(e) => setContactFax(e.target.value)} className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="tel" name="phone" id="phone" placeholder='Contact Fax' />
        </div>

          <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1'  htmlFor="charge">Charge Rate (Guard)</label>
          <input value={chargeRate} onChange={(e) => setChargeRate(e.target.value)} className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="text" name="charge" id="phone" placeholder='Contact Fax' />
        </div>

        <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1' htmlFor="email">Email</label>
          <input value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="email" name="email" id="email" placeholder='Email' />
        </div>

        <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1'  htmlFor="charge">Charge Rate (Supervisor)</label>
          <input value={chargeRateSupervisor} onChange={(e) => setChargeRateSupervisor(e.target.value)} className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="text" name="charge" id="phone" placeholder='Contact Fax' />
        </div>

        {/* checkbox */}
        <div className="flex flex-row justify-start items-center col-span-2">
          <input className='' type="checkbox" name="charge" id="phone" placeholder='Contact Fax' />
          <label value={vat} onChange={(e) => setVat(e.target.value)} className='text-gray-800 text-sm p-1 pt-1.5 pl-2'  htmlFor="charge">VAT Registered</label>
        </div>

        <div className="flex flex-row justify-start grid-span-2 mt-3">
        <button onSubmit={cancelClient}  className='border border-gray-500 text-gray-700 px-4 py-2 rounded '>Cancel</button>
        
        
        {loading === false && <button className='bg-green-500 text-white px-4 py-2 rounded ml-2'><HiCheckCircle className='animate text-white text-2xl w-12'  /></button>}
        {loading === true && 
        <button onClick={handleSubmit} className='px-7 bg-green-500 text-white px-4 py-2 rounded ml-2'>
        <Oval   strokeWidth={4}
          strokeWidthSecondary={4}
          type="ThreeDots" color="white"   secondaryColor="white" height={21} width={21} />
        </button>}

        {loading === null && <button onSubmit={handleSubmit} className='bg-green-500 text-white px-6 py-2 rounded ml-2'>Save</button>}
      </div>
      </form>
      {loading === false && <button onClick={() => setLoading(null)} className=' mt-6 text-black'>New Entry</button>}

      <p className="my-4">{error}</p>
    </div>
  )
}
