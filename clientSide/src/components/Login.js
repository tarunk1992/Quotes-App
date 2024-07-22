import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Link,useNavigate } from 'react-router-dom';
import { LOGIN_USER, SIGNUP_USER  } from '../gqloperations/mutation';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function Login() {
   const [formData,setFormData] = useState({})
   const [visible,setVisible] = useState(false);
   const history = useNavigate();

   

   const [signinUser,{error,loading,data}] = useMutation(LOGIN_USER)

   if(data){
    localStorage.setItem("token",data.user.token)
    
   history('/')
  }
if(loading) return <h3>Loading...</h3>

if(error){
  console.log(error)
}
   const handleChange = (e) =>{
    setFormData({
        ...formData,
        [e.target.name]:e.target.value
    })
   }

    const handleSubmit = (e) =>{
        e.preventDefault()
      
        signinUser({
          variables:{
            userSignin:formData
          }
        })
        
    }
  return (
    <div className='login'>

 
      
      
      <Form onSubmit={handleSubmit}>
      <h5>Login</h5>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required onChange={handleChange} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control  name='password'type={visible ? "text" : "password"} placeholder="Password" required onChange={handleChange} />
        <div className='visible' onClick={()=>setVisible(!visible)}>       {
        visible ? <IoMdEye /> : <IoMdEyeOff />

      }</div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" required/>
      </Form.Group>
      <Link to="/signup"><p>Don't have an account ?</p></Link>
          <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  
    </div>
  )
}
