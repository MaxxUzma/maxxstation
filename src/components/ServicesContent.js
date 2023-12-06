import React from 'react';
import { BsPencilSquare, BsTrash } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';

const ServicePage = () => {
  const services = [
    { id: 1, name: 'web development' },
    { id: 2, name: 'web development' },
    { id: 3, name: 'web development' },
   
  ];

  return (
    <div>
      <div style={{ background: 'black', padding: '10px', textAlign: 'left', width: '180px' }}>
      <FaUser style={{ color: 'white', fontSize: '18px', marginRight: '5px' }} />
      <span style={{ color: 'white', fontSize: '18px' }}>Service Listing</span>
    </div>
 <div className="bg-white w-100 p-4">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th style={{ borderRight: '1px solid #ccc', width: '1px' }}> </th>
            <th className="w-75" style={{ borderRight: '1px solid #ccc' }}>Service</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>{service.id}</td>
              <td style={{ borderRight: '1px solid #ccc', width: '1px' }}> </td>
              <td>{service.name}</td>
              <td>
                <BsPencilSquare style={{ color: 'blue', cursor: 'pointer' }} />
                <BsTrash style={{ color: 'red', cursor: 'pointer', marginLeft: '5px' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
   
  );
};

export default ServicePage;