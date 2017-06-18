<template>
  <div>
    <div class="app__actions__panel app__actions__panelStatus">
          <span class="button button--green"  v-on:click="addAssignStakeholder">Add Addstakeholder</span>
    </div>
    <div class="section__panel">
      <div class="section__panel__body">
        <div class="divTable__wrapper borderedTable zebraStripped">
          <div class="divTable">
            <div class="divTableHeading">
              <div class="divTableRow">
                <div class="divTableHead">Stakeholders</div>
                <div class="divTableHead xlong__cell">Power on project</div>
                <div class="divTableHead xlong__cell">Interest on project</div>
                <div class="divTableHead normal__cell">Assign as Key</div>
                 <div class="divTableHead normal__cell">Action</div>
              </div>
            </div>
            <AssignStakeholderFormRow v-for="AssignstakeholderRow in AssignStakeholderRows" :key="assignstakeholderRow" :properties="assignstakeholderRow"  @remove="removeAssignStakeholderRow(assignstakeholderRow)"></AssignStakeholderFormRow>
  </div>
  </div>
   <div class="action__buttons action__buttons--center">
        <button type="submit" value="Submit" class="button button--green" v-on:click="saveAssignStakeholder">Submit</button>
        <button type="button" value="Cancel" class="button button--border--green" v-on:click="closeNav()">Cancel</button>
    </div>
    </div>
   </div> 
   </div>
</template> 

<script>
import AssignStakeholderModel from '../models/AssignStakeholderModel'
import _ from 'lodash'
import AssignStakeholdersFormRow from './row_components/AssignStakeholdersFormRow'

export default {
  name: 'AssignStakeHolders',
  data () {
    return {
      msg: 'Citron',
      StakeHolders:AssignStakeholderModel,
      editMode: false,
      options: [],
      searchText: '', // If value is falsy, reset searchText & searchItem
      items: [],
      lastSelectItem: {},
      AssignStakeholderRows: []
    }
  },
  components: {
    AssignStakeholdersFormRow
},
 methods: {
    addAssignStakeholder: function () {
      var clonedassignstakeholder = _.clone(this.AssignStakeHolders)
      this.AssignStakeholderRows.push({AssignStakeholders:clonedassignstakeholder, Mode: 'Add'})
    },
      saveAssignStakeholder: function () {
        debugger
      this.$root.$children[0].loaderShowHide()
      // if (this.editMode === true) {
      //     this.$http.post('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/UpdateStakeholderDetail', this.Stakeholder).then(function () {
      //     this.$router.go('/stakeholder-list')
      //    // this.$root.$children[0].loaderShowHide()
      //   })
      // } else {
        this.$root.$children[0].loaderShowHide()
        this.$http.post('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/AddAssignStakeholder', this.StakeholderRows).then(function () {
        this.$router.go('/Assignstakeholder-list')
       // this.$root.$children[0].loaderShowHide()
      })
      // }
    },
    removeAssignStakeholderRow: function (assignstakeholderRow) {
      this.AssignStakeholderRows = this.AssignStakeholderRows.filter(function (obj) {
        return obj !== assignstakeholderRow
      })
    },
     created: function () {
       debugger
     this.$root.$children[0].loaderShowHide()
    this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/GetStakeholder').then(function (data) {
        if (typeof data !== 'undefined') {
          this.taskList = data.body
          this.$root.$children[0].loaderShowHide()
        }
      })
   }
 },
 props: ['Properties']
}
</script>

<style scoped>

</style>
