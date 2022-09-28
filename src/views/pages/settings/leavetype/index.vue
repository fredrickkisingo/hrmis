<template>
  <div class="leavetype">
    <div class="main-wrapper">
      <main-header></main-header>
       <sidebar></sidebar>
       <!-- Page Wrapper -->
       <div class="page-wrapper">
            
                <!-- Page Content -->
                <div class="content container-fluid pb-0">

                <div class="row">
                        
                <div class="col-md-12">
                
                    <headerleavetype />

                <div class="row">

                <settingsidebar />
                    
                    <leavetypecontent />


                    </div>

                </div>

                </div>

                </div>
                <!-- /Page Content -->
                
                <modalleavetype />
                
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
    name: 'leavetype'
  }
</Script>