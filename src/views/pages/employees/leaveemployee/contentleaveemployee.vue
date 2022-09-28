<template>

<table class="table table-striped custom-table mb-0 datatable" id="contentemployee">
                  <thead>
                    <tr>
                      <th>Leave Type</th>
                      <th>From</th>
                      <th>To</th>
                      <th>No of Days</th>
                      <th>Reason</th>
                      <th class="text-center">Status</th>
                      <th>Approved by</th>
                      <th class="text-end">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in leaveemployee" :key="item.id">
                      <td>{{item.leavetype}}</td>
                      <td>{{item.from}}</td>
                      <td>{{item.to}}</td>
                      <td>{{item.noofday}}</td>
                      <td>{{item.reason}}</td>
                      <td class="text-center">
                        <span class="role-info role-bg-three">{{item.status}}</span>
                      </td>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar avatar-xs"><img :src="loadImg(item.image)" alt=""></router-link>
                          <a href="#">{{item.approvedby}}</a>
                        </h2>
                      </td>
                       <td class="text-end ico-sec">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#edit_leave"><i class="fas fa-pen"></i></a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#delete_approve"><i class="far fa-trash-alt"></i></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
</template>
<script>
import leaveemployee from '../../../../assets/json/leaveemployee.json';
import util from '../../../../assets/utils/util'
const images = require.context('../../../../assets/img/profiles', false, /\.png$|\.jpg$/)
  import Vue from 'vue'
  export default {
    data() {
    return {
      leaveemployee: leaveemployee
    }
    },
    components: {
    },
    mounted() {
    util.datatable('#contentemployee')
    },
    methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
    },
    }
  }
</Script>