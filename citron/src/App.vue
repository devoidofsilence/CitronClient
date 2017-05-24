<template>
  <div id="app">
    <SiteHeader></SiteHeader>
    <AsidePanelMenu></AsidePanelMenu>
    <ContentArea></ContentArea>
    <RightSlideCanvas></RightSlideCanvas>
  </div>
</template> 

<script>
  import SiteHeader from './components/SiteHeader'
  import AsidePanelMenu from './components/AsidePanelMenu'
  import ContentArea from './components/ContentArea'
  import RightSlideCanvas from './components/RightSlideCanvas'
  import ModalPopup from './components/ModalPopup'
  
export default {
  name:'app',
  components:{
    SiteHeader,
    AsidePanelMenu,
    ContentArea,
    RightSlideCanvas,
    ModalPopup
  },
  data () {
    return {}
}
}
</script>

<style>
#app{
    width: 100%;
    background-color: #f5f5f5;
}
</style>
