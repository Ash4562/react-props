import React, { useState } from 'react'

const UseState = () => {
 const[Name,setName] =  useState('')
 console.log("name",Name);
//  console.log("setName",setName);
 
  return <>
  <div className='flex flex-col justify-center items-center'>
  {/* <input type="text" 
  placeholder='Enter your name' 
  className='border-2 border-black' 
  onChange={(e)=>setName(e.target.value)}/> */}

  <input type="text" 
   placeholder='Your Name'
    className='border-2 border-black ' 
    onChange={(e)=> setName(e.target.value)}

    />
  <h1 className='text-2xl font-bold'>Name : {Name}</h1>
  </div>
  </>
}

export default UseState