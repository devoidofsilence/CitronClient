<template>
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
              <select id="ddl_ParentTask" class="form-control" v-model="task.ParentTaskCode">
                <option value="">Please Select</option>
                <option v-for="parentTask in ParentTasks" v-bind:value="parentTask.Code">{{parentTask.Name}}</option>
              </select>
             </div>
        </div>
        <div class="divTableCell">
             <div class="form-group">
              <select id="ddl_ResponsibleEmployee" class="form-control" v-model="task.ResponsibleEmployeeCode">
                <option value="">Please Select</option>
                  <option v-for="responsibleEmployee in ResponsibleEmployees" v-bind:value="responsibleEmployee.Code">{{responsibleEmployee.Name}}</option>
              </select>
             </div>
        </div>
        <div class="divTableCell">
          <div class="form-group">
              <button class="form-control" v-on:click="$emit('showEmployeesSelector', task)">{{task.AssignedEmployees === null ? "0" : task.AssignedEmployees.length}} selected</button>
           </div>
        </div>
        <div class="divTableCell">
           <div class="form-group">
              <input type="text" class="form-control" placeholder="Optimistic time" v-model:value="task.OptimisticTime">
           </div>
        </div>
        <div class="divTableCell">
          <div class="form-group">
                <input type="text" class="form-control" placeholder="Pessimistic time" v-model:value="task.PessimisticTime">
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
          <div class="divTableCell text-center">
            <div class="form-group">
              <button class="button--textIcon" v-on:click="$emit('remove')"><i class="ion-trash-b"></i></button>
            </div>
          </div>
        </div>
  </template>

<script>
import _ from 'lodash'
export default {
  name: 'TaskFormRow',
  data () {
    return {
      msg: 'Citron',
      responsibleEmployees: [],
      parentTasks: [],
      task: [],
      editMode: false,
      deleteId: '',
      selectedEmployeeNoLabel: ''
    }
  },
  created: function () {
    this.responsibleEmployees = this.ResponsibleEmployees
    this.parentTasks = this.ParentTasks
      if (typeof this.Properties !== 'undefined' && this.Properties !== '') {
        this.task = this.Properties.Task
      }
    },
    props: ['Properties', 'ResponsibleEmployees', 'ParentTasks']
}
</script>

<style scoped>

</style>
