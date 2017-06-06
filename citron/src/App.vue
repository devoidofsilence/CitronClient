<template>
  <div id="app">
<<<<<<< HEAD
    <div class="loadingMask" style="display:none;">
=======
    <div v-if="showHideLoader" class="loadingMask" >
>>>>>>> 7c6f6b36343abbc947a9a4c0eadbf429ac5d34d5
      <div class="loader">
        <div class="loader__figure"></div>
        <p class="loader__label">Loading</p>
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
}
}
</script>

<style>
#app{
    width: 100%;
}
</style>
