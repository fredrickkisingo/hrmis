<template>
<div class="col-md-8 col-lg-9 settings-cont">
                            <div class="card p-4">
                                <div class="add-emp-section">
                                    <a href="#" class="btn btn-success btn-add-emp" data-bs-toggle="modal" data-bs-target="#add_leavetype"><i class="fas fa-plus"></i> Add Leave Type</a>
                                </div>
<div class="row">
                        <div class="col-md-12">
                            <div class="table-responsive">
                                <table class="table table-striped custom-table datatable mb-0" id="leavetypecontent">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Leave Type</th>
                                            <th>Leave Days</th>
                                            <th>Status</th>
                                            <th class="text-end">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in leavetype" :key="item.id">
                                            <td>
                                            {{item.no}}
                                            </td>
                                            <td>{{item.leavetype}}</td>
                                            <td>{{item.leavedays}}</td>
                                            <td>
                                                            <div class="dropdown action-label">
                                                                <a class="role-info role-bg-two dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i class="fa fa-dot-circle-o text-success"></i> {{item.status}}
                                                                </a>
                                                                <div class="dropdown-menu dropdown-menu-right">
                                                                    <a href="#" class="dropdown-item"><i class="fa fa-dot-circle-o text-success"></i> Active</a>
                                                                    <a href="#" class="dropdown-item"><i class="fa fa-dot-circle-o text-danger"></i> Inactive</a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td class="text-end ico-sec">
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#edit_leavetype"><i class="fas fa-pen"></i></a>
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#delete_leavetype"><i class="far fa-trash-alt"></i></a>
                                                        </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
</template>
<script>
import leavetype from '../../../../assets/json/leavetype.json';
import util from '../../../../assets/utils/util'
  import Vue from 'vue'
  export default {
    data() {
    return {
      leavetype: leavetype
    }
    },
    components: {
    },
    mounted() {
    util.datatable('#leavetypecontent')
    },
  }
</Script>