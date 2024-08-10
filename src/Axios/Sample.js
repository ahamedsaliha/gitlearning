import React, { useState } from 'react'
import axios from 'axios';
const Sample = () => {
    const[data,setData]=useState(null)
    const[inputdata,setInputData]=useState('')
    const handleget=()=> 
    {
        axios.get("https://jsonplaceholder.typicode.com/users").then(res=>{
            console.log("Successfully",res);
            setData(res.data) 
        }) 
       
    }
    const onChanges=(e)=>
    {
       setInputData(e.target.value)
    }
    const onPostData=()=> 
    {
        const newuser={
            name:inputdata,
            username:"Newuser",
            email:"new@gmail.com"
        }
      axios.post("https://jsonplaceholder.typicode.com/users",newuser).then(result=>{
        console.log("Post method",result)
        setData([...data,result.data])
      })
    }
  return (<>
 <h1>
 <input onChange={onChanges} value={inputdata}/>
 <button onClick={handleget}>Get</button>
 <button onClick={onPostData}>Post</button>
 <p>{inputdata}</p>

 </h1>
  {data && data.map(user=>(
      <h1 key={user.id}>{user.name}</h1>))}

  </>)
}

export default Sample
