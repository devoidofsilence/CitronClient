<template>
<form @submit.prevent="validateBeforeSubmit">
   <!-- Account details -->
  <div class="panel__box">
  <div class="titleHeading--big">Account details</div>
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
      </div>
      <div class="row">
        <div class="col-xs-12">
          <div class="upload__and__edit row">
            <div class="upload__profile col-xs-12 col-md-8">
              <div class="form-group">
                <div class="panel__box__title"><span>Job designation</span></div>
                <div class="row">
                  <div class="col-xs-12">
                    <div class="form-group">
                      <label>Bank Name</label>
                      <input type="text" class="form-control" placeholder="Bank name" v-model:value="employee.BankName">
                    </div>
                  </div>
                  <div class="col-xs-12">
                    <div class="form-group">
                      <label>Bank Branch</label>
                      <input type="text" class="form-control" placeholder="Branch" v-model:value="employee.BankBranch">
                    </div>
                  </div>
                  <div class="col-xs-12">
                    <div class="form-group">
                      <label>A/C No.</label>
                          <p class="control has-icon has-icon-right">
                  <input name="a/c no." class="form-control" v-model:value="employee.AccountNo" v-validate="'required|num'" :class="{'input': true, 'is-danger': errors.has('a/c no.') }" type="text" placeholder="A/c No.">
                  <i v-show="errors.has('a/c no.')" class="fa fa-warning"></i>
                  <span v-show="errors.has('a/c no.')" class="help is-danger">{{ errors.first('a/c no.') }}</span>
                  </p>
                    </div>
                  </div>
                </div>
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
        <div class="col-xs-12">
          <div class="form-group">
            <div class="panel__box__title"><span>Taxable salary</span></div>
            <div class="row">
              <div class="col-xs-12 col-md-7">
                    <p class="control has-icon has-icon-right">
                  <input name="taxable salary" class="form-control" v-model:value="employee.TaxableSalary" v-validate="'required|decimal:{decimals?}'" :class="{'input': true, 'is-danger': errors.has('taxable salary') }" type="text" placeholder="Taxable Salary">
                  <i v-show="errors.has('taxable salary')" class="fa fa-warning"></i>
                  <span v-show="errors.has('taxable salary')" class="help is-danger">{{ errors.first('taxable salary') }}</span>
                  </p>
              </div>
              <div class="col-xs-12 col-md-5"> <a href="" class="button inline-element button--green text-center">Add to salary history</a> </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
        <div class="panel__box__title"><span>Allowances</span></div>
           <ul class="checkBoxList__wrapper list__inlineElement jobDepartment__list">
              <li v-for="(allowance, index) in allowances">
                <div class="pure-checkbox">
                  <input type="checkbox" :id="'ddlAllowance'+index" :value="allowance.Code" v-model="checkedAllowances" :checked="checkedOrNot(allowance.Code)">
                  <label :for="'ddlAllowance'+index">{{allowance.Name}}</label>
                </div>
              </li>
          </ul>
        </div>
        </div>
        </div>
      </div>
      <div class="action__buttons action__buttons--center">
        <button type="submit" value="Submit" class="button button--green" @click="saveAccountDetails">Submit</button>
      </div>
</form>
</template> 

<script>
import employeeModel from '../models/EmployeeModel.js'
var allowanceList = []
export default {
  name: 'AccountDetails',
  data () {
    return {
      msg: 'Citron',
      employee: employeeModel,
      allowances: allowanceList,
      checkedAllowances: [],
      editMode: false
    }
  },
   methods: {
      validateBeforeSubmit () {
      this.$validator.validateAll().then(() => {
          this.saveAccountDetails()
          // eslint-disable-next-line
          alert('From Submitted!')
      })
      .catch(() => {
          // eslint-disable-next-line
          alert('Correct them errors!');
      })
    },
    saveAccountDetails: function () {
      this.employee.Allowances = this.checkedAllowances
      if (this.editMode === false) {
        this.$http.post('http://devoidofsilence-001-site1.itempurl.com/api/HRModule/AddEmployeeAccountDetail', this.employee).then(function (data) {
          this.$parent.$options._parentListeners.close()
        })
      } else {
        this.$http.post('http://devoidofsilence-001-site1.itempurl.com/api/HRModule/UpdateEmployeeAccountDetail', this.employee).then(function (data) {
          this.$parent.$options._parentListeners.close()
        })
      }
    },
    checkedOrNot: function (dept) {
      if (this.checkedAllowances.includes(dept)) {
        return 'checked'
      } else {
        return ''
      }
    }
   },
  created: function () {
    this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/CommonConfiguration/GetAllowances').then(function (data) {
      allowanceList = []
      for (var i = 0; i < data.body.length; i++) {
        allowanceList.push({Code:data.body[i].AllowanceCode, Name: data.body[i].AllowanceName})
      }
      this.allowances = allowanceList
    })
     if (typeof this.Properties !== 'undefined' && typeof this.Properties !== undefined && this.Properties !== '' && this.Properties !== null) {
        this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/HRModule/GetEmployeeAccountDetail/' + this.Properties[0].EmployeeCode).then(function (data) {
          this.employee = data.body
          debugger
          this.checkedAllowances = this.employee.Allowances == null ? [] : this.employee.Allowances
          this.editMode = this.employee.AccountDetailsExist
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
</style>
