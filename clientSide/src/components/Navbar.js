
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';



export default function Navhead() {
const token = localStorage.getItem("token")
const [sideBar,setSideBar]= useState(false)


  const history = useNavigate()

    function logout(){
        localStorage.removeItem("token");
     
        history('/login')
        
    }

    const toggle= ()=>{
    setSideBar(!sideBar)
    }

  return (
    <div className='navbar'>
          <div className='nav-contain'>
          <div className='nav-logo'>
           <Link className='Link'  to='/' > <h1>QuoTeS</h1></Link>
           </div>
           {/* <GiHamburgerMenu className='togglebtn' onClick={toggle} /> */}
          
          
           <div className='nav-link'>
           
            <ul>
            <li><Link className='Link'  to='/'><li>Home</li></Link></li>
              {
                localStorage.getItem('token') ?
                <>
                
            <li><Link className='Link'  to='/profile'><li>Profile</li></Link></li>
          <li>  <Link className='Link'  to='/create'><li>Create</li></Link></li>
            <li><Button  variant="warning" onClick={logout}>Logout</Button></li>
                </>
                :
                <>
                    <li> <Link className='Link'  to='/login'><li>Login</li></Link></li>
                     <li><Link className='Link'  to='/signup'><li>Signup</li></Link></li>
                </>
              }
             </ul>
           </div>
         
      
         
        
          </div>
      

    </div>
  )
}
