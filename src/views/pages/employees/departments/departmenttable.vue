<template>
<table class="table table-striped custom-table mb-0 datatable" id="departmenttable">
                  <thead>
                    <tr>
                      <th style="width: 30px;">#</th>
                      <th>Department Name</th>
                      <th class="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in department" :key="item.id">
                      <td>{{item.no}}</td>
                      <td>{{item.departmentname}}</td>
                       <td class="text-end ico-sec d-flex justify-content-end">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#edit_department"><i class="fas fa-pen"></i></a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#delete_department"><i class="far fa-trash-alt"></i></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
</template>
<script>
import department from '../../../../assets/json/department.json';
import util from '../../../../assets/utils/util'
  import Vue from 'vue'
  export default {
    data() {
    return {
      department: department
    }
  },
    components: {
    },
    mounted() {
    util.datatable('#departmenttable')
    },
  }
</Script>