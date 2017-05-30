
<template>
  <div class="projectListView__credentials">
       <transition name="slide-fade">
                <RightSlideCanvas v-if="showHideRightPanel" @close="closeNav" :canvas="canvasType"></RightSlideCanvas>
            </transition>
      <div class="app__actions__panel app__actions__panelStatus">
        <button class="button button--border--green statusSearchBtn" v-on:click="show = !show">Search      projects</button>
          <span class="button button--green" id="sidebar-main-trigger" v-on:click="openNav">Add new project</span>
      </div>
      <transition name="fade">
          <div v-if="show">
           
          </div>
        </transition>

   <section class="project__list__row">
    <div class="row">
       <ProjectListCard v-for="project in projectList" :project-model="project" @open="deleteDialogOpen"></ProjectListCard>
    </div>
    <div class="pagination__row">
      <ul class="pagination">
        <li>
          <a href="#" aria-label="Previous">
            <span aria-hidden="true">Prev</span>
          </a>
        </li>
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li class="active"><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li>
          <a href="#" aria-label="Next">
            <span aria-hidden="true">Next</span>
          </a>
        </li>
      </ul>
</div>
   </section>
  </div>
</template> 


<script>
import RightSlideCanvas from './RightSlideCanvas'
import ProjectListCard from './ProjectListCard'
export default {
  name: 'ProjectLists',
  components: {
    RightSlideCanvas,
    ProjectListCard
  },
  data () {
    return {
      msg: 'Citron',
      projectList: '',
      show: false,
      currentView: '',
      showModal: false,
      activeProject: '',
      showHideRightPanel: false,
      canvasType: 'Project'
    }
  },
  methods: {
      cardClose: function () {
        this.showModal = false
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
  created: function () {
    this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/GetProjects').then(function (data) {
        if (typeof data !== 'undefined') {
          this.projectList = data.body
        }
      })
  }
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
