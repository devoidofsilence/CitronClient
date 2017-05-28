import Vue from 'vue'
import Router from 'vue-router'
import TaskVaccum from '@/components/TaskVaccum'
import CreateNewHr from '@/components/CreateNewHr'
import EmployeesList from '@/components/EmployeesList'
import JobDetails from '@/components/JobDetails'
import AccountDetails from '@/components/AccountDetails'
import ProfileSection from '@/components/ProfileSection'
import ProjectLists from '@/components/ProjectLists'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TaskVaccum',
      component: TaskVaccum
    },
    {
      path: '/hrm',
      name: 'CreateNewHr',
      component: CreateNewHr
    },
    {
      path: '/editHrm/:EmployeeEditModel',
      name: 'EditNewHr',
      component: CreateNewHr
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
      path: '/profile-view',
      name: 'ProfileView',
      component: ProfileSection
    },
    {
      path: '/project-list',
      name: 'ProjectLists',
      component: ProjectLists
    }
  ]
})
