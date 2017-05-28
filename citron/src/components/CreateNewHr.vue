<template>
  <section class="panels__row">
    <div class="panels__headings">
      <h1>Human Resources</h1>
    </div>
    <!-- Personal details -->
    <div class="panel__box">
      <div class="panel__box__title">Personal details</div>
      <div class="form__hr">
        <form>
          <div class="row">
                <div class="col-xs-12 col-sm-7">
                    <div class="col-xs-12 col-sm-6">
                      <div class="form-group">
                        <label>Employee Id</label>
                        <input type="text" class="form-control" placeholder="Employee id" v-model:value="employee.Code">
                      </div>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                      <div class="form-group">
                        <label>Employee Name</label>
                        <input type="text" class="form-control" placeholder="Employee name" v-model:value="employee.Name">
                      </div>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                      <div class="form-group">
                          <label>Employee Email</label>
                          <input type="email" class="form-control" placeholder="Employee email" v-model:value="employee.EmailId">
                        </div>
                      </div>
                    <div class="col-xs-12 col-sm-6">
                      <div class="form-group">
                        <label>Birthday</label>
                        <input type="text" class="form-control" placeholder="Employee birthday" v-model:value="employee.Birthday">
                      </div>
                      </div>
                    <div class="col-xs-12 col-sm-6">
                      <div class="form-group">
                        <label>Marital status</label>
                        <select id="ddl_MaritalStatus" class="form-control" v-model="employee.MaritalStatus">
                        <option value="">Please select</option>
                          <option v-for="maritalStatus in maritalStatuses" v-bind:value="maritalStatus.Code">{{maritalStatus.Name}}</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                      <div class="form-group">
                        <label>Personality Type</label>
                        <select id="ddl_PersonalityType" class="form-control" v-model="employee.PersonalityType">
                        <option value="">Please select</option>
                          <option v-for="personalityType in personalityTypes" v-bind:value="personalityType.Code">{{personalityType.Name}}</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                      <div class="form-group">
                        <label>Blood Group</label>
                        <select id="ddl_BloodGroup" class="form-control" v-model="employee.BloodGroup">
                        <option value="">Please select</option>
                          <option v-for="bloodGroup in bloodGroups" v-bind:value="bloodGroup.Code">{{bloodGroup.Name}}</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                      <div class="form-group">
                        <label>Citizenship No.</label>
                         <input type="text" class="form-control" placeholder="Citizenship no." v-model:value="employee.CitizenshipNo">
                      </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-5">
                    <div class="upload__profile">
                    	<div class="upload__profile__avatar">
                        <div class="img__aavatar__block">
                          <div class="img__aavatar__box">
                            <div class="img__aavatar">
                            <div v-if="!image">
                              <img src="../assets/images/user__avatar-1.jpg" style="height:128px; width:128px;">
                              <label class="btn btn-default btn-file">
                              Browse <input id="profileImage" type="file" style="display: none;" @change="onFileChange">
                            </label>
                              </div>
                              <div v-else>
                                <img v-bind:src="image" style="height:128px; width:128px;" id="profileImg"/>
                                <button @click="removeImage">Remove image</button>
                              </div>
                            </div>
                            
                          </div>
                        </div>
                        
                      </div>
                    </div>
                </div>
            </div>
        </form>
      </div>
    </div>
    <!-- Contact details -->
    <div class="panel__box">
      <div class="panel__box__title">Contact details</div>
      <div class="form__hr">
        <form>
          <div class="row">
              <div class="col-xs-12">
                <div class="row">
                  <div class="col-xs-12 col-sm-4">
                    <div class="form-group">
                      <label>Local Address</label>
                      <input type="text" class="form-control" placeholder="Local address" v-model:value="employee.LocalAddress">
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-4">
                    <div class="form-group">
                      <label>Phone No.</label>
                      <input type="text" class="form-control" placeholder="Phone no." v-model:value="employee.LocalAddressContactNo">
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-4">
                    <div class="form-group">
                      <label>Mobile No.</label>
                      <input type="text" class="form-control" placeholder="Mobile no." v-model:value="employee.LocalAddressMobileNo">
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div class="row">
              <div class="col-xs-12">
                <div class="row">
                  <div class="col-xs-12 col-sm-4">
                    <div class="form-group">
                      <label>Permanent Address</label>
                      <input type="text" class="form-control" placeholder="Permanent address" v-model:value="employee.PermanentAddress">
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-4">
                    <div class="form-group">
                      <label>Permanent Phone No.</label>
                      <input type="text" class="form-control" placeholder="Phone no." v-model:value="employee.PermanentAddressContactNo">
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-4">
                    <div class="form-group">
                      <label>Permanent Mobile No.</label>
                      <input type="text" class="form-control" placeholder="Mobile no." v-model:value="employee.PermanentAddressMobileNo">
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div class="row">
              <div class="col-xs-12">
                <div class="row">
                  <div class="col-xs-12 col-sm-4">
                    <div class="form-group">
                      <label>Emergency Address</label>
                      <input type="text" class="form-control" placeholder="Emergency address" v-model:value="employee.EmergencyAddress">
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-4">
                    <div class="form-group">
                      <label>Emergency Phone No.</label>
                      <input type="text" class="form-control" placeholder="Phone no." v-model:value="employee.EmergencyAddressContactNo">
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-4">
                    <div class="form-group">
                      <label>Emergency Mobile No.</label>
                      <input type="text" class="form-control" placeholder="Mobile no." v-model:value="employee.EmergencyAddressMobileNo">
                    </div>
                  </div>
                </div>
              </div>
          </div>
         
        </form>
      </div>
    </div>
            <div class="action__buttons action__buttons--center">
                <button type="submit" value="Submit" class="button button--green" v-on:click="saveEmployee">Submit</button>
                <button type="button" value="Cancel" class="button button--red">Cancel</button>
            </div>
  </section>
</template> 

<script>
import employeeModel from '../models/EmployeeModel.js'
var maritalStatusList = []
var bloodGroupList = []
var personalityTypeList = []
export default {
  name: 'CreateNewHr',
  data () {
    return {
      employee: employeeModel,
      maritalStatuses: maritalStatusList,
      bloodGroups: bloodGroupList,
      personalityTypes: personalityTypeList,
      image: ''
    }
  },
  methods: {
    saveEmployee: function () {
      if (typeof this.$route.params.EmployeeEditModel !== 'undefined' && this.$route.params.EmployeeEditModel !== '') {
          this.$http.post('http://devoidofsilence-001-site1.itempurl.com/api/HRModule/UpdateEmployeeDetail', this.employee).then(function () {
          this.$router.push('/employees-list')
        })
      } else {
        this.$http.post('http://devoidofsilence-001-site1.itempurl.com/api/HRModule/RecruitEmployee', this.employee).then(function () {
        this.$router.push('/employees-list')
      })
      }
    },
    onFileChange: function (e) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      this.createImage(files[0])
    },
    createImage (file) {
      var image = new Image()
      var reader = new FileReader()
      var vm = this

      reader.onload = function (e) {
        vm.image = e.target.result
        vm.employee.Photo = e.target.result
      }
      reader.readAsDataURL(file)
    },
    removeImage: function (e) {
      this.image = ''
    }
  },
  created: function () {
      this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/CommonConfiguration/GetMaritalStatuses').then(function (data) {
        for (var i = 0; i < data.body.length; i++) {
          maritalStatusList.push({Code:data.body[i].MaritalStatusCode, Name: data.body[i].MaritalStatusName})
        }
      })

      this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/CommonConfiguration/GetBloodGroups').then(function (data) {
        for (var i = 0; i < data.body.length; i++) {
          bloodGroupList.push({Code:data.body[i].BloodGroupCode, Name: data.body[i].BloodGroupName})
        }
      })

      this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/CommonConfiguration/GetPersonalityTypes').then(function (data) {
        for (var i = 0; i < data.body.length; i++) {
          personalityTypeList.push({Code:data.body[i].PersonalityTypeCode, Name: data.body[i].PersonalityTypeName})
        }
      })

      if (typeof this.$route.params.EmployeeEditModel !== 'undefined' && this.$route.params.EmployeeEditModel !== '') {
        debugger
        this.employee = this.$route.params.EmployeeEditModel
        this.image = this.employee.Photo
      }
    }
}
</script>

<style scoped>
.form__hr{
  width: 100%;
  margin-top: 30px;
}
.upload__profile__avatar{
  text-align: center;
}
.img__aavatar__box{
  max-width: 220px;
  display: inline-block;
}
</style>
