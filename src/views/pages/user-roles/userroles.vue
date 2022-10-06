<template>
  <div class="row">
    <div class="col-md-12">
      <div class="table-responsive">
        <table
          class="table table-striped custom-table datatable"
          id="userroles"
        >
          <thead>
            <tr>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Manager</td>
              <td class="text-end ico-sec">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#edit_user_role"
                  ><i class="fas fa-pen"></i
                ></a>
                <a href="#" data-bs-toggle="modal" data-bs-target="#delete_user"
                  ><i class="far fa-trash-alt"></i
                ></a>
              </td>
            </tr>
            <tr>
              <td>Accountant</td>
              <td class="text-end ico-sec">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#edit_user_role"
                  ><i class="fas fa-pen"></i
                ></a>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#delete_user_role"
                  ><i class="far fa-trash-alt"></i
                ></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import util from "../../../assets/utils/util";
import Vue from "vue";
export default {
  data() {
    return {};
  },
  components: {},
  mounted() {
    util.datatable("#userroles");
  },
  beforeUnmount() {
    util.destroyDatatable('#userroles')
  },
  name: "UserRoles",
};
</script>
