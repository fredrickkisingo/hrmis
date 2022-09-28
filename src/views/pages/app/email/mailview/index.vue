<template>
  <div class="mailview">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>
      <!-- Page Wrapper -->
      <div class="page-wrapper"> 
        <!-- Page Content -->
        <div class="content container-fluid mb-0">

        <div class="row">
        
        <div class="col-md-12">
        
          <headermailview />

          <div class="row">


         <div class="col-md-4 col-lg-3">
                  <div class="card settings-menu">
                    <div class="sidebar-menu">
                      <ul>
                        <li>
                          <div class="add-emp-section">
                            <router-link to="/compose" class="btn btn-success btn-add-emp"><i class="fas fa-plus"></i> Compose</router-link>
                          </div>
                        </li>
                        <li class="mt-4"> 
                          <router-link to="/inbox" class="active">Inbox <span class="mail-count">(21)</span></router-link>
                        </li>
                        <li> 
                          <a href="#">Starred</a>
                        </li>
                        <li> 
                          <a href="#">Sent Mail</a>
                        </li>
                        <li> 
                          <a href="#">Draft <span class="mail-count">(8)</span></a>
                        </li>
                        <li> 
                          <a href="#">Trash</a>
                        </li>
                        <li class="menu-title">Label <a href="#"><i class="fa fa-plus"></i></a></li>
                        <li> 
                          <a href="#"><i class="fa fa-circle text-success mail-label w-auto"></i> Work</a>
                        </li>
                        <li> 
                          <a href="#"><i class="fa fa-circle text-danger mail-label w-auto"></i> Office</a>
                        </li>
                        <li> 
                          <a href="#"><i class="fa fa-circle text-warning mail-label w-auto"></i> Personal</a>
                        </li>
                      </ul>
                    </div>
                  </div>
         </div>
      
          <mailviewcontent />

          </div>
                
        </div>
        <!-- /Page Content -->

        </div>

        </div>
        
      </div>
      <!-- /Page Wrapper -->
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    components: {
   
    },
    mounted() {


    },
    name: 'mailview'
  }
</Script>