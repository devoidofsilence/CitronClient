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
          if (this.domain === 'taskform') {
            this.$emit('deleteTaskForm')
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
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
