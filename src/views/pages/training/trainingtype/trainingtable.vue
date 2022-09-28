<template>

<div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0 datatable" id="traintable">
                  <thead>
                    <tr>
                      <th style="width: 30px;">#</th>
                      <th>Type </th>
                      <th>Description </th>
                      <th>Status </th>
                      <th class="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in traintable" :key="item.id">
                      <td>{{item.no}}</td>
                      <td>{{item.type}}</td>
                      <td>{{item.description}}</td>
                      <td>
                        <div class="dropdown action-label">
                          <a class="role-info role-bg-two dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa fa-dot-circle-o text-danger"></i> {{item.status}}
                          </a>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-success"></i> Active</a>
                            <a class="dropdown-item" href="#"><i class="fa fa-dot-circle-o text-danger"></i> Inactive</a>
                          </div>
                        </div>
                      </td>
                      <td class="text-end ico-sec">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#edit_type"><i class="fas fa-pen"></i></a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#delete_type"><i class="far fa-trash-alt"></i></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
</template>
<script>
import traintable from '../../../../assets/json/traintable.json';
import util from '../../../../assets/utils/util'
  import Vue from 'vue'
  export default {
    data() {
    return {
      traintable: traintable
    }
    },
    components: {
    },
    mounted() {
    util.datatable('#traintable')
    },
    name: 'trainingtable'
  }
</Script>