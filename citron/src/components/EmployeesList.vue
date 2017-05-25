
<template>
  <div class="employeeListView__credentials"> 
  <div class="app__actions__panel app__actions__panelStatus">
    <button class="button button--border--green statusSearchBtn" v-on:click="show = !show">Toggle</button>
        <span class="button button--green" id="sidebar-main-trigger">Add new Hr</span>
      </div>
    
        <transition name="fade">
          <div v-if="show">
            <EmployeeListSearch></EmployeeListSearch>
          </div>
        </transition>
  <section class="employees__list__row">
  <!-- use the modal component, pass in the prop -->
  <modal v-if="showModal" @close="showModal = false">
    <!--
      you can use custom content here to overwrite
      default content
    -->
    <h3 slot="header">Warning</h3>
  </modal>
    <!-- template for the modal component -->
<script type="text/x-template" id="modal-template">
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              Header
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              Are you sure?
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <!--default footer-->
              <button class="modal-default-button" @click="$emit('close')">
                Ok
              </button>
              <button class="modal-default-button" @click="$emit('close')">
                Cancel
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</script>
    <div class="row">
      <div v-for="employee in employeesList" class="col-xs-12 col-sm-6 col-md-4">
        <div class="box__card box__card--one">
          <div class="box__card__content">
            <div class="box__card__avatar">
              <div class="avatar__image">
                <figure>
                  <img :src="employee.Photo" class="img-circle user-img">
                </figure>
              </div>
              <span class="id__badge badge">ID: {{employee.Code}}</span>
            </div>
            <div class="box__card__text">
              <h3>{{employee.Name}}</h3>
              <p>{{employee.Designation}}</p>
              <p class="text--itallic text--thin">Total exp: {{employee.ExperienceYearsOnOfficeJoin}} years</p>
            </div>
          </div>
          <div class="box__card__footer">
            <ul class="social__links">
              <li v-if="checkAvailable(employee.FacebookLink)"><a :href="employee.FacebookLink"><i class="ion-social-facebook"></i></a></li>
              <li v-if="checkAvailable(employee.TwitterLink)"><a :href="employee.TwitterLink"><i class="ion-social-twitter"></i></a></li>
              <li v-if="checkAvailable(employee.LinkedInLink)"><a :href="employee.LinkedInLink"><i class="ion-social-linkedin"></i></a></li>
              <li v-if="checkAvailable(employee.GooglePlusLink)"><a :href="employee.GooglePlusLink"><i class="ion-social-googleplus"></i></a></li>
              <!--<li><a href=""><i class="ion-social-tumblr"></i></a></li>-->
            </ul>
          </div>
          <div class="plus--more">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="ion-more"></i></a>
            <ul class="dropdown-menu droppingMenu pull-right">
                <li>
                  <router-link to="/employees-list">Edit</router-link>
                </li>
                <li>
                  <a href="javascript:void(0)" @click="showModal = true">Delete</a>
                </li>
                
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template> 


<script>
import EmployeeListSearch from './EmployeeListSearch'
export default {
  name: 'EmployeesList',
  components: {
    EmployeeListSearch
  },
  data () {
    return {
      msg: 'Citron',
      employeesList: '',
      showModal: false,
      show: false
    }
  },
  methods: {
    checkAvailable: function (valueToCheck) {
        if (valueToCheck !== null) {
          return true
        } else {
          return false
        }
      }
  },
  created: function () {
    this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/HRModule/GetEmployees').then(function (data) {
        if (typeof data !== undefined) {
          this.employeesList = data.body
        }
      })
  }
}
</script>

<style>
.taskNull__content{
  text-align: center;
  width: 100%;
height: 100%;
}
.taskNull__content p{
  font-size: 26px;
  font-weight: 300;
}
.box__card{
  background-color: #fff;
  border-radius: 3px;
  position: relative;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.036);
}
.box__card--one{
  margin-bottom: 30px;
}
.box__card__content:before, .box__card__content:after{
  display: table;
  content: '';
  clear: both;
}
.box__card__content{
  padding: 15px 15px 25px 15px;
}
.box__card__footer{
  border-top: 1px solid #f5f5f5;
  padding: 8px 15px;
}
.box__card__avatar{
  float: left;
  margin-right: 15px;
  position: relative;
}
.avatar__image {
  width: 85px;
}
.avatar__image figure{
  border-radius: 100%;
  overflow: hidden;
  height: 85px;
  width: 85px;
}
.avatar__image img{
  max-width: 100%;
  border-radius: 0;
}
.box__card__text h3{
    font-size: 16px;
    color: #666f7b;
    font-weight: 500;
    margin: 0 0 10px 0;
}
.box__card__text p {
  margin: 0 0 2px 0;
  font-size: 14px;
}
.id__badge{
    position: absolute;
    bottom: -10px;
    left: -2px;
    padding: 5px 8px;
    background-color: #fff;
    color: #666f7b;
    border: 1px solid #dadada;
    border-radius: 30px;
    font-weight: normal;
    width: 100%;
}
.box__card .plus--more{
    position: absolute;
    right: 0;
    top: 0;
    right: 15px;
}
.social__links{
  margin: 0;
  padding: 0;
}
.social__links li{
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
}
.social__links li:last-child{
  margin-right: 0;
}
.social__links li a{
  display: block;
  color: #8c8c8c;
  font-size: 16px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
