<template>
  <div>
    <div class="app__actions__panel app__actions__panelStatus">
          <span class="button button--green">Add key stakeholder</span>
    </div>
    <div class="section__panel">
      <div class="section__panel__body">
        <div class="divTable__wrapper">
          <div class="divTable">
            <div class="divTableHeading">
              <div class="divTableRow">
                <div class="divTableHead">Stakeholders</div>
                <div class="divTableHead">Power</div>
                <div class="divTableHead">Interest</div>
                <div class="divTableHead">Assign as Key</div>
              </div>
            </div>
            <div class="divTableBody">
              <div class="divTableRow">
                <div class="divTableCell">Sharonkrishh</div>
                <div class="divTableCell"><StarRating></StarRating></div>
                <div class="divTableCell">asf asdf </div>
                <div class="divTableCell">asf asdf </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
import StarRating from 'vue-star-rating'
export default {
  name: 'AddKeyStakeholder',
  data () {
    return {
      msg: 'Citron',
      rating: 'No Rating Selected',
      currentRating: 'No Rating',
      currentSelectedRating: 'No Current Rating',
      boundRating: 3
    }
  },
  components: {
    StarRating
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
