<template>
<div class="row">
            <div class="col-md-12 col-lg-12 col-xl-3 d-flex">
              <div class="card user-card flex-fill">
                <div class="user-img-sec">
                  <img src="../../../../assets/img/profiles/avatar-02.jpg" alt="User Image">
                  <h4>John Doe</h4>
                  <h5>Sr.UI / UX Designer</h5>

                  <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="fas fa-ellipsis-v"></i>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <h4>Joining Date <span>20 May 2020</span></h4>
                  <h4>Experience <span>20 years</span></h4>
                  <h4>Employee Number <span>645658</span></h4>
                </div>
              </div>
            </div>

            <div class="col-md-12 col-lg-8 col-xl-6 d-flex">
              <div class="card project-card flex-fill">
                <h4><i class="fas fa-cube"></i> Projects</h4>
                <div class="row">
                  <div class="col-md-6 d-flex align-items-center">
                   <apexchart
      type="radialBar"
      :options="chartOptions"
      :series="series"
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
            <div class="col-md-12 col-lg-4 col-xl-3 d-flex">
              <div class="card project-card flex-fill">
                <h4><i class="fab fa-dropbox"></i> Recent Projects</h4>
                <div class="row">
                  <div class="col-md-12 first-box">
                    <div class="recent-project-box">
                      <div class="circle">
                        <i class="far fa-image"></i>
                      </div>
                      <h3>DreamsHRMS</h3>
                    </div>
  
                    <div class="task-progress">
                      <h4>Task Done 50/96</h4>
                      <div class="progress">
                        <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
  
                    <div class="task-avatar mt-2">
                      <div class="avatar-group">
                        <div class="avatar">
                          <img class="avatar-img rounded-circle border border-white" alt="User Image" src="../../../../assets/img/profiles/avatar-02.jpg">
                        </div>
                        <div class="avatar">
                          <img class="avatar-img rounded-circle border border-white" alt="User Image" src="../../../../assets/img/profiles/avatar-02.jpg">
                        </div>
                        <div class="avatar">
                          <img class="avatar-img rounded-circle border border-white" alt="User Image" src="../../../../assets/img/profiles/avatar-02.jpg">
                        </div>
                      </div>
                      <a href="#">View More</a>
                    </div>
                  </div>

                  <div class="col-md-12">
                    <div class="recent-project-box">
                      <div class="circle">
                        <i class="far fa-image"></i>
                      </div>
                      <h3>Booking template</h3>
                    </div>
  
                    <div class="task-progress">
                      <h4>Task Done 50/96</h4>
                      <div class="progress">
                        <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
  
                    <div class="task-avatar mt-2">
                      <div class="avatar-group">
                        <div class="avatar">
                          <img class="avatar-img rounded-circle border border-white" alt="User Image" src="../../../../assets/img/profiles/avatar-02.jpg">
                        </div>
                        <div class="avatar">
                          <img class="avatar-img rounded-circle border border-white" alt="User Image" src="../../../../assets/img/profiles/avatar-02.jpg">
                        </div>
                        <div class="avatar">
                          <img class="avatar-img rounded-circle border border-white" alt="User Image" src="../../../../assets/img/profiles/avatar-02.jpg">
                        </div>
                      </div>
                      <a href="#">View More</a>
                    </div>
                  </div>
                </div>
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
      series: [70],

    };
  }
  }
</Script>