
<template>
  <div class="employeeListView__credentials"> 
    <!-- template for the modal component -->
    <!-- use the modal component, pass in the prop -->
        <div>
            <!-- Load dynamic components here!! -->
            <component :is="currentView" :show-modal-prop="showModal" :active-employee="activeEmployee"  @close="cardClose">
            </component>
            <transition name="slide-fade">
                <RightSlideCanvas v-if="showHideRightPanel" @close="closeNav" :canvas="canvasType"></RightSlideCanvas>
            </transition>
        </div>
  <div class="app__actions__panel app__actions__panelStatus">
    <button class="button button--border--green statusSearchBtn" v-on:click="show = !show">Search employee</button>
        <span class="button button--green" id="sidebar-main-trigger" v-on:click="openNav">Add new Hr</span>
      </div>
    <transition name="fade">
      <div v-if="show">
        <EmployeeListSearch></EmployeeListSearch>
      </div>
    </transition>
    <section class="employees__list__row">
            <div class="row">
                <EmployeeListCard v-for="employee in employeesList" :key="employee" :employee-model="employee" @open="deleteDialogOpen">  </EmployeeListCard>
            </div>
    </section>
  </div>
</template> 


<script>
import EmployeeListSearch from './EmployeeListSearch'
import EmployeeListCard from './EmployeeListCard'
import DeleteEmployeeModal from './DeleteEmployeeModal'
import RightSlideCanvas from './RightSlideCanvas'

export default {
  name: 'EmployeesList',
  components: {
    EmployeeListSearch,
    EmployeeListCard,
    DeleteEmployeeModal,
    RightSlideCanvas
  },
  data () {
    return {
      msg: 'Citron',
      employeesList: '',
      show: false,
      currentView: 'DeleteEmployeeModal',
      showModal: false,
      activeEmployee: '',
      showHideRightPanel: false,
      canvasType: 'Employee'
      // showLoader: false
    }
  },
  methods: {
    deleteDialogOpen: function (employee) {
      this.showModal = true
      this.currentView = 'DeleteEmployeeModal'
      this.activeEmployee = employee
    },
    cardClose: function () {
      this.showModal = false
    },
    openNav: function () {
      this.showHideRightPanel = true
      document.body.className = 'bodyOpenCanvas bodyFull'
    },
    closeNav: function () {
      this.showHideRightPanel = false
      document.body.className = 'bodyFull'
    }
  },
  created: function () {
    document.body.className = 'bodyFull'
    if (typeof this.$route.params.ProjectModel !== undefined && this.$route.params.ProjectModel !== 0 && this.$route.params.ProjectModel !== '' && this.$route.params.ProjectModel !== 'undefined') {
        this.$root.$children[0].$children[0].ProjectName = ''
      }
    this.$root.$children[0].active = false
   this.$root.$children[0].loaderShowHide()
    this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/HRModule/GetEmployees').then(function (data) {
        if (typeof data !== 'undefined') {
          this.$root.$children[0].loaderShowHide()
          this.employeesList = data.body
         $('[data-toggle="tooltip"]').tooltip()
        }
      })
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
.box__card{
  background-color: #fff;
  border-radius: 3px;
  position: relative;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.036);
}
.box__card--one{
  margin-bottom: 30px;
}
.box__card__content:before, .box__card__content:after{
  display: table;
  content: '';
  clear: both;
}
.box__card__content{
  padding: 15px 15px 25px 15px;
}
.box__card__footer{
  border-top: 1px solid #f5f5f5;
  padding: 8px 15px;
}
.box__card__avatar{
  float: left;
  margin-right: 15px;
  position: relative;
}
.avatar__image {
  width: 85px;
}
.avatar__image figure{
  border-radius: 100%;
  overflow: hidden;
  height: 85px;
  width: 85px;
}
.avatar__image img{
  max-width: 100%;
  border-radius: 0;
}
.box__card__text h3{
    font-size: 16px;
    color: #666f7b;
    font-weight: 500;
    margin: 0 0 10px 0;
}
.box__card__text p {
  margin: 0 0 2px 0;
  font-size: 14px;
}
.id__badge{
    position: absolute;
    bottom: -10px;
    left: -2px;
    padding: 5px 8px;
    background-color: #fff;
    color: #666f7b;
    border: 1px solid #dadada;
    border-radius: 30px;
    font-weight: normal;
    width: 100%;
}
.box__card .plus--more{
    position: absolute;
    right: 0;
    top: 0;
    right: 15px;
}
.social__links{
  margin: 0;
  padding: 0;
}
.social__links li{
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
}
.social__links li:last-child{
  margin-right: 0;
}
.social__links li a{
  display: block;
  color: #8c8c8c;
  font-size: 16px;
}
</style>
