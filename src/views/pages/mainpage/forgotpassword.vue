<template>
  <div class="forgotpassword account-page" style="height: 100vh;">
    <!-- Main Wrapper -->
        <div class="main-wrapper">
    
          <div class="account-box">
            <div class="account-wrapper">
              <h3 class="account-title">Forgot Password?</h3>
              <p class="account-subtitle">Enter your email to get a password reset link</p>
              
              <!-- Account Form -->
              <form>
                <div class="form-group">
                  <label>Email Address</label>
                  <input class="form-control" type="text">
                </div>
                <div class="form-group text-center">
                  <button class="btn btn-primary account-btn" type="submit">Reset Password</button>
                </div>
                <div class="account-footer">
                  <p>Remember your password? <router-link to="/login">Login</router-link></p>
                </div>
              </form>
              <!-- /Account Form -->
              
            </div>
          </div>
        </div>
        </div>
    <!-- /Main Wrapper -->
</template>
<script>
  import Vue from 'vue'
  export default {
    components: {
   
    },
    mounted() {
    },
    name: 'forgotpassword'
  }
</Script>