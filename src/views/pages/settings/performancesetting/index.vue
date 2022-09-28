<template>

  <div class="performancesetting">

    <div class="main-wrapper">

      <main-header></main-header>

       <sidebar></sidebar>

      <!-- Page Wrapper -->

      <div class="page-wrapper">

      <div class="content container-fluid pb-0">

      <div class="row">

      <div class="col-md-12">

       <headerperformancesetting />

      <div class="card-box">


      <div class="row">

      <settingsidebar />

       <div class="col-md-8 col-lg-9 settings-cont">
            <div class="card p-4">
            <div class="row">
            <div class="col-sm-12">
            <h4 class="page-title">Performance Configuration    
            <button class="btn btn-success m-t-5 btn-sm" type="submit">OKRs  Activated</button>
            </h4>
            </div>
            </div>
            <div class="row">
            <div class="col-md-12">
            <div class="card-box">
            <p><b>Click the tabs below for more information on each Performance Management module.
                                                        Only one Performance module can be activated at a time.
                                                        </b>
                                                    </p>
                                                    <tabperformancesetting />

      <div class="tab-content mt-3">

      <okrperformancesetting />

      <competencyperformancesetting />

      <performancesettinggoal />

      </div>

      </div>

      </div>

      </div>

      </div>

      </div>

      </div>

      </div>

      </div>

      </div>

      </div>

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
    name: 'performancesetting'
  }
</Script>