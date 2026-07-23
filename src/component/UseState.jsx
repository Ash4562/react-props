import React, { useState } from 'react'

const UseState = () => {
 const[OwnerName,setOwnerName] =  useState('')
 const[OwnerEmail,setOwnerEmai] =  useState('')
 console.log("OwnerName",OwnerName);
 console.log("OwnerEmail",OwnerEmail);
//  console.log("setName",setName);
 
  return <>
  <div className='flex flex-col justify-center items-center'>
  {/* <input type="text" 
  placeholder='Enter your name' 
  className='border-2 border-black' 
  onChange={(e)=>setName(e.target.value)}/> */}

  <input type="text" 
   placeholder='Your ownwer Name'
    className='border-2 border-black ' 
    onChange={(e)=> setOwnerName(e.target.value)}

    />

  <input type="text" 
   placeholder='Your Ower email'
    className='border-2 border-black ' 
    onChange={(e)=> setOwnerEmai(e.target.value)}

    />
  <h1 className='text-2xl font-bold'>Name  : {OwnerName}</h1>
  <h1 className='text-2xl font-bold'>OwnerEmail  : {OwnerEmail}</h1>
  </div>
  </>
}

export default UseState