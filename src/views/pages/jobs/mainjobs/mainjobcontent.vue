<template>
<table class="table table-striped custom-table mb-0 datatable" id="mainjobcontent">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Job Title</th>
                      <th>Department</th>
                      <th>Start Date</th>
                      <th>Expire Date</th> 
                      <th class="text-center">Job Type</th>
                      <th class="text-center">Status</th>
                      <th>Applicants</th>
                      <th class="text-end">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in jobs" :key="item.id">
                      <td>{{item.no}}</td>
                      <td><router-link to="/job-details">{{item.jobtitle}}</router-link></td>
                      <td>{{item.department}}</td>
                      <td>{{item.startdate}}</td>
                      <td>{{item.expiredate}}</td>
                      <td class="text-center">
                        <div class="dropdown action-label">
                          <a class="role-info role-bg-one dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-danger"></i> {{item.jobtype}}
                          </a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> Full Time</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i> Part Time</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i> Internship</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-warning"></i> Temporary</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-warning"></i> Other</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-center">
                        <div class="dropdown action-label">
                          <a class="role-info role-bg-two dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-danger"></i> {{item.status}}
                          </a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> Open</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i> Closed</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i> Cancelled</a>
                          </div>
                        </div>
                      </td>
                      <td><router-link to="/job-applicants" class="role-info role-bg-three">{{item.applicant}}</router-link></td>
                      <td class="text-end ico-sec">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#edit_job"><i class="fas fa-pen"></i></a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#delete_job"><i class="far fa-trash-alt"></i></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
</template>
<script>
  import jobs from '../../../../assets/json/jobs.json';
  import util from '../../../../assets/utils/util'
  import Vue from 'vue'
  export default {
    data() {
    return {
    jobs: jobs
    }
    },
    components: {
   
    },
    mounted() {
    util.datatable('#mainjobcontent')
    },
  }
</Script>