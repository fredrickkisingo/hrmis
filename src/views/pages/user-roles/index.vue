<template>
    <div class="user-roles">
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
                  <h3>User Roles</h3>
                  <ul class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/">Dashboard</router-link></li>
                    <li class="breadcrumb-item active">User Roles</li>
                  </ul>
                  </div>
                </div>
              </div>
            <!-- /Page Header -->
            
            <!-- Search Filter -->
            <div class="row filter-row">
             
              <div class="col-sm-6 col-md-3"> 
                <div class="form-group form-focus select-focus mb-0">
                  <vue-select :options="userroll" />
                  <label class="focus-label">Role</label>
                </div>
              </div>
              <div class="col-sm-6 col-md-3">
                <a href="#" class="btn btn-success btn-search"><i class="fas fa-search me-2"></i> Search </a>
              </div>
              <div class="col-sm-6 col-md-3">
                <div class="add-emp-section">
                  <a href="#" class="btn btn-success btn-add-emp" data-bs-toggle="modal" data-bs-target="#add_user_role"><i class="fas fa-plus"></i> Add Role</a>
                </div>
              </div> 
                  
            </div>
            <!-- /Search Filter -->
            
            <userroles/>
  
          </div>
          <!-- /Page Content -->
          
          <userrolemodal />
          
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
      data() {
      return {
        userroll: ["Select Role", "Accountant", "Manager"]
      }
      },
      mounted() {
      },
    }
  </script>