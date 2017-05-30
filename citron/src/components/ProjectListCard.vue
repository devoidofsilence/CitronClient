<template>     
        <div class="col-xs-12 col-sm-6 col-md-4">
         <transition name="slide-fade">
                <RightSlideCanvas v-if="showHideRightPanel" @close="closeNav" :canvas="canvasType" :properties-to-canvas="projectModel"></RightSlideCanvas>
            </transition>
          <div class="box__card box__card--two project__listShowGrid">
            <div class="box__card__titleSbutle">Projects</div>
            <div class="box__card__content">
              <a href="#">
                <div class="box__card__text">
                  <h3>{{projectModel.Name}}</h3>
                  <p>ID: {{projectModel.Code}}</p>
                </div>
              </a>
              <div class="work__status layout__table">
                <div class="layout__table__row">
                  <div class="layout__table__cell">
                    <div class="inlineBlockElement">
                      <span class="activeStateIcon"><i class="ion-record"></i></span>
                      <span class="text--thin">Work in progress</span>
                    </div>
                  </div>
                  <div class="layout__table__cell text-right text--bold"><span style="font-size:25px;">80%</span></div>
                </div>
              </div>
            </div>
            <div class="plus--more">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="ion-more"></i></a>
              <ul class="dropdown-menu droppingMenu pull-right">
                  <li>
                    <a href="javascript:void(0)">Edit</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Delete</a>
                  </li>
              </ul>
            </div>
            <div class="pr-progress__line">
              <span style="width:80%"></span>
            </div>
          </div>
      </div>
</template> 

<script>
import RightSlideCanvas from './RightSlideCanvas'
import DeleteProjectmodel from './DeleteProjectModel'
export default {
  name: 'ProjectListCard',
  data () {
    return {
      showHideRightPanel: false,
      canvasType: 'Employee'
    }
  },
  components: {
    RightSlideCanvas,
    DeleteProjectmodel
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
  props: ['projectModel']
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
