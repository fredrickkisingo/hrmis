<template>
  <table
    class="table table-striped custom-table datatable"
    id="employeelistcontent"
  >
    <thead>
      <tr>
        <th>Name</th>
        <th>Employee ID</th>
        <th>Email</th>
        <th>Mobile</th>
        <th class="text-nowrap">Join Date</th>
        <th>Role</th>
        <th class="text-end no-sort">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in employeeslist" :key="item.id">
        <td>
          <h2 class="table-avatar">
            <router-link to="/profile" class="avatar"
              ><img alt="" :src="loadImg(item.image)"
            /></router-link>
            <router-link to="/profile"
              >{{ item.name }} <span>{{ item.name1 }}</span></router-link
            >
          </h2>
        </td>
        <td>{{ item.employeeid }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.mobile }}</td>
        <td>{{ item.joindate }}</td>
        <td>
          <span class="role-info role-bg-one">{{ item.role }}</span>
        </td>
        <td class="text-end ico-sec">
          <a href="#" @click.prevent="openEditModal(item)"><i class="fas fa-pen"></i></a>
          <a href="#" data-bs-toggle="modal" data-bs-target="#delete_employee"
            ><i class="far fa-trash-alt"></i
          ></a>
        </td>
      </tr>
    </tbody>
  </table>

  <!-- Edit Employee Modal -->
  <vue-final-modal @click-outside="clickOutside" :z-index-base="100000" v-model="showModal"   :lock-scroll="false" name="edit-employee-modal">
    <template v-slot="{params}">
<div class="modal-container">
  <div class="modal-content-edit">
          <div class="modal-header">
            <h5 class="modal-title">Edit Employee {{ params.name }}</h5>
            <button
              type="button"
              class="close"
              @click.prevent="showModal = false"
            >
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div class="modal-body">
            <edit-employee-modal :key="params.id" :employee="params"/>
          </div>
        </div>
    </div>
</template>  </vue-final-modal>
 
  <!-- /Edit Employee Modal -->
</template>

<script>
import employeeslist from "../../../../assets/json/employeeslist.json";
import { $vfm, VueFinalModal, ModalsContainer } from "vue-final-modal";
import EditEmployeeModal from './EditEmployeeModal'

import util from "../../../../assets/utils/util";
const images = require.context(
  "../../../../assets/img/profiles",
  false,
  /\.png$|\.jpg$/
);
import Vue from "vue";
export default {
  data() {
    return {
      employeeslist: employeeslist,
      showModal: false
    };
  },
  components: {
    VueFinalModal,
    EditEmployeeModal
  },
  mounted() {
    util.datatable("#employeelistcontent");
  },
  methods: {
    loadImg(imgPath) {
      return images("./" + imgPath).default;
    },
    clickOutside() {
      alert('click-outside')
    },
    openEditModal: function(employee) {
      //
      $vfm.show('edit-employee-modal', employee)
    },
    clickedFunction(data) {
      const event = new CustomEvent("modal-open", { detail: data });
      document.dispatchEvent(event);
    },
  },
};
</script>

<style>
@import "../../../../assets/css/modal.css";
</style>