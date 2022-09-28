<template>
 <div class="col-md-4 d-flex">
              <div class="card flex-fill">
                <div class="card-body">
                  <h5 class="card-sub-title">Statistics</h5>
                  
                  <div class="row">
                    <div class="col-md-6" v-for="item in statisticsattendance" :key="item.id">
                      <div class="card st-card st-c1">
                        <div class="stats-info">
                          <div>
                            <p>{{item.day}}</p>
                            <h5>{{item.hours}}</h5>
                          </div>
                          
                          <div class="progress">
                            <div class="progress-bar bg-primary" role="progressbar" style="width: 31%" aria-valuenow="31" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="card st-card st-c5">
                        <div class="stats-info">
                          <div>
                            <p>Overtime</p>
                            <h5>4</h5>
                          </div>
                          
                          <div class="progress">
                            <div class="progress-bar bg-primary" role="progressbar" style="width: 57%" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                
              </div>
              
            </div>
</template>
<script>
import statisticsattendance from '../../../../assets/json/statisticsattendance.json';
  import Vue from 'vue'
  export default {
    data() {
    return {
      statisticsattendance: statisticsattendance
    }
  }
  }
</Script>