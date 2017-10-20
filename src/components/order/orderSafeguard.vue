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
        下单时间：
        <input type="text" v-model.number="wornYear" pattern="(19|20)\d{2}" maxlength="4">年
        <input type="text" v-model.number="wornMonth" pattern="([1-9]|0[1-9]|1[0-2])" maxlength="2">月
        <input type="text" v-model.number="wornDay" pattern="([1-9]|1[0-9]|2[0-9]|3[0-1])" maxlength="2">日 至：
        <input type="text" v-model.number="newYear" pattern="(19|20)\d{2}" maxlength="4">年
        <input type="text" v-model.number="newMonth" pattern="([1-9]|0[1-9]|1[0-2])" maxlength="2">月
        <input type="text" v-model.number="newDay" pattern="([1-9]|1[0-9]|2[0-9]|3[0-1])" maxlength="2">日
        <small @click="sevenDay">近七天</small>
      </div>
      <div>
        搜索订单：
        <select v-model="orderSelect">
            <option v-for="order in orders">{{order}}</option>
          </select>
        <input type="text" v-model="orderInput" placeholder="请输入搜索信息">
      </div>
      <div class="typeSeek">
        <div>
          <div>订单类型：</div>
          <select v-model="seekSelect">
            <option v-for="seekType in seekTypes">{{seekType}}</option>
          </select>
        </div>
        <div>
          订单状态：
          <select v-model="stateSelect">
            <option v-for="state in states">{{state}}</option>
          </select>
        </div>
      </div>
      <div class="typeSeek">
        <div>
          维权进度：
          <select v-model="protectSelect">
            <option v-for="protect in protects">{{protect}}</option>
          </select>
        </div>
        <div>
          付款方式：
          <select v-model="paySelect">
            <option v-for="pay in pays">{{pay}}</option>
          </select>
        </div>
      </div>
      <div>
        <button @click="filter">筛选</button>
      </div>
      <div class="botType">
        <div v-for="(type,index) in types" @click="typeClick(index)" :class="{typeClass:isTypeClass == index}">{{type}}</div>
      </div>
      <div class="botSeek">
        <ul>
          <li></li>
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
        items: ['维权订单'],
        types: ['全部', '退款申请', '退款处理中', '已结束'],
        isTypeClass: 0,
        orders: ['订单号', '收货人姓名', '收货人地址', '收货人电话',],
        seekTypes: ['全部', '团购', '单买'],
        states: ['全部', '已发货', '已付款'],
        protects: ['全部', '退款处理中', '退款结束'],
        pays: ['全部', '支付宝', '微信', '余额宝'],
        wornYear: "", wornMonth: "", wornDay: "", newYear: "", newMonth: "", newDay: "",
        orderInput: '',
        orderSelect: '订单号',
        seekSelect: '全部',
        stateSelect: '全部',
        protectSelect: '全部',
        paySelect: '全部',
      }
    },
    methods: {
      greet: function (index) {
        this.isBg = index;
      },
      typeClick: function (index) {
        this.isTypeClass = index;
      },
      filter: function () {
        var wornMonth = this.wornMonth < 10 ? '0' + this.wornMonth : this.wornMonth;
        var wornDay = this.wornDay < 10 ? '0' + this.wornDay : this.wornDay;
        var newMonth = this.newMonth < 10 ? '0' + this.newMonth : this.newMonth;
        var newDay = this.newDay < 10 ? '0' + this.newDay : this.newDay;

        var oldDate = this.wornYear + '/' + wornMonth + '/' + wornDay
        var newDate = this.newYear + '/' + newMonth + '/' + newDay
        console.log('筛选', oldDate, newDate, this.orderInput, this.orderSelect, this.seekSelect, this.stateSelect, this.protectSelect, this.paySelect)
      },
      sevenDay:function(){
        console.log('搜索最近七天')
      }
    }
  }
</script>

<style scoped>
  .app1-O{height: 100%;min-height: 575px;}

  .app1-O-top{height: 48px;border: 1px solid #bbb; border-left: 0;width: 100%;display: flex;justify-content: space-between;}
  .app1-O-topl>ul>li{float: left;line-height: 46px;margin-left: 30px;cursor: pointer;font-size: 14px;margin-right: 10px;height: 43px;}
  .app1-O-topl>ul .appLBg{border-bottom: 5px solid #3949ab;color: #20a0ff;}

  .app1-O-bot{margin-top: 20px;margin-left: 20px;width: 800px;border: 1px solid #bbb;min-height: 580px;}
  .app1-O-bot>div:nth-child(1){padding-left: 20px;height: 40px;line-height: 40px;}
  .app1-O-bot>div:nth-child(2){padding-left: 20px;display: flex;height: 40px;;line-height: 40px;}
  .app1-O-bot>div:nth-child(2)>input{margin-top: 5px;width: 150px;}
  .app1-O-bot>div:nth-child(2)>select{width: 150px;}
  .typeSeek{padding-left: 20px;display: flex;height: 40px;line-height: 40px;}
  .typeSeek>div{display: flex;width: 350px;}
  .botType{border-bottom: 1px solid #bbb;height: 40px;line-height: 40px;text-align: center;}
  .botType>div{float: left;width: 100px;border-left: 1px solid #bbb;border-right: 1px solid #bbb;cursor: pointer;}
  .typeClass{background-color: #FFA726;}
  .app1-O-bot>div:nth-child(5){margin-top: 10px;height: 40px;border-bottom: 1px solid #bbb;}
  .botSeek li{height: 100px;border-bottom: 1px solid #bbb;}


  input{width: 50px;height: 25px;border: 1px solid #bbb;border-radius: 5px;padding-left: 5px;line-height: 20px;font-size: 15px;}
  button{width: 90px;height: 30px;border: 1px solid #bbb;background-color: #2baf2b;text-align: center;line-height: 27px;border-radius: 5px;margin-left: 20px;font-size: 15px;cursor: pointer;}
  select{display:block;width:120px;height:30px;border:1px solid #bbb;border-radius:5px;font-size: 16px;margin-right: 20px;margin-top: 5px;text-align: center;}
  small{color: #2baf2b;cursor: pointer;}
</style>