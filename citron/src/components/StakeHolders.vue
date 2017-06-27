<template>
<div>
    <component :is="currentView" :show-modal-prop="showModal" :active-model="StakeHolder" :header="modalHeader" :body-question="modalBodyQuestion" :accept-text="modalAcceptText" :cancel-text="modalCancelText" :domain="'stakeholder'" @deleteStakeholder="removeStakeholderRow(StakeHolder)" @close="closeModal">
    </component>
    <div class="app__actions__panel app__actions__panelStatus">
          <span class="button button--green"  v-on:click="addStakeholder">Add stakeholder</span>
    </div>
  <div class="divTable__wrapper pr__spreedsheet task__spreedsheet">
  <div class="divTable">
    <div class="divTableHeading">
      <div class="divTableRow">
        <div class="divTableHead long__cell">Code</div>
        <div class="divTableHead long__cell">Name</div>
        <div class="divTableHead long__cell">Email</div>
        <div class="divTableHead long__cell">Organization</div>
        <div class="divTableHead normal__cell">Job position</div>
        <div class="divTableHead normal__cell">Address</div>
        <div class="divTableHead normal__cell">Phone</div>
        <div class="divTableHead normal__cell">Mobile</div>
        <div class="divTableHead normal__cell">Fax</div>
        <div class="divTableHead normal__cell text-center">Action</div>
      </div>
      </div>
          <StakeholderFormRow v-for="stakeholderRow in StakeholderRows" :key="stakeholderRow" :properties="stakeholderRow" @remove="deleteDialogOpen(stakeholderRow)"></StakeholderFormRow>
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
import DeleteModal from './modal_components/DeleteModal'

export default {
  name: 'StakeHolders',
  data () {
    return {
      msg: 'Citron',
      StakeHolder: StakeholderModel,
      StakeholderRows: [],
      currentView: '',
      showModal: false,
      modalHeader: '',
      modalBodyQuestion: '',
      modalAcceptText: '',
      modalCancelText: '',
      stakeholdersToAdd: [],
      stakeholdersToEdit: []
    }
  },
  components: {
    StakeholderFormRow,
    DeleteModal
},
 methods: {
   deleteDialogOpen: function (stakeholderRow) {
      this.showModal = true
      this.currentView = 'DeleteModal'
      this.StakeHolder = stakeholderRow
      this.modalHeader = 'Confirm'
      this.modalBodyQuestion = 'Are you sure you want to delete this stakeholder?'
      this.modalAcceptText = 'Yes'
      this.modalCancelText = 'No'
    },
    closeModal: function () {
      this.showModal = false
    },
    addStakeholder: function () {
      var clonedstakeholder = _.clone(this.StakeHolder)
      this.StakeholderRows.push({Stakeholder:clonedstakeholder, Mode: 'Add'})
    },
    saveStakeholder: function () {
      console.log(this.StakeholderRows)
    // this.$root.$children[0].loaderShowHide()
    this.stakeholdersToAdd = this.StakeholderRows.filter(function (element) {
      return element.Mode === 'Add'
    }).map(function (obj) {
      return obj.Stakeholder
    })
    this.stakeholdersToEdit = this.StakeholderRows.filter(function (element) {
      return element.Mode === 'Edit'
    }).map(function (obj) {
      return obj.Stakeholder
    })
        this.$root.$children[0].loaderShowHide()
        this.$http.post('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/AddStakeholder', this.stakeholdersToAdd).then(function () {
          this.$http.post('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/UpdateStakeholder', this.stakeholdersToEdit).then(function () {
          this.$router.go('/stakeholder-list')
        this.$root.$children[0].loaderShowHide()
        })
      })
    },
     closeNav: function () {
      document.getElementById('CreateStakeholder').style.width = '0'
      document.body.className = ''
    },
    removeStakeholderRow: function (stakeholderRow) {
      if (this.StakeHolder.Mode !== 'Add') {
        this.$http.post('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/DeleteStakeholder', this.StakeHolder.Stakeholder).then(function (data) {
          this.StakeholderRows = this.StakeholderRows.filter(function (obj) {
            return obj !== stakeholderRow
          })
       })
      } else {
          this.StakeholderRows = this.StakeholderRows.filter(function (obj) {
            return obj !== stakeholderRow
          })
      }
    }
 },
 created: function () {
   this.$root.$children[0].active = false
   if (typeof this.$route.params.ProjectModel !== undefined && this.$route.params.ProjectModel !== 0 && this.$route.params.ProjectModel !== '' && this.$route.params.ProjectModel !== 'undefined') {
        this.$root.$children[0].$children[0].ProjectName = ''
      }
   document.body.className = 'bodyFull'
     this.$root.$children[0].loaderShowHide()
    this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/GetStakeholders').then(function (data) {
        if (typeof data !== 'undefined') {
          for (var i = 0; i < data.body.length; i++) {
            this.StakeholderRows.push({Stakeholder:data.body[i], Mode: 'Edit'})
          }
          this.$root.$children[0].loaderShowHide()
        }
      })
   },
 props: ['Properties']
}
</script>

<style scoped>

</style>
