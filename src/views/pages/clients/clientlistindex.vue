<template>
  <div class="clientslist">
    <div class="main-wrapper">
       <main-header></main-header>
      <sidebar></sidebar>
      <!-- Page Wrapper -->

      <div class="page-wrapper">
      
        <!-- Page Content -->

        <div class="content container-fluid">
        
        <clientsheader />  
          
        <clientsfilter /> 
          

          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table datatable" id="clientlist">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Client ID</th>
                      <th>Contact Person</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th>Status</th>
                      <th class="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in clientlist" :key="item.id">
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/client-profile" class="avatar"><img :src="loadImg(item.image)" alt=""></router-link>
                          <router-link to="/client-profile">{{item.name}}</router-link>
                        </h2>
                      </td>
                      <td>{{item.clientid}}</td>
                      <td>{{item.contactperson}}</td>
                      <td>{{item.email}}</td>
                      <td>{{item.mobile}}</td>
                      <td>
                        <div class="action-label">
                          <span class="role-info role-bg-two">
                            <i class="far fa-dot-circle"></i> {{item.status}}
                          </span>
                        </div>
                      </td>
                      <td class="text-end ico-sec d-flex justify-content-end">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#edit_client"><i class="fas fa-pen"></i></a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#delete_client"><i class="far fa-trash-alt"></i></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
        <!-- /Page Content -->
      
        <clientsmodal />
        
      </div>
      <!-- /Page Wrapper -->
    </div>
  </div>
</template>
<script>

import clientlist from '../../../assets/json/clientlist.json';
import util from '../../../assets/utils/util'
const images = require.context('../../../assets/img', false, /\.png$|\.jpg$/)
  import Vue from 'vue'
  export default {
     data() {
    return {
      clientlist: clientlist
    }
    },
    components: {
   
    },
    mounted() {
    util.datatable('#clientlist')
    },
     methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
    },
    },
    name: 'clientslist'
  }
</Script>