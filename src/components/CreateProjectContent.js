import React from 'react';
import { FaUser } from 'react-icons/fa';
const CreateProject = () => {
  return (
    <div>
       <div style={{ background: 'black', padding: '10px', textAlign: 'left', width: '200px' }}>
      <FaUser style={{ color: 'white', fontSize: '18px', marginRight: '5px' }} />
      <span style={{ color: 'white', fontSize: '18px' }}>Create Project</span>
    </div>
 <div className="bg-white w-100 p-4">
      <label className="d-block mb-2 text-left">Project Name</label>
      <input type="text" className="form-control w-50 mb-3"  />

      <div className='form-group'>
        <div className='form-radio'>
          <div className='radio pt-2 pb-1'>
            <label className="d-flex align-items-center">
              <input type='radio' name='radio' checked="checked" />
              <strong className="ml-2">Open:</strong>
              All Users can work on open tasks in this project
            </label>
          </div>
          <div className='radio pt-1 pb-2'>
            <label className="d-flex align-items-center ml-2">
              <input type='radio' name='radio' />
              <strong className="ml-2">Assigned:</strong>
              Only project members can work on open tasks in this project
            </label>
          </div>
        </div>
      </div>
      <label className="d-block mb-2 text-left">Project Members</label>
      <input type="text" className="form-control w-50 mb-3"  />
      <label className="d-block mb-2 text-left">Project Managers</label>
      <input type="text" className="form-control w-50 mb-3"  />

      {/* Your other content goes here */}
    </div>
    </div>
   
  );
};

export default CreateProject;
