import React from 'react'

import { useContext, useState, useEffect,} from 'react'
import { useNavigate,} from 'react-router-dom'
import {getAuth} from "firebase/auth";

import { ContentContext } from '../context/ContentContext';

export default function Workforce() {
  const {user, employeesData, clientsData} = useContext(ContentContext)

  const navigate = useNavigate()


  // Firebase map object
  console.log(employeesData)


  
    useEffect(() => {
       getAuth().onAuthStateChanged((user) => {
              if(user) {
                    
                }
                else {
                    navigate('/')
                }
            })
    }, [user, navigate])

  return (
    <div>
      <h1>
        {employeesData.map((employee) => (
          <div key={employee.id}>
            <h1>{employee.name}</h1>
            <h1>{employee.email}</h1>
          </div>
        ))}

      </h1>  
    
    </div>
  )
}
