<template>

  <div class="col-md-9">
            <div class="card">
              <div class="card-body">
                <div class="tab-content">
                  <div id="home" class="tab-pane show active">
                      <div class="card-box">
                      <div class="table-responsive">
                        <table class="table table-striped custom-table mb-0">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Job Title</th>
                              <th>Department</th>
                              <th class="text-center">Job Type</th>
                              <th class="text-center">Aptitude Test</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="item in interviewing" :key="item.id">
                              <td>{{item.no}}</td>
                              <td><a href="#">{{item.jobtitle}}</a></td>
                              <td>{{item.department}}</td>
                              <td class="text-center">
                                <div class="action-label">
                                  <a class="role-info role-bg-one" href="#">
                                  <i class="fa fa-dot-circle-o text-danger"></i> {{item.jobtype}}
                                  </a>
                                </div>
                              </td>
                              <td class="text-center">
                                <router-link to="/job-aptitude" class="role-info role-bg-two aptitude-btn"><span>{{item.aptitudetest}}</span></router-link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div id="menu1" class="tab-pane fade">
                      <div class="card-box">
                      <div class="table-responsive">
                        <table class="table table-striped custom-table mb-0">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Job Title</th>
                              <th>Department</th>
                              <th class="text-center">Job Type</th>
                              <th class="text-center">Aptitude Test</th>
                              <th class="text-center">Schedule Interview</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="item in scheduleinterviewing" :key="item.id">
                              <td>{{item.no}}</td>
                              <td><a href="#">{{item.jobtitle}}</a></td>
                              <td>{{item.department}}</td>
                              <td class="text-center">
                                <div class="action-label">
                                  <a class="role-info role-bg-one" href="#">
                                  <i class="fa fa-dot-circle-o text-danger"></i> {{item.jobtype}}
                                  </a>
                                </div>
                              </td>
                              <td class="text-center">
                                <a href="javascript:void(0);" class="role-info role-bg-two disabled"><span>{{item.aptitudetest}}</span></a>
                              </td>
                              <td class="text-center">
                                <a href="javascript:void(0);" class="role-info role-bg-three aptitude-btn" data-bs-toggle="modal" data-bs-target="#selectMyTime"><span>{{item.scheduleinterview}}</span></a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
</template>
<script>
import interviewing from '../../../../assets/json/interviewing.json';
import scheduleinterviewing from '../../../../assets/json/scheduleinterviewing.json';
  import Vue from 'vue'
  export default {
    data() {
    return {
      interviewing: interviewing,
      scheduleinterviewing: scheduleinterviewing
    }
    },
    components: {
    }
  }
</Script>