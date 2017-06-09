<template>
<div class="projectCharter__panel__body">
        <div class="projectCharter__quest__box">
          <div class="projectCharter__quest__row text-center">
              <ul>
                <li>
                  <div class="projectCharter__quest">
                    <h1 class="titleHeading--big text-xxtraLarge">{{projectCharterModel.Question}}</h1>
                    <p class="pq__hint">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
  prop:'projectCharterModel'
  }
</script>
