<template>
<div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0 datatable" id="timesheettable">
                  <thead>
                    <tr>
                      <th>Employee</th>
                      <th>Date</th>
                      <th>Projects</th>
                      <th class="text-center">Assigned Hours</th>
                      <th class="text-center">Hours</th>
                      <th class="d-none d-sm-table-cell">Description</th>
                      <th class="text-end">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" src="../../../../assets/img/profiles/avatar-02.jpg"></router-link>
                          <router-link to="/profile">John Doe <span>Web Designer</span></router-link>
                        </h2>
                      </td>
                      <td>8 Mar 2019</td>
                      <td>
                        <h2>Office Management</h2>
                      </td>
                      <td class="text-center">20</td>
                      <td class="text-center">7</td>
                      <td class="d-none d-sm-table-cell col-md-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque.</td>
                      <td class="text-end ico-sec d-flex justify-content-end">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#edit_todaywork"><i class="fas fa-pen"></i></a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#delete_workdetail"><i class="far fa-trash-alt"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" src="../../../../assets/img/profiles/avatar-09.jpg"></router-link>
                          <router-link to="/profile">Richard Miles <span>Web Developer</span></router-link>
                        </h2>
                      </td>
                      <td>8 Mar 2019</td>
                      <td>
                        <h2>Project Management</h2>
                      </td>
                      <td class="text-center">20</td>
                      <td class="text-center">12</td>
                      <td class="d-none d-sm-table-cell col-md-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque.</td>
                     <td class="text-end ico-sec d-flex justify-content-end">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#edit_todaywork"><i class="fas fa-pen"></i></a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#delete_workdetail"><i class="far fa-trash-alt"></i></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
</template>
timesheettable
<script>
import util from '../../../../assets/utils/util'
const images = require.context('../../../../assets/img/profiles', false, /\.png$|\.jpg$/)
  import Vue from 'vue'
  export default {
    data() {
    return {
    
    }
    },
    components: {
    },
    mounted() {
    util.datatable('#timesheettable')
    },
    methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
    },
    }
  }
</Script>