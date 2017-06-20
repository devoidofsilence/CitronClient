<template>
    <div v-if="showModalProp">
    <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <h4>Select Employees</h4>
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              <table width="100%">
                <thead>
                    <th>Code</th>
                    <th>Name</th>
                </thead>
                <tbody>
                    <tr v-for="employee in employeesList">
                        <td>{{employee.Code}}</td>
                        <td>{{employee.Name}}</td>
                    </tr>
                </tbody>
              </table>
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <!--default footer-->
              <button class="modal-default-button button button--green" @click="acceptClick">
                Ok
              </button>
              <button class="modal-default-button button button--border--green" @click="$emit('close')">
                Cancel
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
    </transition>
    </div>
</template>

<script>
export default {
  name: 'DeleteModal',
  data () {
    return {
        showModalValue: true,
        employeesList: []
    }
  },
  methods: {
      acceptClick: function () {
          // this.$http.post('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/DeleteProjectDetail', this.activeProject).then(function (data) {
          //   if (typeof data !== undefined) {
          //     this.$emit('close')
          //     this.$router.go('/project-list')
          //   }
          // })
      }
  },
  created: function () {
      debugger
      this.employeesList = this.projectEmployeesList
  },
  props: ['showModalProp', 'projectEmployeesList']
}
</script>

<style scoped>
</style>
