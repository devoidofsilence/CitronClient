<template>
  <div>
    <component :is="currentView" :show-modal-prop="showModal" :active-model="AssignStakeHolder" :header="modalHeader" :body-question="modalBodyQuestion" :accept-text="modalAcceptText" :cancel-text="modalCancelText" :domain="'assignstakeholder'" @deleteAssignStakeholder="removeAssignStakeholderRow(AssignStakeHolder)" @close="closeModal">
    </component>
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
                 <div class="divTableHead normal__cell"  style="text-align: center;">Action</div>
              </div>
            </div>
            <AssignStakeholdersFormRow v-for="(assignstakeholderRow, index) in assignStakeholderRows" :key="assignstakeholderRow" :properties="assignstakeholderRow" :row-index="index" :stakeholders="stakeholders"  @remove="deleteDialogOpen(assignstakeholderRow)"></AssignStakeholdersFormRow>
  </div>
  </div>
    </div>
   </div>
   <div class="action__buttons action__buttons--center">
        <button type="submit" value="Submit" class="button button--green" v-on:click="saveAssignStakeholder">Submit</button>
        <button type="button" value="Cancel" class="button button--border--green" v-on:click="closeNav()">Cancel</button>
    </div> 
   </div>
</template> 

<script>
import AssignStakeholderModel from '../models/AssignStakeholderModel'
import _ from 'lodash'
import AssignStakeholdersFormRow from './row_components/AssignStakeholdersFormRow'
import DeleteModal from './modal_components/DeleteModal'
var StakeholdersList = []

export default {
  name: 'AssignStakeHolders',
  data () {
    return {
      msg: 'Citron',
      AssignStakeHolder: AssignStakeholderModel,
      stakeholders: StakeholdersList,
      editMode: false,
      options: [],
      searchText: '', // If value is falsy, reset searchText & searchItem
      items: [],
      lastSelectItem: {},
      assignStakeholderRows: [],
      currentView: '',
      showModal: false,
      modalHeader: '',
      modalBodyQuestion: '',
      modalAcceptText: '',
      modalCancelText: '',
      assignstakeholdersToAdd: [],
      assignstakeholdersToEdit: []
    }
  },
  components: {
    AssignStakeholdersFormRow,
    DeleteModal
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
    this.$root.$children[0].loaderShowHide()
     this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/GetStakeholders').then(function (data) {
       StakeholdersList = []
         for (var i = 0; i < data.body.length; i++) {
                StakeholdersList.push({Code:data.body[i].Code, Name: data.body[i].Name})
              }
              this.stakeholders = StakeholdersList
              this.$root.$children[0].loaderShowHide()
       })
     this.$root.$children[0].loaderShowHide()
    this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/GetAssignedStakeholders').then(function (data) {
        if (typeof data !== 'undefined') {
          for (var i = 0; i < data.body.length; i++) {
            this.assignStakeholderRows.push({AssignStakeholder:data.body[i], Mode: 'Edit'})
          }
          this.$root.$children[0].loaderShowHide()
        }
      })
   },
 methods: {
   deleteDialogOpen: function (assignstakeholderRow) {
      this.showModal = true
      this.currentView = 'DeleteModal'
      this.AssignStakeHolder = assignstakeholderRow
      this.modalHeader = 'Confirm'
      this.modalBodyQuestion = 'Are you sure you want to delete this assignstakeholder?'
      this.modalAcceptText = 'Yes'
      this.modalCancelText = 'No'
    },
    closeModal: function () {
      this.showModal = false
    },
    addAssignStakeholder: function () {
      this.AssignStakeHolder.ProjectCode = this.$route.params.ProjectModel.Code
      var clonedassignstakeholder = _.clone(this.AssignStakeHolder)
      this.assignStakeholderRows.push({AssignStakeholder:clonedassignstakeholder, Mode: 'Add'})
    },
      saveAssignStakeholder: function () {
         // this.$root.$children[0].loaderShowHide()
      this.assignstakeholdersToAdd = _.filter(this.assignStakeholderRows, function (element) {
        return element.Mode === 'Add'
      }).map(function (obj) {
      return obj.AssignStakeholder
    })
      this.assignstakeholdersToEdit = _.filter(this.assignStakeholderRows, function (element) {
        return element.Mode === 'Edit'
      }).map(function (obj) {
      return obj.AssignStakeholder
    })
      this.$root.$children[0].loaderShowHide()
          this.$http.post('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/AssignStakeholders', this.assignstakeholdersToAdd).then(function () {
         this.$http.post('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/UpdateAssignedStakeholders', this.assignstakeholdersToEdit).then(function () {
           this.$router.go('/assignStakeholder-list')
       this.$root.$children[0].loaderShowHide()
       })
      })
    },
    removeAssignStakeholderRow: function (assignstakeholderRow) {
      if (assignstakeholderRow.Mode !== 'Add') {
        this.$http.post('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/DeleteAssignedStakeholder', this.AssignStakeHolder.AssignStakeHolder).then(function (data) {
          this.assignStakeholderRows = this.assignStakeholderRows.filter(function (obj) {
            return obj !== assignstakeholderRow
          })
        })
      } else {
        this.assignStakeholderRows = this.assignStakeholderRows.filter(function (obj) {
            return obj !== assignstakeholderRow
          })
      }
    }
 },
  props: ['Properties']
}
  </script>

  <style scoped>

 </style>
