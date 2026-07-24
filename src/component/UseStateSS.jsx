import React, { useEffect, useState } from 'react'

const UseStateSS = () => {
    const [number,setCount] = useState(0)


    const [name,setName]= useState({
      
    })
    // console.log("count",number);

    useEffect(()=>{
      console.log("useeffect call");
      
    },[number])
    
  return <>
  <div>
    <h1>{number}</h1>
<button onClick={()=> setCount (number + 1)}>+</button><hr />
<button onClick={()=> setCount (number - 1)}>-</button>
  </div>
  </>
}

export default UseStateSS