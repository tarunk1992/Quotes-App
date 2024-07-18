import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { SIGNUP_USER } from '../gqloperations/mutation';
import Form from 'react-bootstrap/Form';
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";


export default function Signup() {
   const [formData,setFormData] = useState({});
   const [visible,setVisible] = useState(false);
   const history = useNavigate();


const [signupUser,{data,loading,error}] = useMutation(SIGNUP_USER)
if(loading) return <h3>Loading...</h3>
if (data){
    console.log(data)
  // history("/")
}


   const handleChange = (e) =>{
    setFormData({
        ...formData,
        [e.target.name]:e.target.value
    })
   }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(formData)
        signupUser({
          variables:{
            userNew:formData
          }
        })
       
    }
  return (
    <div className='signup '>
      {
        error && 
        <div className='card-panel red'>{error.message}</div>
      }
      {
        data && data.user && 
        <div className='card-panel green'>{data.user.firstName} is SignUp. you can login now!</div>
      }
     
     
      <Form onSubmit={handleSubmit}>
      <h5>SignUp</h5>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First name</Form.Label>
        <Form.Control type='text' name='firstName' placeholder='firstName'  required onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last name</Form.Label>
        <Form.Control  type='text' name='lastName' placeholder='lastName'  required onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required onChange={handleChange} />
      </Form.Group>
   
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control  name='password' type={visible ? "text" : "password"} placeholder="Password" required onChange={handleChange} ></Form.Control>
        <div className='visible' onClick={()=>setVisible(!visible)}>       {
        visible ? <IoMdEye /> : <IoMdEyeOff />

      }</div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" required/>
      </Form.Group>
      <Link to="/login"><p>Already have an account ?</p></Link>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  
    </div>
  )
}
