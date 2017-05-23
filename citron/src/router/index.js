import Vue from 'vue'
import Router from 'vue-router'
import TaskVaccum from '@/components/TaskVaccum'
import CreateNewHr from '@/components/CreateNewHr'
import EmployeesList from '@/components/EmployeesList'

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
      path: '/employees-list',
      name: 'r-EmployeesList',
      component: EmployeesList
    }
  ]
})
