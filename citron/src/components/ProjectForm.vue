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
                    <div class="col-xs-12">
                      <div class="form-group">
                        <label>Assigned To</label>
                         <multi-select :options="options" :selected-options="items" placeholder="Select Employees" @select="onSelect"></multi-select>
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
import _ from 'lodash'
import { MultiSelect } from 'vue-search-select'
import projectModel from '../models/ProjectModel.js'

export default {
  name: 'ProjectForm',
  data () {
    return {
      msg: 'Citron',
      project: projectModel,
      editMode: false,
      options: [],
        searchText: '', // If value is falsy, reset searchText & searchItem
        items: [],
        lastSelectItem: {}
      }
    },
  components: {
    MultiSelect
  },
  methods: {
    onSelect: function (items, lastSelectItem) {
        this.items = items
        this.project.AssignedEmployees = []
        for (var i = 0; i < items.length; i++) {
          this.project.AssignedEmployees.push(items[i].value)
        }
        this.lastSelectItem = lastSelectItem
      },
      // deselect option
      reset: function () {
        this.items = [] // reset
      },
      // select option from parent component
      selectOption: function () {
        this.items = _.unionWith(this.items, [this.options[0]], _.isEqual)
      },
    closeNav: function () {
      document.getElementById('CreateProject').style.width = '0'
      document.body.className = ''
    },
    saveProject: function () {
      if (this.editMode === true) {
          this.$http.post('http://localhost:16399/api/WBSModule/UpdateProjectDetail', this.project).then(function () {
          this.$router.go('/project-list')
        })
      } else {
        this.$http.post('http://localhost:16399/api/WBSModule/AddProject', this.project).then(function () {
        this.$router.go('/project-list')
      })
      }
    }
  },
  created: function () {
    if (typeof this.Properties !== 'undefined' && this.Properties !== '' && this.Properties.length !== 0) {
        this.editMode = true
        this.$http.get('http://localhost:16399/api/WBSModule/GetProjectDetail/' + this.Properties[0].Project.Code).then(function (data) {
          this.project = data.body
          // this.items = []
          // _.forEach(this.options, )
          // this.items = this.project.AssignedEmployees
          })
    }
    this.$http.get('http://localhost:16399/api/HRModule/GetEmployees').then(function (data) {
      this.options = []
        if (typeof data !== 'undefined') {
          console.log(data.body)
          for (var i = 0; i < data.body.length; i++) {
            this.options.push({value:data.body[i].Code, text: data.body[i].Name})
          }
        }
      })
  },
  props: ['Properties']
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
