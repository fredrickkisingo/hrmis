<template>
  <div class="subscriptions">
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
                <h3>Subscriptions</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
                  <li class="breadcrumb-item active">Subscriptions</li>
                </ul>
                </div>
              </div>
          </div>
          <!-- /Page Header -->

          <!-- Search Filter -->
          <div class="row filter-row">
            <div class="col-md-8"></div>
            <div class="col-md-4">
              <div class="add-emp-section">
                <a href="#" class="btn btn-success btn-add-emp" data-bs-toggle="modal" data-bs-target="#add_plan"><i class="fas fa-plus"></i> Add Subscription</a>
              </div>
            </div>
          </div>
          <!-- /Search Filter -->
        
          <div class="row">
            <div class="col-lg-10 mx-auto">
            
              <!-- Plan Tab -->
              <div class="row justify-content-center mb-4">
                <div class="col-auto">
                  <nav class="nav btn-group">
                    <a href="#monthly" class="btn btn-outline-secondary active show" data-bs-toggle="tab">Monthly Plan</a>
                    <a href="#annual" class="btn btn-outline-secondary" data-bs-toggle="tab">Annual Plan</a>
                  </nav>
                </div>
              </div>
              <!-- /Plan Tab -->

              <companytable3 />
              
              <companytable4 />

              <companytable5 />
              
            </div>

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
    name: 'subscriptions'
  }
</Script>