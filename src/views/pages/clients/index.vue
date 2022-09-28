<template>
  <div class="clients">
    <div class="main-wrapper">
       <main-header></main-header>
      <sidebar></sidebar>
      <!-- Page Wrapper -->
      <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
        
        <clientsheader />  
          
        <clientsfilter />  
          
        <div class="row staff-grid-row">

            <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3" v-for="item in client" :key="item.id">
              <div class="card user-card emp-card clnt-card">
                <div class="user-img-sec">
                  <img :src="loadImg(item.image)" alt="User Image">
                  <h4>{{item.name}}</h4>
                  <h5>{{item.name1}}</h5>
                  <h6 class="bg-1">{{item.owner}}</h6>

                  <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="fas fa-ellipsis-v"></i>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_client">Edit</a>
                      <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_client">Delete</a>
                    </div>
                  </div>

                  <div class="comment-sec">
                    <i class="fas fa-comment-dots"></i>
                  </div>
                </div>
                <ul class="client-img-li">
                  <li>
                    <img src="../../../assets/img/client-small.png" alt="..." />
                  </li>
                  <li>
                    <img src="../../../assets/img/client-small.png" alt="..." />
                  </li>
                  <li>
                    <a href="#">
                      <img src="../../../assets/img/client-small.png" alt="..." />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="../../../assets/img/client-small.png" alt="..." />
                    </a>
                  </li>
                </ul>
                <div class="card-footer">
                  <router-link to="/client-profile">View Profile</router-link>
                </div>
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
import client from '../../../assets/json/client.json';
const images = require.context('../../../assets/img', false, /\.png$|\.jpg$/)
  import Vue from 'vue'
  export default {
     data() {
    return {
      client: client
    }
    },
    components: {
   
    },
    mounted() {
    },
     methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
    },
    },
    name: 'clients'
  }
</Script>