<template>
<!-- Add Job Modal -->
        <div id="add_job" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add Job</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                 <i class="fas fa-times"></i>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Job Title</label>
                        <input class="form-control" type="text">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Department</label>
                        <vue-select :options="addmainjobdepartment" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Job Location</label>
                        <input class="form-control" type="text">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>No of Vacancies</label>
                        <input class="form-control" type="text">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Experience</label>
                        <input class="form-control" type="text">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Age</label>
                        <input class="form-control" type="text">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Salary From</label>
                        <input type="text" class="form-control">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Salary To</label>
                        <input type="text" class="form-control">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Job Type</label>
                        <vue-select :options="addmainjobjobtype" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Status</label>
                        <vue-select :options="addmainjobstatus" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Start Date</label>
                        <div class="cal-icon">
                          <datepicker v-model="startdate"  class="picker1" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Expired Date</label>
                        <div class="cal-icon">
                          <datepicker v-model="enddate"  class="picker1" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Description</label>
                        <textarea class="form-control"></textarea>
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
        <!-- /Add Job Modal -->
        
        <!-- Edit Job Modal -->
        <div id="edit_job" class="modal custom-modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <button type="button" class="close" data-bs-dismiss="modal">&times;</button>
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Edit Job</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <i class="fas fa-times"></i>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Job Title</label>
                        <input class="form-control" type="text" value="Web Developer">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Department</label>
                        <vue-select :options="editmainjobdepartment" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Job Location</label>
                        <input class="form-control" type="text" value="California">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>No of Vacancies</label>
                        <input class="form-control" type="text" value="5">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Experience</label>
                        <input class="form-control" type="text" value="2 Years">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Age</label>
                        <input class="form-control" type="text" value="-">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Salary From</label>
                        <input type="text" class="form-control" value="32k">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Salary To</label>
                        <input type="text" class="form-control" value="38k">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Job Type</label>
                        <vue-select :options="editmainjobjobtype" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Status</label>
                        <vue-select :options="editmainjobstatus" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Start Date</label>
                        <div class="cal-icon">
                          <datepicker v-model="startdate1"  class="picker1" 
                          :editable="true"
                          :clearable="false" />
                      </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Expired Date</label>
                        <div class="cal-icon">
                          <datepicker v-model="enddate1"  class="picker1" 
                          :editable="true"
                          :clearable="false" />
                     </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Description</label>
                        <textarea class="form-control"></textarea>
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
        <!-- /Edit Job Modal -->

        <!-- Delete Job Modal -->
        <div class="modal custom-modal fade" id="delete_job" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-header">
                  <h3>Delete Job</h3>
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
        <!-- /Delete Job Modal -->
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
      addmainjobdepartment: ["-", "Web Development", "Application Development", "IT Management", "Accounts Management", "Support Management", "Marketing"],
      addmainjobjobtype: ["Full Time", "Part Time", "Internship", "Temporary", "Remote", "Others"],
      addmainjobstatus: ["Open", "Closed", "Cancelled"],
      editmainjobdepartment: ["-", "Web Development", "Application Development", "IT Management", "Accounts Management", "Support Management", "Marketing"],
      editmainjobjobtype: ["Full Time", "Part Time", "Internship", "Temporary", "Remote", "Others"],
      editmainjobstatus: ["Open", "Closed", "Cancelled"],
      startdate: currentDate,
      enddate: currentDate1,
      startdate1: currentDate2,
      enddate1: currentDate3,
    }
    },
    components: {
   
    },
    mounted() {
    },
  }
</Script>