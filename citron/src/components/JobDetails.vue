<template>
</div>
<form @submit.prevent="validateBeforeSubmit">
  <div class="modal-header">
            <slot name="header">
              <h2 class="titleHeading--big">Employee Job Detail</h2>
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              <!-- Job details -->
              <div class="panel__box">
                <div class="form__hr">
                    <div class="row">
                      <div class="col-xs-12 col-sm-6">
                        <div class="form-group">
                          <label>Employee Id</label>
                <p class="control has-icon has-icon-right">
                  <input name="employee id" class="form-control" v-model:value="employee.Code" v-validate="'required|alpha_num'" :class="{'input': true, 'is-danger': errors.has('employee id') }" type="text" placeholder="Employee ID">
                  <i v-show="errors.has('employee id')" class="fa fa-warning"></i>
                  <span v-show="errors.has('employee id')" class="help is-danger">{{ errors.first('employee id') }}</span>
                  </p>
                      </div>
                      <div class="col-xs-12 col-sm-6">
                        <div class="form-group">
                         <label>Employee Name</label>
                <p class="control has-icon has-icon-right">
                  <input name="employee name" class="form-control" v-model:value="employee.Name" v-validate="'required|alpha_spaces'" :class="{'input': true, 'is-danger': errors.has('employee name') }" type="text" placeholder="Employee Name">
                  <i v-show="errors.has('employee name')" class="fa fa-warning"></i>
                  <span v-show="errors.has('employee name')" class="help is-danger">{{ errors.first('employee name') }}</span>
                  </p>
                        </div>
                      </div>
                      <div class="col-xs-12">
                        <div class="form-group">
                          <div class="panel__box__title"><span>Job department</span></div>
                          <div class="row">
                            <div class="container-fluid">
                              <ul class="checkBoxList__wrapper list__inlineElement jobDepartment__list">
                                <li v-for="(department, index) in departments">
                                  <div class="pure-checkbox">
                                    <input type="checkbox" :id="'ddlDepartment'+index" :value="department.Code" v-model="checkedDepartments" :checked="checkedOrNot(department.Code)">
                                    <label :for="'ddlDepartment'+index">{{department.Name}}</label>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xs-12">
                        <div class="upload__and__edit row">
                          <div class="upload__profile col-xs-12 col-md-8">
                            <div class="form-group">
                              <div class="panel__box__title"><span>Job designation</span></div>
                              <div class="row">
                                <div class="col-xs-12 col-md-7">
                                  <select class="form-control" v-model="employee.JobDesignationCode">
                                    <option value="">Please select</option>
                                    <option v-for="designation in designations" v-bind:value="designation.Code">{{designation.Name}}</option>
                                  </select>
                                </div>
                                <div class="col-xs-12 col-md-5"> <a href="" class="button inline-element button--green text-center">Add to job history</a> </div>
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="blockLabel-element">Job descriptions</label>
                              <textarea name="message" class="form-control" v-model:value="employee.JobDescription"></textarea>
                            </div>
                          </div>
                          <div class="user__right--part col-xs-12 col-md-4">
                            <div class="upload__profile__avatar">
                              <div class="img__aavatar__block">
                                <div class="img__aavatar__box">
                                  <div class="img__aavatar"> <img :src="employee.Photo"> </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xs-12 col-sm-6">
                        <div class="form-group dateForm-control">
                          <label>Joined Date</label>
                          <DatePicker :format="format" placeholder="Joined date" v-model:value="employee.OfficeJoinDate"></DatePicker>
                        </div>
                      </div>
                      <div class="col-xs-12 col-sm-6">
                        <div class="form-group">
                          <label>Years of exp:</label>
                          <input type="text" class="form-control" placeholder="Experience of years" v-model:value="employee.ExperienceYearsOnOfficeJoin">
                        </div>
                      </div>
                    </div>
                    </div>
                </div>
              </div>
            </slot>
          </div>
          <div class="modal-footer">
                      <div class="action__buttons action__buttons--center">
                      <button type="submit" value="Submit" class="button button--green" @click="saveJobDetails">Submit</button>
                    </div>
          </div>  
      </div>
  </form>
</template> 

<script>
import employeeModel from '../models/EmployeeModel.js'
import DatePicker from 'vuejs-datepicker'
var designationList = []
var departmentList = []
export default {
  name: 'JobDetails',
  data () {
    return {
      msg: 'Citron',
      employee: employeeModel,
      designations: designationList,
      departments: departmentList,
      checkedDepartments: [],
      format: 'yyyy-MM-dd',
      editMode: false
    }
  },
  components: {
    DatePicker
  },
  methods: {
     validateBeforeSubmit () {
      this.$validator.validateAll().then(() => {
          this.savejobDetails()
          // eslint-disable-next-line
          alert('From Submitted!')
      })
      .catch(() => {
          // eslint-disable-next-line
          alert('Correct them errors!');
      })
    },
    saveJobDetails: function () {
      this.employee.JobDepartments = this.checkedDepartments
      if (this.editMode === false) {
        this.$http.post('http://devoidofsilence-001-site1.itempurl.com/api/HRModule/AddEmployeeJobDetail', this.employee).then(function (data) {
          this.$parent.$options._parentListeners.close()
        })
      } else {
        this.$http.post('http://devoidofsilence-001-site1.itempurl.com/api/HRModule/UpdateEmployeeJobDetail', this.employee).then(function (data) {
          this.$parent.$options._parentListeners.close()
        })
      }
    },
    checkedOrNot: function (dept) {
      if (this.checkedDepartments.includes(dept)) {
        return 'checked'
      } else {
        return ''
      }
    }
  },
  created: function () {
    this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/CommonConfiguration/GetDesignations').then(function (data) {
      designationList = []
      for (var i = 0; i < data.body.length; i++) {
        designationList.push({Code:data.body[i].DesignationCode, Name: data.body[i].DesignationName})
      }
      this.designations = designationList
    })

    this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/CommonConfiguration/GetJobDepartments').then(function (data) {
      departmentList = []
      for (var i = 0; i < data.body.length; i++) {
        departmentList.push({Code:data.body[i].DepartmentCode, Name: data.body[i].DepartmentName})
      }
      this.departments = departmentList
    })

    if (typeof this.Properties !== 'undefined' && typeof this.Properties !== undefined && this.Properties !== '' && this.Properties !== null) {
        this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/HRModule/GetEmployeeJobDetail/' + this.Properties[0].EmployeeCode).then(function (data) {
          this.employee = data.body
          this.checkedDepartments = this.employee.JobDepartments == null ? [] : this.employee.JobDepartments
          this.employee.JobDesignationCode = this.employee.JobDesignationCode == null ? '' : this.employee.JobDesignationCode
          this.editMode = this.employee.JobDetailsExist
          this.$root.$children[0].loaderShowHide()
        })
    }
  },
  props: ['Properties']
}
</script>

<style scoped>
.upload__and__edit:before, upload__and__edit:after{
    display: table;
    content: '';
    clear: both;
}
.upload__profile__avatar{
    padding-right: 15px;
}
.upload__profile__avatar .img__aavatar img{
    width: 100%;
}
.upload__profile__avatar .img__aavatar__block .img__aavatar__box .btn-file{
    width: 100%;
    border-radius: 0;
    height: 34px;
}
.layout__table__cell {
    display: table-cell;
    vertical-align: top;
}
.button{
  padding: 12px 25px;
}
textarea{
  height: 100px;
}
.jobDepartment__list li{
  width: 195px;
}
.modal-container{
  position: relative;
}
.refurbish__modal{
  position: relative;
}
.refurbish__modal .modal-header{
    height: 46px;
    width: 100%;
    padding: 0;
    line-height: 46px;
    text-align: left;
    margin-bottom: 20px;
}
.refurbish__modal__close{
  position: absolute;
  right:0;
  top:-6px;
}
</style>
