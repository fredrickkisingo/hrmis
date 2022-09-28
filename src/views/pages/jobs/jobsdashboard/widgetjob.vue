<template>
<div class="row">
            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3" v-for="item in jobdashwidget" :key="item.id">
              <div class="card flex-fill tickets-card">
                <div class="card-header">
                  <div class="text-center w-100 p-3">
                    <h3 class="bl-text mb-1">{{item.no}}</h3>
                    <h2>{{item.jobtype}}</h2>
                  </div>
                </div>
              </div>
            </div>
</div>
</template>
<script>
  import jobdashwidget from '../../../../assets/json/jobdashwidget.json';
  import Vue from 'vue'
  export default {
    data() {
    return {
    jobdashwidget: jobdashwidget
    }
    },
    components: {
   
    },
  }
</Script>