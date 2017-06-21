<template>
<div>
    <component :is="currentView" :show-modal-prop="showModal" :active-model="task" :header="modalHeader" :body-question="modalBodyQuestion" :accept-text="modalAcceptText" :cancel-text="modalCancelText" :domain="'task'" @deleteTask="removeTaskRow(task)" @close="closeModal">
    </component>
    <EmployeesSelectorModal :show-modal-prop="showEmployeeSelectorModal" :project-employees-list="options" @close="closeEmployeesSelectorModal"></EmployeesSelectorModal>
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
        <div class="divTableHead normal__cell">Action</div>
      </div>
    </div>
    <div class="divTableBody">
      <TaskFormRow v-for="taskRow in taskRows" :key="taskRow" :properties="taskRow" :responsible-employees="responsibleEmployees" :parent-tasks="parentTasks" @remove="deleteDialogOpen(taskRow)" @showEmployeesSelector = "showEmployeesSelector"></TaskFormRow>
      <!--<button v-on:click="removeTask" :data-id="taskRow.tempId">Remove Task {{taskRow.tempId}}</button>-->
    </div>
  </div>
</div>
    <div class="action__buttons action__buttons--center">
        <button type="submit" value="Submit" class="button button--green" v-on:click="saveTask">Submit</button>
        <button type="button" value="Cancel" class="button button--border--green" v-on:click="closeNav()">Cancel</button>
    </div>
</form>
</div>
</template>

<script>
import TaskModel from '../models/TaskModel'
import _ from 'lodash'
import TaskFormRow from './row_components/TaskFormRow'
import DeleteModal from './modal_components/DeleteModal'
import EmployeesSelectorModal from './modal_components/EmployeesSelectorModal'
var ParentTaskList = []
var ResponsibleEmployeeList = []
export default {
  name: 'TaskForm',
  data () {
    return {
      msg: 'Citron',
      counter: 0,
      responsibleEmployees: ResponsibleEmployeeList,
      parentTasks: ParentTaskList,
      task: TaskModel,
      editMode: false,
      options: [],
      searchText: '', // If value is falsy, reset searchText & searchItem
      items: [],
      lastSelectItem: {},
      taskRows: [],
      currentView: '',
      showModal: false,
      modalHeader: '',
      modalBodyQuestion: '',
      modalAcceptText: '',
      modalCancelText: '',
      showEmployeeSelectorModal: false
    }
  },
  components: {
    TaskFormRow,
    DeleteModal,
    EmployeesSelectorModal
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
    deleteDialogOpen: function (taskRow) {
      this.showModal = true
      this.currentView = 'DeleteModal'
      this.task = taskRow
      this.modalHeader = 'Confirm'
      this.modalBodyQuestion = 'Are you sure you want to delete this task?'
      this.modalAcceptText = 'Yes'
      this.modalCancelText = 'No'
    },
    closeModal: function () {
      this.showModal = false
    },
    addTaskRow: function () {
      var clonedTask = _.clone(this.task)
      this.counter++
      this.taskRows.push({Task:clonedTask, Mode: 'Add'})
    },
    saveTasks: function () {
      console.log(this.taskRows)
    },
      saveTask: function () {
      this.$root.$children[0].loaderShowHide()
      if (this.editMode === true) {
          this.$http.post('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/UpdateProjectTaskDetail', this.task).then(function () {
          this.$router.go('/task-list')
         // this.$root.$children[0].loaderShowHide()
        })
      } else {
        this.$root.$children[0].loaderShowHide()
        this.$http.post('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/AddProjectTask', this.taskRows[0].Task).then(function () {
        this.$router.go('/task-list')
       // this.$root.$children[0].loaderShowHide()
      })
      }
    },
      closeNav: function () {
      document.getElementById('CreateProject').style.width = '0'
      document.body.className = ''
    },
    removeTaskRow: function (taskRow) {
      this.taskRows = this.taskRows.filter(function (obj) {
        return obj !== taskRow
      })
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
      },
      showEmployeesSelector: function () {
        this.showEmployeeSelectorModal = true
        // this.showModal = true
        // this.currentView = 'EmployeesSelectorModal'
        // this.task = taskRow
        // this.modalHeader = 'Confirm'
        // this.modalBodyQuestion = 'Are you sure you want to delete this task?'
        // this.modalAcceptText = 'Yes'
        // this.modalCancelText = 'No'
      },
      closeEmployeesSelectorModal: function () {
        this.showEmployeeSelectorModal = false
      }
  },
    // created: function () {
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
      this.$root.$children[0].active = true
      if (typeof this.$route.params.ProjectModel.Name !== undefined && this.$route.params.ProjectModel.Name !== 0 && this.$route.params.ProjectModel.Name !== '' && this.$route.params.ProjectModel.Name !== 'undefined') {
        this.$root.$children[0].$children[0].ProjectName = this.$route.params.ProjectModel.Name
      }
       if (typeof this.$route.params.ProjectModel.Name !== undefined && this.$route.params.ProjectModel.Name !== 0 && this.$route.params.ProjectModel.Name !== '' && this.$route.params.ProjectModel.Name !== 'undefined') {
     this.$root.$children[0].projectModelApp = this.$route.params.ProjectModel
   }
      this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/GetProjectTasks').then(function (data) {
        ParentTaskList = []
        for (var i = 0; i < data.body.length; i++) {
          ParentTaskList.push({Code:data.body[i].Code, Name: data.body[i].Name})
        }
        this.parentTasks = ParentTaskList
      })

      // this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/HRModule/GetEmployees').then(function (data) {
      //   ResponsibleEmployeeList = []
      //   for (var i = 0; i < data.body.length; i++) {
      //     ResponsibleEmployeeList.push({Code:data.body[i].Code, Name: data.body[i].Name})
      //   }
      //   this.responsibleEmployees = ResponsibleEmployeeList
      // })

      this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/GetEmployeesInsideProject/' + this.$route.params.ProjectModel.Code).then(function (data) {
      this.options = []
      ResponsibleEmployeeList = []
      debugger
        if (typeof data !== 'undefined') {
          for (var i = 0; i < data.body.length; i++) {
            this.options.push({value:data.body[i].Code, text: data.body[i].Name})
            ResponsibleEmployeeList.push({Code:data.body[i].Code, Name: data.body[i].Name})
          }
          this.responsibleEmployees = ResponsibleEmployeeList
        }
      })
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
