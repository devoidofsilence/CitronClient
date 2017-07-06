<template>
<div>
     <!-- New projects form -->
     <ModalPopup v-if="showDetailsPopup" @close="showDetailsPopup = false" :placeholder-component="detailsPlaceholderComponent"></ModalPopup>
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
                  <select class="form-control">
                    <option checked>Parent task</option>
                    <option>Task 1</option>
                    <option>Task 2</option>
                    <option>Task 3</option>
                    <option>Task 4</option>
                  </select>
                </div>
            </div>
            <div class="col-xs-12">
                <div class="form-group">
                  <label>Responsibe person</label>
                  <select class="form-control">
                    <option checked>Responsibe person</option>
                    <option>Person 1</option>
                    <option>Person 2</option>
                    <option>Person 3</option>
                    <option>Person 4</option>
                  </select>
                </div>
            </div>
            <div class="col-xs-12">
              <div class="form-group">
                <div class="selectCombo__select" v-on:click="openMultiSelectPopup">People needed to accomplish</div>
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
import ModalPopup from './ModalPopup'
export default {
  name: 'TaskForm',
  data () {
    return {
      msg: 'Citron',
      showDetailsPopup: false,
      detailsPlaceholderComponent: ''
    }
  },
  components: {
    ModalPopup
  },
  methods: {
      closeNav: function () {
      document.getElementById('CreateProject').style.width = '0'
      document.body.className = ''
    },
     openMultiSelectPopup: function () {
      this.showDetailsPopup = true
      this.detailsPlaceholderComponent = 'MultiSelectPanel'
    }
  },
  props: ['properties']
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
.btn-file{
  display: block !important;
}
</style>
