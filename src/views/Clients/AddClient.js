
import React from 'react'

export default function AddClient() {
  return (
    <div className="p-4 w-screen pr-8">
      <h1 className='text-2xl text-gray-800'>Add New Client</h1>
      <form className='grid grid-cols-2 gap-y-4 mt-6'>
        <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1' htmlFor="name">Name</label>
          <input className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="text" name="name" id="name" placeholder='Client Name' />
        </div>
        
          <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1'  htmlFor="address">Address</label>
        <select className='h-10 border rounded pl-3 placeholder:font-sm w-4/5' name="type" id="type">
          <option selected className="text-gray-500" value="select">Select Invoice Term</option>
          <option className="text-gray-500" value='weekly'>Weekly Invoice</option>
          <option className="text-gray-500" value="fortnightly">Fortnightly Invoice</option>
          <option className="text-gray-500" value="monthly">Monthly Invoice</option>
        </select>
        </div>


        <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1'  htmlFor="address">Address</label>
          <textarea className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="text" name="address" id="address" placeholder='Address' />
        </div>

        <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1'  htmlFor="address">Payment Terms</label>
          <textarea className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="text" name="address" id="address" placeholder='Payment Terms' />
        </div>

        <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1' htmlFor="name">Contact Person</label>
          <input className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="text" name="name" id="name" placeholder='Contact Person' />
        </div>

        <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1' htmlFor="name">Contact Start</label>
          <input className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="text" name="name" id="name" placeholder='Contact Person' />
        </div>

      <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1'  htmlFor="phone">Contact Number</label>
          <input className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="tel" name="phone" id="phone" placeholder='Contact Number' />
        </div>

        <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1' htmlFor="name">Contact End</label>
          <input className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="text" name="name" id="name" placeholder='Contact Person' />
        </div>

        <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1'  htmlFor="phone">Contact Fax</label>
          <input className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="tel" name="phone" id="phone" placeholder='Contact Fax' />
        </div>

          <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1'  htmlFor="charge">Charge Rate (Guard)</label>
          <input className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="text" name="charge" id="phone" placeholder='Contact Fax' />
        </div>

        <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1' htmlFor="email">Email</label>
          <input className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="email" name="email" id="email" placeholder='Email' />
        </div>

        <div className="flex flex-col">
          <label className='font-semibold text-gray-800 text-sm pb-1'  htmlFor="charge">Charge Rate (Supervisor)</label>
          <input className='border rounded pl-3 py-2 placeholder:text-sm w-4/5' type="text" name="charge" id="phone" placeholder='Contact Fax' />
        </div>

        {/* checkbox */}
        <div className="flex flex-row justify-start items-center">
          <input className='' type="checkbox" name="charge" id="phone" placeholder='Contact Fax' />
          <label className='text-gray-800 text-sm p-1 pt-1.5 pl-2'  htmlFor="charge">VAT Registered</label>
        </div>
      </form>

      <div className="flex flex-row justify-start mt-6">
        <button className='border border-gray-500 text-gray-700 px-4 py-2 rounded'>Cancel</button>
        <button className='bg-green-500 text-white px-4 py-2 rounded ml-2'>Save</button>
      </div>

    </div>
  )
}
