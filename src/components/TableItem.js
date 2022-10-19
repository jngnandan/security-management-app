
import React from 'react'

export default function TableItem(props) {
    const {employees, index} = props

  return (
    <tr id={index} className="grid grid-cols-6 gap-4 text-sm items-center border border-1 py-3 mx-4">
        <td className='text-sm text-left'>{employees.name}</td>
        <td className='text-sm text-left'>{employees.contact}</td>
        <td className='text-sm text-left'>{employees.sia}</td>
        <td className='text-sm text-left'>{employees.type}</td>
        <td className='text-sm text-left'>{employees.expiry}</td>
        <td className='text-sm text-left'>{employees.status}</td>
    </tr>
  )
}

const styles = StyleSheet.create({})