import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Protector(props) {

let Cmp = props.Cmp
  const history = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem('token')){
      history('/login')
    }
  })
  return (
    <div>
      <Cmp></Cmp>
      
    </div>
  )
}
