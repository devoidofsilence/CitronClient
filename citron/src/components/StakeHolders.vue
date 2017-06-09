<template>
<div>
    <div class="app__actions__panel app__actions__panelStatus">
          <span class="button button--green">Add stakeholder</span>
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
    <div class="divTableBody">
      <div class="divTableRow">
        <div class="divTableCell">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Name">
          </div>
        </div>
        <div class="divTableCell">
          <div class="form-group">
              <input type="text" class="form-control" placeholder="Email">
            </div>
        </div>
        <div class="divTableCell">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Organization">
            </div>
        </div>
        <div class="divTableCell">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Job title">
             </div>
        </div>
        <div class="divTableCell">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Job Position">
             </div>
        </div>
        <div class="divTableCell">
             <div class="form-group">
              <input type="text" class="form-control" placeholder="Address">
             </div>
        </div>
        <div class="divTableCell">
          <div class="form-group">
              <input type="text" class="form-control" placeholder="Phone">
           </div>
        </div>
        <div class="divTableCell">
           <div class="form-group">
              <input type="text" class="form-control" placeholder="Mobile">
           </div>
        </div>
        <div class="divTableCell">
          <div class="form-group">
              <input type="text" class="form-control" placeholder="Fax">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    <div class="action__buttons action__buttons--center">
        <button type="submit" value="Submit" class="button button--green">Submit</button>
        <button type="button" value="Cancel" class="button button--border--green" v-on:click="closeNav()">Cancel</button>
    </div>
</form>
</div>
</template>

<script>
export default {
  name: 'StakeHolders',
  data () {
    return {
      msg: 'Citron'
    }
  }
}
</script>

<style scoped>

</style>
