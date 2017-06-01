<template>
<div>
     <!-- New projects form -->
    <div class="panel__box">
      <div class="form__hr">
        <form>
          <div class="row">
             <div class="col-xs-12">
                <div class="form-group">
                  <label>Task name</label>
                  <input type="text" class="form-control" placeholder="Task name">
                </div>
            </div>
            <div class="col-xs-12">
                <div class="form-group">
                  <label>Task descriptions</label>
                  <textarea type="text" class="form-control" placeholder="Task descriptions"></textarea>
                </div>
            </div>
            <div class="col-xs-12">
                <div class="form-group">
                  <label>Parent task</label>
                  <select id="ddl_ParentTast" class="form-control" v-model="task.ParentTaskCode">
                    <option checked>Parent task</option>
                    <option v-for="parentTask in parentTasks" v-bind:value="parentTask.Code">{{parentTask.Name}}</option>
                  </select>
                </div>
            </div>
            <div class="col-xs-12">
                <div class="form-group">
                  <label>Responsibe person</label>
                  <select id="ddl_ParentTast" class="form-control" v-model="task.ResponsiblePersonCode">
                    <option v-for="responsibePerson in responsibePersons" v-bind:value="responsibePerson.Code">{{responsibePerson.Name}}</option>
                  </select>
                </div>
            </div>
            <div class="col-xs-12">
              <div class="form-group">
                <div class="selectCombo__select">People needed to accomplish</div>
              </div>
            </div>
            <div class="col-xs-12">
                <div class="panel__box__title"><span>Personal details</span></div>
                <div class="row">
                  <div class="col-xs-12 col-sm-6">
                    <div class="form-group">
                        <label>Optimistic time</label>
                        <input type="text" class="form-control" placeholder="Optimistic time">
                      </div>
                  </div>
                  <div class="col-xs-12 col-sm-6">
                    <div class="form-group">
                        <label>Pessimistic time</label>
                        <input type="text" class="form-control" placeholder="Pessimistic time">
                      </div>
                  </div>
                  <div class="col-xs-12 col-sm-6">
                    <div class="form-group">
                        <label>Normal time</label>
                        <input type="text" class="form-control" placeholder="Normal time">
                      </div>
                  </div>
                  <div class="col-xs-12 col-sm-6">
                    <div class="form-group">
                        <label>Expected time</label>
                        <input type="text" class="form-control" placeholder="Expected time">
                      </div>
                  </div>
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
// import TaskModel from '../models/TaskModel'
var ParentTaskList: []
var ResponsiblePersonList: []
export default {
  name: 'TaskForm',
  data () {
    return {
      msg: 'Citron',
      responsibePersons: ResponsiblePersonList,
      parentTasks: ParentTaskList
    //  Task: TaskModel
    }
  },
  methods: {
    saveEmployee: function () {
      if (typeof this.Properties !== 'undefined' && this.Properties !== '') {
          this.$http.post('http://devoidofsilence-001-site1.itempurl.com/api/HRModule/UpdateEmployeeDetail', this.employee).then(function () {
          this.$router.go('/task-list')
        })
      } else {
        this.$http.post('http://devoidofsilence-001-site1.itempurl.com/api/HRModule/RecruitEmployee', this.employee).then(function () {
        this.$router.go('/task-list')
      })
      }
    },
      closeNav: function () {
      document.getElementById('CreateProject').style.width = '0'
      document.body.className = ''
    }
  },
  created: function () {
      if (typeof this.Properties !== 'undefined' && this.Properties.length !== 0 && this.Properties !== '') {
        this.editMode = true
      }

      this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/CommonConfiguration/GetParentTasks').then(function (data) {
        ParentTaskList = []
        for (var i = 0; i < data.body.length; i++) {
          ParentTaskList.push({Code:data.body[i].parentTaskCode, Name: data.body[i].parentTaskName})
        }
        this.parentTasks = ParentTaskList
      })

      this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/CommonConfiguration/GetResponsibePersons').then(function (data) {
        ResponsiblePersonList = []
        for (var i = 0; i < data.body.length; i++) {
          ResponsiblePersonList.push({Code:data.body[i].responsibePersonCode, Name: data.body[i].responsibePersonName})
        }
        this.responsibePersons = ResponsiblePersonList
      })

      if (typeof this.Properties !== 'undefined' && this.Properties !== '' && this.Properties.length !== 0) {
        this.tast.ParentTaskCode = this.tast.ParentTaskCode == null ? '' : this.tast.ParentTaskCode
        this.tast.ResponsiblePersonCode = this.tast.ResponsiblePersonCode == null ? '' : this.tast.ResponsiblePersonCode
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
