<template>
<div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table datatable mb-0" id="fundtable">
                  <thead>
                    <tr>
                      <th>Employee Name</th>
                      <th>Provident Fund Type</th>
                      <th>Employee Share</th>
                      <th>Organization Share</th>
                      <th>Status</th>
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
                      <td>Percentage of Basic Salary</td>
                      <td>2%</td>
                      <td>2%</td>
                                           <td>
                        <div class="dropdown action-label">
                          <a class="role-info role-bg-two dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-danger"></i> Pending
                          </a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i> Pending</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i> Approved</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-end ico-sec">
                        <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_pf"><i class="fas fa-pen"></i></a>
                        <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_pf"><i class="far fa-trash-alt"></i></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
</template>
<script>
import util from '../../../../assets/utils/util'
  import Vue from 'vue'
  export default {
    data() {
    return {
      
    }
  },
    components: {
    },
    mounted() {
    util.datatable('#fundtable')
    },
  }
</Script>