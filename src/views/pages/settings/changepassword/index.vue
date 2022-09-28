<template>
  <div class="change-password">
    <div class="main-wrapper">
       <main-header></main-header>
       <sidebar></sidebar>
       <!-- Page Wrapper -->
            <div class="page-wrapper">
                <div class="content container-fluid pb-0">
                    <div class="row">
                        <div class="col-md-12">
                        
                        <changepasswordheader /> 

                        <div class="row">

                        <settingsidebar />
                        
                        <formchangepassword /> 

                        </div>      
                            
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
    name: 'change-password'
  }
</Script>