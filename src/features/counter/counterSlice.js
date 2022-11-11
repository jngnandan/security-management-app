
import {createSlice } from '@reduxjs/toolkit'
import { useMemo, useEffect, useState } from 'react';

import {collection, getDoc, getDocs, setDoc, doc, query, getFirestore, deleteDoc, onSnapshot} from 'firebase/firestore'
import {db,} from '../../firebase'
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from 'firebase/auth'

import firebase from 'firebase/compat/app'; //v9


const initialState = {
    value: 0,
    status: 'idle',
    employees: [],
    loading: true,
    clients: [],
    deletedClients: [],
    error: null,
    sites: [],
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {   
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        reset: state => {
            state.value = 0
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
        // useMemo: (state, action) => {
        //     getAuth().onAuthStateChanged((user) => {
        //         if (user) {
        //             // console.log(user.email, 'cool')
        //             const userData = getDoc(doc(db, 'users', user.email))
        //             .then((doc) => {
        //                 if (doc.exists()) {
        //                     // setEmployees(doc.data().employees)
        //                     // setClients(doc.data().clients)
        //                     state.employees(doc.data().employees)
        //                     state.clients(doc.data().clients)
        //                 }
        //             })
        //         } else {
        //             console.log('no user')
        //         }
        //     })
        // },
        userData: (state, action) => {
                getAuth().onAuthStateChanged((user) => {
                    if (user) {
                        // console.log(user.email, 'cool')
                        const userData = getDoc(doc(db, 'users', user.email))
                        .then((doc) => {
                            if (doc.exists()) {
                                // setEmployees(doc.data().employees)
                                // setClients(doc.data().clients)
                                state.employees(doc.data().employees)
                                state.clients(doc.data().clients)
                            }
                        })
                    } else {
                        console.log('no user')
                    }
                })
            }
    
        
        
    
        

        
}
})

export const { increment, decrement, reset, incrementByAmount, userData } = counterSlice.actions
export default counterSlice.reducer;
