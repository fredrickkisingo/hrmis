<template>
  <div class="appliedjobs">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
      <!-- Page Wrapper -->
      <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">

        <appliedjobheader />
          
        <!-- Content Starts -->
          
          <jobheader /> 
          
          <searchfilter />

          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0 datatable" id="appliedjobs">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Job Title</th>
                      <th>Department</th>
                      <th>Start Date</th>
                      <th>Expire Date</th>
                      <th class="text-center">Job Type</th>
                      <th class="text-center">Status</th>
                      <th class="text-center">Actions</th>          
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
                      <td class="text-end ico-sec">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#delete_employee"><i class="far fa-trash-alt"></i></a>
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
    <modalappliedjobs />
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
    util.datatable('#appliedjobs')
    },

    name: 'appliedjobs'
  }
</Script>