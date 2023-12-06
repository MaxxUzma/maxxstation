import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "../styles/custom.css";
import '@fortawesome/fontawesome-free/css/all.css';


const ProjectLogsContent = () => {
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
                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width :"46.2344px",color:"grey"}}>User</th>
                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width: "126.828px",color:"grey"}}>Project</th>

                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width :"45.9531px",color:"grey"}}>Log type</th>

                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width :"321.938px",color:"grey"}}>Description</th>
                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width :"100.109px",color:"grey"}}>Date</th>
                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width :"47.7031px",color:"grey"}}>View log</th>
                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width :"101.422px",color:"grey"}}>Start Time</th>
                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width :"100.562px",color:"grey"}}>End Time</th>
                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width :"79.6094px",color:"grey"}}>Billable Time</th>

                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width :"86.4531px",color:"grey"}}>Non-billable Time</th>

                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width :"72.1875px",color:"grey"}}>Total Time</th>

                      




                    </tr>
                  </thead>
                  <tbody>
                    <tr role='row' className='odd'>
                      <td className='sorting_1'>Simarjot Kaur</td>
                      <td>Maxx-Human Resource Management</td>
                      <td>Manual</td>
                      <td>Content Reasearch Project</td>
                      <td>Tue, 14 April 2020 06:39 PM</td>
                      <td>
                        <div className='table-actions darkhover txt-center'>
                          <a href='#' title="view Task Log's " className='ml-0' data-toggle="modal" data-target='#view_task_log'>
                            <i className='ik ik-eye' data-toggle="tooltip" data-placement="top" data-original-title title></i>
                          </a>
                        </div>

                      </td>
                      <td >
                      Tue, 14 April 2020  03:24 PM
                      </td>
                      <td>
                      Tue, 14 April 2020  06:39 PM
                      </td>
<td>
  
( 1 hours 16 minutes)                  
                                          
</td>
<td>

</td>
<td>
( 1 hours 16 minutes)       
</td>
                    </tr>
                    <tr role='row' className='odd'>
                      <td className='sorting_1'>Simarjot Kaur</td>
                      <td>Maxx-Human Resource Management</td>
                      <td>Manual</td>
                      <td>Content Reasearch Project</td>
                      <td>Tue, 14 April 2020 06:39 PM</td>
                      <td>
                        <div className='table-actions darkhover txt-center'>
                          <a href='#' title="view Task Log's " className='ml-0' data-toggle="modal" data-target='#view_task_log'>
                            <i className='ik ik-eye' data-toggle="tooltip" data-placement="top" data-original-title title></i>
                          </a>
                        </div>

                      </td>
                      <td >
                      Tue, 14 April 2020  03:24 PM
                      </td>
                      <td>
                      Tue, 14 April 2020  06:39 PM
                      </td>
<td>
  
( 1 hours 16 minutes)                  
                                          
</td>
<td>

</td>
<td>
( 1 hours 16 minutes)       
</td>
                    </tr>
                    <tr role='row' className='odd'>
                      <td className='sorting_1'>Simarjot Kaur</td>
                      <td>Maxx-Human Resource Management</td>
                      <td>Manual</td>
                      <td>Content Reasearch Project</td>
                      <td>Tue, 14 April 2020 06:39 PM</td>
                      <td>
                        <div className='table-actions darkhover txt-center'>
                          <a href='#' title="view Task Log's " className='ml-0' data-toggle="modal" data-target='#view_task_log'>
                            <i className='ik ik-eye' data-toggle="tooltip" data-placement="top" data-original-title title></i>
                          </a>
                        </div>

                      </td>
                      <td >
                      Tue, 14 April 2020  03:24 PM
                      </td>
                      <td>
                      Tue, 14 April 2020  06:39 PM
                      </td>
<td>
  
( 1 hours 16 minutes)                  
                                          
</td>
<td>

</td>
<td>
( 1 hours 16 minutes)       
</td>
                    </tr>
                    <tr role='row' className='odd'>
                      <td className='sorting_1'>Simarjot Kaur</td>
                      <td>Maxx-Human Resource Management</td>
                      <td>Manual</td>
                      <td>Content Reasearch Project</td>
                      <td>Tue, 14 April 2020 06:39 PM</td>
                      <td>
                        <div className='table-actions darkhover txt-center'>
                          <a href='#' title="view Task Log's " className='ml-0' data-toggle="modal" data-target='#view_task_log'>
                            <i className='ik ik-eye' data-toggle="tooltip" data-placement="top" data-original-title title></i>
                          </a>
                        </div>

                      </td>
                      <td >
                      Tue, 14 April 2020  03:24 PM
                      </td>
                      <td>
                      Tue, 14 April 2020  06:39 PM
                      </td>
<td>
  
( 1 hours 16 minutes)                  
                                          
</td>
<td>

</td>
<td>
( 1 hours 16 minutes)       
</td>
                    </tr>
                    <tr role='row' className='odd'>
                      <td className='sorting_1'>Simarjot Kaur</td>
                      <td>Maxx-Human Resource Management</td>
                      <td>Manual</td>
                      <td>Content Reasearch Project</td>
                      <td>Tue, 14 April 2020 06:39 PM</td>
                      <td>
                        <div className='table-actions darkhover txt-center'>
                          <a href='#' title="view Task Log's " className='ml-0' data-toggle="modal" data-target='#view_task_log'>
                            <i className='ik ik-eye' data-toggle="tooltip" data-placement="top" data-original-title title></i>
                          </a>
                        </div>

                      </td>
                      <td >
                      Tue, 14 April 2020  03:24 PM
                      </td>
                      <td>
                      Tue, 14 April 2020  06:39 PM
                      </td>
<td>
  
( 1 hours 16 minutes)                  
                                          
</td>
<td>

</td>
<td>
( 1 hours 16 minutes)       
</td>
                    </tr>
                    <tr role='row' className='odd'>
                      <td className='sorting_1'>Simarjot Kaur</td>
                      <td>Maxx-Human Resource Management</td>
                      <td>Manual</td>
                      <td>Content Reasearch Project</td>
                      <td>Tue, 14 April 2020 06:39 PM</td>
                      <td>
                        <div className='table-actions darkhover txt-center'>
                          <a href='#' title="view Task Log's " className='ml-0' data-toggle="modal" data-target='#view_task_log'>
                            <i className='ik ik-eye' data-toggle="tooltip" data-placement="top" data-original-title title></i>
                          </a>
                        </div>

                      </td>
                      <td >
                      Tue, 14 April 2020  03:24 PM
                      </td>
                      <td>
                      Tue, 14 April 2020  06:39 PM
                      </td>
<td>
  
( 1 hours 16 minutes)                  
                                          
</td>
<td>

</td>
<td>
( 1 hours 16 minutes)       
</td>
                    </tr>
                    <tr role='row' className='odd'>
                      <td className='sorting_1'>Simarjot Kaur</td>
                      <td>Maxx-Human Resource Management</td>
                      <td>Manual</td>
                      <td>Content Reasearch Project</td>
                      <td>Tue, 14 April 2020 06:39 PM</td>
                      <td>
                        <div className='table-actions darkhover txt-center'>
                          <a href='#' title="view Task Log's " className='ml-0' data-toggle="modal" data-target='#view_task_log'>
                            <i className='ik ik-eye' data-toggle="tooltip" data-placement="top" data-original-title title></i>
                          </a>
                        </div>

                      </td>
                      <td >
                      Tue, 14 April 2020  03:24 PM
                      </td>
                      <td>
                      Tue, 14 April 2020  06:39 PM
                      </td>
<td>
  
( 1 hours 16 minutes)                  
                                          
</td>
<td>

</td>
<td>
( 1 hours 16 minutes)       
</td>
                    </tr>
                    <tr role='row' className='odd'>
                      <td className='sorting_1'>Simarjot Kaur</td>
                      <td>Maxx-Human Resource Management</td>
                      <td>Manual</td>
                      <td>Content Reasearch Project</td>
                      <td>Tue, 14 April 2020 06:39 PM</td>
                      <td>
                        <div className='table-actions darkhover txt-center'>
                          <a href='#' title="view Task Log's " className='ml-0' data-toggle="modal" data-target='#view_task_log'>
                            <i className='ik ik-eye' data-toggle="tooltip" data-placement="top" data-original-title title></i>
                          </a>
                        </div>

                      </td>
                      <td >
                      Tue, 14 April 2020  03:24 PM
                      </td>
                      <td>
                      Tue, 14 April 2020  06:39 PM
                      </td>
<td>
  
( 1 hours 16 minutes)                  
                                          
</td>
<td>

</td>
<td>
( 1 hours 16 minutes)       
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

export default ProjectLogsContent;
