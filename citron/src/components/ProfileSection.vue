<template>
  <div class="panels__row profileSection__panel row">
    <div class="col-xs-12 col-sm-7 col-md-8">
      <div class="panel__box userProfileBox">
        <div class="row">
          <div class="col-xs-12 col-sm-5 col-md-4 userProfile__leftBox">
            <div class="userProfile__leftBox__avatarSection">
                <div class="ulb__avatar">
                  <div class="box__card__avatar">
                    <div class="avatar__image">
                      <figure> 
                        <img src="../assets/images/user__avatar-1.jpg" class="user-img"> 
                      </figure>
                      <span class="onlineNotifier"></span>
                    </div>
                     
                  </div>
                </div>
                <div class="ulb__workRating text-center">
                  <p class="lableTitle--bold text-center">Performance</p>
                  <span class="stars__ratings">
                    <i class="ion-ios-star"></i>
                      <i class="ion-ios-star"></i>
                      <i class="ion-ios-star"></i>
                      <i class="ion-ios-star"></i>
                      <i class="ion-ios-star-half"></i>
                      <i class="ion-ios-star-outline"></i>
                  </span>
                </div>
                <div class="ulb__footer"></div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-7 col-md-8 userProfile__rightBox">
            <div class="userProfile__rightBox__userData"> adfafsdf asdf ad</div>
          </div>
        </div> 
      </div>
    </div>
    <div class="col-xs-12 col-sm-5 col-md-4">
      <div class="panel__box">
        asdfa dsjkfadak
      </div>
    </div>
  </div>
</template> 

<script>
export default {
  name: 'ProfileSection',
  data () {
    return {
      msg: 'Citron'
    }
  }
}
</script>

<style scoped>
.profileSection__panel > div[class*='col-']:last-child{
  padding-left: 0;
}
.profileSection__panel .userProfileBox .userProfile__leftBox{
  border-right: 1px solid #f5f5f5;
}
.userProfile__leftBox__avatarSection{
    padding-top: 20px;
    padding-bottom: 20px;
}
.userProfileBox{
  padding-top: 0;
  padding-bottom: 0;
}
.userProfile__leftBox__avatarSection .ulb__avatar{
  margin-bottom: 10px;
}
.ulb__avatar .avatar__image{
    width: 190px;
    height: 190px;
    position: relative;
}
.avatar__image figure{
    border-radius: 100%;
    overflow: hidden;
    width: 190px;
    height: 190px;
    border:5px solid #fff;
    box-shadow: 0 0px 20px rgba(0,0,0,.18);
    position: relative;
}
.ulb__avatar .avatar__image img{
    max-width: 100%;
    width: 190px;
}
.onlineNotifier{
  width: 25px;
  height: 25px;
  background-color: #2ecc71;
  position: absolute;
  bottom: 0;
  right: 42px;
  border-radius: 100%;
  border:4px solid #fff;
}
.ulb__workRating p{
  margin-bottom: 5px;
}
.ulb__footer{
  border-top: 1px solid #f5f5f5;
}
</style>
