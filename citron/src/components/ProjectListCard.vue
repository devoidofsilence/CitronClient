<template>     
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
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
            <div class="plus--more" data-toggle="tooltip" title="More items">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="ion-more"></i></a>
              <ul class="dropdown-menu droppingMenu pull-right">
                  <li>
                    <a href="javascript:void(0)" v-on:click="openNav">Edit</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" @click="$emit('open', projectModel)">Delete</a>
                  </li>
                  <li>
                    <router-link :to="{ name: 'TaskForm', params: { ProjectModel: projectModel }}">Manage Tasks</router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'ProjectCharter', params: { ProjectModel: projectModel }}">Project Charter</router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'ProjectCharterView', params: { ProjectModel: projectModel }}">Project Charter View</router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'AssignStakeholders', params: { ProjectModel: projectModel }}">Assign Stakeholders</router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'PowerInterestPlot', params: { ProjectModel: projectModel }}">Power-Interest Plot</router-link>
                  </li>
              </ul>
            </div>
            <div class="pr-progress__line"
              <span style="width:80%"></span>
            </div>
          </div>
      </div>
</template> 
<script>
import RightSlideCanvas from './RightSlideCanvas'
import DeleteProjectmodal from './DeleteProjectModal'
import ProjectCharter from './ProjectCharter'
import ProjectCharterView from './ProjectCharterView'
export default {
  name: 'ProjectListCard',
  data () {
    return {
      showHideRightPanel: false,
      canvasType: ''
    }
  },
  components: {
    RightSlideCanvas,
    DeleteProjectmodal
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
      this.canvasType = 'Project'
      this.showHideRightPanel = true
      document.body.className = 'bodyOpenCanvas'
    },
    openNavTask: function () {
      this.canvasType = 'Task'
      this.showHideRightPanel = true
      document.body.className = 'bodyOpenCanvas'
    },
    closeNav: function () {
      this.showHideRightPanel = false
      document.body.className = ''
    }
  },
  mounted: function () {
    $('[data-toggle="tooltip"]', this.$el).tooltip()
  },
  props: ['projectModel']
}
</script>

<style scoped>
.box__card--two{
  margin-bottom: 30px;
}
.box__card__titleSbutle{
    position: absolute;
    font-size: 14px;
    text-transform: uppercase;
    left: 15px;
    top: 15px;
    color: #c6c6c6;
}
.box__card__content{
  padding-top: 50px;
}
.project__listShowGrid .box__card__content > a{
  color: #8a8a8a;
}
.box__card__text{
  text-align: center;
  margin-bottom: 20px;
}
.box__card__text h3{
    margin: 0 0 5px 0;
    font-size: 20px;
    font-weight: 500;
}
.project__listShowGrid{
  position: relative;
}
.pr-progress__line{
    background-color: #dadada;
    height: 3px;
    border-radius: 0px 0px 3px 3px;
    position: relative;
}
.pr-progress__line > span{
  display: inline-block;
  height: 100%;
  background-color: #2ecc71;
  position: absolute;
  border-radius: 0px 0px 3px 3px;
}
</style>
