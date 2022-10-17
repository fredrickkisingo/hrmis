<template>
  <div class="row">
    <div class="col-md-12">
      <div class="table-responsive">
        <table
          class="table table-striped custom-table datatable"
          id="userroles"
        >
          <thead>
            <tr>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="role in roles " :key="role.id" >
              <td>{{role.role_name}}</td>
              <td class="text-end ico-sec">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#edit_user_role"
                  ><i class="fas fa-pen"></i
                ></a>
                <a href="#" @click="deleteRole(role.id)"
                  ><i class="far fa-trash-alt"></i
                ></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import util from "../../../assets/utils/util";
import axios from "axios";

import Vue from "vue";
export default {
  data() {
    return {};
  },
  components: {},
  mounted() {
    util.datatable("#userroles");
  },
    created() {
      this.loadRoles()
      
    },

  methods:{

    deleteRole(id){
          Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
    //send ajax delete request to backend
    axios.delete("API_Goes_Here" + id).then((response) => {
                  this.roles = response.data;
                  this.roles= $("#userrroles").DataTable();    
                    if (result.value) {
                      Swal.fire(
                        'Deleted!',
                        'Role has been deleted.',
                        'success'
                      )
                    }

                    Fire.$emit('AfterDelete')
                }).catch(()=>{
                  Swal.fire('Something went wrong')
                });

    })

    },
    loadRoles(){
          axios.get("API_Goes_Here").then((response) => {
                  this.roles = response.data;
                  this.roles= $("#userrroles").DataTable();
                });
          }

},

  beforeUnmount() {
    util.destroyDatatable('#userroles')
  },
  name: "UserRoles",
};
</script>




