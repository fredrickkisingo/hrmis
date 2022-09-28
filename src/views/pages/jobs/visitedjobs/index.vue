<template>
  <div class="visitedjobs">
    <div class="main-wrapper">
       <main-header></main-header>
      <sidebar></sidebar>
       <!-- Page Wrapper -->
       <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
          
          <!-- Page Header -->
            <div class="row">
              <div class="col-md-12">
              <div class="page-head-box">
                <h3>Visitied Jobs</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
                  <li class="breadcrumb-item ">Jobs</li>
                  <li class="breadcrumb-item">User Dashboard</li>
                  <li class="breadcrumb-item active">Visited Jobs</li>
                </ul>
                </div>
              </div>
            </div>
          <!-- /Page Header -->
          
          <!-- Content Starts -->
           <jobheader /> 
          
          <!-- Search Filter -->
          <searchfilter />
          <!-- Search Filter -->

           <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0 datatable" id="archivedjobs">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Job Title</th>
                      <th>Department</th>
                      <th>Start Date</th>
                      <th>Expire Date</th>
                      <th class="text-center">Job Type</th>
                      <th class="text-center">Status</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in appliedjob" :key="item.id">
                      <td>{{item.no}}</td>
                      <td><router-link to="/job-details">{{item.jobtitle}}</router-link></td>
                      <td>{{item.department}}</td>
                      <td>{{item.startdate}}</td>
                      <td>{{item.expiredate}}</td>
                      <td class="text-center">
                        <div class="action-label">
                          <a class="role-info role-bg-one" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-danger"></i> {{item.jobtype}}
                          </a>
                        </div>
                      </td>
                      <td class="text-center">
                        <div class="action-label">
                          <a class="role-info role-bg-two" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-danger"></i> {{item.status}}
                          </a>
                        </div>
                      </td>
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
  import appliedjob from '../../../../assets/json/appliedjob.json';
  import util from '../../../../assets/utils/util'
  import Vue from 'vue'
  export default {
    data() {
    return {
    appliedjob: appliedjob
    }
    },
    components: {
   
    },
    mounted() {
    util.datatable('#archivedjobs')
    },
    name: 'visitedjoba'
  }
</Script>