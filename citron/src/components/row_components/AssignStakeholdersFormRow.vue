<template>
  <div>
            <div class="divTableBody">
              <div class="divTableRow">
                <input type="text" class="form-control" placeholder="Stakeholder"  v-model:value="AssignStakeholder.Stakeholder">
                <div class="divTableCell"><star-rating  v-model:value="AssignStakeholder.PowerOnProject"></star-rating></div>
                <div class="divTableCell"><star-rating :star-size="20"></star-rating></div>
                <div class="divTableCell" style="text-align:center;">
                 <div class="pure-checkbox">
                             <input type="checkbox"  v-model:value="AssignStakeholder.AssignAsKey" :checked="checkedOrNot(AssignStakeholder.AssignAsKey)">
                        </div>
                </div>
                 <div class="divTableCell">
            <div class="form-group">
               <button class="form-control" v-on:click="$emit('remove')">Delete</button>
            </div>
          </div>
              </div>
              <div class="divTableRow">
                <div class="divTableCell">Sauravraj Bansali</div>
                <div class="divTableCell"><star-rating :star-size="20"></star-rating></div>
                <div class="divTableCell"><star-rating :star-size="20"></star-rating></div>
                <div class="divTableCell" style="text-align:center;">
                 <div class="pure-checkbox">
                            <input id="checkbox1" name="checkbox" type="checkbox" checked="checked">
                            <label for="checkbox1">&nbsp;</label>
                        </div>
                </div>
              </div>
              <div class="divTableRow">
                <div class="divTableCell">Romanraj Romania</div>
                <div class="divTableCell"><star-rating :star-size="20"></star-rating></div>
                <div class="divTableCell"><star-rating :star-size="20"></star-rating></div>
                <div class="divTableCell" style="text-align:center;">
                 <div class="pure-checkbox">
                            <input id="checkbox1" name="checkbox" type="checkbox" checked="checked">
                            <label for="checkbox1">&nbsp;</label>
                        </div>
                </div>
              </div>
              <div class="divTableRow">
                <div class="divTableCell">Asmita Biratnagar</div>
                <div class="divTableCell"><star-rating :star-size="20"></star-rating></div>
                <div class="divTableCell"><star-rating :star-size="20"></star-rating></div>
                <div class="divTableCell" style="text-align:center;">
                 <div class="pure-checkbox">
                            <input id="checkbox1" name="checkbox" type="checkbox" checked="checked">
                            <label for="checkbox1">&nbsp;</label>
                        </div>
                </div>
              </div>
            </div>
          </div>
</template> 
<script>

export default {
  name: 'AssignStakeholders',
  data () {
    return {
      msg: 'Citron',
      rating: 'No Rating Selected',
      currentRating: 'No Rating',
      currentSelectedRating: 'No Current Rating',
      boundRating: 3
    }
  },
  methods: {
    setRating: function (rating) {
      this.rating = 'You have Selected: ' + rating + 'stars'
    },
    showCurrentRating: function (rating) {
      this.currentRating = (rating === 0) ? this.currentSelectedRating : 'Click to select ' + rating + ' stars'
    },
    setCurrentSelectedRating: function (rating) {
      this.currentSelectedRating = 'You have Selected: ' + rating + ' stars'
    }
  }
}
</script>

<style scoped>
</style>
