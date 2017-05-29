<template>
<div>
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
                      <div class="col-xs-12">
                        <div class="form-group">
                          <div class="panel__box__title"><span>Job department</span></div>
                          <div class="row">
                            <div class="container-fluid">
                              <ul class="checkBoxList__wrapper list__inlineElement jobDepartment__list">
                                <li>
                                  <div class="pure-checkbox">
                                    <input id="checkbox1" name="checkbox" type="checkbox" checked="checked">
                                    <label for="checkbox1">Web Development</label>
                                  </div>
                                </li>
                                <li>
                                  <div class="pure-checkbox">
                                    <input id="checkbox2" name="checkbox" type="checkbox" checked="">
                                    <label for="checkbox2">Front End Developer</label>
                                  </div>
                                </li>
                                <li>
                                  <div class="pure-checkbox">
                                    <input id="checkbox3" name="checkbox" type="checkbox" checked="checked">
                                    <label for="checkbox3">Android Developer</label>
                                  </div>
                                </li>
                                <li>
                                  <div class="pure-checkbox">
                                    <input id="checkbox4" name="checkbox" type="checkbox" checked="checked">
                                    <label for="checkbox4">Php Programmer</label>
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
                                  <select class="form-control" v-model="jobDetail.Designation">
                                    <option value="">Please select</option>
                                    <option v-for="designation in designations" v-bind:value="designation.Code">{{designation.Name}}</option>
                                  </select>
                                </div>
                                <div class="col-xs-12 col-md-5"> <a href="" class="button inline-element button--green text-center">Add to job history</a> </div>
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="blockLabel-element">Job descriptions</label>
                              <textarea name="message" class="form-control" v-model:value="jobDetail.Description"></textarea>
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
                      <div class="col-xs-12 col-sm-6">
                        <div class="form-group">
                          <label>Joined Date</label>
                          <input type="text" class="form-control" placeholder="Joined date" v-model:value="jobDetail.JoinDate">
                        </div>
                      </div>
                      <div class="col-xs-12 col-sm-6">
                        <div class="form-group">
                          <label>Years of exp:</label>
                          <input type="text" class="form-control" placeholder="Experience of years" v-model:value="jobDetail.ExpDate">
                        </div>
                      </div>
                    </div>

                  </form>
                </div>
              </div>
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
                      <div class="action__buttons action__buttons--center">
                      <button type="submit" value="Submit" class="button button--green" v-on:click="saveEmployee">Submit</button>
                      <button type="button" value="Cancel" class="button button--border--green" v-on:click="cancelEmployee">Cancel</button>
                    </div>
          </div>
        </div>
</template> 

<script>
import employeeModel from '../models/EmployeeModel.js'
import jobDetailModel from '../models/JobDetailModel.js'
var desinationList = []
export default {
  name: 'JobDetails',
  data () {
    return {
      msg: 'Citron',
      employee: employeeModel,
      jobDetail: jobDetailModel,
      designations: desinationList
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
