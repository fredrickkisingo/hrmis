<template>
<div class="row board-view-header">
            <div class="col-md-6">
              <div class="row">
                <div class="col-sm-6 col-md-5">
                  <div class="form-group form-focus select-focus mb-0">
                  <vue-select :options="taskboarddesignation" />
                    <label class="focus-label">Designation</label>
                  </div>
                </div>
                <div class="col-sm-6 col-md-7">
                  <div class="pro-progress">
                    <div class="pro-progress-bar">
                      <h4>
                        <span>20%</span>
                        Progress
                      </h4>
                      <div class="progress">
                        <div class="progress-bar bg-success" role="progressbar" style="width: 20%"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>              
            </div>

            <div class="col-md-6">
              <div class="row align-items-center">
                <div class="col-md-4">
                  <div class="pro-team-lead">
                    <h4>Team Leader</h4>
                    <div class="avatar-group">                      
                      <div class="avatar">
                        <img class="avatar-img rounded-circle border border-white" alt="User Image" src="../../../../assets/img/profiles/avatar-16.jpg">
                      </div>
                      <div class="avatar">
                        <a href="" class="avatar-title rounded-circle border border-white" data-bs-toggle="modal" data-bs-target="#assign_leader"><i class="fa fa-plus"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="pro-team-lead">
                    <h4>Team Leader</h4>
                    <div class="avatar-group">                      
                      <div class="avatar">
                        <img class="avatar-img rounded-circle border border-white" alt="User Image" src="../../../../assets/img/profiles/avatar-16.jpg">
                      </div>
                      <div class="avatar">
                        <a href="" class="avatar-title rounded-circle border border-white" data-bs-toggle="modal" data-bs-target="#assign_leader"><i class="fa fa-plus"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-1 text-end">
                  <a href="#">
                    <i class="far fa-eye"></i>
                  </a>
                </div>
                <div class="col-md-3">
                  <div class="add-emp-section">
                    <a href="#" class="btn btn-success btn-add-emp" data-bs-toggle="modal" data-bs-target="#add_task_board">Create</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="kanban-board card mb-0">
            <div class="card-body">
              <div class="kanban-cont">
                <div class="kanban-list kanban-danger">
                  <div class="kanban-header">
                    <span class="status-title">Pending</span>
                    <div class="dropdown kanban-action">
                      <a href="" data-bs-toggle="dropdown">
                        <i class="fa fa-ellipsis-v"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_task_board">Edit</a>
                        <a class="dropdown-item" href="#">Delete</a>
                      </div>
                    </div>
                  </div>
                  <div class="kanban-wrap">
                    <div class="card panel">
                      <div class="kanban-box">
                        <div class="task-board-top">
                          <span><i class="fas fa-vector-square"></i> Design</span>
                          <span><i class="far fa-calendar"></i> 16 Mar 2021</span>
                        </div>
                        <div class="task-board-header">
                          <span class="status-title"><router-link to="/task-view">Simple Admin Dashboard Template Design</router-link></span>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim a, senectus morbi orci at id morbi turpis. Scelerisque volutpat mauris</p>
                        </div>
                        <div class="task-board-body">
                          <div class="kanban-info">
                            <div class="progress progress-xs">
                              <div class="progress-bar" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                          <div class="kanban-footer mt-4">
                            <span class="task-info-cont">
                              <span class="task-priority badge bg-inverse-primary"><i class="fas fa-circle"></i> Medium</span>
                            </span>
                            <div class="avatar-group">
                              <div class="avatar">
                                <img class="avatar-img rounded-circle border border-white" alt="User Image" src="../../../../assets/img/profiles/avatar-16.jpg">
                              </div>
                              <div class="avatar">
                                <a href="" class="avatar-title rounded-circle border border-white" data-bs-toggle="modal" data-bs-target="#assign_leader"><i class="fa fa-plus"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card panel">
                      <div class="kanban-box">
                        <div class="task-board-top">
                          <span><i class="fas fa-vector-square"></i> Design</span>
                          <span><i class="far fa-calendar"></i> 16 Mar 2021</span>
                        </div>
                        <div class="task-board-header">
                          <span class="status-title"><router-link to="/task-view">Simple Admin Dashboard Template Design</router-link></span>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim a, senectus morbi orci at id morbi turpis. Scelerisque volutpat mauris</p>
                        </div>
                        <div class="task-board-body">
                          <div class="kanban-info">
                            <div class="progress progress-xs">
                              <div class="progress-bar" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                          <div class="kanban-footer mt-4">
                            <span class="task-info-cont">
                              <span class="task-priority badge bg-inverse-primary"><i class="fas fa-circle"></i> Medium</span>
                            </span>
                            <div class="avatar-group">
                              <div class="avatar">
                                <img class="avatar-img rounded-circle border border-white" alt="User Image" src="../../../../assets/img/profiles/avatar-16.jpg">
                              </div>
                              <div class="avatar">
                                <a href="" class="avatar-title rounded-circle border border-white" data-bs-toggle="modal" data-bs-target="#assign_leader"><i class="fa fa-plus"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card panel">
                      <div class="kanban-box">
                        <div class="task-board-top">
                          <span><i class="fas fa-vector-square"></i> Design</span>
                          <span><i class="far fa-calendar"></i> 16 Mar 2021</span>
                        </div>
                        <div class="task-board-header">
                          <span class="status-title"><router-link to="/task-view">Simple Admin Dashboard Template Design</router-link></span>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim a, senectus morbi orci at id morbi turpis. Scelerisque volutpat mauris</p>
                        </div>
                        <div class="task-board-body">
                          <div class="kanban-info">
                            <div class="progress progress-xs">
                              <div class="progress-bar" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                          <div class="kanban-footer mt-4">
                            <span class="task-info-cont">
                              <span class="task-priority badge bg-inverse-primary"><i class="fas fa-circle"></i> Medium</span>
                            </span>
                            <div class="avatar-group">
                              <div class="avatar">
                                <img class="avatar-img rounded-circle border border-white" alt="User Image" src="../../../../assets/img/profiles/avatar-16.jpg">
                              </div>
                              <div class="avatar">
                                <a href="" class="avatar-title rounded-circle border border-white" data-bs-toggle="modal" data-bs-target="#assign_leader"><i class="fa fa-plus"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="add-new-task">
                    <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_task_modal">Add New Task</a>
                  </div>
                </div>
                <div class="kanban-list kanban-info">
                  <div class="kanban-header">
                    <span class="status-title">Progress</span>
                    <div class="dropdown kanban-action">
                      <a href="" data-bs-toggle="dropdown">
                        <i class="fa fa-ellipsis-v"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_task_board">Edit</a>
                        <a class="dropdown-item" href="#">Delete</a>
                      </div>
                    </div>
                  </div>
                  <div class="kanban-wrap">
                    <div class="card panel">
                      <div class="kanban-box">
                        <div class="task-board-top">
                          <span><i class="fas fa-vector-square"></i> Design</span>
                          <span><i class="far fa-calendar"></i> 16 Mar 2021</span>
                        </div>
                        <div class="task-board-header">
                          <span class="status-title"><router-link to="/task-view">Simple Admin Dashboard Template Design</router-link></span>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim a, senectus morbi orci at id morbi turpis. Scelerisque volutpat mauris</p>
                        </div>
                        <div class="task-board-body">
                          <div class="kanban-info">
                            <div class="progress progress-xs">
                              <div class="progress-bar" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                          <div class="kanban-footer mt-4">
                            <span class="task-info-cont">
                              <span class="task-priority badge bg-inverse-primary"><i class="fas fa-circle"></i> Medium</span>
                            </span>
                            <div class="avatar-group">
                              <div class="avatar">
                                <img class="avatar-img rounded-circle border border-white" alt="User Image" src="../../../../assets/img/profiles/avatar-16.jpg">
                              </div>
                              <div class="avatar">
                                <a href="" class="avatar-title rounded-circle border border-white" data-bs-toggle="modal" data-bs-target="#assign_leader"><i class="fa fa-plus"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card panel">
                      <div class="kanban-box">
                        <div class="task-board-top">
                          <span><i class="fas fa-vector-square"></i> Design</span>
                          <span><i class="far fa-calendar"></i> 16 Mar 2021</span>
                        </div>
                        <div class="task-board-header">
                          <span class="status-title"><router-link to="/task-view">Simple Admin Dashboard Template Design</router-link></span>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim a, senectus morbi orci at id morbi turpis. Scelerisque volutpat mauris</p>
                        </div>
                        <div class="task-board-body">
                          <div class="kanban-info">
                            <div class="progress progress-xs">
                              <div class="progress-bar" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                          <div class="kanban-footer mt-4">
                            <span class="task-info-cont">
                              <span class="task-priority badge bg-inverse-primary"><i class="fas fa-circle"></i> Medium</span>
                            </span>
                            <div class="avatar-group">
                              <div class="avatar">
                                <img class="avatar-img rounded-circle border border-white" alt="User Image" src="../../../../assets/img/profiles/avatar-16.jpg">
                              </div>
                              <div class="avatar">
                                <a href="" class="avatar-title rounded-circle border border-white" data-bs-toggle="modal" data-bs-target="#assign_leader"><i class="fa fa-plus"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="add-new-task">
                    <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_task_modal">Add New Task</a>
                  </div>
                </div>
                <div class="kanban-list kanban-success">
                  <div class="kanban-header">
                    <span class="status-title">Completed</span>
                    <div class="dropdown kanban-action">
                      <a href="" data-bs-toggle="dropdown">
                        <i class="fa fa-ellipsis-v"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_task_board">Edit</a>
                        <a class="dropdown-item" href="#">Delete</a>
                      </div>
                    </div>
                  </div>
                  <div class="kanban-wrap ks-empty">
                    <div class="card panel">
                      <div class="kanban-box">
                        <div class="task-board-top">
                          <span><i class="fas fa-vector-square"></i> Design</span>
                          <span><i class="far fa-calendar"></i> 16 Mar 2021</span>
                        </div>
                        <div class="task-board-header">
                          <span class="status-title"><router-link to="/task-view">Simple Admin Dashboard Template Design</router-link></span>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim a, senectus morbi orci at id morbi turpis. Scelerisque volutpat mauris</p>
                        </div>
                        <div class="task-board-body">
                          <div class="kanban-info">
                            <div class="progress progress-xs">
                              <div class="progress-bar" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                          <div class="kanban-footer mt-4">
                            <span class="task-info-cont">
                              <span class="task-priority badge bg-inverse-primary"><i class="fas fa-circle"></i> Medium</span>
                            </span>
                            <div class="avatar-group">
                              <div class="avatar">
                                <img class="avatar-img rounded-circle border border-white" alt="User Image" src="../../../../assets/img/profiles/avatar-16.jpg">
                              </div>
                              <div class="avatar">
                                <a href="" class="avatar-title rounded-circle border border-white" data-bs-toggle="modal" data-bs-target="#assign_leader"><i class="fa fa-plus"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="add-new-task">
                    <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_task_modal">Add New Task</a>
                  </div>
                </div>
                
                <div class="kanban-list kanban-warning">
                  <div class="kanban-header">
                    <span class="status-title">Inprogress</span>
                    <div class="dropdown kanban-action">
                      <a href="" data-bs-toggle="dropdown">
                        <i class="fa fa-ellipsis-v"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item" href="#">Edit</a>
                        <a class="dropdown-item" href="#">Delete</a>
                      </div>
                    </div>
                  </div>
                  <div class="kanban-wrap">
                    <div class="card panel">
                      <div class="kanban-box">
                        <div class="task-board-top">
                          <span><i class="fas fa-vector-square"></i> Design</span>
                          <span><i class="far fa-calendar"></i> 16 Mar 2021</span>
                        </div>
                        <div class="task-board-header">
                          <span class="status-title"><router-link to="/task-view">Simple Admin Dashboard Template Design</router-link></span>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim a, senectus morbi orci at id morbi turpis. Scelerisque volutpat mauris</p>
                        </div>
                        <div class="task-board-body">
                          <div class="kanban-info">
                            <div class="progress progress-xs">
                              <div class="progress-bar" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                          <div class="kanban-footer mt-4">
                            <span class="task-info-cont">
                              <span class="task-priority badge bg-inverse-primary"><i class="fas fa-circle"></i> Medium</span>
                            </span>
                            <div class="avatar-group">
                              <div class="avatar">
                                <img class="avatar-img rounded-circle border border-white" alt="User Image" src="../../../../assets/img/profiles/avatar-16.jpg">
                              </div>
                              <div class="avatar">
                                <a href="" class="avatar-title rounded-circle border border-white" data-bs-toggle="modal" data-bs-target="#assign_leader"><i class="fa fa-plus"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="add-new-task">
                    <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_task_modal">Add New Task</a>
                  </div>
                </div>
                
                <div class="kanban-list kanban-purple">
                  <div class="kanban-header">
                    <span class="status-title">On Hold</span>
                    <div class="dropdown kanban-action">
                      <a href="" data-bs-toggle="dropdown">
                        <i class="fa fa-ellipsis-v"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_task_board">Edit</a>
                        <a class="dropdown-item" href="#">Delete</a>
                      </div>
                    </div>
                  </div>
                  <div class="kanban-wrap">
                    <div class="card panel">
                      <div class="kanban-box">
                        <div class="task-board-top">
                          <span><i class="fas fa-vector-square"></i> Design</span>
                          <span><i class="far fa-calendar"></i> 16 Mar 2021</span>
                        </div>
                        <div class="task-board-header">
                          <span class="status-title"><router-link to="/task-view">Simple Admin Dashboard Template Design</router-link></span>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim a, senectus morbi orci at id morbi turpis. Scelerisque volutpat mauris</p>
                        </div>
                        <div class="task-board-body">
                          <div class="kanban-info">
                            <div class="progress progress-xs">
                              <div class="progress-bar" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                          <div class="kanban-footer mt-4">
                            <span class="task-info-cont">
                              <span class="task-priority badge bg-inverse-primary"><i class="fas fa-circle"></i> Medium</span>
                            </span>
                            <div class="avatar-group">
                              <div class="avatar">
                                <img class="avatar-img rounded-circle border border-white" alt="User Image" src="../../../../assets/img/profiles/avatar-16.jpg">
                              </div>
                              <div class="avatar">
                                <a href="" class="avatar-title rounded-circle border border-white" data-bs-toggle="modal" data-bs-target="#assign_leader"><i class="fa fa-plus"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="add-new-task">
                    <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_task_modal">Add New Task</a>
                  </div>
                </div>
                
                <div class="kanban-list kanban-primary">
                  <div class="kanban-header">
                    <span class="status-title">Review</span>
                    <div class="dropdown kanban-action">
                      <a href="" data-bs-toggle="dropdown">
                        <i class="fa fa-ellipsis-v"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_task_board">Edit</a>
                        <a class="dropdown-item" href="#">Delete</a>
                      </div>
                    </div>
                  </div>
                  <div class="kanban-wrap">
                    <div class="card panel">
                      <div class="kanban-box">
                        <div class="task-board-top">
                          <span><i class="fas fa-vector-square"></i> Design</span>
                          <span><i class="far fa-calendar"></i> 16 Mar 2021</span>
                        </div>
                        <div class="task-board-header">
                          <span class="status-title"><router-link to="/task-view">Simple Admin Dashboard Template Design</router-link></span>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim a, senectus morbi orci at id morbi turpis. Scelerisque volutpat mauris</p>
                        </div>
                        <div class="task-board-body">
                          <div class="kanban-info">
                            <div class="progress progress-xs">
                              <div class="progress-bar" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                          <div class="kanban-footer mt-4">
                            <span class="task-info-cont">
                              <span class="task-priority badge bg-inverse-primary"><i class="fas fa-circle"></i> Medium</span>
                            </span>
                            <div class="avatar-group">
                              <div class="avatar">
                                <img class="avatar-img rounded-circle border border-white" alt="User Image" src="../../../../assets/img/profiles/avatar-16.jpg">
                              </div>
                              <div class="avatar">
                                <a href="" class="avatar-title rounded-circle border border-white" data-bs-toggle="modal" data-bs-target="#assign_leader"><i class="fa fa-plus"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="add-new-task">
                    <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_task_modal">Add New Task</a>
                  </div>
                </div>

              </div>
            </div>
          </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    data() {
    return {
      taskboarddesignation: ["Select Roll", "Web Developer", "Web Designer", "Android Developer", "IOS Developer"]
    }
    },
    components: {
   
    },
    mounted() {
    },
  }
</Script>