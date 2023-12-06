import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "../styles/custom.css";
import '@fortawesome/fontawesome-free/css/all.css';


const ZoomLogContent = () => {
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
                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width :"11.4062px",color:"grey"}}>#</th>
                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width: "148.938px",color:"grey"}}>Project</th>

                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width :"143.766px",color:"grey"}}>Host</th>

                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width :"84.3438px",color:"grey"}}>Topic</th>
                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width :"188.688px",color:"grey"}}>From Date </th>
                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width :"81.75px",color:"grey"}}>Participants</th>
                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width :"166.016px",color:"grey"}}>Total Meeting Time</th>
                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width :"67.5469px",color:"grey"}}>Timezone</th>
                      <th className='sorting' aria-aria-controls='data_table' rowSpan={1} colSpan={1} aria-sort='ascending' aria-label='User : activate to sort column descending' style={{width :"93.875px",color:"grey"}}>Meeting Logs</th>
                    

                      




                    </tr>
                  </thead>
                  <tbody>
                  <tr role="row" class="odd">
                                              <td class="sorting_1">1</td>
                                              <td>Maxx-HRMS</td>
                                              <td>Maxxmann podjinn</td>
                                              <td>Zoom functionality Test</td>
                                              <td>From : 18 August 2020  12:26 PM </td>
                                              <td>To : 18 August 2020  12:37 PM </td>
                                              <td>
                                                 <a href="#" class="text-blue">
                                                 Participants : 3
                                                 </a>
                                              </td>
                                              <td>Total Meeting Time(min) : 13</td>
                                              <td>Asia/Calcutta</td>
                                              <td>
                                                <div class="table-actions darkhover text-center">
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="" class="ml-0" data-original-title="View"><i class="ik ik-eye"></i></a>
                                                </div>
                                              </td>
                                           </tr>
                                           <tr role="row" class="even">
                                              <td class="sorting_1">2</td>
                                              <td>Maxx-Podjinn Tools</td>
                                              <td>Maxxmann podjinn</td>
                                              <td>technical discussion</td>
                                              <td>From : -</td>
                                              <td>To : -</td>
                                              <td>
                                                 <a href="#" class="text-blue">
                                                 Participants : -
                                                 </a>
                                              </td>
                                              <td>Total Meeting Time(min) : -</td>
                                              <td>Asia/Calcutta</td>
                                              <td>
                                                <div class="table-actions darkhover text-center">
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="" class="ml-0" data-original-title="View"><i class="ik ik-eye"></i></a>
                                                </div>
                                              </td>
                                           </tr>
                                           <tr role="row" class="odd">
                                              <td class="sorting_1">3</td>
                                              <td>Maxx-Cloud Tracker</td>
                                              <td>Maxxmann podjinn</td>
                                              <td>test</td>
                                              <td>From : -</td>
                                              <td>To : -</td>
                                              <td>
                                                 <a href="#" class="text-blue">
                                                 Participants : -
                                                 </a>
                                              </td>
                                              <td>Total Meeting Time(min) : -</td>
                                              <td>Asia/Calcutta</td>
                                              <td>
                                                <div class="table-actions darkhover text-center">
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="" class="ml-0" data-original-title="View"><i class="ik ik-eye"></i></a>
                                                </div>
                                              </td>
                                           </tr>
                                           <tr role="row" class="odd">
                                              <td class="sorting_1">5</td>
                                              <td>Maxx-Cloud Tracker</td>
                                              <td>Maxxmann podjinn</td>
                                              <td></td>
                                              <td>From : -</td>
                                              <td>To : -</td>
                                              <td>
                                                 <a href="#" class="text-blue">
                                                 Participants : -
                                                 </a>
                                              </td>
                                              <td>Total Meeting Time(min) : -</td>
                                              <td>Asia/Calcutta</td>
                                              <td>
                                                <div class="table-actions darkhover text-center">
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="" class="ml-0" data-original-title="View"><i class="ik ik-eye"></i></a>
                                                </div>
                                              </td>
                                           </tr>
                                           <tr role="row" class="even">
                                              <td class="sorting_1">6</td>
                                              <td>Maxx-HRMS</td>
                                              <td>Maxxmann podjinn</td>
                                              <td>Zoom testing call</td>
                                              <td>From : 06 August 2020  11:16 AM </td>
                                              <td>To : 06 August 2020  12:05 PM </td>
                                              <td>
                                                 <a href="#" class="text-blue">
                                                 Participants : 30
                                                 </a>
                                              </td>
                                              <td>Total Meeting Time(min) : 290</td>
                                              <td>Asia/Calcutta</td>
                                              <td>
                                                <div class="table-actions darkhover text-center">
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="" class="ml-0" data-original-title="View"><i class="ik ik-eye"></i></a>
                                                </div>
                                              </td>
                                           </tr>
                                           <tr role="row" class="odd">
                                              <td class="sorting_1">7</td>
                                              <td>Maxx-HRMS</td>
                                              <td>Maxxmann podjinn</td>
                                              <td>Testing chat</td>
                                              <td>From : 28 July 2020  07:10 PM </td>
                                              <td>To : 28 July 2020  07:19 PM </td>
                                              <td>
                                                 <a href="#" class="text-blue">
                                                 Participants : 9
                                                 </a>
                                              </td>
                                              <td>Total Meeting Time(min) : 29</td>
                                              <td>Asia/Calcutta</td>
                                              <td>
                                                <div class="table-actions darkhover text-center">
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="" class="ml-0" data-original-title="View"><i class="ik ik-eye"></i></a>
                                                </div>
                                              </td>
                                           </tr>
                                           <tr role="row" class="even selected">
                                              <td class="sorting_1">8</td>
                                              <td>Maxx-HRMS</td>
                                              <td>Maxxmann podjinn</td>
                                              <td>Discussion on Server Error</td>
                                              <td>From : 28 July 2020  06:23 PM </td>
                                              <td>To : 28 July 2020  07:01 PM </td>
                                              <td>
                                                 <a href="#" class="text-blue">
                                                 Participants : 15
                                                 </a>
                                              </td>
                                              <td>Total Meeting Time(min) : 93</td>
                                              <td>Asia/Calcutta</td>
                                              <td>
                                                <div class="table-actions darkhover text-center">
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="" class="ml-0" data-original-title="View"><i class="ik ik-eye"></i></a>
                                                </div>
                                              </td>
                                           </tr>
                                           <tr role="row" class="odd">
                                              <td class="sorting_1">9</td>
                                              <td>Maxx-HRMS</td>
                                              <td>Maxxmann podjinn</td>
                                              <td>test</td>
                                              <td>From : 28 July 2020  05:36 PM </td>
                                              <td>To : 28 July 2020  05:38 PM </td>
                                              <td>
                                                 <a href="#" class="text-blue">
                                                 Participants : 3
                                                 </a>
                                              </td>
                                              <td>Total Meeting Time(min) : 5</td>
                                              <td>Asia/Calcutta</td>
                                              <td>
                                                <div class="table-actions darkhover text-center">
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="" class="ml-0" data-original-title="View"><i class="ik ik-eye"></i></a>
                                                </div>
                                              </td>
                                           </tr>
                                           <tr role="row" class="even">
                                              <td class="sorting_1">10</td>
                                              <td>Maxx-HRMS</td>
                                              <td>Maxxmann podjinn</td>
                                              <td>test</td>
                                              <td>From : 28 July 2020  04:34 PM </td>
                                              <td>To : 28 July 2020  04:34 PM </td>
                                              <td>
                                                 <a href="#" class="text-blue">
                                                 Participants : 2
                                                 </a>
                                              </td>
                                              <td>Total Meeting Time(min) : 2</td>
                                              <td>Asia/Calcutta</td>
                                              <td>
                                                <div class="table-actions darkhover text-center">
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="" class="ml-0" data-original-title="View"><i class="ik ik-eye"></i></a>
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

export default ZoomLogContent;
