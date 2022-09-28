<template>
<table class="table table-striped custom-table mb-0 datatable" id="designationtable">
                  <thead>
                    <tr>
                      <th style="width: 30px;">#</th>
                      <th>Designation </th>
                      <th>Department </th>
                      <th class="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in designations" :key="item.id">
                      <td>{{item.no}}</td>
                      <td>{{item.design}}</td>
                      <td>{{item.departmentname}}</td>
                      <td class="text-end ico-sec d-flex justify-content-end">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#edit_designation"><i class="fas fa-pen"></i></a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#delete_designation"><i class="far fa-trash-alt"></i></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
</template>
<script>
import designations from '../../../../assets/json/designations.json';
import util from '../../../../assets/utils/util'
  import Vue from 'vue'
  export default {
    data() {
    return {
      designations: designations
    }
  },
    components: {
    },
    mounted() {
    util.datatable('#designationtable')
    },
  }
</Script>