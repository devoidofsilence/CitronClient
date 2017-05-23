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
  }
}
</script>

<style scoped>
.taskNull__content{
  text-align: center;
  width: 100%;
height: 100%;
}
.taskNull__content p{
  font-size: 26px;
  font-weight: 300;
}
</style>
