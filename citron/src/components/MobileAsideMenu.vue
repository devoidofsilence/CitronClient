<template>
 <div class="app__leftbar largeViewMenu">
   <nav class="main__nav">
     <ul>
       <li>
         <a href="" data-toggle="tooltip" title="Dashboard">
          <span class="main__nav__icon"><i class="ion-ios-speedometer"></i></span>
          Dashboard
        </a>
      </li>
      <li>
        <router-link :to="{ name: 'TaskForm', params: { ProjectModel: projectModel }}"><span class="main__nav__icon">
            <i class="ion-clipboard"></i>
          </span>Task</router-link>
                    <!--<a href="javascript:void(0)" v-on:click="openNavTask">Add Task</a>-->
        <!--<router-link to="/task-list" data-toggle="tooltip" title="Tasks">
          <span class="main__nav__icon">
            <i class="ion-clipboard"></i>
          </span>
          Tasks</router-link>-->
      </li>
      </li>
      <li>
        <router-link :to="{ name: 'ProjectCharter', params: { ProjectModel: projectModel }}"><span class="main__nav__icon"><i class="ion-ios-paper"></i></span>
          ProjectCharter
        </router-link>
       <!--<router-link to="/stakeholders" data-toggle="tooltip" title="Stakeholders">
          <span class="main__nav__icon"><i class="ion-ios-people"></i></span>
          Stakeholders
        </router-link>-->
      </li>
      <li>
        <router-link :to="{ name: 'ProjectCharterView', params: { ProjectModel: projectModel }}"><span class="main__nav__icon"><i class="ion-ios-list"></i></span>
          Project Charter View</router-link>
<!--
       <router-link to="/AssignStakeholders" data-toggle="tooltip" title="Add key stakeholders">
          <span class="main__nav__icon"><i class="ion-ios-people"></i></span>
          Add key stakeholders
        </router-link>-->
      </li>
      <li>
      <router-link :to="{ name: 'AssignStakeholders', params: { ProjectModel: projectModel }}">
        <span class="main__nav__icon"><i class="ion-ios-people"></i></span>
        Assign Stakeholders</router-link>
      </li>
      <li>
      <router-link :to="{ name: 'PowerInterestPlot', params: { ProjectModel: projectModel }}">
        <span class="main__nav__icon"><i class="ion-arrow-graph-up-right"></i></span>
        Power-Interest</router-link>
      </li>
      <li>
         <a href="" data-toggle="tooltip" title="Feeds">
          <span class="main__nav__icon"><i class="ion-ios-compose"></i></span>
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
  },
  props:['projectModel']
}
</script>

<style scoped>

</style>
