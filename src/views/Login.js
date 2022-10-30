import React, { useEffect } from 'react';
import { useState, useContext} from 'react';
import { useNavigate, Outlet } from 'react-router-dom';


import {collection, getDoc, setDoc, doc, query, getFirestore} from 'firebase/firestore'
import {db, auth, provider} from '../../src/firebase'
import firebase from '../../src/firebase'
import { signInWithPopup } from 'firebase/auth'
import {getAuth} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

import { ContentContext } from '../context/ContentContext';

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const navigate = useNavigate();
    const {signIn, user, error} = useContext(ContentContext)


    const handleSubmit = (e) => {
        e.preventDefault()
        signIn(email, password)
    }

    useEffect(() => {
        if(user) {
            navigate('/dashboard')
        }
    }, [user, navigate])




    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <Outlet />
            <form onSubmit={handleSubmit} className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-gray-700">
                    Sign in
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-green-600 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button onClick={handleSubmit} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-400 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
                            Login
                        </button>
                    </div>
                    <p>{error}</p>
                </form>
                <div className="relative flex items-center justify-center w-full mt-6 border border-t">
                    <div className="absolute px-5 bg-white">Or</div>
                </div>


                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <a
                        href="#"
                        className="font-medium text-green-600 hover:underline"
                    >
                        Sign up
                    </a>
                </p>
            </form>
        </div>
    );
}