<template>
 <div class="divTableBody">
      <div class="divTableRow">
        <div class="divTableCell">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Code"  v-model:value="Stakeholder.Code">
              </div>
        </div>
        <div class="divTableCell">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Name"  v-model:value="Stakeholder.Name">
              </div>
        </div>
        <div class="divTableCell">
          <div class="form-group">
              <input type="text" class="form-control" placeholder="Email"  v-model:value="Stakeholder.Email">
            </div>
        </div>
        <div class="divTableCell">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Organization"  v-model:value="Stakeholder.Organization">
            </div>
        </div>
        <div class="divTableCell">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Job Position"  v-model:value="Stakeholder.JobPosition">
             </div>
        </div>
        <div class="divTableCell">
             <div class="form-group">
              <input type="text" class="form-control" placeholder="Address" v-model:value="Stakeholder.Address">
             </div>
        </div>
        <div class="divTableCell">
          <div class="form-group">
              <input type="text" class="form-control" placeholder="Phone" v-model:value="Stakeholder.Phone">
           </div>
        </div>
        <div class="divTableCell">
           <div class="form-group">
              <input type="text" class="form-control" placeholder="Mobile" v-model:value="Stakeholder.Mobile">
           </div>
        </div>
        <div class="divTableCell">
          <div class="form-group">
              <input type="text" class="form-control" placeholder="Fax" v-model:value="Stakeholder.Fax">
          </div>
        </div>
         <div class="divTableCell text-center">
            <div class="form-group">
               <button class="button--textIcon" v-on:click="$emit('remove')"><i class="ion-trash-b"></i></button>
            </div>
          </div>
      </div>
    </div>
</template>
<script>
import StakeholderModel from '../../models/StakeholderModel'
import _ from 'lodash'
import { MultiSelect } from 'vue-search-select'
var ParentTaskList = []
var ResponsibleEmployeeList = []
export default {
  name: 'StakeholderFormRow',
  data () {
    return {
    msg: 'Citron',
    Stakeholder: [],
    editMode: false,
    options: [],
    searchText: '', // If value is falsy, reset searchText & searchItem
    items: [],
    lastSelectItem: {},
    deleteId: ''
    // formstate: {},
    // model: {
    //   name: ''
    // }
    }
  },
  components: {
    MultiSelect
  },
  methods: {
      closeNav: function () {
      document.getElementById('CreateStakeholder').style.width = '0'
      document.body.className = ''
    },
      // deselect option
      reset: function () {
        this.items = [] // reset
      }
    },
     created: function () {
      if (typeof this.Properties !== 'undefined' && this.Properties.length !== 0 && this.Properties !== '') {
        this.Stakeholder = this.Properties.Stakeholder
      }
      },
    props: ['Properties']
}
</script>

<style scoped>

</style>
