<template>
  <div class="employeedashboard">
    <div class="main-wrapper">
       <main-header></main-header>
      <sidebar></sidebar>
       <!-- Page Wrapper -->
            <div class="page-wrapper">
             <div class="content container-fluid pb-0">
             <welcomeheader />
             
             <today />
             <projects />
         
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
    name: 'employeedashboard'
  }
</Script>