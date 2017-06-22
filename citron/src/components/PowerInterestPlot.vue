<template>
      <div class="divTableRow">
        This is power interest graph page
        </div>
  </template>

<script>
import _ from 'lodash'
export default {
  name: 'PowerInterestPlot',
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
  methods: {
    saveTask: function () {
      this.$root.$children[0].loaderShowHide()
      if (this.editMode === true) {
          this.$http.post('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/UpdateProjectTaskDetail', this.task).then(function () {
          this.$router.go('/task-list')
        })
      } else {
        this.$root.$children[0].loaderShowHide()
        this.$http.post('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/AddProjectTask', this.task).then(function () {
        this.$router.go('/task-list')
      })
      }
    },
      closeNav: function () {
      document.getElementById('CreateProject').style.width = '0'
      document.body.className = ''
    }
  },
  created: function () {
    this.responsibleEmployees = this.ResponsibleEmployees
    this.parentTasks = this.ParentTasks
      if (typeof this.Properties !== 'undefined' && this.Properties.length !== 0 && this.Properties !== '') {
        this.task = this.Properties.Task
        this.deleteId = this.Properties.Id
        if (this.Properties.Mode === 'Edit') {
          this.editMode = true
        } else {
          this.editMode = false
        }
      }
    },
    props: ['Properties', 'ResponsibleEmployees', 'ParentTasks']
}
</script>

<style scoped>

</style>
