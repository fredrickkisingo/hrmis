<template>
<div class="row">
            <div class="col-md-12">
              <div class="card card-table">
                <div class="card-header">
                  <h3 class="card-title mb-0">Applicants List</h3>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-nowrap custom-table mb-0">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Name</th>
                          <th>Job Title</th>
                          <th>Departments</th>
                          <th>Start Date</th>
                          <th>Expire Date</th>
                          <th class="text-center">Job Types</th>
                          <th class="text-center">Status</th>
                          <th class="text-center">Resume</th>
                          <th class="text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in jobdashapplicant" :key="item.id">
                          <td>{{item.no}}</td>
                          <td>
                            <h2 class="table-avatar">
                              <router-link to="/profile" class="avatar"><img alt="" :src="loadImg(item.image)"></router-link>
                              <router-link to="/profile">{{item.name}} <span>{{item.name1}}</span></router-link>
                            </h2>
                          </td>
                          <td><router-link to="/job-details">{{item.jobtitle}}</router-link></td>
                          <td>{{item.department}}</td>
                          <td>{{item.startdate}}</td>
                          <td>{{item.expiredate}}</td>
                          <td class="text-center">
                            <div class="dropdown action-label">
                              <a class="role-info role-bg-two dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
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
                              <a class="role-info role-bg-one dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa fa-dot-circle-o text-danger"></i> {{item.status}}
                              </a>
                              <div class="dropdown-menu dropdown-menu-right">
                                <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-info"></i> Open</a>
                                <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i> Closed</a>
                                <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i> Cancelled</a>
                              </div>
                            </div>
                          </td>
                          <td class="text-center"><a href="javascript:void(0);" class="role-info role-bg-three"><i class="fa fa-download me-1"></i> {{item.resume}}</a></td>
                          <td class="text-end ico-sec">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#edit_job"><i class="fas fa-pen"></i></a>
                            <a href="#" data-bs-toggle="modal" data-bs-target="#delete_job"><i class="far fa-trash-alt"></i></a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
</template>
<script>
import jobdashapplicant from '../../../../assets/json/jobdashapplicant.json';
const images = require.context('../../../../assets/img/profiles', false, /\.png$|\.jpg$/)
  import Vue from 'vue'
  export default {
    data() {
    return {
      jobdashapplicant: jobdashapplicant
    }
    },
    components: {
    },
    methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
    },
    }
  }
</Script>