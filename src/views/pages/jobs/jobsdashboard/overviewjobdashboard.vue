<template>
<div class="col-md-7 text-center d-flex">
                  <div class="card flex-fill">
                    <div class="card-header">
                      <h3 class="card-title">Profiles Overview</h3>
                      <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Last 6 months
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a class="dropdown-item" href="#">Last 6 months</a>
                          <a class="dropdown-item" href="#">Last 3 months</a>
                          <a class="dropdown-item" href="#">Last 1 months</a>
                        </div>
                      </div>
                    </div>
                    <div class="card-body">             
                          <apexchart
      height="280"
      type="line"
      :options="chartOptions1"
      :series="series4"
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
     data: function() {
    return {    
        chartOptions1: {
        chart: {
      height: 280,
      type: 'line',
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
      },
      dataLabels: {
      enabled: false
      },
      stroke: {
        width: 1,
      curve: 'straight'
      },
      grid: {
      row: {
        colors: ['transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
      borderColor: '#DDDDDD',
      xaxis: {
        lines: {
          show: true
        }
      },   
      yaxis: {
        lines: {
          show: true
        }
      },
      },
      xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      },
      markers: {
      size: 4
      }
     
      },
      series4: [{
        name: "Full time",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        color: '#038900'
      },
      {
      name: "Part time",
      data: [24, 54, 25, 61, 39, 63, 65, 87, 120],
      color: '#FF0065'
    }],

    };
  }
  }
</Script>