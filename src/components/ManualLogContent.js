import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "../styles/custom.css";
import '@fortawesome/fontawesome-free/css/all.css';


const ManualLogContent = () => {
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
            <div className='row justify-content-space-between'>
              <div className='col-md-3'>
                  <select style={{width: "100%"}}>
                    <option>Ozma</option>
                    <option>Uzma</option>
                    <option>Frind</option>
                  </select>
              </div>
              <div className='col-md-3'>
                <div className='data_table_filter' >                  
                    <input type='search' className='form-control font-control-sm' placeholder='search' style={{width: "100%"}} />
                </div>

              </div>

            </div>
            <div className='row'>
              <div className='col-sm-12'>
                <table className='table table-bordered mb-0 dataTable no-footer' role='grid' aria-describedby='data_table_info'>
                  <thead>
                    <tr role='row'>
                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width :"46.8125px",color:"grey"}}>Project</th>
                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width: "89.7656px",color:"grey"}}>Meeting Type</th>

                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width :"109.484px",color:"grey"}}>Meetig Agenda</th>

                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width :"275.266px",color:"grey"}}>Participants</th>
                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width :"109.812px",color:"grey"}}>Meeting Date</th>
                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width :"70.1875px",color:"grey"}}>Start Time</th>
                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width :"62.5781px",color:"grey"}}>End Time</th>
                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width :"100.312px",color:"grey"}}>Billable Time</th>
                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width :"120.922px",color:"grey"}}>Non-Billable Time</th>

                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width :"100.312px",color:"grey"}}>Total Time</th>

                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width :"43.5469px",color:"grey"}}>Action</th>

                      




                    </tr>
                  </thead>
                  <tbody>
                  <tr role="row" class="odd">
                                          <td class="sorting_1">Podjinn</td>
                                          <td>
                                             Meeting
                                          </td>
                                          <td>Test</td>
                                          <td>
                                             Upendra Prasad Chaurasia,Ravinder kumar,Ashok
                                          </td>
                                          <td>18/05/2021 12:06:26</td>
                                          <td>12:06:26</td>
                                          <td>13:06:31</td>
                                          <td>
                                             ( 1 hours 0 minutes)                  
                                          </td>
                                          <td>
                                          </td>
                                          <td>
                                             ( 1 hours 0 minutes)                
                                          </td>
                                          <td>
                                            <div class="table-actions darkhover text-center">
                                                <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit Meeting"><i class="ik ik-edit-2"></i></a>
                                            </div>
                                          </td>
                                       </tr>
                                       <tr role="row" class="even">
                                          <td class="sorting_1">Podjinn</td>
                                          <td>
                                             Meeting
                                          </td>
                                          <td>Test</td>
                                          <td>
                                             Upendra Prasad Chaurasia,Ravinder kumar,Ashok
                                          </td>
                                          <td>18/05/2021 12:06:26</td>
                                          <td>12:06:26</td>
                                          <td>13:06:31</td>
                                          <td>
                                             ( 1 hours 0 minutes)                  
                                          </td>
                                          <td>
                                          </td>
                                          <td>
                                             ( 1 hours 0 minutes)                
                                          </td>
                                          <td>
                                            <div class="table-actions darkhover  text-center">
                                                <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit Meeting"><i class="ik ik-edit-2"></i></a>
                                            </div>
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

export default ManualLogContent;
