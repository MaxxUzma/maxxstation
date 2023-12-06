import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "../styles/custom.css";
import '@fortawesome/fontawesome-free/css/all.css';


const TaskLogsContent = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const handleSearch = () => {
  
    console.log('Search button clicked');
  };

  const handleReset = () => {
    
    console.log('Reset button clicked');
  };
  return (
    <>
      <div className="container-fluid bg-white p-4">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-12 project-log-container">
          <div className="row">
           
            <div className="col-md-4 mb-3" style={{ display: "block", textAlign: "left" }}>
              <label htmlFor="firstSelect">Projects</label>
              <select className="form-control" id="firstSelect">
                <option value="option1">--All--</option>
                <option value="option2">Option 2</option>
               
              </select>
            </div>
            
            
            <div className="col-md-4 mb-3" style={{ display: "block", textAlign: "left" }}>
              <label htmlFor="secondSelect">Podjinn & jinns</label>
              <select className="form-control" id="secondSelect">
                <option value="option1">--All--</option>
                <option value="option2">Option 2</option>
              
              </select>
            </div>
            
            
            <div className="col-md-4 mb-3" style={{ display: "block", textAlign: "left" }}>
              <label htmlFor="inputField">Date</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-light">
                    <i className="far fa-calendar-alt"></i>
                  </span>
                </div>
                <DatePicker
                  id="inputField"
                  className="form-control"
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  placeholderText="Select a date"
                />
              </div>
            </div>
            <div className="col-md-12  mb-3" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <button
                style={{ background: "orange" }}
                className="btn btn-orange"
                onClick={handleSearch}
              >
                Search
              </button>
              <button
                style={{ background: "grey" }}
                className="btn btn-grey mx-3"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
            <div className='row pt-4 text-secondary'>
              <div className='col-12 col-md text-center'>
                <strong>Total Project Time:</strong>
                "612 hours 22 minutes (612.22)"

              </div>
              
              <div className='col-12 col-md text-center'>
                <strong>Non-Billable Time:</strong>
                "91 hours 27 minutes (91.27)"

              </div>
              <div className='col-12 col-md text-center'>
                <strong>Billable-time</strong>
                "520 hours (612.22)"

              </div>
            </div>
          </div>          
        </div>
      </div>
    </div>
    <div className='card'>
      <div className='card-body'>
        <div className='dataTables-wrapper dt-bootstrap4 no-footer'>
          <div id='data_table-wrapper' >
            <div className='row'>
              <div className='col-sm-8 col-md-6'>
<label>show<select>entries</select></label>
              </div>
              <div className='col-md-12 col-md-6'>
                <div className='data_table_filter' >
                  <label>
                    <input type='search' className='form-control font-control-sm' placeholder='search'/>
                  </label>

                </div>

              </div>

            </div>
            <div className='row'>
              <div className='col-sm-12'>
                <table className='table table-bordered mb-0 dataTable no-footer' role='grid' aria-describedby='data_table_info'>
                  <thead>
                    <tr role='row'>
                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width :"128px",color:"grey"}}>Task</th>
                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width: "46.5312px",color:"grey"}}>Project</th>

                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width :"75.3281px",color:"grey"}}>Description</th>

                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width :"69.8438px",color:"grey"}}>Start Time</th>
                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width :"62.25px",color:"grey"}}>End Time</th>
                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width :"102.422px",color:"grey"}}>Estimated Time</th>
                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width :"64.8594px",color:"grey"}}>Milestone</th>
                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width :"155.719px",color:"grey"}}>Assigned To</th>
                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width :"48.5625px",color:"grey"}}>Priority</th>

                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width :"58.6719px",color:"grey"}}>Progress</th>

                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width :"43.0938px",color:"grey"}}>Status</th>
                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width :"93.2812px",color:"grey"}}>Logged Hours</th>
                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width :"94.4375px",color:"grey"}}>Billable Hours</th>

                      




                    </tr>
                  </thead>
                  <tbody>
                  <tr role="row" class="odd">
                                              <td class="sorting_1">About Us Page </td>
                                              <td>Maxx</td>
                                              <td>-</td>
                                              <td>-
                                              </td>
                                              <td>-</td>
                                              <td>10 Hrs</td>
                                              <td>1st Milestone</td>
                                              <td>Fri, 13 March 2020 07:52 AM</td>
                                              <td>
                                              </td>
                                              <td>0 % </td>
                                              <td>
                                                 Active
                                              </td>
                                              <td>8 Hrs 8 Min</td>
                                              <td>
                                                 2 Hrs 2 Min                   
                                              </td>
                                           </tr>
                                           <tr role="row" class="even">
                                              <td class="sorting_1">Admin Dashboard</td>
                                              <td>Maxx</td>
                                              <td>-</td>
                                              <td>-
                                              </td>
                                              <td>-</td>
                                              <td>10 Hrs</td>
                                              <td>1st Milestone</td>
                                              <td>Fri, 13 March 2020 07:52 AM</td>
                                              <td>
                                              </td>
                                              <td>0 % </td>
                                              <td>
                                                 Active
                                              </td>
                                              <td>8 Hrs 8 Min</td>
                                              <td>
                                                 8 Hrs 8 Min                   
                                              </td>
                                           </tr>
                                           <tr role="row" class="odd">
                                              <td class="sorting_1">Banner slider Integration </td>
                                              <td>Maxx</td>
                                              <td>-</td>
                                              <td>-
                                              </td>
                                              <td>-</td>
                                              <td>10 Hrs</td>
                                              <td>1st Milestone</td>
                                              <td>Fri, 13 March 2020 07:52 AM</td>
                                              <td>
                                              </td>
                                              <td>0 % </td>
                                              <td>
                                                 Active
                                              </td>
                                              <td>8 Hrs 8 Min</td>
                                              <td>
                                                 5 Hrs 5 Min                   
                                              </td>
                                           </tr>
                                           <tr role="row" class="even">
                                              <td class="sorting_1">Credit card Integration</td>
                                              <td>Maxx</td>
                                              <td>-</td>
                                              <td>-
                                              </td>
                                              <td>-</td>
                                              <td>10 Hrs</td>
                                              <td>1st Milestone</td>
                                              <td>Fri, 13 March 2020 07:52 AM</td>
                                              <td>
                                              </td>
                                              <td>0 % </td>
                                              <td>
                                                 Active
                                              </td>
                                              <td>8 Hrs 8 Min</td>
                                              <td>
                                                 7 Hrs 7 Min                   
                                              </td>
                                           </tr>
                                           <tr role="row" class="odd">
                                              <td class="sorting_1">Customer Management</td>
                                              <td>Maxx</td>
                                              <td>-</td>
                                              <td>-
                                              </td>
                                              <td>-</td>
                                              <td>10 Hrs</td>
                                              <td>1st Milestone</td>
                                              <td>Fri, 13 March 2020 07:52 AM</td>
                                              <td>
                                              </td>
                                              <td>0 % </td>
                                              <td>
                                                 Active
                                              </td>
                                              <td>8 Hrs 8 Min</td>
                                              <td>
                                                 3 Hrs 3 Min                   
                                              </td>
                                           </tr>
                                           <tr role="row" class="odd">
                                              <td class="sorting_1">Home Page </td>
                                              <td>Maxx</td>
                                              <td>-</td>
                                              <td>-
                                              </td>
                                              <td>-</td>
                                              <td>10 Hrs</td>
                                              <td>1st Milestone</td>
                                              <td>Fri, 13 March 2020 07:52 AM</td>
                                              <td>
                                              </td>
                                              <td>0 % </td>
                                              <td>
                                                 Active
                                              </td>
                                              <td>8 Hrs 8 Min</td>
                                              <td>
                                                 8 Hrs 8 Min                   
                                              </td>
                                           </tr>
                                           <tr role="row" class="even">
                                              <td class="sorting_1">Login</td>
                                              <td>Maxx</td>
                                              <td>-</td>
                                              <td>-
                                              </td>
                                              <td>-</td>
                                              <td>10 Hrs</td>
                                              <td>1st Milestone</td>
                                              <td>Fri, 13 March 2020 07:52 AM</td>
                                              <td>
                                              </td>
                                              <td>0 % </td>
                                              <td>
                                                 Active
                                              </td>
                                              <td>8 Hrs 8 Min</td>
                                              <td>
                                                 3 Hrs 3 Min                   
                                              </td>
                                           </tr>
                                           <tr role="row" class="odd">
                                              <td class="sorting_1">Logout</td>
                                              <td>Maxx</td>
                                              <td>-</td>
                                              <td>-
                                              </td>
                                              <td>-</td>
                                              <td>10 Hrs</td>
                                              <td>1st Milestone</td>
                                              <td>Fri, 13 March 2020 07:52 AM</td>
                                              <td>
                                              </td>
                                              <td>0 % </td>
                                              <td>
                                                 Active
                                              </td>
                                              <td>8 Hrs 8 Min</td>
                                              <td>
                                                 2 Hrs 2 Min                   
                                              </td>
                                           </tr>
                                           <tr role="row" class="even">
                                              <td class="sorting_1">Manage Users</td>
                                              <td>Maxx</td>
                                              <td>-</td>
                                              <td>-
                                              </td>
                                              <td>-</td>
                                              <td>10 Hrs</td>
                                              <td>1st Milestone</td>
                                              <td>Fri, 13 March 2020 07:52 AM</td>
                                              <td>
                                              </td>
                                              <td>0 % </td>
                                              <td>
                                                 Active
                                              </td>
                                              <td>8 Hrs 8 Min</td>
                                              <td>
                                                 7 Hrs 7 Min                   
                                              </td>
                                           </tr>
                  </tbody>


                </table>

              </div>


            </div>
            <div className='row py-4 justify-content-end'>
              <div className='col-12 col-lg-4'>
                <div className='row'>
                  <div className='col-12 col-md-4'>
                    <button className='btn btn-block btn-success'>Export</button>
                  </div>
                  <div className='col-12 col-md-4'>
                    <button className='btn btn-block btn-danger'>PDF</button>
                  </div>
                  <div className='col-12 col-md-4'>
                    <button className='btn btn-block btn-info'>Printer</button>
                  </div>
                </div>
              </div>
            </div>


          </div>
          
        </div>


      </div>
    </div>
    </>
  
  );
};

export default TaskLogsContent;
