<template>
  <div class="emailsettings">
    <div class="main-wrapper">
      <main-header></main-header>
       <sidebar></sidebar>
       <!-- Page Wrapper -->
            <div class="page-wrapper">
            
                <!-- Page Content -->
                <div class="content container-fluid pb-0">
                    <div class="row">
                        <div class="col-md-12">
                        <!-- Page Header -->
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="page-head-box">
                                        <h3>Email Settings</h3>
                                        <nav aria-label="breadcrumb">
                                            <ol class="breadcrumb">
                                                <li class="breadcrumb-item"><router-link to="/settings">Settings</router-link></li>
                                                <li class="breadcrumb-item active" aria-current="page">Email Settings</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <!-- /Page Header -->
                        <div class="row">

                        <settingsidebar />

                        <emailform />
                        
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
    name: 'emailsettings'
  }
</Script>