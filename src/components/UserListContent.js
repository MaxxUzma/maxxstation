import React, { useState,useEffect} from 'react';
import { FaRegEdit, FaRegTrashAlt, FaRegEye } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import axios from 'axios';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import UserModal from './UserModal';



const UserList = () => {
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemsPerPage = 10; 
  const [currentPage, setCurrentPage] = useState(1);
 
  const navigate = useNavigate(); 
  const handleDeleteUser = async (userId) => {
    console.log('User ID:', userId);
  
    try {
   
      if (!userId) {
        console.error('User ID is undefined. Cannot delete user.');
        return;
      }
  
      const response = await axios.delete(`http://localhost:3001/api/users/${userId}`);
      console.log('Response data:', response.data);
      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);
  
      
    } catch (error) {
      console.error('Error deleting user:', error);
    }
    setUserList((prevUserList) => prevUserList.filter(user => user.id !== userId));
  };
  useEffect(() => {
    console.log('User list has changed:', userList);
   
  }, [userList]);
  
  
  
  const handleEditUser = (userId) => {
    navigate(`/edit-user/${userId}`);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = userList.slice(indexOfFirstItem, indexOfLastItem);
  const handleViewUser = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/users');
        setUserList(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(userList.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div style={{ background: 'black', padding: '10px', textAlign: 'left', width: '150px' }}>
      <FaUser style={{ color: 'white', fontSize: '18px', marginRight: '5px' }} />
      <span style={{ color: 'white', fontSize: '18px' }}>Users</span>
    </div>


<div style={{ background: 'white', padding: '20px', width: '100%' }}>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th style={{ padding: '10px' }}>S.No</th>
          <th style={{ padding: '10px' }}>Name</th>
          <th style={{ padding: '10px' }}>Email</th>
          <th style={{ padding: '10px' }}>Phone Number</th>
          <th style={{ padding: '10px' }}>Residential Address</th>
          <th style={{ padding: '10px' }}>Business Address</th>
          <th style={{ padding: '10px' }}>Services</th>
          <th style={{ padding: '10px' }}>Specific Services</th>
          <th style={{ padding: '10px' }}>Technical/Parameter Skill Set</th>
          <th style={{ padding: '10px' }}>Employee Type</th>
          <th style={{ padding: '10px' }}>Action</th>
        </tr>
      </thead>
      <tbody>
        {currentItems.map((user)=>{
         console.log('User Object:', user);
          return(
            <tr key={user.id}>
   
            <td style={{ padding: '10px' }}>{user.id}</td>
            <td style={{ padding: '10px' }}>{user.labelName}</td>
            <td style={{ padding: '10px' }}>{user.email}</td>
            <td style={{ padding: '10px' }}>{user.phoneNumber}</td>
            <td style={{ padding: '10px' }}>{user.residentialAddress}</td>
            <td style={{ padding: '10px' }}>{user.businessAddress}</td>
            <td style={{ padding: '10px' }}>{user.services}</td>
            <td style={{ padding: '10px' }}>{user.specificServices}</td>
            <td style={{ padding: '10px' }}>{user.technicalSkillSet}</td>
            <td style={{ padding: '10px' }}>{user.employeeType}</td>
            <td style={{ padding: '10px' }} className="d-flex">
                <FaRegEye style={{ marginRight: '10px', color: 'blue', cursor: 'pointer' }}   onClick={() => handleViewUser(user)}/>
                <FaRegEdit style={{ marginRight: '10px', color: 'orange', cursor: 'pointer' }}  onClick={() => handleEditUser(user.id)} />
                <FaRegTrashAlt
  style={{ color: 'red', cursor: 'pointer' }}
  onClick={() => handleDeleteUser(user._id)}
/> 
          
              </td>
          
          </tr>
          )
          
 
          })}
       
      </tbody>
      <UserModal
        isOpen={isModalOpen}
        onClose={closeModal}
        user={selectedUser}
      />
    </table>
    <nav>
          <ul className="pagination">
            {pageNumbers.map((number) => (
              <li key={number} className="page-item">
                <a
                  onClick={() => paginate(number)}
                  className={`page-link ${currentPage === number ? 'active' : ''}`}
                >
                  {number}
                </a>
              </li>
            ))}
          </ul>
        </nav>
  </div>
    </div>
    
  );
};

export default UserList;
