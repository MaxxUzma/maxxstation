import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFolder, BsPlus, BsArrowRepeat, BsThreeDotsVertical, BsSearch } from 'react-icons/bs';
import { BsCheckBox, BsEye, BsPencil, BsTrash } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';

const MessagePage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isIconsHovered,setIsIconsHovered] = useState(false)

  return (
    <>
    <div>
    <div style={{ background: 'black', padding: '10px', textAlign: 'left', width: '150px' }}>
      <FaUser style={{ color: 'white', fontSize: '18px', marginRight: '5px' }} />
      <span style={{ color: 'white', fontSize: '18px' }}>Messages</span>
    </div>
    <div className="container-fluid bg-white p-4 d-flex align-items-center justify-content-between">
        <div
          className="d-flex align-items-center mr-4 border-bottom border-gray pb-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <input type="checkbox" className="mr-2" style={{ marginRight: '8px' }} />
          <BsFolder className="mr-2" style={{ marginRight: '8px', marginLeft: '5px' }} size="18" />
          <BsPlus className="mr-2" size="22" />
          <BsArrowRepeat className="mr-2" size="18" />
          <div className="position-relative mr-2">
            <BsThreeDotsVertical size="18" />
            {isHovered && (
              <div className="position-absolute bg-dark text-white p-2">
                <div>Option 1</div>
                <div>Option 2</div>
              </div>
            )}
          </div>
        </div>
        <div className="flex-grow-1 mx-4">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search" />
            <div className="input-group-append">
              <span className="input-group-text p-0 mt-2">
                <BsSearch size="22" />
              </span>
            </div>
          </div>  
        </div>
        <div className="mr-4">1-50 50-200</div>
        <div>
          <span className="mr-2">{'<'}</span>
          <span>{'>'}</span>
        </div>
      </div>
      <div className="container-fluid bg-white p-4 mt-3" 
        onMouseEnter={() => setIsIconsHovered(true)}
        onMouseLeave={() => setIsIconsHovered(false)}>
      
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div className="d-flex align-items-center">
            <input type="checkbox" className="mr-2" style={{ marginRight: '14px', height: '24px', width: '24px' }} />
            <div className="flex-grow-1">
              <p className="m-0">Description text goes here</p>
            </div>
          </div>
          {isIconsHovered && (
            <div className="ml-auto d-flex" style={{ marginRight: "5px" }}>
              <BsEye className="mr-2" />
              <BsPencil className="mr-2" />
              <BsTrash />
            </div>
          )}
        </div>
      </div>
      <div className="container-fluid bg-white p-4 mt-3"
        onMouseEnter={() => setIsIconsHovered(true)}
        onMouseLeave={() => setIsIconsHovered(false)}>
      
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div className="d-flex align-items-center">
            <input type="checkbox" className="mr-2" style={{ marginRight: '14px', height: '24px', width: '24px' }} />
            <div className="flex-grow-1">
              <p className="m-0">Description text goes here</p>
            </div>
          </div>
          {isIconsHovered && (
            <div className="ml-auto d-flex" style={{ marginRight: "5px" }}>
              <BsEye className="mr-2" />
              <BsPencil className="mr-2" />
              <BsTrash />
            </div>
          )}
        </div>
      </div>
      <div className="container-fluid bg-white p-4 mt-3"
        onMouseEnter={() => setIsIconsHovered(true)}
        onMouseLeave={() => setIsIconsHovered(false)}>
       
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div className="d-flex align-items-center">
            <input type="checkbox" className="mr-2" style={{ marginRight: '14px', height: '24px', width: '24px' }} />
            <div className="flex-grow-1">
              <p className="m-0">Description text goes here</p>
            </div>
          </div>
          {isIconsHovered && (
            <div className="ml-auto d-flex" style={{ marginRight: "5px" }}>
              <BsEye className="mr-2" />
              <BsPencil className="mr-2" />
              <BsTrash />
            </div>
          )}
        </div>
      </div>
      <div className="container-fluid bg-white p-4 mt-3"
        onMouseEnter={() => setIsIconsHovered(true)}
        onMouseLeave={() => setIsIconsHovered(false)}>
  
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div className="d-flex align-items-center">
            <input type="checkbox" className="mr-2" style={{ marginRight: '14px', height: '24px', width: '24px' }} />
            <div className="flex-grow-1">
              <p className="m-0">Description text goes here</p>
            </div>
          </div>
          {isIconsHovered && (
            <div className="ml-auto d-flex" style={{ marginRight: "5px" }}>
              <BsEye className="mr-2" />
              <BsPencil className="mr-2" />
              <BsTrash />
            </div>
          )}
        </div>
      </div>
      <div className="container-fluid bg-white p-4 mt-3"
        onMouseEnter={() => setIsIconsHovered(true)}
        onMouseLeave={() => setIsIconsHovered(false)}>
       
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div className="d-flex align-items-center">
            <input type="checkbox" className="mr-2" style={{ marginRight: '14px', height: '24px', width: '24px' }} />
            <div className="flex-grow-1">
              <p className="m-0">Description text goes here</p>
            </div>
          </div>
          {isIconsHovered && (
            <div className="ml-auto d-flex" style={{ marginRight: "5px" }}>
              <BsEye className="mr-2" />
              <BsPencil className="mr-2" />
              <BsTrash />
            </div>
          )}
        </div>
      </div>
      <div className="container-fluid bg-white p-4 mt-3"
        onMouseEnter={() => setIsIconsHovered(true)}
        onMouseLeave={() => setIsIconsHovered(false)}>
     
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div className="d-flex align-items-center">
            <input type="checkbox" className="mr-2" style={{ marginRight: '14px', height: '24px', width: '24px' }} />
            <div className="flex-grow-1">
              <p className="m-0">Description text goes here</p>
            </div>
          </div>
          {isIconsHovered && (
            <div className="ml-auto d-flex" style={{ marginRight: "5px" }}>
              <BsEye className="mr-2" />
              <BsPencil className="mr-2" />
              <BsTrash />
            </div>
          )}
        </div>
      </div>
      <div className="container-fluid bg-white p-4 mt-3"
        onMouseEnter={() => setIsIconsHovered(true)}
        onMouseLeave={() => setIsIconsHovered(false)}>
 
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div className="d-flex align-items-center">
            <input type="checkbox" className="mr-2" style={{ marginRight: '14px', height: '24px', width: '24px' }} />
            <div className="flex-grow-1">
              <p className="m-0">Description text goes here</p>
            </div>
          </div>
          {isIconsHovered && (
            <div className="ml-auto d-flex" style={{ marginRight: "5px" }}>
              <BsEye className="mr-2" />
              <BsPencil className="mr-2" />
              <BsTrash />
            </div>
          )}
        </div>
      </div>
      <div className="container-fluid bg-white p-4 mt-3"
        onMouseEnter={() => setIsIconsHovered(true)}
        onMouseLeave={() => setIsIconsHovered(false)}>
        
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div className="d-flex align-items-center">
            <input type="checkbox" className="mr-2" style={{ marginRight: '14px', height: '24px', width: '24px' }} />
            <div className="flex-grow-1">
              <p className="m-0">Description text goes here</p>
            </div>
          </div>
          {isIconsHovered && (
            <div className="ml-auto d-flex" style={{ marginRight: "5px" }}>
              <BsEye className="mr-2" />
              <BsPencil className="mr-2" />
              <BsTrash />
            </div>
          )}
        </div>
      </div>
      <div className="container-fluid bg-white p-4 mt-3"
        onMouseEnter={() => setIsIconsHovered(true)}
        onMouseLeave={() => setIsIconsHovered(false)}>
       
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div className="d-flex align-items-center">
            <input type="checkbox" className="mr-2" style={{ marginRight: '14px', height: '24px', width: '24px' }} />
            <div className="flex-grow-1">
              <p className="m-0 bold">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
            </div>
          </div>
          {isIconsHovered && (
            <div className="ml-auto d-flex" style={{ marginRight: "5px" }}>
              <BsEye className="mr-2" />
              <BsPencil className="mr-2" />
              <BsTrash />
            </div>
              )}
          
        </div>
      </div>
        </div>
      
    </>
  );
};

export default MessagePage;
