<template>
<div class="row">
            <div class="col-md-6 col-lg-3 d-flex">
              <div class="card flex-fill tickets-card">
                <div class="card-header">
                  <div class="">
                    <h2>New Employees</h2>
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
                    <h2>Earnings</h2>
                    <h3 class="org-text">$1,42,300</h3>
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
                    <h2>Expenses</h2>
                    <h3 class="red-text">$8,500</h3>
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
                    <h2>Profit</h2>
                    <h3 class="grn-text">$1,12,000</h3>
                  </div>
                  <h6 class="red-text">-10%</h6>
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
import VueApexCharts from "vue3-apexcharts";
import adminemployee from '../../../../assets/json/adminemployee.json';
  import Vue from 'vue'
  export default {
    data() {
    return {
      adminemployee: adminemployee
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