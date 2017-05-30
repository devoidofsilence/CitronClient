
<template>
 
  <div class="projectListView__credentials">
       <transition name="slide-fade">
                <RightSlideCanvas v-if="showHideRightPanel" @close="closeNav" :canvas="canvasType"></RightSlideCanvas>
            </transition>
      <div class="app__actions__panel app__actions__panelStatus">
        <button class="button button--border--green statusSearchBtn" v-on:click="show = !show">Search      projects</button>
          <span class="button button--green" id="sidebar-main-trigger" v-on:click="openNav">Add new project</span>
      </div>

   <section class="project__list__row">
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-4">
          <div class="box__card box__card--two project__listShowGrid">
            <div class="box__card__titleSbutle">Projects</div>
            <div class="box__card__content">
              <a href="#">
                <div class="box__card__text">
                  <h3>Citron Project</h3>
                  <p>ID: PRO-0013</p>
                </div>
              </a>
              <div class="work__status layout__table">
                <div class="layout__table__row">
                  <div class="layout__table__cell">
                    <div class="inlineBlockElement">
                      <span class="activeStateIcon"><i class="ion-record"></i></span>
                      <span class="text--thin">Work in progress</span>
                    </div>
                  </div>
                  <div class="layout__table__cell text-right text--bold"><span style="font-size:25px;">80%</span></div>
                </div>
              </div>
            </div>
            <div class="plus--more">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="ion-more"></i></a>
              <ul class="dropdown-menu droppingMenu pull-right">
                  <li>
                    <a href="javascript:void(0)">Edit</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Delete</a>
                  </li>
              </ul>
            </div>
            <div class="pr-progress__line">
              <span style="width:80%"></span>
            </div>
          </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4">
          <div class="box__card box__card--two project__listShowGrid">
            <div class="box__card__titleSbutle">Projects</div>
            <div class="box__card__content">
              <a href="#">
                <div class="box__card__text">
                  <h3>Citron Project</h3>
                  <p>ID: PRO-0013</p>
                </div>
              </a>
              <div class="work__status layout__table">
                <div class="layout__table__row">
                  <div class="layout__table__cell">
                    <div class="inlineBlockElement">
                      <span class="activeStateIcon"><i class="ion-record"></i></span>
                      <span class="text--thin">Work in progress</span>
                    </div>
                  </div>
                  <div class="layout__table__cell text-right text--bold"><span style="font-size:25px;">80%</span></div>
                </div>
              </div>
            </div>
            <div class="plus--more">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="ion-more"></i></a>
              <ul class="dropdown-menu droppingMenu pull-right">
                  <li>
                    <a href="javascript:void(0)">Edit</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Delete</a>
                  </li>
              </ul>
            </div>
            <div class="pr-progress__line">
              <span style="width:80%"></span>
            </div>
          </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4">
          <div class="box__card box__card--two project__listShowGrid">
            <div class="box__card__titleSbutle">Projects</div>
            <div class="box__card__content">
              <a href="#">
                <div class="box__card__text">
                  <h3>Citron Project</h3>
                  <p>ID: PRO-0013</p>
                </div>
              </a>
              <div class="work__status layout__table">
                <div class="layout__table__row">
                  <div class="layout__table__cell">
                    <div class="inlineBlockElement">
                      <span class="activeStateIcon"><i class="ion-record"></i></span>
                      <span class="text--thin">Work in progress</span>
                    </div>
                  </div>
                  <div class="layout__table__cell text-right text--bold"><span style="font-size:25px;">80%</span></div>
                </div>
              </div>
            </div>
            <div class="plus--more">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="ion-more"></i></a>
              <ul class="dropdown-menu droppingMenu pull-right">
                  <li>
                    <a href="javascript:void(0)">Edit</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Delete</a>
                  </li>
              </ul>
            </div>
            <div class="pr-progress__line">
              <span style="width:80%"></span>
            </div>
          </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4">
          <div class="box__card box__card--two project__listShowGrid">
            <div class="box__card__titleSbutle">Projects</div>
            <div class="box__card__content">
              <a href="#">
                <div class="box__card__text">
                  <h3>Citron Project</h3>
                  <p>ID: PRO-0013</p>
                </div>
              </a>
              <div class="work__status layout__table">
                <div class="layout__table__row">
                  <div class="layout__table__cell">
                    <div class="inlineBlockElement">
                      <span class="activeStateIcon"><i class="ion-record"></i></span>
                      <span class="text--thin">Work in progress</span>
                    </div>
                  </div>
                  <div class="layout__table__cell text-right text--bold"><span style="font-size:25px;">80%</span></div>
                </div>
              </div>
            </div>
            <div class="plus--more">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="ion-more"></i></a>
              <ul class="dropdown-menu droppingMenu pull-right">
                  <li>
                    <a href="javascript:void(0)">Edit</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Delete</a>
                  </li>
              </ul>
            </div>
            <div class="pr-progress__line">
              <span style="width:80%"></span>
            </div>
          </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4">
          <div class="box__card box__card--two project__listShowGrid">
            <div class="box__card__titleSbutle">Projects</div>
            <div class="box__card__content">
              <a href="#">
                <div class="box__card__text">
                  <h3>Citron Project</h3>
                  <p>ID: PRO-0013</p>
                </div>
              </a>
              <div class="work__status layout__table">
                <div class="layout__table__row">
                  <div class="layout__table__cell">
                    <div class="inlineBlockElement">
                      <span class="activeStateIcon"><i class="ion-record"></i></span>
                      <span class="text--thin">Work in progress</span>
                    </div>
                  </div>
                  <div class="layout__table__cell text-right text--bold"><span style="font-size:25px;">80%</span></div>
                </div>
              </div>
            </div>
            <div class="plus--more">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="ion-more"></i></a>
              <ul class="dropdown-menu droppingMenu pull-right">
                  <li>
                    <a href="javascript:void(0)">Edit</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Delete</a>
                  </li>
              </ul>
            </div>
            <div class="pr-progress__line">
              <span style="width:80%"></span>
            </div>
          </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4">
          <div class="box__card box__card--two project__listShowGrid">
            <div class="box__card__titleSbutle">Projects</div>
            <div class="box__card__content">
              <a href="#">
                <div class="box__card__text">
                  <h3>Citron Project</h3>
                  <p>ID: PRO-0013</p>
                </div>
              </a>
              <div class="work__status layout__table">
                <div class="layout__table__row">
                  <div class="layout__table__cell">
                    <div class="inlineBlockElement">
                      <span class="activeStateIcon"><i class="ion-record"></i></span>
                      <span class="text--thin">Work in progress</span>
                    </div>
                  </div>
                  <div class="layout__table__cell text-right text--bold"><span style="font-size:25px;">80%</span></div>
                </div>
              </div>
            </div>
            <div class="plus--more">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="ion-more"></i></a>
              <ul class="dropdown-menu droppingMenu pull-right">
                  <li>
                    <a href="javascript:void(0)">Edit</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Delete</a>
                  </li>
              </ul>
            </div>
            <div class="pr-progress__line">
              <span style="width:80%"></span>
            </div>
          </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4">
          <div class="box__card box__card--two project__listShowGrid">
            <div class="box__card__titleSbutle">Projects</div>
            <div class="box__card__content">
              <a href="#">
                <div class="box__card__text">
                  <h3>Citron Project</h3>
                  <p>ID: PRO-0013</p>
                </div>
              </a>
              <div class="work__status layout__table">
                <div class="layout__table__row">
                  <div class="layout__table__cell">
                    <div class="inlineBlockElement">
                      <span class="activeStateIcon"><i class="ion-record"></i></span>
                      <span class="text--thin">Work in progress</span>
                    </div>
                  </div>
                  <div class="layout__table__cell text-right text--bold"><span style="font-size:25px;">80%</span></div>
                </div>
              </div>
            </div>
            <div class="plus--more">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="ion-more"></i></a>
              <ul class="dropdown-menu droppingMenu pull-right">
                  <li>
                    <a href="javascript:void(0)">Edit</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Delete</a>
                  </li>
              </ul>
            </div>
            <div class="pr-progress__line">
              <span style="width:80%"></span>
            </div>
          </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4">
          <div class="box__card box__card--two project__listShowGrid">
            <div class="box__card__titleSbutle">Projects</div>
            <div class="box__card__content">
              <a href="#">
                <div class="box__card__text">
                  <h3>Citron Project</h3>
                  <p>ID: PRO-0013</p>
                </div>
              </a>
              <div class="work__status layout__table">
                <div class="layout__table__row">
                  <div class="layout__table__cell">
                    <div class="inlineBlockElement">
                      <span class="activeStateIcon"><i class="ion-record"></i></span>
                      <span class="text--thin">Work in progress</span>
                    </div>
                  </div>
                  <div class="layout__table__cell text-right text--bold"><span style="font-size:25px;">80%</span></div>
                </div>
              </div>
            </div>
            <div class="plus--more">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="ion-more"></i></a>
              <ul class="dropdown-menu droppingMenu pull-right">
                  <li>
                    <a href="javascript:void(0)">Edit</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Delete</a>
                  </li>
              </ul>
            </div>
            <div class="pr-progress__line">
              <span style="width:80%"></span>
            </div>
          </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4">
          <div class="box__card box__card--two project__listShowGrid">
            <div class="box__card__titleSbutle">Projects</div>
            <div class="box__card__content">
              <a href="#">
                <div class="box__card__text">
                  <h3>Citron Project</h3>
                  <p>ID: PRO-0013</p>
                </div>
              </a>
              <div class="work__status layout__table">
                <div class="layout__table__row">
                  <div class="layout__table__cell">
                    <div class="inlineBlockElement">
                      <span class="activeStateIcon"><i class="ion-record"></i></span>
                      <span class="text--thin">Work in progress</span>
                    </div>
                  </div>
                  <div class="layout__table__cell text-right text--bold"><span style="font-size:25px;">80%</span></div>
                </div>
              </div>
            </div>
            <div class="plus--more">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="ion-more"></i></a>
              <ul class="dropdown-menu droppingMenu pull-right">
                  <li>
                    <a href="javascript:void(0)">Edit</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Delete</a>
                  </li>
              </ul>
            </div>
            <div class="pr-progress__line">
              <span style="width:80%"></span>
            </div>
          </div>
      </div>
    </div>
    <div class="pagination__row">
  <ul class="pagination">
    <li>
      <a href="#" aria-label="Previous">
        <span aria-hidden="true">Prev</span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li class="active"><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li>
      <a href="#" aria-label="Next">
        <span aria-hidden="true">Next</span>
      </a>
    </li>
  </ul>
</div>
   </section>
  </div>
</template> 


<script>
import RightSlideCanvas from './RightSlideCanvas'
export default {
  name: 'ProjectLists',
  components: {
    RightSlideCanvas
  },
  data () {
    return {
      msg: 'Citron',
      showHideRightPanel: false,
      canvasType : 'Project'
      }
  },
methods: {
       openNav: function () {
      this.showHideRightPanel = true
      document.body.className = 'bodyOpenCanvas'
    },
    closeNav: function () {
      this.showHideRightPanel = false
      document.body.className = ''
    }
  }
}
</script>

<style scoped>
.box__card--two{
  margin-bottom: 30px;
}
.box__card__titleSbutle{
    position: absolute;
    font-size: 14px;
    text-transform: uppercase;
    left: 15px;
    top: 15px;
    color: #c6c6c6;
}
.box__card__content{
  padding-top: 50px;
}
.project__listShowGrid .box__card__content > a{
  color: #8a8a8a;
}
.box__card__text{
  text-align: center;
  margin-bottom: 20px;
}
.box__card__text h3{
    margin: 0 0 5px 0;
    font-size: 20px;
    font-weight: 500;
}
.project__listShowGrid{
  position: relative;
}
.pr-progress__line{
    background-color: #dadada;
    height: 3px;
    border-radius: 0px 0px 3px 3px;
    position: relative;
}
.pr-progress__line > span{
  display: inline-block;
  height: 100%;
  background-color: #2ecc71;
  position: absolute;
  border-radius: 0px 0px 3px 3px;
}
</style>
