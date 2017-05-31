
<template>
  <div class="employeeListView__credentials"> 
    <!-- template for the modal component -->
    <!-- use the modal component, pass in the prop -->
        <div>
            <!-- Load dynamic components here!! -->
            <component :is="currentView" :show-modal-prop="showModal" :active-employee="activeEmployee"  @close="cardClose">
            </component>
            <transition name="slide-fade">
                <RightSlideCanvas v-if="showHideRightPanel" @close="closeNav" :canvas="canvasType"></RightSlideCanvas>
            </transition>
        </div>
  <div class="app__actions__panel app__actions__panelStatus">
    <button class="button button--border--green statusSearchBtn" v-on:click="show = !show">Search task</button>
    <span class="button button--green" id="sidebar-main-trigger" v-on:click="openNav">Add new task</span>
  </div>
  <section class="task__list__row">
    <div class="divTable__wrapper table-responsive">
      <div class="divTable">
        <div class="divTableHeading"> 
          <!-- Table heading -->
          <div class="divTableRow">
            <div class="divTableHead">Task</div>
            <div class="divTableHead">Responsible</div>
            <div class="divTableHead">Assigned</div>
            <div class="divTableHead">Parent task</div>
            <div class="divTableHead">Optimistic time</div>
            <div class="divTableHead">Pessimestic time</div>
            <div class="divTableHead">Normal time</div>
            <div class="divTableHead">Expected time
            </div>
          </div>
        </div>
          <!-- table body starts -->
        <div class="divTableBody"> 
          <div class="divTableRow">
            <div class="divTableCell">Work breakdown System(WBS)</div>
            <div class="divTableCell">
              <div class="inlineBlockElement overlapedAvatar">
                <ul>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="divTableCell">
              <div class="inlineBlockElement overlapedAvatar">
                <ul>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="divTableCell">Human resource</div>
            <div class="divTableCell">Mar-12-2-17</div>
            <div class="divTableCell">Mar-12-2-28</div>
            <div class="divTableCell">Mar-12-2-14</div>
            <div class="divTableCell withActionBtns">Mar-12-2-19 
              <div class="plus--more">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="ion-android-more-vertical"></i></a>
                  <ul class="dropdown-menu droppingMenu pull-right">
                      <li>
                        <a href="javascript:void(0)">Edit</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Delete</a>
                      </li>
                  </ul>
                </div>
            </div>
          </div>
          <div class="divTableRow">
            <div class="divTableCell">Work breakdown System(WBS)</div>
            <div class="divTableCell">
              <div class="inlineBlockElement overlapedAvatar">
                <ul>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="divTableCell">
              <div class="inlineBlockElement overlapedAvatar">
                <ul>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="divTableCell">Human resource</div>
            <div class="divTableCell">Mar-12-2-17</div>
            <div class="divTableCell">Mar-12-2-28</div>
            <div class="divTableCell">Mar-12-2-14</div>
            <div class="divTableCell withActionBtns">Mar-12-2-19 
              <div class="plus--more">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="ion-android-more-vertical"></i></a>
                  <ul class="dropdown-menu droppingMenu pull-right">
                      <li>
                        <a href="javascript:void(0)">Edit</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Delete</a>
                      </li>
                  </ul>
                </div>
            </div>
          </div>
          <div class="divTableRow">
            <div class="divTableCell">Work breakdown System(WBS)</div>
            <div class="divTableCell">
              <div class="inlineBlockElement overlapedAvatar">
                <ul>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="divTableCell">
              <div class="inlineBlockElement overlapedAvatar">
                <ul>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="divTableCell">Human resource</div>
            <div class="divTableCell">Mar-12-2-17</div>
            <div class="divTableCell">Mar-12-2-28</div>
            <div class="divTableCell">Mar-12-2-14</div>
            <div class="divTableCell withActionBtns">Mar-12-2-19 
              <div class="plus--more">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="ion-android-more-vertical"></i></a>
                  <ul class="dropdown-menu droppingMenu pull-right">
                      <li>
                        <a href="javascript:void(0)">Edit</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Delete</a>
                      </li>
                  </ul>
                </div>
            </div>
          </div>
          <div class="divTableRow">
            <div class="divTableCell">Work breakdown System(WBS)</div>
            <div class="divTableCell">
              <div class="inlineBlockElement overlapedAvatar">
                <ul>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="divTableCell">
              <div class="inlineBlockElement overlapedAvatar">
                <ul>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="divTableCell">Human resource</div>
            <div class="divTableCell">Mar-12-2-17</div>
            <div class="divTableCell">Mar-12-2-28</div>
            <div class="divTableCell">Mar-12-2-14</div>
            <div class="divTableCell withActionBtns">Mar-12-2-19 
              <div class="plus--more">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="ion-android-more-vertical"></i></a>
                  <ul class="dropdown-menu droppingMenu pull-right">
                      <li>
                        <a href="javascript:void(0)">Edit</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Delete</a>
                      </li>
                  </ul>
                </div>
            </div>
          </div>
          <div class="divTableRow">
            <div class="divTableCell">Work breakdown System(WBS)</div>
            <div class="divTableCell">
              <div class="inlineBlockElement overlapedAvatar">
                <ul>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="divTableCell">
              <div class="inlineBlockElement overlapedAvatar">
                <ul>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="divTableCell">Human resource</div>
            <div class="divTableCell">Mar-12-2-17</div>
            <div class="divTableCell">Mar-12-2-28</div>
            <div class="divTableCell">Mar-12-2-14</div>
            <div class="divTableCell withActionBtns">Mar-12-2-19 
              <div class="plus--more">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="ion-android-more-vertical"></i></a>
                  <ul class="dropdown-menu droppingMenu pull-right">
                      <li>
                        <a href="javascript:void(0)">Edit</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Delete</a>
                      </li>
                  </ul>
                </div>
            </div>
          </div>
          <div class="divTableRow">
            <div class="divTableCell">Work breakdown System(WBS)</div>
            <div class="divTableCell">
              <div class="inlineBlockElement overlapedAvatar">
                <ul>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="divTableCell">
              <div class="inlineBlockElement overlapedAvatar">
                <ul>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="divTableCell">Human resource</div>
            <div class="divTableCell">Mar-12-2-17</div>
            <div class="divTableCell">Mar-12-2-28</div>
            <div class="divTableCell">Mar-12-2-14</div>
            <div class="divTableCell withActionBtns">Mar-12-2-19 
              <div class="plus--more">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="ion-android-more-vertical"></i></a>
                  <ul class="dropdown-menu droppingMenu pull-right">
                      <li>
                        <a href="javascript:void(0)">Edit</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Delete</a>
                      </li>
                  </ul>
                </div>
            </div>
          </div>
          <div class="divTableRow">
            <div class="divTableCell">Work breakdown System(WBS)</div>
            <div class="divTableCell">
              <div class="inlineBlockElement overlapedAvatar">
                <ul>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="divTableCell">
              <div class="inlineBlockElement overlapedAvatar">
                <ul>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="divTableCell">Human resource</div>
            <div class="divTableCell">Mar-12-2-17</div>
            <div class="divTableCell">Mar-12-2-28</div>
            <div class="divTableCell">Mar-12-2-14</div>
            <div class="divTableCell withActionBtns">Mar-12-2-19 
              <div class="plus--more">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="ion-android-more-vertical"></i></a>
                  <ul class="dropdown-menu droppingMenu pull-right">
                      <li>
                        <a href="javascript:void(0)">Edit</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Delete</a>
                      </li>
                  </ul>
                </div>
            </div>
          </div>
          <div class="divTableRow">
            <div class="divTableCell">Work breakdown System(WBS)</div>
            <div class="divTableCell">
              <div class="inlineBlockElement overlapedAvatar">
                <ul>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="divTableCell">
              <div class="inlineBlockElement overlapedAvatar">
                <ul>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="../assets/images/user__avatar-1.jpg" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="divTableCell">Human resource</div>
            <div class="divTableCell">Mar-12-2-17</div>
            <div class="divTableCell">Mar-12-2-28</div>
            <div class="divTableCell">Mar-12-2-14</div>
            <div class="divTableCell withActionBtns">Mar-12-2-19 
              <div class="plus--more">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="ion-android-more-vertical"></i></a>
                  <ul class="dropdown-menu droppingMenu pull-right">
                      <li>
                        <a href="javascript:void(0)">Edit</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Delete</a>
                      </li>
                  </ul>
                </div>
            </div>
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
  name: 'TaskLists',
  components: {
    RightSlideCanvas
  },
  data () {
    return {
      msg: 'Citron',
      taskList: '',
      show: false,
      activeTask: '',
      showHideRightPanel: false,
      canvasType: 'Task'
    }
  },
  methods: {
      cardClose: function () {
        this.showModal = false
      },
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
