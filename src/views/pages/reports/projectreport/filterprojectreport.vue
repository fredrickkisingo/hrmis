<template>
    <!-- Search Filter -->
          <div class="row filter-row">
            
            <div class="col-sm-6 col-md-4">  
              <div class="form-group form-focus mb-0">
                  <vue-select :options="projectreportname" />
                <label class="focus-label">Project Name</label>
              </div>
            </div>
            <div class="col-sm-6 col-md-4">  
              <div class="form-group form-focus mb-0">
                  <vue-select :options="projectreportstatus" />
                <label class="focus-label">Status</label>
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
  export default {
    data() {
    return {
      projectreportname: ["Name1", "Name1"],
      projectreportstatus: ["Active", "Pending"]
    }
    },
    components: {
   
    },
    mounted() {
    },
  }
</Script>