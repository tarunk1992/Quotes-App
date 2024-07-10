
import { useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router-dom'
import { GET_USER_BY_ID } from '../gqloperations/queries'


export default function OtherProfile() {
   
    const {userid} = useParams()
    console.log(userid)

    const {loading,error,data } = useQuery(GET_USER_BY_ID,{
        variables:{
            userid
        }
    })
    if(loading) return <h3>Profile is loading</h3>
  return (
    <div className='otherprofile'>
      <div className='contain'> 
        <img src={`https://robohash.org/${data.user.firstName}.png`} alt='pic'></img>
        <h5>Name - {data.user.firstName} {data.user.lastName}</h5>
        <h5>Email - {data.user.email}</h5>
      
      <h3>{data.user.firstName} Quotes</h3>
{
    data.user.quotes.map(quot=>{
        return(
            <blockquote>
            <h6>"{quot.name}"</h6>
            
          </blockquote>
        )
    })
}
</div>
    </div>
  )
}
