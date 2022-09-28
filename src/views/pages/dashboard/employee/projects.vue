<template>
<div class="row">
            <div class="col-md-12 col-lg-4 d-flex">
              <div class="card att-card flex-fill">
                <div class="card-header">
                  <h3><i class="fas fa-user-clock"></i> Attendance</h3>
                  <h4>10:40 AM  Jan 2 2021</h4>
                </div>
                <div class="card-body">
                  <form>
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Add a note">
                        <button class="btn btn-outline-secondary" type="button">Check in</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div class="col-md-12 col-lg-4 d-flex">
              <div class="card att-card flex-fill">
                <div class="card-header">
                  <h3><i class="fas fa-user-times"></i> Your Leave</h3>
                  <a href="#">Apply Leave</a>
                </div>
                <div class="card-body leave-ln">
                  <ul>
                    <li>
                      <h3>25</h3>
                      <h4>Total Leaves</h4>
                    </li>
                    <li>
                      <h3>5</h3>
                      <h4>Remaining Leaves</h4>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-md-12 col-lg-4 d-flex">
              <div class="card att-card flex-fill">
                <div class="card-header">
                  <h3><i class="fas fa-clock"></i> Time of allowance</h3>
                  <a href="#">Apply Time off</a>
                </div>
                <div class="card-body">
                  <ul>
                    <li>
                      <h3>5.0 Hours</h3>
                      <h4>APPROVED</h4>
                    </li>
                    <li>
                      <h3>3 hours</h3>
                      <h4>REMAINING</h4>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12 col-lg-12 col-xl-5 d-flex">
              <div class="card att-card flex-fill">
                <div class="card-header">
                  <h3><i class="fas fa-calendar-alt"></i> Schedule</h3>
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Today</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Tomorow</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="contact-tab" data-bs-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Next 7 Days</a>
                    </li>
                  </ul>
                    
                </div>
                <div class="card-body pt-0 pb-0">
                  <div class="tab-content p-0" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                      <ul class="leave-list">
                        <li>
                          <img src="../../../../assets/img/profiles/avatar-02.jpg" alt="User">
                          <p>Richard Miles is off sick today</p>
                        </li>
                        <li>
                          <img src="../../../../assets/img/profiles/avatar-02.jpg" alt="User">
                          <p>You are away today</p>
                        </li>
                        <li>
                          <img src="../../../../assets/img/profiles/avatar-02.jpg" alt="User">
                          <p>You are working from home today</p>
                        </li>
                        <li>
                          <img src="../../../../assets/img/profiles/avatar-02.jpg" alt="User">
                          <p>Richard Miles is off sick today</p>
                        </li>
                        <li>
                          <img src="../../../../assets/img/profiles/avatar-02.jpg" alt="User">
                          <p>You are away today</p>
                        </li>
                        <li>
                          <img src="../../../../assets/img/profiles/avatar-02.jpg" alt="User">
                          <p>You are working from home today</p>
                        </li>
                      </ul>
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                      <ul class="leave-list">
                        <li>
                          <img src="../../../../assets/img/profiles/avatar-03.jpg" alt="User">
                          <p>Richard Miles is off sick today</p>
                        </li>
                        <li>
                          <img src="../../../../assets/img/profiles/avatar-03.jpg" alt="User">
                          <p>You are away today</p>
                        </li>
                        <li>
                          <img src="../../../../assets/img/profiles/avatar-03.jpg" alt="User">
                          <p>You are working from home today</p>
                        </li>
                        <li>
                          <img src="../../../../assets/img/profiles/avatar-03.jpg" alt="User">
                          <p>Richard Miles is off sick today</p>
                        </li>
                        <li>
                          <img src="../../../../assets/img/profiles/avatar-03.jpg" alt="User">
                          <p>You are away today</p>
                        </li>
                        <li>
                          <img src="../../../../assets/img/profiles/avatar-03.jpg" alt="User">
                          <p>You are working from home today</p>
                        </li>
                      </ul>
                    </div>
                    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                      <ul class="leave-list">
                        <li>
                          <img src="../../../../assets/img/profiles/avatar-04.jpg" alt="User">
                          <p>Richard Miles is off sick today</p>
                        </li>
                        <li>
                          <img src="../../../../assets/img/profiles/avatar-04.jpg" alt="User">
                          <p>You are away today</p>
                        </li>
                        <li>
                          <img src="../../../../assets/img/profiles/avatar-04.jpg" alt="User">
                          <p>You are working from home today</p>
                        </li>
                        <li>
                          <img src="../../../../assets/img/profiles/avatar-04.jpg" alt="User">
                          <p>Richard Miles is off sick today</p>
                        </li>
                        <li>
                          <img src="../../../../assets/img/profiles/avatar-04.jpg" alt="User">
                          <p>You are away today</p>
                        </li>
                        <li>
                          <img src="../../../../assets/img/profiles/avatar-04.jpg" alt="User">
                          <p>You are working from home today</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-6 col-xl-3 d-flex">
              <div class="card att-card flex-fill">
                <div class="card-header">
                  <h3><i class="fas fa-birthday-cake"></i> Birthdays</h3>
                  <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="fas fa-ellipsis-v"></i>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </div>
                </div>
                <div class="card-body pt-0 pb-0">
                  <ul class="leave-list bday-list">
                    <li>
                      <div class="wish-info">
                        <img src="../../../../assets/img/profiles/avatar-04.jpg" alt="User">
                        <p>Joh Doe</p>
                      </div>
                      <a href="#" class="wish-btn">Wish Now</a>
                    </li>
                    <li>
                      <div class="wish-info">
                        <img src="../../../../assets/img/profiles/avatar-04.jpg" alt="User">
                        <p>Nick Harry</p>
                      </div>
                      <a href="#">Jan 20</a>
                    </li>
                    <li>
                      <div class="wish-info">
                        <img src="../../../../assets/img/profiles/avatar-04.jpg" alt="User">
                        <p>Juliene</p>
                      </div>
                      <a href="#">Jan 20</a>
                    </li>
                    <li>
                      <div class="wish-info">
                        <img src="../../../../assets/img/profiles/avatar-04.jpg" alt="User">
                        <p>Richard</p>
                      </div>
                      <a href="#">Jan 20</a>
                    </li>
                    <li>
                      <div class="wish-info">
                        <img src="../../../../assets/img/profiles/avatar-04.jpg" alt="User">
                        <p>Harry Len</p>
                      </div>
                      <a href="#">Jan 20</a>
                    </li>
                    <li>
                      <div class="wish-info">
                        <img src="../../../../assets/img/profiles/avatar-04.jpg" alt="User">
                        <p>Ken Druv</p>
                      </div>
                      <a href="#">Jan 20</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-6 col-xl-4 d-flex">
              <div class="card uh-card flex-fill">
                <div class="card att-card h-set-card">
                  <div class="card-header">
                    <h3><i class="fas fa-home"></i> Upcoming Holidays</h3>
                  </div>
                  <div class="card-body pt-0 pb-0">
                    <ul class="leave-list upcoming-list">
                      <li>
                        <div class="d-flex align-items-center">
                          <div class="circle">
                            <i class="far fa-image"></i>
                          </div>
                          <h3>DreamsHRMS</h3>
                        </div>
                        <h6>Jan 20</h6>
                      </li>
                      <li>
                        <div class="d-flex align-items-center">
                          <div class="circle">
                            <i class="far fa-image"></i>
                          </div>
                          <h3>DreamsHRMS</h3>
                        </div>
                        <h6>Jan 20</h6>
                      </li>
                      <li>
                        <div class="d-flex align-items-center">
                          <div class="circle">
                            <i class="far fa-image"></i>
                          </div>
                          <h3>DreamsHRMS</h3>
                        </div>
                        <h6>Jan 20</h6>
                      </li>
                      <li>
                        <div class="d-flex align-items-center">
                          <div class="circle">
                            <i class="far fa-image"></i>
                          </div>
                          <h3>DreamsHRMS</h3>
                        </div>
                        <h6>Jan 20</h6>
                      </li>
                      <li>
                        <div class="d-flex align-items-center">
                          <div class="circle">
                            <i class="far fa-image"></i>
                          </div>
                          <h3>DreamsHRMS</h3>
                        </div>
                        <h6>Jan 20</h6>
                      </li>
                      <li>
                        <div class="d-flex align-items-center">
                          <div class="circle">
                            <i class="far fa-image"></i>
                          </div>
                          <h3>DreamsHRMS</h3>
                        </div>
                        <h6>Jan 20</h6>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="btn-emp-sec">
                  <a href="#" class="btn-emp c1"><i class="far fa-folder-open"></i>
                    File Manager</a>
                  <a href="#" class="btn-emp c2"><i class="far fa-handshake"></i> Meetings</a>
                </div>
              </div>
              
            </div>
          </div>
</template>