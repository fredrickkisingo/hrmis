<template>
<!-- Promotion Table -->
                <table class="table table-striped custom-table mb-0 datatable" id="promotiontable">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Promoted Employee </th>
                      <th>Department</th>
                      <th>Promotion Designation From </th>
                      <th>Promotion Designation To </th>
                      <th>Promotion Date </th>
                      <th class="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <h2 class="table-avatar blue-link">
                          <router-link to="/profile" class="avatar"><img alt="" src="../../../assets/img/profiles/avatar-02.jpg"></router-link>
                          <router-link to="/profile">John Doe</router-link>
                        </h2>
                      </td>
                      <td>Web Development</td>
                      <td>Web Developer</td>
                      <td>Sr Web Developer</td>
                      <td>28 Feb 2019</td>
                      <td class="text-end ico-sec">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#edit_promotion"><i class="fas fa-pen"></i></a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#delete_promotion"><i class="far fa-trash-alt"></i></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <!-- /Promotion Table -->
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
    util.datatable('#promotiontable')
    },
  }
</Script>