import React, { useState } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for styling

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })


  function formData(event) {
    const { name, value } = event.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }
  const handleSuccess = () => {
    toast.success("Successfully Submitted!!", {
      position: toast.POSITION.TOP_RIGHT
    });
  };
  const handleFailure = () => {
    toast.error("ooh Something went wrong!!", {
      position: toast.POSITION.TOP_RIGHT
    });
  };
  const invalidFormData = () => {
    toast.error("plz fill the info!!", {
      position: toast.POSITION.TOP_RIGHT
    });
  };
  async function submitData(event) {
    event.preventDefault();
    try {
      const { name, email, phone, message } = data;
      if (name === "" || email === "" || phone === "" || message === "") {
        invalidFormData();
        return;
      }
      const response = await axios.post(`https://portfilio-2ud1ljjq2-satyam17291729.vercel.app/users/create`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (response.status === 200) {
        let input = document.getElementsByTagName("input");
        document.getElementsByTagName("textarea")[0].value = "";
        for (let i = 0; i < input.length; i++) {
          input[i].value = "";
        }
        for (let key in data) {
          data[key] = "";
        }


        handleSuccess();
      } else {
        handleFailure();
      }
    } catch (err) {
      handleFailure();
      console.log(err);
    }

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
              <input type="text" className="form-control" id="name" name="name" onChange={formData} value={data.name} required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="email" name="email" onChange={formData} value={data.email} required />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input type="tel" className="form-control" id="phone" name="phone" onChange={formData} value={data.phone} required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea name="message" id="message" cols="30" rows="10" className='form-control' onChange={formData} value={data.message} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary" onClick={submitData} id='btn'>
              Submit
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>

  );
};

export default Contact;
