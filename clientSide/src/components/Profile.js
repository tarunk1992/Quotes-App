
import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_MY_PROFILE } from '../gqloperations/queries'


export default function Profile() {

  const {loading,error,data} = useQuery(GET_MY_PROFILE,{
    fetchPolicy:'cache-and-network'})
 if (loading) return <h3>profile is loading</h3>
if(data){
 
}
  if(error){
    console.log(error)
  }
  return (
    <div className='otherprofile'>
         <div className='contain'> 
        <img src={`https://robohash.org/${data.user.firstName}.png`} alt='pic'></img>
        <h5>{data.user.firstName} {data.user.lastName}</h5>
        <h5>{data.user.email}</h5>
      
      <h3>My Quotes</h3>
      {
        data.user.quotes.map((quot)=>{
        return(
          <blockquote>
          <h6>{quot.name}</h6>
          
        </blockquote>
        )
        })
      }

    
      </div>
    </div>
  )
}
