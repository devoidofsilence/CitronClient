<template>
    <div class="col-xs-12 col-sm-4 col-lg-3">
      <transition name="slide-fade">
                <RightSlideCanvas v-if="showHideRightPanel" @close="closeNav" :canvas="canvasType" :properties-to-canvas="employeeModel"></RightSlideCanvas>
            </transition>
        <div class="box__card box__card--verticle">
          <div class="box__card__content">
            <div class="box__card__avatar">
              <div class="avatar__image">
                <router-link :to="{ name: 'ProfileView', params: { EmployeeModel: employeeModel }}">
                  <figure>
                    <img :src="employeeModel.Photo" class="img-circle user-img">
                  </figure>
                </router-link>
              </div>
              <span class="id__badge badge"><strong>ID:</strong> {{employeeModel.Code}}</span>
            </div>
            <div class="box__card__text">
              <h3>{{employeeModel.Name}}
                <small>{{employeeModel.JobDesignationCode}}</small>
              </h3>
              <p>Total exp: {{employeeModel.ExperienceYearsOnOfficeJoin}} years</p>
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
          <div class="plus--more" data-toggle="tooltip" title="More items">
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
          <div class="action__buttons">
            <router-link class="button button--border--green" :to="{ name: 'ProfileView', params: { EmployeeModel: employeeModel }}">View
            </router-link>
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
      document.body.className = 'bodyOpenCanvas bodyFull'
    },
    closeNav: function () {
      this.showHideRightPanel = false
      document.body.className = 'bodyFull'
    }
  },
  mounted: function () {
    $('[data-toggle="tooltip"]', this.$el).tooltip()
  },
  props: ['employeeModel']
}
</script>

<style scoped>
</style>
