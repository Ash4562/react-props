import React from 'react'

const Child = () => {
    // console.log("data", demo); 


const obj ={
  name:"ashish ",
  adress:"cidco ",
  age:"24 ",
  
}
const arr =[2,4,5,6 ,{
  name:"ashish",
  age:23
}]

    
    
  return<>
  <p className="bg-blue-600"> this is child component</p>
    <h1> {obj.name}</h1>
    <h1> {obj.age}</h1>
    <h2>{arr[4].age}</h2>
  </>
}

export default Child