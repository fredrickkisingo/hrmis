<template>
  <div class="tickets">
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
                <h3>Tickets</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
                  <li class="breadcrumb-item active">Tickets</li>
                </ul>
                </div>
              </div>
            </div>
          <!-- /Page Header -->
          
          <mainwidget />
          
          <mainfilter />
          
          <maintable />
                
        </div>
        <!-- /Page Content -->
        
        <mainticketmodal />
        
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
    name: 'tickets'
  }
</Script>