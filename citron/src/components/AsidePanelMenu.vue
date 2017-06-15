<template>
 <div class="app__leftbar largeViewMenu">
   <nav class="main__nav">
     <ul>
       <li>
         <a href="">
          <span class="main__nav__icon"><i class="ion-ios-speedometer"></i></span>
          Dashboard
        </a>
      </li>
      <li>
        <router-link to="/task-list">
          <span class="main__nav__icon">
            <i class="ion-clipboard"></i>
          </span>
          Tasks</router-link>
      </li>
      </li>
      <li>
       <router-link to="/stakeholders">
          <span class="main__nav__icon"><i class="ion-ios-people"></i></span>
          Stakeholders
        </router-link>
      </li>
      <li>
       <router-link to="/ManageStakeholders">
          <span class="main__nav__icon"><i class="ion-ios-people"></i></span>
          Add key stakeholders
        </router-link>
      </li>
      <li>
         <a href="">
          <span class="main__nav__icon"><i class="ion-ios-paper-outline"></i></span>
          Feeds
        </a>
      </li>
     </ul>
   </nav>
 </div>
</template> 

<script>
export default {
  name: 'StakeHolders',
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>
