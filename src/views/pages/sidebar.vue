<template>
  <div>
   <!-- Sidebar -->
            <div class="sidebar" id="sidebar">
            <perfect-scrollbar class="scroll-area"  :settings="settings" @ps-scroll-y="scrollHanle">
           <div class="sidebar-left"> 
          <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a v-bind:class="{'active': currentPath == 'employee-dashboard'  || currentPath == 'index' || currentPath == '/'}" class="nav-link" id="v-pills-dashboard-tab" title="Dashboard" data-bs-toggle="pill" href="#v-pills-dashboard" role="tab" aria-controls="v-pills-dashboard" aria-selected="true">
              <span class="material-icons-outlined">
                home
              </span>
            </a>
            <a v-bind:class="{'show active': currentPath == 'chat'  || currentPath == 'voice-call'  || currentPath == 'video-call'  || currentPath == 'outgoing-call'  || currentPath == 'incoming-call'  || currentPath == 'events'  || currentPath == 'contacts'  || currentPath == 'inbox'  || currentPath == 'file-manager'}" class="nav-link" id="v-pills-apps-tab" title="Apps" data-bs-toggle="pill" href="#v-pills-apps" role="tab" aria-controls="v-pills-apps" aria-selected="false">
              <span class="material-icons-outlined">
                dashboard
              </span>
            </a>
            <a v-bind:class="{'show active': currentPath == 'overtime' || currentPath == 'shift-scheduling' || currentPath == 'timesheet' || currentPath == 'overtime' || currentPath == 'shift-scheduling' || currentPath == 'timesheet' || currentPath == 'employees'  || currentPath == 'holidays'  || currentPath == 'leaves'  || currentPath == 'leaves-employee'  || currentPath == 'leave-settings'  || currentPath == 'attendance'  || currentPath == 'attendance-employee'  || currentPath == 'departments'  || currentPath == 'designations'}" class="nav-link" id="v-pills-employees-tab" title="Employees" data-bs-toggle="pill" href="#v-pills-employees" role="tab" aria-controls="v-pills-employees" aria-selected="false">
              <span class="material-icons-outlined">
                people
              </span>
            </a>
            <a v-bind:class="{'active': currentPath == 'clients'}" class="nav-link" id="v-pills-clients-tab" title="Clients" data-bs-toggle="pill" href="#v-pills-clients" role="tab" aria-controls="v-pills-clients" aria-selected="false">
              <span class="material-icons-outlined">
                person
              </span>
            </a>
            <a v-bind:class="{'active': currentPath == 'projects' || currentPath == 'tasks' || currentPath == 'task-board'}" class="nav-link" id="v-pills-projects-tab" title="Projects" data-bs-toggle="pill" href="#v-pills-projects" role="tab" aria-controls="v-pills-projects" aria-selected="false">
              <span class="material-icons-outlined">
                topic
              </span>
            </a>
            <a v-bind:class="{'active': currentPath == 'leads'}" class="nav-link" id="v-pills-leads-tab" title="Leads" data-bs-toggle="pill" href="#v-pills-leads" role="tab" aria-controls="v-pills-leads" aria-selected="false">
              <span class="material-icons-outlined">
                leaderboard
              </span>
            </a>
            <a v-bind:class="{'active': currentPath == 'tickets'}" class="nav-link" id="v-pills-tickets-tab" title="Tickets" data-bs-toggle="pill" href="#v-pills-tickets" role="tab" aria-controls="v-pills-tickets" aria-selected="false">
              <span class="material-icons-outlined">
                confirmation_number
              </span>
            </a>
            <a v-bind:class="{'active': currentPath == 'estimates' || currentPath == 'taxes' || currentPath == 'provident-fund' || currentPath == 'expenses' || currentPath == 'payments' || currentPath == 'invoices' || currentPath == 'add-estimate'}" class="nav-link" id="v-pills-sales-tab" title="Sales" data-bs-toggle="pill" href="#v-pills-sales" role="tab" aria-controls="v-pills-sales" aria-selected="false">
              <span class="material-icons-outlined">
                shopping_bag
              </span>
            </a>
            <a v-bind:class="{'active': currentPath == 'budget-revenues' || currentPath == 'budget-expenses' || currentPath == 'budgets' || currentPath == 'categories'}" class="nav-link" id="v-pills-accounting-tab" title="Accounting" data-bs-toggle="pill" href="#v-pills-accounting" role="tab" aria-controls="v-pills-accounting" aria-selected="false">
              <span class="material-icons-outlined">
                account_balance_wallet
              </span>
            </a>
            <a v-bind:class="{'active': currentPath == 'payroll-items' || currentPath == 'salary-view' || currentPath == 'salary'}" class="nav-link" id="v-pills-payroll-tab" title="Payroll" data-bs-toggle="pill" href="#v-pills-payroll" role="tab" aria-controls="v-pills-payroll" aria-selected="false">
              <span class="material-icons-outlined">
                request_quote
              </span>
            </a>
            <a v-bind:class="{'active': currentPath == 'policies'}" class="nav-link" id="v-pills-policies-tab" title="Policies" data-bs-toggle="pill" href="#v-pills-policies" role="tab" aria-controls="v-pills-policies" aria-selected="false">
              <span class="material-icons-outlined">
                verified_user
              </span>
            </a>
            <a v-bind:class="{'active': currentPath == 'daily-reports' || currentPath == 'leave-reports' || currentPath == 'attendance-reports' || currentPath == 'payslip-reports' || currentPath == 'employee-reports' || currentPath == 'user-reports' || currentPath == 'task-reports' || currentPath == 'project-reports' || currentPath == 'payments-reports' || currentPath == 'invoice-reports' || currentPath == 'expense-reports' || currentPath == 'attendance-reports'}" class="nav-link" id="v-pills-reports-tab" title="Reports" data-bs-toggle="pill" href="#v-pills-reports" role="tab" aria-controls="v-pills-reports" aria-selected="false">
              <span class="material-icons-outlined">
                report_gmailerrorred
              </span>
            </a>
            <a v-bind:class="{'active': currentPath == 'performance-appraisal' || currentPath == 'performance' || currentPath == 'performance-indicator'}" class="nav-link" id="v-pills-performance-tab" title="Performance" data-bs-toggle="pill" href="#v-pills-performance" role="tab" aria-controls="v-pills-performance" aria-selected="false">
              <span class="material-icons-outlined">
                shutter_speed
              </span>
            </a>
            <a v-bind:class="{'active': currentPath == 'goal-tracking' || currentPath == 'goal-type'}" class="nav-link" id="v-pills-goals-tab" title="Goals" data-bs-toggle="pill" href="#v-pills-goals" role="tab" aria-controls="v-pills-goals" aria-selected="false">
              <span class="material-icons-outlined">
                track_changes
              </span>
            </a>
            <a v-bind:class="{'active': currentPath == 'training' || currentPath == 'trainers' || currentPath == 'training-type'}" class="nav-link" id="v-pills-training-tab" title="Training" data-bs-toggle="pill" href="#v-pills-training" role="tab" aria-controls="v-pills-training" aria-selected="false">
              <span class="material-icons-outlined">
                checklist_rtl
              </span>
            </a>
            <a v-bind:class="{'active': currentPath == 'promotion'}" class="nav-link" id="v-pills-promotion-tab" title="Promotions" data-bs-toggle="pill" href="#v-pills-promotion" role="tab" aria-controls="v-pills-promotion" aria-selected="false">
              <span class="material-icons-outlined">
                auto_graph
              </span>
            </a>
            <a v-bind:class="{'active': currentPath == 'resignation'}" class="nav-link" id="v-pills-resignation-tab" title="Resignation" data-bs-toggle="pill" href="#v-pills-resignation" role="tab" aria-controls="v-pills-resignation" aria-selected="false">
              <span class="material-icons-outlined">
                do_not_disturb_alt
              </span>
            </a>
            <a v-bind:class="{'active': currentPath == 'termination'}" class="nav-link" id="v-pills-termination-tab" title="Termination" data-bs-toggle="pill" href="#v-pills-termination" role="tab" aria-controls="v-pills-termination" aria-selected="false">
              <span class="material-icons-outlined">
                indeterminate_check_box
              </span>
            </a>
            <a  v-bind:class="{'active': currentPath == 'assets'}" class="nav-link" id="v-pills-assets-tab" title="Assets" data-bs-toggle="pill" href="#v-pills-assets" role="tab" aria-controls="v-pills-assets" aria-selected="false">
              <span class="material-icons-outlined">
                web_asset
              </span>
            </a>
            <a v-bind:class="{'active': currentPath == 'apptitude-result' || currentPath == 'schedule-timing' || currentPath == 'candidates' || currentPath == 'experiance-level' || currentPath == 'offer_approvals' || currentPath == 'interview-questions' || currentPath == 'shortlist-candidates' || currentPath == 'manage-resumes' || currentPath == 'job-applicants' || currentPath == 'jobs' || currentPath == 'jobs-dashboard' || currentPath == 'user-dashboard' || currentPath == 'applied-jobs' || currentPath == 'archived-jobs' || currentPath == 'apptitude-result'}" class="nav-link" id="v-pills-jobs-tab" title="Jobs" data-bs-toggle="pill" href="#v-pills-jobs" role="tab" aria-controls="v-pills-jobs" aria-selected="false">
              <span class="material-icons-outlined">
                work_outline
              </span>
            </a>
            <a v-bind:class="{'active': currentPath == 'knowledgebase'}" class="nav-link" id="v-pills-knowledgebase-tab" title="Knowledgebase" data-bs-toggle="pill" href="#v-pills-knowledgebase" role="tab" aria-controls="v-pills-knowledgebase" aria-selected="false">
              <span class="material-icons-outlined">
                school
              </span>
            </a>
            <a v-bind:class="{'active': currentPath == 'activities'}"  class="nav-link" id="v-pills-activities-tab" title="Activities" data-bs-toggle="pill" href="#v-pills-activities" role="tab" aria-controls="v-pills-activities" aria-selected="false">
              <span class="material-icons-outlined">
                toggle_off
              </span>
            </a>
            <a  v-bind:class="{'active': currentPath == 'users'}" class="nav-link" id="v-pills-users-tab" title="Users" data-bs-toggle="pill" href="#v-pills-users" role="tab" aria-controls="v-pills-users" aria-selected="false">
              <span class="material-icons-outlined">
                group_add
              </span>
            </a>
            <a  v-bind:class="{'active': currentPath == 'approval-setting' || currentPath == 'settings'}" class="nav-link" id="v-pills-settings-tab" title="Settings" data-bs-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
              <span class="material-icons-outlined">
                settings
              </span>
            </a>
            <a v-bind:class="{'active': currentPath == 'profile' || currentPath == 'client-profile'}" class="nav-link" id="v-pills-profile-tab" title="Profile" data-bs-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
              <span class="material-icons-outlined">
                manage_accounts
              </span>
            </a>
            <a v-bind:class="{'active': currentPath == 'lock-screen' || currentPath == 'otp' || currentPath == 'forgot-password' || currentPath == 'register' || currentPath == 'login'}" class="nav-link" id="v-pills-authentication-tab" title="Authentication" data-bs-toggle="pill" href="#v-pills-authentication" role="tab" aria-controls="v-pills-authentication" aria-selected="false">
              <span class="material-icons-outlined">
                perm_contact_calendar
              </span>
            </a>
            <a v-bind:class="{'active': currentPath == 'error-404' || currentPath == 'error-500'}" class="nav-link" id="v-pills-errorpages-tab" title="Error Pages" data-bs-toggle="pill" href="#v-pills-errorpages" role="tab" aria-controls="v-pills-errorpages" aria-selected="false">
              <span class="material-icons-outlined">
                announcement
              </span>
            </a>
            <a v-bind:class="{'active': currentPath == 'subscribed-companies' || currentPath == 'subscriptions-company' || currentPath == 'subscriptions'}" class="nav-link" id="v-pills-subscriptions-tab" title="Subscriptions" data-bs-toggle="pill" href="#v-pills-subscriptions" role="tab" aria-controls="v-pills-subscriptions" aria-selected="false">
              <span class="material-icons-outlined">
                loyalty
              </span>
            </a>
            <a v-bind:class="{'active': currentPath == 'blank-page' || currentPath == 'privacy-policy' || currentPath == 'terms' || currentPath == 'faq' || currentPath == 'search'}" class="nav-link" id="v-pills-pages-tab" title="Pages" data-bs-toggle="pill" href="#v-pills-pages" role="tab" aria-controls="v-pills-pages" aria-selected="false">
              <span class="material-icons-outlined">
                layers
              </span>
            </a>
            <a v-bind:class="{'active': currentPath == 'form-validation' || currentPath == 'form-mask' || currentPath == 'form-vertical' || currentPath == 'form-horizontal' || currentPath == 'form-input-groups' || currentPath == 'form-basic-inputs'}" class="nav-link" id="v-pills-forms-tab" title="Forms" data-bs-toggle="pill" href="#v-pills-forms" role="tab" aria-controls="v-pills-forms" aria-selected="false">
              <span class="material-icons-outlined">
                view_day
              </span>
            </a>
            <a v-bind:class="{'active': currentPath == 'data-tables' || currentPath == 'tables-basic'}" class="nav-link" id="v-pills-tables-tab" title="Tables" data-bs-toggle="pill" href="#v-pills-tables" role="tab" aria-controls="v-pills-tables" aria-selected="false">
              <span class="material-icons-outlined">
                table_rows
              </span>
            </a>
            <a class="nav-link" id="v-pills-documentation-tab" title="Documentation" data-bs-toggle="pill" href="#v-pills-documentation" role="tab" aria-controls="v-pills-documentation" aria-selected="false">
              <span class="material-icons-outlined">
                description
              </span>
            </a>
            <a class="nav-link" id="v-pills-changelog-tab" title="Changelog" data-bs-toggle="pill" href="#v-pills-changelog" role="tab" aria-controls="v-pills-changelog" aria-selected="false">
              <span class="material-icons-outlined">
                sync_alt
              </span>
            </a>
            <a class="nav-link" id="v-pills-multilevel-tab" title="Multilevel" data-bs-toggle="pill" href="#v-pills-multilevel" role="tab" aria-controls="v-pills-multilevel" aria-selected="false">
              <span class="material-icons-outlined">
                library_add_check
              </span>
            </a>
          </div>
        </div>
        </perfect-scrollbar>
        <div class="sidebar-right">
          <div class="tab-content" id="v-pills-tabContent">




            <div v-bind:class="{'show active': currentPath == 'employee-dashboard'  || currentPath == 'index'  || currentPath == '/'}" class="tab-pane fade" id="v-pills-dashboard" role="tabpanel" aria-labelledby="v-pills-dashboard-tab">
              <p>Dashboard</p>
              <ul>
                <li>
                  <router-link v-bind:class="{'active': currentPath == 'index' || currentPath == '/'}" to="/index">Admin Dashboard</router-link>
                </li>
                <li>
                  <router-link v-bind:class="{'active': currentPath == 'employee-dashboard'}" to="/employee-dashboard">Employee Dashboard</router-link>
                </li>
              </ul>
            </div>
            <div v-bind:class="{'show active': currentPath == 'chat'  || currentPath == 'voice-call'  || currentPath == 'video-call'  || currentPath == 'outgoing-call'  || currentPath == 'incoming-call'  || currentPath == 'events'  || currentPath == 'contacts'  || currentPath == 'inbox'  || currentPath == 'file-manager'}" class="tab-pane fade" id="v-pills-apps" role="tabpanel" aria-labelledby="v-pills-apps-tab">
              <p>App</p>
              <ul>
                <li>
                  <router-link v-bind:class="{'active': currentPath == 'chat'}" to="/chat">Chat</router-link>
                </li>
                <li class="sub-menu">
                  <a href="#">Calls <span class="menu-arrow"></span></a>
                  <ul style="display: none;">
                    <li><router-link v-bind:class="{'active': currentPath == 'voice-call'}" to="/voice-call">Voice Call</router-link></li>
                    <li><router-link v-bind:class="{'active': currentPath == 'video-call'}" to="/video-call">Video Call</router-link></li>
                    <li><router-link v-bind:class="{'active': currentPath == 'outgoing-call'}" to="/outgoing-call">Outgoing Call</router-link></li>
                    <li><router-link v-bind:class="{'active': currentPath == 'incoming-call'}" to="/incoming-call">Incoming Call</router-link></li>
                  </ul>
                </li>
                <li>
                  <router-link v-bind:class="{'active': currentPath == 'events'}" to="/events">Calendar</router-link>
                </li>
                <li>
                  <router-link v-bind:class="{'active': currentPath == 'contacts'}" to="/contacts">Contacts</router-link>
                </li>
                <li>
                  <router-link v-bind:class="{'active': currentPath == 'inbox'}" to="/inbox">Email</router-link>
                </li>
                <li>
                  <router-link v-bind:class="{'active': currentPath == 'file-manager'}" to="/file-manager">File Manager</router-link>
                </li>
              </ul>           
            </div>
            <div v-bind:class="{'show active': currentPath == 'overtime' || currentPath == 'shift-scheduling' || currentPath == 'timesheet' || currentPath == 'employees'  || currentPath == 'holidays'  || currentPath == 'leaves'  || currentPath == 'leaves-employee'  || currentPath == 'leave-settings'  || currentPath == 'attendance'  || currentPath == 'attendance-employee'  || currentPath == 'departments'  || currentPath == 'designations'}" class="tab-pane fade" id="v-pills-employees" role="tabpanel" aria-labelledby="v-pills-employees-tab">
              <p>Employees</p>
              <ul>
                <li><router-link v-bind:class="{'active': currentPath == 'employees'}" to="/employees">All Employees</router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'holidays'}" to="/holidays">Holidays</router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'leaves'}" to="/leaves">Leaves (Admin) <span class="badge rounded-pill bg-primary float-end">1</span></router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'leaves-employee'}" to="/leaves-employee">Leaves (Employee)</router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'leave-settings'}" to="/leave-settings">Leave Settings</router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'attendance'}" to="/attendance">Attendance (Admin)</router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'attendance-employee'}" to="/attendance-employee">Attendance (Employee)</router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'departments'}" to="/departments">Departments</router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'designations'}" to="/designations">Designations</router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'timesheet'}" to="/timesheet">Timesheet</router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'shift-scheduling'}" to="/shift-scheduling">Shift & Schedule</router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'overtime'}" to="/overtime">Overtime</router-link></li>
              </ul>
            </div>
            <div v-bind:class="{'show active': currentPath == 'clients'}" class="tab-pane fade" id="v-pills-clients" role="tabpanel" aria-labelledby="v-pills-clients-tab">
              <p>Clients</p>
              <ul>
                <li><router-link v-bind:class="{'active': currentPath == 'clients'}" to="/clients">Clients</router-link></li>
              </ul>
            </div>
            <div v-bind:class="{'show active': currentPath == 'projects' || currentPath == 'tasks' || currentPath == 'task-board'}" class="tab-pane fade" id="v-pills-projects" role="tabpanel" aria-labelledby="v-pills-projects-tab">
              <p>Projects</p>
              <ul>
                <li><router-link v-bind:class="{'active': currentPath == 'projects'}" to="/projects">Projects</router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'tasks'}" to="/tasks">Tasks</router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'task-board'}" to="/task-board">Task Board</router-link></li>
              </ul>
            </div>
            <div v-bind:class="{'show active': currentPath == 'leads'}" class="tab-pane fade" id="v-pills-leads" role="tabpanel" aria-labelledby="v-pills-leads-tab">
              <p>Leads</p>
              <ul>
                <li><router-link v-bind:class="{'active': currentPath == 'leads'}" to="/leads">Leads</router-link></li>
              </ul>
            </div>
            <div v-bind:class="{'show active': currentPath == 'tickets'}" class="tab-pane fade" id="v-pills-tickets" role="tabpanel" aria-labelledby="v-pills-tickets-tab">
              <p>Tickets</p>
              <ul>
                <li><router-link v-bind:class="{'active': currentPath == 'tickets'}" to="/tickets">Tickets</router-link></li>
              </ul>
            </div>
            <div v-bind:class="{'show active': currentPath == 'add-estimate' || currentPath == 'invoices' || currentPath == 'payments' || currentPath == 'expenses' || currentPath == 'provident-fund' || currentPath == 'taxes'  || currentPath == 'estimates'}" class="tab-pane fade" id="v-pills-sales" role="tabpanel" aria-labelledby="v-pills-sales-tab">
              <p>Sales</p>
              <ul>
                <li><router-link v-bind:class="{'active': currentPath == 'add-estimate' || currentPath == 'edit-estimate' || currentPath == 'estimates'}" to="/estimates">Estimates</router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'invoices'}" to="/invoices">Invoices</router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'payments'}" to="/payments">Payments</router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'expenses'}" to="/expenses">Expenses</router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'provident-fund'}" to="/provident-fund">Provident Fund</router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'taxes'}" to="/taxes">Taxes</router-link></li>
              </ul>
            </div>
            <div v-bind:class="{'show active': currentPath == 'categories' || currentPath == 'budgets' || currentPath == 'budget-expenses' || currentPath == 'budget-revenues'}" class="tab-pane fade" id="v-pills-accounting" role="tabpanel" aria-labelledby="v-pills-accounting-tab">
              <p>Accounting</p>
              <ul>
                <li><router-link v-bind:class="{'active': currentPath == 'categories'}" to="/categories">Categories</router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'budgets'}" to="/budgets">Budgets</router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'budget-expenses'}" to="/budget-expenses">Budget Expenses</router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'budget-revenues'}" to="/budget-revenues">Budget Revenues</router-link></li>
              </ul>
            </div>
            <div v-bind:class="{'show active': currentPath == 'salary' || currentPath == 'salary-view' || currentPath == 'payroll-items'}" class="tab-pane fade" id="v-pills-payroll" role="tabpanel" aria-labelledby="v-pills-payroll-tab">
              <p>Payroll</p>
              <ul>
                <li><router-link v-bind:class="{'active': currentPath == 'salary'}" to="/salary"> Employee Salary </router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'salary-view'}" to="/salary-view"> Payslip </router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'payroll-items'}" to="/payroll-items"> Payroll Items </router-link></li>
              </ul>
            </div>
            <div v-bind:class="{'show active': currentPath == 'policies'}" class="tab-pane fade" id="v-pills-policies" role="tabpanel" aria-labelledby="v-pills-policies-tab">
              <p>Policies</p>
              <ul>
                <li><router-link v-bind:class="{'active': currentPath == 'policies'}" to="/policies"> Policies </router-link></li>
              </ul>
            </div>
            <div v-bind:class="{'show active': currentPath == 'attendance-reports' || currentPath == 'invoice-reports' || currentPath == 'payments-reports' || currentPath == 'project-reports' || currentPath == 'task-reports' || currentPath == 'user-reports' || currentPath == 'employee-reports' || currentPath == 'payslip-reports' || currentPath == 'leave-reports' || currentPath == 'daily-reports'  || currentPath == 'expense-reports'}" class="tab-pane fade" id="v-pills-reports" role="tabpanel" aria-labelledby="v-pills-reports-tab">
              <p>Reports</p>
              <ul>
                <li><router-link v-bind:class="{'active': currentPath == 'expense-reports'}" to="/expense-reports"> Expense Report </router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'invoice-reports'}" to="/invoice-reports"> Invoice Report </router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'payments-reports'}" to="/payments-reports"> Payments Report </router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'project-reports'}" to="/project-reports"> Project Report </router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'task-reports'}" to="/task-reports"> Task Report </router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'user-reports'}" to="/user-reports"> User Report </router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'employee-reports'}" to="/employee-reports"> Employee Report </router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'payslip-reports'}" to="/payslip-reports"> Payslip Report </router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'attendance-reports'}" to="/attendance-reports"> Attendance Report </router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'leave-reports'}" to="/leave-reports"> Leave Report </router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'daily-reports'}" to="/daily-reports"> Daily Report </router-link></li>
              </ul>
            </div>
            <div v-bind:class="{'show active': currentPath == 'performance-indicator' || currentPath == 'performance' || currentPath == 'performance-appraisal'}" class="tab-pane fade" id="v-pills-performance" role="tabpanel" aria-labelledby="v-pills-performance-tab">
              <p>Performance</p>
              <ul>
                <li><router-link v-bind:class="{'active': currentPath == 'performance-indicator'}" to="/performance-indicator"> Performance Indicator </router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'performance'}" to="/performance"> Performance Review </router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'performance-appraisal'}" to="/performance-appraisal"> Performance Appraisal </router-link></li>
              </ul>
            </div>
            <div v-bind:class="{'show active': currentPath == 'goal-tracking' || currentPath == 'goal-type'}" class="tab-pane fade" id="v-pills-goals" role="tabpanel" aria-labelledby="v-pills-goals-tab">
              <p>Goals</p>
              <ul>
                <li><router-link v-bind:class="{'active': currentPath == 'goal-tracking'}" to="/goal-tracking"> Goal List </router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'goal-type'}" to="/goal-type"> Goal Type </router-link></li>
              </ul>
            </div>
            <div v-bind:class="{'show active': currentPath == 'training' || currentPath == 'trainers' || currentPath == 'training-type'}" class="tab-pane fade" id="v-pills-training" role="tabpanel" aria-labelledby="v-pills-training-tab">
              <p>Training</p>
              <ul>
                <li><router-link v-bind:class="{'active': currentPath == 'training'}" to="/training"> Training List </router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'trainers'}" to="/trainers"> Trainers</router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'training-type'}" to="/training-type"> Training Type </router-link></li>
              </ul>
            </div>
            <div v-bind:class="{'show active': currentPath == 'promotion'}" class="tab-pane fade" id="v-pills-promotion" role="tabpanel" aria-labelledby="v-pills-promotion-tab">
              <p>Promotion</p>
              <ul>
                <li><router-link v-bind:class="{'active': currentPath == 'promotion'}" to="/promotion"> Promotion </router-link></li>
              </ul>
            </div>
            <div v-bind:class="{'show active': currentPath == 'resignation'}" class="tab-pane fade" id="v-pills-resignation" role="tabpanel" aria-labelledby="v-pills-resignation-tab">
              <p>Resignation</p>
              <ul>
                <li><router-link v-bind:class="{'active': currentPath == 'resignation'}" to="/resignation"> Resignation </router-link></li>
              </ul>
            </div>
            <div v-bind:class="{'show active': currentPath == 'termination'}" class="tab-pane fade" id="v-pills-termination" role="tabpanel" aria-labelledby="v-pills-termination-tab">
              <p>Termination</p>
              <ul>
                <li><router-link v-bind:class="{'active': currentPath == 'termination'}" to="/termination"> Termination </router-link></li>
              </ul>
            </div>
            <div v-bind:class="{'show active': currentPath == 'assets'}" class="tab-pane fade" id="v-pills-assets" role="tabpanel" aria-labelledby="v-pills-assets-tab">
              <p>Assets</p>
              <ul>
                <li><router-link v-bind:class="{'active': currentPath == 'assets'}" to="/assets"> Assets </router-link></li>
              </ul>
            </div>
            
            <div v-bind:class="{'show active': currentPath == 'knowledgebase'}" class="tab-pane fade" id="v-pills-knowledgebase" role="tabpanel" aria-labelledby="v-pills-knowledgebase-tab">
              <p>Knowledgebase</p>
              <ul>
                <li><router-link v-bind:class="{'active': currentPath == 'knowledgebase'}" to="/knowledgebase"> Knowledgebase </router-link></li>
              </ul>
            </div>
            <div v-bind:class="{'show active': currentPath == 'activities'}" class="tab-pane fade show" id="v-pills-activities" role="tabpanel" aria-labelledby="v-pills-activities-tab">
              <p>Activities</p>
              <ul>
                <li><router-link v-bind:class="{'active': currentPath == 'activities'}" to="/activities"> Activities </router-link></li>
              </ul>
            </div>
            <div v-bind:class="{'show active': currentPath == 'users'}" class="tab-pane fade" id="v-pills-users" role="tabpanel" aria-labelledby="v-pills-users-tab">
              <p>Users</p>
              <ul>
                <li><router-link v-bind:class="{'active': currentPath == 'users'}" to="/users"> Users </router-link></li>
              </ul>
            </div>
            <div v-bind:class="{'show active': currentPath == 'approval-setting' || currentPath == 'settings'}" class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
              <p>Settings</p>
              <ul>
                <li><router-link v-bind:class="{'active': currentPath == 'approval-setting' || currentPath == 'settings'}" to="/settings"> Settings </router-link></li>
              </ul>
            </div>
            <div v-bind:class="{'show active': currentPath == 'profile' || currentPath == 'client-profile'}" class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
              <p>Profile</p>
              <ul>
                <li><router-link v-bind:class="{'active': currentPath == 'profile'}" to="/profile"> Employee Profile </router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'client-profile'}" to="/client-profile"> Client Profile </router-link></li>
              </ul>
            </div>
            <div v-bind:class="{'show active': currentPath == 'login' || currentPath == 'register' || currentPath == 'forgot-password' || currentPath == 'otp' || currentPath == 'lock-screen'}" class="tab-pane fade" id="v-pills-authentication" role="tabpanel" aria-labelledby="v-pills-authentication-tab">
              <p>Authentication</p>
              <ul>
                <li><router-link v-bind:class="{'active': currentPath == 'login'}" to="/login"> Login </router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'register'}" to="/register"> Register </router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'forgot-password'}" to="/forgot-password"> Forgot Password </router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'otp'}" to="/otp"> OTP </router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'lock-screen'}" to="/lock-screen"> Lock Screen </router-link></li>
              </ul>
            </div>
            <div v-bind:class="{'show active': currentPath == 'error-404' || currentPath == 'error-500'}" class="tab-pane fade" id="v-pills-errorpages" role="tabpanel" aria-labelledby="v-pills-errorpages-tab">
              <p>Error Pages</p>
              <ul>
                <li><router-link v-bind:class="{'active': currentPath == 'error-404'}" to="/error-404">404 Error </router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'error-500'}" to="/error-500">500 Error </router-link></li>
              </ul>
            </div>
            <div v-bind:class="{'show active': currentPath == 'subscriptions' || currentPath == 'subscriptions-company' || currentPath == 'subscribed-companies'}" class="tab-pane fade" id="v-pills-subscriptions" role="tabpanel" aria-labelledby="v-pills-subscriptions-tab">
              <p>Subscriptions</p>
              <ul>
                <li><router-link v-bind:class="{'active': currentPath == 'subscriptions'}" to="/subscriptions"> Subscriptions (Admin) </router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'subscriptions-company'}" to="/subscriptions-company"> Subscriptions (Company) </router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'subscribed-companies'}" to="/subscribed-companies"> Subscribed Companies</router-link></li>
              </ul>
            </div>
            <div v-bind:class="{'show active': currentPath == 'blank-page' || currentPath == 'search' || currentPath == 'faq' || currentPath == 'terms' || currentPath == 'privacy-policy'}" class="tab-pane fade" id="v-pills-pages" role="tabpanel" aria-labelledby="v-pills-pages-tab">
              <p>Pages</p>
              <ul>
                <li><router-link v-bind:class="{'active': currentPath == 'search'}" to="/search"> Search </router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'faq'}" to="/faq"> FAQ </router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'terms'}" to="/terms"> Terms </router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'privacy-policy'}" to="/privacy-policy"> Privacy Policy </router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'blank-page'}" to="/blank-page"> Blank Page </router-link></li>
              </ul>
            </div>
            <div v-bind:class="{'show active': currentPath == 'form-basic-inputs' || currentPath == 'form-input-groups' || currentPath == 'form-horizontal' || currentPath == 'form-vertical' || currentPath == 'form-mask' || currentPath == 'form-validation'}" class="tab-pane fade" id="v-pills-forms" role="tabpanel" aria-labelledby="v-pills-forms-tab">
              <p>Forms</p>
              <ul>
                <li><router-link v-bind:class="{'active': currentPath == 'form-basic-inputs'}" to="/form-basic-inputs">Basic Inputs </router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'form-input-groups'}" to="/form-input-groups">Input Groups </router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'form-horizontal'}" to="/form-horizontal">Horizontal Form </router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'form-vertical'}" to="/form-vertical"> Vertical Form </router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'form-mask'}" to="/form-mask"> Form Mask </router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'form-validation'}" to="/form-validation"> Form Validation </router-link></li>
              </ul>
            </div>
            <div v-bind:class="{'show active': currentPath == 'tables-basic' || currentPath == 'data-tables'}" class="tab-pane fade" id="v-pills-tables" role="tabpanel" aria-labelledby="v-pills-tables-tab">
              <p>Tables</p>
              <ul>
                <li><router-link v-bind:class="{'active': currentPath == 'tables-basic'}" to="/tables-basic">Basic Tables </router-link></li>
                <li><router-link v-bind:class="{'active': currentPath == 'data-tables'}" to="/data-tables">Data Table </router-link></li>
              </ul>
            </div>
            <div class="tab-pane fade" id="v-pills-documentation" role="tabpanel" aria-labelledby="v-pills-documentation-tab">
              <p>Documentation</p>
              <ul>
                <li><a href="#">Documentation </a></li>
              </ul>
            </div>
            <div class="tab-pane fade" id="v-pills-changelog" role="tabpanel" aria-labelledby="v-pills-changelog-tab">
              <p>Change Log</p>
              <ul>
                <li><a href="#"><span>Change Log</span> <span class="badge badge-primary ms-auto">v3.4</span> </a></li>
              </ul>
            </div>
            <div class="tab-pane fade" id="v-pills-multilevel" role="tabpanel" aria-labelledby="v-pills-multilevel-tab">
              <p>Multi Level</p>
              <ul>
                <li class="sub-menu">
                  <a href="javascript:void(0);">Level 1 <span class="menu-arrow"></span></a>
                  <ul style="display: none;" class="ms-3">
                    <li class="sub-menu">
                      <a href="javascript:void(0);">Level 1 <span class="menu-arrow"></span></a>
                      <ul>
                        <li><a href="javascript:void(0);">Level 2</a></li>
                        <li><a href="javascript:void(0);">Level 3</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>               
                <li><a href="javascript:void(0);">Level 2</a></li>
                <li><a href="javascript:void(0);">Level 3</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- Sidebar -->
  </div>
  </template>
  <script>  
   import {PerfectScrollbar}  from 'vue3-perfect-scrollbar'
    import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
    export default {
      components: {
    PerfectScrollbar ,
    },
    mounted() {
      $('.sub-menu a').on('click', function(e) {
      if($(this).parent().hasClass('submenu')) {
        e.preventDefault();
      }
      if(!$(this).hasClass('subdrop')) {
        $('ul', $(this).parents('ul:first')).slideUp(350);
        $('a', $(this).parents('ul:first')).removeClass('subdrop');
        $(this).next('ul').slideDown(350);
        $(this).addClass('subdrop');
      } else if($(this).hasClass('subdrop')) {
        $(this).removeClass('subdrop');
        $(this).next('ul').slideUp(350);
      }
    });
    $('#sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');

    },
      computed: {
        currentPath() {
            return this.$route.name;
        }
      },
    data() {
       return {
                settings: {
                    suppressScrollX: true,
                },
                activeClass: 'active',
              };
           },
    methods: {
    scrollHanle(evt) {     
    }
    },
    } 
  </script>
  <style>
  .scroll-area {
  position: relative;
  margin: auto;
  height: calc(100vh - 60px);
  background-color: transparent !important;
  }
  </style>