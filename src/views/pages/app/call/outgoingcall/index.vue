<template>
  <div class="outgoingcall">
    <div class="main-wrapper">
      <main-header></main-header>
      <sidebar></sidebar>

      <!-- Page Wrapper -->
      <div class="page-wrapper">

      <div class="content container-fluid pb-0">
       <!-- Page Header -->
          <div class="row">
            <div class="col-md-12">
              <div class="page-head-box">
                <h3>Outgoing Call</h3>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/index">Dashboard</router-link></li>
                    <li class="breadcrumb-item active" aria-current="page">Outgoing Call</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <!-- /Page Header -->

          <div class="row">
        <div class="col-md-4 col-lg-3">
              <div class="card settings-menu">
                <div class="sidebar-menu">
                  <ul>
                    <li class="menu-title"><span>Chat Groups</span> <a href="#" data-bs-toggle="modal" data-bs-target="#add_group"><i class="fa fa-plus"></i></a></li>
                    <li> 
                      <router-link to="/chat">
                        <span class="chat-avatar-sm user-img">
                          <img class="rounded-circle" alt="" src="../../../../../assets/img/user.jpg">
                        </span> 
                        <span class="chat-user">#General</span>
                      </router-link>
                    </li>
                    <li> 
                      <router-link to="/chat">
                        <span class="chat-avatar-sm user-img">
                          <img class="rounded-circle" alt="" src="../../../../../assets/img/user.jpg">
                        </span> 
                        <span class="chat-user">#Video Responsive Survey</span>
                      </router-link>
                    </li>
                    <li> 
                      <router-link to="/chat">
                        <span class="chat-avatar-sm user-img">
                          <img class="rounded-circle" alt="" src="../../../../../assets/img/user.jpg">
                        </span> 
                        <span class="chat-user">#500rs</span>
                      </router-link>
                    </li>
                    <li> 
                      <router-link to="/chat">
                        <span class="chat-avatar-sm user-img">
                          <img class="rounded-circle" alt="" src="../../../../../assets/img/user.jpg">
                        </span> 
                        <span class="chat-user">#warehouse</span>
                      </router-link>
                    </li>
                    <li class="menu-title">Direct Chats <a href="#" data-bs-toggle="modal" data-bs-target="#add_chat_user"><i class="fa fa-plus"></i></a></li>
                    <li>
                      <router-link to="/chat">
                        <span class="chat-avatar-sm user-img">
                          <img class="rounded-circle" alt="" src="../../../../../assets/img/profiles/avatar-02.jpg"><span class="status online"></span>
                        </span> 
                        <span class="chat-user">John Doe</span> <span class="badge rounded-pill bg-danger">1</span>
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/chat">
                        <span class="chat-avatar-sm user-img">
                          <img class="rounded-circle" alt="" src="../../../../../assets/img/profiles/avatar-09.jpg"><span class="status offline"></span>
                        </span> 
                        <span class="chat-user">Richard Miles</span> <span class="badge rounded-pill bg-danger">7</span>
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/chat">
                        <span class="chat-avatar-sm user-img">
                          <img class="rounded-circle" alt="" src="../../../../../assets/img/profiles/avatar-10.jpg"><span class="status away"></span>
                        </span> 
                        <span class="chat-user">John Smith</span>
                      </router-link>
                    </li>
                    <li class="active">
                      <router-link to="/chat">
                        <span class="chat-avatar-sm user-img">
                          <img class="rounded-circle" alt="" src="../../../../../assets/img/profiles/avatar-05.jpg"><span class="status online"></span>
                        </span> 
                        <span class="chat-user">Mike Litorus</span> <span class="badge rounded-pill bg-danger">2</span>
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
        </div>

        <div class="col-md-8 col-lg-9 settings-cont">
      
        <!-- Outgoing Call -->
        <div class="call-box outgoing-box">
          <div class="call-wrapper">
            <div class="call-inner">
              <div class="call-user">
                <img alt="" src="../../../../../assets/img/profiles/avatar-02.jpg" class="call-avatar">
                <h4>John Doe</h4>
                <span>Connecting...</span>
              </div>              
              <div class="call-items">
                <a href="javascript:void(0);" class="btn call-item"><i class="material-icons">mic</i></a>
                <a href="javascript:void(0);" class="btn call-item"><i class="material-icons">videocam</i></a>
                <router-link to="/chat" class="btn call-item call-end"><i class="material-icons vcend">call_end</i></router-link>
                <a href="javascript:void(0);" class="btn call-item"><i class="material-icons">person_add</i></a>
                <a href="javascript:void(0);" class="btn call-item"><i class="material-icons">volume_up</i></a>
              </div>
            </div>
          </div>
        </div>
        <!-- Outgoing Call -->

        </div>

        </div>

        </div>

        
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
    name: 'outgoingcall'
  }
</Script>