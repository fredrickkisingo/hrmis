<template>
  <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0 datatable" 
id="invoicereporttable">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Invoice Number</th>
                      <th>Client</th>
                      <th>Created Date</th>
                      <th>Due Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th class="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in invoicereport" :key="item.id">
                      <td>{{item.no}}</td>
                      <td><router-link to="/invoice-view">{{item.invoiceno}}</router-link></td>
                      <td>{{item.client}}</td>
                      <td>{{item.createddate}}</td>
                      <td>{{item.duedate}}</td>
                      <td>{{item.amount}}</td>
                      <td><span class="role-info role-bg-one">{{item.status}}</span></td>
                      <td class="text-end ico-sec">
                        <a class="dropdown-item" href="#"><i class="fas fa-pen"></i></a>
                        <a class="dropdown-item" href="#"><i class="fas fa-eye"></i></a>
                        <a class="dropdown-item" href="#"><i class="fas fa-download"></i></a>
                        <a class="dropdown-item" href="#"><i class="far fa-trash-alt"></i></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
</template>
<script>
import invoicereport from '../../../../assets/json/invoicereport.json';
import util from '../../../../assets/utils/util'
  import Vue from 'vue'
  export default {
    data() {
    return {
      invoicereport: invoicereport
    }
    },
    components: {
    },
    mounted() {
    util.datatable('#invoicereporttable')
    },
  }
</Script>