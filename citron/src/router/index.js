import Vue from 'vue'
import Router from 'vue-router'
import VeeValidate from 'vee-validate'
import VuePaginate from 'vue-paginate'
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
import AddKeyStakeholder from '@/components/AddKeyStakeholder'

Vue.use(VuePaginate)
Vue.use(VeeValidate)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TaskVaccum',
      component: TaskVaccum
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
      path: '/project-charter',
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
      path: '/AddKey-stakeholder',
      name: 'AddKeyStakeholder',
      component: AddKeyStakeholder
    }
  ]
})
