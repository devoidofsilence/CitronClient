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
                      <figure> <img src="" class="img-circle user-img"> </figure>
                    </div>
                    <span class="id__badge badge">kdkadsjf</span> 
                  </div>
                </div>
                <div class="ulb__workRating"></div>
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
.userProfileBox{
  padding-top: 0;
  padding-bottom: 0;
}
</style>
