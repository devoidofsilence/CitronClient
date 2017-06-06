<template>
 <div class="app__leftbar smallViewMenu">
   <nav class="main__nav">
     <ul>
       <li>
         <a href="">
          <span class="main__nav__icon"><i class="ion-speedometer"></i></span>
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
  name: 'AsidePanelMenu',
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>
