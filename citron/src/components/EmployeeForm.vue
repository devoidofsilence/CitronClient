<template>
  <div>
    <ModalPopup v-if="showDetailsPopup" @close="showDetailsPopup = false" :placeholder-component="detailsPlaceholderComponent"></ModalPopup>
    <!-- Personal details -->
    <div class="panel__box">
      <div class="panel__box__title"><span>Personal details</span></div>
      <div class="form__hr">
        <form>
          <div class="row">
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
          <div class="row">
                <div class="col-xs-12">
                <div class="upload__and__edit layout__table">
                  <div class="layout__table__row">
                    <div class="upload__profile layout__table__cell">
                    	<div class="upload__profile__avatar">
                        <div class="img__aavatar__block">
                          <div class="img__aavatar__box">
                              <div v-if="!image">
                            <div class="img__aavatar">
                              <img src="../assets/images/user__avatar-1.jpg">
                            </div>
                            <label class="btn btn-default btn-file">
                              Browse <input type="file" style="display: none;" @change="onFileChange">
                            </label>
                              </div>
                              <div v-else>
                            <div class="img__aavatar">
                              <img v-bind:src="image" style="height:128px; width:128px;" id="profileImg"/>
                            </div>
                            <label class="btn btn-default btn-file btn-file-remove">
                              <button class="button-file-remove" @click="removeImage">Remove image</button>
                            </label>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="user__right--part layout__table__cell">
                      <div v-if="editMode">
                        <a href="javascript:void(0)" v-on:click="openJobDetailsPopup" class="button btn-lg btn-block button--border--green text-center">Job Details</a>
                        <a href="javascript:void(0)" v-on:click="openAccountDetailsPopup" class="button btn-lg btn-block button--border--green text-center">Account Details</a>
                      <!--<router-link to="/job-detail" class="button btn-lg btn-block button--border--green text-center">Job details</router-link>
                      <router-link to="/account-details" class="button btn-lg btn-block button--border--green text-center">Account details</router-link>-->
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
      <div class="panel__box__title"><span>Contact details</span></div>
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
    <!-- social links details -->
    <div class="panel__box">
      <div class="panel__box__title"><span>Social links</span></div>
      <div class="form__hr">
        <form>
          <div class="row">
              <div class="col-xs-12">
                <div class="row">
                  <div class="col-xs-12 col-sm-6">
                    <div class="form-group">
                      <label>LinkedIn</label>
                      <input type="text" class="form-control" placeholder="LinkedIn" v-model:value="employee.LinkedInLink">
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-6">
                    <div class="form-group">
                      <label>Google Plus</label>
                      <input type="text" class="form-control" placeholder="Google Plus" v-model:value="employee.GooglePlusLink">
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div class="row">
              <div class="col-xs-12">
                <div class="row">
                  <div class="col-xs-12 col-sm-6">
                    <div class="form-group">
                      <label>Facebook</label>
                      <input type="text" class="form-control" placeholder="Facebook" v-model:value="employee.FacebookLink">
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-6">
                    <div class="form-group">
                      <label>Twitter</label>
                      <input type="text" class="form-control" placeholder="Twitter" v-model:value="employee.TwitterLink">
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
        <button type="button" value="Cancel" class="button button--border--green">Cancel</button>
    </div>
    </div>
</template>

<script>
import employeeModel from '../models/EmployeeModel.js'
import ModalPopup from './ModalPopup'
var maritalStatusList = []
var bloodGroupList = []
var personalityTypeList = []
export default {
  name: 'EmployeeForm',
  data () {
    return {
      employee: employeeModel,
      maritalStatuses: maritalStatusList,
      bloodGroups: bloodGroupList,
      personalityTypes: personalityTypeList,
      image: '',
      editMode: false,
      showDetailsPopup: false,
      detailsPlaceholderComponent: ''
    }
  },
  components: {
    ModalPopup
  },
  methods: {
    saveEmployee: function () {
      if (typeof this.Properties !== 'undefined' && this.Properties !== '') {
          this.$http.post('http://devoidofsilence-001-site1.itempurl.com/api/HRModule/UpdateEmployeeDetail', this.employee).then(function () {
          this.$router.go('/employees-list')
        })
      } else {
        this.$http.post('http://devoidofsilence-001-site1.itempurl.com/api/HRModule/RecruitEmployee', this.employee).then(function () {
        this.$router.go('/employees-list')
      })
      }
    },
    openJobDetailsPopup: function () {
      this.showDetailsPopup = true
      this.detailsPlaceholderComponent = 'JobDetails'
    },
    openAccountDetailsPopup: function () {
      this.showDetailsPopup = true
      this.detailsPlaceholderComponent = 'AccountDetails'
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
      if (typeof this.Properties !== 'undefined' && this.Properties.length !== 0 && this.Properties !== '') {
        this.editMode = true
      }

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

      if (typeof this.Properties !== 'undefined' && this.Properties !== '' && this.Properties.length !== 0) {
        this.employee = this.Properties[0].Employee
        this.image = this.employee.Photo
      }
    },
    props: ['Properties']
}
</script>

<style scoped>
.canvasShow__slidepanel__header{
    background-color: #2ecc71;
    padding: 15px;
}
.canvasShow__slidepanel__header h2{
    font-size: 18px;
    font-weight:500;
    color: #fff;
    margin: 0;
}
.canvasShow__slidepanel__content .panel__box__title{
    position: relative;
    margin-bottom: 20px;
}
.canvasShow__slidepanel__content .panel__box__title span{
    background-color: #fff;
    display: inline-block;
    position: relative;
    padding-right: 6px;
}
.canvasShow__slidepanel__content .panel__box__title:before{
    position:absolute;
    content: '';
    width: 100%;
    height: 1px;
    background-color: #dadada;
    top: 50%;
    margin-top: -1px;
}
.upload__and__edit:before, upload__and__edit:after{
    display: table;
    content: '';
    clear: both;
}
.upload__profile__avatar{
    padding-right: 15px;
}
.user__right--part{
    padding-left: 15px;
}
.upload__profile__avatar .img__aavatar img{
    width: 100%;
}
.upload__profile__avatar .img__aavatar__block .img__aavatar__box .btn-file{
    width: 100%;
    border-radius: 0;
    height: 34px;
}
.canvasShow__slidepanel__content label{
  display: none;
}
.btn-file{
  display: block !important;
}
</style>
