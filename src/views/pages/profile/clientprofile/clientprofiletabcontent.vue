<template>
            <div class="row">
                        <div class="col-lg-12"> 
              <div class="tab-content profile-tab-content">
                
                <!-- Projects Tab -->
                <div id="myprojects" class="tab-pane fade show active">
                  <div class="row">
                    <div class="col-lg-4 col-sm-6 col-md-4 col-xl-3" v-for="item in clientprofile" :key="item.id">
                      <div class="card">
                        <div class="card-body">
                          <div class="dropdown profile-action">
                            <a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="material-icons">more_vert</i></a>
                            <div class="dropdown-menu dropdown-menu-right">
                              <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_project"><i class="fa fa-pencil m-r-5"></i> Edit</a>
                              <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_project"><i class="fa fa-trash-o m-r-5"></i> Delete</a>
                            </div>
                          </div>
                          <h4 class="project-title"><router-link to="/project-view">{{item.name}}</router-link></h4>
                          <small class="block text-ellipsis m-b-15">
                            <span class="text-xs">{{item.no}}</span> <span class="text-muted">{{item.task}} </span> 
                             <span class="text-xs">{{item.no1}}</span> <span class="text-muted">{{item.task1}}</span>
                          </small>
                          <p class="text-muted">Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. When an unknown printer took a galley of type and
                            scrambled it...
                          </p>
                          <div class="pro-deadline m-b-15">
                            <div class="sub-title">
                              Deadline:
                            </div>
                            <div class="text-muted">
                              17 Apr 2019
                            </div>
                          </div>
                          <div class="project-members m-b-15">
                            <div>Project Leader :</div>
                            <ul class="team-members">
                              <li>
                                <a href="#" data-bs-toggle="tooltip" title="Jeffery Lalor"><img alt="" src="../../../../assets/img/profiles/avatar-16.jpg"></a>
                              </li>
                            </ul>
                          </div>
                          <div class="project-members m-b-15">
                            <div>Team :</div>
                            <ul class="team-members">
                              <li>
                                <a href="#" data-bs-toggle="tooltip" title="John Doe"><img alt="" src="../../../../assets/img/profiles/avatar-02.jpg"></a>
                              </li>
                              <li>
                                <a href="#" data-bs-toggle="tooltip" title="Richard Miles"><img alt="" src="../../../../assets/img/profiles/avatar-09.jpg"></a>
                              </li>
                              <li>
                                <a href="#" data-bs-toggle="tooltip" title="John Smith"><img alt="" src="../../../../assets/img/profiles/avatar-10.jpg"></a>
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
                          </div>
                          <p class="m-b-5">Progress <span class="text-success float-end">40%</span></p>
                          <div class="progress progress-xs mb-0">
                            <div class="progress-bar bg-success" role="progressbar" data-bs-toggle="tooltip" title="40%" style="width: 40%"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- /Projects Tab -->
                
                <!-- Task Tab -->
                <div id="tasks" class="tab-pane fade">
                  <div class="project-task">
                    <ul class="nav nav-tabs nav-tabs-top nav-justified mb-0">
                      <li class="nav-item"><a class="nav-link active" href="#all_tasks" data-bs-toggle="tab" aria-expanded="true">All Tasks</a></li>
                      <li class="nav-item"><a class="nav-link" href="#pending_tasks" data-bs-toggle="tab" aria-expanded="false">Pending Tasks</a></li>
                      <li class="nav-item"><a class="nav-link" href="#completed_tasks" data-bs-toggle="tab" aria-expanded="false">Completed Tasks</a></li>
                    </ul>
                    <div class="tab-content">
                      <div class="tab-pane show active" id="all_tasks">
                        <div class="task-wrapper">
                          <div class="task-list-container">
                            <div class="task-list-body">
                              <ul id="task-list">
                                <li class="task">
                                  <div class="task-container">
                                    <span class="task-action-btn task-check">
                                      <span class="action-circle large complete-btn" title="Mark Complete">
                                        <i class="material-icons">check</i>
                                      </span>
                                    </span>
                                    <span class="task-label" contenteditable="true">Patient appointment booking</span>
                                    <span class="task-action-btn task-btn-right">
                                      <span class="action-circle large" title="Assign">
                                        <i class="material-icons">person_add</i>
                                      </span>
                                      <span class="action-circle large delete-btn" title="Delete Task">
                                        <i class="material-icons">delete</i>
                                      </span>
                                    </span>
                                  </div>
                                </li>
                                <li class="task">
                                  <div class="task-container">
                                    <span class="task-action-btn task-check">
                                      <span class="action-circle large complete-btn" title="Mark Complete">
                                        <i class="material-icons">check</i>
                                      </span>
                                    </span>
                                    <span class="task-label" contenteditable="true">Appointment booking with payment gateway</span>
                                    <span class="task-action-btn task-btn-right">
                                      <span class="action-circle large" title="Assign">
                                        <i class="material-icons">person_add</i>
                                      </span>
                                      <span class="action-circle large delete-btn" title="Delete Task">
                                        <i class="material-icons">delete</i>
                                      </span>
                                    </span>
                                  </div>
                                </li>
                                <li class="completed task">
                                  <div class="task-container">
                                    <span class="task-action-btn task-check">
                                      <span class="action-circle large complete-btn" title="Mark Complete">
                                        <i class="material-icons">check</i>
                                      </span>
                                    </span>
                                    <span class="task-label">Doctor available module</span>
                                    <span class="task-action-btn task-btn-right">
                                      <span class="action-circle large" title="Assign">
                                        <i class="material-icons">person_add</i>
                                      </span>
                                      <span class="action-circle large delete-btn" title="Delete Task">
                                        <i class="material-icons">delete</i>
                                      </span>
                                    </span>
                                  </div>
                                </li>
                                <li class="task">
                                  <div class="task-container">
                                    <span class="task-action-btn task-check">
                                      <span class="action-circle large complete-btn" title="Mark Complete">
                                        <i class="material-icons">check</i>
                                      </span>
                                    </span>
                                    <span class="task-label" contenteditable="true">Patient and Doctor video conferencing</span>
                                    <span class="task-action-btn task-btn-right">
                                      <span class="action-circle large" title="Assign">
                                        <i class="material-icons">person_add</i>
                                      </span>
                                      <span class="action-circle large delete-btn" title="Delete Task">
                                        <i class="material-icons">delete</i>
                                      </span>
                                    </span>
                                  </div>
                                </li>
                                <li class="task">
                                  <div class="task-container">
                                    <span class="task-action-btn task-check">
                                      <span class="action-circle large complete-btn" title="Mark Complete">
                                        <i class="material-icons">check</i>
                                      </span>
                                    </span>
                                    <span class="task-label" contenteditable="true">Private chat module</span>
                                    <span class="task-action-btn task-btn-right">
                                      <span class="action-circle large" title="Assign">
                                        <i class="material-icons">person_add</i>
                                      </span>
                                      <span class="action-circle large delete-btn" title="Delete Task">
                                        <i class="material-icons">delete</i>
                                      </span>
                                    </span>
                                  </div>
                                </li>
                                <li class="task">
                                  <div class="task-container">
                                    <span class="task-action-btn task-check">
                                      <span class="action-circle large complete-btn" title="Mark Complete">
                                        <i class="material-icons">check</i>
                                      </span>
                                    </span>
                                    <span class="task-label" contenteditable="true">Patient Profile add</span>
                                    <span class="task-action-btn task-btn-right">
                                      <span class="action-circle large" title="Assign">
                                        <i class="material-icons">person_add</i>
                                      </span>
                                      <span class="action-circle large delete-btn" title="Delete Task">
                                        <i class="material-icons">delete</i>
                                      </span>
                                    </span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div class="task-list-footer">
                              <div class="new-task-wrapper">
                                <textarea  id="new-task" placeholder="Enter new task here. . ."></textarea>
                                <span class="error-message hidden">You need to enter a task first</span>
                                <span class="add-new-task-btn btn" id="add-task">Add Task</span>
                                <span class="btn" id="close-task-panel">Close</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane" id="pending_tasks"></div>
                      <div class="tab-pane" id="completed_tasks"></div>
                    </div>
                  </div>
                </div>
                <!-- /Task Tab -->
                
              </div>
            </div>
          </div>
</template>
<script>
import clientprofile from '../../../../assets/json/clientprofile.json';
  import Vue from 'vue'
  export default {
    data() {
    return {
      clientprofile: clientprofile
    }
  },
    components: {
    },
    methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
    },
    }
  }
</Script>