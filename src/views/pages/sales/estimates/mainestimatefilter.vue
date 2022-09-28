<template>
   <!-- Search Filter -->
          <div class="row filter-row">
            <div class="col-sm-6 col-md-3">  
              <div class="form-group form-focus">
                <div class="cal-icon">
                          <datepicker v-model="startdate"  class="picker1" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                
              </div>
            </div>
            <div class="col-sm-6 col-md-3">  
              <div class="form-group form-focus">
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
            <div class="col-sm-6 col-md-3">
              <div class="add-emp-section">
                <router-link to="/add-estimate" class="btn btn-success btn-add-emp"><i class="fas fa-plus"></i> Add Estimate</router-link>
              </div>
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
      estimatestatus: ["Select Status", "Accepted", "Declined", "Expired"],
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