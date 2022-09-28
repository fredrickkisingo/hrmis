<template>
<div class="row">
            <div class="col-lg-4 col-sm-6 col-md-3" v-for="item in projects" :key="item.id">
              <div class="card project-card-det">
                <div class="card-header">
                  <div class="dropdown dropdown-action profile-action">
                    <a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_project"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                      <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_project"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                    </div>
                  </div>
                </div>

                <div class="card-body">
                  <div class="media d-flex">
                    <span class="avatar flex-shrink-0">
                      <img src="../../../../assets/img/client-small.png" alt="...">
                    </span>
                    <div class="media-body flex-grow-1">
                      <h4 class="project-title"><router-link to="/project-view">Video Calling App</router-link></h4>
                      <h6 class="project-text">3 open tasks, 3 tasks completed</h6>
                    </div>
                  </div>
                  <p class="project-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it...</p>
                  <ul class="cost-li">
                    <li>
                      <h5>Cost</h5>
                      <h6>$1200</h6>
                    </li>
                    <li>
                      <h5>Deadline</h5>
                      <h6>29 Jun, 2020</h6>
                    </li>
                  </ul>
                  <ul class="team-li">
                    <li>
                      <h5>Project Leader</h5>
                      <a href="#" data-bs-toggle="tooltip" title="Jeffery Lalor"><img alt="" src="../../../../assets/img/profiles/avatar-16.jpg"></a>
                    </li>
                    <li>
                      <h5>Team</h5>
                      <ul class="team-members">
                        <li>
                          <a href="#" data-bs-toggle="tooltip" title="John Doe"><img alt="" src="../../../../assets/img/profiles/avatar-02.jpg"></a>
                        </li>
                        <li>
                          <a href="#" data-bs-toggle="tooltip" title="Mike Litorus"><img alt="" src="../../../../assets/img/profiles/avatar-05.jpg"></a>
                        </li>
                        <li class="dropdown avatar-dropdown">
                          <a href="#" class="all-users dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">+15</a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <div class="avatar-group">
                              <a class="avatar avatar-xs" href="#">
                                <img alt="" src="../../../../assets/img/profiles/avatar-02.jpg">
                              </a>
                              <a class="avatar avatar-xs" href="#">
                                <img alt="" src="../../../../assets/img/profiles/avatar-09.jpg">
                              </a>
                              <a class="avatar avatar-xs" href="#">
                                <img alt="" src="../../../../assets/img/profiles/avatar-10.jpg">
                              </a>
                              <a class="avatar avatar-xs" href="#">
                                <img alt="" src="../../../../assets/img/profiles/avatar-05.jpg">
                              </a>
                              <a class="avatar avatar-xs" href="#">
                                <img alt="" src="../../../../assets/img/profiles/avatar-11.jpg">
                              </a>
                              <a class="avatar avatar-xs" href="#">
                                <img alt="" src="../../../../assets/img/profiles/avatar-12.jpg">
                              </a>
                              <a class="avatar avatar-xs" href="#">
                                <img alt="" src="../../../../assets/img/profiles/avatar-13.jpg">
                              </a>
                              <a class="avatar avatar-xs" href="#">
                                <img alt="" src="../../../../assets/img/profiles/avatar-01.jpg">
                              </a>
                              <a class="avatar avatar-xs" href="#">
                                <img alt="" src="../../../../assets/img/profiles/avatar-16.jpg">
                              </a>
                            </div>
                            <div class="avatar-pagination">
                              <ul class="pagination">
                                <li class="page-item">
                                  <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">«</span>
                                    <span class="visually-hidden">Previous</span>
                                  </a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item">
                                  <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">»</span>
                                  <span class="visually-hidden">Next</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <p class="m-b-5 mt-4">Progress <span class="text-blue float-end">40%</span></p>
                  <div class="progress progress-sm mb-0">
                    <div class="progress-bar bg-blue" role="progressbar" data-bs-toggle="tooltip" title="40%" style="width: 40%">
                    </div>
                    </div>

                  </div>

                </div>

              </div>

            </div>
</template>
<script>
  import Vue from 'vue'
  import projects from '../../../../assets/json/projects.json';
  import util from '../../../../assets/utils/util'
const images = require.context('../../../../assets/img/profiles', false, /\.png$|\.jpg$/)
  export default {
    data() {
    return {
      projects: projects
    }
    },
    components: {
   
    },
    mounted() {

  
    },
    methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
    },
    },
    name: 'projects'
  }
</Script>