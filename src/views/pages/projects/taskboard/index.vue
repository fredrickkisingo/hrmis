<template>
  <div class="taskboard">
    <div class="main-wrapper">
      <main-header></main-header>

      <sidebar></sidebar>
       <!-- Page Wrapper -->
       <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container">
        
          <!-- Page Header -->
            <div class="row">
              <div class="col-md-12">
              <div class="page-head-box">
                <h3>Task Board</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
                  <li class="breadcrumb-item active">Task Board</li>
                </ul>
                </div>
              </div>
            </div>
          <!-- /Page Header -->
          
          <taskboardetail />
          
        </div>
        <!-- /Page Content -->
        
      <taskboardmodal />
        
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
    name: 'taskboard'
  }
</Script>