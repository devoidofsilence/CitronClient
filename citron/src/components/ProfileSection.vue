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
                <div class="ulb__footer layout__table">
                  <ul class="social__links layout__table__row">
                    <li class="layout__table__cell"><a href=""><i class="ion-social-facebook"></i></a></li>
                    <li class="layout__table__cell"><a href=""><i class="ion-social-twitter"></i></a></li>
                    <li class="layout__table__cell"><a href=""><i class="ion-social-linkedin"></i></a></li>
                    <li class="layout__table__cell"><a href=""><i class="ion-social-googleplus"></i></a></li>
                    <li class="layout__table__cell"><a href=""><i class="ion-social-tumblr"></i></a></li>
                  </ul>
                </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-7 col-md-8 userProfile__rightBox">
            <div class="userProfile__rightBox__userData"> 
               <div class="userProfile___card__text">
                  <h3 class="titleHeading--big offset--null">Sharonkrishh</h3>
                  <p>Front End Developer</p>
                  <dl class="dl-horizontal">
                    <dt>Emp ID:</dt><dd>EMP-0001</dd>
                    <dt>Email:</dt><dd>Sharonkrishh_UI/UX@gmail.com</dd>
                    <dt>Designation:</dt><dd>UI/UX Designer</dd>
                    <dt>Exp:</dt><dd>6 years</dd>
                    <dt>Address:</dt><dd>Kupondle Kathmandu, Nepal</dd>
                  </dl>
                  <div class="upt__footer inlineBlockElement">
                    <ul>
                      <li>
                        <span class="titleHeading--big offset--nul">Projects:</span>
                        <span>86</span>
                      </li>
                      <li>
                        <span class="titleHeading--big offset--nul">Tasks:</span>
                        <span>136</span>
                      </li>
                    </ul>
                  </div>
              </div>
            </div>
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
  padding:0px;
}
.profileSection__panel .userProfile__rightBox{
    padding: 0;
    height: 100%;
}
.userProfileBox{
  padding-top: 0;
  padding-bottom: 0;
}
.userProfile__leftBox__avatarSection .ulb__avatar{
  text-align: center;
}
.box__card__avatar{
  display: inline-block;
}
.ulb__avatar, .userProfile___card__text{
  padding: 20px 15px;
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
.ulb__workRating{
  margin-bottom: 10px;
}
.ulb__workRating p{
  margin-bottom: 5px;
}
.ulb__footer{
  border-top: 1px solid #f5f5f5;
  padding: 20px 15px;
}
.ulb__footer .social__links li{
  display: table-cell;
  text-align: center;
}
.userProfile___card__text .dl-horizontal{
  margin-top: 20px;
}
.userProfile___card__text .dl-horizontal dt{
  width: 120px;
  text-align: left;
  font-weight: normal;
  font-size: 16px;
}
.userProfile___card__text .dl-horizontal dd {
    margin-left: 130px;
    font-size: 14px;
    font-weight: normal;
    margin: 0 0 4px 0;
}
.upt__footer ul > li{
    margin: 0 10px 0 0;
}
.upt__footer{
  margin-top: 100px;
}
.upt__footer ul > li:last-child{
    margin: 0;
}
</style>
