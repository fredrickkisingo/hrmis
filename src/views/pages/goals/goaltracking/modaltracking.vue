<template>
 <!-- Add Goal Modal -->
        <div id="add_goal" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add Goal Tracking</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <i class="fas fa-times"></i>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Goal Type</label>
                        <vue-select :options="addgoaltype" />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="col-form-label">Subject</label>
                        <input class="form-control" type="text">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="col-form-label">Target Achievement</label>
                        <input class="form-control" type="text">
                      </div>
                    </div>
                    
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Start Date <span class="text-danger">*</span></label>
                        <div class="cal-icon">
                          <datepicker v-model="startdate"  class="picker1" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>End Date <span class="text-danger">*</span></label>
                        <div class="cal-icon">
                          <datepicker v-model="enddate"  class="picker1" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                      </div>
                    </div>
                    
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label>Description <span class="text-danger">*</span></label>
                        <textarea class="form-control" rows="4"></textarea>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Status</label>
                        <vue-select :options="editgoalstatus" />
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
        <!-- /Add Goal Modal -->
        
        <!-- Edit Goal Modal -->
        <div id="edit_goal" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Goal Tracking</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                 <i class="fas fa-times"></i>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Goal Type</label>
                        <vue-select :options="addgoaltype" />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="col-form-label">Subject</label>
                        <input class="form-control" type="text" value="Test Goal">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="col-form-label">Target Achievement</label>
                        <input class="form-control" type="text" value="Lorem ipsum dollar">
                      </div>
                    </div>
                    
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Start Date <span class="text-danger">*</span></label>
                        <div class="cal-icon">
                          <datepicker v-model="startdate1"  class="picker1" 
                          :editable="true"
                          :clearable="false" />
                      </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>End Date <span class="text-danger">*</span></label>
                        <div class="cal-icon">
                          <datepicker v-model="enddate1"  class="picker1" 
                          :editable="true"
                          :clearable="false" />
                     </div>
                      </div>
                    </div>
                    <div class="col-sm-12 mb-3">
                      <div class="form-group">
                        <label for="customRange">Progress</label>
                        <input type="range" class="form-control-range form-range" id="customRange">
                        <div class="mt-2" id="result">Progress Value: <b></b></div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label>Description <span class="text-danger">*</span></label>
                        <textarea class="form-control" rows="4">Lorem ipsum dollar</textarea>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label class="col-form-label">Status</label>
                        <vue-select :options="editgoalstatus" />
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
        <!-- /Edit Goal Modal -->
        
        <!-- Delete Goal Modal -->
        <div class="modal custom-modal fade" id="delete_goal" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete Goal Tracking List</h3>
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
        <!-- /Delete Goal Modal -->
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
      addgoaltype: ["Invoice Goal", "Event Goal"],
      addgoalstatus: ["Active", "Inactive"],
      editgoaltype: ["Invoice Goal", "Event Goal"],
      editgoalstatus: ["Active", "Inactive"],
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