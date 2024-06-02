import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"

function App() {
//  const [count,error,loading] =Customreactquery("/api/product")
  const [count, setCount] = useState([]);
  const [error, seterror] = useState(false);
  const [loading, setloading] = useState(false);
  const [search,setsearch]=useState("");
  const apiUrl = import.meta.env.VITE_API_URL || 'https://sn-apihandaling.onrender.com';

  useEffect(()=>{
    const controller=new AbortController();
    ;(async()=>{
      try {
        setloading(true)
        seterror(false)
        const response=await axios.get(`${apiUrl}/api/product?search=${search}`,{
          signal:controller.signal
        })
        console.log(response.data)
        setCount(response.data)
        setloading(false)
      } catch (error1) {
        if (axios.isCancel(error1 )) {
          console.log("request cancelled",error1.message)
          return
        }
        seterror(true)
        setloading(false)
        
      }
    })()
    //cleanup code
    return()=>{controller.abort()}
  },[search])

  // if(error){
  //   return(
  //     <h1>something went wrong</h1>
  //   )
  // }
  // if (loading) {
  //   return(
  //     <h1>loading.......</h1>
  //   )
    
  // }

  return (
    <>
      <h1>hello sn</h1>
      <input
      type='text'
      placeholder='search'
      value={search}
      onChange={(e)=>{setsearch(e.target.value)}}
      />
      {loading &&(<h1>loading.......</h1>)}
      {error&&(<h1>something went wrong</h1>)}
      <h2><b>number of products:{count.length}</b></h2>
    </>
  )
}

export default App

// const Customreactquery=(urlpath)=>{
//   const [count, setCount] = useState([]);
//   const [error, seterror] = useState(false);
//   const [loading, setloading] = useState(false);

//   useEffect(()=>{
//     ;(async()=>{
//       try {
//         setloading(true)
//         seterror(false)
//         const response=await axios.get(urlpath)
//         console.log(response.data)
//         setCount(response.data)
//         setloading(false)
//       } catch (error) {
//         seterror(true)
//         setloading(false)
//       }
//     })()
//   },[])

//   return[count,error,loading];

// }

