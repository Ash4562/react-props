import React, { useState } from 'react'

const MulInp = () => {
    const [formData, setFormData] = useState({
        Name: "",
        email: "",
        age: ""

    })
    console.log("formData",formData);
    
    const handleChange = (e) => {
        // const {name,value}= e.target;
        // console.log("event", e.target.value);

        // const name = e.target.name;
        // const value = e.target.value;

        const {name ,value} =e.target


        // console.log("name", name);
        // console.log("value", value);


        setFormData({
            ...formData,
            [name]: value
        });

    };

    return <>
        <div className=" text-center">

            <h1>React Multiple Input using One useState</h1>
            <input type="text" name="Name"
                placeholder='Enter Your Name'
                value={formData.Name}
                onChange={handleChange}

                id="" />
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

            <p><strong>Name:</strong> {formData.Name}</p>

            <p><strong>Email:</strong> {formData.email}</p>

            <p><strong>Age:</strong> {formData.age}</p>

        </div>
    </>
}

export default MulInp