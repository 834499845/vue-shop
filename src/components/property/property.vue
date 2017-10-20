<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id="app" class="app1">
    <div class="appLeft">
      <ul>
        <li v-for="(item,index) in items" v-on:click="greet(index)" :class="{'appLBg':isBg == index}">{{item.name}}</li>
      </ul>
    </div>
    <div class="appRight">
      <router-view keep-alive></router-view>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'app1',
    data() {
      return {
        isBg: 1,
        items: [
          { "name": '资产', 'but': '' },
          { "name": '收入', 'but': 'income' },
          { "name": '交易记录', 'but': 'transaction' },
          { "name": '对账单', 'but': 'bill' }
        ]
      }
    },
    created: function () {
      var psthStr = this.$route.path.split('/')[3]
      if (psthStr == 'income') {
        this.isBg = 1
      }
      if (psthStr == 'transaction') {
        this.isBg = 2
      }
      if (psthStr == 'bill') {
        this.isBg = 3
      }
    },
    methods: {
      greet: function (index) {
        if (index > 0) {
          this.isBg = index;
          var ur = "/details/property/" + this.items[index].but;
          this.$router.push({ path: ur })
        }
      }
    }
  }
</script>

<style scoped>
  .app1{display: flex;height: 100%;min-height: 575px;}
  .appLBg{background-color: #c4c4c4;color: #f7ba2a;}
  .appLeft{width: 80px;background-color: white;border: 1px solid #bbb;border-left: 0;}
  .appLeft>ul>li{display: block;height: 35px;line-height: 35px;font-size: 14px;color: #101010;cursor: pointer;
    width: 80px;text-align: center;}
  .appLeft>ul>li:nth-child(1){
    height: 48px;line-height: 50px;border-bottom: 1px solid #bbb;}
  .appRight{width: 830px;overflow: hidden;background-color: white;}
</style>