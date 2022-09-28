<template>
  <div class="settings">
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
                                        <h3>Approval Settings</h3>
                                        <nav aria-label="breadcrumb">
                                            <ol class="breadcrumb">
                                                <li class="breadcrumb-item"><router-link to="/settings">Settings</router-link></li>
                                                <li class="breadcrumb-item active" aria-current="page">Approval Settings</li>
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
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Company Name <span class="text-danger">*</span></label>
                                            <input class="form-control" type="text" value="Dreamguy's Technologies">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Contact Person</label>
                                            <input class="form-control " value="Daniel Porter" type="text">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Address</label>
                                            <input class="form-control " value="3864 Quiet Valley Lane, Sherman Oaks, CA, 91403" type="text">
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3">
                                        <div class="form-group">
                                            <label>Country</label>
                                            <vue-select :options="countrysetting" />
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3">
                                        <div class="form-group">
                                            <label>City</label>
                                            <input class="form-control" value="Sherman Oaks" type="text">
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3">
                                        <div class="form-group">
                                            <label>State/Province</label>
                                            <vue-select :options="statesetting" />
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-md-6 col-lg-3">
                                        <div class="form-group">
                                            <label>Postal Code</label>
                                            <input class="form-control" value="91403" type="text">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Email</label>
                                            <input class="form-control" value="danielporter@example.com" type="email">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Phone Number</label>
                                            <input class="form-control" value="818-978-7102" type="text">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Mobile Number</label>
                                            <input class="form-control" value="818-635-5579" type="text">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Fax</label>
                                            <input class="form-control" value="818-978-7102" type="text">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Website Url</label>
                                            <input class="form-control" value="https://www.example.com" type="text">
                                        </div>
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
    data() {
    return {
      countrysetting: ["USA", "United Kingdom"],
      statesetting: ["California", "Alaska", "Alabama"]
    }
    },
    components: {
   
    },
    mounted() {

    },
    name: 'settings'
  }
</Script>