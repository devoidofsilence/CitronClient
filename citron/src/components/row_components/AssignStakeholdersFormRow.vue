<template>
            <div class="divTableBody">
              <div class="divTableRow">
                <div class="divTableCell">
              <select id="ddl_Stakeholder" class="form-control" v-model="AssignStakeholder.StakeholderCode">
                <option value="">Please Select</option>
                <option v-for="Stakeholder in Stakeholders" v-bind:value="Stakeholder.Code">{{Stakeholder.Name}}</option>
              </select>
              </div>
                <div class="divTableCell" style="padding:5px;"><star-rating :star-size="20" v-model:value="AssignStakeholder.PowerOnProject"></star-rating></div>
                <div class="divTableCell" style="padding:5px;"><star-rating :star-size="20"  v-model:value="AssignStakeholder.InterestOnProject"></star-rating></div>
                <div class="divTableCell" style="text-align:center; padding-top:8px;">
                 <div class="pure-checkbox">
                            <input :id="'AssignAsKey' + RowIndex" name="checkbox" type="checkbox" v-model:value="AssignStakeholder.AssignAsKey" :checked="checkedOrNot(AssignStakeholder.AssignAsKey)">
                            <label :for="'AssignAsKey' + RowIndex">&nbsp;</label>
                        </div>
                </div>
                <div class="divTableCell text-center" style="padding-top:5px;">
            <div class="form-group">
               <button class="button--textIcon" v-on:click="$emit('remove')">
                 <i class="ion-trash-b"></i>
               </button>
            </div>
          </div>
              </div>
            </div>
</template> 
<script>
import AssignStakeholderModel from '../../models/AssignStakeholderModel'
export default {
  name: 'AssignStakeholders',
  data () {
    return {
      msg: 'Citron',
      AssignStakeholder: [],
      rating: 'No Rating Selected',
      currentRating: 'No Rating',
      currentSelectedRating: 'No Current Rating',
      boundRating: 3
    }
  },
  methods: {
    checkedOrNot: function (dept) {
      // if (this.checkedDepartments.includes(dept)) {
      //   return 'checked'
      // } else {
      //   return ''
      // }
    },
    setRating: function (rating) {
      this.rating = 'You have Selected: ' + rating + 'stars'
    },
    showCurrentRating: function (rating) {
      this.currentRating = (rating === 0) ? this.currentSelectedRating : 'Click to select ' + rating + ' stars'
    },
    setCurrentSelectedRating: function (rating) {
      this.currentSelectedRating = 'You have Selected: ' + rating + ' stars'
    }
  },
  created: function () {
      if (typeof this.Properties !== 'undefined' && this.Properties.length !== 0 && this.Properties !== '') {
        this.AssignStakeholder = this.Properties.AssignStakeholder
        // if (this.Properties[0].Mode === 'Edit') {
        //   this.editMode = true
        // } else {
        //   this.editMode = false
        // }
      }
  },
  props: ['Properties', 'RowIndex', 'Stakeholders']
}
</script>

<style scoped>
</style>
