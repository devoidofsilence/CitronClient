<template>
  <div class="sideCanvas__left">
    <a href="javascript:void(0)" class="closebtn indexCloseBtn" v-on:click="$emit('close')">
      <i class="ion-ios-close-empty"></i></a>
    <div class="canvasShow__slidepanel">
      <div class="canvasShow__slidepanel__content">
        <AsidePanelMenu></AsidePanelMenu>
      </div>
    </div>
  </div>
</template>

<script>
import AsidePanelMenu from './AsidePanelMenu'
export default {
  name: 'LeftSlideCanvas',
  data () {
    return {
      msg: 'Citron'
    }
  },
  components: {
    AsidePanelMenu
  }
}
</script>

<style scoped>
.canvasShow__slidepanel__header{
    background-color: #2ecc71;
    padding: 15px;
}
.canvasShow__slidepanel__header h2{
    font-size: 18px;
    font-weight:500;
    color: #fff;
    margin: 0;
}
.canvasShow__slidepanel__content .panel__box__title{
    position: relative;
    margin-bottom: 20px;
}
.canvasShow__slidepanel__content .panel__box__title span{
    background-color: #fff;
    display: inline-block;
    position: relative;
    padding-right: 6px;
}
.canvasShow__slidepanel__content .panel__box__title:before{
    position:absolute;
    content: '';
    width: 100%;
    height: 1px;
    background-color: #dadada;
    top: 50%;
    margin-top: -1px;
}
.upload__and__edit:before, upload__and__edit:after{
    display: table;
    content: '';
    clear: both;
}
.upload__profile__avatar{
    padding-right: 15px;
}
.user__right--part{
    padding-left: 15px;
}
.upload__profile__avatar .img__aavatar img{
    width: 100%;
}
.upload__profile__avatar .img__aavatar__block .img__aavatar__box .btn-file{
    width: 100%;
    border-radius: 0;
    height: 34px;
}
.canvasShow__slidepanel__content label{
  display: none;
}
.btn-file{
  display: block !important;
}
</style>
