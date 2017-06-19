<template>
            <div class="divTableBody">
              <div class="divTableRow">
                <div class="divTableCell"><input type="text" class="form-control" placeholder="Stakeholder"  v-model:value="AssignStakeholder.Stakeholder"></div>
                <div class="divTableCell" style="padding:5px;"><star-rating :star-size="20" v-model:value="AssignStakeholder.PowerOnProject"></star-rating></div>
                <div class="divTableCell" style="padding:5px;"><star-rating :star-size="20"></star-rating></div>
                <div class="divTableCell" style="text-align:center; padding-top:8px;">
                 <div class="pure-checkbox">
                            <input id="checkbox1" name="checkbox" type="checkbox" checked="checked" v-model:value="AssignStakeholder.AssignAsKey" :checked="checkedOrNot(AssignStakeholder.AssignAsKey)">
                            <label for="checkbox1">&nbsp;</label>
                        </div>
                </div>
                <div class="divTableCell" style="text-align: center;padding-top:5px;">
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
  props: ['properties']
}
</script>

<style scoped>
</style>
