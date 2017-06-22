<template>
<div>
    <component :is="currentView" :show-modal-prop="showModal" :active-model="task" :header="modalHeader" :body-question="modalBodyQuestion" :accept-text="modalAcceptText" :cancel-text="modalCancelText" :domain="'task'" @deleteTask="removeTaskRow(task)" @close="closeModal">
    </component>
    <component :is="optionSelectorView" :show-modal-prop="showEmployeeSelectorModal" :project-employees-list="options" :assigned-employees="selectedEmployees" @close="closeEmployeesSelectorModal" :active-model="task"></component>
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
        <div class="divTableHead normal__cell text-center">Action</div>
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
var Options = []
export default {
  name: 'TaskForm',
  data () {
    return {
      msg: 'Citron',
      counter: 0,
      responsibleEmployees: ResponsibleEmployeeList,
      parentTasks: ParentTaskList,
      options: [],
      task: TaskModel,
      editMode: false,
      taskRows: [],
      currentView: '',
      optionSelectorView: '',
      showModal: false,
      modalHeader: '',
      modalBodyQuestion: '',
      modalAcceptText: '',
      modalCancelText: '',
      showEmployeeSelectorModal: false,
      selectedEmployees: []
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
      var clonedTask = _.clone(TaskModel)
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
      showEmployeesSelector: function (key) {
        debugger
        if (key !== undefined) {
          this.task = key
        }
        this.optionSelectorView = 'EmployeesSelectorModal'
        this.showEmployeeSelectorModal = true
      },
      closeEmployeesSelectorModal: function (key, AssignedEmployees) {
        debugger
        if (key !== undefined) {
          key.AssignedEmployees = AssignedEmployees
          this.AssignedEmployees = AssignedEmployees
        }
        this.showEmployeeSelectorModal = false
      }
  },
  created: function () {
      this.$root.$children[0].active = true
      document.body.className = ''
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
        this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/GetEmployeesInsideProject/' + this.$route.params.ProjectModel.Code).then(function (data) {
          ResponsibleEmployeeList = []
          Options = []
            if (typeof data !== 'undefined') {
              for (var i = 0; i < data.body.length; i++) {
                ResponsibleEmployeeList.push({Code:data.body[i].Code, Name: data.body[i].Name})
                Options.push({value:data.body[i].Code, text: data.body[i].Name})
              }
              this.responsibleEmployees = ResponsibleEmployeeList
              this.options = Options
            }
          })
      })
    },
    props: ['Properties']
}
</script>

<style scoped>

</style>
