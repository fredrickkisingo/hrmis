<template>
  <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0">
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
                    <tr v-for="item in invoices" :key="item.id">
                      <td>{{item.no}}</td>
                      <td><router-link to="/invoice-view">{{item.invoicenumber}}</router-link></td>
                      <td>{{item.client}}</td>
                      <td>{{item.createddate}}</td>
                      <td>{{item.duedate}}</td>
                      <td>{{item.amount}}</td>
                      <td><span class="role-info role-bg-one">{{item.status}}</span></td>
                      <td class="text-end ico-sec">
                        <router-link to="/edit-invoice"><i class="fas fa-pen"></i></router-link>
                        <router-link to="/edit-invoice"><i class="fas fa-eye"></i></router-link>
                        <a href="#"><i class="fas fa-download"></i></a>
                        <a href="#"><i class="far fa-trash-alt"></i></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
</template>
<script>
import invoices from '../../../../../assets/json/invoices.json';
  import Vue from 'vue'
  export default {
    data() {
    return {
      invoices: invoices
    }
    },
    components: {
    }
  }
</Script>