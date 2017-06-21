<template>
    <div v-if="showModalProp">
    <transition name="modal">
    <div class="modal-mask overlayModal">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal__close">
            <slot name="close">
              <button class="modal-default-button button button--green" @click="closeModal">Close</button>
            </slot>
          </div>
          <div class="modal-header">
            <slot name="header">
              <h1>Assign Employees</h1>
            </slot>
          </div>
          <div class="modal-body">
            <div class="form-group multiSelect__selector">
                <multi-select :options="options" :selected-options="items" placeholder="Select Employees" @select="onSelect"></multi-select>
            </div>
            <!--<slot name="body">
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
            </slot>-->
          </div>
          <div class="modal-footer">
            <div class="action__buttons action__buttons--center">
            <slot name="footer">
              <!--default footer-->
              <button class=" button button--green" @click="acceptClick">
                Assign
              </button>
            </slot>
            </div>
          </div>
        </div>
      </div>
    </div>
    </transition>
    </div>
</template>

<script>
  import { MultiSelect } from 'vue-search-select'
  import _ from 'lodash'
export default {
  name: 'DeleteModal',
  data () {
    return {
        showModalValue: true,
        employeesList: [],
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
      },
      acceptClick: function () {
          // this.$http.post('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/DeleteProjectDetail', this.activeProject).then(function (data) {
          //   if (typeof data !== undefined) {
          //     this.$emit('close')
          //     this.$router.go('/project-list')
          //   }
          // })
          this.items.length
          this.$emit('close')
      },
      closeModal: function () {
        this.reset()
        this.$emit('close')
      }
  },
  created: function () {
    debugger
    // if (typeof this.Properties !== 'undefined' && this.Properties !== '' && this.Properties.length !== 0) {
    //             this.editMode = true
    //             this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/GetProjectDetail/' + this.Properties[0].Project.Code)
    //             .then(function (data) {
    //               this.project = data.body
    //               this.items = []
    //               var pushedItems = []
    //               var o = this.options
    //               var p = this.project.AssignedEmployees
    //               _.each(p, function (code) {
    //                 var y = (_.filter(o, function (op) {
    //                     return op.value === code
    //                 }))
    //                 pushedItems.push(y[0])
    //               })
    //               this.items = pushedItems
    //               })
    //         }
      this.options = this.projectEmployeesList
  },
  props: ['showModalProp', 'projectEmployeesList']
}
</script>

<style scoped>
</style>
