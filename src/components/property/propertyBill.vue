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
      <div class="botFirst">
        <div v-for="(time,index) in times" @click="timeClick(index)" :class="{'timeClass':isTime == index}">{{time}}</div>
        <div>
          搜索时间：
          <input type="text" v-model.number="wornYear" pattern="(19|20)\d{2}" maxlength="4">年
          <input type="text" v-model.number="wornMonth" pattern="([1-9]|0[1-9]|1[0-2])" maxlength="2">月
          <input type="text" v-model.number="wornDay" pattern="([1-9]|1[0-9]|2[0-9]|3[0-1])" maxlength="2">日 至：
          <input type="text" v-model.number="newYear" pattern="(19|20)\d{2}" maxlength="4">年
          <input type="text" v-model.number="newMonth" pattern="([1-9]|0[1-9]|1[0-2])" maxlength="2">月
          <input type="text" v-model.number="newDay" pattern="([1-9]|1[0-9]|2[0-9]|3[0-1])" maxlength="2">日
          <button @click="filter">搜索</button>
        </div>
      </div>
      <div>
        交易记录
      </div>
      <div class="botSeek">
        <ul>
          <li class="firstLi">
            <div>时间</div>
            <div>订单号</div>
            <div>收支</div>
            <div>项目</div>
            <div>序号</div>
          </li>
          <li v-for="list in lists">
            <div>{{list.time}}</div>
            <div>{{list.dingdan}}</div>
            <div>{{list.shouzhi}}</div>
            <div>{{list.xiangmu}}</div>
            <div>{{list.xuhao}}</div>
          </li>
          <li class="lastLi"></li>
        </ul>
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
        items: ['账单汇总'],
        times: ['日汇总', '月汇总'],
        isTime: 0,
        lists: [
          { time: '1111-11-11 12:12', dingdan: '1234121212121', shouzhi: '12312', xiangmu: '项目1', xuhao: '1' },
          { time: '1111-11-11 12:12', dingdan: '1234121212121', shouzhi: '12312', xiangmu: '项目1', xuhao: '2' },
          { time: '1111-11-11 12:12', dingdan: '1234121212121', shouzhi: '12312', xiangmu: '项目1', xuhao: '3' },
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
      timeClick: function (index) {
        this.isTime = index;
      },
      filter: function () {
        var oldDate = this.wornYear + '/' + this.wornMonth + '/' + this.wornDay
        var newDate = this.newYear + '/' + this.newMonth + '/' + this.newDay
        console.log('筛选', this.indent, this.stateSelect, oldDate, newDate)
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

  .app1-O-bot{margin-top: 20px;margin-left: 20px;width: 800px;border: 1px solid #bbb;min-height: 500px;}
  .app1-O-bot>div{border-bottom: 1px solid #bbb;}
  .timeClass{background-color: #ff7043;}
  .botFirst{display: flex;height: 50px;line-height: 50px;}
  .botFirst>div:nth-child(1){width: 100px;height: 40px;margin-top: 5px;margin-left: 3px;text-align: center;cursor: pointer;border: 1px solid #bbb;border-radius: 5px;line-height: 40px;}
  .botFirst>div:nth-child(2){height: 40px;margin-top: 5px;margin-left: 3px;width: 100px;text-align: center;cursor: pointer;border: 1px solid #bbb;border-radius: 5px;line-height: 40px;}
  .app1-O-bot>div:nth-child(2){height: 40px;line-height: 40px;padding-left: 20px;}
  .botSeek li{display: flex;height: 60px;line-height: 60px;text-align: center;border-bottom: 1px solid #bbb;}
  .botSeek li>div{width: 160px;}
  .botSeek .firstLi{height: 40px;line-height: 40px;}
  .botSeek .lastLi{height: 40px;border: 0;}

  input{width: 35px;height: 20px;font-size: 17px;border: 1px solid #bbb;border-radius: 5px;padding-left: 4px;line-height: 20px;font-size: 14px;}
  button{width: 70px;height: 30px;border: 1px solid #bbb;text-align: center;line-height: 27px;border-radius: 5px;margin-left: 20px;cursor: pointer;}
</style>