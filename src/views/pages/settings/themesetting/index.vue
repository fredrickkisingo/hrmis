<template>
  <div class="themesettings">
    <div class="main-wrapper">
      <main-header></main-header>
       <sidebar></sidebar>
       <!-- Page Wrapper -->
        <div class="page-wrapper">
            
                <!-- Page Content -->
                <div class="content container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                        
                            <!-- Page Header -->
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="page-head-box">
                                        <h3>Theme Settings</h3>
                                        <nav aria-label="breadcrumb">
                                            <ol class="breadcrumb">
                                                <li class="breadcrumb-item"><router-link to="/settings">Settings</router-link></li>
                                                <li class="breadcrumb-item active" aria-current="page">Theme Settings</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <!-- /Page Header -->

                            <div class="row">

                            <settingsidebar />

                            <div class="col-md-8 col-lg-9 settings-cont">

                            <div class="card p-4">

                             <form>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label">Website Name</label>
                                    <div class="col-lg-9">
                                        <input name="website_name" class="form-control" value="Dreamguy's Technologies" type="text">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label">Light Logo</label>
                                    <div class="col-lg-7">
                                        <input type="file" class="form-control">
                                        <span class="form-text text-muted">Recommended image size is 40px x 40px</span>
                                    </div>
                                    <div class="col-lg-2">
                                        <div class="img-thumbnail float-end"><img src="../../../../assets/img/logo2.png" alt="" width="40" height="40"></div>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-3 col-form-label">Favicon</label>
                                    <div class="col-lg-7">
                                        <input type="file" class="form-control">
                                        <span class="form-text text-muted">Recommended image size is 16px x 16px</span>
                                    </div>
                                    <div class="col-lg-2">
                                        <div class="settings-image img-thumbnail float-end"><img src="../../../../assets/img/logo2.png" class="img-fluid" width="16" height="16" alt=""></div>
                                    </div>
                                </div>
                                <div class="submit-section">
                                    <button class="btn btn-primary submit-btn">Save</button>
                                </div>

                            </form>

                            </div>

                            </div>

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
    name: 'themesettings'
  }
</Script>