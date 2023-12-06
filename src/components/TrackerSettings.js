import React from 'react'

const TrackerSettings = () => {
  return (
    <div>
        <div className="page-header">
                            <div className="row align-items-end">
                                <div className="col-lg-8">
                                    <div className="page-header-title">
                                        <i className="ik ik-compass bg-dark"></i>
                                        <div className="d-inline">
                                            <h5 className="pt-2">Settings</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <nav className="breadcrumb-container" aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <a href="../index.html"><i className="ik ik-home"></i></a>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">Settings</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div class="settings-container card border">
	                    	<div class="card-body">
	                    		<div class="row">
								  <div class="col-12 col-lg-3">
								    <div class="nav flex-column settings-nav" id="settings-tab" role="tablist" aria-orientation="vertical">
								      
								      <a class="nav-link d-flex justify-content-between active" id="settings-Screenshots-tab" data-toggle="settingsTabNav" href="#settings-Screenshots" role="tab" aria-controls="settings-Screenshots" aria-selected="true"><span>Screenshots</span> <span class="text-muted">3/hr</span></a>

								      

								      <a class="nav-link d-flex justify-content-between" id="settings-WeeklyTimeLimit-tab" data-toggle="settingsTabNav" href="#settings-WeeklyTimeLimit" role="tab" aria-controls="settings-WeeklyTimeLimit" aria-selected="false"><span>Weekly time limit</span> <span class="text-muted">No limit</span></a>

								      <a class="nav-link d-flex justify-content-between" id="settings-AutoPauseTracking-tab" data-toggle="settingsTabNav" href="#settings-AutoPauseTracking" role="tab" aria-controls="settings-AutoPauseTracking" aria-selected="false"><span>Auto-pause tracking after</span> <span class="text-muted">5 min</span></a>

								      <a class="nav-link d-flex justify-content-between" id="settings-AllowAddingOfflineTime-tab" data-toggle="settingsTabNav" href="#settings-AllowAddingOfflineTime" role="tab" aria-controls="settings-AllowAddingOfflineTime" aria-selected="false"><span>Allow adding Offline Time</span> <span class="text-muted">Yes</span></a>

								      <a class="nav-link d-flex justify-content-between" id="settings-NotifyWhenScreenshotTaken-tab" data-toggle="settingsTabNav" href="#settings-NotifyWhenScreenshotTaken" role="tab" aria-controls="settings-NotifyWhenScreenshotTaken" aria-selected="false"><span>Notify when screenshot is taken</span> <span class="text-muted">Yes</span></a>

								      <a class="nav-link d-flex justify-content-between" id="settings-WeekStartsOn-tab" data-toggle="settingsTabNav" href="#settings-WeekStartsOn" role="tab" aria-controls="settings-WeekStartsOn" aria-selected="false"><span>Week starts on</span> <span class="text-muted">Mon</span></a>

								      <a class="nav-link d-flex justify-content-between" id="settings-CurrencySymbol-tab" data-toggle="settingsTabNav" href="#settings-CurrencySymbol" role="tab" aria-controls="settings-CurrencySymbol" aria-selected="false"><span>Currency symbol</span> <span class="text-muted">₹</span></a>

								      <a class="nav-link" id="settings-EmployeeDesktopApplication-tab" data-toggle="settingsTabNav" href="#settings-EmployeeDesktopApplication" role="tab" aria-controls="settings-EmployeeDesktopApplication" aria-selected="false">Employee desktop application settings</a>

								    </div>
								  </div>
								  <div class="col-12 col-lg-9">
								    
								    <div class="settings-content tab-content" id="settings-tabContent">
								      
								      <div class="tab-pane fade show active" id="settings-Screenshots" role="tabpanel" aria-labelledby="settings-Screenshots-tab">
								      	<h4 class="pb-1">Screenshots</h4>
								      	<div class="alert alert-success">
								      		How frequently screenshots will be taken. This number is an average since screenshots are taken at random intervals.
								      	</div>
								      	
								      	<form class="form-inline">
                                            <div class="form-group mx-sm-2">
                                                <label class="custom-control custom-radio">
                                                    <input type="radio" class="custom-control-input" name="takeScreenshotRadio" checked=""/>
                                                    <span class="custom-control-label"> Take</span>
                                                </label>
                                            </div>

                                            <div class="form-group mx-sm-2">
                                                <select class="form-control">
                                                	<option value="3">3</option>
                                                	<option disabled="" value="5" class="lightgray">5 - Standard plan</option>
                                                	<option disabled="" value="6" class="lightgray">6 - Standard plan</option>
                                                	<option disabled="" value="10" class="lightgray">10 - Professional plan</option>
                                                	<option disabled="" value="12" class="lightgray">12 - Professional plan</option>
                                                	<option disabled="" value="15" class="lightgray">15 - Professional plan</option>
                                                	<option disabled="" value="20" class="lightgray">20 - Professional plan</option>
                                                	<option disabled="" value="30" class="lightgray">30 - Professional plan</option>
                                                </select>
                                                <span class="ml-2">screenshots per hour</span>
                                            </div>

                                            <div class="form-group mx-sm-2">
                                                <select class="form-control" style={{width: "150px"}}>
                                                	<option value="Allow blur">Allow blur</option>
                                                	<option value="Blur all">Blur all</option>
                                                	<option value="Disallow blur">Disallow blur</option>
                                                </select>
                                            </div>

                                            <div class="form-group mx-sm-2">
                                                <label class="custom-control custom-radio">
                                                    <input type="radio" class="custom-control-input" name="takeScreenshotRadio"/>
                                                    <span class="custom-control-label"> Do not take</span>
                                                </label>
                                            </div>
                                        </form>

                                       
                                        

								      </div>

								      

								      

								      <div class="tab-pane fade" id="settings-WeeklyTimeLimit" role="tabpanel" aria-labelledby="settings-WeeklyTimeLimit-tab">
								      	<h4 class="pb-1">Weekly time limit</h4>
								      	<div class="alert alert-success">
								      		Number of hours your employees are allowed to work. The tracking will stop when the limit is reached. The time zone for the time limit is always UTC.
								      	</div>

								      	<form class="form-inline">
                                            <div class="form-group mx-sm-2">
                                                <label class="custom-control custom-radio">
                                                    <input type="radio" class="custom-control-input" name="limitToRadio"/>
                                                    <span class="custom-control-label"> Limit to</span>
                                                </label>
                                            </div>

                                            <div class="form-group mx-sm-2">
                                                <input type="text" class="form-control" value="0" disabled=""/>
                                                <span class="ml-2">hours per week</span>
                                            </div>

                                            <div class="form-group mx-sm-2">
                                                <label class="custom-control custom-radio">
                                                    <input type="radio" class="custom-control-input" name="limitToRadio" checked=""/>
                                                    <span class="custom-control-label"> Do not limit</span>
                                                </label>
                                            </div>
                                        </form>

                                        

								      </div>

								      <div class="tab-pane fade" id="settings-AutoPauseTracking" role="tabpanel" aria-labelledby="settings-AutoPauseTracking-tab">
								      	
								      	<h4 class="pb-1">Auto-pause tracking after</h4>
								      	<div class="alert alert-success">
								      		Tracking will automatically pause after the specified period of inactivity and will automatically resume when user becomes active again.
								      	</div>
								      	
								      	<form class="form-inline">
                                            <div class="form-group mx-sm-2">
                                                <label class="custom-control custom-radio">
                                                    <input type="radio" class="custom-control-input" name="pauseAfterRadio" checked=""/>
                                                    <span class="custom-control-label"> Pause after</span>
                                                </label>
                                            </div>

                                            <div class="form-group mx-sm-2">
                                                <input type="text" class="form-control" value="5"/>
                                                <span class="ml-2">minutes of user inactivity</span>
                                            </div>

                                            <div class="form-group mx-sm-2">
                                                <label class="custom-control custom-radio">
                                                    <input type="radio" class="custom-control-input" name="pauseAfterRadio"/>
                                                    <span class="custom-control-label"> Do not pause</span>
                                                </label>
                                            </div>
                                        </form>

                                        

								      </div>

								      <div class="tab-pane fade" id="settings-AllowAddingOfflineTime" role="tabpanel" aria-labelledby="settings-AllowAddingOfflineTime-tab">
								      	
								      	<h4 class="pb-1">Allow adding Offline Time</h4>
								      	<div class="alert alert-success">
								      		Allow user to add time not tracked by the program to their timeline manually. It is often used to account for work away from a computer.
								      	</div>
								      	
								      	<form class="form-inline">
                                            <div class="form-group mx-sm-2">
                                                <label class="custom-control custom-radio">
                                                    <input type="radio" class="custom-control-input" name="allowOfflineTimeRadio" checked=""/>
                                                    <span class="custom-control-label"> Allow</span>
                                                </label>
                                            </div>

                                            <div class="form-group mx-sm-2">
                                                <label class="custom-control custom-radio">
                                                    <input type="radio" class="custom-control-input" name="allowOfflineTimeRadio"/>
                                                    <span class="custom-control-label"> Disallow</span>
                                                </label>
                                            </div>
                                        </form>

                                        

								      </div>

								      <div class="tab-pane fade" id="settings-NotifyWhenScreenshotTaken" role="tabpanel" aria-labelledby="settings-NotifyWhenScreenshotTaken-tab">
								      	<h4 class="pb-1">Notify when screenshot is taken</h4>
								      	<div class="alert alert-success">
								      		Every time a screenshot is taken – a small notification will pop up for a couple of seconds next to the system tray saying that a Screenshot was taken.
								      	</div>
								      	
								      	<form class="form-inline">
                                            <div class="form-group mx-sm-2">
                                                <label class="custom-control custom-radio">
                                                    <input type="radio" class="custom-control-input" name="notifyScreenshotTakenRadio" checked=""/>
                                                    <span class="custom-control-label"> Notify</span>
                                                </label>
                                            </div>

                                            <div class="form-group mx-sm-2">
                                                <label class="custom-control custom-radio">
                                                    <input type="radio" class="custom-control-input" name="notifyScreenshotTakenRadio"/>
                                                    <span class="custom-control-label"> Do not notify</span>
                                                </label>
                                            </div>
                                        </form>

                                        
								      </div>

								      <div class="tab-pane fade" id="settings-WeekStartsOn" role="tabpanel" aria-labelledby="settings-WeekStartsOn-tab">
								      	<h4 class="pb-1">Week starts on</h4>
								      	<div class="alert alert-success">
								      		When does your week start? <br/> This will be used when showing totals for a week or setting weekly time limits.
								      	</div>
								      	<form class="form-inline">
								      		<select class="form-control" style={{width: "150px"}}>
								      			<option value="Sunday">Sunday</option>
								      			<option value="Monday">Monday</option>
								      		</select>
								      	</form>
								      	
								      </div>
								      <div class="tab-pane fade" id="settings-CurrencySymbol" role="tabpanel" aria-labelledby="settings-CurrencySymbol-tab">
								      	<h4 class="pb-1">Currency symbol</h4>
								      	<div class="alert alert-success">
								      		The symbol (e.g. $, €, £) will be shown when you set hourly pay rates for your employees and everywhere where money is shown (like total amount spent today or on a specific project).
								      	</div>
								      	<form class="form-inline">
								      		<div class="input-group mb-2 mr-sm-2">
                                                <input type="text" class="form-control"/>
                                                <div class="input-group-append">
                                                    <div class="input-group-text">₹</div>
                                                </div>
                                            </div>
								      	</form>
								      	
								      </div>

								      <div class="tab-pane fade" id="settings-EmployeeDesktopApplication" role="tabpanel" aria-labelledby="settings-EmployeeDesktopApplication-tab">
								      	<h4 class="pb-1">Employee desktop application settings</h4>
								      	<div class="alert alert-success mb-30">
								      		Some of the settings are controlled by users in the menu of their desktop applications – managers can not change those on the web. Here we will explain what these settings do.
								      	</div>

								      	<div class="pb-20">
								      		<h5>Launch Screenshot Monitor when I start system <i class="fab fa-windows text-muted"></i></h5>
								      		<p>The app will be launched when the computer starts. While the application will be loaded, the tracking will not start automatically by default. The default is Yes.</p>
								      	</div>

								      	<div class="pb-20">
								      		<h5>Automatically start tracking when I launch Screenshot Monitor <i class="fab fa-windows text-muted"></i> <i class="fab fa-apple text-muted"></i></h5>
								      		<p>The tracking will start without pressing Start button right after the applications is launched. This is often combined with “Launch Screenshot Monitor when I start system” setting when tracking has to be run all the time while the computer is running. The default is No.</p>
								      	</div>

								      	<div class="pb-20">
								      		<h5>Display a notification in tray when a screenshot is taken <i class="fab fa-windows text-muted"></i> <i class="fab fa-apple text-muted"></i></h5>
								      		<p>A small notification will popup next to the tray showing that the screenshot was taken and the name of the current task. This option on the desktop is only available when in web settings manager selects “Notify when screenshot is taken” – only then an employee has an option to show or not to show the notification. The default is Yes.</p>
								      	</div>

								      	<div class="pb-20">
								      		<h5>Minimize button minimizes to the tray <i class="fab fa-windows text-muted"></i></h5>
								      		<p>When Minimize button is pressed – the app will be shown on the taskbar (like any other program). If you check this option, the minimize button will collapse the app without showing it on the taskbar so only the icon in the tray will indicate it is running. The default is No.</p>
								      	</div>

								      	<div class="pb-20">
								      		<h5>Other Notifications <i class="fab fa-windows text-muted"></i> <i class="fab fa-apple text-muted"></i> <i class="fab fa-linux text-muted"></i></h5>
								      		<p>While tracking time, users receive notifications in a popup next to the tray showing when Time Tracking Started, Stopped, Paused because of inactivity or Resumed after pausing. There is no option to disable these notifications. <a href="#" class="text-primary">More details about desktop notifications</a>.</p>
								      	</div>

								      </div>

								    </div>

								  </div>
								</div>

	                    	</div>
                    
                        </div>
    </div>
  )
}

export default TrackerSettings