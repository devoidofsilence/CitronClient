<template>
    <div class="divTableBody">
      <div class="divTableRow">
        <div class="divTableCell">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Task Code" v-model:value="task.Code">
          </div>
        </div>
        <div class="divTableCell">
          <div class="form-group">
              <input type="text" class="form-control" placeholder="Task name" v-model:value="task.Name">
            </div>
        </div>
        <div class="divTableCell">
            <div class="form-group">
                  <textarea type="text" class="form-control" placeholder="Task descriptions" v-model:value="task.Description"></textarea>
            </div>
        </div>
        <div class="divTableCell">
            <div class="form-group">
              <select id="ddl_ParentTast" class="form-control" v-model="task.ParentTaskCode">
                <option value="">Please Select</option>
                <option v-for="parentTask in parentTasks" v-bind:value="parentTask.Code">{{parentTask.Name}}</option>
              </select>
             </div>
        </div>
        <div class="divTableCell">
             <div class="form-group">
              <select id="ddl_ParentTast" class="form-control" v-model="task.ResponsibleEmployeeCode">
                <option value="">Please Select</option>
                  <option v-for="responsibleEmployee in responsibleEmployees" v-bind:value="responsibleEmployee.Code">{{responsibleEmployee.Name}}</option>
              </select>
             </div>
        </div>
        <div class="divTableCell">
          <div class="form-group">
              <input type="text" class="form-control" placeholder="5">
           </div>
        </div>
        <div class="divTableCell">
           <div class="form-group">
              <input type="text" class="form-control" placeholder="Optimistic time" v-model:value="task.OptimisticTime">
           </div>
        </div>
        <div class="divTableCell">
          <div class="form-group">
                <input type="text" class="form-control" placeholder="Optimistic time" v-model:value="task.OptimisticTime">
              </div>
            </div>
          <div class="divTableCell">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Normal time" v-model:value="task.NormalTime">
            </div>
          </div>
          <div class="divTableCell">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Expected time" v-model:value="task.ExpectedTime">
            </div>
          </div>
        </div>
      </div>
  </template>

<script>
import TaskModel from '../../models/TaskModel'
import _ from 'lodash'
import { MultiSelect } from 'vue-search-select'
var ParentTaskList = []
var ResponsibleEmployeeList = []
export default {
  name: 'TaskFormRow',
  data () {
    return {
      msg: 'Citron',
      responsibleEmployees: ResponsibleEmployeeList,
      parentTasks: ParentTaskList,
      task: TaskModel,
      editMode: false,
      options: [],
        searchText: '', // If value is falsy, reset searchText & searchItem
        items: [],
        lastSelectItem: {}
    }
  },
  components: {
    MultiSelect
  },
  methods: {
    saveTask: function () {
      this.$root.$children[0].loaderShowHide()
      if (this.editMode === true) {
          this.$http.post('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/UpdateProjectTaskDetail', this.task).then(function () {
          this.$router.go('/task-list')
         // this.$root.$children[0].loaderShowHide()
        })
      } else {
        this.$root.$children[0].loaderShowHide()
        this.$http.post('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/AddProjectTask', this.task).then(function () {
        this.$router.go('/task-list')
       // this.$root.$children[0].loaderShowHide()
      })
      }
    },
      closeNav: function () {
      document.getElementById('CreateProject').style.width = '0'
      document.body.className = ''
    },
    onSelect: function (items, lastSelectItem) {
        this.items = items
        this.project.AssignedEmployees = []
        for (var i = 0; i < items.length; i++) {
          this.project.AssignedEmployees.push(items[i].value)
        }
        this.lastSelectItem = lastSelectItem
      },
      // deselect option
      reset: function () {
        this.items = [] // reset
      },
      // select option from parent component
      selectOption: function () {
        this.items = _.unionWith(this.items, [this.options[0]], _.isEqual)
      }
  },
  created: function () {
      if (typeof this.Properties !== 'undefined' && this.Properties.length !== 0 && this.Properties !== '') {
        if (this.Properties[0].Mode === 'Edit') {
          this.editMode = true
        } else {
          this.editMode = false
        }
      }
      // if (this.editMode === true) {
      //   this.task = this.Properties[0].Task
      //   this.task.ParentTaskCode = this.task.ParentTaskCode == null ? '' : this.task.ParentTaskCode
      //   this.task.ResponsibleEmployeeCode = this.task.ResponsibleEmployeeCode == null ? '' : this.task.ResponsibleEmployeeCode
      // } else {
      //   this.task.ProjectCode = this.Properties[0].Project.Code
      //   this.task.ProjectName = this.Properties[0].Project.Name
      // }
      this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/GetProjectTasks').then(function (data) {
        ParentTaskList = []
        for (var i = 0; i < data.body.length; i++) {
          ParentTaskList.push({Code:data.body[i].Code, Name: data.body[i].Name})
        }
        this.parentTasks = ParentTaskList
      })

      this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/HRModule/GetEmployees').then(function (data) {
        ResponsibleEmployeeList = []
        for (var i = 0; i < data.body.length; i++) {
          ResponsibleEmployeeList.push({Code:data.body[i].Code, Name: data.body[i].Name})
        }
        this.responsibleEmployees = ResponsibleEmployeeList
      })

       this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/HRModule/GetEmployees').then(function (data) {
      this.options = []
        if (typeof data !== 'undefined') {
          for (var i = 0; i < data.body.length; i++) {
            this.options.push({value:data.body[i].Code, text: data.body[i].Name})
          }
        }
      })
    },
    props: ['Properties']
}
</script>

<style scoped>

</style>
