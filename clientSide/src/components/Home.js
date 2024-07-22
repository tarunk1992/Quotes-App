import { useQuery } from "@apollo/client"
import { GET_ALL_QUOTES } from "../gqloperations/queries"
import { Link } from "react-router-dom"





export default function Home() {
  const {loading,error,data} = useQuery(GET_ALL_QUOTES,{
    fetchPolicy:'cache-and-network'
  })
  if(loading) return <h3>Loading...</h3>

  const reversedData = [...data.quotes].reverse();
  

  return (
    <div className='Home'>
       {
        reversedData.map(quote=>{
 return(
               
            <blockquote>
            <h6>"{quote.name}"</h6>
            <p>~{quote.by.firstName} {quote.by.lastName} <br></br> <Link  className='Link' to={`/otherprofile/${quote.by._id}`}>See Profile</Link></p>
           
          </blockquote>
 )
        })
       }
       
        
 
  
    
    </div>
  )
}
