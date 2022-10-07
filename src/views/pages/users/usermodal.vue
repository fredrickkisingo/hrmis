<template>
<!-- Add User Modal -->
        <div id="add_user" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" id="new_user" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add User</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <i class="fas fa-times"></i>
                </button>
              </div>
              <div class="modal-body">
                <form method="post" @submit.prevent="createUser">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>First Name <span class="text-danger">*</span></label>
                        <input class="form-control" type="text" v-model="form.firstname">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Last Name</label>
                        <input class="form-control" type="text" v-model="form.lastname">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Username <span class="text-danger">*</span></label>
                        <input class="form-control" type="text"  v-model="form.username">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Email <span class="text-danger">*</span></label>
                        <input class="form-control" type="email">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Password</label>
                        <input class="form-control" type="password" v-model="form.password">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Confirm Password</label>
                        <input class="form-control" type="password" v-model="form.confirmpassword">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Phone </label>
                        <input class="form-control" type="text" v-model="form.phone">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Role</label>
                        <vue-select :options="adduserrole" />
                      </div>
                    </div>
                  
                    <div class="col-sm-6">  
                      <div class="form-group">
                        <label>Employee ID <span class="text-danger">*</span></label>
                        <input type="text" class="form-control floating" v-model="form.employeeid">
                      </div>
                     </div>
                  </div>
                  
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Add User Modal -->
        
        <!-- Edit User Modal -->
        <div id="edit_user" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit User</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <i class="fas fa-times"></i>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>First Name <span class="text-danger">*</span></label>
                        <input class="form-control" value="John" type="text">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Last Name</label>
                        <input class="form-control" value="Doe" type="text">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Username <span class="text-danger">*</span></label>
                        <input class="form-control" value="johndoe" type="text">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Email <span class="text-danger">*</span></label>
                        <input class="form-control" value="johndoe@example.com" type="email">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Password</label>
                        <input class="form-control" type="password">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Confirm Password</label>
                        <input class="form-control" type="password">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Phone </label>
                        <input class="form-control" value="9876543210" type="text">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Role</label>
                        <vue-select :options="edituserrole" />
                      </div>
                    </div>
                   
                    <div class="col-sm-6">  
                      <div class="form-group">
                        <label>Employee ID <span class="text-danger">*</span></label>
                        <input type="text" value="FT-0001" class="form-control floating">
                      </div>
                     </div>
                  </div>
               
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Edit User Modal -->
        
        <!-- Delete User Modal -->
        <div class="modal custom-modal fade" id="delete_user" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete User</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div class="modal-btn delete-action">
                  <div class="row">
                    <div class="col-6">
                      <a href="javascript:void(0);" class="btn btn-primary continue-btn">Delete</a>
                    </div>
                    <div class="col-6">
                      <a href="javascript:void(0);" data-bs-dismiss="modal" class="btn btn-primary cancel-btn">Cancel</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Delete User Modal -->
</template>
<script>
  import Vue from 'vue'
  import axios from 'axios'


  export default {
    components: {  
    },
    data() {
    return {
      users:{},
      form :{
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        role:'',
        employeeid:''

      },
      addusercompany: ["Global Technologies", "Delta Infotech"],
      adduserrole: ["Admin", "Client", "Employee"],
      editusercompany: ["Global Technologies", "Delta Infotech"],
      edituserrole: ["Admin", "Client", "Employee"]
    }
    },
    mounted() {
    },
    name: 'users'
  }
</Script>