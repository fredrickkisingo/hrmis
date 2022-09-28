<template>
  <div class="jobview">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
       <!-- Page Wrapper -->
       <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid pb-0">
        
        <headerjobview />
          
        <div class="row">
            <div class="col-md-8">
              <infojobview />
              <contentjobview />
            </div>
            <div class="col-md-4">
             <jobviewcontent />
            </div>
          </div>
        </div>
        <!-- /Page Content -->
        
        <modaljobview />
      
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
    name: 'jobview'
  }
</Script>