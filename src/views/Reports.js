import React from 'react'

import { useContext, useState, useEffect,} from 'react'
import { useNavigate,} from 'react-router-dom'
import {getAuth} from "firebase/auth";

import { ContentContext } from '../context/ContentContext';

export default function Reports() {
  const {user} = useContext(ContentContext)

  const navigate = useNavigate()

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
    <div>Reports</div>
  )
}
