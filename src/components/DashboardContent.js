import React from 'react';
import { LuUsers } from "react-icons/lu";
import"./Graph"
import Graph from './Graph';
import Graphsec from './Graphsec';

const DashboardContent = () => {
  return (
    <div className='card-box-sec'>
   
      <div className="row">
        <div className="col-md-3">

          <div className="card" style={{ width: '100%', backgroundColor: 'white' }}>
          <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <p className="card-text">Users</p>
                <h5 className="card-title">1,419</h5>
                <p className="card-text">working hours</p>
              </div>
             
              <span><LuUsers size="35" color='grey'/></span>
            </div>      
          </div>
        </div>

        <div className="col-md-3">
          
          <div className="card" style={{ width: '100%', backgroundColor: 'white' }}>
          <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <p className="card-text">Users</p>
                <h5 className="card-title">1,419</h5>
                <p className="card-text">working hours</p>
              </div>
            
              <span><LuUsers size="35" color='grey' /></span>
            </div>
            
          </div>
        </div>

        <div className="col-md-3">
       
          <div className="card" style={{ width: '100%', backgroundColor: 'white' }}>
          <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <p className="card-text">Users</p>
                <h5 className="card-title">1,419</h5>
                <p className="card-text">working hours</p>
              </div>
              
              <span><LuUsers size="35" color='grey'/></span>
            </div>
          </div>
        </div>

        <div className="col-md-3">
       
          <div className="card" style={{ width: '100%', backgroundColor: 'white' }}>
          <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <p className="card-text">Users</p>
                <h5 className="card-title">1,419</h5>
                <p className="card-text">working hours</p>
              </div>
       
              <span><LuUsers size="35" color='grey' /></span>
            </div>
          </div>
        </div>
      </div>

    
      <div className="row mt-3">
        <div className="col-md-6" style={{ height: '50vh' }}>
        
          <div className="card" style={{ height: '100%',  backgroundColor: 'white' }}>
            <div className="card-body">
            <h5 className="card-title " style={{marginRight:"556px",marginBottom:"36px"}}>Task Progress</h5>
          
              <p className="card-text">
               <Graphsec/>
             

                
              </p>
            </div>
          </div>
        </div>
        

        <div className="col-md-6" style={{ height: '50vh' }}>
        
          <div className="card" style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
            <div className="card-body">
            <h6 className="card-title " style={{marginRight:"556px",marginBottom:"36px"}}>Donut Chart</h6>
            
               <Graph/>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
