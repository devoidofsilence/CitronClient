<template>
  <div id="app">
    <div class="loadingMask" style="display:none;">
      <div v-if="showHideLoader" class="loadingMask">
        <div class="loader">
          <div class="loader__figure"></div>
          <p class="loader__label">Loading</p>
        </div>
      </div>
    </div>
    <SiteHeader></SiteHeader>
    <AsidePanelMenu></AsidePanelMenu>
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
    ContentArea
  },
  data () {
    return {
      showHideLoader: false
    }
  },
  methods: {
    f: function () {
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
