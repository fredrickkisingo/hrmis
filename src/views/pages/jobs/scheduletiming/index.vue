<template>
  <div class="scheduletiming">
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
                <h3>Schedule timing</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
                  <li class="breadcrumb-item active">Schedule timing</li>
                </ul>
                </div>
              </div>
            </div>
          <!-- /Page Header -->
          
          <scheduletable />
                
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
    name: 'scheduletiming'
  }
</Script>