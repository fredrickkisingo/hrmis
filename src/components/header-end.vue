<template>
  <li class="nav-item dropdown has-arrow main-drop">
    <a href="#" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
      <span class="user-img"
        ><img src="../assets/img/profiles/avatar-21.jpg" alt=""
      /></span>
      <span>{{ user ? user.name : "N/A" }}</span>

    </a>
    <div class="dropdown-menu">
      <router-link class="dropdown-item" to="/profile">My Profile</router-link>
      <router-link class="dropdown-item" to="/settings">Settings</router-link>
      <a class="dropdown-item" href="#" @click.prevent="logOut">Logout</a>
    </div>
  </li>
</template>
<script setup>
  import axios from "axios";
import { router } from "../router/index.js";
import { useAuthStore } from "../store/AuthStore.js";
const store = useAuthStore();
const { setUser, user,acesstoken } = store;

function logOut(){
  var token =  localStorage.getItem('acesstoken');

  console.log(token)


 
  axios.post('/api/logout',{
    //data
  },{
        headers: {
          Authorization: `Bearer ${token}`,
          token: token
        },
      }).then(({data,status}) => {
    setUser(null);
          // next();
          router.push({name:'login'})
        })

}
</script>
