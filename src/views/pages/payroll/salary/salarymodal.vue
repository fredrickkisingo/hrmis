<template>
 <!-- Add Salary Modal -->
        <div id="add_salary" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add Staff Salary</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                 <i class="fas fa-times"></i>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row"> 
                    <div class="col-sm-6"> 
                      <div class="form-group">
                        <label>Select Staff</label>
                        <vue-select :options="addsalarystaff" />
                      </div>
                    </div>
                    <div class="col-sm-6"> 
                      <label>Net Salary</label>
                      <input class="form-control" type="text">
                    </div>
                  </div>
                  <div class="row"> 
                    <div class="col-sm-6"> 
                      <h4 class="text-primary">Earnings</h4>
                      <div class="form-group">
                        <label>Basic</label>
                        <input class="form-control" type="text">
                      </div>
                      <div class="form-group">
                        <label>DA(40%)</label>
                        <input class="form-control" type="text">
                      </div>
                      <div class="form-group">
                        <label>HRA(15%)</label>
                        <input class="form-control" type="text">
                      </div>
                      <div class="form-group">
                        <label>Conveyance</label>
                        <input class="form-control" type="text">
                      </div>
                      <div class="form-group">
                        <label>Allowance</label>
                        <input class="form-control" type="text">
                      </div>
                      <div class="form-group">
                        <label>Medical  Allowance</label>
                        <input class="form-control" type="text">
                      </div>
                      <div class="form-group">
                        <label>Others</label>
                        <input class="form-control" type="text">
                      </div>
                      <div class="add-more">
                        <a href="#"><i class="fa fa-plus-circle"></i> Add More</a>
                      </div>
                    </div>
                    <div class="col-sm-6">  
                      <h4 class="text-primary">Deductions</h4>
                      <div class="form-group">
                        <label>TDS</label>
                        <input class="form-control" type="text">
                      </div> 
                      <div class="form-group">
                        <label>ESI</label>
                        <input class="form-control" type="text">
                      </div>
                      <div class="form-group">
                        <label>PF</label>
                        <input class="form-control" type="text">
                      </div>
                      <div class="form-group">
                        <label>Leave</label>
                        <input class="form-control" type="text">
                      </div>
                      <div class="form-group">
                        <label>Prof. Tax</label>
                        <input class="form-control" type="text">
                      </div>
                      <div class="form-group">
                        <label>Labour Welfare</label>
                        <input class="form-control" type="text">
                      </div>
                      <div class="form-group">
                        <label>Others</label>
                        <input class="form-control" type="text">
                      </div>
                      <div class="add-more">
                        <a href="#"><i class="fa fa-plus-circle"></i> Add More</a>
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
        <!-- /Add Salary Modal -->
        
        <!-- Edit Salary Modal -->
        <div id="edit_salary" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-md" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Staff Salary</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <i class="fas fa-times"></i>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row"> 
                    <div class="col-sm-6"> 
                      <div class="form-group">
                        <label>Select Staff</label>
                        <vue-select :options="editsalarystaff" />
                      </div>
                    </div>
                    <div class="col-sm-6"> 
                      <label>Net Salary</label>
                      <input class="form-control" type="text" value="$4000">
                    </div>
                  </div>
                  <div class="row"> 
                    <div class="col-sm-6"> 
                      <h4 class="text-primary">Earnings</h4>
                      <div class="form-group">
                        <label>Basic</label>
                        <input class="form-control" type="text" value="$6500">
                      </div>
                      <div class="form-group">
                        <label>DA(40%)</label>
                        <input class="form-control" type="text" value="$2000">
                      </div>
                      <div class="form-group">
                        <label>HRA(15%)</label>
                        <input class="form-control" type="text" value="$700">
                      </div>
                      <div class="form-group">
                        <label>Conveyance</label>
                        <input class="form-control" type="text" value="$70">
                      </div>
                      <div class="form-group">
                        <label>Allowance</label>
                        <input class="form-control" type="text" value="$30">
                      </div>
                      <div class="form-group">
                        <label>Medical  Allowance</label>
                        <input class="form-control" type="text" value="$20">
                      </div>
                      <div class="form-group">
                        <label>Others</label>
                        <input class="form-control" type="text">
                      </div>  
                    </div>
                    <div class="col-sm-6">  
                      <h4 class="text-primary">Deductions</h4>
                      <div class="form-group">
                        <label>TDS</label>
                        <input class="form-control" type="text" value="$300">
                      </div> 
                      <div class="form-group">
                        <label>ESI</label>
                        <input class="form-control" type="text" value="$20">
                      </div>
                      <div class="form-group">
                        <label>PF</label>
                        <input class="form-control" type="text" value="$20">
                      </div>
                      <div class="form-group">
                        <label>Leave</label>
                        <input class="form-control" type="text" value="$250">
                      </div>
                      <div class="form-group">
                        <label>Prof. Tax</label>
                        <input class="form-control" type="text" value="$110">
                      </div>
                      <div class="form-group">
                        <label>Labour Welfare</label>
                        <input class="form-control" type="text" value="$10">
                      </div>
                      <div class="form-group">
                        <label>Fund</label>
                        <input class="form-control" type="text" value="$40">
                      </div>
                      <div class="form-group">
                        <label>Others</label>
                        <input class="form-control" type="text" value="$15">
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
        <!-- /Edit Salary Modal -->
        
        <!-- Delete Salary Modal -->
        <div class="modal custom-modal fade" id="delete_salary" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete Salary</h3>
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
        <!-- /Delete Salary Modal -->
</template>
<script>
  import Vue from 'vue'
  export default {
    data() {
    return {
      addsalarystaff: ["John Doe", "Richard Miles"],
      editsalarystaff: ["John Doe", "Richard Miles"]

    }
    },
    components: {
   
    },
    mounted() {
    },
  }
</Script>