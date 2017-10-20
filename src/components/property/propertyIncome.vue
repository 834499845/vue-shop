<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id="app" class="app1-O">
    <div class="app1-O-top">
      <div class="app1-O-topl">
        <ul>
          <li v-for="(item,index) in items" v-on:click="greet(index)" :class="{'appLBg':isBg == index}">{{item}}</li>
        </ul>
      </div>
      <div class="app1-O-topr">
      </div>
    </div>
    <div class="app1-O-bot">
      <div class="botOne">
        <div>
          <div><img :src="image" alt="" width="100" height="100"></div>
          <div>
            <p>店铺名称：亿点商城</p>
            <p>经营区域：全国</p>
            <p>成立时间：2016-12-07</p>
          </div>
        </div>
        <div>支付方式设置</div>
      </div>
      <div class="botTwo">
        <div>
          <div>七日收入（截止昨日0点）</div>
          <div>明细</div>
        </div>
        <div class="botTutable" id="main">

        </div>
      </div>
      <div class="botTherr">
        <div>交易记录</div>
        <div>
          筛选日期：
          <input type="text" v-model.number="wornYear" pattern="(19|20)\d{2}" maxlength="4">年
          <input type="text" v-model.number="wornMonth" pattern="([1-9]|0[1-9]|1[0-2])" maxlength="2">月
          <input type="text" v-model.number="wornDay" pattern="([1-9]|1[0-9]|2[0-9]|3[0-1])" maxlength="2">日 至：
          <input type="text" v-model.number="newYear" pattern="(19|20)\d{2}" maxlength="4">年
          <input type="text" v-model.number="newMonth" pattern="([1-9]|0[1-9]|1[0-2])" maxlength="2">月
          <input type="text" v-model.number="newDay" pattern="([1-9]|1[0-9]|2[0-9]|3[0-1])" maxlength="2">日
          <button @click="filter">筛选</button>
        </div>
      </div>
      <div class="botSeek">
        <ul>
          <li class="fastLi">
            <div>商品名称</div>
            <div>序号</div>
            <div>时间</div>
            <div>订单号</div>
            <div>收入</div>
            <div>状态</div>
          </li>
          <li v-for="list in lists">
            <div>{{list.name}}</div>
            <div>{{list.xuhao}}</div>
            <div>{{list.time}}</div>
            <div>{{list.dingdan}}</div>
            <div>{{list.shouru}}</div>
            <div>{{list.zhuangtai}}</div>
          </li>
          <li class="lastLi"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  let echarts = require('echarts');
  export default {
    name: 'app1-O-top',
    data() {
      return {
        isBg: 0,
        // image: require('src/img/errimg.png'),
        items: ['收入'],
        lists: [
          { name: '商品1', xuhao: '1', time: '1111-11-11 12:12', dingdan: '121112333232', shouru: '13', zhuangtai: '已发货' },
          { name: '商品2', xuhao: '1', time: '1111-11-11 12:12', dingdan: '121112333232', shouru: '13', zhuangtai: '已发货' },
          { name: '商品3', xuhao: '1', time: '1111-11-11 12:12', dingdan: '121112333232', shouru: '13', zhuangtai: '已发货' }
        ],
        wornYear: "",
        wornMonth: "",
        wornDay: "",
        newYear: "",
        newMonth: "",
        newDay: "",
      }
    },
    methods: {
      greet: function (index) {
        this.isBg = index;
      },
      filter: function () {
        console.log('搜索')
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
          itemStyle: {
            normal: { color: '#3949ab' }
          }
        }]
      });
    }
  }
</script>

<style scoped>
  .app1-O{height: 100%;min-height: 575px;}

  .app1-O-top{height: 48px;border: 1px solid #bbb; border-left: 0;width: 100%;display: flex;justify-content: space-between;}
  .app1-O-topl>ul>li{float: left;line-height: 46px;margin-left: 30px;cursor: pointer;font-size: 14px;margin-right: 10px;height: 43px;}
  .app1-O-topl>ul .appLBg{border-bottom: 5px solid #3949ab;color: #20a0ff;}

  .app1-O-bot{margin-top: 20px;margin-left: 20px;width: 800px;border: 1px solid #bbb;min-height: 500px;}
  .botOne{display: flex;justify-content: space-between;height: 120px;border-bottom: 1px solid #bbb;}
  .botOne>div:nth-child(1){display: flex;}
  .botOne>div:nth-child(2){margin-top: 20px;margin-right: 30px;color: #2baf2b;cursor: pointer;}
  .botOne>div:nth-child(1)>div:nth-child(1){width: 100px;height: 100px;margin-top: 10px;margin-right: 20px;margin-left: 20px;}
  .botOne>div:nth-child(1)>div:nth-child(2)>p:nth-child(2){color: #2baf2b;}
  .botTwo{height: 440px;width: 100%;}
  .botTwo>div:nth-child(1){height: 40px;line-height: 40px;border-bottom: 1px solid #bbb;padding-left: 20px;display: flex;justify-content: space-between;}
  .botTwo>div:nth-child(1)>div:nth-child(2){margin-right: 40px;color: #2baf2b;}
  .botTwo>div:nth-child(2){height: 400px;border-bottom: 1px solid #bbb;}
  .botTherr{display: flex;justify-content: space-between;height: 40px;line-height: 40px;}
  .botTherr>div:nth-child(1){margin-left: 20px;}
  .botTherr>div:nth-child(2){margin-right: 20px;}
  .botSeek li{display: flex;height: 70px;line-height: 70px;text-align: center;border-bottom: 1px solid #bbb;}
  .botSeek .fastLi{height: 40px;line-height: 40px;border-top: 1px solid #bbb;}
  .botSeek .lastLi{height: 30px;}
  .botSeek li>div{width: 150px;}
  input{width: 35px;height: 20px;font-size: 17px;border: 1px solid #bbb;border-radius: 5px;padding-left: 4px;line-height: 20px;font-size: 15px;}
  button{width: 70px;height: 30px;border: 1px solid #bbb;background-color: #2baf2b;text-align: center;line-height: 27px;border-radius: 5px;margin-left: 10px;cursor: pointer;}
  #main{height: 400px;width: 800px;}
</style>