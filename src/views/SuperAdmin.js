
import React from 'react'

import { useContext, useState, useEffect,} from 'react'
import { useNavigate,} from 'react-router-dom'

import {getAuth} from "firebase/auth";

import { ContentContext } from '../context/ContentContext';

export default function SuperAdmin() {
  const {user} = useContext(ContentContext)
    const navigate = useNavigate()
    const signOut = () => {
        const auth = getAuth();
        auth.signOut().then(() => {
            // Sign-out successful.
            console.log('signed out')
            navigate('/')

        }).catch((error) => {
            // An error happened.
            console.log(error)
        });
    }

  return (
    <div>
      <button onClick={signOut}>Log out</button>
    </div>
  )
}
