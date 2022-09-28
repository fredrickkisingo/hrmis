<template>
  <!-- Page Header -->
  <div class="row">
              <div class="col-md-12">
                <div class="page-head-box">
                  <h3>Invoice</h3>
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
                      <li class="breadcrumb-item active" aria-current="page">Invoice</li>
                    </ol>
                  </nav>
                </div>
              </div>
  </div>
  <!-- /Page Header -->
   <!-- Print Section -->
            <div class="page-header">
              <div class="row align-items-center">
                <div class="col-auto float-end ms-auto">
                  <div class="btn-group btn-group-sm">
                    <button class="btn btn-white">CSV</button>
                    <button class="btn btn-white">PDF</button>
                    <button class="btn btn-white"><i class="fa fa-print fa-lg"></i> Print</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Print Section -->
</template>