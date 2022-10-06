<template>
<!-- Add Role Modal -->
        <div id="add_user_role" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add Role</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <i class="fas fa-times"></i>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Role Name <span class="text-danger">*</span></label>
                        <input class="form-control" type="text">
                      </div>
                    </div>
                   </div>

                  <div class="table-responsive m-t-15">
                    <table class="table table-striped custom-table">
                      <thead>
                        <tr>
                          <th>Permission</th>
                          <th class="text-center">View</th>
                          <th class="text-center">Add</th>
                          <th class="text-center">Edit</th>
                          <th class="text-center">Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Employee</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                         
                        </tr>
                        <tr>
                          <td>Holidays</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                        
                        </tr>
                        <tr>
                          <td>Leaves</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                         
                        </tr>
                        <tr>
                          <td>Events</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          
                        </tr>

                        <tr>
                          <td>Payroll</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          
                        </tr>

                        <tr>
                          <td>Appraisal</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          
                        </tr>

                        <tr>
                          <td>Jobs</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          
                        </tr>

                        <tr>
                          <td>Termination of Service</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          
                        </tr>

                        <tr>
                          <td>Missions</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          
                        </tr>




                      </tbody>
                    </table>
                  </div>
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Add Role Modal -->
        
        <!-- Edit Role Modal -->
        <div id="edit_user_role" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Role</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <i class="fas fa-times"></i>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Role Name <span class="text-danger">*</span></label>
                        <input class="form-control" type="text">
                      </div>
                    </div>
                   </div>

                  <div class="table-responsive m-t-15">
                    <table class="table table-striped custom-table">
                      <thead>
                        <tr>
                          <th>Permission</th>
                          <th class="text-center">View</th>
                          <th class="text-center">Add</th>
                          <th class="text-center">Edit</th>
                          <th class="text-center">Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Employee</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                         
                        </tr>
                        <tr>
                          <td>Holidays</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                        
                        </tr>
                        <tr>
                          <td>Leaves</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                         
                        </tr>
                        <tr>
                          <td>Events</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          
                        </tr>

                        <tr>
                          <td>Payroll</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          
                        </tr>

                        <tr>
                          <td>Appraisal</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          
                        </tr>

                        <tr>
                          <td>Jobs</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          
                        </tr>

                        <tr>
                          <td>Termination of Service</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          
                        </tr>

                        <tr>
                          <td>Missions</td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          <td class="text-center">
                            <input checked="" type="checkbox">
                          </td>
                          
                        </tr>




                      </tbody>
                    </table>
                  </div>
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Edit Role Modal -->
        
        <!-- Delete Role Modal -->
        <div class="modal custom-modal fade" id="delete_user_role" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete Role</h3>
                  <p>Are you sure want to delete Role?</p>
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
  // import $ from "jquery";
  export default {
    components: {  
    },
    data() {
    return {
      addusercompany: ["Global Technologies", "Delta Infotech"],
      adduserrole: ["Admin", "Client", "Employee"],
      editusercompany: ["Global Technologies", "Delta Infotech"],
      edituserrole: ["Admin", "Client", "Employee"]
    }
    },
    mounted() {
      // axios.get("API_Goes_Here").then((response) => {
      //   this.products = response.data;
      //   $("#datatable").DataTable();
      // });
    },
    name: 'user-roles'
  }
</script>