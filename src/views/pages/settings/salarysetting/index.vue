<template>
  <div class="salarysettings">
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
                                        <h3>Salary Settings</h3>
                                        <nav aria-label="breadcrumb">
                                            <ol class="breadcrumb">
                                                <li class="breadcrumb-item"><router-link to="/settings">Settings</router-link></li>
                                                <li class="breadcrumb-item active" aria-current="page">Salary Settings</li>
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
                                
                                <!-- DA and HRA Settings -->
                                <div class="settings-widget">
                                    <div class="h3 card-title with-switch">
                                        DA and HRA                                          
                                        <div class="onoffswitch">
                                            <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="switch_hra" checked>
                                            <label class="onoffswitch-label" for="switch_hra">
                                                <span class="onoffswitch-inner"></span>
                                                <span class="onoffswitch-switch"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label>DA (%)</label>
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label>HRA (%)</label>
                                                <input class="form-control" type="text">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- /DA and HRA Settings -->
                                
                                <!-- Provident Fund Settings -->
                                <div class="settings-widget">
                                    <div class="h3 card-title with-switch">
                                        Provident Fund Settings                                             
                                        <div class="onoffswitch">
                                            <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="switch_pf" checked>
                                            <label class="onoffswitch-label" for="switch_pf">
                                                <span class="onoffswitch-inner"></span>
                                                <span class="onoffswitch-switch"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label>Employee Share (%)</label>
                                                <input class="form-control" type="text">
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label>Organization Share (%)</label>
                                                <input class="form-control" type="text">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- /Provident Fund Settings -->
                                
                                <!-- ESI Settings -->
                                <div class="settings-widget">
                                    <div class="h3 card-title with-switch">
                                        ESI Settings                                            
                                        <div class="onoffswitch">
                                            <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="switch_esi">
                                            <label class="onoffswitch-label" for="switch_esi">
                                                <span class="onoffswitch-inner"></span>
                                                <span class="onoffswitch-switch"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label>Employee Share (%)</label>
                                                <input class="form-control" type="text">
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label>Organization Share (%)</label>
                                                <input class="form-control" type="text">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- /ESI Settings -->
                                
                                <!-- TDS Settings -->
                                <div class="settings-widget">
                                    <div class="h3 card-title with-switch">
                                        TDS&nbsp; <small class="form-text text-muted">Annual Salary</small>
                                        <div class="onoffswitch">
                                            <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="switch_tds">
                                            <label class="onoffswitch-label" for="switch_tds">
                                                <span class="onoffswitch-inner"></span>
                                                <span class="onoffswitch-switch"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="row row-sm">
                                        <div class="col-sm-4">
                                            <div class="form-group">
                                                <label>Salary From</label>
                                                <input class="form-control" type="text">
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="form-group">
                                                <label>Salary To</label>
                                                <input class="form-control" type="text">
                                            </div>
                                        </div>
                                        <div class="col-sm-2">
                                            <div class="form-group">
                                                <label>%</label>
                                                <input class="form-control" type="text">
                                            </div>
                                        </div>
                                        <div class="col-sm-2">
                                            <div class="form-group">
                                                <label class="d-none d-sm-block">&nbsp;</label>
                                                <button class="btn btn-danger w-100 set-btn" type="button"><i class="fa fa-trash-o"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row row-sm">
                                        <div class="col-sm-4">
                                            <div class="form-group">
                                                <label>Salary From</label>
                                                <input class="form-control" type="text">
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="form-group">
                                                <label>Salary To</label>
                                                <input class="form-control" type="text">
                                            </div>
                                        </div>
                                        <div class="col-sm-2">
                                            <div class="form-group">
                                                <label>%</label>
                                                <input class="form-control" type="text">
                                            </div>
                                        </div>
                                        <div class="col-sm-2">
                                            <div class="form-group">
                                                <label class="d-none d-sm-block">&nbsp;</label>
                                                <button class="btn btn-danger w-100 set-btn" type="button"><i class="fa fa-trash-o"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row row-sm">
                                        <div class="col-sm-2 ms-auto">
                                            <div class="form-group">
                                                <button class="btn btn-primary w-100" type="button"><i class="fa fa-plus"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- /TDS Settings -->
                                
                                <!-- Submit Button -->
                                <div class="submit-section">
                                    <button class="btn btn-primary submit-btn" type="submit">Save</button>
                                </div>
                                <!-- /Submit Button -->
                                
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
    name: 'salarysettings'
  }
</Script>