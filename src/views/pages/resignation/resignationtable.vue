<template>
<div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0 datatable" id="resignation">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Resigning Employee </th>
                      <th>Department </th>
                      <th>Reason </th>
                      <th>Notice Date </th>
                      <th>Resignation Date </th>
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
                      <td>Lorem ipsum dollar</td>
                      <td>28 Feb 2019</td>
                      <td>28 Feb 2019</td>
                      <td class="text-end ico-sec">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#edit_resignation"><i class="fas fa-pen"></i></a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#delete_resignation"><i class="far fa-trash-alt"></i></a>
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
    util.datatable('#resignation')
    },
    name: 'activities'
  }
</Script>