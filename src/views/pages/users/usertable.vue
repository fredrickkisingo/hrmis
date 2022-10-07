<template>
<div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table datatable" id="usertable">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Department</th>
                      <th>Created Date</th>
                      <th>Role</th>
                      <th class="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img src="../../../assets/img/profiles/avatar-21.jpg" alt=""></router-link>
                          <router-link to="/profile">Daniel Porter <span>Admin</span></router-link>
                        </h2>
                      </td>
                      <td>danielporter@example.com</td>
                      <td>IT</td>
                      <td>1 Jan 2013</td>
                      <td>
                        <span class="role-info role-bg-one">Admin</span>
                      </td>
                      <td class="text-end ico-sec">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#edit_user"><i class="fas fa-pen"></i></a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#delete_user"><i class="far fa-trash-alt"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" src="../../../assets/img/profiles/avatar-02.jpg"></router-link>
                          <router-link to="/profile">John Doe <span>Web Designer</span></router-link>
                        </h2>
                      </td>
                      <td>johndoe@example.com</td>
                      <td>finance</td>
                      <td>1 Jan 2013</td>
                      <td>
                        <span class="role-info role-bg-one">Employee</span>
                      </td>
                      <td class="text-end ico-sec">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#edit_user"><i class="fas fa-pen"></i></a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#delete_user"><i class="far fa-trash-alt"></i></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
</template>
<script>
import util from '../../../assets/utils/util'
  import Vue from 'vue'
  export default {
    data() {
    return {
     
    }
  },
    components: {
    },
    mounted() {
    util.datatable('#usertable')
    },
  }
</Script>