 import { createApp } from 'vue';
 import { createPinia } from 'pinia'

import App from "./App.vue";
import { router } from './router';
import './assets/css/bootstrap.min.css'
import './assets/css/fontawesome/css/fontawesome.min.css'
import './assets/css/fontawesome/css/all.min.css'
import './assets/css/material.css'
import './assets/css/line-awesome.min.css'
/*********Header component**********/
import MainHeader from './views/layouts/mainheader.vue'
import Sidebar from './views/pages/sidebar.vue'
import HeaderLogo from './components/header-logo.vue'
import Toggle from './components/toggle.vue'
import Search from './components/search.vue'
import Notifications from './components/notifications.vue'
import HeaderEnd from './components/header-end.vue'
import HeaderList from './components/headerlist.vue'
/*********dashboard component******/
import PageHeader from './views/pages/dashboard/admin/pageheader.vue'
import Widget from './views/pages/dashboard/admin/widget.vue'
import Chart from './views/pages/dashboard/admin/chart.vue'
import Employee from './views/pages/dashboard/admin/employee.vue'
import Statistics from './views/pages/dashboard/admin/statistics.vue'
import Invoices from './views/pages/dashboard/admin/invoices.vue'
import Clients from './views/pages/dashboard/admin/clients.vue'
import Welcomeheader from './views/pages/dashboard/employee/welcomeheader.vue'
import Projects from './views/pages/dashboard/employee/projects.vue'
import Today from './views/pages/dashboard/employee/today.vue'
/*********Activities component******/
import HeaderActivities from './views/pages/activities/headeractivities.vue'
/*********Policies component******/
import HeaderPolicies from './views/pages/policies/headerpolicies.vue'
import PoliciesTable from './views/pages/policies/policiestable.vue'
import ModalPolicies from './views/pages/policies/modalpolicies.vue'
/*********knowledgebase component******/
import HeaderKnowledgebase from './views/pages/knowledgebase/headerknowledgebase.vue'
import KnowledgebaseContent from './views/pages/knowledgebase/knowledgebasecontent.vue'
import HeaderView from './views/pages/knowledgebase/view/headerview.vue'
import CategoriesView from './views/pages/knowledgebase/view/categoriesview.vue'
import ContentView from './views/pages/knowledgebase/view/contentview.vue'
/*********leads component******/
import HeaderLeads from './views/pages/leads/headerleads.vue'
import ContentLeads from './views/pages/leads/contentleads.vue'
/*********jobs component******/
import JobHeader from './views/pages/jobs/jobheader.vue'
import SearchFilter from './views/pages/jobs/searchfilter.vue'
import AppliedjobHeader from './views/pages/jobs/appliedjobs/appliedjobheader.vue'
import ModalAppliedJobs from './views/pages/jobs/appliedjobs/modalappliedjobs.vue'
import AptituteresultHeader from './views/pages/jobs/aptituteresult/aptituteresult-header.vue'
import ArchivedjobsHeader from './views/pages/jobs/archivedjobs/archivedjobs-header.vue'
import CandidateListHeader from './views/pages/jobs/candidatelist/candidatelistheader.vue'
import CandidateListModal from './views/pages/jobs/candidatelist/candidatelistmodal.vue'
import ExperHeader from './views/pages/jobs/experiancelevel/experheader.vue'
import ExperTable from './views/pages/jobs/experiancelevel/expertable.vue'
import ExperModal from './views/pages/jobs/experiancelevel/expermodal.vue'
import InterviewingHeader from './views/pages/jobs/interviewing/interviewingheader.vue'
import InterviewingSidebar from './views/pages/jobs/interviewing/interviewingsidebar.vue'
import InterviewingContent from './views/pages/jobs/interviewing/interviewingcontent.vue'
import ModalInterviewing from './views/pages/jobs/interviewing/modalinterviewing.vue'
import HeaderInterviewQuestions from './views/pages/jobs/interviewquestions/headerinterviewquestions.vue'
import InterviewQuestionsContent from './views/pages/jobs/interviewquestions/interviewquestioncontent.vue'
import ModalInterviewQuestions from './views/pages/jobs/interviewquestions/modalinterviewquestions.vue'
import HeaderJobapplicants from './views/pages/jobs/jobapplicants/headerjobapplicants.vue'
import JobApplicantsContent from './views/pages/jobs/jobapplicants/jobapplicantscontent.vue'
import JobAptituteHeader from './views/pages/jobs/jobaptitute/jobaptituteheader.vue'
import JobAptituteDetails from './views/pages/jobs/jobaptitute/jobaptitutedetails.vue'
import JobAptituteQuestions from './views/pages/jobs/jobaptitute/jobaptitutequestions.vue'
import HeaderJobDetails from './views/pages/jobs/jobdetails/headerjobdetails.vue'
import JobDetailsInfo from './views/pages/jobs/jobdetails/jobdetailsinfo.vue'
import JobDetailsContent from './views/pages/jobs/jobdetails/jobdetailscontent.vue'
import JobDetailsDetinfo from './views/pages/jobs/jobdetails/jobdetailsdetinfo.vue'
import ModalJobDetails from './views/pages/jobs/jobdetails/modaljobdetails.vue'
import JobListHeader from './views/pages/jobs/joblist/joblistheader.vue'
import JobListContent from './views/pages/jobs/joblist/joblistcontent.vue'
import HeaderMainJob from './views/pages/jobs/mainjobs/headermainjob.vue'
import MainJobContent from './views/pages/jobs/mainjobs/mainjobcontent.vue'
import ModalMainJob from './views/pages/jobs/mainjobs/modalmainjob.vue'
import HeaderJobDashboard from './views/pages/jobs/jobsdashboard/headerjobdashboard.vue'
import OverviewJobDashboard from './views/pages/jobs/jobsdashboard/overviewjobdashboard.vue'
import LatestJobDashboard from './views/pages/jobs/jobsdashboard/latestjobdashboard.vue'
import JobApplicantList from './views/pages/jobs/jobsdashboard/jobapplicantlist.vue'
import JobShortlistCandidate from './views/pages/jobs/jobsdashboard/jobshortlistcandidate.vue'
import WidgetJob from './views/pages/jobs/jobsdashboard/widgetjob.vue'
import HeaderJobView from './views/pages/jobs/jobview/headerjobview.vue'
import ModalJobView from './views/pages/jobs/jobview/modaljobview.vue'
import JobViewContent from './views/pages/jobs/jobview/jobviewcontent.vue'
import ContentJobView from './views/pages/jobs/jobview/contentjobview.vue'
import InfoJobView from './views/pages/jobs/jobview/infojobview.vue'
import HeaderResume from './views/pages/jobs/manageresume/headerresume.vue'
import ResumeContent from './views/pages/jobs/manageresume/resumecontent.vue'
import ModalResume from './views/pages/jobs/manageresume/modalresume.vue'
import HeaderOfferApprove from './views/pages/jobs/offerapprove/headerofferapprove.vue'
import OfferApproveContent from './views/pages/jobs/offerapprove/offerapprovecontent.vue'
import ModalOfferApprove from './views/pages/jobs/offerapprove/modalofferapprove.vue'
import HeaderOfferedJob from './views/pages/jobs/offeredjob/headerofferedjob.vue'
import ContentOfferedJob from './views/pages/jobs/offeredjob/contentofferedjob.vue'
import UserAppliedjobTable from './views/pages/jobs/userdashboard/userappliedjobtable.vue'
import UserLatestjobTable from './views/pages/jobs/userdashboard/userlatestjobtable.vue'
import UserLatestjob from './views/pages/jobs/userdashboard/userlatestjob.vue'
import UserGraph from './views/pages/jobs/userdashboard/usergraph.vue'
import UserDashboardWidget from './views/pages/jobs/userdashboard/userdashboardwidget.vue'
import UserAllJobsTable from './views/pages/jobs/useralljobs/useralljobtable.vue'
import ShortTable from './views/pages/jobs/shortlistcandidate/shorttable.vue'
import QuestionWizard from './views/pages/jobs/question/questionwizard.vue'
import ModalQuestion from './views/pages/jobs/question/modalquestion.vue'
import ScheduleTable from './views/pages/jobs/scheduletiming/scheduletable.vue'


/*********settings component******/
import SettingSidebar from './views/pages/settings/settingsidebar.vue'
import SettingApproval from './views/pages/settings/approvalsetting/settingapproval.vue'
import MessageApproval from './views/pages/settings/approvalsetting/messageapproval.vue'
import ProfileApproval from './views/pages/settings/approvalsetting/profileapproval.vue'
import HomeApproval from './views/pages/settings/approvalsetting/homeapproval.vue'
import ApprovalHeader from './views/pages/settings/approvalsetting/approvalheader.vue'
import ApprovalTabs from './views/pages/settings/approvalsetting/approvaltabs.vue'
import ChangepasswordHeader from './views/pages/settings/changepassword/changepasswordheader.vue'
import FormChangepassword from './views/pages/settings/changepassword/formchangepassword.vue'
import CronSettingForm from './views/pages/settings/cronsetting/cronsettingform.vue'
import CronSettingHeader from './views/pages/settings/cronsetting/cronsettingheader.vue'
import EmailForm from './views/pages/settings/emailsettings/emailform.vue'
import FormInvoiceSettings from './views/pages/settings/invoicesettings/forminvoicesettings.vue'
import HeaderInvoiceSettings from './views/pages/settings/invoicesettings/headerinvoicesettings.vue'
import HeaderLeaveType from './views/pages/settings/leavetype/headerleavetype.vue'
import LeaveTypeContent from './views/pages/settings/leavetype/leavetypecontent.vue'
import ModalLeaveType from './views/pages/settings/leavetype/modalleavetype.vue'
import HeaderLocalization from './views/pages/settings/localization/headerlocalization.vue'
import ContentLocalization from './views/pages/settings/localization/contentlocalization.vue'
import HeaderNotification from './views/pages/settings/notification/headernotification.vue'
import NotifiationContent from './views/pages/settings/notification/notificationcontent.vue'
import HeaderPerformanceSetting from './views/pages/settings/performancesetting/headerperformancesetting.vue'
import PerformanceSettingGoal from './views/pages/settings/performancesetting/performancesettinggoal.vue'
import CompetencyPerformanceSetting from './views/pages/settings/performancesetting/competencyperformancesetting.vue'
import OkrPerformanceSetting from './views/pages/settings/performancesetting/okrperformancesetting.vue'
import TabPerformanceSetting from './views/pages/settings/performancesetting/tabperformancesetting.vue'
import FormToxboxSetting from './views/pages/settings/toxboxsetting/formtoxboxsetting.vue'

/*********assets component******/
import Headerassets from './views/pages/assets/headerassets.vue'
import Assetsfilter from './views/pages/assets/assetsfilter.vue'
import ModalPopup from './views/pages/assets/modalpopup.vue'
/*********employee component******/
import AttendanceHeader from './views/pages/employees/attendance/attendanceheader.vue'
import AttendanceFilter from './views/pages/employees/attendance/attendancefilter.vue'
import AttendanceModal from './views/pages/employees/attendance/attendancemodal.vue'
import AttendEmployeeHeader from  './views/pages/employees/attendanceemployee/attendemployeeheader.vue'
import Timesheet from './views/pages/employees/attendanceemployee/timesheet.vue'
import Statis from './views/pages/employees/attendanceemployee/statistics.vue'
import TodayActivity from './views/pages/employees/attendanceemployee/todayactivity.vue'
import AttendEmpFilter from './views/pages/employees/attendanceemployee/attendempfilter.vue'
import DepartmentHeader from './views/pages/employees/departments/departmentheader.vue'
import DepartmentTable from './views/pages/employees/departments/departmenttable.vue'
import DepartmentModal from './views/pages/employees/departments/departmentmodal.vue'
import DesignationHeader from './views/pages/employees/designations/designationheader.vue'
import DesignationTable from './views/pages/employees/designations/designationtable.vue'
import DesignationModal from './views/pages/employees/designations/designationmodal.vue'
import EmployeeHeader from './views/pages/employees/mainemployee/employeeheader.vue'
import EmployeeFilter from './views/pages/employees/mainemployee/employeefilter.vue'
import EmployeeContent from './views/pages/employees/mainemployee/employeecontent.vue'
import EmployeeModal from './views/pages/employees/mainemployee/employeemodal.vue'
import EmployeeListContent from './views/pages/employees/mainemployee/employeeslistcontent.vue'
import HeaderHoliday from './views/pages/employees/holidays/headerholidays.vue'
import HolidayContent from './views/pages/employees/holidays/holidaycontent.vue'
import ModalHoliday from './views/pages/employees/holidays/modalholiday.vue'
import HeaderLeave from './views/pages/employees/leave/headerleave.vue'
import LeaveWidget from './views/pages/employees/leave/leavewidget.vue'
import LeaveFilter from './views/pages/employees/leave/leavefilter.vue'
import LeaveContent from './views/pages/employees/leave/leavecontent.vue'
import ModalLeave from './views/pages/employees/leave/modalleave.vue'
import HeaderLeaveEmployee from './views/pages/employees/leaveemployee/headerleaveemployee.vue'
import WidgetLeaveEmployee from './views/pages/employees/leaveemployee/widgetleaveemployee.vue'
import ContentLeaveEmployee from './views/pages/employees/leaveemployee/contentleaveemployee.vue'
import ModalLeaveEmployee from './views/pages/employees/leaveemployee/modalleaveemployee.vue'
import HeaderLeaveSetting from './views/pages/employees/leavesettings/headerleavesetting.vue'
import AnnualLeaveSetting from './views/pages/employees/leavesettings/annualleavesetting.vue'
import ModalLeaveSetting from './views/pages/employees/leavesettings/modalleavesetting.vue'
import CreateLeaveSetting from './views/pages/employees/leavesettings/createleavesetting.vue'
import PaternityLeaveSetting from './views/pages/employees/leavesettings/paternityleavesetting.vue'
import MaternityLeaveSetting from './views/pages/employees/leavesettings/maternityleavesetting.vue'
import HospitalLeaveSetting from './views/pages/employees/leavesettings/hospitalleavesetting.vue'
import SickLeaveSetting from './views/pages/employees/leavesettings/sickleavesetting.vue'
import HeaderOvertime from './views/pages/employees/overtime/headerovertime.vue'
import ModalOvertime from './views/pages/employees/overtime/modalovertime.vue'
import OvertimeContent from './views/pages/employees/overtime/overtimecontent.vue'
import OvertimeWidget from './views/pages/employees/overtime/overtimewidget.vue'
import TimesheetTable from './views/pages/employees/timesheet/timesheettable.vue'
import ShiftTable from './views/pages/employees/shift/shifttable.vue'
import SchedulingTable from './views/pages/employees/scheduling/schedulingtable'

/*********report component******/
import AttendReportHeader from './views/pages/reports/attendancereport/attendreportheader.vue'
import AttendReportFilter from './views/pages/reports/attendancereport/attendreportfilter.vue'
import DailyReportsHeader from './views/pages/reports/dailyreports/dailyreportsheader.vue'
import DailyReportHeaderContent from './views/pages/reports/dailyreports/dailyreportheadercontent.vue'
import DailyReportsFilter from './views/pages/reports/dailyreports/dailyreportsfilter.vue'
import DailyReporttable from './views/pages/reports/dailyreports/dailyreporttable.vue'
import EmployeeReportFilter from './views/pages/reports/employeereports/employeereportfilter.vue'
import EmployeeReportHeader from './views/pages/reports/employeereports/employeereportheader.vue'
import EmployeeReportTable from './views/pages/reports/employeereports/employeereporttable.vue'
import ExpenseReportHeader from './views/pages/reports/expensereports/expensereportheader.vue'
import ExpenseReportFilter from './views/pages/reports/expensereports/expensereportfilter.vue'
import ExpenseReportContent from './views/pages/reports/expensereports/expensereportcontent.vue'
import HeaderInvoiceReport from './views/pages/reports/invoicereport/headerinvoicereport.vue'
import InvoiceReportFilter from './views/pages/reports/invoicereport/invoicereportfilter.vue'
import InvoiceReportTable from './views/pages/reports/invoicereport/invoicereporttable.vue'
import HeaderLeaveReport from './views/pages/reports/leavereport/headerleavereport.vue'
import LeaveReportFilter from './views/pages/reports/leavereport/leavereportfilter.vue'
import LeaveReportContent from './views/pages/reports/leavereport/leavereportcontent.vue'
import HeaderPaymentReport from './views/pages/reports/paymentreport/headerpaymentreport.vue'
import ContentPaymentReport from './views/pages/reports/paymentreport/contentpaymentreport.vue'
import FilterPaymentReport from './views/pages/reports/paymentreport/filterpaymentreport.vue'
import HeaderPayslipReport from './views/pages/reports/payslipreport/headerpayslipreport.vue'
import PayslipFilter from './views/pages/reports/payslipreport/payslipfilter.vue'
import PayslipContent from './views/pages/reports/payslipreport/payslipcontent.vue'
import HeaderProjectReport from './views/pages/reports/projectreport/headerprojectreport.vue'
import FilterProjectReport from './views/pages/reports/projectreport/filterprojectreport.vue'
import ProjectReportContent from './views/pages/reports/projectreport/projectreportcontent.vue'
import TableUserReport from './views/pages/reports/userreport/tableuserreport.vue'
import TaskReportTable from './views/pages/reports/taskreport/taskreporttable.vue'
import TaskReportFilter from './views/pages/reports/taskreport/taskreportfilter.vue'


/*********accounting component******/
import BudgetExpenseHeader from './views/pages/accounting/budgetexpenses/budgetexpenseheader.vue'
import BudgetExpenseModal from './views/pages/accounting/budgetexpenses/budgetexpensemodal.vue'
import BudgetRevenueHeader from './views/pages/accounting/budgetrevenues/budgetrevenueheader.vue'
import BudgetRevenueModal from './views/pages/accounting/budgetrevenues/budgetrevenuemodal.vue'
import BudgetHeader from './views/pages/accounting/budgets/budgetheader.vue'
import BudgetModal from './views/pages/accounting/budgets/budgetmodal.vue'
import CategoriesHeader from './views/pages/accounting/categories/categoriesheader.vue'
import CategoriesModal from './views/pages/accounting/categories/categoriesmodal.vue'
import SubCategoriesModal from './views/pages/accounting/subcategory/subcategoriesmodal.vue'
import SubCategoriesHeader from './views/pages/accounting/subcategory/subcategoriesheader.vue'

/*********app component******/
import ChatMiddle from './views/pages/app/chat/chatmiddle.vue'
import ChatEnd from './views/pages/app/chat/chatend.vue'
import ChatModal from './views/pages/app/chat/chatmodal.vue'
import EventHeader from './views/pages/app/events/eventheader.vue'
import EventModal from './views/pages/app/events/eventmodal.vue'
import FilemanagerSidebar from './views/pages/app/filemanager/filemanagersidebar.vue'
import FilemanagerContent from './views/pages/app/filemanager/filemanagercontent.vue'
import InboxSidebar from './views/pages/app/inboxsidebar.vue'
import HeaderInbox from './views/pages/app/inbox/headerinbox.vue'
import InboxContent from './views/pages/app/inbox/inboxcontent.vue'
import MailViewSidebar from './views/pages/app/mailviewsidebar.vue'
import HeaderMailView from './views/pages/app/email/mailview/headermailview.vue'
import MailViewContent from './views/pages/app/email/mailview/mailviewcontent.vue'
import VideoCallModal from './views/pages/app/call/videocall/videocallmodal.vue'

/*********profile component******/
import ClientProfileHeader from './views/pages/profile/clientprofile/clientprofileheader.vue'
import ClientHeaderContent from './views/pages/profile/clientprofile/clientheadercontent.vue'
import ClientProfileTab from './views/pages/profile/clientprofile/clientprofiletab.vue'
import ClientProfileTabContent from './views/pages/profile/clientprofile/clientprofiletabcontent.vue'
import HeaderProfile from './views/pages/profile/headerprofile.vue'
import ProfileCardFirst from './views/pages/profile/profilecardfirst.vue'
import ProfileCardSecond from './views/pages/profile/profilecardsecond.vue'
import ModalProfile from './views/pages/profile/modalprofile.vue'
import ProfileContent from './views/pages/profile/profilecontent.vue'

/*********clients component******/
import ClientsHeader from './views/pages/clients/clientsheader.vue'
import ClientsFilter from './views/pages/clients/clientsfilter.vue'
import ClientsModal from './views/pages/clients/clientsmodal.vue'
/*********components component******/
import ComponentSidebar from './views/pages/components/componentsidebar.vue'
import ComponentHeaderContent from './views/pages/components/componentheadercontent.vue'
/*********app component******/
import MailSidebar from './views/pages/app/mailsidebar.vue'
import ComposeHeader from './views/pages/app/email/compose/composeheader.vue'
import ContactHeader from './views/pages/app/contacts/contactheader.vue'
import ContactModal from './views/pages/app/contacts/contactmodal.vue'
import ContactContent from './views/pages/app/contacts/contactcontent.vue'
import ContactSidebar from './views/pages/app/contacts/contactsidebar.vue'
/*********sales component******/
import CreateEstimateHeader from './views/pages/sales/estimates/createestimateheader.vue'
import CreateEstimateTable from './views/pages/sales/estimates/createestimate/createestimatetable.vue'
import CreateEstimateFilter from './views/pages/sales/estimates/createestimatefilter.vue'
import CreateInvoiceFilter from './views/pages/sales/invoices/createinvoicefilter.vue'
import CreateInvoiceHeader from './views/pages/sales/invoices/createinvoiceheader.vue'
import CreateInvoiceTable from './views/pages/sales/invoices/createinvoice/createinvoicetable.vue'
import EditEstimateFilter from './views/pages/sales/estimates/editestimatefilter.vue'
import EditEstimateHeader from './views/pages/sales/estimates/editestimateheader.vue'
import EditEstimateTable from './views/pages/sales/estimates/editestimate/editestimatetable.vue'
import EditInvoiceFilter from './views/pages/sales/invoices/editinvoicefilter.vue'
import EditInvoiceHeader from './views/pages/sales/invoices/editinvoiceheader.vue'
import EditInvoiceTable from './views/pages/sales/invoices/editinvoice/editinvoicetable.vue'
import MainEstimateHeader from './views/pages/sales/estimates/mainestimateheader.vue'
import MainEstimateFilter from './views/pages/sales/estimates/mainestimatefilter.vue'
import MainEstimateContent from './views/pages/sales/estimates/mainestimate/mainestimatecontent.vue'
import MainEstimateModal from './views/pages/sales/estimates/mainestimate/mainestimatemodal.vue'
import EstimateViewHeader from './views/pages/sales/estimates/estimateview/estimateviewheader.vue'
import EstimateViewContent from './views/pages/sales/estimates/estimateview/estimateviewcontent.vue'
import ExpenseHeader from './views/pages/sales/expenses/exepenseheader.vue'
import ExpenseFilter from './views/pages/sales/expenses/expensefilter.vue'
import ExpenseModal from './views/pages/sales/expenses/expensemodal.vue'
import ExpenseTable from './views/pages/sales/expenses/expensetable.vue'
import MainInvoiceFilter from './views/pages/sales/invoices/maininvoicefilter.vue'
import MainInvoiceTable from './views/pages/sales/invoices/maininvoice/maininvoicetable.vue'
import MainInvoiceHeader from './views/pages/sales/invoices/maininvoice/maininvoiceheader.vue'
import HeaderInvoiceView from './views/pages/sales/invoices/invoiceview/headerinvoiceview.vue'
import InvoiceViewContent from './views/pages/sales/invoices/invoiceview/invoiceviewcontent.vue'
import HeaderPayment from './views/pages/sales/payments/headerpayment.vue'
import PaymentContent from './views/pages/sales/payments/paymentcontent.vue'
import FundTable from './views/pages/sales/providentfund/fundtable.vue'
import TaxModal from './views/pages/sales/taxes/taxmodal.vue'
import TaxTable from './views/pages/sales/taxes/taxtable.vue'

/*********table component******/
import DatatableHeader from './views/pages/table/datatable/datatableheader.vue'
import TableContent from './views/pages/table/datatable/tablecontent.vue'
import TableBasic1 from './views/pages/table/tablebasic/tablebasic1.vue'
import TableBasic2 from './views/pages/table/tablebasic/tablebasic2.vue'
import TableBasic3 from './views/pages/table/tablebasic/tablebasic3.vue'

/*********mainpage component******/
import FaqHeader from './views/pages/mainpage/faq/faqheader.vue'
import FaqContent from './views/pages/mainpage/faq/faqcontent.vue'
import HeaderPrivacy from './views/pages/mainpage/privacypolicy/headerprivacy.vue'
import PrivacyContent from './views/pages/mainpage/privacypolicy/privacycontent.vue'
import ModalTermination from './views/pages/mainpage/termination/modaltermination.vue'
import TerminationTable from './views/pages/mainpage/termination/terminationtable.vue'

/*********form component******/
import HeaderBasicInputs from './views/pages/form/headerbasicinputs.vue'
import BasicInputForm from './views/pages/form/basicinputs/basicinputform.vue'
import HeaderHorizontal from './views/pages/form/headerhorizontal.vue'
import BasicForm from './views/pages/form/horizontal/basicform.vue'
import AddressForm from './views/pages/form/horizontal/addressform.vue'
import HorizontalColumnForm from './views/pages/form/horizontal/horizontalcolumnform.vue'
import HorizontalColumnForm1 from './views/pages/form/horizontal/horizontalcolumnform1.vue'
import HeaderInputgroups from './views/pages/form/headerinputgroups.vue'
import BasicExample from './views/pages/form/inputgroups/basicexample.vue'
import Sizing from './views/pages/form/inputgroups/sizing.vue'
import Checkbox from './views/pages/form/inputgroups/checkbox.vue'
import Multipleaddons from './views/pages/form/inputgroups/multipleaddons.vue'
import HeaderFormMask from './views/pages/form/headerformmask.vue'
import FormMaskContent from './views/pages/form/formmask/formmaskcontent.vue'
import HeaderFormValidation from './views/pages/form/headerformvalidation.vue'
import FormValdiationContent from './views/pages/form/formvalidation/formvaldiationcontent.vue'
import HeaderFormVertical from './views/pages/form/headerformvertical.vue'
import BasicVerticalForm from './views/pages/form/formvertical/basicverticalform.vue'
import BasicAddressForm from './views/pages/form/formvertical/basicaddressform.vue'
import BasicTwoColumnForm from './views/pages/form/formvertical/basictwocolumnform.vue'

/*********goals component******/
import HeaderTracking from './views/pages/goals/goaltracking/headertracking.vue'
import TrackingContent from './views/pages/goals/goaltracking/trackingcontent.vue'
import ModalTracking from './views/pages/goals/goaltracking/modaltracking.vue'
import HeaderGoalType from './views/pages/goals/goaltype/headergoaltype.vue'
import GoalTypeContent from './views/pages/goals/goaltype/goaltypecontent.vue'
import ModalGoalType from './views/pages/goals/goaltype/modalgoaltype.vue'

/*********payroll component******/
import HeaderPayrollItem from './views/pages/payroll/payrollitems/headerpayrollitem.vue'
import PayrollItemTab from './views/pages/payroll/payrollitems/payrollitemtab.vue'
import PayrollItemContent from './views/pages/payroll/payrollitems/payrollitemcontent.vue'
import ModalDeductionPayroll from './views/pages/payroll/payrollitems/modaldeductionpayroll.vue'
import ModalOvertimePayrollItem from './views/pages/payroll/payrollitems/modalovertimepayrollitem.vue'
import ModalAddPayrollItem from './views/pages/payroll/payrollitems/modaladdpayrollitem.vue'
import SalaryModal from './views/pages/payroll/salary/salarymodal.vue'
import SalaryTable from './views/pages/payroll/salary/salarytable.vue'
import SalaryViewTable from './views/pages/payroll/salaryview/salaryviewtable.vue'

/*********performance component******/
import PerformanceHeader from './views/pages/performance/performanceheader.vue'
import BasicInformation from './views/pages/performance/basicinformation.vue'
import Achievements from './views/pages/performance/achievements.vue'
import Improvement from './views/pages/performance/improvement.vue'
import PersonalUpdate from './views/pages/performance/personalupdate.vue'
import Training from './views/pages/performance/training.vue'
import Hrd from './views/pages/performance/hrd.vue'
import PerformanceAppraisalHeader from './views/pages/performance/performanceappraisal/performanceappraisalheader.vue'
import PerformanceAppraisalTable from './views/pages/performance/performanceappraisal/performanceappraisaltable.vue'
import ModalPerformanceAppraisal from './views/pages/performance/performanceappraisal/modalperformanceappraisal.vue'
import PerformanceIndicatorHeader from './views/pages/performance/performanceindicator/performanceindicatorheader.vue'
import PerformanceIndicatorTable from './views/pages/performance/performanceindicator/performanceindicatortable.vue'
import ModalPerformanceIndicator from './views/pages/performance/performanceindicator/modalperformanceindicator.vue'

/*********project component******/
import HeaderProjectList from './views/pages/project/projectlist/headerprojectlist.vue'
import ModalProjectList from './views/pages/project/projectlist/modalprojectlist.vue'
import TableProjectList from './views/pages/project/projectlist/tableprojectlist.vue'
import FilterProjectList from './views/pages/project/projectlist/filterprojectlist.vue'


/*********projects component******/
import MainProjectTable from './views/pages/projects/mainproject/mainprojecttable.vue'
import ProjectDetails from './views/pages/projects/projectview/projectdetails.vue'
import ProjectAdmin from './views/pages/projects/projectview/projectadmin.vue'
import TaskBoard from './views/pages/projects/taskboard/taskboardmodal.vue'
import TaskBoardDetail from './views/pages/projects/taskboard/taskboarddetail.vue'

/*********promotion component******/
import PromotionTable from './views/pages/promotion/promotiontable.vue'

/*********users component******/
import UserModal from './views/pages/users/usermodal.vue'
import UserTable from './views/pages/users/usertable.vue'

/*********training component******/
import TrainingTable from './views/pages/training/trainingtype/trainingtable.vue'
import ModalMainTraining from './views/pages/training/maintraining/modalmaintraining.vue'
import Trainingtable from './views/pages/training/maintraining/maintable.vue'
import TrainerModal from './views/pages/training/trainers/trainermodal.vue'
import TrainersTable from './views/pages/training/trainers/trainerstable.vue'

/*********tickets component******/
import TicketViewModal from './views/pages/tickets/ticketview/ticketviewmodal.vue'
import MainTicketModal from './views/pages/tickets/mainticket/mainticketmodal.vue'
import MainComponentTable from './views/pages/tickets/mainticket/maintable.vue'
import MainFilter from './views/pages/tickets/mainticket/mainfilter.vue'
import MainWidget from './views/pages/tickets/mainticket/mainwidget.vue'

/*********tasks component******/
import TaskModal from './views/pages/tasks/taskmodal.vue'
import TaskSidebar from './views/pages/tasks/tasksidebar.vue'

/*********subscriptions component******/
import CompanyTable1 from './views/pages/subscription/subscriptioncompany/companytable.vue'
import CompanyTable2 from './views/pages/subscription/subscriptioncompany/companytable1.vue'
import CompanyTable3 from './views/pages/subscription/subscriptions/companytable2.vue'
import CompanyTable4 from './views/pages/subscription/subscriptions/companytable3.vue'
import CompanyTable5 from './views/pages/subscription/subscriptions/companytable4.vue'
import CompaniesModal from './views/pages/subscription/subscribedcompanies/companiesmodal.vue'
import CompaniesTable from './views/pages/subscription/subscribedcompanies/companiestable.vue'
import CompaniesFilter from './views/pages/subscription/subscribedcompanies/companiesfilter.vue'

/*********resignation component******/
import modalresignation from './views/pages/resignation/modalresignation.vue'
import resignationtable from './views/pages/resignation/resignationtable.vue'

/*******Plugin import***********/
import VueSelect from 'vue3-select2-component'
import DatePicker from 'vue3-datepicker'
import 'moment'
const axios = require('axios');

import jquery from 'jquery'; 
window.$ = jquery
import './assets/css/style.css'
import './assets/js/bootstrap.bundle.min.js'
import './assets/js/Chart.min.js'
import './assets/css/bootstrap4.min.css'
import './assets/css/dataTables.bootstrap4.min.css'
import './assets/css/jquery.dataTables.min.js'
import './assets/css/dataTables.bootstrap4.min.js'

const pinia = createPinia()
const app = createApp(App)
app.component('sidebar', Sidebar);

/*********Header component**********/
app.component('main-header', MainHeader);
app.component('header-logo', HeaderLogo);
app.component('toggle', Toggle);
app.component('search', Search);
app.component('notifications', Notifications);
app.component('headerend', HeaderEnd);
app.component('headerlist', HeaderList);


/*********admin dashboard component******/
app.component('pageheader', PageHeader);
app.component('widget', Widget);
app.component('chart', Chart);
app.component('employee', Employee);
app.component('statistics', Statistics);
app.component('invoices', Invoices);
app.component('clients', Clients);

/*********employee dashboard component******/
app.component('welcomeheader', Welcomeheader);
app.component('today', Today);
app.component('projects', Projects);

/*********activities component******/
app.component('headeractivities', HeaderActivities);

/*********policies component******/
app.component('headerpolicies', HeaderPolicies );
app.component('policiestable', PoliciesTable );
app.component('modalpolicies', ModalPolicies );

/*********knowledgebase component******/
app.component('headerknowledgebase', HeaderKnowledgebase);
app.component('knowledgebasecontent', KnowledgebaseContent);
app.component('headerview', HeaderView);
app.component('contentview', ContentView);
app.component('categoriesview', CategoriesView);

/*********leads component******/
app.component('headerleads', HeaderLeads);
app.component('contentleads', ContentLeads);

/*********jobs component******/
app.component('jobheader', JobHeader);
app.component('appliedjobheader', AppliedjobHeader);
app.component('modalappliedjobs', ModalAppliedJobs)
app.component('searchfilter', SearchFilter);
app.component('aptituteresultheader', AptituteresultHeader);
app.component('archivedjobsheader', ArchivedjobsHeader);
app.component('candidatelistheader', CandidateListHeader);
app.component('candidatelistmodal', CandidateListModal);
app.component('experheader', ExperHeader);
app.component('expertable', ExperTable);
app.component('expermodal', ExperModal);
app.component('interviewingheader', InterviewingHeader);
app.component('interviewingsidebar', InterviewingSidebar);
app.component('interviewingcontent', InterviewingContent);
app.component('modalinterviewing', ModalInterviewing);
app.component('headerinterviewquestions', HeaderInterviewQuestions);
app.component('interviewquestioncontent', InterviewQuestionsContent);
app.component('modalinterviewquestions', ModalInterviewQuestions);
app.component('headerjobapplicants', HeaderJobapplicants);
app.component('jobapplicantscontent', JobApplicantsContent);
app.component('jobaptituteheader', JobAptituteHeader);
app.component('jobaptitutedetails', JobAptituteDetails);
app.component('jobaptitutequestions', JobAptituteQuestions);
app.component('headerjobdetails', HeaderJobDetails);
app.component('jobdetailsinfo', JobDetailsInfo);
app.component('jobdetailscontent', JobDetailsContent);
app.component('jobdetailsdetinfo', JobDetailsDetinfo);
app.component('modaljobdetails', ModalJobDetails);
app.component('joblistheader', JobListHeader);
app.component('jobcontent', JobListContent);
app.component('headermainjob', HeaderMainJob);
app.component('mainjobcontent', MainJobContent);
app.component('modalmainjob', ModalMainJob);
app.component('headerjobdashboard', HeaderJobDashboard);
app.component('widgetjob', WidgetJob);
app.component('overviewjobdashboard', OverviewJobDashboard);
app.component('latestjobdashboard', LatestJobDashboard);
app.component('jobapplicantlist', JobApplicantList);
app.component('jobshortlistcandidate', JobShortlistCandidate);
app.component('headerjobview', HeaderJobView);
app.component('infojobview', InfoJobView);
app.component('contentjobview', ContentJobView);
app.component('jobviewcontent', JobViewContent);
app.component('modaljobview', ModalJobView);
app.component('headerresume', HeaderResume);
app.component('resumecontent', ResumeContent);
app.component('modalresume', ModalResume);
app.component('headerofferapprove', HeaderOfferApprove );
app.component('offerapprovecontent', OfferApproveContent );
app.component('modalofferapprove', ModalOfferApprove );
app.component('headerofferedjob', HeaderOfferedJob );
app.component('contentofferedjob', ContentOfferedJob );
app.component('userappliedjobtable', UserAppliedjobTable );
app.component('userlatestjobtable', UserLatestjobTable );
app.component('userlatestjob', UserLatestjob );
app.component('usergraph', UserGraph );
app.component('userdashboardwidget', UserDashboardWidget );
app.component('useralljobtable', UserAllJobsTable );
app.component('shorttable', ShortTable );
app.component('questionwizard', QuestionWizard );
app.component('modalquestion', ModalQuestion );
app.component('scheduletable', ScheduleTable );


/*********settings component******/
app.component('settingsidebar', SettingSidebar);
app.component('approvalheader', ApprovalHeader);
app.component('homeapproval', HomeApproval);
app.component('profileapproval', ProfileApproval);
app.component('messageapproval', MessageApproval);
app.component('settingapproval', SettingApproval);
app.component('approvaltabs', ApprovalTabs);
app.component('changepasswordheader', ChangepasswordHeader);
app.component('formchangepassword', FormChangepassword);
app.component('cronsettingheader', CronSettingHeader);
app.component('cronsettingform', CronSettingForm);
app.component('emailform', EmailForm);
app.component('headerinvoicesettings', HeaderInvoiceSettings);
app.component('forminvoicesettings', FormInvoiceSettings);
app.component('headerleavetype', HeaderLeaveType );
app.component('leavetypecontent', LeaveTypeContent );
app.component('modalleavetype', ModalLeaveType );
app.component('headerlocalization', HeaderLocalization );
app.component('contentlocalization', ContentLocalization );
app.component('headernotification', HeaderNotification  );
app.component('notificationcontent', NotifiationContent );
app.component('formtoxboxsetting', FormToxboxSetting );


/*********assets component******/
app.component('headerassets', Headerassets);
app.component('assetsfilter', Assetsfilter);
app.component('modalpopup', ModalPopup);

/*********employee component******/
app.component('attendanceheader', AttendanceHeader);
app.component('attendancefilter', AttendanceFilter);
app.component('attendancemodal', AttendanceModal);
app.component('attendemployeeheader', AttendEmployeeHeader);
app.component('timesheet', Timesheet);
app.component('statistics1', Statis);
app.component('todayactivity', TodayActivity);
app.component('attendempfilter', AttendEmpFilter);
app.component('departmentheader', DepartmentHeader);
app.component('departmenttable', DepartmentTable);
app.component('departmentmodal', DepartmentModal);
app.component('designationheader', DesignationHeader);
app.component('designationtable', DesignationTable);
app.component('designationmodal', DesignationModal);
app.component('employeeheader', EmployeeHeader);
app.component('employeefilter', EmployeeFilter);
app.component('employeecontent', EmployeeContent);
app.component('employeemodal', EmployeeModal);
app.component('employeelistcontent', EmployeeListContent);
app.component('headerholidays', HeaderHoliday);
app.component('holidaycontent', HolidayContent);
app.component('modalholiday', ModalHoliday);
app.component('headerleave', HeaderLeave);
app.component('leavewidget', LeaveWidget);
app.component('leavefilter', LeaveFilter);
app.component('leavecontent', LeaveContent);
app.component('modalleave', ModalLeave);
app.component('headerleaveemployee', HeaderLeaveEmployee);
app.component('widgetleaveemployee', WidgetLeaveEmployee);
app.component('contentleaveemployee', ContentLeaveEmployee);
app.component('modalleaveemployee', ModalLeaveEmployee);
app.component('headerleavesetting', HeaderLeaveSetting );
app.component('annualleavesetting', AnnualLeaveSetting );
app.component('sickleavesetting', SickLeaveSetting );
app.component('hospitalleavesetting', HospitalLeaveSetting );
app.component('maternityleavesetting', MaternityLeaveSetting );
app.component('paternityleavesetting', PaternityLeaveSetting );
app.component('createleavesetting', CreateLeaveSetting );
app.component('modalleavesetting', ModalLeaveSetting );
app.component('headerovertime', HeaderOvertime );
app.component('overtimewidget', OvertimeWidget );
app.component('overtimecontent', OvertimeContent );
app.component('modalovertime', ModalOvertime );
app.component('timesheettable', TimesheetTable);
app.component('shifttable', ShiftTable);
app.component('schedulingtable', SchedulingTable);


/*********report component******/
app.component('attendreportheader', AttendReportHeader);
app.component('attendreportfilter', AttendReportFilter);
app.component('dailyreportsheader', DailyReportsHeader);
app.component('dailyreportheadercontent', DailyReportHeaderContent);
app.component('dailyreportsfilter', DailyReportsFilter);
app.component('dailyreporttable', DailyReporttable);
app.component('employeereportheader', EmployeeReportHeader);
app.component('employeereportfilter', EmployeeReportFilter);
app.component('employeereporttable', EmployeeReportTable);
app.component('expensereportheader', ExpenseReportHeader);
app.component('expensereportfilter', ExpenseReportFilter);
app.component('expensereportcontent', ExpenseReportContent);
app.component('headerinvoicereport', HeaderInvoiceReport);
app.component('invoicereportfilter', InvoiceReportFilter);
app.component('invoicereporttable', InvoiceReportTable);
app.component('headerleavereport', HeaderLeaveReport);
app.component('leavereportfilter', LeaveReportFilter);
app.component('leavereportcontent', LeaveReportContent);
app.component('headerpaymentreport', HeaderPaymentReport );
app.component('filterpaymentreport', FilterPaymentReport );
app.component('contentpaymentreport', ContentPaymentReport );
app.component('headerpayslipreport', HeaderPayslipReport );
app.component('payslipfilter', PayslipFilter );
app.component('payslipcontent', PayslipContent );
app.component('headerprojectreport', HeaderProjectReport );
app.component('filterprojectreport', FilterProjectReport );
app.component('projectreportcontent', ProjectReportContent );
app.component('tableuserreport', TableUserReport );

app.component('taskreporttable', TaskReportTable );
app.component('taskreportfilter', TaskReportFilter );


/*********accounting component******/
app.component('budgetexpenseheader', BudgetExpenseHeader);
app.component('budgetexpensemodal', BudgetExpenseModal);
app.component('budgetrevenueheader', BudgetRevenueHeader);
app.component('budgetrevenuemodal', BudgetRevenueModal);
app.component('budgetheader', BudgetHeader);
app.component('budgetmodal', BudgetModal);
app.component('categoriesheader', CategoriesHeader);
app.component('categoriesmodal', CategoriesModal);

app.component('subcategoriesmodal', SubCategoriesModal);
app.component('subcategoriesheader', SubCategoriesHeader);


/*********call component******/
app.component('chatmiddle', ChatMiddle);
app.component('chatend', ChatEnd);
app.component('chatmodal', ChatModal);

/*********profile component******/
app.component('clientprofileheader', ClientProfileHeader);
app.component('clientheadercontent', ClientHeaderContent);
app.component('clientprofiletab', ClientProfileTab);
app.component('clientprofiletabcontent', ClientProfileTabContent);
app.component('headerprofile', HeaderProfile );
app.component('profilecardfirst', ProfileCardFirst );
app.component('profilecardsecond', ProfileCardSecond );
app.component('profilecontent', ProfileContent );
app.component('modalprofile', ModalProfile );

/*********clients component******/
app.component('clientsheader', ClientsHeader);
app.component('clientsfilter', ClientsFilter);
app.component('clientsmodal', ClientsModal);

/*********components component******/
app.component('componentsidebar', ComponentSidebar);
app.component('componentheadercontent', ComponentHeaderContent);

/*********app component******/
app.component('mailsidebar', MailSidebar);
app.component('composeheader', ComposeHeader);
app.component('contactheader', ContactHeader);
app.component('contactsidebar', ContactSidebar);
app.component('contactcontent', ContactContent);
app.component('contactmodal', ContactModal);
app.component('eventheader', EventHeader);
app.component('eventmodal', EventModal);
app.component('filemanagersidebar', FilemanagerSidebar);
app.component('filemanagercontent', FilemanagerContent);
app.component('inboxsidebar', InboxSidebar);
app.component('headerinbox', HeaderInbox);
app.component('inboxcontent', InboxContent);
app.component('mailviewsidebar', MailViewSidebar );
app.component('headermailview', HeaderMailView );
app.component('mailviewcontent', MailViewContent );
app.component('videocallmodal', VideoCallModal);

/*********sales component******/
app.component('estimateheader', CreateEstimateHeader);
app.component('estimatefilter', CreateEstimateFilter);
app.component('createestimatetable', CreateEstimateTable);
app.component('createinvoiceheader', CreateInvoiceHeader);
app.component('createinvoicefilter', CreateInvoiceFilter);
app.component('createinvoicetable', CreateInvoiceTable);
app.component('editestimateheader', EditEstimateHeader);
app.component('editestimatefilter', EditEstimateFilter);
app.component('editestimatetable', EditEstimateTable);
app.component('editinvoiceheader', EditInvoiceHeader);
app.component('editinvoicefilter', EditInvoiceFilter);
app.component('editinvoicetable', EditInvoiceTable);
app.component('mainestimateheader', MainEstimateHeader);
app.component('mainestimatefilter', MainEstimateFilter);
app.component('mainestimatecontent', MainEstimateContent);
app.component('mainestimatemodal', MainEstimateModal);
app.component('estimateviewheader', EstimateViewHeader);
app.component('estimateviewcontent', EstimateViewContent);
app.component('expenseheader', ExpenseHeader);
app.component('expensefilter', ExpenseFilter);
app.component('expensetable', ExpenseTable);
app.component('expensemodal', ExpenseModal);
app.component('maininvoiceheader', MainInvoiceHeader);
app.component('maininvoicefilter', MainInvoiceFilter);
app.component('maininvoicetable', MainInvoiceTable);
app.component('headerinvoiceview', HeaderInvoiceView);
app.component('invoiceviewcontent', InvoiceViewContent);
app.component('headerpayment', HeaderPayment );
app.component('paymentcontent', PaymentContent );
app.component('fundtable', FundTable );
app.component('taxmodal', TaxModal );
app.component('taxtable', TaxTable );


/*********table component******/
app.component('datatableheader', DatatableHeader);
app.component('table-content', TableContent);
app.component('tablebasic1', TableBasic1);
app.component('tablebasic2', TableBasic2);
app.component('tablebasic3', TableBasic3);

/*********mainpage component******/
app.component('faqheader', FaqHeader);
app.component('faqcontent', FaqContent);
app.component('headerprivacy', HeaderPrivacy );
app.component('privacycontent', PrivacyContent );
app.component('modaltermination', ModalTermination );
app.component('terminationtable', TerminationTable );

/*********form component******/
app.component('headerbasicinputs', HeaderBasicInputs);
app.component('basicinputform', BasicInputForm);
app.component('headerhorizontal', HeaderHorizontal);
app.component('basicform', BasicForm);
app.component('addressform', AddressForm);
app.component('horizontalcolumnform', HorizontalColumnForm);
app.component('horizontalcolumnform1', HorizontalColumnForm1);
app.component('headerinputgroups', HeaderInputgroups);
app.component('basicexample', BasicExample);
app.component('sizing', Sizing);
app.component('checkbox', Checkbox);
app.component('multipleaddons', Multipleaddons);
app.component('headerformmask', HeaderFormMask);
app.component('formmaskcontent', FormMaskContent);
app.component('headerformvalidation', HeaderFormValidation);
app.component('formvalidationcontent', FormValdiationContent);
app.component('headerformvertical', HeaderFormVertical);
app.component('basicverticalform', BasicVerticalForm);
app.component('basicaddressform', BasicAddressForm);
app.component('basictwocolumnform', BasicTwoColumnForm);

/*********goals component******/
app.component('headertracking', HeaderTracking);
app.component('trackingcontent', TrackingContent);
app.component('modaltracking', ModalTracking);
app.component('headergoaltype', HeaderGoalType);
app.component('goaltypecontent', GoalTypeContent);
app.component('modalgoaltype', ModalGoalType);

/*********payroll component******/
app.component('headerpayrollitem', HeaderPayrollItem );
app.component('payrollitemtab', PayrollItemTab );
app.component('payrollitemcontent', PayrollItemContent );
app.component('modaladdpayrollitem', ModalAddPayrollItem );
app.component('modalovertimepayrollitem', ModalOvertimePayrollItem );
app.component('modaldeductionpayroll', ModalDeductionPayroll );
app.component('salarytable', SalaryModal );
app.component('salarymodal', SalaryTable );
app.component('salaryviewtable', SalaryViewTable );


/*********performance component******/
app.component('performanceheader', PerformanceHeader );
app.component('basicinformation', BasicInformation );
app.component('achievements', Achievements );
app.component('improvement', Improvement );
app.component('personalupdate', PersonalUpdate );
app.component('training', Training );
app.component('hrd', Hrd );
app.component('performanceappraisalheader', PerformanceAppraisalHeader  );
app.component('performanceappraisaltable', PerformanceAppraisalTable  );
app.component('modalperformanceappraisal', ModalPerformanceAppraisal  );
app.component('performanceindicatorheader', PerformanceIndicatorHeader  );
app.component('performanceindicatortable', PerformanceIndicatorTable  );
app.component('modalperformanceindicator', ModalPerformanceIndicator  );
app.component('headerperformancesetting', HeaderPerformanceSetting  );
app.component('tabperformancesetting', TabPerformanceSetting  );
app.component('okrperformancesetting', OkrPerformanceSetting  );
app.component('competencyperformancesetting', CompetencyPerformanceSetting  );
app.component('performancesettinggoal', PerformanceSettingGoal  );

/*********project component******/
app.component('headerprojectlist', HeaderProjectList  );
app.component('filterprojectlist', FilterProjectList   );
app.component('tableprojectlist', TableProjectList  );
app.component('modalprojectlist', ModalProjectList  );

/*********projects component******/
app.component('mainprojecttable', MainProjectTable );
app.component('projectdetails', ProjectDetails );
app.component('projectadmin', ProjectAdmin );
app.component('taskboardmodal', TaskBoard);
app.component('taskboardetail', TaskBoardDetail);

/*********projects component******/
app.component('promotiontable', PromotionTable );

/*********users component******/
app.component('usermodal', UserModal  );
app.component('usertable', UserTable   );

/*********training component******/
app.component('trainingtable', TrainingTable  );
app.component('modalmaintraining', ModalMainTraining   );
app.component('trainingtable', Trainingtable   );
app.component('trainermodal', TrainerModal   );
app.component('trainerstable', TrainersTable   );

/*********tickets component******/
app.component('ticketviewmodal', TicketViewModal  );
app.component('mainticketmodal', MainTicketModal );
app.component('maintable', MainComponentTable );
app.component('mainfilter', MainFilter );
app.component('mainwidget', MainWidget );

/*********tasks component******/
app.component('tasksidebar', TaskSidebar );
app.component('taskmodal', TaskModal );

/*********subscriptions component******/
app.component('companytable1', CompanyTable1 );
app.component('companytable2', CompanyTable2 );
app.component('companytable3', CompanyTable3 );
app.component('companytable4', CompanyTable4 );
app.component('companytable5', CompanyTable5 );
app.component('companiesmodal', CompaniesModal );
app.component('companiestable', CompaniesTable );
app.component('companiesfilter', CompaniesFilter );
/*********resignation component******/
app.component('modresignation', modalresignation );
app.component('resinationtab', resignationtable );

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8000';


app.component('vue-select', VueSelect);
app.component('datepicker', DatePicker);

app.use(pinia)

app.use(router)
.mount('#app');

