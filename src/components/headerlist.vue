<template>
<ul class="header-new-menu">
          <li>
            <a href="#" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Clients</a>
            <div class="dropdown-menu">
              <router-link class="dropdown-item" to="/clients">Clients</router-link>
            </div>
          </li>
          <li>
            <a href="#" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Projects</a>
            <div class="dropdown-menu">
              <router-link class="dropdown-item" to="/projects">Projects</router-link>
              <router-link class="dropdown-item" to="/tasks">Tasks</router-link>
              <router-link class="dropdown-item" to="/task-board">Task Board</router-link>
            </div>
          </li>
          <li>
            <a href="#" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Leads</a>
            <div class="dropdown-menu">
              <router-link class="dropdown-item" to="/leads">Leads</router-link>
            </div>
          </li>
          <li>
            <a href="#" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Tickets</a>
            <div class="dropdown-menu">
              <router-link class="dropdown-item" to="/tickets">Tickets</router-link>
            </div>
          </li>
        </ul>
</template>