import React, { useContext } from 'react'
import Navbar from './Navbar';
import { UserContext } from '../context/userContext';

const DashboardLayout = ({children}) => {
  const {user}=useContext(UserContext);
  return (
    <div>
      <Navbar />
      {user && <div>{children}</div>}
    </div>
  )
}

export default DashboardLayout