import React from 'react'
import {  Outlet, Navigate } from 'react-router-dom' 
import Login from '../components/Login'

const PrivateRoutes = ({ authUser }) => {
   
  return (
    authUser ? <Outlet /> : <Navigate to="/login" />
  )
}

export default PrivateRoutes