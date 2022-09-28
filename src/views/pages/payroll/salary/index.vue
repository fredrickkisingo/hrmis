<template>
  <div class="salary">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
       <!-- Page Wrapper -->
       <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
        
          <!-- Page Header -->
            <div class="row align-items-center">
              <div class="col-md-12">
              <div class="page-head-box">
                <h3>Employee Salary</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
                  <li class="breadcrumb-item active">Salary</li>
                </ul>
                </div>
              </div>
            </div>
          <!-- /Page Header -->
          
          <!-- Search Filter -->
          <div class="row filter-row">
             <div class="col-sm-6 col-md-2">  
              <div class="form-group form-focus">
                <input type="text" class="form-control floating">
                <label class="focus-label">Employee Name</label>
              </div>
             </div>
             <div class="col-sm-6 col-md-2">  
              <div class="form-group form-focus select-focus">
              <vue-select :options="salaryrole" />
              <label class="focus-label">Role</label>
              </div>
             </div>
             <div class="col-sm-6 col-md-2">  
              <div class="form-group form-focus">
                <div class="cal-icon">
                          <datepicker v-model="startdate"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                    </div>
              </div>
            </div>
             <div class="col-sm-6 col-md-2">  
              <div class="form-group form-focus">
                <div class="cal-icon">
                          <datepicker v-model="enddate"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                    </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">  
              <a href="#" class="btn btn-success w-100"> Search </a>  
            </div>    
            <div class="col-sm-6 col-md-2">
              <a href="#" class="btn btn-success btn-search"><i class="fas fa-search me-2"></i> Search </a>
            </div>
            <div class="col-sm-6 col-md-2">
              <a href="#" class="btn btn-success btn-add-emp w-100" data-bs-toggle="modal" data-bs-target="#add_salary">Add Salary</a>
            </div>  
                    </div>
          <!-- /Search Filter -->
          
          <div class="row">
          <salarytable />
          </div>
        </div>
        <!-- /Page Content -->
        
       <salarymodal />
        
      </div>
      <!-- /Page Wrapper -->
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { ref } from 'vue'
  const currentDate = ref(new Date())
  const currentDate1 = ref(new Date())
  export default {
  data() {
    return {
      salaryrole: ["-- Select --", "Employee", "Manager"],
      salarystatus: ["-- Select --", "Pending", "Approved", "Rejected"],
      startdate: currentDate,
      enddate: currentDate1,
    }
    },
    components: {
   
    },
    mounted() {
    },
    name: 'salary'
  }
</Script>