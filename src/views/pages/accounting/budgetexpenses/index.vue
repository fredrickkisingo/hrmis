<template>
  <div class="budgetexpenses">
    <div class="main-wrapper">
       <main-header></main-header>
      <sidebar></sidebar>
       <!-- Page Wrapper -->
       <div class="page-wrapper">
        <!-- Page Content -->
        <div class="content container-fluid">
        
        <budgetexpenseheader /> 


        <!-- Search Filter -->
        <div class="row filter-row">
        <div class="col-md-8"></div>
        <div class="col-md-4">
        <div class="add-emp-section">
            <a href="#" class="btn btn-success btn-add-emp" data-bs-toggle="modal" data-bs-target="#add_categories"><i class="fas fa-plus"></i>  Add Expenses</a>
        </div>
        </div>
        </div>
        <!-- /Search Filter -->

          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Notes</th>                    
                      <th>Category Name</th>
                      <th>SubCategory Name</th>
                      <th>Amount</th>
                      <th>Revenue Date</th>
                      <th class="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in budgetexpenses" :key="item.id">
                      <td>{{item.no}}</td>
                      <td>{{item.notes}}</td>
                      <td>{{item.categoryname}}</td>
                      <td>{{item.subcategoryname}}</td>
                      <td>{{item.amount}}</td>
                      <td>{{item.revenuedate}}</td>
                      <td class="text-end ico-sec">
                                                <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_categories"><i class="fas fa-pen"></i></a>
                                                <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete"><i class="far fa-trash-alt"></i></a>
                      </td>
                    </tr>          
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <!-- /Page Content -->

        <budgetexpensemodal />

      </div>
      <!-- /Page Wrapper -->
    </div>
  </div>
</template>
<script>
  import budgetexpenses from '../../../../assets/json/budgetexpenses.json';
  import Vue from 'vue'
  export default {
     data() {
    return {
      budgetexpenses: budgetexpenses,
    }
    },
    components: {
   
    },
    mounted() {
    },
    name: 'budgetexpenses'
  }
</Script>