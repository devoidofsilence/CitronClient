
<template>
  <div class="projectListView__credentials">
    <RightSlideCanvas2></RightSlideCanvas2>
      <div class="app__actions__panel app__actions__panelStatus">
        <button class="button button--border--green statusSearchBtn" v-on:click="show = !show">Search      projects</button>
          <span class="button button--green" id="sidebar-main-trigger" v-on:click="openNav()">Add new project</span>
      </div>

   <section class="employees__list__row">
    <div class="row">
        project list sections
    </div>
   </section>
  </div>
</template> 


<script>
import RightSlideCanvas2 from './RightSlideCanvas2'
export default {
  name: 'ProjectLists',
  components: {
    RightSlideCanvas2
  },
  data () {
    return {
      msg: 'Citron'
    }
  },
methods: {
      openNav:function () {
      document.getElementById('rightSideCanvas2').style.width = '45%'
      document.body.className = 'bodyOpenCanvas'
    }
  }
}
</script>

<style scoped>

</style>
