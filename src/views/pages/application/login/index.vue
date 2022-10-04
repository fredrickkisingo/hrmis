<template>
  <div class="login account-page" style="height: 100vh !important">
    <!-- Main Wrapper -->

    <div class="main-wrapper">
      <div class="account-content">
        <div class="container">
          <div class="account-box">
            <div class="account-wrapper">
              <h3 class="account-title">Login</h3>
              <p class="account-subtitle">Access to our dashboard</p>
              <!-- Account Form -->
              <form method="post" class="login" @submit.prevent="onSubmit">
                <div class="form-group">
                  <label>Email Address</label>
                  <input
                    name="email"
                    type="text"
                    v-model="form.email"
                    class="form-control"
                    :class="{ 'is-invalid': errors.email }"
                  />
                  <div class="invalid-feedback" v-if="errors.email">
                    {{ errors.email[0] }}
                  </div>
                  <div class="emailshow text-danger" id="email"></div>
                </div>
                <div class="form-group password-icon">
                  <div class="row">
                    <div class="col">
                      <label>Password</label>
                    </div>
                    <div class="col-auto">
                      <router-link class="text-muted" to="/forgot-password">
                        Forgot password?
                      </router-link>
                    </div>
                  </div>
                  <input
                    name="password" autocomplete="on"
                    :type="showPassword ? 'text' : 'password'"
                    v-model="form.password"
                    class="form-control pass-input"
                    :class="{ 'is-invalid': errors.password }"
                  /><span
                    @click="showPassword = !showPassword"
                    class="fa toggle-password pt-4"
                    :class="showPassword ? 'fa-eye' : 'fa-eye-slash'"
                  ></span>
                  <div class="invalid-feedback" v-if="errors.password">
                    {{ errors.password[0] }}
                  </div>
                  <input
                    name="device_name"
                    type="hidden"
                    v-model="web"
                    class="form-control"
                    :class="{ 'is-invalid': errors.device_name }"
                  />
                  <div class="emailshow text-danger" id="password"></div>
                </div>
                <div class="form-group text-center">
                  <button
                    class="btn btn-primary account-btn"
                    type="submit"
                    value="Login"
                  >
                    Login
                  </button>
                </div>
                <div class="account-footer">
                  <p>
                    Don't have an account yet?
                    <router-link to="/register">Register</router-link>
                  </p>
                </div>
              </form>
              <!-- /Account Form -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Main Wrapper -->
  </div>
</template>
<script setup>
import axios from "axios";

import { mapStores } from "pinia";
import { useAuthStore } from "../../../../store/AuthStore.js";
import { ref } from "vue";
import { router } from "../../../../router/index";
import { fetchUser } from "../../../../utils/auth.js";
const form = ref({
  email: "",
  password: "",
  device_name:"web"
});

const store = useAuthStore();

const { setUser } = store;

const { setAccessToken } = store;

const errors = ref({});

const showPassword = ref(false);

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

const completeform = form.value

function onSubmit() {
const email = completeform.email
const password= completeform.password


  // if (!email.length) {
  //   errors.value = { email: ["Email is required!"] };
  // }else if(email.length){

  //   errors.value='' 
  // }

  // if (!password.length) {
  //   errors.value = {
  //     ...errors.value,
  //     password: ["Password is required"],
  //   };
  // }else if(password.length){
  //   errors.value = {
  //     ...errors.value,
  //     '': '',
  //   };  
  // }

  // console.log(errors)

  // if(!(isEmpty(errors.value))){
  //   return;
  // }


  axios.get("/sanctum/csrf-cookie").then((response) => {

    axios
      .post("/api/auth/login", form.value)
      .then(async (response) => {

        const newUser = await fetchUser(response.data.access_token);
        setUser(newUser);
        setAccessToken(response.data.access_token);
        router.push({ name: "landing" });
      })
      .catch((error) => {
        // console.log(error.response);

        if (error.response.status == 422) {
          errors.value = error.response.data.errors;
        }
      }); // credentials didn't match);
  });
}
</script>
<style></style>
