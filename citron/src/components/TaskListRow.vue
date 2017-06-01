<template>
    <div class="divTableRow">
        <transition name="slide-fade">
            <RightSlideCanvas v-if="showHideRightPanel" @close="closeNav" :canvas="canvasType" :properties-to-canvas="taskModel"></RightSlideCanvas>
        </transition>
            <div class="divTableCell"><span class="text--bold"><a href="">taskModel.Name</a></span></div>
            <div class="divTableCell">
              <div class="inlineBlockElement overlapedAvatar">
                <ul>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="taskModel.photo" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="taskModel.photo" class="img-circle user-img"> </figure>
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
                      <figure> <img src="taskModel.Photo" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="taskModel.photo" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="taskModel.photo" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                  <li>
                    <div class="avatar__image small__avatar">
                      <figure> <img src="taskModel.photo" class="img-circle user-img"> </figure>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="divTableCell">{{taskModel.Description}}</div>
            <div class="divTableCell">{{taskModel.OptimisticTime}}</div>
            <div class="divTableCell">{{taskModel.PessimisticTime}}</div>
            <div class="divTableCell">{{taskModel.NormalTime}}</div>
            <div class="divTableCell withActionBtns">{{taskModel.ExpectedTime}}
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
</template>

<script>
import RightSlideCanvas from './RightSlideCanvas'
export default {
  name: 'TaskListRow',
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
       checkAvailable: function (valueToCheck) {
        if (valueToCheck !== null) {
          return true
        } else {
          return false
        }
    },
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
  },
    props: ['taskModel']
}
</script>
