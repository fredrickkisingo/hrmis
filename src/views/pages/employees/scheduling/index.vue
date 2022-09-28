<template>
  <div class="shiftscheduling">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
       <!-- Page Wrapper -->
       <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
          
          <!-- Page Header -->
            <div class="row">
              <div class="col-md-12">
              <div class="page-head-box">
                <h3>Daily Scheduling</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
                                    <li class="breadcrumb-item active">Shift Scheduling</li>
                </ul>
            </div>
            </div>                
            </div>
          <!-- /Page Header -->
          
          <!-- Content Starts -->
          <!-- Search Filter -->
          <div class="row filter-row">

            
            <div class="col-sm-6 col-md-2"> 
              <div class="form-group form-focus select-focus">
              <vue-select :options="schedulingdepartment" />
                <label class="focus-label">Department</label>
              </div>
                        </div>
                        <div class="col-sm-6 col-md-2">  
              <div class="form-group form-focus focused">
                <div class="cal-icon">
                          <datepicker v-model="startdate"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                
              </div>
                        </div>
                        <div class="col-sm-6 col-md-2">  
              <div class="form-group form-focus focused">
                <div class="cal-icon">
                          <datepicker v-model="enddate"  class="picker" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                
              </div>
            </div>
            <div class="col-sm-6 col-md-2">
              <a href="#" class="btn btn-success btn-search"><i class="fas fa-search me-2"></i> Search </a>
            </div>
            <div class="col-sm-6 col-md-2">
              <a href="#" class="btn btn-success btn-add-emp w-100" data-bs-toggle="modal" data-bs-target="#add_schedule"> Assign Shifts</a>
            </div>
            <div class="col-sm-6 col-md-2">
              <router-link to="/shift-list" class="btn btn-success btn-add-emp w-100">Shifts</router-link>
            </div>      
                    </div>
          <!-- Search Filter -->

          <schedulingtable />

          <!-- /Content End -->
          
         </div>
        <!-- /Page Content -->
        
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
      schedulingdepartment: ["All Department", "Finance", "Finance and Management", "Hr & Finance", "ITech"],
      startdate: currentDate,
      enddate: currentDate1,
    }
    },
    components: {
   
    },
    mounted() {
    },
    name: 'shiftscheduling'
  }
</Script>