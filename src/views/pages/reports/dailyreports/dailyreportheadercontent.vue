<template>
<!-- Search Filter -->
<div class="row filter-row">
<div class="col-md-10"></div>
<div class="col-md-2">
<div class="add-emp-section">
<a href="#" class="btn btn-success btn-add-emp"> PDF</a>
</div>
</div>
</div>
<!-- /Search Filter -->

<div class="row">
<div class="col-md-6 col-sm-6 col-lg-6 col-xl-3" v-for="item in dailyreport" :key="item.id">
<div class="card flex-fill tickets-card">
<div class="card-header">
<div class="text-center w-100 p-3">
<h3 class="bl-text mb-1">{{item.no}}</h3>
<h2>{{item.description}}</h2>
</div>
</div>
</div>
</div>
</div>
</template>
<script>
import dailyreport from '../../../../assets/json/dailyreport.json';
  import Vue from 'vue'
  export default {
    data() {
    return {
      dailyreport: dailyreport
    }
    },
    components: {
    }
  }
</Script>