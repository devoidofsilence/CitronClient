<template>
<!-- Account details -->
<div class="panel__box">
  <div class="panel__box__title"><span>Account details</span></div>
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
                      <input type="text" class="form-control" placeholder="Bank name" v-model:value="accountDetail.BankName">
                    </div>
                  </div>
                  <div class="col-xs-12">
                    <div class="form-group">
                      <label>Bank Branch</label>
                      <input type="text" class="form-control" placeholder="Branch" v-model:value="accountDetail.BankBranch">
                    </div>
                  </div>
                  <div class="col-xs-12">
                    <div class="form-group">
                      <label>A/C No.</label>
                      <input type="text" class="form-control" placeholder="Account no." v-model:value="accountDetail.AccountNo">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="user__right--part col-xs-12 col-md-4">
              <div class="upload__profile__avatar">
                <div class="img__aavatar__block">
                  <div class="img__aavatar__box">
                    <div class="img__aavatar"> <img src="../assets/images/user__avatar-1.jpg"> </div>
                    <label class="btn btn-default btn-file"> Browse
                      <input type="file" style="display: none;"  @change="onFileChange">
                    </label>
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
                <input type="text" class="form-control" placeholder="Taxable salary" v-model:value="accountDetail.TaxableSalary">
              </div>
              <div class="col-xs-12 col-md-5"> <a href="" class="button inline-element button--green text-center">Add to salary history</a> </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
        <div class="panel__box__title"><span>Allowences</span></div>
           <ul class="checkBoxList__wrapper list__inlineElement jobDepartment__list">
                  <li>
                    <div class="pure-checkbox">
                      <input id="checkbox1" name="checkbox" type="checkbox" checked="checked">
                      <label for="checkbox1">All type 1</label>
                    </div>
                  </li>
                  <li>
                    <div class="pure-checkbox">
                      <input id="checkbox2" name="checkbox" type="checkbox" checked="">
                      <label for="checkbox2">All type 2</label>
                    </div>
                  </li>
                  <li>
                    <div class="pure-checkbox">
                      <input id="checkbox3" name="checkbox" type="checkbox" checked="checked">
                      <label for="checkbox3">All type 3</label>
                    </div>
                  </li>
                  <li>
                    <div class="pure-checkbox">
                      <input id="checkbox4" name="checkbox" type="checkbox" checked="checked">
                      <label for="checkbox4">All type 4</label>
                    </div>
                  </li>
                </ul>
        </div>
      </div>
      <div class="action__buttons action__buttons--center">
        <button type="submit" value="Submit" class="button button--green" v-on:click="saveEmployee">Submit</button>
        <button type="button" value="Cancel" class="button button--border--green" v-on:click="cancelEmployee">Cancel</button>
      </div>
    </form>
  </div>
</div>

</template> 

<script>
import employeeModel from '../models/EmployeeModel.js'
import accountDetailModel from '../models/AccountDetailMOdel.js'
export default {
  name: 'AccountDetails',
  data () {
    return {
      msg: 'Citron',
      employee: employeeModel,
      accountDetail: accountDetailModel
    }
  }
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
