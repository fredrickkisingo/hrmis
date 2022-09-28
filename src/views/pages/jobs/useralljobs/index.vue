<template>
  <div class="useralljobs">
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
                <h3>All Jobs</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
                  <li class="breadcrumb-item active">All Jobs</li>
                </ul>
                </div>
              </div>
            </div>
          <!-- /Page Header -->
          
          <!-- Content Starts -->
          
          <jobheader /> 
          
          <searchfilter />
  
          <useralljobtable />
        
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
    mounted() {
    },
    name: 'useralljobs'
  }
</Script>