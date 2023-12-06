// EditUserPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EditUserPage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [userData, setUserData] = useState({
    labelName: '',
    email: '',
    phoneNumber: '',
    residentialAddress: '',
    businessAddress: '',
    services: '',
    specificServices: '',
    technicalSkillSet: '',
    employeeType: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/users/${userId}`);
        console.log('User Data:', response.data); // Add this line
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };
  
    fetchUserData();
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3001/api/users/${userId}`, userData);
      console.log('User updated successfully:', response);
      navigate('/resourcemanagement/userlist');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Edit User Page</h2>
      <p>Edit user with ID: {userId}</p>

      <form onSubmit={handleUpdateUser}>
        <label htmlFor="labelName">Label Name:</label>
        <input
          type="text"
          id="labelName"
          name="labelName"
          value={userData.labelName}
          onChange={handleInputChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
        />
            <input
          type="number"
          id="phonenumber"
          name="Phone Number"
          value={userData.phoneNumber}
          onChange={handleInputChange}
        />
            <input
          type="text"
          id="residential address"
          name="Residential Address"
          value={userData.residentialAddress}
          onChange={handleInputChange}
        />
            <input
          type="text"
          id="business address"
          name="Business Address"
          value={userData.businessAddress}
          onChange={handleInputChange}
        />
            <input
          type="password"
          id="password"
          name="Password"
          value={userData.password}
          onChange={handleInputChange}
        />

        {/* Add more input fields for other user properties */}

        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default EditUserPage;
