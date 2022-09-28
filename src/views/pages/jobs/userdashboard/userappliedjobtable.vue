<template>
<div class="row">
            <div class="col-md-12">
              <div class="card card-table">
                <div class="card-header">
                  <h3 class="card-title mb-0">Applied Jobs</h3>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-nowrap custom-table mb-0">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Job Title</th>
                          <th>Department</th>
                          <th>Start Date</th>
                          <th>Expire Date</th>
                          <th class="text-center">Job Type</th>
                          <th class="text-center">Status</th>
                          <th class="text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td><router-link to="/job-details">Web Developer</router-link></td>
                          <td>Development</td>
                          <td>3 Mar 2019</td>
                          <td>31 May 2019</td>
                          <td class="text-center">
                            <div class="action-label">
                              <a class="role-info role-bg-two" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa fa-dot-circle-o text-danger"></i> Full Time
                              </a>
                            </div>
                          </td>
                          <td class="text-center">
                            <div class="action-label">
                              <a class="role-info role-bg-one" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa fa-dot-circle-o text-danger"></i> Open
                              </a>
                            </div>
                          </td>
                          <td class="text-end ico-sec">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#edit_job"><i class="fas fa-pen"></i></a>
                            <a href="#" data-bs-toggle="modal" data-bs-target="#delete_job"><i class="far fa-trash-alt"></i></a>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td><router-link to="/job-details">Web Designer</router-link></td>
                          <td>Designing</td>
                          <td>3 Mar 2019</td>
                          <td>31 May 2019</td>
                          <td class="text-center">
                            <div class="action-label">
                              <a class="role-info role-bg-two" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa fa-dot-circle-o text-danger"></i> Part Time
                              </a>
                            </div>
                          </td>
                          <td class="text-center">
                            <div class="action-label">
                              <a class="role-info role-bg-one" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa fa-dot-circle-o text-danger"></i> Closed
                              </a>
                            </div>
                          </td>
                          <td class="text-end ico-sec">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#edit_job"><i class="fas fa-pen"></i></a>
                            <a href="#" data-bs-toggle="modal" data-bs-target="#delete_job"><i class="far fa-trash-alt"></i></a>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td><router-link to="/job-details">Android Developer</router-link></td>
                          <td>Android</td>
                          <td>3 Mar 2019</td>
                          <td>31 May 2019</td>
                                                    <td class="text-center">
                            <div class="action-label">
                              <a class="role-info role-bg-two" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa fa-dot-circle-o text-danger"></i> Internship
                              </a>
                            </div>
                          </td>
                          <td class="text-center">
                            <div class="action-label">
                              <a class="role-info role-bg-one" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa fa-dot-circle-o text-danger"></i> Cancelled
                              </a>
                            </div>
                          </td>
                          <td class="text-end ico-sec">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#edit_job"><i class="fas fa-pen"></i></a>
                            <a href="#" data-bs-toggle="modal" data-bs-target="#delete_job"><i class="far fa-trash-alt"></i></a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
</template>