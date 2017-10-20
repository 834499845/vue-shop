<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id="app" class="app1-O">
    <div class="app1-O-top">
      <div class="app1-O-topl">
        <ul>
          <li v-for="(item,index) in items" @click="greet(index)" :class="{'appLBg':isBg == index}">{{item.name}}</li>
        </ul>
      </div>
      <div class="app1-O-topr">
        <span :class="{'imageA':isImg}"><img :src="Headimg" alt="" width="45px" height="45px">&nbsp;商城名称</span>
      </div>
    </div>
    <div class="app1-O-bot">

      <div class="MM-to">
        <div><button @click="addComm">发布商品</button></div>
        <div>
          <select v-model="commSelect" @change="commChange">
                 <option v-for="comm in comms">{{comm}}</option>
           </select>
          <select v-model="clasSelect" @change="clasChange">
                  <option v-for="clas in classs">{{clas}}</option>
          </select>
          <div>
            <img :src="img" @click="seek" alt="" width="20px" height="20px">
            <input type="text" v-model="seekInput" placeholder="搜索">
          </div>
        </div>
      </div>

      <div class="MM-li">
        <ul>
          <li class="MM-navLi" v-for="title in titles">
            <div><input type="checkbox" @change="AllChange"></div>
            <div>{{title.name}}<small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{title.jiage}}</small></div>
            <div v-show="fangwen">{{title.fangwen}}</div>
            <div :class="{'warehouseClass':isWarehouseClass}">{{title.kucun}}</div>
            <div v-show="zongxiao">{{title.zongxiao}}</div>
            <div :class="{'warehouseClass':isWarehouseClass}">{{title.date}}</div>
            <div :class="{'warehouseClass':isWarehouseClass}">{{title.xuhao}}</div>
            <div :class="{'warehouseClass':isWarehouseClass}">{{title.bianhao}}</div>
            <div :class="{'warehouseClass':isWarehouseClass}">{{title.caozuo}}</div>
          </li>
          <li v-for="(litm,index) in lists">
            <div><input type="checkbox" :value="litm" v-model="checkboxStrs" @change="radioChange(index)"></div>
            <div>
              <div><img :src="commimg" width="50px" height="50px" alt=""></div>
              <div>
                <p>{{litm.name}}</p>
                <p class="commgreen">售价￥{{litm.shoujia}}</p>
                <p>进价￥{{litm.jinjia}}</p>
              </div>
            </div>
            <div v-show="fangwen">
              <p>UV:{{litm.UV}}</p>
              <p>PV:{{litm.PV}}</p>
            </div>
            <div :class="{'warehouseClass':isWarehouseClass}">{{litm.kucun}}</div>
            <div v-show="zongxiao">{{litm.xiaol}}</div>
            <div :class="{'warehouseClass':isWarehouseClass}">{{litm.time}}</div>
            <div :class="{'warehouseClass':isWarehouseClass}">{{litm.xuhao}}</div>
            <div :class="{'warehouseClass':isWarehouseClass}">{{litm.bianhao}}</div>
            <div :class="{'warehouseClass':isWarehouseClass}">
              <p @click="commCompile(index)">编辑</p>
              <p @click="generalize" :class="{'generalizeClass':isGeneralizeClass}">推广</p>
            </div>
          </li>
        </ul>
      </div>

      <div class="MM-but">
        <button v-for="(butm,index) in buts" @click="operation(index)">{{butm}}</button>
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
        isImg: false,
        isGeneralizeClass: false,
        isWarehouseClass: false,
        // Headimg: require('src/img/raw_1482510356.jpeg'),
        items: [
          { "name": '出售中', 'but': 'sell' },
          { "name": '已售罄', 'but': 'sellout' },
          { "name": '仓储中', 'but': 'warehouse' }
        ],

        titles: [],
        checkboxStrs: [],
        shops: [
          { name: '商品名称', jiage: '价格', fangwen: '访问量', kucun: '库存', zongxiao: '总销量', date: '创建时间', xuhao: '序号', bianhao: '编号', caozuo: '操作' }
        ],
        warehouses: [
          { name: '商品名称', jiage: '价格', kucun: '库存', date: '创建时间', xuhao: '序号', bianhao: '编号', caozuo: '操作' }
        ],
        // img: require("src/img/seekImg.png"),
        // commimg: require("src/img/errimg.png"),
        seekInput: '',
        clasSelect: '全部分类',
        commSelect: '全部商品',
        buts: ['改分类', '下架', '删除', '促销'],
        classs: ['全部分类', '数码', '家电', '美妆', '充值', '门票', '其他'],
        comms: ['全部商品', '促销商品', '打折商品'],
        lists: [],
        offers: [{
          img: 'src/img/errimg.png', name: '出11', shoujia: 1999, jinjia: 12000, UV: 123, PV: 2312, kucun: 123, xiaol: 3123, time: "2017-12-30 15:45", xuhao: 1, bianhao: '2'
        }, {
          img: 'src/img/errimg.png', name: '售22', shoujia: 1999, jinjia: 12000, UV: 123, PV: 2312, kucun: 123, xiaol: 3123, time: "2017-12-30 15:45", xuhao: 1, bianhao: '2'
        }, {
          img: 'src/img/errimg.png', name: '中33', shoujia: 1999, jinjia: 12000, UV: 123, PV: 2312, kucun: 123, xiaol: 3123, time: "2017-12-30 15:45", xuhao: 1, bianhao: '2'
        }
        ],
        solds: [
          {
            img: 'src/img/errimg.png', name: '卖11', shoujia: 1999, jinjia: 12000, UV: 123, PV: 2312, kucun: 123, xiaol: 3123, time: "2017-12-30 15:45", xuhao: 1, bianhao: '2'
          }, {
            img: 'src/img/errimg.png', name: '完22', shoujia: 1999, jinjia: 12000, UV: 123, PV: 2312, kucun: 123, xiaol: 3123, time: "2017-12-30 15:45", xuhao: 1, bianhao: '2'
          }, {
            img: 'src/img/errimg.png', name: '了33', shoujia: 1999, jinjia: 12000, UV: 123, PV: 2312, kucun: 123, xiaol: 3123, time: "2017-12-30 15:45", xuhao: 1, bianhao: '2'
          }
        ],
        storages: [
          {
            img: 'src/img/errimg.png', name: '仓库中11', kucun: 123, time: "2017-12-30 15:45", xuhao: 1, bianhao: '2'
          },
          {
            img: 'src/img/errimg.png', name: '仓库中1222', kucun: 123, time: "2017-12-30 15:45", xuhao: 1, bianhao: '2'
          },
          {
            img: 'src/img/errimg.png', name: '仓库中1444', kucun: 123, time: "2017-12-30 15:45", xuhao: 1, bianhao: '2'
          },
        ],
        fangwen: true,
        zongxiao: true,
        handles: [],
        sssss: ''

      }
    },
    created: function () {
      this.lists = this.offers
      this.titles = this.shops
    },
    methods: {
      greet: function (index) {
        this.isBg = index;
        this.handles = [];
        this.clasSelect = '全部分类'
        this.commSelect = '全部商品'
        if (index > 0) {
          this.isImg = true;
        } else {
          this.isImg = false;
        }
        if (index == 0) {
          this.isGeneralizeClass = false;
          this.buts = ['改分类', '下架', '删除', '促销']
          this.lists = this.offers
          this.titles = this.shops
          this.fangwen = true;
          this.zongxiao = true;
          this.isWarehouseClass = false
        }
        if (index == 1) {
          this.buts = ['删除']
          this.lists = this.solds
          this.isGeneralizeClass = true;
          this.titles = this.shops
          this.fangwen = true;
          this.zongxiao = true;
          this.isWarehouseClass = false
        }
        if (index == 2) {
          this.buts = ['上架', '删除']
          this.isGeneralizeClass = true;
          this.lists = this.storages
          this.titles = this.warehouses
          this.fangwen = false;
          this.zongxiao = false;
          this.isWarehouseClass = true
        }
      },
      // 编辑
      commCompile: function (index) {
        var pathStr = this.$route.path.split('/')[3]
        if (pathStr == 'commoditydb') {
          pathStr = 'ku'
        } else {
          pathStr = 'le'
        }
        var url = "/details/commodity/compil"
        this.$router.push({ path: url, query: { cid: index, pathStr: pathStr, comm: 'com' } })
      },
      // 推广
      generalize: function () {
        console.log('推广')
      },
      // 搜索
      seek: function () {
        var seaStr = this.seekInput
        if (this.isBg == 0) {
          var arr = this.offers
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
        }
        if (this.isBg == 1) {
          var arr = this.solds
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
        }
        if (this.isBg == 2) {
          var arr = this.storages
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
        }
      },
      // 发布商品
      addComm: function () {
        var pathStr = this.$route.path.split('/')[3]
        if (pathStr == 'commoditydb') {
          pathStr = 'ku'
        } else {
          pathStr = 'le'
        }
        var url = "/details/commodity/compil"
        var index = this.isBg
        this.$router.push({ path: url, query: { cid: index, pathStr: pathStr, comm: 'new' } })
      },
      // 全部商品搜索
      commChange: function (ele) {
        if (this.isBg == 0) {
          console.log(ele.target.selectedIndex)
          var offers = this.offers
        }
        if (this.isBg == 1) {
          console.log(ele.target.selectedIndex)
          var solds = this.solds
        }
        if (this.isBg == 2) {
          console.log(ele.target.selectedIndex)
          var storage = this.storages
        }

      },
      // 全部分类搜索
      clasChange: function (ele) {
        console.log(ele.target.value)
        if (this.isBg == 0) {
          console.log(ele.target.selectedIndex)
          var offers = this.offers
        }
        if (this.isBg == 1) {
          console.log(ele.target.selectedIndex)
          var solds = this.solds
        }
        if (this.isBg == 2) {
          console.log(ele.target.selectedIndex)
          var storage = this.storages
        }
      },
      // 该分类  删除 等操作
      operation: function (index) {
        if (this.isBg == 0) {
          switch (index) {
            case 0:
              if (this.checkboxStrs.length > 0) {
                console.log(this.checkboxStrs)
              }
              console.log('出售-改分类')
              break;
            case 1:
              console.log('出售-下架')
              break;
            case 2:
              console.log('出售-删除')
              break;
            case 3:
              console.log('出售-促销')
              break;
            default:
              break;
          }
        }
        if (this.isBg == 1) {
          console.log('卖完- 删除 ')
        }
        if (this.isBg == 2) {
          switch (index) {
            case 0:
              console.log('仓储-上架')
              break;
            case 1:
              console.log('仓储-删除')
              break;
            default:
              break;
          }
        }
      },
      // 点击选择一个  或者 多个
      radioChange: function (index) {
        if (this.isBg == 0) {
          this.handles = this.checkboxStrs
        }
        if (this.isBg == 1) {
          this.handles = this.checkboxStrs
        }
        if (this.isBg == 2) {
          this.handles = this.checkboxStrs
        }
      },
      // 点击全部选择
      AllChange: function () {
        if (this.isBg == 0) {
          var checkboxs = this.checkboxStrs
          var arr = this.offers
          arr.forEach(function (ele) {
            checkboxs.push(ele)
          })
        }
        if (this.isBg == 1) {
          var checkboxs = this.checkboxStrs
          var arr = this.solds
          arr.forEach(function (ele) {
            checkboxs.push(ele)
          })
        }
        if (this.isBg == 2) {
          var checkboxs = this.checkboxStrs
          var arr = this.storages
          arr.forEach(function (ele) {
            checkboxs.push(ele)
          })
        }
      }
    }
  }
</script>

<style scoped>
  .app1-O{height: 100%;min-height: 575px;}

  .app1-O-top{height: 48px;width: 829px;border: 1px solid #bbb; border-left: 0;display: flex;justify-content: space-between;}
  .app1-O-topl>ul>li{float: left;line-height: 46px;margin-left: 30px;cursor: pointer;font-size: 14px;margin-right: 10px;height: 43px;}
  .app1-O-topl>ul .appLBg{border-bottom: 5px solid #3949ab;color: #20a0ff;}
  .imageA{display: none;}
  .app1-O-topr{margin-right: 45px;line-height:49px;font-size: 14px;}
  .app1-O-topr>span>img{border-radius: 50%;vertical-align: middle;}
  .app1-O-bot{margin-top: 20px;margin-left: 20px;width: 800px;border: 1px solid #bbb;min-height: 480px;overflow: hidden}
  .MM-to{width: 800px;height: 50px;display: flex;justify-content: space-between;}
  .MM-to{display: flex;height: 50px;overflow: hidden;justify-content: space-between;line-height: 50px;}
  .MM-to select{width: 90px;margin-top: 15px;margin-right: 10px;height: 25px;border-radius: 5px;border: 1px solid #bbb;}
  .MM-to button{width: 100px;background-color: #2baf2b;border: 1px solid #0a8f08;line-height: 27px;color: white;font-size: 12px;height: 30px;border-radius: 3px;cursor: pointer;}
  .MM-to>div:nth-child(1){margin-left: 30px;margin-top: 3px;}
  .MM-to>div:nth-child(2){display: flex;margin-right: 20px;}
  .MM-to>div:nth-child(2)>div{border: 1px solid #bbb;margin-top: 10px;height: 30px;line-height: 30px;border-radius: 5px;overflow: hidden;display: flex;}
  .MM-to>div:nth-child(2)>div>img{margin-top: 5px;margin-right: 3px;margin-left: 3px;cursor: pointer;}
  .MM-to>div:nth-child(2)>div>input{font-size: 13px;border: 0;width: 90px;color: #000;}

  .MM-li>ul{margin: 0;padding: 0;}
  .MM-li>ul>li{margin: 0;padding: 0;overflow: hidden;height: 100px;position: relative;display: flex;text-align: center;border-bottom: 1px solid #bbb;line-height: 100px;}
  .MM-li>ul>li>div{width: 70px;font-size: 15px;}
  .MM-li>ul .MM-navLi{background-color: #bbb;height: 40px;line-height: 40px;}
  .MM-li>ul>li>div:nth-child(1){width: 50px;}
  .MM-li>ul>li>div:nth-child(2){width: 200px;display: flex;}
  .MM-li>ul>li>div:nth-child(2) p{margin: 0;padding: 0;margin-top: 10px;margin-left: 5px;line-height: 20px;text-align: left;}
  .MM-li>ul>li>div:nth-child(3) p{line-height: 30px;}
  .MM-li>ul>li>div:nth-child(3){width: 130px;}
  .MM-li>ul>li>div:nth-child(2) img{width: 70px;height: 70px;margin-top: 10px;margin-left: 10px;}
  .MM-li>ul>li>div:nth-child(6){width: 130px;}
  .MM-li>ul>li>div:nth-child(9) p{line-height: 30px;color: #2baf2b;cursor: pointer;}
  .MM-li>ul>li>div:nth-child(9) .generalizeClass{display: none;}
  .MM-li>ul>li .warehouseClass{width: 110px;}
  .MM-li>ul>li .commgreen{color: #2baf2b;}
  .MM-but{ width: 800px;height: 50px;margin-top: 20px; display: flex;}
  .MM-but>button{background-color: white;width: 70px;height: 30px;margin-left: 40px;border: 1px solid #bbb;border-radius: 5px;  line-height: 27px;cursor: pointer;cursor: pointer;}
  .MM-but>button:hover{background-color: #bbb;color: #fff;}

</style>