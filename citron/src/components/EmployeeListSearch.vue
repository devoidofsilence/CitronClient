<template>
  <div class="panels__row">
    <div class="panel__box">
      <div class="panel__box__title text-center"><span>Search list</span></div>
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
                           <option value="">Please select</option>
                          <option v-for="personalityType in personalityTypes" v-bind:value="personalityType.Code">{{personalityType.Name}}</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                      <div class="form-group">
                        <label>Marital status</label>
                        <select class="form-control">
                           <option value="">Please select</option>
                          <option v-for="maritalStatus in maritalStatuses" v-bind:value="maritalStatus.Code">{{maritalStatus.Name}}</option>
                        </select>
                      </div>
                    </div>                   
                    <div class="col-xs-12 col-sm-6 col-md-4">
                      <div class="form-group">
                        <label>Blood group</label>
                        <select class="form-control">
                           <option value="">Please select</option>
                          <option v-for="bloodGroup in bloodGroups" v-bind:value="bloodGroup.Code">{{bloodGroup.Name}}</option>
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
var personalityTypeList = []
var bloodGroupList = []
var maritalStatusList = []
export default {
  name: 'EmployeeListSearch',
  data () {
    return {
      bloodGroups: bloodGroupList,
      maritalStatuses: maritalStatusList,
      personalityTypes: personalityTypeList
    }
  },
  created: function () {
     this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/CommonConfiguration/GetBloodGroups').then(function (data) {
        bloodGroupList = []
        for (var i = 0; i < data.body.length; i++) {
          bloodGroupList.push({Code:data.body[i].BloodGroupCode, Name: data.body[i].BloodGroupName})
        }
        this.bloodGroups = bloodGroupList
      })

   this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/CommonConfiguration/GetPersonalityTypes').then(function (data) {
        personalityTypeList = []
        for (var i = 0; i < data.body.length; i++) {
          personalityTypeList.push({Code:data.body[i].PersonalityTypeCode, Name: data.body[i].PersonalityTypeName})
        }
        this.personalityTypes = personalityTypeList
      })
       this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/CommonConfiguration/GetMaritalStatuses').then(function (data) {
        maritalStatusList = []
        for (var i = 0; i < data.body.length; i++) {
          maritalStatusList.push({Code:data.body[i].MaritalStatusCode, Name: data.body[i].MaritalStatusName})
        }
        this.maritalStatuses = maritalStatusList
      })
       if (typeof this.Properties !== 'undefined' && this.Properties !== '' && this.Properties.length !== 0) {
           this.employee.BloodGroupCode = this.employee.BloodGroupCode == null ? '' : this.employee.BloodGroupCode
          this.employee.PersonalityTypeCode = this.employee.PersonalityTypeCode == null ? '' : this.employee.PersonalityTypeCode
           this.employee.MaritalStatusCode = this.employee.MaritalStatusCode == null ? '' : this.employee.MaritalStatusCode
       }
  },
  props: ['Properties']
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
