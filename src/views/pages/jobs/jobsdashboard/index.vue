<template>
  <div class="jobsdashboard">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
       <!-- Page Wrapper -->
       <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid pb-0">
        
        <headerjobdashboard />
        
        <widgetjob />
          
          <div class="row">
            <div class="col-md-12 jb-dashboard">
              <div class="row">
                <overviewjobdashboard />
                <latestjobdashboard />
              </div>
            </div>
          </div>

          
          <jobapplicantlist />
          
          <jobshortlistcandidate />

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
    name: 'jobsdashboard'
  }
</Script>