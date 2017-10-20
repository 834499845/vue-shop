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
      <div class="botTop">
        <div>
          <h3>数据截止昨日0点前</h3>
        </div>
        <div class="TopLi">
          <ul>
            <li v-for="top in tops">
              <h4>{{top.name}}TOP5</h4>
              <div v-for="(shuju,index) in top.datas">
                <span>{{index + 1}}.&nbsp;{{shuju.name}}</span>
                <span>{{shuju.liuliang}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="botSeek">
        <div>
          <div>
            <select v-model="ProvinceSelect">
                   <option v-for="province in provinces">{{province}}</option>
                </select>
            <select v-model="CitySelect">
                    <option v-for="city in citys">{{city}}</option>
                </select>
          </div>
          <div>
            日期：
            <input type="text" v-model.number="wornYear" maxlength="4">年
            <input type="text" v-model.number="wornMonth" maxlength="2">月
            <input type="text" v-model.number="wornDay" maxlength="2">日 至：
            <input type="text" v-model.number="newYear" maxlength="4">年
            <input type="text" v-model.number="newMonth" maxlength="2">月
            <input type="text" v-model.number="newDay" maxlength="2">日
            <button @click="filtrate">筛选</button>
          </div>
        </div>
        <div>
          <ul>
            <li class="fistLi">
              <div>商铺名称</div>
              <div>商铺区域</div>
              <div>联系方式</div>
              <div>创建日期</div>
              <div>在售商品数</div>
              <div>浏览量</div>
              <div>商品售出量</div>
              <div>成交金额</div>
              <div>操作</div>
            </li>
            <li v-for="(list,index) in lists">
              <div>{{list.name}}</div>
              <div>{{list.shengfen}}{{list.shiqu}}</div>
              <div>
                <p>{{list.username}}</p>
                <p>{{list.phone}}</p>
              </div>
              <div>{{list.time}}</div>
              <div>{{list.zaishou}}</div>
              <div>{{list.liulan}}</div>
              <div>{{list.shouchu}}</div>
              <div>{{list.chengjiao}}</div>
              <div class="listHadle">
                <p @click="tendency(index)">趋势</p>
                <p @click="done(index)">关闭</p>
                <p @click="Up(index)">进入</p>
              </div>
            </li>
            <li></li>
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
        ProvinceSelect: '省份',
        CitySelect: '城市',
        wornYear: "",
        wornMonth: "",
        wornDay: "",
        newYear: "",
        newMonth: "",
        newDay: "",
        items: ['数据汇总'],
        tops: [
          {
            name: '浏览量', datas: [
              { name: '11', liuliang: '111' },
              { name: '22', liuliang: '222' },
              { name: '33', liuliang: '333' },
              { name: '44', liuliang: '444' },
              { name: '55', liuliang: '555' },
            ]
          },
          {
            name: '商品售出量', datas: [
              { name: '1商品售出量1', liuliang: '111' },
              { name: '2商品售出量2', liuliang: '222' },
              { name: '商品售出量33', liuliang: '333' },
              { name: '4商品售出量4', liuliang: '444' },
              { name: '55商品售出量', liuliang: '555' },
            ]
          },
          {
            name: '在售商品数', datas: [
              { name: '1在售商品数1', liuliang: '111' },
              { name: '22在售商品数', liuliang: '222' },
              { name: '3在售商品数3', liuliang: '333' },
              { name: '4在售商品数4', liuliang: '444' },
              { name: '55在售商品数', liuliang: '555' },
            ]
          },
          {
            name: '成交金额', datas: [
              { name: '成交金额11', liuliang: '111' },
              { name: '成交金额22', liuliang: '222' },
              { name: '成交金额33', liuliang: '333' },
              { name: '成交金额44', liuliang: '444' },
              { name: '成交金额55', liuliang: '555' },
            ]
          },
        ],
        provinces: ['省份', '陕西', '河北'],
        citys: ['城市', '西安', '石家庄'],
        lists: [
          { name: '1', shengfen: '陕西', shiqu: '西安', username: '大宝', phone: '12312341234', time: '1111-11-11', zaishou: '231', liulan: '3123', shouchu: '312', chengjiao: '3123', },
          { name: '2', shengfen: '陕西', shiqu: '西安', username: '大宝', phone: '12312341234', time: '1111-11-11', zaishou: '231', liulan: '3123', shouchu: '312', chengjiao: '3123', },
          { name: '3', shengfen: '陕西', shiqu: '西安', username: '大宝', phone: '12312341234', time: '1111-11-11', zaishou: '231', liulan: '3123', shouchu: '312', chengjiao: '3123', }
        ]
      }
    },
    methods: {
      greet: function (index) {
        this.isBg = index;
      },
      filtrate: function () {
        console.log('筛选')
        var wornMonth = (this.wornMonth * 1) >= 10 ? this.wornMonth : '0' + this.wornMonth
        var wornDay = (this.wornDay * 1) >= 10 ? this.wornDay : '0' + this.wornDay
        var newMonth = (this.newMonth * 1) >= 10 ? this.newMonth : '0' + this.newMonth
        var newDay = (this.newDay * 1) >= 10 ? this.newDay : '0' + this.newDay
        var wornStr = this.wornYear + '-' + wornMonth + '-' + wornDay
        var newStr = this.newYear + '-' + newMonth + '-' + newDay

        console.log(wornStr, newStr, this.ProvinceSelect, this.CitySelect)
      },
      tendency: function (index) {
        console.log('趋势')
      },
      done: function (index) {
        console.log('关闭')
      },
      Up: function (index) {
        console.log('进入')
      }
    }
  }
</script>

<style scoped>
  .app1-O{height: 100%;min-height: 575px;}

  .app1-O-top{height: 48px;border: 1px solid #bbb; border-left: 0;width: 100%;display: flex;justify-content: space-between;}
  .app1-O-topl>ul>li{float: left;line-height: 46px;margin-left: 30px;cursor: pointer;font-size: 14px;margin-right: 10px;height: 43px;}
  .app1-O-topl>ul .appLBg{border-bottom: 5px solid #3949ab;color: #20a0ff;}

  .app1-O-bot{margin-top: 20px;margin-left: 20px;width: 800px;border: 1px solid #bbb;}
  .botTop>div:nth-child(1)>h3{margin: 0;padding: 0;}
  .botTop>div:nth-child(1){height: 30px;line-height: 30px;border-bottom: 1px solid #bbb;}
  .TopLi{width: 100%;height: 560px;overflow: hidden;border-bottom: 1px solid #bbb;}
  .TopLi>ul{width: 100%;height: 500px;}
  .TopLi li{width: 350px;height: 230px;border: 1px solid #bbb;float: left;
  margin-left: 32px;margin-top: 30px;border-radius: 5px;}
  .TopLi li div:nth-child(1){border: 1px solid red;}
  .TopLi li>h4{text-align: center;}
  .TopLi li>div{display: flex;justify-content: space-between;margin-top: 8px;text-align: center;}
  .TopLi li>div>span:nth-child(1){margin-left: 15px;}
  .TopLi li>div>span:nth-child(2){width: 130px;text-align: center;display: block;}
  .botSeek{width: 100%;}
  .botSeek>div:nth-child(1){display: flex;justify-content: space-between;border-bottom: 1px solid #bbb;height: 50px;line-height: 50px;overflow: hidden;}
  .botSeek>div:nth-child(1)>div:nth-child(1){display: flex;margin-left: 20px;text-align: center;}
  .botSeek>div:nth-child(2)>ul li{display: flex;height: 100px;border-bottom: 1px solid #bbb;line-height: 100px;}
  .botSeek>div:nth-child(2)>ul .fistLi{height: 50px;line-height: 50px;}
  .botSeek>div:nth-child(2)>ul li>div{width: 100px;text-align: center;}
  .botSeek>div:nth-child(2)>ul li>div:nth-child(3){width: 140px;}
  .botSeek>div:nth-child(2)>ul li>div:nth-child(3)>p{line-height: 30px;height: 30px;}
  .botSeek>div:nth-child(2)>ul li>div:nth-child(9)>p{line-height: 20px;height: 20px;border: 1px solid #bbb;margin: 0;padding: 0;margin-top: 9px;background-color: lightskyblue;border-radius: 5px;margin-right: 5px;}
  select{display:block;width:70px;height:25px;border:1px solid #bbb;border-radius:5px;margin-top: 11px;margin-right: 20px;font-size: 16px;line-height: 25px;}
  input{width: 45px;height: 20px;font-size: 17px;border: 1px solid #bbb;border-radius: 5px;padding-left: 10px;line-height: 20px;font-size: 15px;}
  button{color: white;width: 70px;height: 30px;border: 1px solid #bbb;background-color: #2baf2b;text-align: center;line-height: 30px;border-radius: 5px;}
  .botSeek .listHadle>p{color: #fff;cursor: pointer;}
</style>