import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { CREAT_QUOTE } from '../gqloperations/mutation';
import { GET_ALL_QUOTES, GET_MY_PROFILE } from '../gqloperations/queries';
import { useNavigate } from 'react-router-dom';

export default function CreateQuotes() {
const [quote,setQuote] = useState("")
const history = useNavigate();
 const [createQuote,{loading,error,data}] =useMutation(CREAT_QUOTE,{
  refetchQueries:[
    GET_ALL_QUOTES,'getAllQuotes',
    GET_MY_PROFILE,'getMyProfile'
  ]
 })
 if(loading) return<h1>loading...</h1>
 if (error){
  console.log(error.message)
 }
 if (data){
  console.log(data)
 }
//  const history = useNavigate();
const handleSubmit = (e)=>{
    e.preventDefault()
   createQuote({
    variables:{
      name:quote
    }
   })

}
  return (
    <div className='createQuotes'>
      {
        error && <div>{error.message}</div>
      }
         {
        data && <div>{data.quote}</div>
      }
     <form onSubmit={handleSubmit}>
     <textarea type='text' value={quote} minLength="20" onChange={(e)=>setQuote(e.target.value)} placeholder='Write your quote here'></textarea>
    <br></br>
    <br></br>
    <Button variant="primary" className='btn' type='submit'>Create</Button>
     </form>
    </div>
  )
}
