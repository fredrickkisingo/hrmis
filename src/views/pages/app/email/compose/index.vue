<template>
  <div class="compose">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>

   
       <!-- Page Wrapper -->
       <div class="page-wrapper">
      
        <!-- Page Content -->
        <div class="content container-fluid">
        
         <composeheader />

         <div class="row">

         <mailsidebar />

                   <div class="col-md-8 col-lg-9 settings-cont">
              <div class="card">
                <div class="card-body">
                  <form>
                    <div class="form-group">
                      <input type="email" placeholder="To" class="form-control">
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <input type="email" placeholder="Cc" class="form-control">
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <input type="email" placeholder="Bcc" class="form-control">
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <input type="text" placeholder="Subject" class="form-control">
                    </div>
                    <div class="form-group">
                      <textarea rows="4" class="form-control summernote" placeholder="Enter your message here"></textarea>
                    </div>
                    <div class="form-group mb-0">
                      <div class="text-center">
                        <button class="btn btn-primary"><span>Send</span> <i class="fa fa-send m-l-5"></i></button>
                        <button class="btn btn-success m-l-5" type="button"><span>Draft</span> <i class="fa fa-floppy-o m-l-5"></i></button>
                        <button class="btn btn-success m-l-5" type="button"><span>Delete</span> <i class="fa fa-trash-o m-l-5"></i></button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

         </div>
        
          </div>
        <!-- /Page Content -->
        
            </div>
      <!-- /Page Wrapper -->
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    components: {
   
    },
    mounted() {

    },
    name: 'compose'
  }
</Script>