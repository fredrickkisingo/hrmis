<template>
  <div class="categories">
    <div class="main-wrapper">
       <main-header></main-header>
      <sidebar></sidebar>
       <!-- Page Wrapper -->
            <div class="page-wrapper">
            
                <!-- Page Content -->
                <div class="content container-fluid">
                
                <subcategoriesheader />
                    
                    <div class="row">
                        <div class="col-md-12">
                            <div class="table-responsive">
                                <table class="table table-striped custom-table mb-0">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Category Name </th>
                                            <th>Sub-Category Name</th>
                                            <th class="text-end">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in categories" :key="item.id">
                                            <td>{{item.no}}</td>
                                            <td>{{item.categoryname}}</td>
                                            <td>{{item.subcategoryname}}</td>
                                            <td class="text-end ico-sec">
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#edit_categories"><i class="fas fa-pen"></i></a>
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#delete"><i class="far fa-trash-alt"></i></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Page Content -->
                
            <subcategoriesmodal />

        </div>
        <!-- /Page Wrapper -->
    </div>
  </div>
</template>
<script>
  import categories from '../../../../assets/json/categories.json';
  import Vue from 'vue'
  export default {
    data() {
    return {
      categories: categories
    }
    },
    components: {
   
    },
    mounted() {
    },
    name: 'categories'
  }
</Script>