<template>
<<<<<<< HEAD
  <div class="sideCanvas__right" id="rightSideCanvas" style="width:45%">
    <a href="javascript:void(0)" class="closebtn indexCloseBtn" v-on:click="$emit('close')">
=======
  <div class="sideCanvas__right" id="rightSideCanvas">
    <a href="javascript:void(0)" class="closebtn indexCloseBtn" onclick="closeNav()">
>>>>>>> c7931e977483a58841b4857c93bca069e1ac2991
      <i class="ion-ios-close-empty"></i></a>
    <div class="canvasShow__slidepanel">
      <div class="canvasShow__slidepanel__header">
        <h2>Creat new Hr</h2>
      </div>
      <div class="canvasShow__slidepanel__content">
<<<<<<< HEAD
        <component :is="activeComponent" :properties="properties"></component>
=======
     <!-- Personal details -->
    <div class="panel__box">
      <div class="panel__box__title"><span>Personal details</span></div>
      <div class="form__hr">
        <form>
          <div class="row">
                    <div class="col-xs-12 col-sm-6">
                      <div class="form-group">
                        <label>Employee Id</label>
                        <input type="text" class="form-control" placeholder="Employee id">
                      </div>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                      <div class="form-group">
                        <label>Employee Name</label>
                        <input type="text" class="form-control" placeholder="Employee name">
                      </div>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                      <div class="form-group">
                          <label>Employee Email</label>
                          <input type="email" class="form-control" placeholder="Employee email">
                        </div>
                      </div>
                    <div class="col-xs-12 col-sm-6">
                      <div class="form-group">
                        <label>Birthday</label>
                        <input type="text" class="form-control" placeholder="Employee birthday">
                      </div>
                      </div>
                    <div class="col-xs-12 col-sm-6">
                      <div class="form-group">
                        <label>Marital status</label>
                        <select class="form-control">
                          <option>Single</option>
                          <option>Married</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                      <div class="form-group">
                        <label>Personality Type</label>
                        <select class="form-control">
                          <option>Standard</option>
                          <option>Advanced</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                      <div class="form-group">
                        <label>Blood Group</label>
                        <select class="form-control">
                          <option>Ab+</option>
                          <option>Ab-</option>
                          <option>A</option>
                          <option>B</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                      <div class="form-group">
                        <label>Citizenship No.</label>
                         <input type="text" class="form-control" placeholder="Citizenship no.">
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
                            <div class="img__aavatar">
                              <img src="../assets/images/user__avatar-1.jpg">
                            </div>
                            <label class="btn btn-default btn-file">
                              Browse <input type="file" style="display: none;">
                            </label>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                    <div class="user__right--part layout__table__cell">
                      <router-link to="/job-detail" class="button btn-lg btn-block button--border--green text-center">Job details</router-link>
                      <router-link to="/account-details" class="button btn-lg btn-block button--border--green text-center">Account details</router-link>
                     
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
                      <input type="text" class="form-control" placeholder="Local address">
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-4">
                    <div class="form-group">
                      <label>Phone No.</label>
                      <input type="text" class="form-control" placeholder="Phone no.">
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-4">
                    <div class="form-group">
                      <label>Mobile No.</label>
                      <input type="text" class="form-control" placeholder="Mobile no.">
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
                      <input type="text" class="form-control" placeholder="Permanent address">
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-4">
                    <div class="form-group">
                      <label>Permanent Phone No.</label>
                      <input type="text" class="form-control" placeholder="Phone no.">
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-4">
                    <div class="form-group">
                      <label>Permanent Mobile No.</label>
                      <input type="text" class="form-control" placeholder="Mobile no.">
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
                      <input type="text" class="form-control" placeholder="Emergency address">
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-4">
                    <div class="form-group">
                      <label>Emergency Phone No.</label>
                      <input type="text" class="form-control" placeholder="Phone no.">
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-4">
                    <div class="form-group">
                      <label>Emergency Mobile No.</label>
                      <input type="text" class="form-control" placeholder="Mobile no.">
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
                      <label>Local Address</label>
                      <input type="text" class="form-control" placeholder="Local address">
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-6">
                    <div class="form-group">
                      <label>Phone No.</label>
                      <input type="text" class="form-control" placeholder="Phone no.">
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
                      <label>Permanent Address</label>
                      <input type="text" class="form-control" placeholder="Permanent address">
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-6">
                    <div class="form-group">
                      <label>Permanent Phone No.</label>
                      <input type="text" class="form-control" placeholder="Phone no.">
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
                      <label>Permanent Address</label>
                      <input type="text" class="form-control" placeholder="Permanent address">
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-6">
                    <div class="form-group">
                      <label>Permanent Phone No.</label>
                      <input type="text" class="form-control" placeholder="Phone no.">
                    </div>
                  </div>
                </div>
              </div>
          </div>         
        </form>
      </div>
    </div>
    <div class="action__buttons action__buttons--center">
        <button type="submit" value="Submit" class="button button--green">Submit</button>
        <button type="button" value="Cancel" class="button button--border--green" onclick="closeNav()">Cancel</button>
    </div>
>>>>>>> c7931e977483a58841b4857c93bca069e1ac2991
      </div>
    </div>
  </div>
</template>

<script>
import EmployeeForm from './EmployeeForm'
export default {
  name: 'RightSlideCanvas',
  data () {
    return {
      msg: 'Citron',
      activeComponent: '',
      properties: [],
      showPanel: false
    }
<<<<<<< HEAD
  },
  components: {
    EmployeeForm
  },
  created: function () {
    this.activeComponent = 'EmployeeForm'
    if (typeof this.$route.params.EmployeeEditModel !== 'undefined' && this.$route.params.EmployeeEditModel !== '' && typeof this.$route.params.EmployeeEditModel !== undefined) {
      this.activeComponent = EmployeeForm
      this.properties.push({Employee : this.$route.params.EmployeeEditModel})
    }
=======
>>>>>>> c7931e977483a58841b4857c93bca069e1ac2991
  }
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
