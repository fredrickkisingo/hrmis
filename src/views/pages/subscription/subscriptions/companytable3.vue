<template>
<!-- Add Plan Modal -->
              <div class="modal custom-modal fade" id="add_plan" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-md modal-dialog-centered">
                  <div class="modal-content">
                    <button type="button" class="close" data-bs-dismiss="modal"><i class="fa fa-close"></i></button>
                    <div class="modal-body">
                      <h5 class="modal-title text-center mb-3">Add Plan</h5>
                      <form>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label>Plan Name</label>
                              <input type="text" placeholder="Free Trial" class="form-control">
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label>Plan Amount</label>
                              <input type="text" class="form-control">
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label>Plan Type</label>
                              <vue-select :options="subscriptionplantype" />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label>No of Users</label>
                              <vue-select :options="subscriptionnoofusers" />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label>No of Projects</label>
                              <vue-select :options="subscriptionnoofprojects" />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label>No of Storage Space</label>
                              <vue-select :options="subscriptionnoofstoragespace" />
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <label>Plan Description</label>
                          <textarea class="form-control" rows="4" cols="30"></textarea>
                        </div>
                        <div class="form-group">
                          <label class="d-block">Status</label>
                          <div class="status-toggle">
                            <input type="checkbox" id="add_plan_status" class="check">
                            <label for="add_plan_status" class="checktoggle">checkbox</label>
                          </div>
                        </div>
                        <div class="m-t-20 text-center">
                          <button class="btn btn-primary submit-btn">Submit</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /Add Plan Modal -->
</template>
<script>
  import Vue from 'vue'
  import { ref } from 'vue'
  export default {
    components: {   
    },
    data() {
    return {
      subscriptionplantype: ["Monthly", "Yearly"],
      subscriptionnoofusers: ['5 Users', '50 Users', 'Unlimited'],
      subscriptionnoofprojects: ['5 Projects', '50 Projects', 'Unlimited'],
      subscriptionnoofstoragespace: ['5 GB', '100 GB', '500 GB']
    }
    },
    mounted() {
    }
  }
</Script>