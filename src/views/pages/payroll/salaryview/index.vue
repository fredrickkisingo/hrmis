<template>
  <div class="salaryview">
    <div class="main-wrapper">
       <main-header></main-header>
      <sidebar></sidebar>
       <!-- Page Wrapper -->
       <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid pb-0">
        
          <!-- Page Header -->
            <div class="row">
              <div class="col-md-12">
              <div class="page-head-box">
                <h3>Payslip</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
                  <li class="breadcrumb-item active">Payslip</li>
                </ul>
                </div>
              </div>
            </div>
          <!-- /Page Header -->

          <!-- Print Section -->
          <div class="page-header">
            <div class="row align-items-center">
              <div class="col-auto float-end ms-auto">
                <div class="btn-group btn-group-sm">
                  <button class="btn btn-white">CSV</button>
                  <button class="btn btn-white">PDF</button>
                  <button class="btn btn-white"><i class="fa fa-print fa-lg"></i> Print</button>
                </div>
              </div>
            </div>
          </div>
          <!-- /Print Section -->
          
          <salaryviewtable />

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
    name: 'salaryview'
  }
</Script>