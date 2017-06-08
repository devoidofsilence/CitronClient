<template>
  <div class="panels__row">
    <div class="panel__box">
     <div class="titlePanel">
       <h2 class="titleHeading--big">Project charter completness: 
       <span class="text--bold text-extraLarge greenText">56%</span>
       </h2>
     </div>
    <div class="projectCharter__panel">
      <div class="projectCharter__panel__status">
        <div class="meter orange nostripes">
          <span style="width: 33.3%"></span>
        </div>
      </div>
      <div class="projectCharter__panel__body">asdf asdfa </div>
    </div>
    </div>
  </div>
</template> 

<script>
export default {
  name: 'ProjectCharter',
  data () {
    return {
      msg: 'Citron'
    }
  }
}
</script>

<style scoped>
.projectCharter__panel__status{
  padding: 20px 15px;
  margin: 20px -15px 0 -15px;
  border-top: 1px solid #f5f5f5;
  border-bottom: 1px solid #f5f5f5;
}
</style>
