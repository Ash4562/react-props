import React from 'react'

const Child = (demo) => {
    console.log("data", demo); 
    
    
  return<>
  <p> this is child component</p>
    <h1>name : {demo.name}</h1>
    <h1>Age : {demo.age}</h1>
    <h1>Address : {demo.address}</h1>
    <h1>Roll : {demo.roll}</h1>
  </>
}

export default Child