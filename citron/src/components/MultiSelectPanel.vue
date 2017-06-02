<template>
<!-- Account details -->
<div class="panel__box">
  <div class="panel__box__title"><span>Multi select</span></div>
  <div class="form__hr">
    <form>
      jdsfjghsg jsdhfkgs dfkgj  kjs dhgs kdfhs;kfhgsdkf
      <div class="action__buttons action__buttons--center">
        <button type="submit" value="Submit" class="button button--green">Submit</button>
      </div>
    </form>
  </div>
</div>

</template> 

<script>
export default {
  name: 'MultiSelectPanel',
  data () {
    return {
      msg: 'Citron'
    }
  },
  props: ['Properties']
}
</script>

<style scoped>
.upload__and__edit:before, upload__and__edit:after{
    display: table;
    content: '';
    clear: both;
}
.upload__profile__avatar{
    padding-right: 15px;
}
.upload__profile__avatar .img__aavatar img{
    width: 100%;
}
.upload__profile__avatar .img__aavatar__block .img__aavatar__box .btn-file{
    width: 100%;
    border-radius: 0;
    height: 34px;
}
.layout__table__cell {
    display: table-cell;
    vertical-align: top;
}
.button{
  padding: 12px 25px;
}
textarea{
  height: 100px;
}
</style>
