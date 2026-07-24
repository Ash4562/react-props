import { useState } from "react";

function MultiplesInp() {

  // Step 1: Ek hi useState banaya
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: ""
  });



  // Step 2: Sabhi inputs ke liye ek hi function
  const handleChange = (e) => {
const {name,value}= e.target;
    // Kis input me typing hui
    // const name = e.target.name;

// console.log("e.target value",e.target.name );

    // console.log("name",name);
    
    
    // User ne kya value likhi
    // const value = e.target.value;
    // console.log("value",value);

    // State update karna
    setFormData({
      ...formData,
      [name]: value
    });

  };

  return (
    <div className=" text-center">

      <h1>React Multiple Input using One useState</h1>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="number"
        name="age"
        placeholder="Enter Age"
        value={formData.age}
        onChange={handleChange}
      />

      <hr />

      <h2>Output</h2>

      <p><strong>Name:</strong> {formData.name}</p>

      <p><strong>Email:</strong> {formData.email}</p>

      <p><strong>Age:</strong> {formData.age}</p>

    </div>
  );
}

export default MultiplesInp;