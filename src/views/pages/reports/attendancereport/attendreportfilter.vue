<template>
  <!-- Search Filter -->
          <div class="row filter-row">
            
            <div class="col-sm-6 col-md-3"> 
              <div class="form-group form-focus select-focus mb-0">
              <vue-select :options="departmentreport" />
                <label class="focus-label">Department</label>
              </div>
            </div>
            <div class="col-sm-6 col-md-3">  
              <div class="form-group form-focus mb-0">
                <div class="cal-icon">
                          <datepicker v-model="startdate"  class="picker1" 
                          :editable="true"
                          :clearable="false" />
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-3">  
              <div class="form-group form-focus mb-0">
                <div class="cal-icon">
                          <datepicker v-model="enddate"  class="picker1" 
                          :editable="true"
                          :clearable="false" />
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-md-3">  
              <a href="#" class="btn btn-success btn-search"><i class="fas fa-search me-2"></i> Search </a>
            </div>     
          </div>
          <!-- /Search Filter -->
</template>
<script>
  import Vue from 'vue'
  import { ref } from 'vue'
  const currentDate = ref(new Date())
  const currentDate1 = ref(new Date())
  export default {
    data() {
    return {
      monthattendancereport: ["Jan", "Feb", "Mar"],
      yearattendancereport: ["2020", "2019", "2018"],
      departmentreport: ["Select Department", "Designing", "Development", "Finance", "Hr & Finance"],
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