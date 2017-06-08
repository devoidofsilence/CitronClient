<template>
  <div class="panels__row">
    <div class="panel__box">
     <div class="titlePanel">
       <h2 class="titleHeading--big">Project charter completness: 
       <span class="text--bold text-extraLarge greenText">56%</span>
       </h2>
     </div>
    <div class="projectCharter__panel">
      <div class="projectCharter__panel__status">
        <div class="progress">
          <div class="progress-bar" role="progressbar" aria-valuenow="56" aria-valuemin="0" aria-valuemax="100" style="width: 56%;">
          <span class="progress__value">56%</span>
          </div>
        </div>
      </div>
      <div class="projectCharter__panel__body">
        <div class="projectCharter__quest__box">
          <div class="projectCharter__quest__row text-center">
              <ul>
                <li>
                  <div class="projectCharter__quest">
                    <h1 class="titleHeading--big text-xxtraLarge">What is the purpose/ justicication of the project?</h1>
                    <p class="pq__hint">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
                  <div class="projectCharter__quest__ans">
                    <div class="form-group">
                      <textarea class="form-control" placeholder="Your answer..."></textarea>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="projectCharter__quest">
                    <h1 class="titleHeading--big text-xxtraLarge">What is the purpose/ justicication of the project?</h1>
                    <p class="pq__hint">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
                  <div class="projectCharter__quest__ans">
                    <div class="form-group">
                      <textarea class="form-control" placeholder="Your answer..."></textarea>
                    </div>
                  </div>
                </li>
              </ul>
          </div>
        </div>
      </div>
      <div class="projectCharter__panel__footer">
        <div class="row">
          <div class="col-xs-6">
            <a href="" class="prevBtn onhovBtn"><i class="ion-ios-arrow-left"></i>Prev</a>
            <a href="" class="nextBtn onhovBtn">Next <i class="ion-ios-arrow-right"></i></a></div>
          <div class="col-xs-6 text-right">
            <a href="" class="button button--green button--big">Done</a>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template> 

<script>
export default {
  name: 'ProjectCharter',
  data () {
    return {
      msg: 'Citron'
    }
  }
}
</script>

<style scoped>
.projectCharter__panel__status{
  padding: 20px 15px;
  margin: 20px -15px 0 -15px;
  border-top: 1px solid #f5f5f5;
  border-bottom: 1px solid #f5f5f5;
}
.projectCharter__panel__body{
  margin-top: 40px;
}
.projectCharter__panel__body ul{
  margin: 0;
  padding: 0;
  list-style: none;
}
.projectCharter__quest h1{
  font-weight: 900;
}
.pq__hint{
  font-size: 12px;
  font-style: italic;
  margin: 0;
}
.projectCharter__quest__ans{
  margin-top: 30px;
}
.projectCharter__quest__box ul > li{
  margin: 0 0 50px 0;
}
.projectCharter__quest__box ul > li:last-child{
  margin:0;
}
.projectCharter__panel__footer .row{
  padding: 30px 15px 15px 15px;
  border-top: 1px solid #f5f5f5;
}
.onhovBtn i{
  font-size: 20px;
}
.prevBtn i{
  margin-right: 10px;
}
.nextBtn i{
  margin-left: 10px;
}
@media (min-width: 992px) {
.projectCharter__quest__box{
  max-width: 820px;
  margin: 0 auto;
}
}
@media (min-width: 768px) and (max-width: 991px) {
}
@media (min-width: 768px) {
}
@media (max-width: 767px) {
}
</style>
