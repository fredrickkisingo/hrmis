<template>
  <!-- Search Filter -->
          <div class="row filter-row">
            
            <div class="col-sm-6 col-md-4">  
              <div class="form-group form-focus">
                <div class="cal-icon">
                          <datepicker v-model="startdate"  class="picker1" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                
              </div>
            </div>
            <div class="col-sm-6 col-md-4">  
              <div class="form-group form-focus">
                <div class="cal-icon">
                          <datepicker v-model="enddate"  class="picker1" 
                          :editable="true"
                          :clearable="false" />
                    </div>
               
              </div>
            </div>
             <div class="col-sm-6 col-md-4">  
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