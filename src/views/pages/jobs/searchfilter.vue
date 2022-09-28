<template>
<!-- Search Filter -->
          <div class="row filter-row">
            <div class="col-sm-6 col-md-3">  
              <div class="form-group form-focus select-focus mb-0">
                <vue-select :options="jobdepartment" />
                <label class="focus-label">Department</label>
              </div>
            </div>
            <div class="col-sm-6 col-md-3">  
              <div class="form-group form-focus select-focus mb-0">
                 <vue-select :options="jobjobtype" />
                <label class="focus-label">Job Type</label>
              </div>
            </div>
            <div class="col-sm-6 col-md-3"> 
              <div class="form-group form-focus select-focus mb-0">
                 <vue-select :options="jobdesignation" />
                <label class="focus-label">Designation</label>
              </div>
            </div>
            <div class="col-sm-6 col-md-3">  
              <a href="#" class="btn btn-success btn-search"><i class="fas fa-search me-2"></i> Search </a>
            </div>
            </div>
          <!-- Search Filter -->
</template>
<script>
  import Vue from 'vue'
  export default {
    data() {
    return {
      jobdepartment: ["Select", "Development", "Designing", "Android"],
      jobjobtype: ["Select", "Full Time", "Part Time", "Internship"],
      jobdesignation: ["Select Designation", "Web Developer", "Web Designer", "Android Developer", "Ios Developer"]
    }
    },
    components: {
   
    },
    mounted() {

    },
  }
</Script>