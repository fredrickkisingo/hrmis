<template>
    <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table mb-0" id="holidaycontent">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title </th>
                      <th>Holiday Date</th>
                      <th>Day</th>
                      <th class="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="holiday-completed" v-for="item in holiday" :key="item.id">
                      <td>{{item.no}}</td>
                      <td>{{item.title}}</td>
                      <td>{{item.holidaydate}}</td>
                      <td>
                        <span class="role-info role-bg-two">{{item.day}}</span>
                      </td>
                      <td class="text-end ico-sec">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#edit_holiday"><i class="fas fa-pen"></i></a>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#delete_holiday"><i class="far fa-trash-alt"></i></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
</template>
<script>
import holiday from '../../../../assets/json/holiday.json';
import util from '../../../../assets/utils/util'
  import Vue from 'vue'
  export default {
    data() {
    return {
      holiday: holiday
    }
    },
    components: {
    },
    mounted() {
    util.datatable('#holidaycontent')
    },
  }
</Script>