<template>

<div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0 datatable" id="offerapprovecontent">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Job Title</th>
                      <th>Job Type</th>
                      <th>Pay</th>
                      <th>Annual IP</th>
                      <th>Long Term IP</th>
                      <th>Status</th>
                      <th class="text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in offerapproval" :key="item.id">
                      <td>{{item.no}}</td>
                      <td>
                        <h2 class="table-avatar">
                          <router-link to="/profile" class="avatar"><img alt="" :src="loadImg(item.image)"></router-link>
                          <router-link to="/profile">{{item.name}} <span>{{item.name1}}</span></router-link>
                        </h2>
                      </td>
                      <td><router-link to="/job-details">{{item.jobtitle}}</router-link></td>
                      <td>{{item.jobtype}}</td>
                      <td>{{item.pay}}</td>
                      <td>{{item.annualip}}</td>
                      <td>{{item.longtermip}}</td>
                      <td><label class="role-info role-bg-three" style="display: inline-block;min-width: 90px;">{{item.status}}</label></td>
                      <td class="text-end ico-sec">
                        <a href="#"><i class="fas fa-pen"></i></a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#delete_job"><i class="far fa-trash-alt"></i></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
</template>
<script>
import offerapproval from '../../../../assets/json/offerapproval.json';
import util from '../../../../assets/utils/util'
const images = require.context('../../../../assets/img/profiles', false, /\.png$|\.jpg$/)
  import Vue from 'vue'
  export default {
    data() {
    return {
      offerapproval: offerapproval
    }
    },
    components: {
    },
    mounted() {
    util.datatable('#offerapprovecontent')
    },
    methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
    },
    }
  }
</Script>