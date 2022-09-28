<template>
<div class="col-md-4 d-flex">
              <div class="card punch-status flex-fill">
                <div class="card-body">
                  <h5 class="card-title">Timesheet</h5>

                  <div class="punch-finger">
                    <i class="fas fa-fingerprint"></i>
                    <div class="punch-det">
                      <h6>Punch In at</h6>
                      <p>Wed, 11th Mar 2019 10.00 AM</p>
                    </div>
                  </div>
                  
                  <div class="punch-info">
                    <div class="punch-hours">
                      <span>12:50</span>
                    </div>
                  </div>
                  <div class="punch-btn-section">
                    <span>Punch in</span>
                    <div class="onoffswitch">
                      <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="switch_annual" checked>
                      <label class="onoffswitch-label" for="switch_annual">
                        <span class="onoffswitch-inner"></span>
                        <span class="onoffswitch-switch"></span>
                      </label>
                    </div>
                    <span>Punch out</span>
                  </div>
                  <div class="statistics">
                    <ul>
                      <li>
                        <div class="stats-box">
                          <p>Break</p>
                          <h6>1.21 hrs</h6>
                        </div>
                      </li>
                      <li>
                        <div class="stats-box">
                          <p>Overtime</p>
                          <h6>3 hrs</h6>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
</template>