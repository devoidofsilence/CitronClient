<template>
  <div id="app">
      <div v-if="showHideLoader" class="loadingMask">
        <div class="loader">
          <div class="loader__figure"></div>
          <p class="loader__label">Loading</p>
        </div>
      </div>
    <SiteHeader></SiteHeader>
    <AsidePanelMenu v-if="active" :project-model="projectModelApp"></AsidePanelMenu>
    <ContentArea></ContentArea>
    <!--<RightSlideCanvas></RightSlideCanvas>-->
  </div>
</template> 

<script>
  import SiteHeader from './components/SiteHeader'
  import AsidePanelMenu from './components/AsidePanelMenu'
  import ContentArea from './components/ContentArea'
export default {
  name:'app',
  components:{
    SiteHeader,
    AsidePanelMenu,
    ContentArea,
    projectModelApp:''
  },
  data () {
    return {
      showHideLoader: false,
      active: false
    }
  },
  methods: {
    loaderShowHide: function () {
      this.showHideLoader = !this.showHideLoader
    }
  }
}
</script>

<style>
#app{
    width: 100%;
}
</style>
