<template>
<!-- Add Leave Modal -->
        <div id="add_leave" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add Leave</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <i class="fas fa-times"></i>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label>Leave Type <span class="text-danger">*</span></label>
                    <vue-select :options="addleaveemployee" />
                  </div>
                  <div class="form-group">
                    <label>From <span class="text-danger">*</span></label>
                    <div class="cal-icon">
                          <datepicker v-model="startdate"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                  </div>
                  <div class="form-group">
                    <label>To <span class="text-danger">*</span></label>
                     <div class="cal-icon">
                          <datepicker v-model="enddate"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Number of days <span class="text-danger">*</span></label>
                    <input class="form-control" readonly type="text">
                  </div>
                  <div class="form-group">
                    <label>Remaining Leaves <span class="text-danger">*</span></label>
                    <input class="form-control" readonly value="12" type="text">
                  </div>
                  <div class="form-group">
                    <label>Leave Reason <span class="text-danger">*</span></label>
                    <textarea rows="4" class="form-control"></textarea>
                  </div>
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Add Leave Modal -->
        
        <!-- Edit Leave Modal -->
        <div id="edit_leave" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Leave</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                 <i class="fas fa-times"></i>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label>Leave Type <span class="text-danger">*</span></label>
                    <vue-select :options="editcasualleave" />
                  </div>
                  <div class="form-group">
                    <label>From <span class="text-danger">*</span></label>
                     <div class="cal-icon">
                          <datepicker v-model="startdate1"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                      </div>
                  </div>
                  <div class="form-group">
                    <label>To <span class="text-danger">*</span></label>
                     <div class="cal-icon">
                          <datepicker v-model="enddate1"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                     </div>
                  </div>
                  <div class="form-group">
                    <label>Number of days <span class="text-danger">*</span></label>
                    <input class="form-control" readonly type="text" value="2">
                  </div>
                  <div class="form-group">
                    <label>Remaining Leaves <span class="text-danger">*</span></label>
                    <input class="form-control" readonly value="12" type="text">
                  </div>
                  <div class="form-group">
                    <label>Leave Reason <span class="text-danger">*</span></label>
                    <textarea rows="4" class="form-control">Going to hospital</textarea>
                  </div>
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Edit Leave Modal -->
        
        <!-- Delete Leave Modal -->
        <div class="modal custom-modal fade" id="delete_approve" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete Leave</h3>
                  <p>Are you sure want to Cancel this leave?</p>
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
        <!-- /Delete Leave Modal -->
</template>
<script>
  import Vue from 'vue'
  import { ref } from 'vue'
  const currentDate = ref(new Date())
  const currentDate1 = ref(new Date())
  const currentDate2 = ref(new Date())
  const currentDate3 = ref(new Date())
  export default {
     data() {
    return {
      addleaveemployee: ["Select Leave Type", "Casual Leave 12 Days", "Medical Leave", "Loss of Pay"],
      editcasualleave: ["Select Leave Type", "Casual Leave 12 Days"],
      startdate: currentDate,
      enddate: currentDate1,
      startdate1: currentDate2,
      enddate1: currentDate3,

    }
    },
    components: {
   
    },
    mounted() {
    }
  }
</Script>