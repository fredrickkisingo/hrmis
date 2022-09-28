<template>
  <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0 datatable" id="trackingcontent">
                  <thead>
                    <tr>
                      <th style="width: 30px;">#</th>
                      <th>Goal Type</th>
                      <th>Subject</th>
                      <th>Target Achievement</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Description </th>
                      <th>Status </th>
                      <th>Progress </th>
                      <th class="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in goaltracking" :key="item.id">
                      <td>{{item.no}}</td>
                      <td>{{item.goaltype}}</td>
                      <td>{{item.subject}}</td>
                      <td>{{item.target}}</td>
                      <td>
                        {{item.startdate}}
                      </td>
                      <td>{{item.enddate}}</td>
                      <td>{{item.description}}</td>
                      <td>
                        <div class="dropdown action-label">
                          <a class="role-info role-bg-two dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-success"></i> {{item.status}}
                          </a>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i> Active</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i> Inactive</a>
                          </div>
                        </div>
                      </td>
                      <td class="job-app">
                        <div class="prog-div">
                          <div class="progress org"> <span class="progress-left"> <span class="progress-bar"></span> </span> <span class="progress-right"> <span class="progress-bar"></span> </span>
                            <div class="progress-value">{{item.progress}}</div>
                          </div>
                        </div>
                      </td>
                      
                      <td class="text-end ico-sec">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#edit_goal"><i class="fas fa-pen"></i></a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#delete_goal"><i class="far fa-trash-alt"></i></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
</template>
<script>
import goaltracking from '../../../../assets/json/goaltracking.json';
import util from '../../../../assets/utils/util'
  import Vue from 'vue'
  export default {
    data() {
    return {
      goaltracking: goaltracking
    }
    },
    components: {
    },
    mounted() {
    util.datatable('#trackingcontent')
    },
  }
</Script>