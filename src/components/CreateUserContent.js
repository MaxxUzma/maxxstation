import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import "../styles/custom.css"
import axios from 'axios';

const CreateUserContent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [residentialAddress, setResidentialAddress] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");

  


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
      const response = await axios.post('http://localhost:3001/api/users', {
        labelName: name,
        email,
        phoneNumber,
        password,
        confirmPassword,
        residentialAddress,
        businessAddress,
        services: 'service1', 
        specificServices: 'specificService1', 
        technicalSkillSet: 'service1', 
        employeeType: 'specificService1',
      });

      console.log(response.data);             
    } catch (error) {
      console.error(error);
    }
  
    
  };
  return (
    <div>
      <div style={{ background: 'black', padding: '10px', textAlign: 'left', width: '150px' }}>
        <AiOutlinePlus style={{ color: 'white', fontSize: '24px', marginRight: '10px' }} />
        <span style={{ color: 'white', fontSize: '18px' }}>Create User</span>
      </div>

      <div style={{ background: 'white', padding: '20px', width: '100%' }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="labelName" className="form-label text-left">
              Name
            </label>
            <input type="text" className="form-control" id="labelName"
              onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="email" className="form-label text-left">
                Email
              </label>
              <input type="email" className="form-control" id="email"
                onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="col-md-6">
              <label htmlFor="phoneNumber" className="form-label text-left">
                Phone Number
              </label>
              <input type="tel" className="form-control" id="phoneNumber"
                onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="password0" className="form-label text-left">
                Password
              </label>
              <input type="password" className="form-control" id="password"
                onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className="col-md-6">
              <label htmlFor="confirmPassword" className="form-label text-left">
                Confirm Password
              </label>
              <input type="password" className="form-control" id="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="password" className="form-label text-left">
                Residential Address
              </label>
              <input className="form-control" id='residentialAddress'
                onChange={(e) => setResidentialAddress(e.target.value)} />
            </div>

            <div className="col-md-6">
              <label htmlFor="confirmPassword" className="form-label text-left">
                Business Address
              </label>
              <input className="form-control" id='businessAddress'

                onChange={(e) => setBusinessAddress(e.target.value)} />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="services" className="form-label text-left">
                Services
              </label>
              <select className="form-select" id="services">
                <option value="service1">Service 1</option>
                <option value="service2">Service 2</option>

              </select>
            </div>

            <div className="col-md-6">
              <label htmlFor="specificServices" className="form-label text-left">
                Specific Services
              </label>
              <select className="form-select" id="specificServices" 
                >
                <option value="specificService1">Specific Service 1</option>
                <option value="specificService2">Specific Service 2</option>

              </select>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="services" className="form-label text-left">
                Technical/Parameter skill set
              </label>
              <select className="form-select" id="services" 
               >
                <option value="service1">--Service 1--</option>
                <option value="service2">--Service 2--</option>

              </select>
            </div>

            <div className="col-md-6">
              <label htmlFor="specificServices" className="form-label text-left">
                Employee Type
              </label>
              <select className="form-select" id="specificServices" 
               >
                <option value="specificService1">--Specific Service 1--</option>
                <option value="specificService2">--Specific Service 2--</option>

              </select>
            </div>

          </div>
          <div className="text-center mt-3">
            <button type="submit" className="btn btn-warning">
              Submit
            </button>
          </div>
        </form>


      </div>

    </div>

  );
};

 export default CreateUserContent;
