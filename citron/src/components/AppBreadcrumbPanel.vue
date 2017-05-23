<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="panel__title__row">
        <h1>Dashboard</h1>
        <ol class="breadcrumb">
          <li><a href="#">Home</a></li>
          <li><a href="#">Hr module</a></li>
          <li class="active">Dashboard</li>
        </ol>
      </div>
      <div class="app__actions__panel">
        <span class="button button--green" id="sidebar-main-trigger">Add new Hr</span>
      </div>
    </div>
  </div>
</template> 

<script>
export default {
  name: 'AppBreadcrumbPanel',
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
