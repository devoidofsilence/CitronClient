<template>
  <div>
    <div class="app__actions__panel app__actions__panelStatus">
          <span class="button button--green">Add stakeholder</span>
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
              </div>
            </div>
            <div class="divTableBody">
              <div class="divTableRow">
                <div class="divTableCell">Sharonkrishh</div>
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
        </div>
      </div>
    </div>
  </div>
</template> 

<script>

export default {
  name: 'ManageStakeholders',
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
