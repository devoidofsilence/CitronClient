<template>
<div>
<form @submit.prevent="validateBeforeSubmit">
     <!-- New projects form -->
    <div class="panel__box">
      <div class="form__hr">
          <div class="row">
                    <div class="col-xs-12 col-sm-6">
                      <div class="form-group">
                        <label>Project ID</label>
                         <p class="control has-icon has-icon-right">
                  <input name="project id" class="form-control" v-model:value="project.Code" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('project id') }" type="text" placeholder="ProjectID">
                  <i v-show="errors.has('project id')" class="fa fa-warning"></i>
                  <span v-show="errors.has('project id')" class="help is-danger">{{ errors.first('project id') }}</span>
                  </p>
                      </div>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                      <div class="form-group">
                        <label>Project name</label>
                      <p class="control has-icon has-icon-right">
                  <input name="project name" class="form-control" v-model:value="project.Name" v-validate="'required|alpha_spaces'" :class="{'input': true, 'is-danger': errors.has('project name') }" type="text" placeholder="ProjectName">
                  <i v-show="errors.has('project name')" class="fa fa-warning"></i>
                  <span v-show="errors.has('project name')" class="help is-danger">{{ errors.first('project name') }}</span>
                  </p>
                      </div>
                    </div>
                    <div class="col-xs-12">
                      <div class="form-group">
                        <label>Descriptions</label>
                         <textarea  class="form-control" placeholder="Project descriptions" v-model:value="project.Description"></textarea>
                      </div>
                    </div>
                    <div class="col-xs-12">
                      <div class="form-group multiSelect__selector">
                        <label>Assigned To</label>
                         <multi-select :options="options" :selected-options="items" :key="project" placeholder="Select Employees" @select="onSelect"></multi-select>
                      </div>
                    </div>
          </div>
      </div>
    </div>
    <div class="action__buttons action__buttons--center">
        <button type="submit" value="Submit" class="button button--green">Submit</button>
        <button type="button" value="Cancel" class="button button--border--green" v-on:click="resetForm()">Cancel</button>
    </div>
</form>
</div>
</template> 

<script>
import _ from 'lodash'
import { MultiSelect } from 'vue-search-select'
import projectModel from '../models/ProjectModel'

export default {
  name: 'ProjectForm',
  data () {
    return {
      msg: 'Citron',
      project: _.clone(projectModel),
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
      validateBeforeSubmit () {
      this.$validator.validateAll().then(() => {
          this.saveProject()
          // eslint-disable-next-line
          // alert('From Submitted!')
      })
      .catch(() => {
          // eslint-disable-next-line
          // alert('Correct them errors!')
      })
    },
    resetForm: function () {
      Object.assign(this.$data, this.$options.data())
    },
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
    clearForm: function () {
      Object.assign(this.$data, this.$options.data())
    },
    saveProject: function () {
      if (this.editMode === true) {
        this.$root.$children[0].loaderShowHide()
          this.$http.post('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/UpdateProjectDetail', this.project).then(function () {
          this.$root.$children[0].loaderShowHide()
          this.$router.go('/project-list')
        })
      } else {
        this.$root.$children[0].loaderShowHide()
        this.$http.post('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/AddProject', this.project).then(function () {
        this.$root.$children[0].loaderShowHide()
        this.$router.go('/project-list')
      })
      }
    }
  },
  created: function () {
    if (this.options.length === 0) {
    this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/HRModule/GetEmployees').then(function (data) {
      if (typeof data !== 'undefined') {
          for (var i = 0; i < data.body.length; i++) {
            this.options.push({value:data.body[i].Code, text: data.body[i].Name})
          }
          if (typeof this.Properties !== 'undefined' && this.Properties !== '' && this.Properties.length !== 0) {
                this.editMode = true
                this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/GetProjectDetail/' + this.Properties[0].Project.Code)
                .then(function (data) {
                  this.project = data.body
                  this.items = []
                  var pushedItems = []
                  var o = this.options
                  var p = this.project.AssignedEmployees
                  _.each(p, function (code) {
                    var y = (_.filter(o, function (op) {
                        return op.value === code
                    }))
                    pushedItems.push(y[0])
                  })
                  this.items = pushedItems
                  })
            }
        }
      })
    }
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
