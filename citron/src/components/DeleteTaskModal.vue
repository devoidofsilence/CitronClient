<template>
    <div v-if="showModalProp">
    <transition name="modal">
    <div class="modal-mask warningModel__popup">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <h3>Warning</h3>
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              Are you sure you want to delete this Task?
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <!--default footer-->
              <button class="modal-default-button button button--green" @click="okClick">
                Yes
              </button>
              <button class="modal-default-button button button--border--green" @click="$emit('close')">
                No
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
    </transition>
    </div>
</template> 

<script>
export default {
  name: 'DeleteTaskModal',
  data () {
    return {
        showModalValue: true
    }
  },
  methods: {
      okClick: function () {
        this.$root.$children[0].loaderShowHide()
          this.$http.post('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/DeleteProjectTaskDetail', this.activeTask).then(function (data) {
            if (typeof data !== undefined) {
              this.$emit('close')
              this.$router.go('/task-list')
              // this.$root.$children[0].loaderShowHide()
            }
          })
      }
  },
  props: ['showModalProp', 'activeTask']
}
</script>

<style scoped>
</style>
