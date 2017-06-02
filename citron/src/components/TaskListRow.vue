<template>
    <div class="divTableRow">
        <transition name="slide-fade">
            <RightSlideCanvas v-if="showHideRightPanel" @close="closeNav" :canvas="canvasType" :properties-to-canvas="taskModel"></RightSlideCanvas>
        </transition>
            <div class="divTableCell"><span class="text--bold"><a href="">Work breakdown System(WBS)</a></span></div>
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
                        <a href="javascript:void(0)" v-on:click="openNav">Edit</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)" @click="$emit('open', taskModel)">Delete</a>
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
      taskList: '',
      show: false,
      showHideRightPanel: false,
      canvasType: 'Task'
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
  },
    props: ['taskModel']
}
</script>
