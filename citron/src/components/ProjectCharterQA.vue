<template>
<div class="projectCharter__panel__body">
        <div class="projectCharter__quest__box">
          <div class="projectCharter__quest__row text-center">
              <ul>
                <li>
                  <div class="projectCharter__quest">
                    <!--<h1 class="titleHeading--big text-xxtraLarge">{{ projectCharterModel.Name }}</h1>-->
                    <p class="pq__hint">{{ projectCharterModel.Name }}</p>
                  </div>
                  <div class="projectCharter__quest__ans">
                    <div class="form-group">
                      <textarea class="form-control" placeholder="Your answer..." v-model:value="projectCharterModel.Answer"></textarea>
                    </div>
                  </div>
                </li>
              </ul>
          </div>
        </div>
      </div>
  </template>

<script>
import ProjectCharterModel from '../models/ProjectCharterModel'
  export default {
  name: 'ProjectCharterQA',
  data () {
    return {
    }
  },
  props:['projectCharterModel']
  }
</script>
<style>

</style>
