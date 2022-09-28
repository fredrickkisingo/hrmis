<template>
<!-- Search Filter -->
          <div class="row filter-row">
          <div class="col-md-8">
          <div class="row">
            <div class="col-sm-6 col-md-3">  
              <div class="form-group form-focus mb-0">
                <input type="text" class="form-control floating">
                <label class="focus-label">Employee ID</label>
              </div>
            </div>
            <div class="col-sm-6 col-md-3">  
              <div class="form-group form-focus mb-0">
                <input type="text" class="form-control floating">
                <label class="focus-label">Employee Name</label>
              </div>
            </div>
            <div class="col-sm-6 col-md-3"> 
              <div class="form-group form-focus select-focus mb-0">
                <vue-select :options="designationemployeefilter" />
                <label class="focus-label">Designation</label>
              </div>
            </div>
            <div class="col-sm-6 col-md-3">  
                  <a href="#" class="btn btn-success btn-search"><i class="fas fa-search me-2"></i> Search </a>
            </div>
            </div>
            </div>
            <div class="col-md-4">
              <div class="add-emp-section">
                <router-link to="/employees" class="grid-icon active"><i class="fas fa-th"></i></router-link>
                <router-link to="/employees-list" class="list-icon"><i class="fas fa-bars"></i></router-link>
                <a href="#" class="btn btn-success btn-add-emp" data-bs-toggle="modal" data-bs-target="#add_employee"><i class="fas fa-plus"></i> Add Employee</a>
              </div>
            </div>
            </div>
          <!-- Search Filter -->
</template>
<script>
  import Vue from 'vue'
  export default {
     data() {
    return {
      designationemployeefilter: ["Select Designation", "Web Developer", "Web Designer", "Android Developer", "Ios Developer"]
    }
    },
    components: {
   
    },
    mounted() {
    }
  }
</Script>