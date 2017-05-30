<template>
<div>
     <!-- New projects form -->
    <div class="panel__box">
      <div class="form__hr">
        <form>
          <div class="row">
                    <div class="col-xs-12 col-sm-6">
                      <div class="form-group">
                        <label>Project ID</label>
                        <input type="text" class="form-control" placeholder="Project ID"  v-model:value="project.Code">
                      </div>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                      <div class="form-group">
                        <label>Project name</label>
                        <input type="text" class="form-control" placeholder="Project name" v-model:value="project.Name">
                      </div>
                    </div>
                    <div class="col-xs-12">
                      <div class="form-group">
                        <label>Citizenship No.</label>
                         <textarea  class="form-control" placeholder="Project descriptions" v-model:value="project.Description"></textarea>
                      </div>
                    </div>
          </div>
        </form>
      </div>
    </div>
    <div class="action__buttons action__buttons--center">
        <button type="submit" value="Submit" class="button button--green" v-on:click="saveProject">Submit</button>
        <button type="button" value="Cancel" class="button button--border--green" v-on:click="closeNav()">Cancel</button>
    </div>
</div>
</template> 

<script>
import projectModel from '../models/ProjectModel.js'
export default {
  name: 'CreateProject',
  data () {
    return {
      msg: 'Citron',
      project: projectModel
    }
  },
  methods: {
      closeNav: function () {
      document.getElementById('CreateProject').style.width = '0'
      document.body.className = ''
    },
    saveEmployee: function () {
      if (typeof this.Properties !== 'undefined' && this.Properties !== '') {
          this.$http.post('http://devoidofsilence-001-site1.itempurl.com/api/HRModule/UpdateEmployeeDetail', this.employee).then(function () {
          this.$router.go('/employees-list')
        })
      } else {
        this.$http.post('http://devoidofsilence-001-site1.itempurl.com/api/HRModule/RecruitEmployee', this.employee).then(function () {
        this.$router.go('/employees-list')
      })
      }
    }
  }
}
</script>

<style scoped>
.canvasShow__slidepanel__header{
    background-color: #2ecc71;
    padding: 15px;
}
.canvasShow__slidepanel__header h2{
    font-size: 18px;
    font-weight:500;
    color: #fff;
    margin: 0;
}
.canvasShow__slidepanel__content .panel__box__title{
    position: relative;
    margin-bottom: 20px;
}
.canvasShow__slidepanel__content .panel__box__title span{
    background-color: #fff;
    display: inline-block;
    position: relative;
    padding-right: 6px;
}
.canvasShow__slidepanel__content .panel__box__title:before{
    position:absolute;
    content: '';
    width: 100%;
    height: 1px;
    background-color: #dadada;
    top: 50%;
    margin-top: -1px;
}
.upload__and__edit:before, upload__and__edit:after{
    display: table;
    content: '';
    clear: both;
}
.upload__profile__avatar{
    padding-right: 15px;
}
.user__right--part{
    padding-left: 15px;
}
.upload__profile__avatar .img__aavatar img{
    width: 100%;
}
.upload__profile__avatar .img__aavatar__block .img__aavatar__box .btn-file{
    width: 100%;
    border-radius: 0;
    height: 34px;
}
.canvasShow__slidepanel__content label{
  display: none;
}
.btn-file{
  display: block !important;
}
</style>
