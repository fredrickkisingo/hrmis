<template>
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
                        <vue-select :options="jobdetailsdepartment" />
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
                         <vue-select :options="jobdetailsjobtype" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Status</label>
                         <vue-select :options="jobdetailsstatus" />
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
                    <button class="btn btn-primary submit-btn">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- /Edit Job Modal -->
</template>
<script>
  import Vue from 'vue'
  import { ref } from 'vue'
  const currentDate = ref(new Date())
  const currentDate1 = ref(new Date())
  export default {
    data() {
    return {
      jobdetailsdepartment: ["-", "Web Development", "Application Development", "IT Management", "Accounts Management", "Support Management", "Marketing"],
      jobdetailsjobtype: ["Full Time", "Part Time", "Internship", "Temporary", "Remote", "Others"],
      jobdetailsstatus: ["Open", "Closed", "Cancelled"],
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