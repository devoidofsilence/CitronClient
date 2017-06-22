<template>
  <section class="taskNull__content">
    <div class="layout__table">
      <div class="layout__table__row">
        <div class="layout__table__cell">
          <p>No list created till now.<br>
          Create hr list here.<p>
          <div class="action__buttons">
            <router-link to="/hrm" class="button button--green">Create hr</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template> 

<script>
export default {
  name: 'TaskVaccum',
  data () {
    return {
      msg: 'Citron'
    }
  },
  created: function () {
    this.$root.$children[0].active = false
    document.body.className = 'bodyFull'
    if (typeof this.$route.params.ProjectModel !== undefined && this.$route.params.ProjectModel !== 0 && this.$route.params.ProjectModel !== '' && this.$route.params.ProjectModel !== 'undefined') {
        this.$root.$children[0].$children[0].ProjectName = ''
      }
  }
}
</script>

<style scoped>
.taskNull__content{
  text-align: center;
  width: 100%;
  height: calc(100vh - 157px);
}
.taskNull__content p{
  font-size: 26px;
  font-weight: 300;
}
</style>
