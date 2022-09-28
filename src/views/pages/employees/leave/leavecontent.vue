<template>

  <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0 datatable" id="leavecontent">
                  <thead>
                    <tr>
                      <th>Employee</th>
                      <th>Leave Type</th>
                      <th>From</th>
                      <th>To</th>
                      <th>No of Days</th>
                      <th>Reason</th>
                      <th class="text-center">Status</th>
                      <th class="text-end">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in leavecontent" :key="item.id">
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" :src="loadImg(item.image)"></router-link>
                          <a href="#">{{item.name}} <span>{{item.job}}</span></a>
                        </h2>
                      </td>
                      <td>{{item.leavetype}}</td>
                      <td>{{item.from}}</td>
                      <td>{{item.to}}</td>
                      <td>{{item.noofday}}</td>
                      <td>{{item.reason}}</td>
                      <td class="text-center">
                        <span class="role-info role-bg-three">{{item.status}}</span>
                      </td>
                      <td class="text-end ico-sec">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#edit_leave"><i class="fas fa-pen"></i></a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#delete_approve"><i class="far fa-trash-alt"></i></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
</template>
<script>
import leavecontent from '../../../../assets/json/leavecontent.json';
import util from '../../../../assets/utils/util'
const images = require.context('../../../../assets/img/profiles', false, /\.png$|\.jpg$/)
  import Vue from 'vue'
  export default {
    data() {
    return {
      leavecontent: leavecontent
    }
    },
    components: {
    },
    mounted() {
    util.datatable('#leavecontent')
    },
    methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
    },
    }
  }
</Script>