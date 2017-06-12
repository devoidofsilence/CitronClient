<template>
<table class="quest__row">
                <thead>
                  <tr>
                    <th colspan="2">Higher level project scope description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td width="300">Executive Summary</td>
                    <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</td>
                  </tr>
                  <tr>
                    <td width="300">Business Need</td>
                    <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</td>
                  </tr>
                  <tr>
                    <td width="300">Product Scope Description</td>
                    <td>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</td>
                  </tr>
                  <tr>
                    <td width="300">Strategic Plan</td>
                    <td>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.s</td>
                  </tr>
                  <tr>
                    <td width="300">Approvals</td>
                    <td>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</td>
                  </tr>
                </tbody>
              </table>
</template>
<script>
export default {
  name: 'ProjectCharterViewBox',
  data () {
    return {
      msg: 'Citron'
    }
  },
  props: ['projectCharterModel']
}
</script>
