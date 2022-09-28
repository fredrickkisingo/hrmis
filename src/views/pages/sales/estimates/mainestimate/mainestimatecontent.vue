<template>
<table class="table table-striped custom-table mb-0">

                  <thead>
                    <tr>
                      <th>Estimate Number</th>
                      <th>Client</th>
                      <th>Estimate Date</th>
                      <th>Expiry Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th class="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in estimate" :key="item.id">
                      <td><router-link to="/estimate-view">{{item.estimateno}}</router-link></td>
                      <td>{{item.client}}</td>
                      <td>{{item.estimatedate}}</td>
                      <td>{{item.expirydate}}</td>
                      <td>{{item.amount}}</td>
                      <td><span class="role-info role-bg-one">{{item.status}}</span></td>
                      <td class="text-end ico-sec">
                        <router-link to="/edit-estimate"><i class="fas fa-pen"></i></router-link>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#delete_estimate"><i class="far fa-trash-alt"></i></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
</template>
<script>
import estimate from '../../../../../assets/json/estimate.json';
  import Vue from 'vue'
  export default {
    data() {
    return {
      estimate: estimate
    }
    },
    components: {
    },
  }
</Script>