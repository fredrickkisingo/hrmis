<template>
  <div class="resignation">
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
                <h3>Resignation</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
                  <li class="breadcrumb-item active">Resignation</li>
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
                <a href="#" class="btn btn-success btn-add-emp" data-bs-toggle="modal" data-bs-target="#add_resignation"><i class="fas fa-plus"></i> Add Resignation</a>
              </div>
            </div>
          </div>
          <!-- /Search Filter -->
          
          <resinationtab />

        </div>
        <!-- /Page Content -->

        <modresignation />
      
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
    name: 'resignation'
  }
</Script>