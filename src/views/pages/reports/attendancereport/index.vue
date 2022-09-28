<template>
  <div class="attendancereports">
    <div class="main-wrapper">
       <main-header></main-header>
      <sidebar></sidebar>
       <!-- Page Wrapper -->
            <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
          
        <attendreportheader />

        <attendreportfilter />
        
        <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0 datatable" id="attendancereportjob">
                  <thead>
                    <tr>
                      <th>Employee</th>
                      <th>Date</th>
                      <th>Workday</th>
                      <th>Work</th>
                      <th>Late Arrival</th>
                      <th>Missing Work</th>
                      <th>Extra Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" src="../../../../assets/img/profiles/avatar-02.jpg"></router-link>
                          <router-link to="/profile">John Doe <span>Design</span></router-link>
                        </h2>
                      </td>
                      <td>20 Dec 2020</td>
                      <td>
                        <p class="mb-0">Morning Shift ( 8.0hrs )</p>
                        <i class="fa fa-arrow-right text-success"></i> 9.30am | <i class="fa fa-arrow-left text-danger"></i> 7.30pm
                      </td>
                      <td><button class="btn btn-outline-success btn-sm">09</button></td>
                      <td><button class="btn btn-outline-warning btn-sm">00</button></td>
                      <td><button class="btn btn-outline-danger btn-sm">00</button></td>
                      <td><button class="btn btn-outline-success btn-sm">01</button></td>
                      
                      
                    </tr>
                    <tr>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" src="../../../../assets/img/profiles/avatar-09.jpg"></router-link>
                          <router-link to="/profile">Richard Miles <span>#0002</span></router-link>
                        </h2>
                      </td>
                      <td>20 Dec 2020</td>
                      <td>
                        <button class="btn btn-outline-danger btn-sm">Week off</button>
                      </td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </table>
                <hr>
                <table class="table table-striped custom-table mb-0 datatable" id="attendancereportjob1">
                  <thead>
                    <tr>
                      <th>Employee Name</th>
                      <th>Total Days</th>
                      <th>Total Time</th>
                      <th>Total Time Worked</th>
                      <th>Total Late Arrival</th>
                      <th>Total Missed Work</th>
                      <th>Total Extra Work</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                    <tr>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" src="../../../../assets/img/profiles/avatar-02.jpg"></router-link>
                          <router-link to="/profile">John Doe <span>Design</span></router-link>
                        </h2>
                      </td>
                      <td>01</td>
                      <td>08</td>
                      <td><button class="btn btn-outline-success btn-sm">09</button></td>
                      <td><button class="btn btn-outline-warning btn-sm">00</button></td>
                      <td><button class="btn btn-outline-danger btn-sm">00</button></td>
                      <td><button class="btn btn-outline-success btn-sm">01</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
                
          <!-- /Content End -->
          
        </div>
        <!-- /Page Content -->
        
      </div>
      <!-- /Page Wrapper -->
    </div>
  </div>
</template>
<script>
  import attendancereport from '../../../../assets/json/attendancereport.json';
  import util from '../../../../assets/utils/util'
  import Vue from 'vue'
  export default {
     data() {
    return {
      attendancereport: attendancereport
    }
   },
    components: {
   
    },
    mounted() {
    util.datatable('#attendancereportjob')
    util.datatable('#attendancereportjob1')
    },
    name: 'attendancereports'
  }
</Script>