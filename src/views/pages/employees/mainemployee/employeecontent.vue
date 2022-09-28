<template>
<div class="row">
            <div class="col-md-4 col-lg-4 col-xl-3" v-for="item in employee" :key="item.id">
              <div class="card user-card emp-card">
                <div class="user-img-sec">
                  <img :src="loadImg(item.image)" alt="User Image">
                  <h4>{{item.name}}</h4>
                  <h5>{{item.designation}}</h5>
                  <h6 class="bg-1">{{item.role}}</h6>

                  <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="fas fa-ellipsis-v"></i>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_employee">Edit</a>
                      <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_employee">Delete</a>
                    </div>
                  </div>

                  <div class="comment-sec">
                    <i class="fas fa-comment-dots"></i>
                  </div>
                </div>
                <div class="card-body pb-0">
                  <h4>Employee ID <span>FT-0001</span></h4>
                  <h4>Date of Join <span>1st Jan 2013</span></h4>
                </div>
                <div class="card-footer">
                  <router-link to="/profile">View Profile</router-link>
                </div>
              </div>
            </div>
</div>

</template>
<script>
import employee from '../../../../assets/json/employee.json';
const images = require.context('../../../../assets/img/profiles', false, /\.png$|\.jpg$/)
  import Vue from 'vue'
  export default {
    data() {
    return {
      employee: employee
    }
  },
    components: {
    },
    methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
    },
    }
  }
</Script>