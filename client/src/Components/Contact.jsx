import React, { useState } from 'react';
import axios from "axios";
const Contact = () => {
    const[data,setData]=useState({
        name:"",
        email:"",
        phone:"",
        message:""
    })
    
    function formData(event){
        const{name,value}=event.target;
        setData((prev)=>{
            return{
                ...prev,
                [name]:value
            }
        })
    }
        
       function submitData(event){
        console.log(data);
        event.preventDefault();
        axios.post("/users/create", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
      }
       
 
  return (
    
    <div className="container">
       
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <h2 className="text-center mb-4">Contact Us</h2>
          <form >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="name" name="name" onChange={formData} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="email" name="email" onChange={formData} />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input type="tel" className="form-control" id="phone" name="phone" onChange={formData} />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea name="message" id="message" cols="30" rows="10" className='form-control' onChange={formData}></textarea>
            </div>
            <button type="submit" className="btn btn-primary" onClick={submitData} >
              Submit
            </button>
          </form>
        </div>
      </div>
      
    </div>
    
  );
};

export default Contact;
