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
        <h6>工具选择</h6>
        <div class="selectTop">
          <ul>
            <li v-for="(tool,index) in tools" @click="toolClick(index)" :class="{toolCl:isTool == index}">{{tool}}</li>
          </ul>
        </div>
      </div>
      <div>
        <h6>分享渠道</h6>
        <div class="selectBot">
          <ul>
            <li v-for="(share,index) in shares" @click="shareClick(index)" :class="{shareCl:isShare == index}">{{share}}</li>
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
        items: ['促销中心'],
        tools: ['优惠券', '优惠码', '满减/送', '多人拼团', '团购', '支付有礼', '限时折扣', '订单返现', '优惠套餐', '秒杀', '赠品', '多人成团', '找人代付', '我要送礼'],
        shares: ['微信', '微博', 'QQ', '圈子'],
        isTool: 0,
        isShare: 0
      }
    },
    created: function () {
    },
    methods: {
      greet: function (index) {
        this.isBg = index;
      },
      toolClick: function (index) {
        this.isTool = index;
        var url = "/details/sales/salesdetail"
        this.$router.push({ path: url, query: { cid: index} })
      },
      shareClick: function (index) {
        this.isShare = index;
        var url = "/details/sales/salesdetail"
        this.$router.push({ path: url, query: { cid: index } })
      }
    }
  }
</script>

<style scoped>
  .app1-O{height: 100%;min-height: 575px;}
  /*.toolCl, .shareCl{background-color: #20a0ff;}*/
  .app1-O-top{height: 48px;border: 1px solid #bbb; border-left: 0;width: 100%;display: flex;justify-content: space-between;}
  .app1-O-topl>ul>li{float: left;line-height: 46px;margin-left: 30px;cursor: pointer;font-size: 14px;margin-right: 10px;height: 43px;}
  .app1-O-topl>ul .appLBg{border-bottom: 5px solid #3949ab;color: #20a0ff;}

  .app1-O-bot{margin-top: 20px;margin-left: 20px;width: 800px;border: 1px solid #bbb;min-height: 600px;}
  h6{margin: 0;padding: 0;height: 40px;line-height: 40px;font-size: 14px;padding-left: 20px;}
  .app1-O-bot>div:nth-child(1){height: 400px;border-bottom: 1px solid #bbb;}
  .app1-O-bot>div:nth-child(2){height: 150px;border-bottom: 1px solid #bbb;}
  .app1-O-bot li{width: 150px;height: 40px;border: 2px solid #bbb;float: left;margin-left: 36px;text-align: center;line-height: 40px;margin-top: 30px;border-radius: 3px;cursor: pointer;}
</style>
