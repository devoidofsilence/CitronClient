<template>
     <!-- Job details -->
    <div class="panel__box">
      <div class="panel__box__title"><span>Job details</span></div>
      <div class="form__hr">
        <form>
          <div class="row">
                    <div class="col-xs-12 col-sm-6">
                      <div class="form-group">
                        <label>Employee Id</label>
                        <input type="text" class="form-control" placeholder="Employee id">
                      </div>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                      <div class="form-group">
                        <label>Employee Name</label>
                        <input type="text" class="form-control" placeholder="Employee name">
                      </div>
                    </div>
                    <div class="col-xs-12">
                      <div class="form-group">
                        <div class="panel__box__title"><span>Job department</span></div>
                            <div class="row">
                              <div class="container-fluid">
                                    <label class="checkbox-inline">
                                    <input type="checkbox" id="inlineCheckbox1" value="option1"> Web Development
                                    </label>

                                    <label class="checkbox-inline">
                                    <input type="checkbox" id="inlineCheckbox1" value="option1"> Front End Developer
                                    </label>

                                    <label class="checkbox-inline">
                                    <input type="checkbox" id="inlineCheckbox1" value="option1"> Php Programmer
                                    </label>

                                    <label class="checkbox-inline">
                                    <input type="checkbox" id="inlineCheckbox1" value="option1"> .Net Developer
                                    </label>

                                    <label class="checkbox-inline">
                                    <input type="checkbox" id="inlineCheckbox1" value="option1"> Wordpress Developer
                                    </label>

                                    <label class="checkbox-inline">
                                    <input type="checkbox" id="inlineCheckbox1" value="option1"> Quality Assurance
                                    </label>

                                    <label class="checkbox-inline">
                                    <input type="checkbox" id="inlineCheckbox1" value="option1"> IOS Developer
                                    </label>

                                    <label class="checkbox-inline">
                                    <input type="checkbox" id="inlineCheckbox1" value="option1"> Android Developer
                                    </label>

                                    <label class="checkbox-inline">
                                    <input type="checkbox" id="inlineCheckbox1" value="option1"> Web Designer
                                    </label>

                                    <label class="checkbox-inline">
                                    <input type="checkbox" id="inlineCheckbox1" value="option1"> Graphic Designer
                                    </label>

                                    <label class="checkbox-inline">
                                    <input type="checkbox" id="inlineCheckbox1" value="option1"> SEO Development
                                    </label>

                                    <label class="checkbox-inline">
                                    <input type="checkbox" id="inlineCheckbox1" value="option1"> Networking
                                    </label>
                              </div>
                            </div>
                        </div>
                    </div>
          </div>
          <div class="row">
                <div class="col-xs-12">
                <div class="upload__and__edit row">
                    <div class="upload__profile col-xs-12 col-md-8">
                      <div class="form-group">
                        <div class="panel__box__title"><span>Job designation</span></div>
                        <div class="row">
                          <div class="col-xs-12 col-md-7">
                            <select class="form-control">
                              <option>Ab+</option>
                              <option>Ab-</option>
                              <option>A</option>
                              <option>B</option>
                            </select>
                          </div>
                          <div class="col-xs-12 col-md-5">
                            <a href="" class="button inline-element button--green text-center">Add to job history</a>
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="blockLabel-element">Job descriptions</label>
                        <textarea name="message" class="form-control"></textarea>
                      </div>
                    </div>
                    <div class="user__right--part col-xs-12 col-md-4">
                      <div class="upload__profile__avatar">
                        <div class="img__aavatar__block">
                          <div class="img__aavatar__box">
                            <div class="img__aavatar">
                              <img src="../assets/images/user__avatar-1.jpg">
                            </div>
                            <label class="btn btn-default btn-file">
                              Browse <input type="file" style="display: none;">
                            </label>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                </div>
                </div>
          </div>
          <div class="row">
             <div class="col-xs-12 col-sm-6">
                      <div class="form-group">
                        <label>Joined Date</label>
                        <input type="text" class="form-control" placeholder="Joined date">
                      </div>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                      <div class="form-group">
                        <label>Years of exp:</label>
                        <input type="text" class="form-control" placeholder="Experience of years">
                      </div>
                    </div>
          </div>
          <div class="action__buttons action__buttons--center">
        <button type="submit" value="Submit" class="button button--green" v-on:click="saveEmployee">Submit</button>
        <button type="button" value="Cancel" class="button button--border--green" v-on:click="cancelEmployee">Cancel</button>
    </div>
        </form>
      </div>
    </div>
</template> 

<script>
export default {
  name: 'JobDetails',
  data () {
    return {
      msg: 'Citron'
    }
  }
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
