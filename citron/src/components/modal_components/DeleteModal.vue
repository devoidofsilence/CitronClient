<template>
    <div v-if="showModalProp">
    <transition name="modal">
    <div class="modal-mask warningModel__popup">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <h3>{{header}}</h3>
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              {{bodyQuestion}}
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <!--default footer-->
              <button class="modal-default-button button button--green" @click="acceptClick">
                {{acceptText}}
              </button>
              <button class="modal-default-button button button--border--green" @click="$emit('close')">
                {{cancelText}}
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
  name: 'DeleteModal',
  data () {
    return {
        showModalValue: true
    }
  },
  methods: {
      acceptClick: function () {
          // this.$http.post('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/DeleteProjectDetail', this.activeProject).then(function (data) {
          //   if (typeof data !== undefined) {
          //     this.$emit('close')
          //     this.$router.go('/project-list')
          //   }
          // })
          if (this.domain === 'stakeholder') {
            this.$emit('deleteStakeholder')
            this.$emit('close')
          }
          if (this.domain === 'task') {
            this.$emit('deleteTask')
            this.$emit('close')
          }
          if (this.domain === 'assignstakeholder') {
            this.$emit('deleteAssignStakeholder')
            this.$emit('close')
          }
      }
  },
props: ['showModalProp', 'activeModel', 'header', 'bodyQuestion', 'acceptText', 'cancelText', 'domain']
}
</script>

<style scoped>
</style>
