<template>
<!-- Add Expense Modal -->
        <div id="add_expense" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add Expense</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <i class="fas fa-times"></i>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Item Name</label>
                        <input class="form-control" type="text">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Purchase From</label>
                        <input class="form-control" type="text">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Purchase Date</label>
                         <div class="cal-icon">
                          <datepicker v-model="startdate"  class="picker1" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Purchased By </label>
                        <vue-select :options="addexpensepurchased" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Amount</label>
                        <input placeholder="$50" class="form-control" type="text">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Paid By</label>
                        <vue-select :options="addexpensepaid" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Status</label>
                        <vue-select :options="addexpensestatus" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Attachments</label>
                        <input class="form-control" type="file">
                      </div>
                    </div>
                  </div>
                  <div class="attach-files">
                    <ul>
                      <li>
                        <img src="../../../../assets/img/placeholder.jpg" alt="">
                        <a href="#" class="fa fa-close file-remove"></a>
                      </li>
                      <li>
                        <img src="../../../../assets/img/placeholder.jpg" alt="">
                        <a href="#" class="fa fa-close file-remove"></a>
                      </li>
                    </ul>
                  </div>
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Add Expense Modal -->
        
        <!-- Edit Expense Modal -->
        <div id="edit_expense" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Expense</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <i class="fas fa-times"></i>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Item Name</label>
                        <input class="form-control" value="Dell Laptop" type="text">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Purchase From</label>
                        <input class="form-control" value="Amazon" type="text">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Purchase Date</label>
                        <div class="cal-icon">
                          <datepicker v-model="enddate"  class="picker1" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Purchased By </label>
                         <vue-select :options="editexpensepurchased" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Amount</label>
                        <input placeholder="$50" class="form-control" value="$10000" type="text">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Paid By</label>
                         <vue-select :options="editexpensepaid" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Status</label>
                        <vue-select :options="editexpensestatus" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Attachments</label>
                        <input class="form-control" type="file">
                      </div>
                    </div>
                  </div>
                  <div class="attach-files">
                    <ul>
                      <li>
                        <img src="../../../../assets/img/placeholder.jpg" alt="">
                        <a href="#" class="fa fa-close file-remove"></a>
                      </li>
                      <li>
                        <img src="../../../../assets/img/placeholder.jpg" alt="">
                        <a href="#" class="fa fa-close file-remove"></a>
                      </li>
                    </ul>
                  </div>
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Edit Expense Modal -->

        <!-- Delete Expense Modal -->
        <div class="modal custom-modal fade" id="delete_expense" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete Expense</h3>
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
        <!-- Delete Expense Modal -->
</template>
<script>
  import Vue from 'vue'
   import { ref } from 'vue'
  const currentDate = ref(new Date())
  const currentDate1 = ref(new Date())
  export default {
    data() {
    return {
      addexpensepurchased: ["Daniel Porter", "Roger Dixon"],
      addexpensepaid: ["Cash", "Cheque"],
      addexpensestatus: ["Pending", "Approved"],
      editexpensepurchased: ["Daniel Porter", "Roger Dixon"],
      editexpensepaid: ["Cash", "Cheque"],
      editexpensestatus: ["Pending", "Approved"],
      startdate: currentDate,
      enddate: currentDate1,
    }
    },
    components: {
   
    },
    mounted() {
    },
  }
</Script>