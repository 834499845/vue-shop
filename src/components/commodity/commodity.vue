<template>
  <div id="app" class="commApp">
    <div>
      <div class="main-show">
        <div class="showNav">
          <h4>商城管理系统</h4>
          <span>欢迎来到商城管理系统</span>
        </div>
        <div class="showCont">
          <div class="showCountOne">
            <div class="CountOneO">
              <div class="CountOnedaO">
                <ul>
                  <li v-for="data in datas">
                    <p>{{data.num}}</p>
                    <p>{{data.name}}</p>
                  </li>
                </ul>
              </div>
              <div class="CountOnedaT">
                <div>
                  <div>
                    <p>$12,679</p>
                    <p>收入增长60%</p>
                  </div>
                  <div class="roundTable" id="round">

                  </div>
                </div>
              </div>
            </div>
            <div class="CountOneT" id="axis">

            </div>
          </div>
          <div class="showCounTwo">
            <div class="CTwoLeft" id="broken"></div>
            <div class="CTwoRight">
              <h6>商铺浏览近况</h6>
              <ul>
                <li>
                  <div><span>总浏览人数</span><span>40%</span></div>
                  <div class="progress">
                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
                      style="width: 40%"></div>
                  </div>
                </li>
                <li>
                  <div><span>查看人数</span><span>90%</span></div>
                  <div class="progress">
                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
      style="width: 90%"></div>
                  </div>
                </li>
                <li>
                  <div><span>购买人数</span><span>60%</span></div>
                  <div class="progress">
                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
      style="width: 60%"></div>
                  </div>
                </li>
                <li>
                  <div><span>付款人数</span><span>30%</span></div>
                  <div class="progress">
                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"
      style="width: 30%"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="showCountTherr">
            <div class="CTherrLeft">
              <h6>今日任务</h6>
              <div>
                <ul>
                  <li v-for="time in times">
                    <b>{{time.date}}</b><span class="glyphicon glyphicon-triangle-right"></span>&nbsp;&nbsp;&nbsp;&nbsp;<small>{{time.cont}}</small>
                  </li>
                </ul>
              </div>
            </div>
            <div class="CTherrRight">
              <div>
                <div id="roundOne">
                </div>
                <div id="roundTwo">
                </div>
              </div>
              <div>
                <div>
                  商品来源
                </div>
                <div>
                  商铺来源
                </div>
              </div>
            </div>
          </div>
          <div class="showCountFour">
            <div class="CountFourLeft">
              <ul>
                <li class="firstLi">
                  <div>
                    详情用户
                  </div>
                  <div>
                    <span></span><small>12</small>
                    <span></span><small>30</small>
                    <span></span><small>98</small>
                  </div>
                </li>
                <li v-for="team in teams">
                  <div>
                    <img :src="team.img" width="40" height="40" alt="">
                    <span>{{team.text}}</span>
                  </div>
                  <div>{{team.name}}</div>
                </li>
                <li class="lastLi">
                  <div>
                    <div><span class="glyphicon glyphicon-plus"></span></div>
                    <div>添加</div>
                  </div>
                  <div>32</div>
                </li>
              </ul>
            </div>
            <div class="CountFourRight">
              <ul>
                <li v-for="spon in spons">
                  <div>
                    <img :src="spon.img" width="40" height="40" alt="">
                    <span></span>
                  </div>
                  <div>
                    <p>{{spon.name}}</p>
                    <p>{{spon.text}}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="main-details">
        <div class="detailsNav">
          <div :class="{'detailsNavCl':isdetailsNavClA}" @click="detailsNavCl(1)">
            <span class="glyphicon glyphicon-user"></span>
          </div>
          <div :class="{'detailsNavCl':isdetailsNavClB}" @click="detailsNavCl(2)">
            <span class="glyphicon glyphicon-comment"></span>
          </div>
          <div :class="{'detailsNavCl':isdetailsNavClC}" @click="detailsNavCl(3)">
            <span class="glyphicon glyphicon-transfer"></span>
          </div>
        </div>
        <div class="detailsContent">
          <h6>{{htitle}}</h6>
          <div :class="{'detailsOne':isdetailsOne,'detaiOCl':isdetaiOCl}">
            <ul>
              <li v-for="detai in detailsones">
                <div>
                  <img :src="detai.img" width="45" height="45" alt="">
                  <span></span>
                </div>
                <div>
                  <p>{{detai.name}}</p>
                  <p>{{detai.text}}</p>
                </div>
              </li>
              <li class="lastLi">
                <button>查看更多</button>
              </li>
            </ul>
          </div>
          <div :class="{'detailsTwo':isdetailsTwo,'detaiTCl':isdetaiTCl}">
            <ul>
              <li v-for="detai in detailstwos">
                <div>
                  <img :src="detai.img" width="50" height="50" alt="">
                </div>
                <div>
                  <p>{{detai.name}}</p>
                  <p>{{detai.text}}</p>
                </div>
                <div>
                  <span class="glyphicon glyphicon-hand-right"></span>
                </div>
              </li>
            </ul>
          </div>
          <div :class="{'detailsTherr':isdetailsTherr,'detaiTrCl':isdetaiTrCl}">
            <ul>
              <li v-for="detai in detailstherrs">
                <div>
                  <p>{{detai.name}}</p>
                  <p>B&nbsp;{{detai.text}}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="detailsTimeline">
          <h6>最近情况</h6>
          <ul>
            <li v-for="timeline in timelines">
              <div class="TimelineOl">
                <span></span>
              </div>
              <div>
                <p>{{timeline.date}}</p>
                <p><b>{{timeline.name}}</b>&nbsp;{{timeline.cont}}</p>
              </div>
            </li>
            <li class="lastLi">
              <div class="TimelineOl">
                <span></span>
              </div>
              <div></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div>
      <div>© 2014 Copyright. </div>
      <div @click="toTop">返回顶部&nbsp;<span class="glyphicon glyphicon-arrow-up"></span></div>
    </div>
  </div>
</template>

<script>
  let echarts = require('echarts');
  export default {
    name: 'commApp',
    data() {
      return {
        tableImg: '',
        isdetailsNavClA: true,
        isdetailsNavClB: false,
        isdetailsNavClC: false,
        isBg: 1,
        items: [
          { "name": '商品管理', 'but': '' },
          { "name": '商品库', 'but': 'commoditydb' },
          { "name": '商品分类', 'but': 'commodityclass' }
        ],
        datas: [
          { name: '新增用户', num: '521' },
          { name: '新增商铺', num: '930' },
          { name: '新增数据', num: '221' },
          { name: '新增文件', num: '501' }
        ],
        times: [
          { date: '08:00', cont: '关闭1号商城' },
          { date: '10:15', cont: '三号商城开铺' },
          { date: '12:15', cont: '吃饭' },
          { date: '17:55', cont: '关闭三号商铺' }
        ],
        teams: [
          { name: 'admin', text: '关闭1号商城', img: '../static/img/raw_1482510356.jpeg' },
          { name: 'admin', text: '关闭1号商城', img: '../static/img/raw_1482510356.jpeg' },
          { name: 'admin', text: '关闭1号商城', img: '../static/img/raw_1482510356.jpeg' },
          { name: 'admin', text: '关闭1号商城', img: '../static/img/raw_1482510356.jpeg' },
        ],
        spons: [
          { name: 'admin', text: '关闭1号商城', img: '../static/img/raw_1482510356.jpeg' },
          { name: 'admin', text: '关闭1号商城', img: '../static/img/raw_1482510356.jpeg' },
          { name: 'admin', text: '关闭1号商城', img: '../static/img/raw_1482510356.jpeg' },
          { name: 'admin', text: '关闭1号商城', img: '../static/img/raw_1482510356.jpeg' },
          { name: 'admin', text: '关闭1号商城', img: '../static/img/raw_1482510356.jpeg' }
        ],
        timelines: [
          { date: '08:00', cont: '关闭1号商城', name: 'admin' },
          { date: '10:15', cont: '三号商城开铺三号商城开铺三号商城开铺三号商城开铺三号商城开铺', name: 'admin' },
          { date: '12:15', cont: '吃饭', name: 'admin' },
          { date: '17:55', cont: '关闭三号商铺', name: 'admin' },
          { date: '一月五日', cont: '开启7号商铺', name: 'admin' },
          { date: '一月九日', cont: '关闭F号商铺', name: 'admin' },
          { date: '一月二十四日', cont: '三号商铺隆重开业', name: 'admin' }
        ],
        htitle: '关系',
        detailsones: [
          { name: 'admin', text: '关闭1号商城', img: '../static/img/raw_1482510356.jpeg' },
          { name: 'admin', text: '关闭1号商城', img: '../static/img/raw_1482510356.jpeg' },
          { name: 'admin', text: '关闭1号商城', img: '../static/img/raw_1482510356.jpeg' },
          { name: 'admin', text: '关闭1号商城', img: '../static/img/raw_1482510356.jpeg' },
          { name: 'admin', text: '关闭1号商城', img: '../static/img/raw_1482510356.jpeg' }
        ],
        detailstwos: [
          { name: 'admin', text: '大约一分钟前', img: '../static/img/raw_1482510356.jpeg' },
          { name: 'admin', text: '1小时前', img: '../static/img/raw_1482510356.jpeg' },
          { name: 'admin', text: '3小时前', img: '../static/img/raw_1482510356.jpeg' },
          { name: 'admin', text: '一天前', img: '../static/img/raw_1482510356.jpeg' }
        ],
        detailstherrs: [
          { name: '早上9点', text: '150000' },
          { name: '早上11点', text: '200000' },
          { name: '下午3点', text: '21000' },
          { name: '下午7点', text: '3222' }
        ],
        isdetailsOne: true,
        isdetailsTwo: true,
        isdetailsTherr: true,
        isdetaiOCl: false,
        isdetaiTCl: true,
        isdetaiTrCl: true
      }
    },
    created: function () {
    },
    methods: {
      // 右侧小导航
      detailsNavCl: function (index) {
        if (index == 1) {
          this.isdetailsNavClA = true
          this.isdetailsNavClB = false
          this.isdetailsNavClC = false
          this.isdetaiOCl = false
          this.isdetaiTCl = true
          this.isdetaiTrCl = true
          this.htitle = '关系'
        }
        if (index == 2) {
          this.isdetailsNavClA = false
          this.isdetailsNavClB = true
          this.isdetailsNavClC = false
          this.isdetaiOCl = true
          this.isdetaiTCl = false
          this.isdetaiTrCl = true
          this.htitle = '聊天'
        }
        if (index == 3) {
          this.isdetailsNavClA = false
          this.isdetailsNavClB = false
          this.isdetailsNavClC = true
          this.isdetaiOCl = true
          this.isdetaiTCl = true
          this.isdetaiTrCl = false
          this.htitle = '联系'
        }
      },
      // 返回顶部
      toTop: function () {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
      }
    },
    // echarts 图标
    mounted() {
      var Axis = echarts.init(document.getElementById('axis'));
      Axis.setOption({
        backgroundColor: '#fff',
        title: {
          text: '商铺近况',
        },
        tooltip: {
          trigger: 'axis'
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '新增商品',
            type: 'line',
            stack: '总量',
            itemStyle: { normal: { areaStyle: { type: 'default' } } },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '销售商铺',
            type: 'line',
            stack: '总量',
            itemStyle: { normal: { areaStyle: { type: 'default' } } },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '热门商铺',
            type: 'line',
            stack: '总量',
            itemStyle: { normal: { areaStyle: { type: 'default' } } },
            data: [520, 332, 301, 334, 390, 330, 320]
          }
        ]
      });
      var Round = echarts.init(document.getElementById('round'));
      Round.setOption({
        backgroundColor: '#DDE6E9',
        tooltip: {
          trigger: 'item',
          formatter: "{b} : {c} ({d}%)"
        },
        series: [
          {
            type: 'pie',
            radius: '30',
            center: ['52%', '48%'],
            data: [
              { value: 335, name: '广告收入' },
              { value: 910, name: '商铺收入' }
            ]
          }
        ]
      });
      var Broken = echarts.init(document.getElementById('broken'));
      Broken.setOption({
        backgroundColor: '#fff',
        title: {
          text: '七月商铺详情',
        },
        tooltip: {
          trigger: 'axis'
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29']
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              formatter: '￥ {value}'
            }
          }
        ],
        series: [
          {
            name: '收入',
            type: 'line',
            data: ['111', '32', '23', '64', '15', '96', '107', '208', '109', '10', '11', '12', '13', '14', '15', '16', '17', '18', '519', '320', '21', '122', '23', '224', '25', '26', '27', '28', '29'],
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            markLine: {
              data: [
                { type: 'average', name: '平均值' }
              ]
            }
          }
        ]
      });
      var RoundOne = echarts.init(document.getElementById('roundOne'));
      RoundOne.setOption({
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        calculable: true,
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['40', '50'],
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              },
              emphasis: {
                label: {
                  show: false,
                }
              }
            },
            data: [
              { value: 335, name: '直接访问' },
              { value: 1310, name: '邮件营销' }
            ]
          }
        ]
      });
      var RoundTwo = echarts.init(document.getElementById('roundTwo'));
      RoundTwo.setOption({
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        calculable: true,
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['40', '50'],
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              },
              emphasis: {
                label: {
                  show: false,
                }
              }
            },
            data: [
              { value: 1335, name: '直接访问' },
              { value: 310, name: '邮件营销' }
            ]
          }
        ]
      });
      // 自适应
      window.onresize = function () {
        Axis.resize();
        Round.resize();
        Broken.resize();
        RoundOne.resize();
        RoundTwo.resize();
      }
    }
  }
</script>

<style scoped>
  .commApp>div:nth-child(1){display: flex;justify-content: space-between;width: calc(100vw - 217px);min-width: 800px;}
  .commApp>div:nth-child(2){width: calc(100vw - 217px);height: 50px;background-color: #EDF1F2;border-top: 1px solid #98A6AD;display: flex;justify-content: space-between;line-height: 50px;}
  .commApp>div:nth-child(2)>div:nth-child(1){margin-left: 20px;}
  .commApp>div:nth-child(2)>div:nth-child(2){margin-right: 20px;cursor: pointer;}
  .commApp>div:nth-child(2)>div:nth-child(2) a{color: #333;}
  .main-show{width: calc(100vw - 457px);min-width: 560px;}
  .showNav{width: 100%;height: 80px;background-color: #F6F8F8;border-bottom: 1px solid #bbb;}
  .showNav>span{padding-left: 30px;}
  h4{margin: 0;padding: 0;padding-top: 5px;height: 50px;line-height: 50px;padding-left: 30px;font-weight: 800;font-size: 20px;}
  .showCont{background-color: #F0F3F4;display: flex;flex-direction: column;}
  .showCountOne{height: 350px;width: 100%;display: flex;overflow: hidden;}
  .showCountOne>div:nth-child(1){min-width: 270px;width: 45%;}
  .CountOneO{display: flex;flex-direction: column;}
  .CountOnedaO li{border-radius: 3px;width: 40%;height: 95px;float: left;margin-left: 6.5%;margin-top: 14px;text-align: center;}
  .CountOnedaO li:nth-child(1){background-color: white;}
  .CountOnedaO li:nth-child(2){background-color: #7266BA;}
  .CountOnedaO li:nth-child(3){background-color: #23B7E5;}
  .CountOnedaO li:nth-child(4){background-color: #FFFFFF;}
  .CountOnedaO li:nth-child(1)>p:nth-child(1){color: #3AB9E5;}
  .CountOnedaO li:nth-child(2)>p:nth-child(1){color: #fff;}
  .CountOnedaO li:nth-child(3)>p:nth-child(1){color: #fff;}
  .CountOnedaO li:nth-child(4)>p:nth-child(1){color: #58666E;}
  .CountOnedaO li>p:nth-child(1){margin-top: 14px;font-size: 28px;font-weight: 100;color: #C0B2B7;}
  .CountOnedaO li>p:nth-child(2){color: #C0B2B7;}
  .CountOnedaT{width: 100%;height: 110px;margin-top: 20px;}
  .CountOnedaT>div{width: 86%;border-radius: 3px;height: 90px;margin: 0 auto;display: flex;}
  #round{width: 85px;height: 90px;}
  .CountOnedaT>div>div:nth-child(1){width: calc(100% - 85px);background-color: #E4EAEC;height: 90px;}
  .CountOnedaT>div>div:nth-child(1)>p:nth-child(1){font-size: 28px;text-align: center;color: #6254B2;margin-top: 5px;}
  .CountOnedaT>div>div:nth-child(1)>p:nth-child(2){text-align: center;color: #C0B2B7;}
  #axis{padding-top: 10px;min-width: 270px;width: 53%;border-radius: 4px;margin-top: 14px;height: 313px;background-color: white;overflow: hidden;}
  .showCounTwo{height: 330px;width: 100%;display: flex;overflow: hidden;}
  h6{margin: 0;padding: 0;height: 50px;line-height: 24px;padding-left: 10px;color: #333333;font-size: 17px;font-weight: 600;}
  .CTwoLeft{width: calc(100% - 280px);height: 335px;background-color: white;overflow: hidden;}
  .CTwoRight{width: 280px;height: 335px;background-color: #E4EAEC;}
  .CTwoRight li{height: 50px;width: 280px;margin-top: 9px;}
  .CTwoRight li>div:nth-child(1){display: flex;justify-content: space-between;margin-bottom: 5px;width: 250px;padding-left: 15px;}
  .CTwoRight li>div:nth-child(2){margin-bottom: 5px;margin-left: 15px;}
  .progress{height: 8px;width: 250px;}
  .progress-bar-success{height: 8px;}
  .CTwoRight li:nth-child(1) .progress-bar-success{background-color: #7266BA;}
  .CTwoRight li:nth-child(2) .progress-bar-success{background-color: #23B7E5;}
  .CTwoRight li:nth-child(3) .progress-bar-success{background-color: #FAD733;}
  .showCountTherr{height: 240px;width: 100%;margin-top: 20px;overflow: hidden;background-color: #FFFFFF;display: flex;}
  .CTherrLeft{width: 40%;position: relative;}
  .CTherrLeft::after{position: absolute;top: 15px;right: 10px;height: 210px;width: 1px;background-color: #bbb;content: "";}
  .CTherrLeft li{height: 40px;width: 90%;line-height: 40px;padding-left: 20px;display: flex;}
  .CTherrLeft li>b{display: inline-block;width: 50px;height: 25px;background-color: red;line-height: 25px;margin-top: 5px;text-align: center;color: white;}
  .CTherrLeft li>span{font-size: 25px;display: block;margin-left: -6px;margin-top: 5px;}
  .CTherrLeft li>small{font-size: 15px;}
  .CTherrLeft li:nth-child(1)>b{background-color: #FAD733;}
  .CTherrLeft li:nth-child(1)>span{color: #FAD733;}
  .CTherrLeft li:nth-child(3)>b{background-color: #23B7E5;}
  .CTherrLeft li:nth-child(3)>span{color: #23B7E5;}
  .CTherrLeft li:nth-child(2)>b{background-color: #7266BA;}
  .CTherrLeft li:nth-child(2)>span{color: #7266BA;}
  .CTherrLeft li:nth-child(4)>b{background-color: #EDF1F2;}
  .CTherrLeft li:nth-child(4)>span{color: #EDF1F2;}
  .CTherrRight{width: 60%;}
  .CTherrRight>div:nth-child(1){display: flex;margin: 0 auto;width: 80%;margin-top: 50px;justify-content: space-around;}
  .CTherrRight>div:nth-child(2){display: flex;margin: 0 auto;width: 80%;justify-content: space-around;}
  .CTherrRight>div:nth-child(1)>div{height: 150px;width: 150px;}
  .CTherrRight>div:nth-child(2)>div{height: 20px;width: 150px;text-align: center;}
  .showCountFour{min-height: 400px;width: 100%;margin-top: 20px;display: flex;overflow: hidden;}
  .CountFourLeft{width: 46%;margin-left: 3%;background-color: white;height: 100%;}
  .CountFourLeft>ul>li{height: 70px;border-bottom: 1px solid #bbb;display: flex;
  ;justify-content: space-between;line-height: 70px;}
  .CountFourLeft>ul>li>div:nth-child(1){margin-left: 15px;}
  .CountFourLeft>ul .firstLi{height: 50px;line-height: 50px;}
  .CountFourLeft>ul .firstLi>div:nth-child(2){display: flex;overflow: hidden;height: 50px;}
  .CountFourLeft>ul .firstLi>div:nth-child(2)>span:nth-child(1){display: block;width: 10px;height: 10px;background-color: #7266BA;margin-top: 20px;margin-right: 5px;border-radius: 50%;}
  .CountFourLeft>ul .firstLi>div:nth-child(2)>span:nth-child(3){display: block;width: 10px;height: 10px;background-color: #23B7E5;margin-top: 20px;margin-left: 5px;margin-right: 5px;border-radius: 50%;}
  .CountFourLeft>ul .firstLi>div:nth-child(2)>span:nth-child(5){display: block;width: 10px;height: 10px;background-color: #FAD733;margin-top: 20px;margin-right: 5px;margin-left: 5px;border-radius: 50%;}
  .CountFourLeft>ul>li>div:nth-child(2){margin-right: 15px;}
  .CountFourLeft>ul .lastLi{height: 50px;line-height: 50px;}
  .CountFourLeft>ul>li>div:nth-child(1) img{border-radius: 5px;}
  .CountFourLeft>ul .lastLi>div:nth-child(1){display: flex;}
  .CountFourLeft>ul .lastLi>div:nth-child(1)>div:nth-child(1){width: 30px;height: 30px;line-height: 30px;background-color: #665CA7;margin-top: 10px;text-align: center;color: white;border-bottom-left-radius: 3px;border-top-left-radius: 3px;}
  .CountFourLeft>ul .lastLi>div:nth-child(1)>div:nth-child(2){height: 30px;min-width: 100px;text-align: center;line-height: 30px;background-color: #7266BA;margin-top: 10px;border-top-right-radius: 3px;border-bottom-right-radius: 3px;}
  .CountFourLeft>ul .lastLi>div:nth-child(2){width: 30px;height: 20px;margin-top: 15px;border-radius: 10px;background-color: #bbb;line-height: 20px;text-align: center;}
  .CountFourRight{width: 46%;margin-left: 3%;height: 100%;}
  .CountFourRight>ul>li{display: flex;height: 70px;background-color: white;margin-top: 10px;cursor: pointer;border-radius: 3px;}
  .CountFourRight>ul>li:hover{background-color: rgb(244, 248, 248);}
  .CountFourRight>ul>li:nth-child(1){margin-top: 0;}
  .CountFourRight>ul>li>div:nth-child(1){line-height: 70px;margin-left: 15px;position: relative;}
  .CountFourRight>ul>li>div:nth-child(1)>span{position: absolute;width: 10px;height: 10px;top: 14px;left: 30px;background-color: red;border-radius: 50%;}
  .CountFourRight>ul>li:nth-child(2)>div:nth-child(1)>span{background-color: limegreen;}
  .CountFourRight>ul>li:nth-child(3)>div:nth-child(1)>span{background-color: orange;}
  .CountFourRight>ul>li:nth-child(5)>div:nth-child(1)>span{background-color: limegreen;}
  .CountFourRight>ul>li>div:nth-child(1) img{border-radius: 50%;overflow: hidden;}
  .CountFourRight>ul>li>div:nth-child(2){margin-left: 15px;}
  .CountFourRight>ul>li>div:nth-child(2)>p:nth-child(1){margin-top: 7px;}
  .main-details{width: 240px;min-height: 605px;background-color: white;}
  .detailsNav{width: 100%;height: 60px;border-bottom: 1px solid #EDF1F2;}
  .detailsNav>div{width: 79px;height: 60px;line-height: 60px;text-align: center;color: #98A6AD;float: left;font-size: 16px;cursor: pointer;}
  .detailsNav>div:hover{border-bottom: 1px solid #23B7E5;}
  .detailsNavCl{border-bottom: 1px solid #23B7E5;}
  .detailsContent{width: 100%;min-height: 300px;}
  .detailsContent h6{line-height: 50px;font-weight: 700;}
  .detaiOCl{display: none;}
  .detaiTCl{display: none;}
  .detaiTrCl{display: none;}
  .detailsOne>ul>li{display: flex;height: 70px;margin-top: 5px;}
  .detailsOne>ul>li>div:nth-child(1){margin-left: 15px;line-height: 70px;position: relative;}
  .detailsOne>ul>li>div:nth-child(1) img{border-radius: 50%;}
  .detailsOne>ul>li>div:nth-child(1) span{border-radius: 50%;position: absolute;width: 10px;height: 10px;background-color: red;top: 15px;left: 36px;}
  .detailsOne>ul>li:nth-child(3)>div:nth-child(1) span{background-color: orange;}
  .detailsOne>ul>li:nth-child(4)>div:nth-child(1) span{background-color: green;}
  .detailsOne>ul>li:nth-child(5)>div:nth-child(1) span{background-color: gray;}
  .detailsOne>ul>li>div:nth-child(2){margin-left: 15px;}
  .detailsOne>ul>li>div:nth-child(2)>p:nth-child(1){margin-top: 15px;}
  .detailsOne>ul .lastLi{height: 50px;text-align: center;}
  .detailsOne>ul .lastLi button{width: 180px;height: 30px;margin-top: 10px;margin-left: 40px;background-color: #7266BA;border: 0;border-radius: 3px;}
  .detailsTwo>ul>li{display: flex;height: 80px;margin-top: 5px;}
  .detailsTwo>ul>li>div:nth-child(1){margin-left: 15px;line-height: 80px;}
  .detailsTwo>ul>li>div:nth-child(1) img{border-radius: 50%;}
  .detailsTwo>ul>li>div:nth-child(2){width: 170px;padding-left: 20px;}
  .detailsTwo>ul>li>div:nth-child(3){margin-right: 15px;line-height: 80px;font-size: 20px;}
  .detailsTwo>ul>li>div:nth-child(2)>p:nth-child(1){margin-top: 15px;}
  .detailsTherr>ul>li{width: 200px;margin-left: 20px;height: 60px;margin-top: 10px;border: 1px solid #bbb;border-radius: 3px;padding-left: 10px;}
  .detailsTherr>ul>li p:nth-child(1){margin-top: 5px;color: #bbb;}
  .detailsTherr>ul>li:nth-child(1) p:nth-child(2){color: #23B7E5;}
  .detailsTherr>ul>li:nth-child(2) p:nth-child(2){color: #727ACC;}
  .detailsTherr>ul>li:nth-child(3) p:nth-child(2){color: #FAD733;}
  .detailsTimeline{margin-top: 40px;width: 100%;min-height: 400px;}
  .detailsTimeline>ul>li{display: flex;width: 240px;height: 60px;overflow: hidden;}
  .TimelineOl{width: 20px;margin-left: 15px;text-align: center;}
  .TimelineOl>span{width: 11px;height: 11px;display: inline-block;border-radius: 50%;background-color: #fff;border: 2px solid gray;position: relative;}
  .TimelineOl>span:before{content: "";position: absolute;top: 9px;left: 3.45px;width: 1px;height: 47px;background-color: gray;}
  .TimelineOl>span::after{content: "";position: absolute;bottom: 9px;left: 3.45px;width: 1px;height: 47px;background-color: gray;}
  .detailsTimeline>ul>li:nth-child(3) .TimelineOl>span:before{background-color: forestgreen;}
  .detailsTimeline>ul>li:nth-child(3) .TimelineOl>span{border: 2px solid forestgreen;}
  .detailsTimeline>ul>li:nth-child(4) .TimelineOl>span::after{background-color: forestgreen;}
  .detailsTimeline>ul>li:nth-child(4) .TimelineOl>span:before{background-color: purple;}
  .detailsTimeline>ul>li:nth-child(4) .TimelineOl>span{border: 2px solid purple;}
  .detailsTimeline>ul>li:nth-child(5) .TimelineOl>span::after{background-color: purple;}
  .detailsTimeline>ul>li:nth-child(5) .TimelineOl>span:before{background-color: orange;}
  .detailsTimeline>ul>li:nth-child(5) .TimelineOl>span{border: 2px solid orange;}
  .detailsTimeline>ul>li:nth-child(6) .TimelineOl>span::after{background-color: orange;}
  .detailsTimeline>ul>li:nth-child(6) .TimelineOl>span:before{background-color: paleturquoise;}
  .detailsTimeline>ul>li:nth-child(6) .TimelineOl>span{border: 2px solid paleturquoise;}
  .detailsTimeline>ul>li:nth-child(7) .TimelineOl>span::after{background-color: paleturquoise;}
  .detailsTimeline>ul .lastLi{height: 15px;}
  .detailsTimeline>ul>li>div:nth-child(2){width: 180px;margin-left: 10px;}
  .detailsTimeline>ul>li>div:nth-child(2) b{color: #4CCEF4;}
  .detailsTimeline>ul>li>div:nth-child(2) p:nth-child(1){color: #58666E;}
  .detailsTimeline>ul>li>div:nth-child(2) p:nth-child(2){color:#98A6B7;overflow: hidden;height: 22px;text-overflow: ellipsis;white-space: nowrap;line-height: 22px;}
</style>
