<template>
   <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0 datatable" id="performanceappraisal">
                  <thead>
                    <tr>
                      <th style="width: 30px;">#</th>
                      <th>Employee</th>
                      <th>Designation</th>
                      <th>Department</th>
                      <th>Appraisal Date</th>
                      <th>Status</th>
                      <th class="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in performanceappraisal" :key="item.id">
                      <td>{{item.no}}</td>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" :src="loadImg(item.image)"></router-link>
                          <router-link to="/profile"> {{item.name}} </router-link>
                        </h2>
                      </td>
                      <td>{{item.designation}} </td>
                      <td>{{item.department}}</td>
                      <td>
                        {{item.appraisaldate}}
                      </td>
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
                      <td class="text-end ico-sec">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#edit_appraisal"><i class="fas fa-pen"></i></a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#delete_appraisal"><i class="far fa-trash-alt"></i></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
</template>
<script>
import performanceappraisal from '../../../../assets/json/performanceappraisal.json';
import util from '../../../../assets/utils/util'
const images = require.context('../../../../assets/img/profiles', false, /\.png$|\.jpg$/)
  import Vue from 'vue'
  export default {
    data() {
    return {
      performanceappraisal: performanceappraisal
    }
    },
    components: {
    },
    mounted() {
    util.datatable('#performanceappraisal')
    },
    methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
    },
    }
  }
</Script>