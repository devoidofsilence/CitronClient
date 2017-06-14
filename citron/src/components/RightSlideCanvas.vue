<template>
  <div class="sideCanvas__right" id="rightSideCanvas">
    <a href="javascript:void(0)" class="closebtn indexCloseBtn" v-on:click="$emit('close')">
      <i class="ion-ios-close-empty"></i></a>
    <div class="canvasShow__slidepanel">
      <div class="canvasShow__slidepanel__header">
        <h2>{{FormTitle}}</h2>
      </div>
      <div class="canvasShow__slidepanel__content">
        <component :is="activeComponent" :properties="properties"></component>
      </div>
    </div>
  </div>
</template>

<script>
import EmployeeForm from './EmployeeForm'
import ProjectForm from './ProjectForm'
import TaskForm from './TaskForm'
export default {
  name: 'RightSlideCanvas',
  data () {
    return {
      msg: 'Citron',
      activeComponent: '',
      properties: [],
      showPanel: false,
      FormTitle: '',
      editMode: false
    }
  },
  components: {
    EmployeeForm,
    ProjectForm,
    TaskForm
  },
  created: function () {
    if (this.Canvas === 'Employee') {
      this.activeComponent = EmployeeForm
      this.FormTitle = 'New Employee'
      if (typeof this.PropertiesToCanvas !== 'undefined' && this.PropertiesToCanvas !== '' && typeof this.PropertiesToCanvas !== undefined) {
        this.FormTitle = 'Edit Employee'
        this.properties.push({Employee : this.PropertiesToCanvas})
      }
    }
    if (this.Canvas === 'Project') {
      this.activeComponent = ProjectForm
      this.FormTitle = 'New Project'
       if (typeof this.PropertiesToCanvas !== 'undefined' && this.PropertiesToCanvas !== '' && typeof this.PropertiesToCanvas !== undefined) {
        this.FormTitle = 'Edit Project'
        this.properties.push({Project : this.PropertiesToCanvas})
      }
    }
     if (this.Canvas === 'Task') {
      this.activeComponent = TaskForm
      if (this.check === true && typeof this.PropertiesToCanvas !== 'undefined' && this.PropertiesToCanvas !== '' && typeof this.PropertiesToCanvas !== undefined) {
        this.FormTitle = 'Edit Task'
        this.properties.push({Task : this.PropertiesToCanvas, Mode: 'Edit'})
      } else {
        this.FormTitle = 'New Task'
        this.properties.push({Project : this.PropertiesToCanvas, Mode: 'Add'})
      }
    }
  },
  props: ['Canvas', 'PropertiesToCanvas', 'check']
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
.canvasShow__slidepanel__header{
    background-color:$primary-color;
    padding: 15px;
    h2{
      font-size: 18px;
      font-weight:500;
      color: #fff;
      margin: 0;
    }
}
.canvasShow__slidepanel__content{
    .panel__box__title{
      position: relative;
      margin-bottom: 20px;
      &::before{
          position:absolute;
          content: '';
          width: 100%;
          height: 1px;
          background-color: #dadada;
          top: 50%;
          margin-top: -1px;
      }
      span{
          background-color: #fff;
          display: inline-block;
          position: relative;
          padding-right: 6px;
      }
  }
}
.upload__and__edit{
  &::before, &::after{
    display: table;
    content: '';
    clear: both;
  }
}
.upload__profile__avatar{
    padding-right: 15px;
}
.user__right--part{
    padding-left: 15px;
}
.upload__profile__avatar{
  .img__aavatar__block{
    .img__aavatar__box{
      .btn-file{
        width: 100%;
        border-radius: 0;
        height: 34px;
      }
    }
  }

  .img__aavatar img{
    width: 100%;
  }
}

.canvasShow__slidepanel__content label{
  display: none;
}
.btn-file{
  display: block !important;
}

</style>
