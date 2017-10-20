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
        <li>
          <div class="bottitle">
            <div>交易概况</div>
            <div>
              日期：
              <input type="text" v-model.number="wornYear" pattern="(19|20)\d{2}">年
              <input type="text" v-model.number="wornMonth" pattern="([1-9]|0[1-9]|1[0-2])">月
              <input type="text" v-model.number="wornDay" pattern="([1-9]|1[0-9]|2[0-9]|3[0-1])">日
              <button @click="filter(1)">筛选</button>
            </div>
          </div>
          <div class="botdeal">
            <ul>
              <li v-for="deal in deals">
                <p>{{deal.name}}</p>
                <p>{{deal.num}}</p>
                <p>较前一天下降了{{deal.percent}}</p>
              </li>
            </ul>
          </div>
          <div class="botdealTab">
            图表
          </div>
        </li>
        <li>
          <div class="bottitle">
            <div>交易对象</div>
            <div>
              日期：
              <input type="text" v-model.number="wornYear" pattern="(19|20)\d{2}">年
              <input type="text" v-model.number="wornMonth" pattern="([1-9]|0[1-9]|1[0-2])">月
              <input type="text" v-model.number="wornDay" pattern="([1-9]|1[0-9]|2[0-9]|3[0-1])">日
              <button @click="filter(2)">筛选</button>
            </div>
          </div>
          <div class="botobject">
            <ul>
              <li>
                <div>购买者</div>
                <div>付款人数</div>
                <div>与上一月对比</div>
                <div>付款金额</div>
                <div>与上一月对象比</div>
              </li>
              <li v-for="obj in objs">
                <div>{{obj.name}}</div>
                <div>{{obj.num}}</div>
                <div>{{obj.numb}}</div>
                <div>{{obj.money}}</div>
                <div>{{obj.moneyb}}</div>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div class="bottitle">
            <div>订单分布</div>
            <div>
              日期：
              <input type="text" v-model.number="wornYear" pattern="(19|20)\d{2}">年
              <input type="text" v-model.number="wornMonth" pattern="([1-9]|0[1-9]|1[0-2])">月
              <input type="text" v-model.number="wornDay" pattern="([1-9]|1[0-9]|2[0-9]|3[0-1])">日 至：
              <input type="text" v-model.number="newYear" pattern="(19|20)\d{2}">年
              <input type="text" v-model.number="newMonth" pattern="([1-9]|0[1-9]|1[0-2])">月
              <input type="text" v-model.number="newDay" pattern="([1-9]|1[0-9]|2[0-9]|3[0-1])">日
              <button @click="filter(3)">筛选</button>
            </div>
          </div>
          <div class="botdistr">
            <ul>
              <li v-for="distribution in distributions">
                <p>{{distribution.name}}</p>
                <p>订单量：{{distribution.num}}</p>
                <p>占比{{distribution.percent}}</p>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div class="bottitle">
            <div>地域分布</div>
            <div>
              日期：
              <input type="text" v-model.number="wornYear" pattern="(19|20)\d{2}">年
              <input type="text" v-model.number="wornMonth" pattern="([1-9]|0[1-9]|1[0-2])">月
              <input type="text" v-model.number="wornDay" pattern="([1-9]|1[0-9]|2[0-9]|3[0-1])">日 至：
              <input type="text" v-model.number="newYear" pattern="(19|20)\d{2}">年
              <input type="text" v-model.number="newMonth" pattern="([1-9]|0[1-9]|1[0-2])">月
              <input type="text" v-model.number="newDay" pattern="([1-9]|1[0-9]|2[0-9]|3[0-1])">日
              <button @click="filter(4)">筛选</button>
            </div>
          </div>
          <div class="botterritory">
            <div class="territoryAtlas">

            </div>
            <div class="territoryLi">
              <ul>
                <li>
                  <div>排名</div>
                  <div>省/市</div>
                  <div>付款金额</div>
                  <div>付款人数</div>
                  <div>浏览数</div>
                </li>
                <li v-for="territory in territorys">
                  <div>{{territory.id}}</div>
                  <div>{{territory.area}}</div>
                  <div>{{territory.money}}</div>
                  <div>{{territory.payment}}</div>
                  <div>{{territory.browse}}</div>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'app1-O-top',
    data() {
      return {
        isBg: 0,
        items: ['交易分析'],
        deals: [
          { name: '浏览人数', num: '1', percent: '%5' },
          { name: '下单笔数', num: '1', percent: '%5' },
          { name: '下单人数', num: '1', percent: '%5' },
          { name: '下单金额', num: '1', percent: '%5' },
          { name: '付款金额', num: '1', percent: '%5' },
          { name: '付款人数', num: '1', percent: '%5' },
          { name: '付款件数', num: '1', percent: '%5' }
        ],
        objs: [
          { name: '初次购买者', num: '900', numb: '%5', money: '123', moneyb: '79%' },
          { name: '多次购买者', num: '900', numb: '%5', money: '123', moneyb: '79%' }
        ],
        distributions: [
          { name: '美的质量真的不错电饭煲', num: '1111', percent: '%23' },
          { name: '海尔质量真的不错电饭煲', num: '133', percent: '%51' },
          { name: '安卓质量真的不错电饭煲', num: '211', percent: '%15' }
        ],
        territorys: [
          { area: '陕西', id: '1', money: '555', payment: '123', browse: '79%' },
          { area: '陕西', id: '2', money: '555', payment: '123', browse: '79%' },
          { area: '陕西', id: '3', money: '555', payment: '123', browse: '79%' },
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
      filter: function (index) {
        console.log('筛选', index)
      }
    }
  }
</script>

<style scoped>
  .app1-O{height: 100%;min-height: 575px;}

  .app1-O-top{height: 48px;border: 1px solid #bbb; border-left: 0;width: 100%;display: flex;justify-content: space-between;}
  .app1-O-topl>ul>li{float: left;line-height: 46px;margin-left: 30px;cursor: pointer;font-size: 14px;margin-right: 10px;height: 43px;}
  .app1-O-topl>ul .appLBg{border-bottom: 5px solid #3949ab;color: #20a0ff;}
   input{width: 45px;height: 20px;font-size: 17px;border: 1px solid #bbb;border-radius: 5px;padding-left: 8px;line-height: 20px;font-size: 15px;}
   button{color: white;width: 90px;height: 30px;border: 1px solid #bbb;background-color: #2baf2b;text-align: center;line-height: 27px;border-radius: 5px;margin-left: 15px;}
  .app1-O-bot{margin-top: 20px;margin-left: 20px;width: 800px;border: 1px solid #bbb;min-height: 480px;overflow: hidden;margin-bottom: 30px;}
  .app1-O-bot>ul>li{min-height: 250px;}
  .bottitle{display: flex;justify-content: space-between;height: 40px;line-height: 40px;background-color: #bbb;font-size: 14px;}
  .bottitle>div:nth-child(1){margin-left: 20px;}
  .bottitle>div:nth-child(2){margin-right: 20px;display: flex;align-items: center
  ;height: 40px;overflow: hidden;}
  .app1-O-bot>ul>li:nth-child(1){height: 570px;overflow: hidden;}
  .botdeal {height: 230px;border-bottom: 1px solid #bbb;}
  .botdeal li{width: 150px;height: 100px;border: 1px solid #bbb;float: left;text-align: center;margin-top: 5px;margin-left: 7px;border-radius: 4px;margin-bottom: 6px;}
  .botdeal li>p{margin: 0;padding: 0;font-size: 15px;margin-top: 7px;}
  .botdeal li>p:nth-child(3){color: red;}
  .app1-O-bot>ul>li:nth-child(2){min-height: 200px;overflow: hidden;}
  .botdealTab{height: 300px;width: 800px;}
  .botobject li{height: 50px;line-height: 50px;text-align: center;border-bottom: 1px solid #bbb;}
  .botobject li>div{width: 155px;float: left;}
  .app1-O-bot>ul>li:nth-child(3){min-height: 100px;overflow: hidden;}
  .botdistr li{width: 250px;height: 120px;border: 1px solid #bbb;float: left;text-align: center;margin-top: 5px;margin-left: 10px;border-radius: 4px;margin-bottom: 6px;}
  .botdistr li>p{margin: 0;padding: 0;font-size: 15px;margin-top: 15px;}
  .botdistr li>p:nth-child(3){color: red;}
  .app1-O-bot>ul>li:nth-child(4){min-height: 400px;overflow: hidden;}
  .botterritory{display: flex;justify-content: space-between;padding-top: 30px;}
  .territoryAtlas{width: 350px;border: 1px solid #bbb;height: 300px;}
  .territoryLi{width: 445px;height: 300px;border: 1px solid #bbb;}
  .territoryLi li{height: 50px;line-height: 50px;text-align: center;border-bottom: 1px solid #bbb;}
  .territoryLi li>div{width: 87px;float: left;}
</style>