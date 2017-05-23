<template>
  <div class="sidebar main right right-side-panel">asdfa sdfads f</div>
</template> 

<script>
export default {
  name: 'RightSlideCanvas',
  data () {
    return {
      msg: 'Citron'
    }
  }
}
</script>

<style scoped>
.panel__title__row{
  margin-bottom: 20px;
}
.panel__title__row h1{
  margin: 0 0 5px 0;
  font-size: 20px;
  font-weight: 500;
}
.panel__title__row .breadcrumb{
  margin: 0;
  padding: 0;
}
.panel__title__row .breadcrumb li,.panel__title__row .breadcrumb li a{
  font-size: 12px;
  font-weight: normal;
  color: #8a8a8a;
} 
.panel__title__row .breadcrumb li.active:before{
  color: #2ecc71;
}
.app__actions__panel{
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>
