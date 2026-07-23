import React, { useState } from 'react'

const UseState = () => {
 const[OwnerName,setOwnerName] =  useState("")
 const[OwnerEmail,setOwnerEmai] =  useState('')
 const[OwnerNumber,setOwnerNumber] =  useState('')
 console.log("OwnerName",OwnerName);
 console.log("OwnerEmail",OwnerEmail);
 console.log("OwnerEmail",OwnerNumber);
//  console.log("setName",setName);
 
  return <>
  <div className='flex flex-col justify-center items-center'>


  <input type="text" 
   placeholder='Your ownwer Name'
    className='border-2 border-black ' 
    onChange={(e)=> setOwnerName(e.target.value)}

    />

  <input type="email" 
   placeholder='Your Ower email'
    className='border-2 border-black ' 
    onChange={(e)=> setOwnerEmai(e.target.value)}

    />
  <input type="number" 
   placeholder='Your Ower Number'
    className='border-2 border-black ' 
    onChange={(e)=> setOwnerNumber(e.target.value)}

    />
    <input type="text" />
  <h1 className='text-2xl font-bold'>Name  : {OwnerName}</h1>
  <h1 className='text-2xl font-bold'>OwnerEmail  : {OwnerEmail}</h1>
  <h1 className='text-2xl font-bold'>OwnerNumber  : {OwnerNumber}</h1>
  </div>
  </>
}

export default UseState