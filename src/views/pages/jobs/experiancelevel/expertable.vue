<template>

<table class="table table-striped custom-table mb-0 datatable" id="expertable">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Experiance</th>
                      <th>Status</th>                 
                      <th class="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in experiancelevel" :key="item.id">
                      <td>{{item.no}}</td>                    
                      <td>{{item.experience}}</td>
                      <td>
                        <div class="action-label">
                          <a class="role-info role-bg-one" href="javascript:void(0);">
                          <i class="fa fa-dot-circle-o text-success"></i> {{item.status}}                </a>
                        </div>  
                      </td>
                      <td class="text-end ico-sec">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#edit_job"><i class="fas fa-pen"></i></a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#delete_job"><i class="far fa-trash-alt"></i></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
</template>
<script>
import experiancelevel from '../../../../assets/json/experiancelevel.json';
import util from '../../../../assets/utils/util'
  import Vue from 'vue'
  export default {
    data() {
    return {
      experiancelevel: experiancelevel
    }
    },
    components: {
    },
    mounted() {
    util.datatable('#expertable')
    },
  }
</Script>