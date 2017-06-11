<template>
  <div class="panels__row">
    <div class="panel__box projectView__table">
      <table>
        <thead>
          <tr>
          <th>Project charter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <!--Questionare table -->
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
              <!--Questionare table -->
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
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template> 

<script>
export default {
  name: 'ProjectCharterView',
  data () {
    return {
      msg: 'Citron'
    }
  }
}
</script>

<style scoped>
.projectView__table{
  border-collapse: collapse;
  padding: 2px;
  border-radius: 3px;
  background-color: #9fa1a7;
}
.projectView__table table{
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
}
.projectView__table > table > thead > tr > th{
  background-color: #8f9196;
  color: #fff;
  padding: 10px 10px;
  font-size: 20px;
  text-align: center;
}
.projectView__table table.quest__row{
  border:1px solid #f5f5f5;
  border-collapse: collapse;
}
.projectView__table table.quest__row th{
  background-color: #dfe0e3;
}
.projectView__table table.quest__row th, .projectView__table table.quest__row td{
  padding: 8px 10px;
  border:1px solid #dfe0e3;
}
.projectView__table > table table.quest__row thead th{
  text-align: left;
  font-size: 18px;
  font-weight: 500;
}
.projectView__table > table table.quest__row tbody > tr > td:first-child{
   font-size: 14px;
  font-weight: 500;
  background-color: #f5f5f5;
}
</style>
