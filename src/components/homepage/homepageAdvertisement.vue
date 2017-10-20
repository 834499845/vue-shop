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
          <div>位置</div>
          <div>缩略图</div>
          <div>操作</div>
        </li>
        <li>
          <div>顶部</div>
          <div class="botImg">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="liHeadel"><small @click="addAdve(1)">编辑-</small><small @click="start(1)">启用</small></div>
        </li>
        <li>
          <div>中部</div>
          <div class="botImg">
            <div></div>
          </div>
          <div class="liHeadel"><small @click="addAdve(2)">编辑-</small><small @click="start(2)">启用</small></div>
        </li>
        <li>
          <div>底部</div>
          <div class="botImg">
            <div></div>
            <div></div>
          </div>
          <div class="liHeadel"><small @click="addAdve(3)">编辑-</small><small @click="start(3)">启用</small></div>
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
        items: ['公共广告']
      }
    },
    methods: {
      addAdve: function (index) {
        var ur = "/details/homepage/homepageadd";
        this.$router.push({ path: ur })
      },
      start: function (index) {
        console.log('启动',index)
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
  .app1-O-bot>ul>li{width:100%;height:100px;border-bottom:1px solid #bbb;display:flex;justify-content: space-between;line-height: 100px;align-items: center;}
  .app1-O-bot>ul>li>div:nth-child(1){width: 150px;text-align: center;}
  .app1-O-bot>ul>li>div:nth-child(3){width: 150px;text-align: center;}
  .liHeadel>small{color: #2baf2b;}
  .app1-O-bot>ul>li>div:nth-child(3)>small{cursor: pointer;}
  .app1-O-bot>ul>li:nth-child(1){height:50px;line-height: 50px;}
  .botImg{display:flex;justify-content: center;}
  .botImg>div{width:80px;height:80px;border:1px solid #bbb;margin-left: 20px;}

</style>