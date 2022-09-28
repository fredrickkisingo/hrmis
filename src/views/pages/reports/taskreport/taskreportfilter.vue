<template>
<div class="row filter-row">
            <div class="col-sm-6 col-md-4">  
              <div class="form-group form-focus mb-0">
               <vue-select :options="taskreportprojectname" />
              </div>
            </div>
            <div class="col-sm-6 col-md-4">  
              <div class="form-group form-focus mb-0">
              <vue-select :options="taskreportstatus" />
              </div>
            </div>
            <div class="col-sm-6 col-md-4">  
              <a href="#" class="btn btn-success btn-search"><i class="fas fa-search me-2"></i> Search </a>  
            </div>     
          </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    data() {
    return {
      taskreportprojectname: ["Name1", "Name2"],
      taskreportstatus: ["All", "Pending", "Completed"]
    }
    },
    components: {
   
    },
    mounted() {
    },
  }
</Script>