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
        <div class="progress">
          <div class="progress-bar" role="progressbar" aria-valuenow="56" aria-valuemin="0" aria-valuemax="100" style="width: 56%;">
          <span class="progress__value">56%</span>
          </div>
        </div>
      </div>
      <ProjectCharterQA v-for="projectCharter in projectCharters" :projectCharter-model="projectCharter"></ProjectCharterQA>
      <div class="projectCharter__panel__footer">
        <div class="row">
          <div class="col-xs-6">
            <a href="" class="prevBtn onhovBtn"><i class="ion-ios-arrow-left"></i>Prev</a>
            <a href="" class="nextBtn onhovBtn">Next <i class="ion-ios-arrow-right"></i></a></div>
          <div class="col-xs-6 text-right">
            <a href="" class="button button--green button--big" @click="submit"s>Done</a>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template> 

<script>
import ProjectCharterModel from '../models/ProjectCharterModel'
import ProjectCharterQA from './ProjectCharterQA'
export default {
  name: 'ProjectCharter',
  data () {
    return {
      msg: 'Citron',
      projectCharter: 'ProjectCharterModel',
      projectCharters: ''
    }
  },
  methods: {
    submit: function () {
      debugger
        this.$root.$children[0].loaderShowHide()
        this.$http.post('http://devoidofsilence-001-site1.itempurl.com/api/', this.projectCharter).then(function () {
       // this.$root.$children[0].loaderShowHide()
      })
      }
  },
  components: {
    ProjectCharterQA
  },
  created: function () {
     this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/GetProjectCharterQuestions').then(function (data) {
        if (typeof data !== 'undefined') {
          this.projectCharters = data.body
        }
     })
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
.projectCharter__panel__body{
  margin-top: 40px;
}
.projectCharter__panel__body ul{
  margin: 0;
  padding: 0;
  list-style: none;
}
.projectCharter__quest h1{
  font-weight: 900;
}
.pq__hint{
  font-size: 12px;
  font-style: italic;
  margin: 0;
}
.projectCharter__quest__ans{
  margin-top: 30px;
}
.projectCharter__quest__box ul > li{
  margin: 0 0 50px 0;
}
.projectCharter__quest__box ul > li:last-child{
  margin:0;
}
.projectCharter__panel__footer .row{
  padding: 30px 15px 15px 15px;
  border-top: 1px solid #f5f5f5;
}
.onhovBtn i{
  font-size: 20px;
}
.prevBtn i{
  margin-right: 10px;
}
.nextBtn i{
  margin-left: 10px;
}
@media (min-width: 992px) {
.projectCharter__quest__box{
  max-width: 820px;
  margin: 0 auto;
}
}
@media (min-width: 768px) and (max-width: 991px) {
}
@media (min-width: 768px) {
}
@media (max-width: 767px) {
}
</style>
