<template>
 <!-- Page Header -->
            <div class="row align-items-center">
              <div class="col-md-12">
              <div class="page-head-box">
                <h3>Interview Questions</h3>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
                  <li class="breadcrumb-item">Jobs</li>
                  <li class="breadcrumb-item active">Interview Questions</li>
                </ol>
                </div>
              </div>
            </div>
<!-- /Page Header -->
<!-- Search Filter -->
          <div class="row filter-row">
            <div class="col-md-6"></div>
            <div class="col-md-6 text-end">
              <div class="add-emp-section">
                <a href="#" class="btn btn-success btn-add-emp me-3" data-bs-toggle="modal" data-bs-target="#add_question"><i class="fas fa-plus"></i> Add Question</a>
                <a href="#" class="btn btn-success btn-add-emp" data-bs-toggle="modal" data-bs-target="#add_category"><i class="fas fa-plus"></i> Add Category</a>
              </div>
            </div>
          </div>
          <!-- /Search Filter -->
</template>