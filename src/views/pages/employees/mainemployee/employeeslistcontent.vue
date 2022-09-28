<template>
<table class="table table-striped custom-table datatable" id="employeelistcontent">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Employee ID</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th class="text-nowrap">Join Date</th>
                      <th>Role</th>
                      <th class="text-end no-sort">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in employeeslist" :key="item.id">
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" :src="loadImg(item.image)"></router-link>
                          <router-link to="/profile">{{item.name}} <span>{{item.name1}}</span></router-link>
                        </h2>
                      </td>
                      <td>{{item.employeeid}}</td>
                      <td>{{item.email}}</td>
                      <td>{{item.mobile}}</td>
                      <td>{{item.joindate}}</td>
                      <td>
                        <span class="role-info role-bg-one">{{item.role}}</span>
                      </td>
                      <td class="text-end ico-sec">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#edit_employee"><i class="fas fa-pen"></i></a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#delete_employee"><i class="far fa-trash-alt"></i></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
</template>
<script>
import employeeslist from '../../../../assets/json/employeeslist.json';
import util from '../../../../assets/utils/util'
const images = require.context('../../../../assets/img/profiles', false, /\.png$|\.jpg$/)
  import Vue from 'vue'
  export default {
    data() {
    return {
      employeeslist: employeeslist
    }
  },
    components: {
    },
    mounted() {
    util.datatable('#employeelistcontent')
    },
    methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
    },
    }
  }
</Script>