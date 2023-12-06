import React from 'react'

const UserSettings = () => {
  return (
    <div><div className="tab-content bg-white border border-top-0" id="settingsTabContent">
    <div className="tab-pane fade show active" id="trackerSettings" role="tabpanel" aria-labelledby="trackerSettings-tab">
        <div className="p-4">
            <form action="">
                <div className="form-row">
                    <div className="form-group col-12 col-md-4">
                      <label className="text-secondary">Services</label>
                      <select className="form-control">
                          <option value="">All Services</option>
                          <option value="50">Accounts and Admin Executive </option>
                          <option value="59">Accounts Executive</option>
                          <option value="9">Admin</option>
                          <option value="47">Business Analyst</option>
                          <option value="63">Business Development Manager</option>
                          <option value="34">CEO</option>
                          <option value="53">Content Writer</option>
                          <option value="57">Creative Graphic Designer</option>
                          <option value="58">Data Analyst</option>
                          <option value="39">Digital Marketing Lead</option>
                          <option value="44">Digital Sales and Marketing Strategist</option>
                          <option value="45">Digtial Sales Manager</option>
                          <option value="46">Front End Developer</option>
                          <option value="38">Frontend Team Lead</option>
                          <option value="54">Full Stack Developer</option>
                          <option value="35">HR Manager</option>
                          <option value="55">IOS Developer</option>
                          <option value="52">Java Developer</option>
                          <option value="42">Junior HR Executive</option>
                          <option value="43">Key Accounts Manager</option>
                          <option value="48">Network Administrator</option>
                          <option value="36">PHP Developer</option>
                          <option value="56">QA Tester</option>
                          <option value="60">Quality Analyst</option>
                          <option value="64">Research Analytics Lead</option>
                          <option value="61">Sales Head</option>
                          <option value="51">Senior Android Developer</option>
                          <option value="41">Senior Business Analyst</option>
                          <option value="66">Senior Business Development Executive</option>
                          <option value="49">Senior Key Accounts Manager</option>
                          <option value="65">Social Media Strategist</option>
                          <option value="40">Sr. Account Executives</option>
                          <option value="37">Tech Lead</option>
                          <option value="62">Tele Sales Executive</option>
                      </select>
                  </div>

                  <div className="col-12 col-md-8 text-right">
                      <a href="javascript:;" className="btn btn-secondary" data-toggle="modal" data-target="#bulk_setting"><i className="fa fa-cog"></i> Bulk Actions</a>
                  </div>

              </div>
              <h5 className="pt-3 pb-2">User Setting</h5>

              <div className="row">
                  <div className="col-12 col-md-3">
                      <div className="card border shadow-none">
                          <div className="card-body p-3 text-secondary">
                              <div className="d-flex justify-content-between align-items-center">
                                  <div>
                                      <a href="javascript:;"><img className="rounded-circle" src="http://podjinn.maxxmanncommunications.com/public/uploads/users/2018-06-04-06-04-19-popular-hairstyles-for-men.jpg" width="36" height="36" alt="user"/></a>
                                  </div>
                                  <div><a href="javascript:;" className="text-secondary" data-toggle="modal" data-target="#psetting"><i className="fa fa-cog"></i></a></div>
                                </div>
                                <h6 className="py-2"><a href="#" className="text-secondary fw-600">Admin</a></h6>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="form-group mb-0">
                                          <label>Screenshot Interval</label>
                                          <select className="form-control">
                                              <option value="">Random</option>
                                              <option value="1">1 Min</option>
                                              <option value="2">2 Min</option>
                                              <option value="3">3 Min</option>
                                              <option value="4">4 Min</option>
                                              <option value="5">5 Min</option>
                                              <option value="6">6 Min</option>
                                              <option value="7">7 Min</option>
                                              <option value="8">8 Min</option>
                                              <option value="9">9 Min</option>
                                              <option value="10">10 Min</option>
                                              <option value="11">11 Min</option>
                                              <option value="12">12 Min</option>
                                              <option value="13">13 Min</option>
                                              <option value="14">14 Min</option>
                                              <option value="15">15 Min</option>
                                              <option value="16">16 Min</option>
                                              <option value="17">17 Min</option>
                                              <option value="18">18 Min</option>
                                              <option value="19">19 Min</option>
                                              <option value="20">20 Min</option>
                                              <option value="21">21 Min</option>
                                              <option value="22">22 Min</option>
                                              <option value="23">23 Min</option>
                                              <option value="24">24 Min</option>
                                              <option value="25">25 Min</option>
                                              <option value="26">26 Min</option>
                                              <option value="27">27 Min</option>
                                              <option value="28">28 Min</option>
                                              <option value="29">29 Min</option>
                                              <option value="30">30 Min</option>
                                          </select>
                                      </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group mb-0">
                                          <label>Show Notification</label>
                                          <select className="form-control">
                                              <option value="0">Disable</option>
                                              <option selected="" value="1">Enable</option>	
                                          </select>
                                      </div>
                                    </div>
                                </div>
                          </div>
                      </div>
                  </div>

                  <div className="col-12 col-md-3">
                      <div className="card border shadow-none">
                          <div className="card-body p-3 text-secondary">
                              <div className="d-flex justify-content-between align-items-center">
                                  <div>
                                      <a href="javascript:;"><img className="rounded-circle" src="http://podjinn.maxxmanncommunications.com/public/uploads/users/2018-06-04-06-04-19-popular-hairstyles-for-men.jpg" width="36" height="36" alt="user"/></a>
                                  </div>
                                  <div><a href="javascript:;" className="text-secondary" data-toggle="modal" data-target="#psetting"><i className="fa fa-cog"></i></a></div>
                                </div>
                                <h6 className="py-2"><a href="#" className="text-secondary fw-600">Admin</a></h6>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="form-group mb-0">
                                          <label>Screenshot Interval</label>
                                          <select className="form-control">
                                              <option value="">Random</option>
                                              <option value="1">1 Min</option>
                                              <option value="2">2 Min</option>
                                              <option value="3">3 Min</option>
                                              <option value="4">4 Min</option>
                                              <option value="5">5 Min</option>
                                              <option value="6">6 Min</option>
                                              <option value="7">7 Min</option>
                                              <option value="8">8 Min</option>
                                              <option value="9">9 Min</option>
                                              <option value="10">10 Min</option>
                                              <option value="11">11 Min</option>
                                              <option value="12">12 Min</option>
                                              <option value="13">13 Min</option>
                                              <option value="14">14 Min</option>
                                              <option value="15">15 Min</option>
                                              <option value="16">16 Min</option>
                                              <option value="17">17 Min</option>
                                              <option value="18">18 Min</option>
                                              <option value="19">19 Min</option>
                                              <option value="20">20 Min</option>
                                              <option value="21">21 Min</option>
                                              <option value="22">22 Min</option>
                                              <option value="23">23 Min</option>
                                              <option value="24">24 Min</option>
                                              <option value="25">25 Min</option>
                                              <option value="26">26 Min</option>
                                              <option value="27">27 Min</option>
                                              <option value="28">28 Min</option>
                                              <option value="29">29 Min</option>
                                              <option value="30">30 Min</option>
                                          </select>
                                      </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group mb-0">
                                          <label>Show Notification</label>
                                          <select className="form-control">
                                              <option value="0">Disable</option>
                                              <option selected="" value="1">Enable</option>	
                                          </select>
                                      </div>
                                    </div>
                                </div>
                          </div>
                      </div>
                  </div>

                  <div className="col-12 col-md-3">
                      <div className="card border shadow-none">
                          <div className="card-body p-3 text-secondary">
                              <div className="d-flex justify-content-between align-items-center">
                                  <div>
                                      <a href="javascript:;"><img className="rounded-circle" src="http://podjinn.maxxmanncommunications.com/public/uploads/users/2018-06-04-06-04-19-popular-hairstyles-for-men.jpg" width="36" height="36" alt="user"/></a>
                                  </div>
                                  <div><a href="javascript:;" className="text-secondary" data-toggle="modal" data-target="#psetting"><i className="fa fa-cog"></i></a></div>
                                </div>
                                <h6 className="py-2"><a href="#" className="text-secondary fw-600">Admin</a></h6>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="form-group mb-0">
                                          <label>Screenshot Interval</label>
                                          <select className="form-control">
                                              <option value="">Random</option>
                                              <option value="1">1 Min</option>
                                              <option value="2">2 Min</option>
                                              <option value="3">3 Min</option>
                                              <option value="4">4 Min</option>
                                              <option value="5">5 Min</option>
                                              <option value="6">6 Min</option>
                                              <option value="7">7 Min</option>
                                              <option value="8">8 Min</option>
                                              <option value="9">9 Min</option>
                                              <option value="10">10 Min</option>
                                              <option value="11">11 Min</option>
                                              <option value="12">12 Min</option>
                                              <option value="13">13 Min</option>
                                              <option value="14">14 Min</option>
                                              <option value="15">15 Min</option>
                                              <option value="16">16 Min</option>
                                              <option value="17">17 Min</option>
                                              <option value="18">18 Min</option>
                                              <option value="19">19 Min</option>
                                              <option value="20">20 Min</option>
                                              <option value="21">21 Min</option>
                                              <option value="22">22 Min</option>
                                              <option value="23">23 Min</option>
                                              <option value="24">24 Min</option>
                                              <option value="25">25 Min</option>
                                              <option value="26">26 Min</option>
                                              <option value="27">27 Min</option>
                                              <option value="28">28 Min</option>
                                              <option value="29">29 Min</option>
                                              <option value="30">30 Min</option>
                                          </select>
                                      </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group mb-0">
                                          <label>Show Notification</label>
                                          <select className="form-control">
                                              <option value="0">Disable</option>
                                              <option selected="" value="1">Enable</option>	
                                          </select>
                                      </div>
                                    </div>
                                </div>
                          </div>
                      </div>
                  </div>

                  <div className="col-12 col-md-3">
                      <div className="card border shadow-none">
                          <div className="card-body p-3 text-secondary">
                              <div className="d-flex justify-content-between align-items-center">
                                  <div>
                                      <a href="javascript:;"><img className="rounded-circle" src="http://podjinn.maxxmanncommunications.com/public/uploads/users/2018-06-04-06-04-19-popular-hairstyles-for-men.jpg" width="36" height="36" alt="user"/></a>
                                  </div>
                                  <div><a href="javascript:;" className="text-secondary" data-toggle="modal" data-target="#psetting"><i className="fa fa-cog"></i></a></div>
                                </div>
                                <h6 className="py-2"><a href="#" className="text-secondary fw-600">Admin</a></h6>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="form-group mb-0">
                                          <label>Screenshot Interval</label>
                                          <select className="form-control">
                                              <option value="">Random</option>
                                              <option value="1">1 Min</option>
                                              <option value="2">2 Min</option>
                                              <option value="3">3 Min</option>
                                              <option value="4">4 Min</option>
                                              <option value="5">5 Min</option>
                                              <option value="6">6 Min</option>
                                              <option value="7">7 Min</option>
                                              <option value="8">8 Min</option>
                                              <option value="9">9 Min</option>
                                              <option value="10">10 Min</option>
                                              <option value="11">11 Min</option>
                                              <option value="12">12 Min</option>
                                              <option value="13">13 Min</option>
                                              <option value="14">14 Min</option>
                                              <option value="15">15 Min</option>
                                              <option value="16">16 Min</option>
                                              <option value="17">17 Min</option>
                                              <option value="18">18 Min</option>
                                              <option value="19">19 Min</option>
                                              <option value="20">20 Min</option>
                                              <option value="21">21 Min</option>
                                              <option value="22">22 Min</option>
                                              <option value="23">23 Min</option>
                                              <option value="24">24 Min</option>
                                              <option value="25">25 Min</option>
                                              <option value="26">26 Min</option>
                                              <option value="27">27 Min</option>
                                              <option value="28">28 Min</option>
                                              <option value="29">29 Min</option>
                                              <option value="30">30 Min</option>
                                          </select>
                                      </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group mb-0">
                                          <label>Show Notification</label>
                                          <select className="form-control">
                                              <option value="0">Disable</option>
                                              <option selected="" value="1">Enable</option>	
                                          </select>
                                      </div>
                                    </div>
                                </div>
                          </div>
                      </div>
                  </div>

                  <div className="col-12 col-md-3">
                      <div className="card border shadow-none">
                          <div className="card-body p-3 text-secondary">
                              <div className="d-flex justify-content-between align-items-center">
                                  <div>
                                      <a href="javascript:;"><img className="rounded-circle" src="http://podjinn.maxxmanncommunications.com/public/uploads/users/2018-06-04-06-04-19-popular-hairstyles-for-men.jpg" width="36" height="36" alt="user"/></a>
                                  </div>
                                  <div><a href="javascript:;" className="text-secondary" data-toggle="modal" data-target="#psetting"><i className="fa fa-cog"></i></a></div>
                                </div>
                                <h6 className="py-2"><a href="#" className="text-secondary fw-600">Admin</a></h6>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="form-group mb-0">
                                          <label>Screenshot Interval</label>
                                          <select className="form-control">
                                              <option value="">Random</option>
                                              <option value="1">1 Min</option>
                                              <option value="2">2 Min</option>
                                              <option value="3">3 Min</option>
                                              <option value="4">4 Min</option>
                                              <option value="5">5 Min</option>
                                              <option value="6">6 Min</option>
                                              <option value="7">7 Min</option>
                                              <option value="8">8 Min</option>
                                              <option value="9">9 Min</option>
                                              <option selected="" value="10">10 Min</option>
                                              <option value="11">11 Min</option>
                                              <option value="12">12 Min</option>
                                              <option value="13">13 Min</option>
                                              <option value="14">14 Min</option>
                                              <option value="15">15 Min</option>
                                              <option value="16">16 Min</option>
                                              <option value="17">17 Min</option>
                                              <option value="18">18 Min</option>
                                              <option value="19">19 Min</option>
                                              <option value="20">20 Min</option>
                                              <option value="21">21 Min</option>
                                              <option value="22">22 Min</option>
                                              <option value="23">23 Min</option>
                                              <option value="24">24 Min</option>
                                              <option value="25">25 Min</option>
                                              <option value="26">26 Min</option>
                                              <option value="27">27 Min</option>
                                              <option value="28">28 Min</option>
                                              <option value="29">29 Min</option>
                                              <option value="30">30 Min</option>
                                          </select>
                                      </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group mb-0">
                                          <label>Show Notification</label>
                                          <select className="form-control">
                                              <option value="0">Disable</option>
                                              <option selected="" value="1">Enable</option>	
                                          </select>
                                      </div>
                                    </div>
                                </div>
                          </div>
                      </div>
                  </div>

                  <div className="col-12 col-md-3">
                      <div className="card border shadow-none">
                          <div className="card-body p-3 text-secondary">
                              <div className="d-flex justify-content-between align-items-center">
                                  <div>
                                      <a href="javascript:;"><img className="rounded-circle" src="http://podjinn.maxxmanncommunications.com/public/uploads/users/2018-06-04-06-04-19-popular-hairstyles-for-men.jpg" width="36" height="36" alt="user"/></a>
                                  </div>
                                  <div><a href="javascript:;" className="text-secondary" data-toggle="modal" data-target="#psetting"><i className="fa fa-cog"></i></a></div>
                                </div>
                                <h6 className="py-2"><a href="#" className="text-secondary fw-600">Admin</a></h6>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="form-group mb-0">
                                          <label>Screenshot Interval</label>
                                          <select className="form-control">
                                              <option value="">Random</option>
                                              <option value="1">1 Min</option>
                                              <option value="2">2 Min</option>
                                              <option value="3">3 Min</option>
                                              <option value="4">4 Min</option>
                                              <option value="5">5 Min</option>
                                              <option value="6">6 Min</option>
                                              <option value="7">7 Min</option>
                                              <option value="8">8 Min</option>
                                              <option value="9">9 Min</option>
                                              <option selected="" value="10">10 Min</option>
                                              <option value="11">11 Min</option>
                                              <option value="12">12 Min</option>
                                              <option value="13">13 Min</option>
                                              <option value="14">14 Min</option>
                                              <option value="15">15 Min</option>
                                              <option value="16">16 Min</option>
                                              <option value="17">17 Min</option>
                                              <option value="18">18 Min</option>
                                              <option value="19">19 Min</option>
                                              <option value="20">20 Min</option>
                                              <option value="21">21 Min</option>
                                              <option value="22">22 Min</option>
                                              <option value="23">23 Min</option>
                                              <option value="24">24 Min</option>
                                              <option value="25">25 Min</option>
                                              <option value="26">26 Min</option>
                                              <option value="27">27 Min</option>
                                              <option value="28">28 Min</option>
                                              <option value="29">29 Min</option>
                                              <option value="30">30 Min</option>
                                          </select>
                                      </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group mb-0">
                                          <label>Show Notification</label>
                                          <select className="form-control">
                                              <option value="0">Disable</option>
                                              <option selected="" value="1">Enable</option>	
                                          </select>
                                      </div>
                                    </div>
                                </div>
                          </div>
                      </div>
                  </div>

                  <div className="col-12 col-md-3">
                      <div className="card border shadow-none">
                          <div className="card-body p-3 text-secondary">
                              <div className="d-flex justify-content-between align-items-center">
                                  <div>
                                      <a href="javascript:;"><img className="rounded-circle" src="http://podjinn.maxxmanncommunications.com/public/uploads/users/2018-06-04-06-04-19-popular-hairstyles-for-men.jpg" width="36" height="36" alt="user"/></a>
                                  </div>
                                  <div><a href="javascript:;" className="text-secondary" data-toggle="modal" data-target="#psetting"><i className="fa fa-cog"></i></a></div>
                                </div>
                                <h6 className="py-2"><a href="#" className="text-secondary fw-600">Admin</a></h6>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="form-group mb-0">
                                          <label>Screenshot Interval</label>
                                          <select className="form-control">
                                              <option value="">Random</option>
                                              <option value="1">1 Min</option>
                                              <option value="2">2 Min</option>
                                              <option value="3">3 Min</option>
                                              <option value="4">4 Min</option>
                                              <option value="5">5 Min</option>
                                              <option value="6">6 Min</option>
                                              <option value="7">7 Min</option>
                                              <option value="8">8 Min</option>
                                              <option value="9">9 Min</option>
                                              <option selected="" value="10">10 Min</option>
                                              <option value="11">11 Min</option>
                                              <option value="12">12 Min</option>
                                              <option value="13">13 Min</option>
                                              <option value="14">14 Min</option>
                                              <option value="15">15 Min</option>
                                              <option value="16">16 Min</option>
                                              <option value="17">17 Min</option>
                                              <option value="18">18 Min</option>
                                              <option value="19">19 Min</option>
                                              <option value="20">20 Min</option>
                                              <option value="21">21 Min</option>
                                              <option value="22">22 Min</option>
                                              <option value="23">23 Min</option>
                                              <option value="24">24 Min</option>
                                              <option value="25">25 Min</option>
                                              <option value="26">26 Min</option>
                                              <option value="27">27 Min</option>
                                              <option value="28">28 Min</option>
                                              <option value="29">29 Min</option>
                                              <option value="30">30 Min</option>
                                          </select>
                                      </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group mb-0">
                                          <label>Show Notification</label>
                                          <select className="form-control">
                                              <option value="0">Disable</option>
                                              <option selected="" value="1">Enable</option>	
                                          </select>
                                      </div>
                                    </div>
                                </div>
                          </div>
                      </div>
                  </div>

                  <div className="col-12 col-md-3">
                      <div className="card border shadow-none">
                          <div className="card-body p-3 text-secondary">
                              <div className="d-flex justify-content-between align-items-center">
                                  <div>
                                      <a href="javascript:;"><img className="rounded-circle" src="http://podjinn.maxxmanncommunications.com/public/uploads/users/2018-06-04-06-04-19-popular-hairstyles-for-men.jpg" width="36" height="36" alt="user"/></a>
                                  </div>
                                  <div><a href="javascript:;" className="text-secondary" data-toggle="modal" data-target="#psetting"><i className="fa fa-cog"></i></a></div>
                                </div>
                                <h6 className="py-2"><a href="#" className="text-secondary fw-600">Admin</a></h6>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="form-group mb-0">
                                          <label>Screenshot Interval</label>
                                          <select className="form-control">
                                              <option value="">Random</option>
                                              <option value="1">1 Min</option>
                                              <option value="2">2 Min</option>
                                              <option value="3">3 Min</option>
                                              <option value="4">4 Min</option>
                                              <option value="5">5 Min</option>
                                              <option value="6">6 Min</option>
                                              <option value="7">7 Min</option>
                                              <option value="8">8 Min</option>
                                              <option value="9">9 Min</option>
                                              <option selected="" value="10">10 Min</option>
                                              <option value="11">11 Min</option>
                                              <option value="12">12 Min</option>
                                              <option value="13">13 Min</option>
                                              <option value="14">14 Min</option>
                                              <option value="15">15 Min</option>
                                              <option value="16">16 Min</option>
                                              <option value="17">17 Min</option>
                                              <option value="18">18 Min</option>
                                              <option value="19">19 Min</option>
                                              <option value="20">20 Min</option>
                                              <option value="21">21 Min</option>
                                              <option value="22">22 Min</option>
                                              <option value="23">23 Min</option>
                                              <option value="24">24 Min</option>
                                              <option value="25">25 Min</option>
                                              <option value="26">26 Min</option>
                                              <option value="27">27 Min</option>
                                              <option value="28">28 Min</option>
                                              <option value="29">29 Min</option>
                                              <option value="30">30 Min</option>
                                          </select>
                                      </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group mb-0">
                                          <label>Show Notification</label>
                                          <select className="form-control">
                                              <option value="0">Disable</option>
                                              <option selected="" value="1">Enable</option>	
                                          </select>
                                      </div>
                                    </div>
                                </div>
                          </div>
                      </div>
                  </div>

                  <div className="col-12 col-md-3">
                      <div className="card border shadow-none">
                          <div className="card-body p-3 text-secondary">
                              <div className="d-flex justify-content-between align-items-center">
                                  <div>
                                      <a href="javascript:;"><img className="rounded-circle" src="http://podjinn.maxxmanncommunications.com/public/uploads/users/2018-06-04-06-04-19-popular-hairstyles-for-men.jpg" width="36" height="36" alt="user"/></a>
                                  </div>
                                  <div><a href="javascript:;" className="text-secondary" data-toggle="modal" data-target="#psetting"><i className="fa fa-cog"></i></a></div>
                                </div>
                                <h6 className="py-2"><a href="#" className="text-secondary fw-600">Admin</a></h6>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="form-group mb-0">
                                          <label>Screenshot Interval</label>
                                          <select className="form-control">
                                              <option value="">Random</option>
                                              <option value="1">1 Min</option>
                                              <option value="2">2 Min</option>
                                              <option value="3">3 Min</option>
                                              <option value="4">4 Min</option>
                                              <option value="5">5 Min</option>
                                              <option value="6">6 Min</option>
                                              <option value="7">7 Min</option>
                                              <option value="8">8 Min</option>
                                              <option value="9">9 Min</option>
                                              <option selected="" value="10">10 Min</option>
                                              <option value="11">11 Min</option>
                                              <option value="12">12 Min</option>
                                              <option value="13">13 Min</option>
                                              <option value="14">14 Min</option>
                                              <option value="15">15 Min</option>
                                              <option value="16">16 Min</option>
                                              <option value="17">17 Min</option>
                                              <option value="18">18 Min</option>
                                              <option value="19">19 Min</option>
                                              <option value="20">20 Min</option>
                                              <option value="21">21 Min</option>
                                              <option value="22">22 Min</option>
                                              <option value="23">23 Min</option>
                                              <option value="24">24 Min</option>
                                              <option value="25">25 Min</option>
                                              <option value="26">26 Min</option>
                                              <option value="27">27 Min</option>
                                              <option value="28">28 Min</option>
                                              <option value="29">29 Min</option>
                                              <option value="30">30 Min</option>
                                          </select>
                                      </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group mb-0">
                                          <label>Show Notification</label>
                                          <select className="form-control">
                                              <option value="0">Disable</option>
                                              <option selected="" value="1">Enable</option>	
                                          </select>
                                      </div>
                                    </div>
                                </div>
                          </div>
                      </div>
                  </div>

                  <div className="col-12 col-md-3">
                      <div className="card border shadow-none">
                          <div className="card-body p-3 text-secondary">
                              <div className="d-flex justify-content-between align-items-center">
                                  <div>
                                      <a href="javascript:;"><img className="rounded-circle" src="http://podjinn.maxxmanncommunications.com/public/uploads/users/2018-06-04-06-04-19-popular-hairstyles-for-men.jpg" width="36" height="36" alt="user"/></a>
                                  </div>
                                  <div><a href="javascript:;" className="text-secondary" data-toggle="modal" data-target="#psetting"><i className="fa fa-cog"></i></a></div>
                                </div>
                                <h6 className="py-2"><a href="#" className="text-secondary fw-600">Admin</a></h6>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="form-group mb-0">
                                          <label>Screenshot Interval</label>
                                          <select className="form-control">
                                              <option value="">Random</option>
                                              <option value="1">1 Min</option>
                                              <option value="2">2 Min</option>
                                              <option value="3">3 Min</option>
                                              <option value="4">4 Min</option>
                                              <option value="5">5 Min</option>
                                              <option value="6">6 Min</option>
                                              <option value="7">7 Min</option>
                                              <option value="8">8 Min</option>
                                              <option value="9">9 Min</option>
                                              <option selected="" value="10">10 Min</option>
                                              <option value="11">11 Min</option>
                                              <option value="12">12 Min</option>
                                              <option value="13">13 Min</option>
                                              <option value="14">14 Min</option>
                                              <option value="15">15 Min</option>
                                              <option value="16">16 Min</option>
                                              <option value="17">17 Min</option>
                                              <option value="18">18 Min</option>
                                              <option value="19">19 Min</option>
                                              <option value="20">20 Min</option>
                                              <option value="21">21 Min</option>
                                              <option value="22">22 Min</option>
                                              <option value="23">23 Min</option>
                                              <option value="24">24 Min</option>
                                              <option value="25">25 Min</option>
                                              <option value="26">26 Min</option>
                                              <option value="27">27 Min</option>
                                              <option value="28">28 Min</option>
                                              <option value="29">29 Min</option>
                                              <option value="30">30 Min</option>
                                          </select>
                                      </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group mb-0">
                                          <label>Show Notification</label>
                                          <select className="form-control">
                                              <option value="0">Disable</option>
                                              <option selected="" value="1">Enable</option>	
                                          </select>
                                      </div>
                                    </div>
                                </div>
                          </div>
                      </div>
                  </div>

                  <div className="col-12 col-md-3">
                      <div className="card border shadow-none">
                          <div className="card-body p-3 text-secondary">
                              <div className="d-flex justify-content-between align-items-center">
                                  <div>
                                      <a href="javascript:;"><img className="rounded-circle" src="http://podjinn.maxxmanncommunications.com/public/uploads/users/2018-06-04-06-04-19-popular-hairstyles-for-men.jpg" width="36" height="36" alt="user"/></a>
                                  </div>
                                  <div><a href="javascript:;" className="text-secondary" data-toggle="modal" data-target="#psetting"><i className="fa fa-cog"></i></a></div>
                                </div>
                                <h6 className="py-2"><a href="#" className="text-secondary fw-600">Admin</a></h6>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="form-group mb-0">
                                          <label>Screenshot Interval</label>
                                          <select className="form-control">
                                              <option value="">Random</option>
                                              <option value="1">1 Min</option>
                                              <option value="2">2 Min</option>
                                              <option value="3">3 Min</option>
                                              <option value="4">4 Min</option>
                                              <option value="5">5 Min</option>
                                              <option value="6">6 Min</option>
                                              <option value="7">7 Min</option>
                                              <option value="8">8 Min</option>
                                              <option value="9">9 Min</option>
                                              <option selected="" value="10">10 Min</option>
                                              <option value="11">11 Min</option>
                                              <option value="12">12 Min</option>
                                              <option value="13">13 Min</option>
                                              <option value="14">14 Min</option>
                                              <option value="15">15 Min</option>
                                              <option value="16">16 Min</option>
                                              <option value="17">17 Min</option>
                                              <option value="18">18 Min</option>
                                              <option value="19">19 Min</option>
                                              <option value="20">20 Min</option>
                                              <option value="21">21 Min</option>
                                              <option value="22">22 Min</option>
                                              <option value="23">23 Min</option>
                                              <option value="24">24 Min</option>
                                              <option value="25">25 Min</option>
                                              <option value="26">26 Min</option>
                                              <option value="27">27 Min</option>
                                              <option value="28">28 Min</option>
                                              <option value="29">29 Min</option>
                                              <option value="30">30 Min</option>
                                          </select>
                                      </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group mb-0">
                                          <label>Show Notification</label>
                                          <select className="form-control">
                                              <option value="0">Disable</option>
                                              <option selected="" value="1">Enable</option>	
                                          </select>
                                      </div>
                                    </div>
                                </div>
                          </div>
                      </div>
                  </div>

                  <div className="col-12 col-md-3">
                      <div className="card border shadow-none">
                          <div className="card-body p-3 text-secondary">
                              <div className="d-flex justify-content-between align-items-center">
                                  <div>
                                      <a href="javascript:;"><img className="rounded-circle" src="http://podjinn.maxxmanncommunications.com/public/uploads/users/2018-06-04-06-04-19-popular-hairstyles-for-men.jpg" width="36" height="36" alt="user"/></a>
                                  </div>
                                  <div><a href="javascript:;" className="text-secondary" data-toggle="modal" data-target="#psetting"><i className="fa fa-cog"></i></a></div>
                                </div>
                                <h6 className="py-2"><a href="#" className="text-secondary fw-600">Admin</a></h6>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="form-group mb-0">
                                          <label>Screenshot Interval</label>
                                          <select className="form-control">
                                              <option value="">Random</option>
                                              <option value="1">1 Min</option>
                                              <option value="2">2 Min</option>
                                              <option value="3">3 Min</option>
                                              <option value="4">4 Min</option>
                                              <option value="5">5 Min</option>
                                              <option value="6">6 Min</option>
                                              <option value="7">7 Min</option>
                                              <option value="8">8 Min</option>
                                              <option value="9">9 Min</option>
                                              <option selected="" value="10">10 Min</option>
                                              <option value="11">11 Min</option>
                                              <option value="12">12 Min</option>
                                              <option value="13">13 Min</option>
                                              <option value="14">14 Min</option>
                                              <option value="15">15 Min</option>
                                              <option value="16">16 Min</option>
                                              <option value="17">17 Min</option>
                                              <option value="18">18 Min</option>
                                              <option value="19">19 Min</option>
                                              <option value="20">20 Min</option>
                                              <option value="21">21 Min</option>
                                              <option value="22">22 Min</option>
                                              <option value="23">23 Min</option>
                                              <option value="24">24 Min</option>
                                              <option value="25">25 Min</option>
                                              <option value="26">26 Min</option>
                                              <option value="27">27 Min</option>
                                              <option value="28">28 Min</option>
                                              <option value="29">29 Min</option>
                                              <option value="30">30 Min</option>
                                          </select>
                                      </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group mb-0">
                                          <label>Show Notification</label>
                                          <select className="form-control">
                                              <option value="0">Disable</option>
                                              <option selected="" value="1">Enable</option>	
                                          </select>
                                      </div>
                                    </div>
                                </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="text-center">
                  <button type="submit" className="btn btn-primary btn-submit">Submit</button>
              </div>

            </form>
        </div>
    </div>
    <div className="tab-pane fade" id="trackerNotifications" role="tabpanel" aria-labelledby="trackerNotifications-tab">
        <div className="p-4 text-secondary">
            <form>
            <div className="form-group">
              <label>Screenshot Capture notification</label>
              <textarea className="form-control" rows="3">Screenshot Capture successfully</textarea>
            </div>
            <div className="form-group">
              <label>Idle Time notification</label>
              <textarea className="form-control" rows="3">idle message</textarea>
            </div>
            <div className="form-group">
              <label>Idle Interval</label>
              <select className="form-control">
                  <option value="">Random</option>
                  <option value="1">1 Min</option>
                  <option value="2">2 Min</option>
                  <option value="3">3 Min</option>
                  <option value="4">4 Min</option>
                  <option value="5">5 Min</option>
                  <option value="6">6 Min</option>
                  <option value="7">7 Min</option>
                  <option value="8">8 Min</option>
                  <option value="9">9 Min</option>
                  <option selected="" value="10">10 Min</option>
                  <option value="11">11 Min</option>
                  <option value="12">12 Min</option>
                  <option value="13">13 Min</option>
                  <option value="14">14 Min</option>
                  <option value="15">15 Min</option>
                  <option value="16">16 Min</option>
                  <option value="17">17 Min</option>
                  <option value="18">18 Min</option>
                  <option value="19">19 Min</option>
                  <option value="20">20 Min</option>
                  <option value="21">21 Min</option>
                  <option value="22">22 Min</option>
                  <option value="23">23 Min</option>
                  <option value="24">24 Min</option>
                  <option value="25">25 Min</option>
                  <option value="26">26 Min</option>
                  <option value="27">27 Min</option>
                  <option value="28">28 Min</option>
                  <option value="29">29 Min</option>
                  <option value="30">30 Min</option>
              </select>
            </div>
            <div className="form-group">
              <label>Show Notification</label>
              <select className="form-control">
                  <option value="0">Disable</option>
                  <option selected="" value="1">Enable</option>	
              </select>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary btn-submit">Submit</button>
            </div>
          </form>
      </div>
    </div>

    <div className="tab-pane fade" id="systemInfo" role="tabpanel" aria-labelledby="systemInfo-tab">
      <div className="p-4">
          <form action="">
              <div className="form-row pb-2">
                  <div className="form-group col-12 col-md-4">
                      <label className="text-secondary">User</label>
                      <select className="form-control">
                          <option value="">- Select -</option>
                          <option value="">Ashok Kushwaha</option>
                          <option value="">Ravinder Kumar</option>
                          <option value="">Devesh Sharma</option>
                          <option value="">Surekha Nagpal</option>
                          <option value="">Upendra Chaurasiya</option>
                      </select>
                  </div>
              </div>
          </form>

          <div id="system-info_tab">
          <div className="row border">
            <div className="col-3 px-0 bg-light">
              <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a className="nav-link active rounded-0" id="vert-tabs-1-tab" data-toggle="pill" href="#vert-tabs-1" role="tab" aria-controls="vert-tabs-1" aria-selected="true">System Information</a>
                <a className="nav-link rounded-0" id="vert-tabs-2-tab" data-toggle="pill" href="#vert-tabs-2" role="tab" aria-controls="vert-tabs-2" aria-selected="false">Disk Info &amp; Performance</a>
                <a className="nav-link rounded-0" id="vert-tabs-3-tab" data-toggle="pill" href="#vert-tabs-3" role="tab" aria-controls="vert-tabs-3" aria-selected="false">Memory Information</a>
                <a className="nav-link rounded-0" id="vert-tabs-4-tab" data-toggle="pill" href="#vert-tabs-4" role="tab" aria-controls="vert-tabs-4" aria-selected="false">System Processes and Services</a>
                <a className="nav-link rounded-0" id="vert-tabs-5-tab" data-toggle="pill" href="#vert-tabs-5" role="tab" aria-controls="vert-tabs-5" aria-selected="false">Networking Information</a>
                <a className="nav-link rounded-0" id="vert-tabs-6-tab" data-toggle="pill" href="#vert-tabs-6" role="tab" aria-controls="vert-tabs-6" aria-selected="false">Event Logs Report</a>
                <a className="nav-link rounded-0" id="vert-tabs-7-tab" data-toggle="pill" href="#vert-tabs-7" role="tab" aria-controls="vert-tabs-7" aria-selected="false">Software Information</a>
                <a className="nav-link rounded-0" id="vert-tabs-8-tab" data-toggle="pill" href="#vert-tabs-8" role="tab" aria-controls="vert-tabs-8" aria-selected="false">Location</a>
                <a className="nav-link rounded-0" id="vert-tabs-9-tab" data-toggle="pill" href="#vert-tabs-9" role="tab" aria-controls="vert-tabs-9" aria-selected="false">Data Usage</a>
              </div>
            </div>
            <div className="col-9">
              <div className="tab-content" id="v-pills-tabContent">
                
                <div className="tab-pane text-left fade show active" id="vert-tabs-1" role="tabpanel" aria-labelledby="vert-tabs-1-tab">
                  <div className="p-y-10">
                      <ul className="list-group list-group-flush">
                          <li className="list-group-item border-0"><strong>System Uptime:</strong> Output</li>
                          <li className="list-group-item border-0"><strong>System Manufacturer:</strong> Output</li>
                          <li className="list-group-item border-0"><strong>System Model:</strong> Output</li>
                          <li className="list-group-item border-0"><strong>OS:</strong> Output</li>
                          <li className="list-group-item border-0"><strong>CPU Name and Bit-ness:</strong> Output</li>
                          <li className="list-group-item border-0"><strong>CPU Cores (Physical &amp; Logical):</strong> Output</li>
                          <li className="list-group-item border-0"><strong>CPU Usage %:</strong> Output</li>
                          <li className="list-group-item border-0"><strong>Total RAM:</strong> Output</li>
                          <li className="list-group-item border-0"><strong>Free RAM:</strong> Output</li>
                          <li className="list-group-item border-0"><strong>Percent Free RAM:</strong> Output</li>
                          <li className="list-group-item border-0"><strong>Power Plan (and advises High performance if it's not set):</strong> Output</li>
                      </ul>
                  </div>
                </div>
                <div className="tab-pane fade" id="vert-tabs-2" role="tabpanel" aria-labelledby="vert-tabs-2-tab">
                  <div className="p-y-10">
                      <ul className="list-group list-group-flush">
                          <li className="list-group-item border-0"><strong>Model:</strong> Output</li>
                          <li className="list-group-item border-0"><strong>DeviceID:</strong> Output</li>
                          <li className="list-group-item border-0"><strong>Size (GB):</strong> Output</li>
                          <li className="list-group-item border-0"><strong>AvgDiskQueueLength:</strong> Output</li>
                          <li className="list-group-item border-0"><strong>% Idle Time:</strong> Output</li>
                          <li className="list-group-item border-0"><strong>% Write Time:</strong> Output</li>
                          <li className="list-group-item border-0"><strong>% Read Time:</strong> Output</li>
                          <li className="list-group-item border-0"><strong>Write IOPS:</strong> Output</li>
                          <li className="list-group-item border-0"><strong>Read IOPS:</strong> Output</li>
                      </ul>
                  </div>
                </div>
                <div className="tab-pane fade" id="vert-tabs-3" role="tabpanel" aria-labelledby="vert-tabs-3-tab">
                  <div className="p-y-10">
                      <ul className="list-group list-group-flush">
                          <li className="list-group-item border-0"><strong>Memory Modules:</strong> Output</li>
                          <li className="list-group-item border-0"><strong>Module Slot Name:</strong> Output</li>
                          <li className="list-group-item border-0"><strong>Module Mfr:</strong> Output</li>
                          <li className="list-group-item border-0"><strong>Module Part #:</strong> Output</li>
                          <li className="list-group-item border-0"><strong>Module Serial #:</strong> Output</li>
                          <li className="list-group-item border-0"><strong>Data Width:</strong> Output</li>
                          <li className="list-group-item border-0"><strong>Form Factor:</strong> Output</li>
                          <li className="list-group-item border-0"><strong>Type (Sometimes works... dependent on machine BIOS info made avilable to WMI:</strong> Output</li>
                          <li className="list-group-item border-0"><strong>Module Capacity:</strong> Output</li>
                          <li className="list-group-item border-0"><strong>Module Speed:</strong> Output</li>
                      </ul>
                  </div>
                </div>
                <div className="tab-pane fade" id="vert-tabs-4" role="tabpanel" aria-labelledby="vert-tabs-4-tab">
                  <div className="p-y-10">
                      <ul className="list-group list-group-flush">
                          <li className="list-group-item border-0"><strong>System Processes - Top 10 Highest Memory Usage:</strong> Output</li>
                          <li className="list-group-item border-0"><strong>System Services - Stopped:</strong> Output</li>
                          <li className="list-group-item border-0"><strong>Startup Entries:</strong> Output</li>
                          <li className="list-group-item border-0"><strong>Environment Variables:</strong> Output</li>
                          <li className="list-group-item border-0"><strong>Non-Windows Services:</strong> Output</li>
                          <li className="list-group-item border-0"><strong>Non-Standard Service Accounts:</strong> Output</li>
                          <li className="list-group-item border-0"><strong>3rd party Scheduled Tasks:</strong> Output</li>
                      </ul>
                  </div>
                </div>
                <div className="tab-pane fade" id="vert-tabs-5" role="tabpanel" aria-labelledby="vert-tabs-5-tab">
                  <div className="p-y-10">
                      <ul className="list-group list-group-flush">
                          <li className="list-group-item border-0"><h5 className="mb-5 border-bottom pb-2">Active NICs</h5>
                              <ul className="list-group list-group-flush">
                                  <li className="list-group-item border-0"><strong>Hostname:</strong> Output</li>
                                  <li className="list-group-item border-0"><strong>Hostname:</strong> Output</li>
                                  <li className="list-group-item border-0"><strong>NIC Name:</strong> Output</li>
                                  <li className="list-group-item border-0"><strong>Network:</strong> Output</li>
                                  <li className="list-group-item border-0"><strong>Link Speed:</strong> Output</li>
                                  <li className="list-group-item border-0"><strong>Up Time:</strong> Output</li>
                                  <li className="list-group-item border-0"><strong>MAC Address:</strong> Output</li>
                                  <li className="list-group-item border-0"><strong>MAC Address:</strong> Output</li>
                                  <li className="list-group-item border-0"><strong>IP Address:</strong> Output</li>
                                  <li className="list-group-item border-0"><strong>DHCP Server:</strong> Output</li>
                                  <li className="list-group-item border-0"><strong>Subnet Mask:</strong> Output</li>
                                  <li className="list-group-item border-0"><strong>Default Gateway:</strong> Output</li>
                                  <li className="list-group-item border-0"><strong>DNS Suffix:</strong> Output</li>
                                  <li className="list-group-item border-0"><strong>DNS Servers:</strong> Output</li>
                              </ul>
                          </li>
                          <li className="list-group-item border-0"><h5 className="mb-5 border-bottom pb-2">Route Tables</h5>
                          </li>
                      </ul>
                  </div>
                </div>

                <div className="tab-pane fade" id="vert-tabs-6" role="tabpanel" aria-labelledby="vert-tabs-6-tab">
                  <div className="p-y-10">
                      <ul className="list-group list-group-flush">
                          <li className="list-group-item border-0"><h5 className="mb-5 border-bottom pb-2">Event type of either Warning, Error, or Critical within 24 hrs.</h5>
                              <ul className="list-group list-group-flush">
                                  <li className="list-group-item border-0"></li>
                                  
                              </ul>
                          </li>
                          
                      </ul>
                  </div>
                </div>

                <div className="tab-pane fade" id="vert-tabs-7" role="tabpanel" aria-labelledby="vert-tabs-7-tab">
                  <div className="p-y-10">
                      <ul className="list-group list-group-flush">
                          <li className="list-group-item border-0"><strong>Installed Programs:</strong> Output</li>
                          <li className="list-group-item border-0"><strong>Installed .NET Version:</strong> Output</li>
                          <li className="list-group-item border-0"><strong>Installed Updates:</strong> Output</li>
                          <li className="list-group-item border-0"><strong>Loaded Windows Kernel Drivers - 3rd Party:</strong> Output</li>
                      </ul>
                  </div>
                </div>

                <div className="tab-pane fade" id="vert-tabs-8" role="tabpanel" aria-labelledby="vert-tabs-8-tab">
                  <div className="p-y-10">
                      <ul className="list-group list-group-flush">
                          <li className="list-group-item border-0"><h5 className="mb-5 border-bottom pb-2">Track History</h5>
                              <ul className="list-group list-group-flush">
                                  <li className="list-group-item border-0"></li>
                                  
                              </ul>
                          </li>
                          
                      </ul>
                  </div>
                </div>

                <div className="tab-pane fade" id="vert-tabs-9" role="tabpanel" aria-labelledby="vert-tabs-9-tab">
                    <div className="p-y-10">
                       <ul className="list-group list-group-flush">
                           <li className="list-group-item border-0"><h5 className="mb-5 border-bottom pb-2">General</h5>
                              <div className="pt-15">
                                  <div id="reportrange" style={{background: "#fff", cursor: "pointer", padding: "5px 10px", border: "1px solid #ccc", width: "250px"}}>
                                      <i className="fa fa-calendar"></i>&nbsp;
                                      <span>December 1, 2023 - December 1, 2023</span> <i className="fa fa-caret-down"></i>
                                  </div>
                                   <ul className="list-group list-group-flush pt-5">
                                      <li className="list-group-item border-0"><strong>Received:</strong> 1.54 GB</li>
                                      <li className="list-group-item border-0"><strong>Sent:</strong> 70.9 MB</li>
                                      <li className="list-group-item border-0"><strong>Total:</strong> 1.61 GB</li>
                                  </ul>
                              </div>
                           </li>

                           <li className="list-group list-group-flush">
                               </li><li className="list-group-item border-0 pt-20">
                                  <h5 className="mb-5 border-bottom pb-2">Per Day</h5>
                                  <div className="pt-15">
                                     <div id="dataTable_1_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer"><div className="row"><div className="col-sm-12 col-md-6"><div className="dataTables_length" id="dataTable_1_length"><label>Show <select name="dataTable_1_length" aria-controls="dataTable_1" className="custom-select custom-select-sm form-control form-control-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label></div></div><div className="col-sm-12 col-md-6"><div id="dataTable_1_filter" className="dataTables_filter"><label>Search:<input type="search" className="form-control form-control-sm" placeholder="" aria-controls="dataTable_1"/></label></div></div></div><div className="row"><div className="col-sm-12"><table id="dataTable_1" className="table table-bordered mb-0 dataTable no-footer" style={{width: "0px"}} role="grid" aria-describedby="dataTable_1_info">
                                      <thead>
                                          <tr role="row"><th className="sorting_asc" tabindex="0" aria-controls="dataTable_1" rowspan="1" colspan="1" aria-sort="ascending" aria-label="S.No: activate to sort column descending" style={{width: "0px"}}>S.No</th><th className="sorting" tabindex="0" aria-controls="dataTable_1" rowspan="1" colspan="1" aria-label="Date: activate to sort column ascending" style={{width: "0px"}}>Date</th><th className="sorting" tabindex="0" aria-controls="dataTable_1" rowspan="1" colspan="1" aria-label="Received: activate to sort column ascending" style={{width: "0px"}}>Received</th><th className="sorting" tabindex="0" aria-controls="dataTable_1" rowspan="1" colspan="1" aria-label="Sent: activate to sort column ascending" style={{width: "0px"}}>Sent</th><th className="sorting" tabindex="0" aria-controls="dataTable_1" rowspan="1" colspan="1" aria-label="Total: activate to sort column ascending"style={{width: "0px"}}>Total</th></tr>
                                          </thead>
                                          <tbody>
                                           
                                           
                                           
                                           
                                           
                                           
                                           
                                           
                                           
                                           
                                           
                                           
                                           
                                           
                                           
                                        <tr role="row" className="odd">
                                               <td className="sorting_1">1</td>
                                               <td>09-05-2021</td>
                                               <td>1.54 GB</td>
                                               <td>70.9 MB</td>
                                               <td>1.61 GB</td>
                                           </tr><tr role="row" className="even">
                                               <td className="sorting_1">2</td>
                                               <td>10-05-2021</td>
                                               <td>1.54 GB</td>
                                               <td>70.9 MB</td>
                                               <td>1.61 GB</td>
                                           </tr><tr role="row" className="odd">
                                               <td className="sorting_1">3</td>
                                               <td>11-05-2021</td>
                                               <td>1.54 GB</td>
                                               <td>70.9 MB</td>
                                               <td>1.61 GB</td>
                                           </tr><tr role="row" className="even">
                                               <td className="sorting_1">4</td>
                                               <td>12-05-2021</td>
                                               <td>1.54 GB</td>
                                               <td>70.9 MB</td>
                                               <td>1.61 GB</td>
                                           </tr><tr role="row" className="odd">
                                               <td className="sorting_1">5</td>
                                               <td>13-05-2021</td>
                                               <td>1.54 GB</td>
                                               <td>70.9 MB</td>
                                               <td>1.61 GB</td>
                                           </tr><tr role="row" className="even">
                                               <td className="sorting_1">6</td>
                                               <td>14-05-2021</td>
                                               <td>1.54 GB</td>
                                               <td>70.9 MB</td>
                                               <td>1.61 GB</td>
                                           </tr><tr role="row" className="odd">
                                               <td className="sorting_1">7</td>
                                               <td>15-05-2021</td>
                                               <td>1.54 GB</td>
                                               <td>70.9 MB</td>
                                               <td>1.61 GB</td>
                                           </tr><tr role="row" className="even">
                                               <td className="sorting_1">8</td>
                                               <td>16-05-2021</td>
                                               <td>1.54 GB</td>
                                               <td>70.9 MB</td>
                                               <td>1.61 GB</td>
                                           </tr><tr role="row" className="odd">
                                               <td className="sorting_1">9</td>
                                               <td>17-05-2021</td>
                                               <td>1.54 GB</td>
                                               <td>70.9 MB</td>
                                               <td>1.61 GB</td>
                                           </tr><tr role="row" className="even">
                                               <td className="sorting_1">10</td>
                                               <td>18-05-2021</td>
                                               <td>1.54 GB</td>
                                               <td>70.9 MB</td>
                                               <td>1.61 GB</td>
                                           </tr></tbody>
                                     </table></div></div><div className="row"><div className="col-sm-12 col-md-5"><div className="dataTables_info" id="dataTable_1_info" role="status" aria-live="polite">Showing 1 to 10 of 15 entries</div></div><div className="col-sm-12 col-md-7"><div className="dataTables_paginate paging_simple_numbers" id="dataTable_1_paginate"><ul className="pagination"><li className="paginate_button page-item previous disabled" id="dataTable_1_previous"><a href="#" aria-controls="dataTable_1" data-dt-idx="0" tabindex="0" className="page-link">Previous</a></li><li className="paginate_button page-item active"><a href="#" aria-controls="dataTable_1" data-dt-idx="1" tabindex="0" className="page-link">1</a></li><li className="paginate_button page-item "><a href="#" aria-controls="dataTable_1" data-dt-idx="2" tabindex="0" className="page-link">2</a></li><li className="paginate_button page-item next" id="dataTable_1_next"><a href="#" aria-controls="dataTable_1" data-dt-idx="3" tabindex="0" className="page-link">Next</a></li></ul></div></div></div></div> 
                                  </div>
                               </li>
                           


                           <li className="list-group list-group-flush">
                               </li><li className="list-group-item border-0 pt-20">
                                  <h5 className="mb-5 border-bottom pb-2">Per Week</h5>
                                  <div className="pt-15">
                                     
                                     <div id="dataTable_2_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer"><div className="row"><div className="col-sm-12 col-md-6"><div className="dataTables_length" id="dataTable_2_length"><label>Show <select name="dataTable_2_length" aria-controls="dataTable_2" className="custom-select custom-select-sm form-control form-control-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label></div></div><div className="col-sm-12 col-md-6"><div id="dataTable_2_filter" className="dataTables_filter"><label>Search:<input type="search" className="form-control form-control-sm" placeholder="" aria-controls="dataTable_2"/></label></div></div></div><div className="row"><div className="col-sm-12">
                                        
                                        <table id="dataTable_2" className="table table-bordered mb-0 dataTable no-footer" style={{width: "0px"}} role="grid" aria-describedby="dataTable_2_info">
                                            </table>
                                    
                                    <table>
                                      <thead>
                                          <tr role="row"><th className="sorting_asc" tabindex="0" aria-controls="dataTable_2" rowspan="1" colspan="1" aria-sort="ascending" aria-label="S.No: activate to sort column descending" style={{width: "0px"}}>S.No</th><th className="sorting" tabindex="0" aria-controls="dataTable_2" rowspan="1" colspan="1" aria-label="Date: activate to sort column ascending" style={{width: "0px"}} >Date</th><th className="sorting" tabindex="0" aria-controls="dataTable_2" rowspan="1" colspan="1" aria-label="Received: activate to sort column ascending" style={{width: "0px"}}>Received</th><th className="sorting" tabindex="0" aria-controls="dataTable_2" rowspan="1" colspan="1" aria-label="Sent: activate to sort column ascending"style={{width: "0px"}} >Sent</th><th className="sorting" tabindex="0" aria-controls="dataTable_2" rowspan="1" colspan="1" aria-label="Total: activate to sort column ascending" style={{width: "0px"}}>Total</th></tr>
                                          </thead>
                                          <tbody>
                                           
                                           
                                           
                                           
                                        <tr role="row" className="odd">
                                               <td className="sorting_1">1</td>
                                               <td>03-05-2021 - 09-05-2021</td>
                                               <td>1.54 GB</td>
                                               <td>70.9 MB</td>
                                               <td>1.61 GB</td>
                                           </tr><tr role="row" className="even">
                                               <td className="sorting_1">2</td>
                                               <td>10-05-2021 - 16-05-2021</td>
                                               <td>1.54 GB</td>
                                               <td>70.9 MB</td>
                                               <td>1.61 GB</td>
                                           </tr><tr role="row" className="odd">
                                               <td className="sorting_1">3</td>
                                               <td>17-05-2021 - 23-05-2021</td>
                                               <td>1.54 GB</td>
                                               <td>70.9 MB</td>
                                               <td>1.61 GB</td>
                                           </tr><tr role="row" className="even">
                                               <td className="sorting_1">4</td>
                                               <td>24-05-2021 - 30-05-2021</td>
                                               <td>1.54 GB</td>
                                               <td>70.9 MB</td>
                                               <td>1.61 GB</td>
                                           </tr></tbody>
                                     </table></div></div><div className="row"><div className="col-sm-12 col-md-5"><div className="dataTables_info" id="dataTable_2_info" role="status" aria-live="polite">Showing 1 to 4 of 4 entries</div></div><div className="col-sm-12 col-md-7"><div className="dataTables_paginate paging_simple_numbers" id="dataTable_2_paginate"><ul className="pagination"><li className="paginate_button page-item previous disabled" id="dataTable_2_previous"><a href="#" aria-controls="dataTable_2" data-dt-idx="0" tabindex="0" className="page-link">Previous</a></li><li className="paginate_button page-item active"><a href="#" aria-controls="dataTable_2" data-dt-idx="1" tabindex="0" className="page-link">1</a></li><li className="paginate_button page-item next disabled" id="dataTable_2_next"><a href="#" aria-controls="dataTable_2" data-dt-idx="2" tabindex="0" className="page-link">Next</a></li></ul></div></div></div></div> 
                                  </div>
                               </li>
                           


                           <li className="list-group list-group-flush">
                               </li><li className="list-group-item border-0 pt-20">
                                  <h5 className="mb-5 border-bottom pb-2">Per Month</h5>
                                  <div className="pt-15">
                                     <div id="dataTable_3_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer"><div className="row"><div className="col-sm-12 col-md-6"><div className="dataTables_length" id="dataTable_3_length"><label>Show <select name="dataTable_3_length" aria-controls="dataTable_3" className="custom-select custom-select-sm form-control form-control-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label></div></div><div className="col-sm-12 col-md-6"><div id="dataTable_3_filter" className="dataTables_filter"><label>Search:<input type="search" className="form-control form-control-sm" placeholder="" aria-controls="dataTable_3"/></label></div></div></div><div className="row"><div className="col-sm-12">
                                        
                                     
                                        <table id="dataTable_3" className="table table-bordered mb-0 dataTable no-footer" style={{width:"100%"}} role="grid" aria-describedby="dataTable_3_info">
                                      
                                      
                                      <thead>
                                          <tr role="row"><th className="sorting_asc" tabindex="0" aria-controls="dataTable_3" rowspan="1" colspan="1" aria-sort="ascending" aria-label="S.No: activate to sort column descending" style={{width: "0px"}}>S.No</th><th className="sorting" tabindex="0" aria-controls="dataTable_3" rowspan="1" colspan="1" aria-label="Date: activate to sort column ascending" style={{width: "0px"}}>Date</th><th className="sorting" tabindex="0" aria-controls="dataTable_3" rowspan="1" colspan="1" aria-label="Received: activate to sort column ascending" style={{width: "0px"}}>Received</th><th className="sorting" tabindex="0" aria-controls="dataTable_3" rowspan="1" colspan="1" aria-label="Sent: activate to sort column ascending" style={{width: "0px"}}>Sent</th><th className="sorting" tabindex="0" aria-controls="dataTable_3" rowspan="1" colspan="1" aria-label="Total: activate to sort column ascending" style={{width: "0px"}}>Total</th></tr>
                                          </thead>
                                          <tbody>
                                           
                                           
                                           
                                           
                                           
                                        <tr role="row" className="odd">
                                               <td className="sorting_1">1</td>
                                               <td>2021 January</td>
                                               <td>1.54 GB</td>
                                               <td>70.9 MB</td>
                                               <td>1.61 GB</td>
                                           </tr><tr role="row" className="even">
                                               <td className="sorting_1">2</td>
                                               <td>2021 February</td>
                                               <td>1.54 GB</td>
                                               <td>70.9 MB</td>
                                               <td>1.61 GB</td>
                                           </tr><tr role="row" className="odd">
                                               <td className="sorting_1">3</td>
                                               <td>2021 March</td>
                                               <td>1.54 GB</td>
                                               <td>70.9 MB</td>
                                               <td>1.61 GB</td>
                                           </tr><tr role="row" className="even">
                                               <td className="sorting_1">4</td>
                                               <td>2021 April</td>
                                               <td>1.54 GB</td>
                                               <td>70.9 MB</td>
                                               <td>1.61 GB</td>
                                           </tr><tr role="row" className="odd">
                                               <td className="sorting_1">5</td>
                                               <td>2021 May</td>
                                               <td>1.54 GB</td>
                                               <td>70.9 MB</td>
                                               <td>1.61 GB</td>
                                           </tr></tbody>
                                     </table>
                                     
                                     </div>
                                    
                                     </div>
                                     <div className="row"><div className="col-sm-12 col-md-5"><div className="dataTables_info" id="dataTable_3_info" role="status" aria-live="polite">Showing 1 to 5 of 5 entries</div></div><div className="col-sm-12 col-md-7"><div className="dataTables_paginate paging_simple_numbers" id="dataTable_3_paginate"><ul className="pagination"><li className="paginate_button page-item previous disabled" id="dataTable_3_previous"><a href="#" aria-controls="dataTable_3" data-dt-idx="0" tabindex="0" className="page-link">Previous</a></li><li className="paginate_button page-item active"><a href="#" aria-controls="dataTable_3" data-dt-idx="1" tabindex="0" className="page-link">1</a></li><li className="paginate_button page-item next disabled" id="dataTable_3_next"><a href="#" aria-controls="dataTable_3" data-dt-idx="2" tabindex="0" className="page-link">Next</a></li></ul></div></div></div></div> 
                                  </div>
                               </li>
                           


                       </ul> 
                    </div>
                </div>



              </div>
            </div>
          </div>
          </div>
        


      </div>

    </div>
  

  </div></div>
  )
}

export default UserSettings