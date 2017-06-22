import Vue from 'vue'
import Router from 'vue-router'
import VeeValidate from 'vee-validate'
import VuePaginate from 'vue-paginate'
import StarRating from 'vue-star-rating'
import App from '@/App'
import TaskVaccum from '@/components/TaskVaccum'
import EmployeesList from '@/components/EmployeesList'
import JobDetails from '@/components/JobDetails'
import AccountDetails from '@/components/AccountDetails'
import ProfileSection from '@/components/ProfileSection'
import RightSlideCanvas from '@/components/RightSlideCanvas'
import EmployeeForm from '@/components/EmployeeForm'
import ProjectLists from '@/components/ProjectLists'
import TaskLists from '@/components/TaskLists'
import TaskForm from '@/components/TaskForm'
import ProjectCharter from '@/components/ProjectCharter'
import ProjectCharterView from '@/components/ProjectCharterView'
import ProjectCharterViewBox from '@/components/ProjectCharterViewBox'
import StakeHolders from '@/components/StakeHolders'
import AssignStakeholders from '@/components/AssignStakeholders'

Vue.use(VuePaginate)
Vue.use(VeeValidate)
Vue.use(Router)
Vue.component('star-rating', StarRating)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'TaskVaccum',
      component: TaskVaccum
    },
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/rightSlideCanvas/:EmployeeEditModel',
      name: 'RightSlideCanvas',
      component: RightSlideCanvas
    },
    {
      path: '/employees-list',
      name: 'r-EmployeesList',
      component: EmployeesList
    },
    {
      path: '/job-detail',
      name: 'JobDetails',
      component: JobDetails
    },
    {
      path: '/account-details',
      name: 'AccountDetails',
      component: AccountDetails
    },
    {
      path: '/profile-view/:EmployeeModel',
      name: 'ProfileView',
      component: ProfileSection
    },
    {
      path: '/project-list',
      name: 'ProjectLists',
      component: ProjectLists
    },
    {
      path: '/task-list',
      name: 'TaskLists',
      component: TaskLists
    },
    {
      path: '/task-form/:ProjectModel',
      name: 'TaskForm',
      component: TaskForm
    },
    {
      path: '/project-charter/:ProjectModel',
      name: 'ProjectCharter',
      component: ProjectCharter
    },
    {
      path: '/project-charter-view',
      name: 'ProjectCharterView',
      component: ProjectCharterView
    },
    {
      path: '/stakeholders',
      name: 'StakeHolders',
      component: StakeHolders
    },
    {
      path: '/AssignStakeholders/:ProjectModel',
      name: 'AssignStakeholders',
      component: AssignStakeholders
    }
  ]
})
