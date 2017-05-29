<template>
    <div class="col-xs-12 col-sm-6 col-md-4">
      <transition name="slide-fade">
                <RightSlideCanvas v-if="showHideRightPanel" @close="closeNav" :canvas="canvasType" :properties-to-canvas="employeeModel"></RightSlideCanvas>
            </transition>
        <div class="box__card box__card--one">
          <div class="box__card__content">
            <div class="box__card__avatar">
              <div class="avatar__image">
                <figure>
                  <img :src="employeeModel.Photo" class="img-circle user-img">
                </figure>
              </div>
              <span class="id__badge badge">ID: {{employeeModel.Code}}</span>
            </div>
            <div class="box__card__text">
              <h3>{{employeeModel.Name}}</h3>
              <p>{{employeeModel.Designation}}</p>
              <p class="text--itallic text--thin">Total exp: {{employeeModel.ExperienceYearsOnOfficeJoin}} years</p>
            </div>
          </div>
          <div class="box__card__footer">
            <ul class="social__links">
              <li v-if="checkAvailable(employeeModel.FacebookLink)"><a :href="employeeModel.FacebookLink"><i class="ion-social-facebook"></i></a></li>
              <li v-if="checkAvailable(employeeModel.TwitterLink)"><a :href="employeeModel.TwitterLink"><i class="ion-social-twitter"></i></a></li>
              <li v-if="checkAvailable(employeeModel.LinkedInLink)"><a :href="employeeModel.LinkedInLink"><i class="ion-social-linkedin"></i></a></li>
              <li v-if="checkAvailable(employeeModel.GooglePlusLink)"><a :href="employeeModel.GooglePlusLink"><i class="ion-social-googleplus"></i></a></li>
              <!--<li><a href=""><i class="ion-social-tumblr"></i></a></li>-->
            </ul>
          </div>
          <div class="plus--more">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="ion-more"></i></a>
            <ul class="dropdown-menu droppingMenu pull-right">
                <li>
                  <!--<router-link :to="{ name: 'RightSlideCanvas', params: { EmployeeEditModel: employeeModel }}">Edit</router-link>-->
                  <a href="javascript:void(0)" v-on:click="openNav">Edit</a>
                </li>
                <li>
                  <a href="javascript:void(0)" @click="$emit('open', employeeModel)">Delete</a>
                </li>
            </ul>
          </div>
        </div>
    </div>
</template> 

<script>
import EmployeeForm from './EmployeeForm'
import RightSlideCanvas from './RightSlideCanvas'
export default {
  name: 'EmployeeListCard',
  data () {
    return {
      showHideRightPanel: false,
      canvasType: 'Employee'
    }
  },
  components: {
    EmployeeForm,
    RightSlideCanvas
  },
  methods: {
    checkAvailable: function (valueToCheck) {
        if (valueToCheck !== null) {
          return true
        } else {
          return false
        }
    },
    openNav: function () {
      this.showHideRightPanel = true
      document.body.className = 'bodyOpenCanvas'
    },
    closeNav: function () {
      this.showHideRightPanel = false
      document.body.className = ''
    }
  },
  props: ['employeeModel']
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(400px);
  opacity: 0;
}
</style>
