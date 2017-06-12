<template>
<div>
    <div class="app__actions__panel app__actions__panelStatus">
          <span class="button button--green" v-on:click="addTaskRow">Add new task</span>
    </div>
  <div class="divTable__wrapper pr__spreedsheet task__spreedsheet">
  <div class="divTable">
    <div class="divTableHeading">
      <div class="divTableRow">
        <div class="divTableHead xsmall__cell">Code</div>
        <div class="divTableHead small__cell">Task Name</div>
        <div class="divTableHead long__cell">Task description</div>
        <div class="divTableHead normal__cell">Parent task</div>
        <div class="divTableHead normal__cell">Responsible</div>
        <div class="divTableHead normal__cell">Assigned</div>
        <div class="divTableHead normal__cell">Optimistic time</div>
        <div class="divTableHead normal__cell">Pessimistic time</div>
        <div class="divTableHead normal__cell">Normal time</div>
        <div class="divTableHead normal__cell">Expected time</div>
      </div>
    </div>
      <TaskFormRow v-for="taskRow in taskRows" :properties="taskRow"></TaskFormRow>
  </div>
</div>
    <!--<div class="row">
            <div class="col-xs-1">
              <label>Task Code</label>
            </div>
            <div class="col-xs-1">
              <label>Task Name</label>
            </div>
            <div class="col-xs-2">
              <label>Task description</label>
            </div>
            <div class="col-xs-1">
              <label>Parent task</label>
            </div>
            <div class="col-xs-1">
              <label>Responsible Employee</label>
            </div>
            <div class="col-xs-2">
              <label>Assigned Employee</label>
            </div>
            <div class="col-xs-1">
              <label>Optimistic time</label>
            </div>
            <div class="col-xs-1">
              <label>Pessimistic time</label>
            </div>
            <div class="col-xs-1">
              <label>Normal time</label>
            </div>
            <div class="col-xs-1">
              <label>Expected time</label>
            </div>
    </div>-->
    
<!--<form @submit.prevent="validateBeforeSubmit">-->
     <!-- New projects form -->
    <!--<div class="panel__box">
      <div class="form__hr">
        <form>
          <div class="row">
            <div class="col-xs-12">
                <div class="form-group">
                  <label>Task Code</label>
                    <p class="control has-icon has-icon-right"></p>
                  <input name="task code" class="form-control" v-model:value="task.Code" v-validate="'required|alpha_num'" :class="{'input': true, 'is-danger': errors.has('task code') }" type="text" placeholder="Task code">
                  <i v-show="errors.has('task code')" class="fa fa-warning"></i>
                  <span v-show="errors.has('task code')" class="help is-danger">{{ errors.first('task code') }}</span>
                </div>
            </div>
            <div class="col-xs-12">
                <div class="form-group">
                  <label>Project Code</label>
                  <p class="control has-icon has-icon-right"></p>
                  <input name="project code" class="form-control" v-model:value="task.ProjectCode" v-validate="'required|alpha_num'" :class="{'input': true, 'is-danger': errors.has('project code') }" type="text" placeholder="Project code">
                  <i v-show="errors.has('project code')" class="fa fa-warning"></i>
                  <span v-show="errors.has('project code')" class="help is-danger">{{ errors.first('project code') }}</span>
                </div>
            </div>
            <div class="col-xs-12">
                <div class="form-group">
                  <label>Project Name</label>
                   <input type="text" class="form-control" placeholder="Task Descriptions" v-model:value="task.ProjectName">
                </div>
            </div>
             <div class="col-xs-12">
                <div class="form-group">
                  <label>Task Name</label>
                    <p class="control has-icon has-icon-right"></p>
                  <input name="task name" class="form-control" v-model:value="task.TaskName" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('task name') }" type="text" placeholder="Task Name">
                  <i v-show="errors.has('task name')" class="fa fa-warning"></i>
                  <span v-show="errors.has('task name')" class="help is-danger">{{ errors.first('task name') }}</span>
                </div>
            </div>
            <div class="col-xs-12">
                <div class="form-group">
                  <label>Task descriptions</label>
                 <input type="text" class="form-control" placeholder="Task Descriptions" v-model:value="task.Description">
                </div>
            </div>
            <div class="col-xs-12">
                <div class="form-group">
                  <label>Parent task</label>
                  <select id="ddl_ParentTast" class="form-control" v-model="task.ParentTaskCode">
                  <option value="">Please Select</option>
                    <option v-for="parentTask in parentTasks" v-bind:value="parentTask.Code">{{parentTask.Name}}</option>
                  </select>
                </div>
            </div>
            <div class="col-xs-12">
                <div class="form-group">
                  <label>Responsible Employee</label>
                  <select id="ddl_ParentTast" class="form-control" v-model="task.ResponsibleEmployeeCode">
                  <option value="">Please Select</option>
                    <option v-for="responsibleEmployee in responsibleEmployees" v-bind:value="responsibleEmployee.Code">{{responsibleEmployee.Name}}</option>
                  </select>
                </div>
            </div>
            <div class="col-xs-12">
              <div class="form-group">
                <multi-select :options="options" :selected-options="items" placeholder="Select Employees" @select="onSelect"></multi-select>
              </div>
            </div>
            <div class="col-xs-12">
                <div class="panel__box__title"><span>Personal details</span></div>
                <div class="row">
                  <div class="col-xs-12 col-sm-6">
                    <div class="form-group">
                        <label>Optimistic time</label>
                       <p class="control has-icon has-icon-right">
                         <input name="optimistic time" class="form-control" v-model:value="task.OptimisticTime" :class="{'input': true, 'is-danger': errors.has('Optimistic time') }" type="text" placeholder="OPtimistic Time">
                        <i v-show="errors.has('optimistic time')" class="fa fa-warning"></i>
                       <span v-show="errors.has('optimistic time')" class="help is-danger">{{ errors.first('optimistic time') }}</span>
                       </p>
                      </div>
                  </div>
                  <div class="col-xs-12 col-sm-6">
                    <div class="form-group">
                      <label>Pessimistic time</label>
                         <p class="control has-icon has-icon-right">
                         <input name="pessimistic time" class="form-control"  v-model:value="task.PessimisticTime" :class="{'input': true, 'is-danger': errors.has('pessimistic time') }" type="text" placeholder="Pessimistic Time">
                        <i v-show="errors.has('pessimistic time')" class="fa fa-warning"></i>
                       <span v-show="errors.has('pessimistic time')" class="help is-danger">{{ errors.first('pessimistic time') }}</span>
                       </p>
                      </div>
                  </div>
                  <div class="col-xs-12 col-sm-6">
                    <div class="form-group">
                        <label>Normal time</label>
                         <p class="control has-icon has-icon-right">
                         <input name="normal time" class="form-control"  v-model:value="task.NormalTime" :class="{'input': true, 'is-danger': errors.has('normal time') }" type="text" placeholder="Normal Time">
                        <i v-show="errors.has('normal time')" class="fa fa-warning"></i>
                       <span v-show="errors.has('normal time')" class="help is-danger">{{ errors.first('normal time') }}</span>
                       </p>
                      </div>
                  </div>
                  <div class="col-xs-12 col-sm-6">
                    <div class="form-group">
                        <label>Expected time</label>
                          <p class="control has-icon has-icon-right">
                         <input name="expected time" class="form-control"  v-model:value="task.ExpectedTime" :class="{'input': true, 'is-danger': errors.has('expected time') }" type="text" placeholder="Expected Time">
                        <i v-show="errors.has('expected time')" class="fa fa-warning"></i>
                       <span v-show="errors.has('expected time')" class="help is-danger">{{ errors.first('expected time') }}</span>
                       </p>
                      </div>
                  </div>
                </div>
            </div>
          </div>
        </form>
      </div>
    </div>-->
    <div class="action__buttons action__buttons--center">
        <button type="submit" value="Submit" class="button button--green" v-on:click="saveTasks">Submit</button>
        <button type="button" value="Cancel" class="button button--border--green" v-on:click="closeNav()">Cancel</button>
    </div>
</form>
</div>
</template>

<script>
import TaskModel from '../models/TaskModel'
import _ from 'lodash'
import TaskFormRow from './row_components/TaskFormRow'
import { MultiSelect } from 'vue-search-select'
var ParentTaskList = []
var ResponsibleEmployeeList = []
export default {
  name: 'TaskForm',
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
      lastSelectItem: {},
      taskRows: []
    }
  },
  components: {
    MultiSelect,
    TaskFormRow
  },
  methods: {
      validateBeforeSubmit () {
      this.$validator.validateAll().then(() => {
          // eslint-disable-next-line
          this.saveTask()
          alert('From Submitted!')
      }).catch(() => {
          // eslint-disable-next-line
          alert('Correct them errors!')
      })
    },
    addTaskRow: function () {
      debugger
      var clonedTask = _.clone(this.task)
      this.taskRows.push({Task:clonedTask, Mode: 'Add'})
    },
    saveTasks: function () {
      console.log(this.taskRows)
    },
      saveTask: function () {
        debugger
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
        this.task.AssignedEmployees = []
        for (var i = 0; i < items.length; i++) {
          this.task.AssignedEmployees.push(items[i].value)
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
      // if (typeof this.Properties !== 'undefined' && this.Properties.length !== 0 && this.Properties !== '') {
      //   debugger
      //   if (this.Properties[0].Mode === 'Edit') {
      //     this.editMode = true
      //   } else {
      //     this.editMode = false
      //   }
      // }
      // if (this.editMode === true) {
      //   debugger
      //   this.task = this.Properties[0].Task
      //   this.task.ParentTaskCode = this.task.ParentTaskCode == null ? '' : this.task.ParentTaskCode
      //   this.task.ResponsibleEmployeeCode = this.task.ResponsibleEmployeeCode == null ? '' : this.task.ResponsibleEmployeeCode
      // } else {
      //   debugger
      //   this.task.ProjectCode = this.Properties[0].Project.Code
      //   this.task.ProjectName = this.Properties[0].Project.Name
      // }
    //   this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/GetProjectTasks').then(function (data) {
    //     ParentTaskList = []
    //     for (var i = 0; i < data.body.length; i++) {
    //       ParentTaskList.push({Code:data.body[i].Code, Name: data.body[i].Name})
    //     }
    //     this.parentTasks = ParentTaskList
    //   })

    //   this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/HRModule/GetEmployees').then(function (data) {
    //     ResponsibleEmployeeList = []
    //     for (var i = 0; i < data.body.length; i++) {
    //       ResponsibleEmployeeList.push({Code:data.body[i].Code, Name: data.body[i].Name})
    //     }
    //     this.responsibleEmployees = ResponsibleEmployeeList
    //   })

    //    this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/HRModule/GetEmployees').then(function (data) {
    //   this.options = []
    //     if (typeof data !== 'undefined') {
    //       for (var i = 0; i < data.body.length; i++) {
    //         this.options.push({value:data.body[i].Code, text: data.body[i].Name})
    //       }
    //     }
    //   })
    //   if (typeof this.Properties !== 'undefined' && this.Properties !== '' && this.Properties.length !== 0) {
    //     this.editMode = true
    //     this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/GetTaskDetail/' + this.Properties[0].Task.Code)
    //     .then(function (data) {
    //       this.task = data.body
    //       this.items = []
    //       var pushedItems = []
    //       var o = this.options
    //       var p = this.task.AssignedEmployees

    //       _.each(p, function (code) {
    //         var y = (_.filter(o, function (op) {
    //             return op.value === code
    //         }))
    //         pushedItems.push(y[0])
    //       })

    //       this.items = pushedItems
    //       })
    // }
    },
    props: ['Properties']
}
</script>

<style scoped>

</style>
