<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id="app" class="app1-O">
    {{mes}}
    <!--<div class="app1-O-top">
      <div class="app1-O-topl">
        <ul>
          <li v-for="(item,index) in items" v-on:click="greet(index)" :class="{'appLBg':isBg == index}">{{item}}</li>
        </ul>
      </div>
      <div class="app1-O-topr">
      </div>

    </div>
    <div class="app1-O-bot">
      <div class="botCount">
        <ul>
          <li v-for="list in lists">
            <p>{{list.name}}</p>
            <p>{{list.num}}</p>
          </li>
        </ul>
      </div>
      <div>
        <h4>昨日</h4>
        <div class="botTable" id="main">

        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
  let echarts = require('echarts');
  export default {
    name: 'app1-O-top',
    data() {
      return {
        mes:'订单概况',
        isBg: 0,
        items: ['订单概况'],
        lists: [
          { name: '七日下单数', num: '0' },
          { name: '待付款', num: '0' },
          { name: '待发货', num: '0' },
          { name: '维权订单', num: '0' },
          { name: '七日收入', num: '0' }
        ]
      }
    },
    methods: {
      greet: function (index) {
        this.isBg = index;
      }
    },
    mounted() {
      var myChart = echarts.init(document.getElementById('main'));
      // 绘制图表
      myChart.setOption({
        title: { text: '' },
        tooltip: {},
        xAxis: {
          data: ["七日下单数", "待付款", "待发货", "维权订单", "七日收入"]
        },
        yAxis: {},
        series: [{
          name: '',
          type: 'bar',
          data: [5, 20, 36, 10, 11],
          itemStyle:{
            normal:{color:'#3949ab'}
          }
        }]
      });
    }
  }
</script>

<style scoped>
  .app1-O{height: 100%;min-height: 575px;}

  .app1-O-top{height: 48px;width: 800px;border: 1px solid #bbb; border-left: 0;width: 100%;display: flex;justify-content: space-between;}
  .app1-O-topl>ul>li{float: left;line-height: 46px;margin-left: 30px;cursor: pointer;font-size: 14px;margin-right: 10px;height: 43px;}
  .app1-O-topl>ul .appLBg{border-bottom: 5px solid #3949ab;color: #20a0ff;}

  .app1-O-topr{margin-right: 45px;line-height: 48px;font-size: 12px;}
  .app1-O-topr>span>img{border-radius: 50%;}

  .app1-O-bot{margin-top: 20px;margin-left: 20px;width: 800px;border: 1px solid #bbb;height: 580px;}
  .botCount{height: 82px;width: 100%;border-bottom: 1px solid #bbb;}
  .botCount li{float: left;width: 80px;height: 80px;margin-left: 10px;border: 1px  solid #bbb;text-align: center;}
  .botCount li>p:nth-child(1){font-size: 14px;}
  .botCount li>p:nth-child(2){font-size: 18px;}
  .app1-O-bot>div:nth-child(2)>h4{margin: 0;padding: 0;height: 40px;line-height: 40px;border-bottom: 1px solid #bbb;padding-left: 30px;}
  .botTable{height: 400px;border-bottom: 1px solid #bbb;}
  #main{height: 400px;width: 800px;}
</style>