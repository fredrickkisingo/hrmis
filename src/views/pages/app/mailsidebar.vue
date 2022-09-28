<template>
<div class="col-md-4 col-lg-3">
              <div class="card settings-menu">
              <div class="sidebar-menu">
                    <ul>
                    
                        <li> 
                            <router-link to="/inbox"><i class="la la-home"></i> <span>Back to Inbox</span></router-link>
                        </li>
                        <li class="inbox"> 
                            <router-link to="/inbox">Inbox<span class="mail-count">(21)</span></router-link>
                        </li>
                        <li> 
                            <a href="#">Starred</a>
                        </li>
                        <li> 
                            <a href="#">Sent Mail</a>
                        </li>
                        <li> 
                            <a href="#">Draft <span class="mail-count">(8)</span></a>
                        </li>
                        <li> 
                            <a href="#">Trash</a>
                        </li>
                       
                        <li class="menu-title">Label <a href="#"><i class="fa fa-plus"></i></a></li>
                        <li> 
                            <a href="#"><i class="fa fa-circle text-success mail-label"></i> Work</a>
                        </li>
                        <li> 
                            <a href="#"><i class="fa fa-circle text-danger mail-label"></i> Office</a>
                        </li>
                        <li> 
                            <a href="#"><i class="fa fa-circle text-warning mail-label"></i> Personal</a>
                        </li>
                    </ul>
              </div>
</div>
</div>
</template>
<script>  
    export default {
    components: {
    },
      computed: {
        currentPath() {
          return this.$route.path;
        },
      },
     data() {
       return {
                settings: {
                    suppressScrollX: true,
                },
                activeClass: 'active',
            };
              //  isactive : true
    },
          }
         
          </script>