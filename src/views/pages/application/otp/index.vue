<template>
  <div class="otp account-page" style="height: 100vh;">
    <!-- Main Wrapper -->
        <div class="main-wrapper">
      <div class="account-content">
       
        <div class="container">
        
          
          <div class="account-box">
            <div class="account-wrapper">
              <h3 class="account-title">OTP</h3>
              <p class="account-subtitle">Verification your account</p>
              
              <!-- Account Form -->
              <form action="/index">
                <div class="otp-wrap">
                  <input type="text" placeholder="0" maxlength="1" class="otp-input">
                  <input type="text" placeholder="0" maxlength="1" class="otp-input">
                  <input type="text" placeholder="0" maxlength="1" class="otp-input">
                  <input type="text" placeholder="0" maxlength="1" class="otp-input">
                </div>
                <div class="form-group text-center">
                  <button class="btn btn-primary account-btn" type="submit">Enter</button>
                </div>
                <div class="account-footer">
                  <p>Not yet received? <a href="javascript:void(0);">Resend OTP</a></p>
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
<script>
  import Vue from 'vue'
  export default {
    components: {
   
    },
    mounted() {

    },
    name: 'otp'
  }
</Script>