<template>
 <!-- Statistics Widget -->
          <div class="row">
            <div class="col-md-12 col-lg-12 col-xl-5 d-flex">
              <div class="card project-card flex-fill">
                <h4>Statistics</h4>
                <div class="row">
                  <div class="col-md-6">
                    <div class="card st-card st-c1">
                      <div class="stats-info">
                        <div class="text-start">
                          <p>Today</p>
                          <h5>3.45 / 8 hrs</h5>
                        </div>
                        
                        <div class="progress">
                          <div class="progress-bar bg-primary" role="progressbar" style="width: 31%" aria-valuenow="31" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="card st-card st-c2">
                      <div class="stats-info">
                        <div class="text-start">
                          <p>This Week</p>
                          <h5>3.45 / 8 hrs</h5>
                        </div>
                        
                        <div class="progress">
                          <div class="progress-bar bg-primary" role="progressbar" style="width: 47%" aria-valuenow="47" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="card st-card st-c3">
                      <div class="stats-info">
                        <div class="text-start">
                          <p>This Month</p>
                          <h5>3.45 / 8 hrs</h5>
                        </div>
                        
                        <div class="progress">
                          <div class="progress-bar bg-primary" role="progressbar" style="width: 87%" aria-valuenow="87" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="card st-card st-c4">
                      <div class="stats-info">
                        <div class="text-start">
                          <p>Remaining</p>
                          <h5>3.45 / 8 hrs</h5>
                        </div>
                        
                        <div class="progress">
                          <div class="progress-bar bg-primary" role="progressbar" style="width: 87%" aria-valuenow="87" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-12 col-lg-12 col-xl-7 d-flex">
              <div class="card project-card flex-fill">
                <h4>Projects</h4>
                <div class="row">
                  <div class="col-md-6 d-flex align-items-center justify-content-center">
                      <apexchart
      type="radialBar"
      :options="chartOptions4"
      :series="series4"
    ></apexchart> 
                  </div>

                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-md-12 mb-3">
                        <div class="task-box color-one">
                          <div class="task-media">
                            <div class="task-icon">
                              <img src="../../../../assets/img/icons/icon-01.png" alt="Icons">
                            </div>
                            <div class="task-info">
                              <h5>Pending Tasks</h5>
                              <h2>55</h2>
                            </div>
                          </div>
                          
                          <div class="task-redirect">
                            <div class="redirect-icon">
                              <i class="fas fa-long-arrow-alt-right"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-12 mb-3">
                        <div class="task-box color-two">
                          <div class="task-media">
                            <div class="task-icon">
                              <img src="../../../../assets/img/icons/icon-02.png" alt="Icons">
                            </div>
                            <div class="task-info">
                              <h5>Completed Tasks</h5>
                              <h2>55</h2>
                            </div>
                          </div>
                          
                          <div class="task-redirect">
                            <div class="redirect-icon">
                              <i class="fas fa-long-arrow-alt-right"></i>
                            </div>                  
                          </div>
                        </div>
                      </div>

                      <div class="col-md-12">
                        <div class="task-box color-three">
                          <div class="task-media">
                            <div class="task-icon">
                              <img src="../../../../assets/img/icons/icon-03.png" alt="Icons">
                            </div>
                            <div class="task-info">
                              <h5>Total Projects</h5>
                              <h2>55</h2>
                            </div>
                          </div>
                          
                          <div class="task-redirect">
                            <div class="redirect-icon">
                              <i class="fas fa-long-arrow-alt-right"></i>
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
          <!-- /Statistics Widget -->
</template>
<script>
import VueApexCharts from "vue3-apexcharts";
  import Vue from 'vue'
  export default {
    data() {
    return {
    }
    },
    components: {
    apexchart: VueApexCharts,
    },
    data: function() {
    return {    
       chartOptions4: {
          chart: {
      height: 300,
      type: 'radialBar',
      dropShadow: {
        enabled: true,
        blur: 2,
        color: '#000',
        opacity: 0.25
      }
    },
    plotOptions: {
      radialBar: {
        hollow: {
        size: '60%',
        }
      },
    },
    fill: {
      opacity: 1.5,
      colors: ['#FF7849', '#FF7849'],
      type: 'gradient',
      gradient: {
        gradientToColors: ['#FF7849', '#FF7849'],
        shadeIntensity: 1,
        opacityFrom: 1,
        opacityTo: 2,
        stops: [0, 50, 100],
        inverseColors: false
      },
    },
    labels: ['Completed task'],

      },
      series4: [70],

        chartOptions: {
      chart: {
      type: 'area',
      toolbar: {
        show: false
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    xaxis: {
      labels: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    grid: {
      show: false
    }
     
      },
      series:  [{
      name: 'series1',
      color: '#4a7feb',
      data: [31, 40, 28, 51, 42, 109, 100]
    }],


     chartOptions1: {
     chart: {
      type: 'area',
      toolbar: {
        show: false
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    xaxis: {
      labels: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    grid: {
      show: false
    }
     
      },
      series1:  [{
      name: 'series1',
      color: '#ff7849',
      data: [31, 40, 28, 51, 42, 109, 100]
    }],


    chartOptions2: {
    chart: {
      type: 'area',
      toolbar: {
        show: false
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    xaxis: {
      labels: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    grid: {
      show: false
    }
     
      },
      series2:  [{
      name: 'series1',
      color: '#ff0000',
      data: [31, 40, 28, 51, 42, 109, 100]
    }],

    chartOptions3: {
    chart: {
      type: 'area',
      toolbar: {
        show: false
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    xaxis: {
      labels: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    grid: {
      show: false
    }
     
      },
      series3:  [{
      name: 'series1',
      color: '#4fad4c',
      data: [31, 40, 28, 51, 42, 109, 100]
    }],

    };
     },
  }
</Script>