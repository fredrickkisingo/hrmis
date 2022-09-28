<template>
  <div class="cronsetting">
    <div class="main-wrapper">
      <main-header></main-header>
       <sidebar></sidebar>
      <!-- Page Wrapper -->
            <div class="page-wrapper">
                <div class="content container-fluid">
                    <div class="row">

                        <div class="col-md-12">
                        
                        <cronsettingheader /> 
                        
                        </div>

                    </div>

                    <div class="row">

                    <settingsidebar />

                    <cronsettingform />

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
    name: 'cronsetting'
  }
</Script>