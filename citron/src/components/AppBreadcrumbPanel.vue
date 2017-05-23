<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="panel__title__box">
        <h1>Dashboard</h1>
        <ol class="breadcrumb">
          <li><a href="#">Home</a></li>
          <li><a href="#">Hr module</a></li>
          <li class="active">Dashboard</li>
        </ol>
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
.panel__title__box{

}
.panel__title__box ul{
  margin: 0;
  padding: 0;
}
</style>
