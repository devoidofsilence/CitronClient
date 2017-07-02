<template>
      <div class="divTableRow">
        <!--This is power interest graph page-->
        <!--<div id="chart_div" style="width: 900px; height: 500px;"></div>-->
        <vue-chart chart-type="ScatterChart" :columns="columns" :rows="rows" :options="options"></vue-chart>
        <!--<chartist ratio="ct-square" type="Line" :data="chartDataValues" :options="chartOptions" ></chartist>-->
        </div>
  </template>
<script>
  export default {
    props: {},
    data () {
      return {
        period: 'last-month',
        columns: [{
                    'type': 'number',
                    'label': 'Power'
                }, {
                    'type': 'number',
                    'label': 'Interest'
                },
                {
                    'type': 'string',
                    'role': 'tooltip'
                }],
        rows: [],
        options: {
                    title: 'P-I Graph',
                    backgroundColor: 'none',
                    hAxis: {
                        title: 'Power',
                        minValue: 0,
                        maxValue: 5,
                        gridlines: {
                          count: 3
                        }
                    },
                    vAxis: {
                        title: 'Interest',
                        minValue: 0,
                        maxValue: 5,
                        gridlines: {
                          count: 3
                        }
                    },
                    legend: {position: 'none'},
                    width: 900,
                    height: 500
                }
            }
      },
      created: function () {
      this.$root.$children[0].loaderShowHide()
      this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/WBSModule/GetAssignedStakeholders').then(function (data) {
          if (typeof data !== 'undefined') {
            for (var i = 0; i < data.body.length; i++) {
              let tempRowArr = []
              tempRowArr.push(data.body[i].PowerOnProject)
              tempRowArr.push(data.body[i].InterestOnProject)
              tempRowArr.push(data.body[i].StakeholderName + '\n' + 'Power: ' + data.body[i].PowerOnProject + ', Interest: ' + data.body[i].InterestOnProject)
              this.rows.push(tempRowArr)
            }
            this.$root.$children[0].loaderShowHide()
          }
        })
      }
    }
</script>
