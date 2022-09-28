<template>
  <div class="row">
            <div class="col-md-6 col-lg-3 d-flex">
              <div class="card flex-fill tickets-card">
                <div class="card-header">
                  <div class="">
                    <h2>New Tickets</h2>
                    <h3 class="bl-text">112</h3>
                  </div>
                  <h6>+10%</h6>
                </div>
                 <apexchart
      type="area"
      :options="chartOptions"
      :series="series"
    ></apexchart> 
                
              </div>
            </div>

            <div class="col-md-6 col-lg-3 d-flex">
              <div class="card flex-fill tickets-card">
                <div class="card-header">
                  <div class="">
                    <h2>Solved Tickets</h2>
                    <h3 class="org-text">112</h3>
                  </div>
                  <h6>+10%</h6>
                </div>
  <apexchart
      type="area"
      :options="chartOptions1"
      :series="series1"
    ></apexchart> 
              </div>
            </div>

            <div class="col-md-6 col-lg-3 d-flex">
              <div class="card flex-fill tickets-card">
                <div class="card-header">
                  <div class="">
                    <h2>Open Tickets</h2>
                    <h3 class="red-text">112</h3>
                  </div>
                  <h6>+10%</h6>
                </div>
  <apexchart
      type="area"
      :options="chartOptions2"
      :series="series2"
    ></apexchart> 
              </div>
            </div>

            <div class="col-md-6 col-lg-3 d-flex">
              <div class="card flex-fill tickets-card">
                <div class="card-header">
                  <div class="">
                    <h2>Pending Tickets</h2>
                    <h3 class="grn-text">112</h3>
                  </div>
                  <h6>+10%</h6>
                </div>
                 <apexchart
      type="area"
      :options="chartOptions3"
      :series="series3"
    ></apexchart> 

              </div>
            </div>
          </div>

</template>
<script>
  import Vue from 'vue'
  import VueApexCharts from "vue3-apexcharts";
  export default {
    components: {
   apexchart: VueApexCharts,
    },
    mounted() {
    },
     data: function() {
    return {    
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
  }
  }
</Script>