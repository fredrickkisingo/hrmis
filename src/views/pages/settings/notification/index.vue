<template>
  <div class="notificationssettings">
    <div class="main-wrapper">
     <main-header></main-header>

       <sidebar></sidebar>
      <!-- Page Wrapper -->
            <div class="page-wrapper">
            
                <!-- Page Content -->
                <div class="content container-fluid pb-0">
                    <div class="row">
                        <div class="col-md-12">
                            
                            <headernotification />
                            
                            <div class="row">

                            <settingsidebar />
                            
                            <notificationcontent />

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
    name: 'notificationssettings'
  }
</Script>