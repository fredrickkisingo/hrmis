<template>
  <div class="userreports">
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
                <h3>User Reports</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
                  <li class="breadcrumb-item active">User Reports</li>
                </ul>
                </div>
              </div>
            </div>
          <!-- /Page Header -->
          
          <!-- Content Starts -->

          <!-- Search Filter -->

          <div class="row filter-row">
            
            <div class="col-sm-6 col-md-3">  
              <div class="form-group form-focus mb-0">
                
                <vue-select :options="userrole" />
                
                <label class="focus-label">User Role</label>
              </div>
            </div>
          
            <div class="col-sm-6 col-md-3">  
              <a href="#" class="btn btn-success btn-search"><i class="fas fa-search me-2"></i> Search </a>
            </div>

          </div>
          <!-- /Search Filter -->
          
          <tableuserreport />
                
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
  export default {
    components: {   
    },
    data() {
    return {
      userrole: ["Name1", "Name1"]
    }
    },
    mounted() {
    },
    name: 'userreports'
  }
</Script>