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
      <ul>
        <li class="botOne">
          <div>
            日期：
            <input type="text" v-model.number="wornYear" pattern="(19|20)\d{2}">年
            <input type="text" v-model.number="wornMonth" pattern="([1-9]|0[1-9]|1[0-2])">月
            <input type="text" v-model.number="wornDay" pattern="([1-9]|1[0-9]|2[0-9]|3[0-1])">日 至：
            <input type="text" v-model.number="newYear" pattern="(19|20)\d{2}">年
            <input type="text" v-model.number="newMonth" pattern="([1-9]|0[1-9]|1[0-2])">月
            <input type="text" v-model.number="newDay" pattern="([1-9]|1[0-9]|2[0-9]|3[0-1])">日
            <small @click="sevenDay">最近七天</small>
            <small @click="onemonth">最近一个月</small>
          </div>
          <div>
            <button @click="filter">筛选</button>
          </div>
          <div class="botOneData">
            <div>
              <ul>
                <li class="OnelastLi">基础数据</li>
                <li v-for="base in bases">
                  <p>{{base.name}}</p>
                  <p>{{base.num}}</p>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li class="OnelastLi">转化数据</li>
                <li v-for="change in changes">
                  <p>{{change.name}}</p>
                  <p>{{change.num}}</p>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="botTwo">
          <h5>数据趋势</h5>
          <div>
            <div>
              <h7>浏览PV</h7>
              <div class="TwoTab" id="main">

              </div>
            </div>
            <div>
              <h7>访问排名</h7>
              <ul>
                <li v-for="(ranking,index) in rankings">{{index + 1}}.&nbsp;{{ranking}}</li>
              </ul>
            </div>
          </div>
        </li>
        <li class="botTherr">
          <h5>浏览详细数据</h5>
          <div class="TherrLi">
            <ul>
              <li v-for="tendency in tendencys">
                <div>{{tendency.name}}</div>
                <div>{{tendency.liulan}}</div>
                <div>{{tendency.waibu}}</div>
                <div>{{tendency.neibu}}</div>
                <div>{{tendency.tingliu}}</div>
                <div>{{tendency.fangwen}}</div>
              </li>
            </ul>
          </div>
        </li>
        <li class="botFour">
          <h5>访客地域分布</h5>
          <div class="Fourarea">
            <div>
              <span>高</span>
              <span></span>
              <span></span>
              <span>低</span>
            </div>
            <div class="ditu" style="width: 300px;height:200px;" id="mainAA">

            </div>
            <div>
              <h7>地区排名</h7>
              <ul>
                <li v-for="(area,index) in areas">{{index + 1}}.&nbsp;{{area}}</li>
              </ul>
            </div>
          </div>
        </li>
        <li class="botFive">
          <h5>地域详细数据</h5>
          <div class="fiveDatail">
            <ul>
              <li v-for="areaDatail in areaDatails">
                <div>{{areaDatail.id}}</div>
                <div>{{areaDatail.name}}</div>
                <div>{{areaDatail.liulanUV}}</div>
                <div>{{areaDatail.liulanPV}}</div>
                <div>{{areaDatail.fenxiang}}</div>
                <div>{{areaDatail.waibuPV}}</div>
                <div>{{areaDatail.time}}</div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
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
        items: ['页面转化数据'],
        bases: [
          { name: '浏览UV', num: '1' },
          { name: '浏览PV', num: '1' },
          { name: '外部分享', num: '1' },
          { name: '外部PV', num: '1' },
          { name: '平均停留时间', num: '1' },
          { name: '平均访问深度', num: '1' },
        ],
        changes: [
          { name: '商品曝光次数', num: '1' },
          { name: '商品浏览UV', num: '1' },
          { name: '下单笔数', num: '1' },
          { name: '付款订单', num: '1' },
          { name: '付款金额', num: '1' }
        ],
        rankings: ['页面转化数据1', '页面转化数据2', '页面转化数据3', '页面转化数据4', '页面转化数据5',],
        tendencys: [
          { name: '页面名称', liulan: '浏览PV/UV', waibu: '外部分享PV/UV', neibu: '内部分享PV/UV', tingliu: '平均停留时间', fangwen: '平均访问深度' },
          { name: 'banner', liulan: '', waibu: '', neibu: '', tingliu: '', fangwen: '' },
          { name: '今日最热', liulan: '', waibu: '', neibu: '', tingliu: '', fangwen: '' },
          { name: '数码', liulan: '', waibu: '', neibu: '', tingliu: '', fangwen: '' }
        ],
        areas: ['陕西', '北京', '重庆', '成都', '合肥',],
        areaDatails: [
          { id: '序号', name: '页面名称', liulanPV: '浏览PV', liulanUV: '浏览UV', fenxiang: '外部分享', waibuPV: '外部PV', time: '平局停留时间' },
          { id: '01', name: '陕西', liulanPV: '', liulanUV: '', fenxiang: '', waibuPV: '', time: '' },
          { id: '02', name: '北京', liulanPV: '', liulanUV: '', fenxiang: '', waibuPV: '', time: '' },
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
      sevenDay: function () {
        console.log('最近七天')
      },
      onemonth: function () {
        console.log('最近一个月')
      },
      filter: function () {
        var oldDate = this.wornYear + '/' + this.wornMonth + '/' + this.wornDay
        var newDate = this.newYear + '/' + this.newMonth + '/' + this.newDay
        console.log('筛选', oldDate, newDate)
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
            normal: {
              color: '#3949ab',
            }
          },
          barWidth: '40',
        }]
      });
      var myChart1 = echarts.init(document.getElementById('mainAA'));
      // 绘制图表
      myChart1.setOption(
        {
          title: {
            text: 'iphone销量',
            subtext: '纯属虚构',
            x: 'center'
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            data: ['iphone3', 'iphone4', 'iphone5']
          },
          dataRange: {
            min: 0,
            max: 2500,
            x: 'left',
            y: 'bottom',
            text: ['高', '低'],           // 文本，默认为数值文本
            calculable: true
          },
          toolbox: {
            show: true,
            orient: 'vertical',
            x: 'right',
            y: 'center',
            feature: {
              mark: { show: true },
              dataView: { show: true, readOnly: false },
              restore: { show: true },
              saveAsImage: { show: true }
            }
          },
          roamController: {
            show: true,
            x: 'right',
            mapTypeControl: {
              'china': true
            }
          },
          series: [
            {
              name: 'iphone3',
              type: 'map',
              mapType: 'china',
              roam: false,
              itemStyle: {
                normal: { label: { show: true } },
                emphasis: { label: { show: true } }
              },
              data: [
                { name: '北京', value: Math.round(Math.random() * 1000) },
                { name: '天津', value: Math.round(Math.random() * 1000) },
                { name: '上海', value: Math.round(Math.random() * 1000) },
                { name: '重庆', value: Math.round(Math.random() * 1000) },
                { name: '河北', value: Math.round(Math.random() * 1000) },
                { name: '河南', value: Math.round(Math.random() * 1000) },
                { name: '云南', value: Math.round(Math.random() * 1000) },
                { name: '辽宁', value: Math.round(Math.random() * 1000) },
                { name: '黑龙江', value: Math.round(Math.random() * 1000) },
                { name: '湖南', value: Math.round(Math.random() * 1000) },
                { name: '安徽', value: Math.round(Math.random() * 1000) },
                { name: '山东', value: Math.round(Math.random() * 1000) },
                { name: '新疆', value: Math.round(Math.random() * 1000) },
                { name: '江苏', value: Math.round(Math.random() * 1000) },
                { name: '浙江', value: Math.round(Math.random() * 1000) },
                { name: '江西', value: Math.round(Math.random() * 1000) },
                { name: '湖北', value: Math.round(Math.random() * 1000) },
                { name: '广西', value: Math.round(Math.random() * 1000) },
                { name: '甘肃', value: Math.round(Math.random() * 1000) },
                { name: '山西', value: Math.round(Math.random() * 1000) },
                { name: '内蒙古', value: Math.round(Math.random() * 1000) },
                { name: '陕西', value: Math.round(Math.random() * 1000) },
                { name: '吉林', value: Math.round(Math.random() * 1000) },
                { name: '福建', value: Math.round(Math.random() * 1000) },
                { name: '贵州', value: Math.round(Math.random() * 1000) },
                { name: '广东', value: Math.round(Math.random() * 1000) },
                { name: '青海', value: Math.round(Math.random() * 1000) },
                { name: '西藏', value: Math.round(Math.random() * 1000) },
                { name: '四川', value: Math.round(Math.random() * 1000) },
                { name: '宁夏', value: Math.round(Math.random() * 1000) },
                { name: '海南', value: Math.round(Math.random() * 1000) },
                { name: '台湾', value: Math.round(Math.random() * 1000) },
                { name: '香港', value: Math.round(Math.random() * 1000) },
                { name: '澳门', value: Math.round(Math.random() * 1000) }
              ]
            },
            {
              name: 'iphone4',
              type: 'map',
              mapType: 'china',
              itemStyle: {
                normal: { label: { show: true } },
                emphasis: { label: { show: true } }
              },
              data: [
                { name: '北京', value: Math.round(Math.random() * 1000) },
                { name: '天津', value: Math.round(Math.random() * 1000) },
                { name: '上海', value: Math.round(Math.random() * 1000) },
                { name: '重庆', value: Math.round(Math.random() * 1000) },
                { name: '河北', value: Math.round(Math.random() * 1000) },
                { name: '安徽', value: Math.round(Math.random() * 1000) },
                { name: '新疆', value: Math.round(Math.random() * 1000) },
                { name: '浙江', value: Math.round(Math.random() * 1000) },
                { name: '江西', value: Math.round(Math.random() * 1000) },
                { name: '山西', value: Math.round(Math.random() * 1000) },
                { name: '内蒙古', value: Math.round(Math.random() * 1000) },
                { name: '吉林', value: Math.round(Math.random() * 1000) },
                { name: '福建', value: Math.round(Math.random() * 1000) },
                { name: '广东', value: Math.round(Math.random() * 1000) },
                { name: '西藏', value: Math.round(Math.random() * 1000) },
                { name: '四川', value: Math.round(Math.random() * 1000) },
                { name: '宁夏', value: Math.round(Math.random() * 1000) },
                { name: '香港', value: Math.round(Math.random() * 1000) },
                { name: '澳门', value: Math.round(Math.random() * 1000) }
              ]
            },
            {
              name: 'iphone5',
              type: 'map',
              mapType: 'china',
              itemStyle: {
                normal: { label: { show: true } },
                emphasis: { label: { show: true } }
              },
              data: [
                { name: '北京', value: Math.round(Math.random() * 1000) },
                { name: '天津', value: Math.round(Math.random() * 1000) },
                { name: '上海', value: Math.round(Math.random() * 1000) },
                { name: '广东', value: Math.round(Math.random() * 1000) },
                { name: '台湾', value: Math.round(Math.random() * 1000) },
                { name: '香港', value: Math.round(Math.random() * 1000) },
                { name: '澳门', value: Math.round(Math.random() * 1000) }
              ]
            }
          ]
        }
      );
    }
  }
</script>

<style scoped>
  .app1-O{height: 100%;min-height: 575px;}

  .app1-O-top{height: 48px;border: 1px solid #bbb; border-left: 0;width: 100%;display: flex;justify-content: space-between;}
  .app1-O-topl>ul>li{float: left;line-height: 46px;margin-left: 30px;cursor: pointer;font-size: 14px;margin-right: 10px;height: 43px;}
  .app1-O-topl>ul .appLBg{border-bottom: 5px solid #3949ab;color: #20a0ff;}

  input{width: 45px;height: 20px;font-size: 17px;border: 1px solid #bbb;border-radius: 5px;font-size: 15px;padding-left: 10px;line-height: 20px;}
  button{color: white;width: 90px;height: 30px;border: 1px solid #bbb;background-color: #2baf2b;text-align: center;line-height: 27px;border-radius: 5px;cursor: pointer;}
  .botSeek .listHadle>p{color: #fff;}
  small{color: #2baf2b;}
  .app1-O-bot{margin-top: 20px;margin-left: 20px;width: 800px;border: 1px solid #bbb;min-height: 480px;overflow: hidden;margin-bottom: 20px;}
  .app1-O-bot>ul>li{min-height: 250px;border-bottom: 1px solid #bbb;width: 100%;}
  .app1-O-bot>ul>li:nth-child(5){border: 0;}
  .botOne>div:nth-child(1){height: 50px;line-height: 50px;padding-left: 20px;}
  .botOne>div:nth-child(2){height: 50px;line-height: 50px;padding-left: 20px;}
  .botOneData{height: 150px;border-top: 1px solid #bbb;overflow: hidden;}
  ul{margin: 0;padding: 0;}
  .botOneData>div:nth-child(1){height: 75px;width: 800px;border-bottom: 1px solid #bbb;}
  .botOneData li{float: left;width: 110px;height: 75px;text-align: center;}
  .botOneData .OnelastLi{line-height: 75px;border-right: 1px solid #bbb;width: 100px;}
  .botOneData li>p{margin-top: 8px;}
  h5{margin: 0;padding: 0;height: 40px;line-height: 40px;background-color: #bbb;font-size: 14px;padding-left: 20px;}
  .botTwo{height: 300px;overflow: hidden;}
  .botTwo>div>div{float: left;height: 258px;}
  .botTwo>div>div:nth-child(1){width: 370px;}
  .botTwo>div>div:nth-child(1){width: 425px;border-right: 1px solid #bbb;}
  h7{height: 30px;line-height: 30px;margin: 0;padding: 0;padding-left: 20px;}
  .TwoTab{width: 100%;height: 220px;border: 1px solid #bbb;overflow: hidden;}
  .botTwo li{height: 30px;line-height: 30px;padding-left: 20px;margin-top: 10px;}
  .botTherr{height: 250px;}
  .TherrLi ul{margin-top: 3px;}
  .TherrLi li{height: 50px;border-bottom: 1px solid #bbb;line-height: 50px;text-align: center;display: flex;text-align: center;}
  .TherrLi li:nth-child(1){border-top: 1px solid #bbb;}
  .TherrLi li>div{width: 130px;}
  .botFour{height: 300px;overflow: hidden;}
  .Fourarea>div{float: left;height: 240px;margin-top: 15px;margin-left: 5px;}
  .Fourarea>div:nth-child(1){width: 120px;display: flex;margin-left: 10px;}
  .Fourarea>div:nth-child(1) span{display: block;width: 30px;height: 30px;text-align: center;line-height: 30px;}
  .Fourarea>div:nth-child(1) span:nth-child(1){background-color: orange;}
  .Fourarea>div:nth-child(1) span:nth-child(2){background-color: red;}
  .Fourarea>div:nth-child(1) span:nth-child(3){background-color: forestgreen;}
  .Fourarea>div:nth-child(1) span:nth-child(4){background-color: #bbb;}
  .Fourarea .ditu{width: 510px;border: 1px solid red;height: 240px;}
  .Fourarea>div:nth-child(3){width: 140px;}
  .botFour li{height: 30px;line-height: 30px;margin-left: 15px;}
  .botFour li:nth-child(1){margin-top: 20px;}
  .fiveDatail li{height: 50px;border-bottom: 1px solid #bbb;line-height: 50px;text-align: center;display: flex;text-align: center;}
  .fiveDatail li>div{width: 120px;}
  #main{width: 425px;height: 250px;border: 0;}
  #mainAA{width: 400px;height: 300px;}
</style>