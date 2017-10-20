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
      <div class="botprobably">
        <div class="bottitle">
          <div>商品概况</div>
          <div>
            日期：
            <input type="text" v-model.number="wornYear" pattern="(19|20)\d{2}">年
            <input type="text" v-model.number="wornMonth" pattern="([1-9]|0[1-9]|1[0-2])">月
            <input type="text" v-model.number="wornDay" pattern="([1-9]|1[0-9]|2[0-9]|3[0-1])">日 至：
            <input type="text" v-model.number="newYear" pattern="(19|20)\d{2}">年
            <input type="text" v-model.number="newMonth" pattern="([1-9]|0[1-9]|1[0-2])">月
            <input type="text" v-model.number="newDay" pattern="([1-9]|1[0-9]|2[0-9]|3[0-1])">日
            <button @click="filter">筛选</button>
          </div>
        </div>
        <div class="probablyData">
          <ul>
            <li v-for="probably in probablys">
              <p>{{probably.name}}</p>
              <p>{{probably.num}}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="botparticulars">
        <div class="bottitle">
          <div>商品详情</div>
          <div>
            <div @click="search"><img :src="seekImg" alt=""></div>
            <div>
              <input type="text" v-model="seek" placeholder="输入商品进行搜索">
            </div>
          </div>
        </div>
        <div class="particularsLi">
          <ul>
            <li class="firstLi">
              <div>商品名称</div>
              <div>曝光次数</div>
              <div>曝光人数</div>
              <div>浏览人数</div>
              <div>浏览次数</div>
              <div>付款人数</div>
              <div>售出件数</div>
            </li>
            <li v-for="datail in lists">
              <div class="secondname">
                <div><img :src="nameImg" alt=""></div>
                <div>
                  <p>{{datail.name}}</p>
                  <p>￥{{datail.money}}</p>
                </div>
              </div>
              <div class="heigh">{{datail.baoci}}</div>
              <div class="heigh">{{datail.baoren}}</div>
              <div class="heigh">{{datail.liuci}}</div>
              <div class="heigh">{{datail.liuren}}</div>
              <div class="heigh">{{datail.fukuan}}</div>
              <div class="secondtendency">
                <p>{{datail.shouchu}}</p>
                <p>趋势图</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'app1-O',
    data() {
      return {
        isBg: 0,
        items: ['商品分析'],
        // seekImg: require('src/img/seek.png'),
        // nameImg: require('src/img/errimg.png'),
        probablys: [
          { name: '在售商品', num: '1' },
          { name: '售罄商品', num: '1' },
          { name: '仓储商品', num: '1' },
          { name: '被访问商品数', num: '1' },
          { name: '商品浏览人数', num: '1' },
          { name: '商品浏览次数', num: '1' },
          { name: '付款商品数', num: '1' }
        ],
        wornYear: "",
        wornMonth: "",
        wornDay: "",
        newYear: "",
        newMonth: "",
        newDay: "",
        lists: [],
        datails: [
          { name: '美的指令真是好的电动你打多少', money: '1', baoci: '1', baoren: '1', liuci: '1', liuren: '1', fukuan: '23', shouchu: '1' },
          { name: '美的指令真是好的电动你打多少', money: '2', baoci: '2', baoren: '2', liuci: '2', liuren: '2', fukuan: '23', shouchu: '2' },
          { name: '美的指令真是好的电动你打多少', money: '3', baoci: '3', baoren: '3', liuci: '3', liuren: '3', fukuan: '23', shouchu: '3' },
          { name: '美的指令真是好的电动你打多少', money: '4', baoci: '4', baoren: '4', liuci: '4', liuren: '4', fukuan: '23', shouchu: '4' },
          { name: '美的指令真是好的电动你打多少', money: '5', baoci: '5', baoren: '5', liuci: '5', liuren: '5', fukuan: '23', shouchu: '5' },
          { name: '美的指令真是好的电动你打多少', money: '6', baoci: '6', baoren: '6', liuci: '6', liuren: '6', fukuan: '23', shouchu: '6' },
          { name: '美的指令真是好的电动你打多少', money: '7', baoci: '7', baoren: '7', liuci: '7', liuren: '7', fukuan: '23', shouchu: '7' },
          { name: '美的指令真是好的电动你打多少', money: '8', baoci: '8', baoren: '8', liuci: '8', liuren: '8', fukuan: '23', shouchu: '8' }
        ],
        seek: ''
      }
    },
    created: function () {
      this.lists = this.datails
    },
    methods: {
      greet: function (index) {
        this.isBg = index;
      },
      search: function () {
        console.log('搜索')
        var arr = this.datails;
        var seaStr = this.seek;
        var searchs = []
        var seeks = []
        arr.forEach(function (ele) {
          var str = ''
          for (var key in ele) {
            str += ele[key]
          }
          searchs.push(str);
          if (searchs.length == arr.length) {
            searchs.forEach(function (ele, index) {
              if (ele.indexOf(seaStr) > -1) {
                seeks.push(arr[index])
              }
            })
          }
        })
        this.lists = seeks
      },
      filter: function () {
        var oldDate = this.wornYear + '/' + this.wornMonth + '/' + this.wornDay
        var newDate = this.newYear + '/' + this.newMonth + '/' + this.newDay
        console.log('筛选', oldDate, newDate)
      }
    }
  }
</script>

<style scoped>
  .app1-O{height: 100%;min-height: 575px;}
  .app1-O-top{height: 48px;border: 1px solid #bbb; border-left: 0;width: 100%;display: flex;justify-content: space-between;}
  .app1-O-topl>ul>li{float: left;line-height: 46px;margin-left: 30px;cursor: pointer;font-size: 14px;margin-right: 10px;height: 43px;}
  .app1-O-topl>ul .appLBg{border-bottom: 5px solid #3949ab;color: #20a0ff;}

  .app1-O-bot{margin-top: 20px;margin-left: 20px;width: 800px;border: 1px solid #bbb;min-height: 480px;}
  .bottitle{display: flex;justify-content: space-between;height: 40px;line-height: 40px;background-color: #bbb;font-size: 14px;}
  .bottitle>div:nth-child(1){margin-left: 20px;}
  .bottitle>div:nth-child(2){margin-right: 20px;display: flex;align-items: center
  ;height: 40px;overflow: hidden;}
  .bottitle>div:nth-child(2) img{margin-top: 15px;}
  .botparticulars .bottitle>div:nth-child(2) input{width: 200px;}

  .botprobably{height: 300px;}
  .probablyData li{height: 100px;border-bottom: 1px solid #bbb;width: 200px;float: left;text-align: center;}
  .probablyData li>p:nth-child(2){font-size: 22px;}
  .botparticulars{min-height: 400px;}
  
  .particularsLi li{height: 100px;border-bottom: 1px solid #bbb;display: flex;text-align: center;overflow: hidden;}
  .particularsLi .firstLi{height: 40px;line-height: 40px;}
  .particularsLi li>div{width: 85px;}
  .particularsLi li>div:nth-child(1){width: 275px;}
  .particularsLi .secondname{display: flex;margin-top: 5px;}
  .secondname img{width: 70px;height: 70px;margin-top: 10px;margin-left: 15px;}
  .secondname p{margin: 0;padding: 0;margin-top: 5px;text-align: left;}
  .secondname p:nth-child(2){color: red;padding-left: 15px;} 
  .heigh{line-height: 100px;}
  .secondtendency p{margin: 0;padding: 0;}
  .secondtendency p:nth-child(1){margin-top: 40px;}
  .secondtendency p:nth-child(2){margin-top: 18px;color: #2baf2b;cursor: pointer;}
  .secondname p:nth-child(1){font-size: 15px;padding-left: 5px;height: 45px;} 
  input{width: 45px;height: 20px;font-size: 17px;border: 1px solid #bbb;border-radius: 5px;padding-left: 8px;font-size: 15px;line-height: 20px;}
  button{color: white;width: 90px;height: 30px;border: 1px solid #bbb;background-color: #2baf2b;text-align: center;line-height: 27px;border-radius: 5px;margin-left: 15px;cursor: pointer;}
</style>