<template>
  <div class="panels__row">
    <div class="panel__box projectView__table">
      <table>
        <thead>
          <tr>
          <th>Project charter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <!--Questionare table -->
              <ProjectCharterViewBox v-for="projectCharter in projectCharters" :project-charter-model="projectCharter"></ProjectCharterViewBox>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template> 

<script>
import ProjectCharterViewBox from './ProjectCharterViewBox'
import ProjectModel from '../models/ProjectModel'
export default {
  name: 'ProjectCharterView',
  data () {
    return {
      msg: 'Citron',
      projectCharters: [],
      mainProjectCode: ''
    }
  },
  components: {
    ProjectCharterViewBox,
    ProjectModel
  },
  created: function () {
    this.$root.$children[0].active = true
    document.body.className = ''
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
      }
        })
  }
}
</script>

<style scoped>
</style>
