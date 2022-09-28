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
                  <div
                    class="invalid-feedback"
                    v-if="errors.hasOwnProperty('email')"
                  >
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
                    name="password"
                    type="password"
                    v-model="form.password"
                    class="form-control pass-input"
                    :class="{ 'is-invalid': errors.password }"
                  /><span class="fa fa-eye-slash toggle-password pt-4"></span>
                  <div
                    class="invalid-feedback"
                    v-if="errors.hasOwnProperty('password')"
                  >
                    {{ errors.password[0] }}
                  </div>
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
import {ref} from 'vue'
import {router} from '../../../../router/index'
const form = ref({
  email: "",
  password: "",
});

const store = useAuthStore()

const {setUser} = store

const errors = ref({});

const showPassword = ref(false);

function onSubmit() {
  axios.get("/sanctum/csrf-cookie").then((response) => {
    axios
      .post("/login", form)
      .then((response) => {
        axios.get("/api/user").then(({data, status}) => {
          setUser(data)
          router.push({name: 'landing'})
        });
      })
      .catch((error) => console.log(error)); // credentials didn't match
  });
}

</script>
<style></style>
