<template>
<div>
    <div class="app__actions__panel app__actions__panelStatus">
          <span class="button button--green"  v-on:click="addStakeholder">Add stakeholder</span>
    </div>
  <div class="divTable__wrapper pr__spreedsheet task__spreedsheet">
  <div class="divTable">
    <div class="divTableHeading">
      <div class="divTableRow">
        <div class="divTableHead long__cell">Name</div>
        <div class="divTableHead long__cell">Email</div>
        <div class="divTableHead long__cell">Organization</div>
        <div class="divTableHead normal__cell">Job Title</div>
        <div class="divTableHead normal__cell">Job position</div>
        <div class="divTableHead normal__cell">Address</div>
        <div class="divTableHead normal__cell">Phone</div>
        <div class="divTableHead normal__cell">Mobile</div>
        <div class="divTableHead normal__cell">Fax</div>
      </div>
      </div>
          <StakeholderFormRow v-for="stakeholderRow in StakeholderRows" :properties="stakeholderRow"></StakeholderFormRow>
    </div>
     </div>
    <div class="action__buttons action__buttons--center">
        <button type="submit" value="Submit" class="button button--green" v-on:click="saveStakeholder">Submit</button>
        <button type="button" value="Cancel" class="button button--border--green" v-on:click="closeNav()">Cancel</button>
    </div>
</form>
</div>
</template>

<script>
import StakeholderModel from '../models/StakeholderModel'
import _ from 'lodash'
import StakeholderFormRow from './row_components/StakeholderFormRow'

export default {
  name: 'StakeHolders',
  data () {
    return {
      msg: 'Citron',
      StakeHolders: StakeholderModel,
      editMode: false,
      options: [],
      searchText: '', // If value is falsy, reset searchText & searchItem
      items: [],
      lastSelectItem: {},
      StakeholderRows: []
    }
  },
  components: {
    StakeholderFormRow
},
 methods: {
    addStakeholder: function () {
      var clonedstakeholder = _.clone(this.StakeHolders)
      this.StakeholderRows.push({Stakeholders:clonedstakeholder, Mode: 'Add'})
    },
    savestakeholder: function () {
      console.log(this.stakeholderRows)
    },
      saveStakeholder: function () {
        debugger
      this.$root.$children[0].loaderShowHide()
      if (this.editMode === true) {
          this.$http.post('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/UpdateStakeholderDetail', this.Stakeholder).then(function () {
          this.$router.go('/stakeholder-list')
         // this.$root.$children[0].loaderShowHide()
        })
      } else {
        this.$root.$children[0].loaderShowHide()
        this.$http.post('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/AddStakeholder', this.Stakeholder).then(function () {
        this.$router.go('/stakeholder-list')
       // this.$root.$children[0].loaderShowHide()
      })
      }
    },
     created: function () {
     this.$root.$children[0].loaderShowHide()
    this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/GetStakeholder').then(function (data) {
        if (typeof data !== 'undefined') {
          this.taskList = data.body
          this.$root.$children[0].loaderShowHide()
        }
      })
   }
 }
}
</script>

<style scoped>

</style>
