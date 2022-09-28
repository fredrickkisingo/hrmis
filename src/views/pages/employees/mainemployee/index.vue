<template>
  <div class="employees">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
       <!-- Page Wrapper -->
       <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
        
         <employeeheader />
          
         <employeefilter />
          
         <employeecontent />
         </div>
        <!-- /Page Content -->
        
         <employeemodal />
        
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
    name: 'employees'
  }
</Script>