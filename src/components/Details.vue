<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id="app" class="home">
    <div class="H-left">
      <div class="leftLogo">
        <img :src="logoImg" alt="">
      </div>
      <div class="leftMain">
        <div :class="{'leftPersonal':isleftPersonal,'leftPersonalClass':isleftPersonalClass}">
          <div>
            <img :src="headImg" width="110" height="110" alt="">
          </div>
          <div @click="headClick">
            <span>Admin</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="glyphicon glyphicon-triangle-bottom"></span>
          </div>
          <div>
            <small>oneone</small>
          </div>
          <transition name="slide-fade">
            <div v-if="headShow" class="headPopup">
              <div>
                <span class="glyphicon glyphicon-triangle-top"></span>
              </div>
              <div class="headPopupM">
                <div>
                  <div>
                    300-500 used
                  </div>
                  <div class="progress">
                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 60%"></div>
                  </div>
                </div>
                <div>
                  <ul>
                    <li>
                      <div>Settings</div>
                      <div></div>
                    </li>
                    <li>
                      <div>Profile</div>
                      <div></div>
                    </li>
                    <li>
                      <div>Notifications</div>
                      <div>4</div>
                    </li>
                    <li>
                      <div>Logout</div>
                      <div></div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </transition>
        </div>
        <div class="leftNav">
          <ul>
            <li v-for="(item,index) in items" @click="fadeClick(index,$event)" :class="{'LiShow':isLiShow == index}">
              <div :class="{'LiOne':isLiOne}" @click="oneClick">
                <img class="AA" :src="item.img" alt="">
                <b class="AA">{{item.name}}</b>
                <span :class="{'glyphicon':isglyphicon,'glyphicon-chevron-right':isglyphiconchevronright,'spanRot':isSpanRot == index}"></span>
              </div>
              <transition name="navleft-fade">
               <div class="LiTwo" v-show="navLeftShow = true ? LiTwo == index : false">
                 <ul>
                   <li v-for="(del,ind) in item.dels" @click="routeClick(ind)">
                     {{del.name}}
                   </li>
                 </ul>
              </div>
               </transition>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="H-right">
      <div class="rightNav">
        <div class="nav-left">
          <div class="gry xiaoxiHide">

          </div>
          <div @click="userClick" class="gry">
            <span class="glyphicon glyphicon-user"></span>
          </div>
          <div @click="newClick" class="gry xiaoxiHide">
            <span>New</span>&nbsp;&nbsp;<span class="glyphicon glyphicon-triangle-bottom"></span>
          </div>
          <div class="gry seekHide">
            <input type="text" placeholder="搜索">
            <img :src="seekImg" alt="">
          </div>
          <div :class="{'newPopup':isnewPopup,'showNew':isshowNew}">
            <ul>
              <li>
                <div>Projects</div>
                <div></div>
              </li>
              <li>
                <div>Task</div>
                <div>5</div>
              </li>
              <li>
                <div>User</div>
                <div></div>
              </li>
              <li>
                <div>Email</div>
                <div>4</div>
              </li>
            </ul>
          </div>
        </div>
        <div class="nav-right">
          <div @click="fullClick" class="rih xiaoxiHide">
            <span :class="{'glyphicon':isglyphicon,'glyphicon-resize-full':isglyphiconresizefull,'glyphicon-resize-small':isglyphiconresizesmall}"></span>
          </div>
          <div @click="bellClick" class="rih xiaoxiHide">
            <span class="glyphicon glyphicon-bell"></span>
            <div>6</div>
          </div>
          <div class="rih">
            <div @click="showRClick">
              <span>Admin</span>&nbsp;&nbsp;<span class="glyphicon glyphicon-triangle-bottom"></span>
            </div>
            <div @click="showRClick">
              <img :src="headImg" width="45" height="45" alt="">
            </div>
            <transition name="slide-fade">
              <div v-if="headShowR" class="headPopupR">
                <div class="headPopupMR">
                 <div>
                   <div>
                     300-500 used
                   </div>
                   <div class="progress">
                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 60%"></div>
                   </div>
                 </div>
                 <div>
                   <ul>
                     <li>
                      <div>Settings</div>
                      <div>3</div>
                     </li>
                     <li>
                       <div>Profile</div>
                       <div></div>
                     </li>
                     <li>
                       <div>Help</div>
                       <div>new</div>
                      </li>
                      <li>
                       <div>Logout</div>
                       <div></div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </transition>
          </div>
          <transition name="slide-fade">
            <div v-if="bellShow" class="bellPopup">
              <ul>
               <li>
                <div>Projects</div>
                <div></div>
               </li>
               <li>
                <div>Task</div>
                <div>5</div>
               </li>
               <li>
                <div>User</div>
                <div></div>
               </li>
               <li>
                <div>Email</div>
                <div>4</div>
               </li>
              </ul>
            </div>
          </transition>
        </div>
      </div>
      <div class="rightMain">
        <router-view keep-alive></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        isglyphicon: true,
        isglyphiconresizefull: true,
        isglyphiconresizesmall: false,
        isglyphicon: true,
        isglyphiconchevronright: true,
        isLiOne: true,
        ind: 0,
        isSpanRot: 0,
        LiTwo: 0,
        isLiShow: 0,
        show: true,
        isFull: true,
        logoImg: '../static/img/logoImg.png',
        headImg: '../static/img/raw_1482510356.jpeg',
        seekImg: '../static/img/seekImg.png',
        items: [
          {
            "name": '商品首页', 'but': 'commodity', img: "../static/img/01.png", dels: [
              { "name": '商品近况', 'but': 'commoditydb' },
              { "name": '商品分类', 'but': 'commodityclass' },
            ]
          },
          {
            "name": '订单管理', 'but': 'order', img: "../static/img/02.png", dels: [
              { "name": '订单概况', 'but': 'orderGeneral' },
              { "name": '所有订单', 'but': 'orderAll' },
              { "name": '维权订单', 'but': 'orderSafeguard' },
              { "name": '评价订单', 'but': 'orderEvaluate' }
            ]
          },
          {
            "name": '促销活动', 'but': 'sales', img: "../static/img/03.png", dels: [
              { "name": '促销中心', 'but': 'salesSacenter' }
            ]
          },
          {
            "name": '资产数据', 'but': 'property', img: "../static/img/04.png", dels: [
              { "name": '资产收入', 'but': 'propertyIncome' },
              { "name": '交易记录', 'but': 'propertyTransaction' },
              { "name": '对比账单', 'but': 'propertyBill' }
            ]
          },
          {
            "name": '数据中心', 'but': 'datas', img: "../static/img/05.png", dels: [
              { "name": '数据概况', 'but': 'datasRoughly' },
              { "name": '页面流量', 'but': 'datasFlow' },
              { "name": '商品分析', 'but': 'datasCommodity' },
              { "name": '交易分析', 'but': 'datasDeal' }
            ]
          },
          {
            "name": '客户信息', 'but': 'client', img: "../static/img/06.png", dels: [
              { "name": '客户管理', 'but': 'clientCustomer' }
            ]
          },
          {
            "name": '主页信息', 'but': 'homepage', img: "../static/img/07.png", dels: [
              { "name": '公共广告', 'but': 'homepageAdvertisement' }
            ]
          },
          {
            "name": '商品管理', 'but': 'store', img: "../static/img/08.png", dels: [
              { "name": '商品管理', 'but': 'storeStorecollect' },
              { "name": '数据汇总', 'but': 'storeDatacollect' },
            ]
          }
        ],
        isleftPersonal: true,
        isleftPersonalClass: false,
        isnewPopup: true,
        isshowNew: true,
        headShow: false,
        headShowR:false,
        bellShow:false,
        navLeftShow:false
      }
    },
    created: function () {
    },
    methods: {
      fadeClick: function (index, e) {
        if (e.target.className.length > 0) {
          var count = this.LiTwo
          this.navLeftShow = !this.navLeftShow
          if (count == index) {
            this.LiTwo = 111111111111
            this.isSpanRot = 1111111111
          } else {
            this.LiTwo = index
            this.isSpanRot = index
          }
          this.isLiShow = index
        }


      },
      oneClick: function () {

      },
      userClick: function () {
        this.isleftPersonalClass = !this.isleftPersonalClass
         if(this.headShow == true){
           this.headShow = false
         }
      },
      newClick: function () {
        this.isshowNew = !this.isshowNew
      },
      headClick: function () {
        this.headShow = !this.headShow
      },
      showRClick:function(){
        this.headShowR = !this.headShowR
      },
      bellClick:function(){
        this.bellShow = !this.bellShow
      },
      routeClick:function(index){
        var itemIndex = this.isSpanRot;
        var items = this.items;
        var oneStr = items[itemIndex].but
        var twoStr = items[itemIndex].dels[index].but

        var ur = "/details/" + oneStr;
        console.log(ur)
        this.$router.push({ path: ur })
      },
      // 进入全屏
      fullClick: function () {
        var docElm = document.documentElement;
        var isFull = this.isglyphiconresizefull;
        if (isFull == true) {
          //W3C
          if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
          }
          //FireFox
          else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
          }
          //Chrome等
          else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
          }
          //IE11
          else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
          }
          this.isglyphiconresizefull = false
          this.isglyphiconresizesmall = true
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          }
          else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          }
          else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          }
          else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
          this.isglyphiconresizefull = true
          this.isglyphiconresizesmall = false
        }
      }
    }
  }
</script>
<style scoped>
  .home{display: flex;overflow: hidden;}
  .H-left{width: 200px;background-color: #1C2B36;border-right: 1px solid #bbb;text-align: center;color: white;overflow: hidden;position: relative;}
  .leftLogo{position: fixed;top: 0;left: 0;height: 55px;width: 199px;overflow: hidden;z-index: 1;background-color: #1C2B36;}
  .leftLogo>img{height: 55px;width: 200px;}
  .leftMain{margin-top: 55px;left: 0;width: 200px;}
  .leftPersonal{height: 230px;border-bottom: 2px solid #16232d;position: relative;}
  .headPopup{position: absolute;top:210px;left: 0;width: 200px;height: 220px;z-index: 1;}
  .headPopup>div:nth-child(1){width: 200px;text-align: center;font-size: 20px;color: #23B7E5;height: 16px;line-height: 20px;padding-top: 1px;}
  .headPopupM{height: 200px;border-radius: 3px;width: 200px;}
  .headPopupM>div:nth-child(1){background-color: #23B7E5;height: 65px;width: 200px;text-align: center;}
  .headPopupM>div:nth-child(1)>div:nth-child(1){height: 40px;line-height:40px;}
  .progress{height: 10px;width: 180px;margin-left: 10px;}
  .progress-bar{height: 10px;}
  .headPopupM>div:nth-child(2){height: 135px;width: 200px;background-color: white;}
  .headPopupM>div:nth-child(2)>ul>li{display: flex;justify-content: space-between;height: 30px;width: 200px;line-height: 30px;color: #bbbbbb;}
  .headPopupM>div:nth-child(2)>ul>li:hover{background-color: #EDF1F2;cursor: pointer;}
  .headPopupM>div:nth-child(2)>ul>li>div:nth-child(1){margin-left: 15px;font-size: 14px;}
  .headPopupM>div:nth-child(2)>ul>li>div:nth-child(2){margin-right: 15px;}
  .headPopupM>div:nth-child(2)>ul>li:nth-child(3)>div:nth-child(2){height: 20px;width: 20px;border-radius: 50%;background-color: red;line-height: 20px;margin-top: 5px;}
  .headPopupM>div:nth-child(2)>ul>li:nth-child(4){height: 45px;line-height: 45px;border-top: 1px solid #bbb;}
.slide-fade-enter-active {transition: all .3s ease;}
.slide-fade-leave-active {transition: all .8s cubic-bezier(1.0, 0.5, 0.5, 1.0);}
.slide-fade-enter, .slide-fade-leave-active {transform: translateX(30px);opacity: 0;}

.navleft-fade-enter-active {transition: all 1s ease;}
.navleft-fade-leave-active {transition: all 0.3s ease;}
.navleft-fade-enter, .navleft-fade-leave-active {transform: translateX(-60px);opacity: 0;}

  .leftPersonalClass{display: none;}
  .leftPersonal>div{margin-top: 4px;font-size: 16px;}
  .leftPersonal>div:nth-child(1)>img{border-radius: 50%;margin-top: 25px;}
  .leftPersonal>div:nth-child(2){cursor: pointer;margin-top: 15px;position: relative;}
  .leftPersonal>div:nth-child(2)>span{color: #999;padding-top: 3px;display: inline-block;font-size: 15px;}
  .leftNav{margin-top: 10px;margin-bottom: 50px;overflow-x: hidden;}
  /*overflow-y: scroll;height: 500px;*/
  .leftNav li{min-height: 50px;line-height: 50px;color: #869FB1;font-size: 14px;cursor: pointer;overflow: hidden;}
  .leftNav li>div:nth-child(1)>img{margin-right: 30px;}
  .leftNav li>div:nth-child(1)>span{margin-left: 35px;font-size: 14px;}
  .spanRot{transform: rotate(90deg);-ms-transform:rotate(90deg);-moz-transform:rotate(90deg); -webkit-transform:rotate(90deg);-o-transform:rotate(90deg);}
  .LiShow{background-color: #131E26;}
  .LiOne:hover{background-color: #16232d;color: white;}
  .LiTwo>ul>li:hover{background-color: #16232d;color: #fff;}
  .H-right{width: calc(100vw - 217px);position: relative;background-color: #e5e9f2;}
  .rightNav{position: fixed;top: 0;left: 200px;height: 56px;width: calc(100vw - 217px);background-color: white;border-bottom: 1px solid #bbb;z-index: 1;}
  .rightMain{margin-top: 56px;width: calc(100vw - 219px);min-height: 700px;}
  .rightNav{display: flex;justify-content: space-between;}
  .nav-left{height: 55px;position: relative;}
  .nav-left .newPopup{position: absolute;top: 55px;left: 110px;width: 160px;height: 150px;background-color: white;border-radius: 3px;}
  .nav-left .showNew{display: none;}
  .newPopup>ul>li{height: 30px; line-height:30px;width: 160px;display: flex;justify-content: space-between;cursor: pointer;margin-top: 5px;background-color: white;}
  .nav-left .newPopup>ul>li:hover{background-color: #EDF1F2;}
  .newPopup li>div:nth-child(2){ margin-top: 5px;}
  .newPopup li:nth-child(2)>div:nth-child(2){margin-right: 10px;width: 25px;height: 18px;background-color: white;border-radius: 9px;line-height: 18px;text-align: center;background-color: orange;}
  .newPopup li:nth-child(4)>div:nth-child(2){margin-right: 10px;width: 25px;height: 18px;background-color: white;border-radius: 9px;line-height: 18px;text-align: center;background-color: deepskyblue;}
  .newPopup li:nth-child(4){border-top: 1px solid #bbbbbb;height: 40px;line-height:40px;}
  .newPopup li:nth-child(4)>div:nth-child(2){margin-top: 10px;}
  .newPopup li>div:nth-child(1){margin-left: 10px;}
  .nav-left>div{float: left;width: 55px;height: 55px;text-align: center;cursor: pointer
  ;}
  .nav-left>div:nth-child(3){width: 80px;}
  .nav-left>div:nth-child(2){line-height: 55px;}
  .nav-left>div:nth-child(1){line-height: 53px;width: 10px;}
  .nav-left>div:nth-child(3)>span{font-size: 15px;line-height: 53px;}
  .nav-left>div:nth-child(4){margin-left: 10px;width: 230px;height: 35px;margin-top: 12px;border: 1px solid #bbb;border-radius: 20px;background-color: #EDF1F2;}
  .nav-left>div:nth-child(4)>input{width: 170px;height: 33px;padding-left: 10px;border: 0;border-radius: 20px;margin: 0;font-size: 15px;background-color: #EDF1F2;line-height: 38px;outline:none}
  .nav-left>div:nth-child(4)>img{width: 20px;height: 20px;}
  .nav-left .gry:hover{background-color: #EDF1F2;}
  .nav-right{height: 55px;position:relative;min-width: 250px;}
  .nav-right .bellPopup{position: absolute;top: 55px;left: 0px;width: 162px;height: 160px;background-color: white;border-radius: 3px;background-color:#fff;z-index:1;border:1px solid #bbb;}
  .bellPopup>ul>li{height: 30px; line-height:30px;width: 160px;display: flex;justify-content: space-between;cursor: pointer;margin-top: 5px;background-color: white;overflow: hidden;}
  .bellPopup>ul>li:hover{background-color: #EDF1F2;}
  .bellPopup li>div:nth-child(2){ margin-top: 5px;}
  .bellPopup li:nth-child(2)>div:nth-child(2){margin-right: 10px;width: 25px;height: 18px;background-color: white;border-radius: 9px;line-height: 18px;text-align: center;background-color: orange;}
  .bellPopup li:nth-child(4)>div:nth-child(2){margin-right: 10px;width: 25px;height: 18px;background-color: white;border-radius: 9px;line-height: 18px;text-align: center;background-color: deepskyblue;}
  .bellPopup li:nth-child(4){border-top: 1px solid #bbbbbb;height: 40px;line-height:40px;}
  .bellPopup li:nth-child(4)>div:nth-child(2){margin-top: 10px;}
  .bellPopup li>div:nth-child(1){margin-left: 10px;}
  .nav-right>div{min-width: 55px;height: 55px;float: left;margin-right: 5px;text-align: center;cursor: pointer;}
  .nav-right>div:nth-child(1){line-height: 55px;}
  .nav-right>div:nth-child(1)>span{font-size: 16px;}
  .nav-right>div:nth-child(2){line-height: 55px;position: relative;}
  .nav-right>div:nth-child(2)>span{font-size: 16px;}
  .nav-right>div:nth-child(2)>div{position: absolute;top: 7px;left: 29px;width: 16px;height: 16px;line-height: 15px;font-size: 14px;border-radius: 50%;background-color: red;color: #fff;}
  .nav-right>div:nth-child(3){line-height: 55px;display: flex;min-width: 140px;font-size: 15px;position:relative;}
  .nav-right>div:nth-child(3) img{border-radius: 50%;margin-top: -5px;}
  .nav-right>div:nth-child(3)>div:nth-child(1){margin-right: 5px;min-width: 80px;}
  .nav-right .rih:hover{background-color: #EDF1F2;}
  .headPopupR{position: absolute;top:55px;right:0px;width: 202px;height: 202px;z-index: 1;background-color:#bbb;border:1px solid #bbb;border-radius:3px;}
  .headPopupMR{height: 200px;border-radius: 3px;width: 200px;}
  .headPopupMR>div:nth-child(1){background-color: #EDF1F2;height: 65px;width: 200px;text-align: center;}
  .headPopupMR>div:nth-child(1)>div:nth-child(1){height: 40px;line-height:40px;}
  .headPopupMR>div:nth-child(2){height: 135px;width: 200px;background-color: white;}
  .headPopupMR>div:nth-child(2)>ul>li{display: flex;justify-content: space-between;height: 30px;width: 200px;line-height: 30px;color: #bbbbbb;cursor: pointer;}
  .headPopupMR>div:nth-child(2)>ul>li:hover{background-color: #EDF1F2;}
  .headPopupMR>div:nth-child(2)>ul>li>div:nth-child(1){margin-left: 15px;font-size: 14px;}
  .headPopupMR>div:nth-child(2)>ul>li>div:nth-child(2){margin-right: 15px;}
  .headPopupMR>div:nth-child(2)>ul>li:nth-child(1)>div:nth-child(2){height: 20px;width: 20px;border-radius: 50%;background-color: red;line-height: 20px;margin-top: 5px;}
  .headPopupMR>div:nth-child(2)>ul>li:nth-child(3)>div:nth-child(2){height:25px;min-width:45px;border-radius:4px;background-color:#23B7E5;line-height:25px;color:#333;}
  .headPopupMR>div:nth-child(2)>ul>li:nth-child(4){height: 45px;line-height: 45px;border-top: 1px solid #bbb;}
  @media screen and (min-width:700px) and (max-width:910px){
   .seekHide{display: none;}
 }
  @media screen and (max-width:700px){
   .seekHide{display: none;}
   .xiaoxiHide{display: none;}
 }
</style>
