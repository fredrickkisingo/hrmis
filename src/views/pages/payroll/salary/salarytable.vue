<template>
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table datatable" id="salarytable">
                  <thead>
                    <tr>
                      <th>Employee</th>
                      <th>Employee ID</th>
                      <th>Email</th>
                      <th>Join Date</th>
                      <th>Role</th>
                      <th>Salary</th>
                      <th>Payslip</th>
                      <th class="text-end">Action</th>
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
                      <td>FT-0001</td>
                      <td>johndoe@example.com</td>
                      <td>1 Jan 2013</td>
                      <td>
                        <div class="dropdown">
                          <a href="" class="role-info role-bg-one dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Web Designer </a>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Software Engineer</a>
                            <a class="dropdown-item" href="#">Software Tester</a>
                            <a class="dropdown-item" href="#">Frontend Developer</a>
                            <a class="dropdown-item" href="#">UI/UX Developer</a>
                          </div>
                        </div>
                      </td>
                      <td>$59698</td>
                      <td><router-link class="btn btn-sm btn-primary" to="/salary-view">Generate Slip</router-link></td>
                       <td class="text-end ico-sec">
                        <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_salary"><i class="fas fa-pen"></i></a>
                        <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_salary"><i class="far fa-trash-alt"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img src="../../../../assets/img/profiles/avatar-09.jpg" alt=""></router-link>
                          <router-link to="/profile">Richard Miles <span>Web Developer</span></router-link>
                        </h2>
                      </td>
                      <td>FT-0002</td>
                      <td>richardmiles@example.com</td>
                      <td>1 Jan 2013</td>
                      <td>
                        <div class="dropdown">
                          <a href="" class="role-info role-bg-one dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Web Developer </a>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Software Engineer</a>
                            <a class="dropdown-item" href="#">Software Tester</a>
                            <a class="dropdown-item" href="#">Frontend Developer</a>
                            <a class="dropdown-item" href="#">UI/UX Developer</a>
                          </div>
                        </div>
                      </td>
                      <td>$72000</td>
                      <td><router-link class="btn btn-sm btn-primary" to="/salary-view">Generate Slip</router-link></td>
                       <td class="text-end ico-sec">
                        <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_salary"><i class="fas fa-pen"></i></a>
                        <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_salary"><i class="far fa-trash-alt"></i></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
    util.datatable('#salarytable')
    }
  }
</Script>