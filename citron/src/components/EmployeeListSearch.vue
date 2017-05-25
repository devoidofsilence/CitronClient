<template>
  <div class="panels__row">
    <div class="panel__box">
      <div class="panel__box__title"><span>Search list</span></div>
            <div class="form__hr form__elemets2">
        <form>
          <div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-4">
                      <div class="form-group">
                        <label>Employee Id</label>
                        <input type="text" class="form-control" placeholder="Employee id">
                      </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                      <div class="form-group">
                        <label>Employee Name</label>
                        <input type="text" class="form-control" placeholder="Employee name">
                      </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div class="form-group">
                          <label>Designation</label>
                          <input type="email" class="form-control" placeholder="Designation">
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                      <div class="form-group">
                        <label>Employeed from</label>
                        <input type="text" class="form-control" placeholder="Employeed from">
                      </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                      <div class="form-group">
                        <label>Employeed till</label>
                        <input type="text" class="form-control" placeholder="Employeed till">
                      </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                      <div class="form-group">
                        <label>Citizenship no.</label>
                        <input type="text" class="form-control" placeholder="Citizenship no.">
                      </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                      <div class="form-group">
                        <label>Personality Type</label>
                        <select class="form-control">
                          <option checked>Personality type</option>
                          <option>Standard</option>
                          <option>Advanced</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                      <div class="form-group">
                        <label>Marital status</label>
                        <select class="form-control">
                          <option checked>Marital status</option>
                          <option>Single</option>
                          <option>Married</option>
                        </select>
                      </div>
                    </div>                   
                    <div class="col-xs-12 col-sm-6 col-md-4">
                      <div class="form-group">
                        <label>Blood group</label>
                        <select class="form-control">
                          <option checked>Blood group</option>
                          <option>Ab+</option>
                          <option>Ab-</option>
                          <option>A</option>
                          <option>B</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                      <div class="form-group">
                        <label>Local address</label>
                        <input type="text" class="form-control" placeholder="Local address">
                      </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                      <div class="form-group">
                        <label>Permanent address</label>
                        <input type="text" class="form-control" placeholder="Permanent address">
                      </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <div class="form-group">
                          <label>Emergency address</label>
                          <input type="email" class="form-control" placeholder="Emergency address">
                        </div>
                    </div>
          </div>
          <div class="action__buttons action__buttons--center">
            <button type="submit" value="Submit" class="button button--green">Searach employees</button>
            <button type="button" value="Cancel" class="button button--border--green">Clear</button>
          </div>
        </form>
            </div>
      </div>
  </div>
</template> 

<script>
export default {
  name: 'EmployeeListSearch',
  data () {
    return {}
  }
}
</script>

<style scoped>
.taskNull__content{
  text-align: center;
  width: 100%;
height: 100%;
}
.taskNull__content p{
  font-size: 26px;
  font-weight: 300;
}
</style>
