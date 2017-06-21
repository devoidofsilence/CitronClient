<template>
  <div class="panels__row">
    <div class="panel__box">
     <div class="titlePanel">
       <h2 class="titleHeading--big">Project charter completness: 
       <span class="text--bold text-extraLarge greenText">{{width}}%</span>
       </h2>
     </div>
    <div class="projectCharter__panel">
      <div class="projectCharter__panel__status">
        <div class="progress">
          <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" v-bind:style="{ width: width + '%' }">
          <span class="progress__value">{{width}}%</span>
          </div>
        </div>
      </div>
  <paginate name="projectCharters" :list="projectCharters" class="paginate-list">
    <li v-for="projectCharter in paginated('projectCharters')">
      <div class="projectCharter__panel__body">
        <div class="projectCharter__quest__box">
          <div class="projectCharter__quest__row text-center">
              <ul>
                <li>
                  <div class="projectCharter__quest">
                    <h1>What is the purpose/justification of the project?</h1>
                    <p class="pq__hint">{{ projectCharter.Name }}</p>
                    </div>
                  <div class="projectCharter__quest__ans">
                    <div class="form-group">
                  <textarea class="form-control" placeholder="Your answer..." v-model:value="projectCharter.Answer" v-on:blur="calculateCharterCompletion"></textarea>
                  </div>
                  </div>
                </li>
              </ul>
          </div>
        </div>
      </div>
      <!--<ProjectCharterQA v-for="projectCharter in projectCharters" :project-charter-model="projectCharter"></ProjectCharterQA>-->
    </li>
  </paginate>
  <!--<paginate-links for="projectCharters" :show-step-links="true"></paginate-links>-->
  <!--< paginate-links for="projectCharters" :limit="4" :show-step-links="true"></paginate-links>-->
  <!--<paginate-links for="projectCharters" :simple="{
        next: 'Next',
        prev: 'Back'
      }"></paginate-links>-->
      <!--<ProjectCharterQA v-for="projectCharter in projectCharters" :project-charter-model="projectCharter"></ProjectCharterQA>-->
      <div class="projectCharter__panel__footer">
        <div class="row">
          <div class="col-xs-6">
            <paginate-links for="projectCharters" :simple="{
        next: 'Next',
        prev: 'Back'
      }"></paginate-links>
            <!--<a href="" class="prevBtn onhovBtn"><i class="ion-ios-arrow-left"></i>Prev</a>
            <a href="" class="nextBtn onhovBtn">Next <i class="ion-ios-arrow-right"></i></a></div>-->
          </div>
          <div class="col-xs-6 text-right">
            <a href="javascript:void(0)" class="button button--green button--big" @click="submit">Done</a>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template> 

<script>
import ProjectCharterQA from './ProjectCharterQA'
import _ from 'lodash'
import ProjectCharterModel from '../models/ProjectCharterModel'
export default {
  name: 'ProjectCharter',
  data () {
    return {
      msg: 'Citron',
      projectCharters: [],
      mainProjectCode: '',
      editMode: false,
      paginate: ['projectCharters'],
      width: '0'
    }
  },
  methods: {
    calculateCharterCompletion: function () {
      var answered = _.filter(this.projectCharters, function (o) {
        return o.Answer !== '' && o.Answer !== null
       })
       this.width = Math.round((answered.length / this.projectCharters.length) * 100)
    },
    submit: function () {
      if (this.editMode === true) {
        this.$root.$children[0].loaderShowHide()
        var editObj = { ProjectCode: this.mainProjectCode, QACollection: this.projectCharters }
        this.$http.post('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/UpdateProjectCharter', editObj).then(function (data) {
        this.$root.$children[0].loaderShowHide()
        this.$router.push({name: 'ProjectCharterView', params: { ProjectModel: this.$route.params.ProjectModel }})
        })
      } else {
        this.$root.$children[0].loaderShowHide()
        var newObj = { ProjectCode: this.mainProjectCode, QACollection: this.projectCharters }
        this.$http.post('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/AddProjectCharter', newObj).then(function (data) {
        this.$root.$children[0].loaderShowHide()
        this.$router.push('/project-charter-view')
      })
      }
      }
  },
  components: {
    ProjectCharterQA
  },
  created: function () {
    this.$root.$children[0].active = true
    document.body.className = ''
    // console.log(this.$route.params.ProjectModel)
    if (typeof this.$route.params.ProjectModel.Name !== undefined && this.$route.params.ProjectModel.Name !== 0 && this.$route.params.ProjectModel.Name !== '' && this.$route.params.ProjectModel.Name !== 'undefined') {
     this.$root.$children[0].$children[0].ProjectName = this.$route.params.ProjectModel.Name
   }
    if (typeof this.$route.params.ProjectModel.Name !== undefined && this.$route.params.ProjectModel.Name !== 0 && this.$route.params.ProjectModel.Name !== '' && this.$route.params.ProjectModel.Name !== 'undefined') {
     this.$root.$children[0].projectModelApp = this.$route.params.ProjectModel
   }
    this.mainProjectCode = this.$route.params.ProjectModel.Code
    // this.editMode = true
    this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/GetProjectCharterDetail/' + this.mainProjectCode).then(function (data) {
      this.projectCharters = data.body.QACollection
      if (data.body.QACollection === null) {
        this.editMode = false
        this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/GetProjectCharterQuestions').then(function (innerData) {
        if (typeof innerData !== 'undefined') {
          this.projectCharters = innerData.body
        }
     })
      } else {
        this.editMode = true
        var answered = _.filter(this.projectCharters, function (o) {
        return o.Answer !== '' && o.Answer !== null
       })
       this.width = Math.round((answered.length / this.projectCharters.length) * 100)
      }
        })
  }
}
</script>

<style scoped>
.paginate-links.projectCharters{
  display: inline-flex;
}
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 20px;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  /*display: inline-block;*/
  margin: 0 10px;
}

.paginate-list {
  width: 100%;
  margin: 0 auto;
  text-align: left;
  li {
    display: block;
    &:before {
      content: '⚬ ';
      font-weight: bold;
      color: slategray;
    }
  }
}
.paginate-links.items {
  user-select: none;
  a{
    cursor: pointer;
  }
  li.active a {
    font-weight: bold;
  }
  li.next:before {
    content: ' | ';
    margin-right: 13px;
    color: #ddd;
  }
  li.disabled a {
    color: #ccc;
    cursor: no-drop;
  }
}
</style>
