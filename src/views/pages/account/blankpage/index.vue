<template>
  <div class="blankpage">
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
                <h3>Blank Page</h3>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
                    <li class="breadcrumb-item active" aria-current="page">Blank Page</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <!-- /Page Header -->
          
          <!-- Content Starts -->
            Content Starts Here
          <!-- /Content End -->
          
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
    name: 'blankpage'
  }
</Script>