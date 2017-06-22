<template>
  <div>
         <transition name="slide-fade">
                <LeftSlideCanvas v-if="showHideLeftPanel" @close="closeNav" :canvas="canvasType"></LeftSlideCanvas>
            </transition> 
  <header class="site__header app__topbar">
    <div class="app__topbar__brand">
      <router-link to="/"><a href="javascript:void(0)" class="brand__name">Citron</a></router-link>
    </div>
    <div class="app__topbar__status container-fluid">
      <div class="app__navigations">
          <a href="javascript:void(0)" v-on:click="openNav" class="triggerMbButton" v-bind:class="{showHideLeftPanel: showHideLeftPanel}">
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </a>
        <div class="app__nav__left">

          <ul class="nav navbar-nav navbar-left">
            <li>
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">HR Module</a>
              <ul class="dropdown-menu droppingMenu">
                  <li><router-link to="/employees-list">Go to hr list</router-link></li>
                  <li role="separator" class="divider"></li>
                  <li><router-link to="/hrm">Create hr</router-link></li>
              </ul>
            </li>
            <li>
              <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Projects</a>
              <ul class="dropdown-menu droppingMenu">
                  <li>
                    <router-link to="/project-list">Go to project list</router-link></li>
                    <li role="separator" class="divider"></li>
                  <li>
                    <router-link to="/stakeholders" data-toggle="tooltip" title="Stakeholders">Stakeholders</router-link>
                  </li>
              </ul>
            </li>
            <li class="actionActive__menu"><a href="">{{ProjectName}}</a></li>
          </ul>
        </div>
        <div class="user__box">
          <ul class="nav navbar-nav navbar-right">
            <li class="hidden-xs">
              <div class="app__TopSearch">
                <input type="text" name="app-search">
                <i class="ion-android-search"></i>
              </div>
            </li>
            <li>
              <a href="#" class="user__box__notification" data-toggle="tooltip" title="Notifications">
                <i class="ion-android-notifications"></i>
                <span class="badge badge__rounded badge__rounded---green">14</span>
              </a>
              </li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img">
              </a>
              <ul class="dropdown-menu droppingMenu">
                <li><router-link to="/profile-view">Profile</router-link></li>
                <li><a href="#">Settings</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Logout</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  </div>
</template> 

<script>
import LeftSlideCanvas from './LeftSlideCanvas'
export default {
  name: 'SiteHeader',
  data () {
    return {
      msg: 'Citron',
      showHideLeftPanel: false,
      ProjectName: ''
    }
  },
  components:{
    LeftSlideCanvas
  },
  methods: {
    openNav: function () {
      this.showHideLeftPanel = !this.showHideLeftPanel
        if (this.showHideLeftPanel === true) {
          document.body.classList.add('OpenLeftCanvas')
        } else {
        document.body.classList.remove('OpenLeftCanvas')
      }
    },
    closeNav: function () {
      this.showHideLeftPanel = false
      document.body.className = ''
    }
  }
}
</script>

<style scoped>
</style>
