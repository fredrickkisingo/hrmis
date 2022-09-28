<template>
<div class="col-md-5 d-flex">
                  <div class="card flex-fill">
                    <div class="card-header">
                      <h3 class="card-title">Latest Jobs</h3>
                    </div>

                    <div class="card-body">
                      <ul class="jb-info">
                        <li class="row">
                          <div class="col-md-8">
                            <div class="jb-li-content">
                              <h3>UI Developer</h3>
                              <h5>Experience</h5>
                            </div>
                            <div class="jb-li-content mt-1">
                              <h6>1 hour Ago</h6>
                              <h2>9 years</h2>
                            </div>
                          </div>
                          <div class="col-md-4 text-end">
                            <button class="btn btn-primary">Apply Now</button>
                          </div>
                        </li>
                        <li class="row">
                          <div class="col-md-8">
                            <div class="jb-li-content">
                              <h3>UI Developer</h3>
                              <h5>Experience</h5>
                            </div>
                            <div class="jb-li-content mt-1">
                              <h6>1 hour Ago</h6>
                              <h2>9 years</h2>
                            </div>
                          </div>
                          <div class="col-md-4 text-end">
                            <button class="btn btn-primary">Apply Now</button>
                          </div>
                        </li>
                        <li class="row">
                          <div class="col-md-8">
                            <div class="jb-li-content">
                              <h3>UI Developer</h3>
                              <h5>Experience</h5>
                            </div>
                            <div class="jb-li-content mt-1">
                              <h6>1 hour Ago</h6>
                              <h2>9 years</h2>
                            </div>
                          </div>
                          <div class="col-md-4 text-end">
                            <button class="btn btn-primary">Apply Now</button>
                          </div>
                        </li>
                      </ul>
                    </div>                    
                  </div>
                </div>
</template>
<script>
  import latestjobdash from '../../../../assets/json/latestjobdash.json';
  import Vue from 'vue'
  export default {
    data() {
    return {
    latestjobdash: latestjobdash
    }
    },
    components: {
   
    },
  }
</Script>