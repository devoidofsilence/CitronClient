<template>
<!-- template for the modal component -->
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="refurbish__modal">
          <div class="refurbish__modal__close">
            <slot name="footer">
              <button class="modal-default-button button button--green" @click="$emit('close')">OK</button>
            </slot>
          </div>
              <div class="refurbish__modal__body">
                <component :is="activeComponent" :properties="properties"></component>
              </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template> 


<script>
import JobDetails from './JobDetails'
import AccountDetails from './AccountDetails'
export default {
  name: 'ModalPopup',
  data () {
    return {
      activeComponent: '',
      properties: []
    }
  },
  components: {
    JobDetails,
    AccountDetails
  },
  created: function () {
    this.$root.$children[0].loaderShowHide()
    this.activeComponent = this.PlaceholderComponent
    if (this.activeComponent === 'JobDetails') {
      this.properties.push({EmployeeCode: this.Properties})
     // this.$root.$children[0].loaderShowHide()
    }
    if (this.activeComponent === 'AccountDetails') {
      this.properties.push({EmployeeCode: this.Properties})
    }
  },
  props: ['PlaceholderComponent', 'Properties']
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
  background-color: rgba(255, 255, 255, .8);
  display: table;
  transition: opacity .3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 60%;;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.refurbish__modal{
  padding: 20px;
  position: relative;
}
.refurbish__modal__body{
  max-height: 520px;
  overflow: auto;
}
.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}
.modal-body {
  margin: 20px 0;
}
.refurbish__modal__close{
    position: absolute;
    right: -50px;
    top: 0;
}
.modal-default-button {
    float: right;
    border-radius: 0;
    height: 46px;
    width: 50px;
    padding: 0;
    text-align: center;
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
