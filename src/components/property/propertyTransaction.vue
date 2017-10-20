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
      <div class="botOne botOT">
        <div>
          创建时间：
          <input type="text" v-model.number="wornYear" pattern="(19|20)\d{2}" maxlength="4">年
          <input type="text" v-model.number="wornMonth" pattern="([1-9]|0[1-9]|1[0-2])" maxlength="2">月
          <input type="text" v-model.number="wornDay" pattern="([1-9]|1[0-9]|2[0-9]|3[0-1])" maxlength="2">日 至：
          <input type="text" v-model.number="newYear" pattern="(19|20)\d{2}" maxlength="4">年
          <input type="text" v-model.number="newMonth" pattern="([1-9]|0[1-9]|1[0-2])" maxlength="2">月
          <input type="text" v-model.number="newDay" pattern="([1-9]|1[0-9]|2[0-9]|3[0-1])" maxlength="2">日
        </div>
        <div>
          交易状态：
          <select v-model="stateSelect">
            <option v-for="state in states">{{state}}</option>
          </select>
        </div>
      </div>
      <div class="botTwo botOT">
        <div>订单号&nbsp;&nbsp;&nbsp;&nbsp;：<input type="text" v-model="indent"></div>
        <div><small @click="sevenDay">最近七天</small><small @click="oneMonth">最近一个月</small></div>
      </div>
      <div class="botTherr">
        <button @click="filter">筛选</button><button>导出报表</button>
      </div>
      <div class="botFour">
        <div v-for="(state,index) in statebs" @click="fourClick(index)" :class="{'fourClass':isFourClass == index}">{{state}}</div>
      </div>
      <div class="botFive">
        交易记录
      </div>
      <div class="botSeek">
        <ul>
          <li class="fastLi">
            <div>时间</div>
            <div>订单号</div>
            <div>收入</div>
            <div>商品名称</div>
            <div>序号</div>
          </li>
          <li v-for="list in lists">
            <div>{{list.time}}</div>
            <div>{{list.dingdan}}</div>
            <div>￥{{list.shouru}}</div>
            <div>{{list.name}}</div>
            <div>{{list.id}}</div>
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
        items: ['交易记录'],
        indent: '',
        stateSelect: '成功',
        states: [
          '成功', '进行时', '退款中', '失败',
        ],
        statebs: [
          '全部', '成功', '进行时', '退款中', '失败',
        ],
        isFourClass: 0,
        lists: [
          { time: '1111-11-11 12:12', dingdan: '1231111123123', shouru: '3123', name: '111', id: '1', state: '1' },
          { time: '1111-11-11 12:12', dingdan: '1231111123123', shouru: '3123', name: '222', id: '2', state: '2' },
          { time: '1111-11-11 12:12', dingdan: '1231111123123', shouru: '3123', name: '222', id: '3', state: '3' },
          { time: '1111-11-11 12:12', dingdan: '1231111123123', shouru: '3123', name: '222', id: '4', state: '4' },
          { time: '1111-11-11 12:12', dingdan: '1231111123123', shouru: '3123', name: '222', id: '22', state: '2' },
          { time: '1111-11-11 12:12', dingdan: '1231111123123', shouru: '3123', name: '222', id: '11', state: '1' }
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
      fourClick: function (index) {
        this.isFourClass = index;
      },
      filter: function () {
        var oldDate = this.wornYear + '/' + this.wornMonth + '/' + this.wornDay
        var newDate = this.newYear + '/' + this.newMonth + '/' + this.newDay
        console.log('筛选', this.indent, this.stateSelect, oldDate, newDate)
      },
      sevenDay: function () {
        console.log('七天')
      },
      oneMonth: function () {
        console.log('最近一个月')
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
  .app1-O-bot>div{width: 100%;border-bottom: 1px solid #bbb;}
  .botOT{height: 40px;line-height: 40px;display: flex;justify-content: space-between;}
  .botOne>div:nth-child(2){display: flex;}
  .botOT>div:nth-child(1){margin-left: 20px;}
  .botTwo>div>input{width: 200px;}
  .botTwo>div:nth-child(2)>small{color: #2baf2b;font-size: 14px;margin-right: 30px;cursor: pointer;}
  .botTherr{height: 40px;line-height: 40px;width: 100%;}
  .botTherr>button:nth-child(1){width: 70px;margin-top: 5px;background-color: #2baf2b;}
  .botTherr>button:nth-child(2){width: 100px;margin-top: 5px;background-color: #fff;}
  .botFour{height: 40px;display: flex;}
  .botFive{height: 40px;line-height: 40px;padding-left: 20px;}
  .botFour>div{width: 70px;height: 32px;border: 1px solid #bbb;text-align: center;line-height: 32px;margin-top: 4px;border-radius: 3px;cursor: pointer;}
  .fourClass{background-color: #ffa726;}
  .botSeek li{border-bottom: 1px solid #bbb;display: flex;height: 70px;line-height: 70px;text-align: center;}
  .botSeek li>div{width: 160px;}
  .botSeek .lastLi{height: 40px;border: 0;}
  .botSeek .fastLi{height: 40px;line-height: 40px;}

  input{width: 45px;height: 20px;font-size: 17px;border: 1px solid #bbb;border-radius: 5px;padding-left: 4px;line-height: 20px;font-size: 14px;}
  button{width: 70px;height: 30px;border: 1px solid #bbb;text-align: center;line-height: 27px;border-radius: 5px;margin-left: 20px;cursor: pointer;}
  select{display:block;width:70px;height:30px;border:1px solid #bbb;border-radius:5px;font-size: 16px;margin-right: 20px;margin-top: 5px;}
</style>