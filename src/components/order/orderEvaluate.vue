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
          <div><img :src="headImg" alt=""></div>
          <div>
            <p>SUP马克</p>
            <p>手机号：12312311231</p>
          </div>
        </div>
        <div>
          <div><img :src="showImg" alt=""></div>
          <div>
            <p>商品名称</p>
            <p>
              <small>￥1999</small><small>X1</small>颜色：黑<small></small>
            </p>
          </div>
        </div>
      </div>
      <div class="botBot">
        <div>
          <div>评价：</div>
          <div>这是一个评价这是一个评价这是一个评价这是一个评价这是一个评价这是一个评价这是一个评价这是一个评价这是一个评价这是一个评价这是一个评价这是一个评价这是一个评价这是一个评价这是一个评价这是一个评价这是一个评价这是一个评价这是一个评价这是一个评价这是一个评价这是一个评价这是一个评价这是一个评价这是一个评价这是一个评价这是一个评价这是一个评价这是一个评价这是一个评价这是一个评价这是一个评价这是一个评价这是一个评价这是一个评价这是一个评价这是一个评价这是一个评价这是一个评价这是一个评价这是一个评价</div>
        </div>
        <div>
          <div>评星：</div>
          <div class="botImage">
            <img src="" alt="亮">
            <img src="" alt="灭">
            <img src="" alt="灭">
            <img src="" alt="灭">
            <img src="" alt="灭">
          </div>
        </div>
        <div>
          <div>图评：</div>
          <div>
            <img :src="commitImg" alt="">
            <small>缩略图，可方法查看</small>
          </div>
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
                items: ['全部', '好评', '中评', '差评', ],
                // commitImg: require('src/img/errimg.png'),
                // showImg: require('src/img/errimg.png'),
                // headImg: require('src/img/errimg.png'),
            }
        },
        methods: {
            greet: function(index) {
                this.isBg = index;
            }
        }
    }
</script>

<style scoped>
    .app1-O {
        height: 100%;
        min-height: 575px;
    }
    
    .app1-O-top {
        height: 48px;
        border: 1px solid #bbb;
        border-left: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    
    .app1-O-topl>ul>li {
        float: left;
        line-height: 46px;
        margin-left: 30px;
        cursor: pointer;
        font-size: 14px;
        margin-right: 10px;
        height: 43px;
    }
    
    .app1-O-topl>ul .appLBg {
        border-bottom: 5px solid #3949ab;
        color: #20a0ff;
    }
    
    .app1-O-topr {
        margin-right: 45px;
        line-height: 48px;
        font-size: 12px;
    }
    
    .app1-O-topr>span>img {
        border-radius: 50%;
    }
    
    .app1-O-bot {
        margin-top: 20px;
        margin-left: 20px;
        width: 800px;
        border: 1px solid #bbb;
        min-height: 500px;
    }
    
    .botTop {
        display: flex;
    }
    
    .botTop>div {
        width: 50%;
        border-bottom: 1px solid #bbb;
        display: flex;
    }
    
    .botTop>div:nth-child(1) {
        border-right: 1px solid #bbb;
    }
    
    .botTop>div>div:nth-child(1)>img {
        width: 70px;
        height: 70px;
        margin-top: 10px;
        margin-right: 20px;
        margin-left: 15px;
    }
    
    .botTop>div:nth-child(1)>div:nth-child(1)>img {
        border-radius: 50%;
    }
    
    .botTop>div:nth-child(2)>div:nth-child(2)>p:nth-child(2)>small {
        margin-left: 10px;
        margin-right: 10px;
    }
    
    .botBot>div {
        width: 100%;
        display: flex;
        min-height: 40px;
        line-height: 40px;
        margin-top: 15px;
    }
    
    .botBot>div:nth-child(1)>div:nth-child(2) {
        width: 700px;
    }
    
    .botBot>div:nth-child(3)>div:nth-child(2)>img {
        width: 120px;
        height: 70px;
    }
    
    .botBot>div>div:nth-child(1) {
        width: 80px;
        text-align: center;
    }
    
    .botImage>img {
        display: block;
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
    }
    
    .botImage {
        display: flex;
    }
</style>