import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "../styles/custom.css";
import '@fortawesome/fontawesome-free/css/all.css';


const ScreenshotTimelog = () => {
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
    <div className="card">
                            <div className="card-body">
                                <div className="d-flex justify-content-between pb-2">
                                    <div className="m-l-15"><span className="text-muted">Total:</span> 2911 hrs 30 min <i className="fa fa-square theme-text-primary ml-2"></i></div>
                                    <div className="m-l-15"><span className="text-muted">Showing:</span> 40 </div>
                                </div>
                                

                                <div className="d-flex flex-wrap timelog-container">
                                    <div className="timelog">
                                        <div className="progress progress-sm mb-1">
                                            <div className="progress-bar theme-bg-primary" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div><a href="javascript:void(0);" data-toggle="modal" data-target="#timelogModal"><img src="https://maxxscreenshort.s3.amazonaws.com/screenshots/194/2/770/1590384723.jpg" alt="" className="img-thumbnail"/></a></div>
                                        <div className="py-1 text-muted f-12">Fri, 17 July 2020 10:34 AM </div>
                                        <div className="py-1 d-flex justify-content-between  align-items-center">
                                            <div>
                                                <a href="#" className="delete_screen text-danger"><i className="fa fa-trash"></i></a>
                                            </div>

                                            <ul className="list-unstyled progress-list mb-0">
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                            </ul>
                                        </div>
                                        <div className="text-secondary"> 
                                            <strong data-toggle="tooltip" data-placement="top" title="" data-original-title="Mouse event's : 30">M 30</strong>
                                            <strong> , </strong>
                                            <strong data-toggle="tooltip" data-placement="top" title="" data-original-title="Keyboard stroke : 100">  K 100</strong>
                                        </div>
                                    </div>

                                    


                                    <div className="timelog">
                                        <div className="progress progress-sm mb-1">
                                            <div className="progress-bar theme-bg-primary" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div><a href="javascript:void(0);" data-toggle="modal" data-target="#timelogModal"><img src="https://maxxscreenshort.s3.amazonaws.com/screenshots/194/2/770/1590384723.jpg" alt="" className="img-thumbnail"/></a></div>
                                        <div className="py-1 text-muted f-12">Fri, 17 July 2020 10:34 AM </div>
                                        <div className="py-1 d-flex justify-content-between  align-items-center">
                                            <div>
                                                <a href="#" className="delete_screen text-danger"><i className="fa fa-trash"></i></a>
                                            </div>

                                            <ul className="list-unstyled progress-list mb-0">
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                            </ul>
                                        </div>
                                        <div className="text-secondary"> 
                                            <strong data-toggle="tooltip" data-placement="top" title="" data-original-title="Mouse event's : 30">M 30</strong>
                                            <strong> , </strong>
                                            <strong data-toggle="tooltip" data-placement="top" title="" data-original-title="Keyboard stroke : 100">  K 100</strong>
                                        </div>
                                    </div>

                                    <div className="timelog">
                                        <div className="progress progress-sm mb-1">
                                            <div className="progress-bar theme-bg-primary" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div><a href="javascript:void(0);" data-toggle="modal" data-target="#timelogModal"><img src="https://maxxscreenshort.s3.amazonaws.com/screenshots/194/2/770/1590384723.jpg" alt="" className="img-thumbnail"/></a></div>
                                        <div className="py-1 text-muted f-12">Fri, 17 July 2020 10:34 AM </div>
                                        <div className="py-1 d-flex justify-content-between  align-items-center">
                                            <div>
                                                <a href="#" className="delete_screen text-danger"><i className="fa fa-trash"></i></a>
                                            </div>

                                            <ul className="list-unstyled progress-list mb-0">
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                            </ul>
                                        </div>
                                        <div className="text-secondary"> 
                                            <strong data-toggle="tooltip" data-placement="top" title="" data-original-title="Mouse event's : 30">M 30</strong>
                                            <strong> , </strong>
                                            <strong data-toggle="tooltip" data-placement="top" title="" data-original-title="Keyboard stroke : 100">  K 100</strong>
                                        </div>
                                    </div>

                                    <div className="timelog">
                                        <div className="progress progress-sm mb-1">
                                            <div className="progress-bar theme-bg-primary" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div><a href="javascript:void(0);" data-toggle="modal" data-target="#timelogModal"><img src="https://maxxscreenshort.s3.amazonaws.com/screenshots/194/2/770/1590384723.jpg" alt="" className="img-thumbnail"/></a></div>
                                        <div className="py-1 text-muted f-12">Fri, 17 July 2020 10:34 AM </div>
                                        <div className="py-1 d-flex justify-content-between  align-items-center">
                                            <div>
                                                <a href="#" className="delete_screen text-danger"><i className="fa fa-trash"></i></a>
                                            </div>

                                            <ul className="list-unstyled progress-list mb-0">
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                            </ul>
                                        </div>
                                        <div className="text-secondary"> 
                                            <strong data-toggle="tooltip" data-placement="top" title="" data-original-title="Mouse event's : 30">M 30</strong>
                                            <strong> , </strong>
                                            <strong data-toggle="tooltip" data-placement="top" title="" data-original-title="Keyboard stroke : 100">  K 100</strong>
                                        </div>
                                    </div>

                                    <div className="timelog">
                                        <div className="progress progress-sm mb-1">
                                            <div className="progress-bar theme-bg-primary" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div><a href="javascript:void(0);" data-toggle="modal" data-target="#timelogModal"><img src="https://maxxscreenshort.s3.amazonaws.com/screenshots/194/2/770/1590384723.jpg" alt="" className="img-thumbnail"/></a></div>
                                        <div className="py-1 text-muted f-12">Fri, 17 July 2020 10:34 AM </div>
                                        <div className="py-1 d-flex justify-content-between  align-items-center">
                                            <div>
                                                <a href="#" className="delete_screen text-danger"><i className="fa fa-trash"></i></a>
                                            </div>

                                            <ul className="list-unstyled progress-list mb-0">
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                            </ul>
                                        </div>
                                        <div className="text-secondary"> 
                                            <strong data-toggle="tooltip" data-placement="top" title="" data-original-title="Mouse event's : 30">M 30</strong>
                                            <strong> , </strong>
                                            <strong data-toggle="tooltip" data-placement="top" title="" data-original-title="Keyboard stroke : 100">  K 100</strong>
                                        </div>
                                    </div>

                                    <div className="timelog">
                                        <div className="progress progress-sm mb-1">
                                            <div className="progress-bar theme-bg-primary" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div><a href="javascript:void(0);" data-toggle="modal" data-target="#timelogModal"><img src="https://maxxscreenshort.s3.amazonaws.com/screenshots/194/2/770/1590384723.jpg" alt="" className="img-thumbnail"/></a></div>
                                        <div className="py-1 text-muted f-12">Fri, 17 July 2020 10:34 AM </div>
                                        <div className="py-1 d-flex justify-content-between  align-items-center">
                                            <div>
                                                <a href="#" className="delete_screen text-danger"><i className="fa fa-trash"></i></a>
                                            </div>

                                            <ul className="list-unstyled progress-list mb-0">
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                            </ul>
                                        </div>
                                        <div className="text-secondary"> 
                                            <strong data-toggle="tooltip" data-placement="top" title="" data-original-title="Mouse event's : 30">M 30</strong>
                                            <strong> , </strong>
                                            <strong data-toggle="tooltip" data-placement="top" title="" data-original-title="Keyboard stroke : 100">  K 100</strong>
                                        </div>
                                    </div>



                                    <div className="timelog">
                                        <div className="progress progress-sm mb-1">
                                            <div className="progress-bar theme-bg-primary" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div><a href="javascript:void(0);" data-toggle="modal" data-target="#timelogModal"><img src="https://maxxscreenshort.s3.amazonaws.com/screenshots/194/2/770/1590384723.jpg" alt="" className="img-thumbnail"/></a></div>
                                        <div className="py-1 text-muted f-12">Fri, 17 July 2020 10:34 AM </div>
                                        <div className="py-1 d-flex justify-content-between  align-items-center">
                                            <div>
                                                <a href="#" className="delete_screen text-danger"><i className="fa fa-trash"></i></a>
                                            </div>

                                            <ul className="list-unstyled progress-list mb-0">
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                            </ul>
                                        </div>
                                        <div className="text-secondary"> 
                                            <strong data-toggle="tooltip" data-placement="top" title="" data-original-title="Mouse event's : 30">M 30</strong>
                                            <strong> , </strong>
                                            <strong data-toggle="tooltip" data-placement="top" title="" data-original-title="Keyboard stroke : 100">  K 100</strong>
                                        </div>
                                    </div>

                                     

                                     <div className="timelog">
                                        <div className="progress progress-sm mb-1">
                                            <div className="progress-bar theme-bg-primary" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div><a href="javascript:void(0);" data-toggle="modal" data-target="#timelogModal"><img src="https://maxxscreenshort.s3.amazonaws.com/screenshots/194/2/770/1590384723.jpg" alt="" className="img-thumbnail"/></a></div>
                                        <div className="py-1 text-muted f-12">Fri, 17 July 2020 10:34 AM </div>
                                        <div className="py-1 d-flex justify-content-between  align-items-center">
                                            <div>
                                                <a href="#" className="delete_screen text-danger"><i className="fa fa-trash"></i></a>
                                            </div>

                                            <ul className="list-unstyled progress-list mb-0">
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                            </ul>
                                        </div>
                                        <div className="text-secondary"> 
                                            <strong data-toggle="tooltip" data-placement="top" title="" data-original-title="Mouse event's : 30">M 30</strong>
                                            <strong> , </strong>
                                            <strong data-toggle="tooltip" data-placement="top" title="" data-original-title="Keyboard stroke : 100">  K 100</strong>
                                        </div>
                                    </div>

                                    <div className="timelog">
                                        <div className="progress progress-sm mb-1">
                                            <div className="progress-bar theme-bg-primary" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div><a href="javascript:void(0);" data-toggle="modal" data-target="#timelogModal"><img src="https://maxxscreenshort.s3.amazonaws.com/screenshots/194/2/770/1590384723.jpg" alt="" className="img-thumbnail"/></a></div>
                                        <div className="py-1 text-muted f-12">Fri, 17 July 2020 10:34 AM </div>
                                        <div className="py-1 d-flex justify-content-between  align-items-center">
                                            <div>
                                                <a href="#" className="delete_screen text-danger"><i className="fa fa-trash"></i></a>
                                            </div>

                                            <ul className="list-unstyled progress-list mb-0">
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                            </ul>
                                        </div>
                                        <div className="text-secondary"> 
                                            <strong data-toggle="tooltip" data-placement="top" title="" data-original-title="Mouse event's : 30">M 30</strong>
                                            <strong> , </strong>
                                            <strong data-toggle="tooltip" data-placement="top" title="" data-original-title="Keyboard stroke : 100">  K 100</strong>
                                        </div>
                                    </div>

                                    <div className="timelog">
                                        <div className="progress progress-sm mb-1">
                                            <div className="progress-bar theme-bg-primary" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div><a href="javascript:void(0);" data-toggle="modal" data-target="#timelogModal"><img src="https://maxxscreenshort.s3.amazonaws.com/screenshots/194/2/770/1590384723.jpg" alt="" className="img-thumbnail"/></a></div>
                                        <div className="py-1 text-muted f-12">Fri, 17 July 2020 10:34 AM </div>
                                        <div className="py-1 d-flex justify-content-between  align-items-center">
                                            <div>
                                                <a href="#" className="delete_screen text-danger"><i className="fa fa-trash"></i></a>
                                            </div>

                                            <ul className="list-unstyled progress-list mb-0">
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                            </ul>
                                        </div>
                                        <div className="text-secondary"> 
                                            <strong data-toggle="tooltip" data-placement="top" title="" data-original-title="Mouse event's : 30">M 30</strong>
                                            <strong> , </strong>
                                            <strong data-toggle="tooltip" data-placement="top" title="" data-original-title="Keyboard stroke : 100">  K 100</strong>
                                        </div>
                                    </div>

                                    <div className="timelog">
                                        <div className="progress progress-sm mb-1">
                                            <div className="progress-bar theme-bg-primary" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div><a href="javascript:void(0);" data-toggle="modal" data-target="#timelogModal"><img src="https://maxxscreenshort.s3.amazonaws.com/screenshots/194/2/770/1590384723.jpg" alt="" className="img-thumbnail"/></a></div>
                                        <div className="py-1 text-muted f-12">Fri, 17 July 2020 10:34 AM </div>
                                        <div className="py-1 d-flex justify-content-between  align-items-center">
                                            <div>
                                                <a href="#" className="delete_screen text-danger"><i className="fa fa-trash"></i></a>
                                            </div>

                                            <ul className="list-unstyled progress-list mb-0">
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                            </ul>
                                        </div>
                                        <div className="text-secondary"> 
                                            <strong data-toggle="tooltip" data-placement="top" title="" data-original-title="Mouse event's : 30">M 30</strong>
                                            <strong> , </strong>
                                            <strong data-toggle="tooltip" data-placement="top" title="" data-original-title="Keyboard stroke : 100">  K 100</strong>
                                        </div>
                                    </div>

                                    <div className="timelog">
                                        <div className="progress progress-sm mb-1">
                                            <div className="progress-bar theme-bg-primary" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div><a href="javascript:void(0);" data-toggle="modal" data-target="#timelogModal"><img src="https://maxxscreenshort.s3.amazonaws.com/screenshots/194/2/770/1590384723.jpg" alt="" className="img-thumbnail"/></a></div>
                                        <div className="py-1 text-muted f-12">Fri, 17 July 2020 10:34 AM </div>
                                        <div className="py-1 d-flex justify-content-between  align-items-center">
                                            <div>
                                                <a href="#" className="delete_screen text-danger"><i className="fa fa-trash"></i></a>
                                            </div>

                                            <ul className="list-unstyled progress-list mb-0">
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                            </ul>
                                        </div>
                                        <div className="text-secondary"> 
                                            <strong data-toggle="tooltip" data-placement="top" title="" data-original-title="Mouse event's : 30">M 30</strong>
                                            <strong> , </strong>
                                            <strong data-toggle="tooltip" data-placement="top" title="" data-original-title="Keyboard stroke : 100">  K 100</strong>
                                        </div>
                                    </div>

                                    <div className="timelog">
                                        <div className="progress progress-sm mb-1">
                                            <div className="progress-bar theme-bg-primary" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div><a href="javascript:void(0);" data-toggle="modal" data-target="#timelogModal"><img src="https://maxxscreenshort.s3.amazonaws.com/screenshots/194/2/770/1590384723.jpg" alt="" className="img-thumbnail"/></a></div>
                                        <div className="py-1 text-muted f-12">Fri, 17 July 2020 10:34 AM </div>
                                        <div className="py-1 d-flex justify-content-between  align-items-center">
                                            <div>
                                                <a href="#" className="delete_screen text-danger"><i className="fa fa-trash"></i></a>
                                            </div>

                                            <ul className="list-unstyled progress-list mb-0">
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                            </ul>
                                        </div>
                                        <div className="text-secondary"> 
                                            <strong data-toggle="tooltip" data-placement="top" title="" data-original-title="Mouse event's : 30">M 30</strong>
                                            <strong> , </strong>
                                            <strong data-toggle="tooltip" data-placement="top" title="" data-original-title="Keyboard stroke : 100">  K 100</strong>
                                        </div>
                                    </div>

                                    <div className="timelog">
                                        <div className="progress progress-sm mb-1">
                                            <div className="progress-bar theme-bg-primary" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div><a href="javascript:void(0);" data-toggle="modal" data-target="#timelogModal"><img src="https://maxxscreenshort.s3.amazonaws.com/screenshots/194/2/770/1590384723.jpg" alt="" className="img-thumbnail"/></a></div>
                                        <div className="py-1 text-muted f-12">Fri, 17 July 2020 10:34 AM </div>
                                        <div className="py-1 d-flex justify-content-between  align-items-center">
                                            <div>
                                                <a href="#" className="delete_screen text-danger"><i className="fa fa-trash"></i></a>
                                            </div>

                                            <ul className="list-unstyled progress-list mb-0">
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                                <li className="theme-bg-primary"></li>
                                            </ul>
                                        </div>
                                        <div className="text-secondary"> 
                                            <strong data-toggle="tooltip" data-placement="top" title="" data-original-title="Mouse event's : 30">M 30</strong>
                                            <strong> , </strong>
                                            <strong data-toggle="tooltip" data-placement="top" title="" data-original-title="Keyboard stroke : 100">  K 100</strong>
                                        </div>
                                    </div>

                                    


                                </div>

                            </div>
                        </div>
   
    </>
  
  );
};

export default ScreenshotTimelog;
