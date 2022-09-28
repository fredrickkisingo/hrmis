<template>
  <div class="budgets">
    <div class="main-wrapper">
       <main-header></main-header>
      <sidebar></sidebar>
       <!-- Page Wrapper -->
            <div class="page-wrapper">
            
                <!-- Page Content -->
                <div class="content container-fluid">
                
                <budgetheader />  

                 <!-- Search Filter -->
                    <div class="row filter-row">
                        <div class="col-md-8"></div>
                        <div class="col-md-4">
                            <div class="add-emp-section">
                                <a href="#" class="btn btn-success btn-add-emp" data-bs-toggle="modal" data-bs-target="#add_categories"><i class="fas fa-plus"></i>  Add Budgets</a>
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
                                            <th>Budget No</th>
                                            <th>Budget Title</th>
                                            <th>Budget Type</th>
                                            <th>Start Date</th>
                                            <th>End Date</th>
                                            <th>Total Revenue</th>
                                            <th>Total Expenses</th>
                                            <th>Tax Amount</th>
                                            <th>Budget Amount</th>
                                            <th class="text-end">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in budgets" :key="item.id">
                                            <td>{{item.budgetno}}</td>
                                            <td>{{item.budgettitle}}</td>
                                            <td>{{item.budgettype}}</td>
                                            <td>{{item.startdate}}</td>
                                            <td>{{item.enddate}}</td>
                                            <td>{{item.totalrevenue}}</td>
                                            <td>{{item.totalexpenses}}</td>
                                            <td>{{item.taxamount}}</td>
                                            <td>{{item.budgetamount}}</td>
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
                
       <budgetmodal />

      </div>
    <!-- /Page Wrapper -->
    </div>
  </div>
</template>
<script>
  import budgets from '../../../../assets/json/budgets.json';
  import Vue from 'vue'
  export default {
     data() {
    return {
      budgets: budgets
    }
    },
    components: {
   
    },
    mounted() {
    },
    name: 'budgets'
  }
</Script>