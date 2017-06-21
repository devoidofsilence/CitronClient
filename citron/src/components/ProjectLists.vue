
<template>
  <div class="projectListView__credentials">
  <component :is="currentView" :show-modal-prop="showModal" :active-project="activeProject"  @close="cardClose">
            </component>
       <transition name="slide-fade">
                <RightSlideCanvas v-if="showHideRightPanel" @close="closeNav" :canvas="canvasType"></RightSlideCanvas>
            </transition>
      <div class="app__actions__panel app__actions__panelStatus">
        <button class="button button--border--green statusSearchBtn" v-on:click="show = !show">Search projects</button>
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
import DeleteProjectModal from './DeleteProjectModal'
export default {
  name: 'ProjectLists',
  components: {
    RightSlideCanvas,
    ProjectListCard,
    DeleteProjectModal
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
  methods:{
  deleteDialogOpen: function (project) {
      this.showModal = true
      this.currentView = 'DeleteProjectModal'
      this.activeProject = project
     },
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
    this.$root.$children[0].active = false
    document.body.className = 'bodyFullWidth'
    this.$root.$children[0].loaderShowHide()
    this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/GetProjects').then(function (data) {
        if (typeof data !== 'undefined') {
          this.projectList = data.body
         this.$root.$children[0].loaderShowHide()
        }
      })
  }
}
</script>
