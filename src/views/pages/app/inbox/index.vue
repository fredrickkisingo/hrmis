<template>
  <div class="inbox">
    <div class="main-wrapper">
       <main-header></main-header>
       <sidebar></sidebar>
       <!-- Page Wrapper -->
       <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
        
        <headerinbox />

        <div class="row">
            
        <inboxsidebar />
          
        <inboxcontent />

        </div>
        
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
    name: 'inbox'
  }
</Script>