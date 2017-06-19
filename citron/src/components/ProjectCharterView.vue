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
    ProjectCharterViewBox
  },
  created: function () {
    if (typeof this.$route.params.ProjectModel.Name !== undefined && this.$route.params.ProjectModel.Name !== 0 && this.$route.params.ProjectModel.Name !== '' && this.$route.params.ProjectModel.Name !== 'undefined') {
     this.$root.$children[0].$children[0].ProjectName = this.$route.params.ProjectModel.Name
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
.projectView__table{
  border-collapse: collapse;
  padding: 2px;
  border-radius: 3px;
  background-color: #9fa1a7;
}
.projectView__table table{
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
}
.projectView__table > table > thead > tr > th{
  background-color: #8f9196;
  color: #fff;
  padding: 10px 10px;
  font-size: 20px;
  text-align: center;
}
.projectView__table table.quest__row{
  border:1px solid #f5f5f5;
  border-collapse: collapse;
}
.projectView__table table.quest__row th{
  background-color: #dfe0e3;
}
.projectView__table table.quest__row th, .projectView__table table.quest__row td{
  padding: 8px 10px;
  border:1px solid #dfe0e3;
}
.projectView__table > table table.quest__row thead th{
  text-align: left;
  font-size: 18px;
  font-weight: 500;
}
.projectView__table > table table.quest__row tbody > tr > td:first-child{
   font-size: 14px;
  font-weight: 500;
  background-color: #f5f5f5;
}
</style>
