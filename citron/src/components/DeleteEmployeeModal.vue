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
              Are you sure you want to delete this employee?
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
  name: 'DeleteEmployeeModal',
  data () {
    return {
        showModalValue: true
    }
  },
  methods: {
      okClick: function () {
        this.$root.$children[0].loaderShowHide()
          this.$http.post('http://devoidofsilence-001-site1.itempurl.com/api/HRModule/DeleteEmployeeDetail', this.activeEmployee).then(function (data) {
            if (typeof data !== undefined) {
              this.$emit('close')
              this.$router.go('/employees-list')
          // this.$root.$children[0].loaderShowHide()
            }
          })
      }
  },
  props: ['showModalProp', 'activeEmployee']
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
