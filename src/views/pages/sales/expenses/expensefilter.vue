<template>
  <!-- Search Filter -->
          <div class="row filter-row">
            <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">  
              <div class="form-group form-focus mb-0">
                <input type="text" class="form-control floating">
                <label class="focus-label">Item Name</label>
              </div>
            </div>
            <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">  
              <div class="form-group form-focus select-focus mb-0">
                <vue-select :options="expensefilterpurchased" />
                <label class="focus-label">Purchased By</label>
              </div>
            </div>
            <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">  
              <div class="form-group form-focus mb-0">
                <div class="cal-icon">
                          <datepicker v-model="startdate"  class="picker1" 
                          :editable="true"
                          :clearable="false" />
                    </div>
              
              </div>
            </div>
            <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">  
              <div class="form-group form-focus mb-0">
                <div class="cal-icon">
                          <datepicker v-model="enddate"  class="picker1" 
                          :editable="true"
                          :clearable="false" />
                    </div>
                
              </div>
            </div>
            <div class="col-sm-6 col-md-2">
              <a href="#" class="btn btn-success btn-search"><i class="fas fa-search me-2"></i> Search </a>
            </div>
            <div class="col-sm-6 col-md-2">
              <a href="#" class="btn btn-success btn-add-emp w-100" data-bs-toggle="modal" data-bs-target="#add_expense">Add Expense</a>
            </div>
                 
          </div>
          <!-- /Search Filter -->
</template>
<script>
  import Vue from 'vue'
   import { ref } from 'vue'
  const currentDate = ref(new Date())
  const currentDate1 = ref(new Date())
  export default {
    data() {
    return {
      expensefilterpurchased: ["-- Select --", "Loren Gatlin", "Tarah Shropshire"],
      expensefilterpaid: ["-- Select --", "Cash", "Cheque"],
      startdate: currentDate,
      enddate: currentDate1,
    }
    },
    components: {
   
    },
    mounted() {
    },
  }
</Script>