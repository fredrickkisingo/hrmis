<template>

<!-- Search Filter -->
          <div class="row filter-row">
            <div class="col-sm-6 col-md-3"> 
              <div class="form-group form-focus select-focus mb-0">
                <vue-select :options="assetfilter" />
                <label class="focus-label">Status</label>
              </div>
            </div>
            <div class="col-sm-12 col-md-4">  
               <div class="row">  
                 <div class="col-md-6 col-sm-6">  
                  <div class="form-group form-focus mb-0">
                    <div class="cal-icon">
                          <datepicker v-model="startdate"  class="picker1" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                    
                  </div>
                </div>
                 <div class="col-md-6 col-sm-6">  
                  <div class="form-group form-focus mb-0">
                    <div class="cal-icon">
                          <datepicker v-model="enddate"  class="picker1" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-2">  
              <a href="#" class="btn btn-success btn-search"><i class="fas fa-search me-2"></i> Search </a>
            </div>
            <div class="col-sm-6 col-md-3">
              <div class="add-emp-section">
                <a href="#" class="btn btn-success btn-add-emp" data-bs-toggle="modal" data-bs-target="#add_asset"><i class="fas fa-plus"></i> Add Asset</a>
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
      assetfilter: ["-- Select -- ", "Pending", "Approved", "Returned"],
      startdate: currentDate,
      enddate: currentDate1,
    }
    },
    components: {
   
    },
    mounted() {
    }
  }
</Script>