import { createRouter, createWebHistory } from "vue-router";

/********dashboard routes******/
import main from "../views/pages/dashboard/admin/main";
// import employee from "../views/pages/dashboard/employee";

/********activities route******/
// import activities from "../views/pages/activities";

/********policies route******/
import policies from "../views/pages/policies";

/********knowledgebase route******/
import knowledgebase from "../views/pages/knowledgebase";
import view from "../views/pages/knowledgebase";

/********jobs component route******/
import appliedjobs from "../views/pages/jobs/appliedjobs";
import aptituteresult from "../views/pages/jobs/aptituteresult";
import archivedjobs from "../views/pages/jobs/archivedjobs";
import candidatelist from "../views/pages/jobs/candidatelist";
import experiancelevel from "../views/pages/jobs/experiancelevel";
import interviewing from "../views/pages/jobs/interviewing";
import interviewquestions from "../views/pages/jobs/interviewquestions";
import headerjobapplicants from "../views/pages/jobs/jobapplicants/headerjobapplicants";
import jobapplicantscontent from "../views/pages/jobs/jobapplicants/jobapplicantscontent";
import jobaptitute from "../views/pages/jobs/jobaptitute";
import jobdetails from "../views/pages/jobs/jobdetails";
import joblist from "../views/pages/jobs/joblist";
import mainjobs from "../views/pages/jobs/mainjobs";
import jobsdashboard from "../views/pages/jobs/jobsdashboard";
import jobview from "../views/pages/jobs/jobview";
import manageresume from "../views/pages/jobs/manageresume";
import offerapprove from "../views/pages/jobs/offerapprove";
import offeredjob from "../views/pages/jobs/offeredjob";
import visitedjob from "../views/pages/jobs/visitedjobs";
import userdashboard from "../views/pages/jobs/userdashboard";
import useralljobs from "../views/pages/jobs/useralljobs";
import shortlistcandidate from "../views/pages/jobs/shortlistcandidate";
import question from "../views/pages/jobs/question";
import savedjob from "../views/pages/jobs/savedjob";
import scheduletiming from "../views/pages/jobs/scheduletiming";

/********settings component route******/
import approvalsetting from "../views/pages/settings/approvalsetting";
import changepassword from "../views/pages/settings/changepassword";
import cronsetting from "../views/pages/settings/cronsetting";
import emailsettings from "../views/pages/settings/emailsettings";
import invoicesettings from "../views/pages/settings/invoicesettings";
import leavetype from "../views/pages/settings/leavetype";
import localization from "../views/pages/settings/localization";
import notification from "../views/pages/settings/notification";
import performancesetting from "../views/pages/settings/performancesetting";
import toxboxsetting from "../views/pages/settings/toxboxsetting";
import themesetting from "../views/pages/settings/themesetting";
import rolepermission from "../views/pages/settings/rolepermission";
import salarysetting from "../views/pages/settings/salarysetting";
import mainsetting from "../views/pages/settings/mainsetting";

/********assets component route******/
import assets from "../views/pages/assets";

/********leads component route******/
import leads from "../views/pages/leads";

/********Application component route******/
import lockscreen from "../views/pages/application/lockscreen";
import login from "../views/pages/application/login";
import register from "../views/pages/application/register";
import otp from "../views/pages/application/otp";

/********employee component route******/
import attendance from "../views/pages/employees/attendance";
import attendanceemployee from "../views/pages/employees/attendanceemployee";
import departments from "../views/pages/employees/departments";
import designations from "../views/pages/employees/designations";
import mainemployee from "../views/pages/employees/mainemployee";
import employeeslistindex from "../views/pages/employees/mainemployee/employeeslistindex";
import holidays from "../views/pages/employees/holidays";
import leave from "../views/pages/employees/leave";
import leaveemployee from "../views/pages/employees/leaveemployee";
import leavesettings from "../views/pages/employees/leavesettings";
import overtime from "../views/pages/employees/overtime";
import timesheet from "../views/pages/employees/timesheet";
import shift from "../views/pages/employees/shift";
import scheduling from "../views/pages/employees/scheduling";

/********report component route******/
import attendancereport from "../views/pages/reports/attendancereport";
import dailyreports from "../views/pages/reports/dailyreports";
import employeereports from "../views/pages/reports/employeereports";
import expensereports from "../views/pages/reports/expensereports";
import invoicereport from "../views/pages/reports/invoicereport";
import leavereport from "../views/pages/reports/leavereport";
import paymentreport from "../views/pages/reports/paymentreport";
import payslipreport from "../views/pages/reports/payslipreport";
import projectreport from "../views/pages/reports/projectreport";
import userreports from "../views/pages/reports/userreport";
import taskreport from "../views/pages/reports/taskreport";

/********account component route******/
import blankpage from "../views/pages/account/blankpage";

/********accounting component route******/
import budgetexpenses from "../views/pages/accounting/budgetexpenses";
import budgetrevenues from "../views/pages/accounting/budgetrevenues";
import budgets from "../views/pages/accounting/budgets";
import categories from "../views/pages/accounting/categories";
import subcategory from "../views/pages/accounting/subcategory";

/********app component route******/
import chat from "../views/pages/app/chat";
import events from "../views/pages/app/events";
import inbox from "../views/pages/app/inbox";
import compose from "../views/pages/app/email/compose";
import contacts from "../views/pages/app/contacts";
import filemanager from "../views/pages/app/filemanager";
import incomingcall from "../views/pages/app/call/incomingcall";
import outgoingcall from "../views/pages/app/call/outgoingcall";
import mailview from "../views/pages/app/email/mailview";
import voicecall from "../views/pages/app/call/voicecall";
import videocall from "../views/pages/app/call/videocall";

/********profile component route******/
import clientprofile from "../views/pages/profile/clientprofile";
import profile from "../views/pages/profile";

/********client component route******/
import index from "../views/pages/clients";
import clientlistindex from "../views/pages/clients/clientlistindex";

/********components component route******/
import components from "../views/pages/components";

/********sales component route******/
import createestimate from "../views/pages/sales/estimates/createestimate";
import createinvoice from "../views/pages/sales/invoices/createinvoice";
import editestimate from "../views/pages/sales/estimates/editestimate";
import editinvoice from "../views/pages/sales/invoices/editinvoice";
import mainestimate from "../views/pages/sales/estimates/mainestimate";
import estimateview from "../views/pages/sales/estimates/estimateview";
import espenses from "../views/pages/sales/expenses";
import maininvoice from "../views/pages/sales/invoices/maininvoice";
import invoiceview from "../views/pages/sales/invoices/invoiceview";
import payments from "../views/pages/sales/payments";
import providentfund from "../views/pages/sales/providentfund";
import taxes from "../views/pages/sales/taxes";
import addestimate from "../views/pages/sales/estimates/addestimate";

/********table component route******/
import datatable from "../views/pages/table/datatable";
import tablebasic from "../views/pages/table/tablebasic";

/********dashboard routes******/
import error404 from "../views/pages/error/error404";
import error500 from "../views/pages/error/error500";

/********mainpage route******/
import faq from "../views/pages/mainpage/faq";
import forgotpassword from "../views/pages/mainpage/forgotpassword";
import privacypolicy from "../views/pages/mainpage/privacypolicy";
import term from "../views/pages/mainpage/term";
import termination from "../views/pages/mainpage/termination";
import search from "../views/pages/mainpage/search";

/********form route******/
import basicinputs from "../views/pages/form/basicinputs";
import horizontal from "../views/pages/form/horizontal";
import inputgroups from "../views/pages/form/inputgroups";
import formmask from "../views/pages/form/formmask";
import formvalidation from "../views/pages/form/formvalidation";
import formvertical from "../views/pages/form/formvertical";

/********goals route******/
import goaltracking from "../views/pages/goals/goaltracking";
import goaltype from "../views/pages/goals/goaltype";

/********payroll route******/
import payrollitems from "../views/pages/payroll/payrollitems";
import salary from "../views/pages/payroll/salary";
import salaryview from "../views/pages/payroll/salaryview";

/********performance route******/
import performance from "../views/pages/performance";
import performanceappraisal from "../views/pages/performance/performanceappraisal";
import performanceindicator from "../views/pages/performance/performanceindicator";

/********project route******/
import projectlist from "../views/pages/project/projectlist";

/********projects route******/
import mainproject from "../views/pages/projects/mainproject";
import projectview from "../views/pages/projects/projectview";
import promotion from "../views/pages/promotion";
import taskboard from "../views/pages/projects/taskboard";

/********user route******/
import users from "../views/pages/users";


/********user rolesroute******/
import user_roles from "../views/pages/user-roles";

// "email": "the@admin.com",
// 	"password": "admin123",

/********training route******/
import maintraining from "../views/pages/training/maintraining";
import training from "../views/pages/training/maintraining";
import trainers from "../views/pages/training/trainers";

/********tickets route******/
import ticketview from "../views/pages/tickets/ticketview";
import mainticket from "../views/pages/tickets/mainticket";

/********task route******/
import tasks from "../views/pages/tasks";

/********resignation route******/
import resignation from "../views/pages/resignation";

/********subscriptions route******/
import subscriptioncompany from "../views/pages/subscription/subscriptioncompany";
import subscriptions from "../views/pages/subscription/subscriptions";
import subscribedcompanies from "../views/pages/subscription/subscribedcompanies";
import { useAuthStore } from "../store/AuthStore";
import { fetchUser } from "../utils/auth";
const axios = require("axios");




const routes = [
  {
    path: "/",
    name: "landing",
    component: () => import("../views/pages/dashboard/admin/main"),
    beforeEnter: async (to, form, next) => {
      const { setUser, user,accesstoken } = useAuthStore();

      const authenticatedUser =
        user || JSON.parse(localStorage.getItem("user"));
        accesstoken || localStorage.getItem("accesstoken")
      if (authenticatedUser != null) {
        //user is logged in
        setUser(authenticatedUser);
      } else {
        try {
          const newUser = await fetchUser();
          setUser(newUser);
        } catch (e) {
          next("login");
        }
      }
      next();
    },
  },
//   {
//     path: '/employee-dashboard',
//     name: 'employee-dashboard',
//     component: () => import('../views/pages/dashboard/employee'),
//     meta: {
//     requiresAuth: true
// }
// },
//  {
//     path: '/activities',
//     name: 'activities',
//     component: () => import('../views/pages/activities'),
//     meta: {
//     requiresAuth: true
// }
// },
  {
    path: "/applied-jobs",
    name: "applied-jobs",
    component: () => import("../views/pages/jobs/appliedjobs"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/approval-setting",
    name: "approval-setting",
    component: () => import("../views/pages/settings/approvalsetting"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/apptitude-result",
    name: "apptitute-result",
    component: () => import("../views/pages/jobs/aptituteresult"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/archived-jobs",
    name: "archived-jobs",
    component: () => import("../views/pages/jobs/archivedjobs"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/assets",
    name: "assets",
    component: () => import("../views/pages/assets"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/attendance",
    name: "attendance",
    component: () => import("../views/pages/employees/attendance"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/attendance-employee",
    name: "attendance-employee",
    component: () => import("../views/pages/employees/attendanceemployee"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/attendance-reports",
    name: "attendance-reports",
    component: () => import("../views/pages/reports/attendancereport"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/blank-page",
    name: "blank-page",
    component: () => import("../views/pages/account/blankpage"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/budget-expenses",
    name: "budget-expenses",
    component: () => import("../views/pages/accounting/budgetexpenses"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/budget-revenues",
    name: "budget-revenues",
    component: () => import("../views/pages/accounting/budgetrevenues"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/budgets",
    name: "budgets",
    component: () => import("../views/pages/accounting/budgets"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/candidates",
    name: "candidates",
    component: () => import("../views/pages/jobs/candidatelist"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/categories",
    name: "categories",
    component: () => import("../views/pages/accounting/categories"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/change-password",
    name: "change-password",
    component: () => import("../views/pages/settings/changepassword"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/chat",
    name: "chat",
    component: () => import("../views/pages/app/chat"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/client-profile",
    name: "client-profile",
    component: () => import("../views/pages/profile/clientprofile"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/clients",
    name: "clients",
    component: () => import("../views/pages/clients/index"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/clients-list",
    name: "clients-list",
    component: () => import("../views/pages/clients/clientlistindex"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/components",
    name: "components",
    component: () => import("../views/pages/components"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/compose",
    name: "compose",
    component: () => import("../views/pages/app/email/compose"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/contacts",
    name: "contacts",
    component: () => import("../views/pages/app/contacts"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/create-estimate",
    name: "create-estimate",
    component: () => import("../views/pages/sales/estimates/createestimate"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/create-invoice",
    name: "create-invoice",
    component: () => import("../views/pages/sales/invoices/createinvoice"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/cron-setting",
    name: "cron-setting",
    component: () => import("../views/pages/settings/cronsetting"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/daily-reports",
    name: "daily-reports",
    component: () => import("../views/pages/reports/dailyreports"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/data-tables",
    name: "data-tables",
    component: () => import("../views/pages/table/datatable"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/departments",
    name: "departments",
    component: () => import("../views/pages/employees/departments"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/designations",
    name: "designations",
    component: () => import("../views/pages/employees/designations"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/edit-estimate",
    name: "edit-estimate",
    component: () => import("../views/pages/sales/estimates/editestimate"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/edit-invoice",
    name: "edit-invoice",
    component: () => import("../views/pages/sales/invoices/editinvoice"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/email-settings",
    name: "email-settings",
    component: () => import("../views/pages/settings/emailsettings"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/employee-reports",
    name: "employee-reports",
    component: () => import("../views/pages/reports/employeereports"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/employees",
    name: "employees",
    component: () => import("../views/pages/employees/mainemployee"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/employees-list",
    name: "employees-list",
    component: () =>
      import("../views/pages/employees/mainemployee/employeeslistindex"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/error-404",
    name: "error-404",
    component: () => import("../views/pages/error/error404"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/error-500",
    name: "error-500",
    component: () => import("../views/pages/error/error500"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/estimates",
    name: "estimates",
    component: () => import("../views/pages/sales/estimates/mainestimate"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/estimate-view",
    name: "estimate-view",
    component: () => import("../views/pages/sales/estimates/estimateview"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/events",
    name: "events",
    component: () => import("../views/pages/app/events"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/expense-reports",
    name: "expense-reports",
    component: () => import("../views/pages/reports/expensereports"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/expenses",
    name: "expenses",
    component: () => import("../views/pages/sales/expenses"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/experiance-level",
    name: "experiance-level",
    component: () => import("../views/pages/jobs/experiancelevel"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/faq",
    name: "faq",
    component: () => import("../views/pages/mainpage/faq"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/file-manager",
    name: "file-manager",
    component: () => import("../views/pages/app/filemanager"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: () => import("../views/pages/mainpage/forgotpassword"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/form-basic-inputs",
    name: "form-basic-inputs",
    component: () => import("../views/pages/form/basicinputs"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/form-horizontal",
    name: "form-horizontal",
    component: () => import("../views/pages/form/horizontal"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/form-input-groups",
    name: "form-input-groups",
    component: () => import("../views/pages/form/inputgroups"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/form-mask",
    name: "form-mask",
    component: () => import("../views/pages/form/formmask"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/form-validation",
    name: "form-validation",
    component: () => import("../views/pages/form/formvalidation"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/form-vertical",
    name: "form-vertical",
    component: () => import("../views/pages/form/formvertical"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/goal-tracking",
    name: "goal-tracking",
    component: () => import("../views/pages/goals/goaltracking"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/goal-type",
    name: "goal-type",
    component: () => import("../views/pages/goals/goaltype"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/holidays",
    name: "holidays",
    component: () => import("../views/pages/employees/holidays"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/inbox",
    name: "inbox",
    component: () => import("../views/pages/app/inbox"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/incoming-call",
    name: "incoming-call",
    component: () => import("../views/pages/app/call/incomingcall"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/interviewing",
    name: "interviewing",
    component: () => import("../views/pages/jobs/interviewing"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/interview-questions",
    name: "interview-questions",
    component: () => import("../views/pages/jobs/interviewquestions"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/invoice-reports",
    name: "invoice-reports",
    component: () => import("../views/pages/reports/invoicereport"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/invoices",
    name: "invoices",
    component: () => import("../views/pages/sales/invoices/maininvoice"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/invoice-settings",
    name: "invoice-settings",
    component: () => import("../views/pages/settings/invoicesettings"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/invoice-view",
    name: "invoice-view",
    component: () => import("../views/pages/sales/invoices/invoiceview"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/job-applicants",
    name: "job-applicants",
    component: () => import("../views/pages/jobs/jobapplicants"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/job-aptitude",
    name: "job-aptitude",
    component: () => import("../views/pages/jobs/jobaptitute"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/job-details",
    name: "job-details",
    component: () => import("../views/pages/jobs/jobdetails"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/job-list",
    name: "job-list",
    component: () => import("../views/pages/jobs/joblist"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/jobs",
    name: "jobs",
    component: () => import("../views/pages/jobs/mainjobs"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/jobs-dashboard",
    name: "jobs-dashboard",
    component: () => import("../views/pages/jobs/jobsdashboard"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/job-view",
    name: "job-view",
    component: () => import("../views/pages/jobs/jobview"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/knowledgebase",
    name: "knowledgebase",
    component: () => import("../views/pages/knowledgebase"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/knowledgebase-view",
    name: "knowledgebase-view",
    component: () => import("../views/pages/knowledgebase/view"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/leads",
    name: "leads",
    component: () => import("../views/pages/leads"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/leave-reports",
    name: "leave-reports",
    component: () => import("../views/pages/reports/leavereport"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/leaves",
    name: "leaves",
    component: () => import("../views/pages/employees/leave"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/leaves-employee",
    name: "leaves-employee",
    component: () => import("../views/pages/employees/leaveemployee"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/leave-settings",
    name: "leave-settings",
    component: () => import("../views/pages/employees/leavesettings"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/leave-type",
    name: "leave-type",
    component: () => import("../views/pages/settings/leavetype"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/localization",
    name: "localization",
    component: () => import("../views/pages/settings/localization"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/lock-screen",
    name: "lock-screen",
    component: () => import("../views/pages/application/lockscreen"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/pages/application/login"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/mail-view",
    name: "mail-view",
    component: () => import("../views/pages/app/email/mailview"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/manage-resumes",
    name: "manage-resumes",
    component: () => import("../views/pages/jobs/manageresume"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/notifications-settings",
    name: "notifications-settings",
    component: () => import("../views/pages/settings/notification"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/offer_approvals",
    name: "offer_approvals",
    component: () => import("../views/pages/jobs/offerapprove"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/offered-jobs",
    name: "offered-jobs",
    component: () => import("../views/pages/jobs/offeredjob"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/otp",
    name: "otp",
    component: () => import("../views/pages/application/otp"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/outgoing-call",
    name: "outgoing-call",
    component: () => import("../views/pages/app/call/outgoingcall"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/overtime",
    name: "overtime",
    component: () => import("../views/pages/employees/overtime"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/payments",
    name: "payments",
    component: () => import("../views/pages/sales/payments"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/payments-reports",
    name: "payments-reports",
    component: () => import("../views/pages/reports/paymentreport"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/payroll-items",
    name: "payroll-items",
    component: () => import("../views/pages/payroll/payrollitems"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/payslip-reports",
    name: "payslip-reports",
    component: () => import("../views/pages/reports/payslipreport"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/performance",
    name: "performance",
    component: () => import("../views/pages/performance"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/performance-appraisal",
    name: "performance-appraisal",
    component: () => import("../views/pages/performance/performanceappraisal"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/performance-indicator",
    name: "performance-indicator",
    component: () => import("../views/pages/performance/performanceindicator"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/performance-setting",
    name: "performance-setting",
    component: () => import("../views/pages/settings/performancesetting"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/policies",
    name: "policies",
    component: () => import("../views/pages/policies"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/privacy-policy",
    name: "privacy-policy",
    component: () => import("../views/pages/mainpage/privacypolicy"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/pages/profile"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/project-list",
    name: "project-list",
    component: () => import("../views/pages/project/projectlist"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/project-reports",
    name: "project-reports",
    component: () => import("../views/pages/reports/projectreport"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("../views/pages/projects/mainproject"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/project-view",
    name: "project-view",
    component: () => import("../views/pages/projects/projectview"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/promotion",
    name: "promotion",
    component: () => import("../views/pages/promotion"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/provident-fund",
    name: "provident-fund",
    component: () => import("../views/pages/sales/providentfund"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/voice-call",
    name: "voice-call",
    component: () => import("../views/pages/app/call/voicecall"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/visited-jobs",
    name: "visited-jobs",
    component: () => import("../views/pages/jobs/visitedjobs"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/video-call",
    name: "video-call",
    component: () => import("../views/pages/app/call/videocall"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/users",
    name: "users",
    component: () => import("../views/pages/users"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/user-roles",
    name: "user-roles",
    component: () => import("../views/pages/user-roles"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/user-reports",
    name: "user-reports",
    component: () => import("../views/pages/reports/userreport"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/user-dashboard",
    name: "user-dashboard",
    component: () => import("../views/pages/jobs/userdashboard"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/user-all-jobs",
    name: "user-all-jobs",
    component: () => import("../views/pages/jobs/useralljobs"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/training-type",
    name: "training-type",
    component: () => import("../views/pages/training/trainingtype"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/training",
    name: "training",
    component: () => import("../views/pages/training/maintraining"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/trainers",
    name: "trainers",
    component: () => import("../views/pages/training/trainers"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/toxbox-setting",
    name: "toxbox-setting",
    component: () => import("../views/pages/settings/toxboxsetting"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/timesheet",
    name: "timesheet",
    component: () => import("../views/pages/employees/timesheet"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/ticket-view",
    name: "ticket-view",
    component: () => import("../views/pages/tickets/ticketview"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/tickets",
    name: "tickets",
    component: () => import("../views/pages/tickets/mainticket"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/theme-settings",
    name: "theme-settings",
    component: () => import("../views/pages/settings/themesetting"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/terms",
    name: "terms",
    component: () => import("../views/pages/mainpage/term"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/termination",
    name: "termination",
    component: () => import("../views/pages/mainpage/termination"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/taxes",
    name: "taxes",
    component: () => import("../views/pages/sales/taxes"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/tasks",
    name: "tasks",
    component: () => import("../views/pages/tasks"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/task-reports",
    name: "task-reports",
    component: () => import("../views/pages/reports/taskreport"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/task-board",
    name: "task-board",
    component: () => import("../views/pages/projects/taskboard"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/tables-basic",
    name: "tables-basic",
    component: () => import("../views/pages/table/tablebasic"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/subscriptions-company",
    name: "subscriptions-company",
    component: () => import("../views/pages/subscription/subscriptioncompany"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/subscriptions",
    name: "subscriptions",
    component: () => import("../views/pages/subscription/subscriptions"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/subscribed-companies",
    name: "subscribed-companies",
    component: () => import("../views/pages/subscription/subscribedcompanies"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/sub-category",
    name: "sub-category",
    component: () => import("../views/pages/accounting/subcategory"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/shortlist-candidates",
    name: "shortlist-candidates",
    component: () => import("../views/pages/jobs/shortlistcandidate"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/questions",
    name: "questions",
    component: () => import("../views/pages/jobs/question"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/pages/application/register"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/resignation",
    name: "resignation",
    component: () => import("../views/pages/resignation"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/roles-permissions",
    name: "roles-permissions",
    component: () => import("../views/pages/settings/rolepermission"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/salary",
    name: "salary",
    component: () => import("../views/pages/payroll/salary"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/salary-settings",
    name: "salary-settings",
    component: () => import("../views/pages/settings/salarysetting"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/salary-view",
    name: "salary-view",
    component: () => import("../views/pages/payroll/salaryview"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/saved-jobs",
    name: "saved-jobs",
    component: () => import("../views/pages/jobs/savedjob"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/schedule-timing",
    name: "schedule-timing",
    component: () => import("../views/pages/jobs/scheduletiming"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("../views/pages/settings/mainsetting"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/shift-list",
    name: "shift-list",
    component: () => import("../views/pages/employees/shift"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/shift-scheduling",
    name: "shift-scheduling",
    component: () => import("../views/pages/employees/scheduling"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../views/pages/mainpage/search"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/add-estimate",
    name: "add-estimate",
    component: () => import("../views/pages/sales/estimates/addestimate"),
    meta: {
      requiresAuth: true,
    },
  },
];

export const router = createRouter({
  history: createWebHistory("hrmis"),
  linkActiveClass: "active",
  routes,
});
