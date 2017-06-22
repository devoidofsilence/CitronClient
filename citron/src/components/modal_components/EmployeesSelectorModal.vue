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
        lastSelectItem: {},
        AssignedEmployees: []
    }
  },
  components: {
    MultiSelect
  },
  methods: {
    onSelect: function (items, lastSelectItem) {
      this.AssignedEmployees = []
        this.items = items
        for (var i = 0; i < items.length; i++) {
          this.AssignedEmployees.push(items[i].value)
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
          this.reset()
          this.$emit('close', this.activeModel, this.AssignedEmployees)
      },
      closeModal: function () {
        this.reset()
        this.$emit('close')
      },
      reCalculateData: function () {
        if (typeof this.activeModel !== undefined && this.activeModel !== 'undefined') {
          this.items = []
          var pushedItems = []
          var o = this.projectEmployeesList
          var p = this.activeModel.AssignedEmployees
          _.each(p, function (code) {
            var y = (_.filter(o, function (op) {
                return op.value === code
            }))
            pushedItems.push(y[0])
          })
          this.items = pushedItems
        }
      }
  },
  created: function () {
    this.options = this.projectEmployeesList
  },
  watch: {
    showModalProp: function (newVal, oldVal) {
      if (newVal) {
        this.reCalculateData()
      }
    }
  },
  props: ['showModalProp', 'projectEmployeesList', 'activeModel']
}
</script>

<style scoped>
</style>
