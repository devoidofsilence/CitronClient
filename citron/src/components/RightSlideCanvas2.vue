<template>
  <div class="sideCanvas__right" id="rightSideCanvas2">
    <a href="javascript:void(0)" class="closebtn indexCloseBtn" v-on:click="closeNav()">
      <i class="ion-ios-close-empty"></i></a>
    <div class="canvasShow__slidepanel">
      <div class="canvasShow__slidepanel__header">
        <h2>Creat new Projects</h2>
      </div>
      <div class="canvasShow__slidepanel__content">
     <!-- New projects form -->
    <div class="panel__box">
      <div class="form__hr">
        <form>
          <div class="row">
                    <div class="col-xs-12 col-sm-6">
                      <div class="form-group">
                        <label>Project ID</label>
                        <input type="text" class="form-control" placeholder="Project ID">
                      </div>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                      <div class="form-group">
                        <label>Project name</label>
                        <input type="text" class="form-control" placeholder="Project name">
                      </div>
                    </div>
                    <div class="col-xs-12">
                      <div class="form-group">
                        <label>Citizenship No.</label>
                         <textarea  class="form-control" placeholder="Project descriptions"></textarea>
                      </div>
                    </div>
          </div>
        </form>
      </div>
    </div>
    <div class="action__buttons action__buttons--center">
        <button type="submit" value="Submit" class="button button--green">Submit</button>
        <button type="button" value="Cancel" class="button button--border--green" v-on:click="closeNav()">Cancel</button>
    </div>
      </div>
    </div>
  </div>
</template> 

<script>
export default {
  name: 'RightSlideCanvas2',
  data () {
    return {
      msg: 'Citron'
    }
  },
  methods: {
      closeNav: function () {
      document.getElementById('rightSideCanvas2').style.width = '0'
      document.body.className = ''
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
