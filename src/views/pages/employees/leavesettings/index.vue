<template>
  <div class="leavesettings">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
       <!-- Page Wrapper -->
       <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
        
        <headerleavesetting />

        <div class="row">
            <div class="col-md-12 col-lg-3">
              <div class="nav flex-column nav-pills" id="pills-sub-tab" role="tablist" aria-orientation="vertical">
                <a class="nav-link active" id="v-pills-leave-tab" data-bs-toggle="pill" href="#v-pills-leave" role="tab" aria-controls="v-pills-leave" aria-selected="true"><i class="fas fa-angle-right"></i> Annual Leave</a>
                <a class="nav-link" id="v-pills-sick-tab" data-bs-toggle="pill" href="#v-pills-sick" role="tab" aria-controls="v-pills-sick" aria-selected="false"><i class="fas fa-angle-right"></i> Sick</a>
                <a class="nav-link" id="v-pills-hsp-tab" data-bs-toggle="pill" href="#v-pills-hsp" role="tab" aria-controls="v-pills-hsp" aria-selected="false"><i class="fas fa-angle-right"></i> Hospitalisation</a>
                <a class="nav-link" id="v-pills-maternity-tab" data-bs-toggle="pill" href="#v-pills-maternity" role="tab" aria-controls="v-pills-maternity" aria-selected="false"><i class="fas fa-angle-right"></i> Maternity</a>
                <a class="nav-link" id="v-pills-paternity-tab" data-bs-toggle="pill" href="#v-pills-paternity" role="tab" aria-controls="v-pills-paternity" aria-selected="false"><i class="fas fa-angle-right"></i> Paternity</a>
                <a class="nav-link" id="v-pills-lop-tab" data-bs-toggle="pill" href="#v-pills-lop" role="tab" aria-controls="v-pills-lop" aria-selected="false"><i class="fas fa-angle-right"></i> LOP</a>
              </div>
            </div>
          
            <div class="col-md-12 col-lg-9">
            
              <annualleavesetting />
              
            </div>
          </div>
            
        </div>
        <!-- /Page Content -->
        
        <modalleavesetting />
        
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
    name: 'leavesettings'
  }
</Script>