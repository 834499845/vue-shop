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
      <div>
        <h5>今日实时（最受更新2016-12-03 15:23）</h5>
        <div class="botToday">
          <ul>
            <li v-for="today in todays">
              <p>{{today.name}}</p>
              <p>{{today.num}}</p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h5>昨日概况</h5>
        <div class="botYester">
          <ul>
            <li v-for="yesterday in yesterdays">
              <p>{{yesterday.name}}</p>
              <p>{{yesterday.num}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'app1-O-top',
    data() {
      return {
        isBg: 0,
        items: ['数据概况'],
        todays: [
          { name: '浏览UV', num: '1' },
          { name: '浏览PV', num: '1' },
          { name: '贷款订单数', num: '1' },
          { name: '贷款金额（元）', num: '1' },
          { name: '付款商品件数', num: '1' },
        ],
        yesterdays: [
          { name: '浏览UV', num: '1' },
          { name: '浏览PV', num: '1' },
          { name: '内部访问PV', num: '1' },
          { name: '外部分享PV', num: '1' },
          { name: '下单笔数', num: '1' },
          { name: '付款笔数', num: '1' },
          { name: '发货订单', num: '1' },
          { name: '维权订单', num: '1' },
        ]
      }
    },
    methods: {
      greet: function (index) {
        this.isBg = index;
      }
    }
  }
</script>

<style scoped>
  .app1-O{height: 100%;min-height: 575px;}

  .app1-O-top{height: 48px;border: 1px solid #bbb; border-left: 0;width: 100%;display: flex;justify-content: space-between;}
  .app1-O-topl>ul>li{float: left;line-height: 46px;margin-left: 30px;cursor: pointer;font-size: 14px;margin-right: 10px;height: 43px;}
  .app1-O-topl>ul .appLBg{border-bottom: 5px solid #3949ab;color: #20a0ff;}

  .app1-O-topr{margin-right: 45px;line-height: 48px;font-size: 12px;}
  .app1-O-topr>span>img{border-radius: 50%;}

  .app1-O-bot{margin-top: 20px;margin-left: 20px;width: 800px;border: 1px solid #bbb;min-height: 480px;}
  .app1-O-bot>div:nth-child(1){height: 250px;border-bottom: 1px solid #bbb;}
  .app1-O-bot>div:nth-child(2){height: 250px;}
  h5{margin: 0;padding: 0;height: 40px;border-bottom: 1px solid #bbb;line-height: 40px;padding-left: 20px;font-size: 14px;}
  .botToday li{height: 90px;width: 180px;float: left;border: 1px solid #bbb;text-align: center;margin-left: 14px;margin-top: 8px;border-radius: 3px;overflow: hidden;}
  .botToday li>p:nth-child(2){font-size: 22px;line-height: 20px;}
  .botYester li{height: 90px;width: 180px;float: left;text-align: center;margin-left: 14px;margin-top: 8px;border-radius: 3px;overflow: hidden;}
</style>