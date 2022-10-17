<template>
  <form>
    <div class="row">
      <div class="col-sm-6">
        <div class="form-group">
          <label class="col-form-label"
            >First Name <span class="text-danger">*</span></label
          >
          <input class="form-control" v-model="form.firstName" type="text" />
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label class="col-form-label">Last Name</label>
          <input class="form-control" v-model="form.name1" type="text" />
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label class="col-form-label"
            >Username <span class="text-danger">*</span></label
          >
          <input class="form-control" v-model="form.otherName" type="text" />
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label>Role</label>
          <vue-select :options="adduserrole" />
        </div>
      </div>

      <div class="col-sm-6">
        <div class="form-group">
          <label class="col-form-label"
            >Email <span class="text-danger">*</span></label
          >
          <input
            class="form-control"
            v-model="form.email"
            type="email"
          />
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label class="col-form-label">Password</label>
          <input class="form-control" v-model="form.password" type="password" />
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label class="col-form-label">Confirm Password</label>
          <input class="form-control" v-model="form.password" type="password" />
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label class="col-form-label"
            >Employee ID <span class="text-danger">*</span></label
          >
          <input
            type="text"
            v-model="form.employeeid"
            readonly
            class="form-control floating"
          />
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label class="col-form-label"
            >Joining Date <span class="text-danger">*</span></label
          >
          <div class="cal-icon">
            <datepicker
              v-model="enddate"
              class="picker"
              :editable="true"
              :clearable="false"
            />
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label class="col-form-label">Phone </label>
          <input class="form-control" value="9876543210" type="text" />
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label class="col-form-label">Company</label>
          <vue-select :options="editempcompany" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label>Department <span class="text-danger">*</span></label>
          <vue-select :options="editempdepartment" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label>Designation <span class="text-danger">*</span></label>
          <vue-select :options="editempdesignation" />
        </div>
      </div>
    </div>

    <div class="submit-section">
      <button class="btn btn-primary submit-btn">Save</button>
    </div>
  </form>
</template>
<script>
export default {
  name: "EditEmployeeModal",
  props: ["employee"],
  created() {
    const context = this;
    this.$nextTick(() => {
      console.log("Employeee", context.employee);
      context.form.firstName = context.employee.name;
      context.form.lastName = context.employee.name;
      context.form.email = context.employee.email;
    });
  },
  methods: {
    showProps() {
      console.log(this.employee);
      this.form.firstName = this.employee.name;
      this.form.lastName = this.employee.name;
      this.form.email = this.employee.email;
    },
  },
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
      },
      addempcompany: [
        "Global Technologies",
        "Delta Infotech",
        "International Software Inc",
      ],
      addempdepartment: [
        "Select Department",
        "Web Development",
        "IT Management",
        "Marketing",
      ],
      adduserrole: ["Admin", "Client", "Employee"],
      addempdesignation: [
        "Select Designation",
        "Web Designer",
        "Web Developer",
        "Android Developer",
      ],
      editempdepartment: [
        "Select Department",
        "Web Development",
        "IT Management",
        "Marketing",
      ],
      editempdesignation: [
        "Select Designation",
        "Web Designer",
        "Web Developer",
        "Android Developer",
      ],
      editempcompany: [
        "Global Technologies",
        "Delta Infotech",
        "International Software Inc",
      ],
      enddate: null,
    };
  },
};
</script>
