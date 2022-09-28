 <template>
<li class="nav-item dropdown has-arrow main-drop">
            <a href="#" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
              <span class="user-img"><img src="../assets/img/profiles/avatar-21.jpg" alt=""></span>
              <span>{{ user ? user.name : 'N/A'}}</span>
            </a>
            <div class="dropdown-menu">
              <router-link class="dropdown-item" to="/profile">My Profile</router-link>
              <router-link class="dropdown-item" to="/settings">Settings</router-link>
              <router-link class="dropdown-item" to="/login">Logout</router-link>
            </div>
          </li>
</template>
<script setup>
  import {useAuthStore} from '../store/AuthStore.js'
  const store = useAuthStore()
  const {user} =  store
</script>