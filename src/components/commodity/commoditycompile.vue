<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id="app" class="app1-O">
    <div class="app1-O-top">
      <div class="app1-O-topl">
        <ul>
          <li><small @click="commBack">{{classStr}}</small> / 编辑</li>
        </ul>
      </div>
      <div class="app1-O-topr">
      </div>
    </div>
    <div class="app1-O-bot">
      <!--头部-->
      <div class="app1-O-botNav">
        <ul>
          <li v-for="(litm,index) in sheets" @click="sheetsCl(index)" :class="{sheetsBg:isSheetsBg == index}">{{litm}}</li>
        </ul>
      </div>
      <!--第一个-->
      <div class="app1-O-botOne" :class="{oneClass:isOneClass}">
        <div class="app1-O-botOneO">
          <ul>
            <li v-for="(litm,index) in selects" @click="select(index)" :class="{selectBg:isSelectBg == index}">{{litm}}</li>
          </ul>
        </div>
        <div @click="goTwoComp" class="app1-O-botOneT">
          下一步
        </div>
      </div>
      <!--编辑第二个-->
      <div class="app1-O-botTwo" :class="{twoClass:isTwoClass}">
        <form>
          <ul class="app1-O-botTwoU">
            <li>
              <div class="botTwoUL-left">
                <p>基本信息</p>
              </div>
              <div class="botTwoUL-right botTwoUL-rightOne">
                <div>
                  <span>商品分类：<small>{{commClass}}</small></span>
                </div>
                <div>
                  <div>购买方式：</div>
                  <div><input type="checkbox">余额宝</div>&nbsp;&nbsp;
                  <div><input type="checkbox">支付宝</div>&nbsp;&nbsp;
                  <div><input type="checkbox">微信</div>&nbsp;&nbsp;
                  <div><input type="checkbox">京东支付</div>
                </div>
                <div>
                  <div>商品类型：</div>
                  <div><input type="checkbox">实物商品（有物流）</div>&nbsp;&nbsp;
                  <div><input type="checkbox">虚拟商品（无物流）</div>
                </div>
                <div>(类型发布后并不能修改)</div>
              </div>
            </li>
            <li>
              <div class="botTwoUL-left">
                <p>库存规格</p>
              </div>
              <div class="botTwoUL-right botTwoUL-rightTwo">
                <div>
                  <div>商品规格：</div>
                  <div>
                    <select name="" id="">
                      <option value="" v-for="guige in guiges">{{guige}}</option>
                    </select>
                    <span>+添加</span>
                    <button>添加规格</button>
                  </div>
                </div>
                <div>
                  <div>总库存：</div>
                  <div><input type="text" value="999999"></div>
                </div>
                <div>
                  <div>商家编码：</div>
                  <div><input type="text" value="999999"></div>
                </div>
              </div>
            </li>
            <li>
              <div class="botTwoUL-left">
                <p>物流/其他</p>
              </div>
              <div class="botTwoUL-right botTwoUL-rightTherr">
                <div>
                  <div>运费设置：</div>
                  <div><input type="text" value="0">&nbsp;&nbsp;&nbsp;元</div>
                </div>
                <div>
                  <div>每人限购：</div>
                  <div><input type="text" value="0"></div>
                </div>
                <div>
                  <div>购买权限：</div>
                  <div>
                    <select name="">
                      <option value="" v-for="quanxian in quanxians">{{quanxian}}</option>
                    </select>
                  </div>
                  <div>不选择则默认所有都可以购买</div>
                </div>
                <div>
                  <div>购物须知：</div>
                  <div><input type="text" value="" placeholder="可不填写"></div>
                </div>
                <div>
                  <div>开售时间：</div>
                  <div><input type="text" value="999999"></div>
                </div>
                <div>
                  <div>促销类型：</div>
                  <div>
                    <select name="">
                      <option value="" v-for="cuxiao in cuxiaos">{{cuxiao}}</option>
                    </select>
                  </div>
                  <div>不选择则默认不参与促销</div>
                </div>
              </div>
            </li>
            <li>
              <div class="botTwoUL-left">
                <p>商品信息</p>
              </div>
              <div class="botTwoUL-right botTwoUL-rightFour">
                <div>
                  <div>商品名称：</div>
                  <div><input type="text" value="" placeholder="必填"></div>
                </div>
                <div>
                  <div>商品售价：</div>
                  <div><input type="text" value="" placeholder="￥999"></div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;原价：<input type="text" value="" placeholder="原价￥1999">&nbsp;&nbsp;&nbsp;原价必须高于现价</div>
                </div>
                <div>
                  <div>商品进价：</div>
                  <div><input type="text" value="" placeholder="￥999"></div>
                </div>
                <div>
                  <div>商品图：</div>
                  <div class="botTwoUL-rightFourImage">
                    <div>
                      <img :src="FourImage1" alt="">
                      <img :src="FourImage2" alt="">
                      <img :src="FourImage3" alt="">
                      <img :src="FourImage4" alt="">
                    </div>
                    <div>建议尺寸64*64，可退拽更改图片的顺序，第一张为商品的主封面</div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="backTop" @click="backTop">上一步</div>
              <div class="goBot" @click="goBot">下一步</div>
            </li>
            <li></li>
          </ul>
        </form>
      </div>
      <!--新建第二个-->
      <div class="app1-O-botTwo" :class="{twoNewClass:isNewTwoClass}">
        <form>
          <ul class="app1-O-botTwoU">
            <li>
              <div class="botTwoUL-left">
                <p>基本信息</p>
              </div>
              <div class="botTwoUL-right botTwoUL-rightOne">
                <div>
                  <span>商品分类：<small>{{commClass}}</small></span>
                </div>
                <div>
                </div>
                <div>
                  <div>商品类型：</div>
                  <div><input type="checkbox">实物商品（有物流）</div>&nbsp;&nbsp;
                  <div><input type="checkbox">虚拟商品（无物流）</div>
                </div>
                <div></div>
                <div>(类型发布后并不能修改)</div>
              </div>
            </li>
            <li>
              <div class="botTwoUL-left">
                <p>库存规格</p>
              </div>
              <div class="botTwoUL-right botTwoUL-rightTwo">
                <div>
                  <div>商品规格：</div>
                  <div>
                    <select name="" id="">
                      <option value="" v-for="guige in guiges">{{guige}}</option>
                    </select>
                    <span>+添加</span>
                    <button>添加规格</button>
                  </div>
                </div>
                <div>
                  <div>总库存：</div>
                  <div><input type="text" value="999999"></div>
                </div>
                <div>
                  <div>商家编码：</div>
                  <div><input type="text" value="999999"></div>
                </div>
              </div>
            </li>
            <li id="commMessage">
              <div class="botTwoUL-left">
                <p>商品信息</p>
              </div>
              <div class="botTwoUL-right botTwoUL-rightFour">
                <div>
                  <div>商品名称：</div>
                  <div><input type="text" value="" placeholder="必填"></div>
                </div>
                <div>
                  <div>商品售价：</div>
                  <div><input type="text" value="" placeholder="￥999"></div>
                </div>
                <div>
                  <div>商品进价：</div>
                  <div><input type="text" value="" placeholder="￥999"></div>
                </div>
                <div>
                </div>
              </div>
            </li>
            <li id="newBut">
              <div class="newbackTop" @click="backTop">上一步</div>
              <div class="newgoBot" @click="goBot">完成</div>
            </li>
            <li></li>
          </ul>
        </form>
      </div>
      <!--第三个-->
      <div class="app1-O-botTherr" :class="{therrClass:isTherrClass}">
        <ul class="app1-O-botTherrLi">
          <li>
            <div class="botTherrLiLeft">商品简介</div>
            <div class="botTherrLiRight">
              <textarea name="" placeholder="请输入商品简介">

              </textarea>
            </div>
          </li>
          <li>
            <div class="botTherrLiLeft">商品详情</div>
            <div class="botTherrcompile">
              <div>
                编辑器
              </div>
              <div>
                <textarea name="" placeholder="请输入商品的详细情况">

                </textarea>
              </div>
            </div>
          </li>
          <li>
            <div @click="backTopTwo">上一步</div>
            <div @click="soldUut">下架</div>
            <div @click="soldUp">上架</div>
          </li>
          <li></li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'app1-O',
    data() {
      return {
        commClass: '数码',
        classStr: "商品库",
        sheets: ['选择商品分类', '基础信息编辑', '详情编辑'],
        isSheetsBg: 0,
        isSelectBg: 0,
        selects: ['数码', '家电', '美妆', '充值', '门票', '其他',],
        isOneClass: false,
        isTwoClass: true,
        isTherrClass: true,
        isNewTwoClass: true,
        guiges: ['颜色', '尺寸', '种类'],
        quanxians: ['', '权限1', '权限2'],
        cuxiaos: ['', '促销1', '促销2'],
        // FourImage1: require('src/img/errimg.png'),
        // FourImage2: require('src/img/errimg.png'),
        // FourImage3: require('src/img/errimg.png'),
        // FourImage4: require('src/img/addImg.png')
      }
    },
    created: function () {
      if (this.$route.query.pathStr == 'le') {
        this.classStr = '商品分类'
      } else {
        this.classStr = '商品库'
        if (this.$route.query.comm == 'new') {
          this.sheets = ['选择商品分类', '基础信息编辑']
        }
      }
    },
    methods: {
      // 返回库 或者 类
      commBack: function () {
        if (this.classStr == '商品库') {
          this.$router.push({ path: '/details/commodity/commoditydb' })
        } else {
          this.$router.push({ path: '/details/commodity/commodityclass' })
        }
      },
      // 头部选择切换
      sheetsCl: function (index) {
        this.isSheetsBg = index
        if (index == 0) {
          this.isOneClass = false
          this.isTwoClass = true
          this.isTherrClass = true
        }
        if (index == 1) {
          this.isOneClass = true
          this.isTherrClass = true
          if (this.$route.query.comm == 'new') {
            this.isTwoClass = true
            this.isNewTwoClass = false
          } else {
            this.isTwoClass = false
          }
        }
        if (index == 2) {
          this.isOneClass = true
          this.isTwoClass = true
          this.isTherrClass = false
        }
      },
      // 选择类型 数码。。。
      select: function (index) {
        this.isSelectBg = index
        this.commClass = this.selects[index]
      },
      // 第一个的下一步
      goTwoComp: function () {
        this.isOneClass = true
        this.isTherrClass = true
        this.isSheetsBg = 1
        if (this.$route.query.comm == 'new') {
          this.isTwoClass = true
          this.isNewTwoClass = false
        } else {
          this.isTwoClass = false
        }
      },
      // 第二个的上一步
      backTop: function () {
        this.isOneClass = false
        this.isTwoClass = true
        this.isTherrClass = true
        this.isNewTwoClass = true
        this.isSheetsBg = 0
      },
      // 第二个的下一步
      goBot: function () {
        if (this.$route.query.comm == 'new') {
          if (this.classStr == '商品库') {
            this.$router.push({ path: '/details/commodity/commoditydb' })
          } else {
            this.$router.push({ path: '/details/commodity/commodityclass' })
          }
        } else {
          this.isOneClass = true
          this.isTwoClass = true
          this.isTherrClass = false
          this.isSheetsBg = 2
        }
      },
      // 第三个的上一步
      backTopTwo: function () {
        this.isOneClass = true
        this.isTwoClass = false
        this.isTherrClass = true
        this.isSheetsBg = 1
      },
      // 第三个的下架
      soldUut: function () {
        console.log('下架')
      },
      // 第三个的上架
      soldUp: function () {
        console.log('上架')
      }
    }
  }
</script>

<style scoped>
  .app1-O{min-height: 575px;height: 100%;}
  .oneClass{display: none;}
  .twoClass{display: none;}
  .twoNewClass{display: none;}
  .therrClass{display: none;}
  
  .app1-O-top{height: 48px;width: 829px;border: 1px solid #bbb; border-left: 0;display: flex;justify-content: space-between;}
  .app1-O-topl>ul>li{float: left;line-height: 46px;margin-left: 30px;cursor: pointer;font-size: 14px;margin-right: 10px;height: 43px;}
  .app1-O-topl>ul>li>small{font-size: 15px;color: #2baf2b;}
  .app1-O-bot{margin-top: 20px;margin-left: 20px;width: 800px;border: 1px solid #bbb;}
  .app1-O-botNav{width: 800px;height: 80px;}
  .app1-O-botNav>ul{display: block;margin:0 auto;height: 80px;width: 750px;border-bottom: 1px solid #bbb;display: flex;
  justify-content: center;align-items: center;}
  .app1-O-botNav>ul>li{cursor: pointer;width: 150px;text-align: center;font-size: 16px;margin-left: 20px;border-radius: 5px;line-height: 40px;height: 40px;border: 1px solid #333;}
  .sheetsBg{background-color: #9ccc65;border: 1px solid #f7ba2a;color: #fff;}
  .app1-O-botOne{width: 800px;height: 200px;}
  .app1-O-botOneO{display: block;margin:0 auto;height: 160px;width: 750px;overflow: hidden;
  }
  .app1-O-botOneO>ul>li{width: 230px;float: left;margin-left: 13px;text-align: center;line-height: 40px;border-radius: 5px;margin-top: 23px;cursor: pointer;height: 40px;border: 1px solid #bbb;}
  .selectBg{background-color: #2baf2b;border: 1px solid #f7ba2a;color: #fff;}
  .app1-O-botOneT{height: 40px;text-align: center;color: white;font-size: 16px;width: 800px;cursor: pointer;line-height:40px;background-color: #9ccc65;}
  /*二*/
  .app1-O-botTwoU>li{display: flex;position: relative;}
  .app1-O-botTwoU>li:after{position: absolute;bottom: 0;  right: 0;  width: 95%;  height: 1px;background-color: #bbb;content: "";}
  .app1-O-botTwoU>li:nth-child(1){  height: 200px;}
  .app1-O-botTwoU>li:nth-child(2){  height: 230px;}
  .app1-O-botTwoU>li:nth-child(3){  height: 270px;}
  .app1-O-botTwoU>li:nth-child(4){  height: 240px;}
  .app1-O-botTwoU>li:nth-child(5){  height: 40px;margin-top: 20px;}
  .app1-O-botTwoU>li:nth-child(5)>div{width: 50%;float: left;text-align: center;color: white;font-size: 16px;line-height: 40px;cursor: pointer;}
  .backTop{background-color: #e84e40;}
  .goBot{background-color: #9ccc65;}
  #commMessage{height: 150px;}
  #newBut{height: 40px;margin-top: 10px;}
  #newBut>div{width: 50%;float: left;text-align: center;color: white;font-size: 16px;line-height: 40px;cursor: pointer;}
  #newBut .newbackTop{background-color: #e84e40;}
  #newBut .newgoBot{background-color: #9ccc65;}
  .app1-O-botTwoU>li:nth-child(6){height:100px;}
  .botTwoUL-left{  width: 150px;text-align: center;position: relative;  height: 100%;}
  .botTwoUL-left>p{padding-top: 20px;}
  .botTwoUL-left:after{position: absolute;  top: 3px;  right: 0;  width: 1px;  height: 97%;background-color: #bbb;content: "";}
  .botTwoUL-right{ width: 650px;font-size: 15px;}

  .botTwoUL-rightOne>div{display: flex;  margin-top: 23px;  margin-left: 20px;}
  .botTwoUL-rightOne>div:nth-child(1)>span>small{font-size: 14px;}
  .botTwoUL-rightOne input{  margin-right: 5px;}

  .botTwoUL-rightTwo>div{  margin-top: 14px;  margin-left: 20px;  display: flex;}
  .botTwoUL-rightTwo input{  width: 120px;border-radius: 5px;  height: 30px;text-align: center;border: 1px solid #bbbbbb;}
  .botTwoUL-rightTwo>div:nth-child(1){  height: 100px;  }
  .botTwoUL-rightTwo>div:nth-child(1)>div:nth-child(1){  height: 100px;  height: 30px;line-height: 30px;  }
  .botTwoUL-rightTwo>div:nth-child(1)>div:nth-child(2){  width: 550px;  display: flex;  flex-direction: column;  }
  select{ display: block;  width: 120px; margin-right: 10px;  height: 30px;border-radius: 3px;border: 1px solid #bbb;  }
  .botTwoUL-rightTwo>div:nth-child(1)>div:nth-child(2)>span{  margin-top: 15px;color: #2baf2b;  margin-top: 5px;  }
  .botTwoUL-rightTwo>div:nth-child(1)>div:nth-child(2)>button{  margin-top:10px;border-radius: 3px;border: 1px solid #bbb;  width: 100px;  height: 30px;line-height: 30px;  }
  .botTwoUL-rightTwo>div>div:nth-child(1){  width: 100px;text-align: left;  height: 30px;line-height: 30px;}
  .botTwoUL-rightTherr>div{  margin-top: 10px;  margin-left: 20px;line-height: 30px;  display: flex;}
  .botTwoUL-rightTherr>div>div:nth-child(1){ width: 100px;  height: 30px;line-height: 30px;}
  .botTwoUL-rightTherr>div:nth-child(4) input{  width: 190px;}
  .botTwoUL-rightTherr input{  width: 120px;border-radius: 5px;  height: 30px;text-align: center;border: 1px solid #bbbbbb;}
  .botTwoUL-rightFour>div{  display: flex;  margin-top: 10px;  margin-left: 20px;}
  .botTwoUL-rightFour>div>div:nth-child(1){  width: 100px;  height: 30px;  line-height:30px;  }
  .botTwoUL-rightFour input{width: 120px;border-radius: 5px;height: 30px;text-align: center;border: 1px solid #bbbbbb;}
  .botTwoUL-rightFourImage{  display: block;  width: 550px;  height: 90px;  }
  .botTwoUL-rightFourImage>div:nth-child(1){  display: flex;  height: 70px;}
  .botTwoUL-rightFourImage>div:nth-child(1)>img{  display: block;  margin-left: 30px;width: 70px; height:70px;}
  .botTwoUL-rightFourImage>div:nth-child(1)>img:nth-child(4){border: 1px solid #bbb;}
  .botTwoUL-rightFourImage>div:nth-child(2){ margin-top: 7px;;text-align: left;font-size: 13px;}
  /*三*/
  .app1-O-botTherrLi>li{  overflow: hidden;border-bottom: 1px solid #bbb;  display: flex;}
  .app1-O-botTherrLi>li:nth-child(1){  height: 200px;}
  .app1-O-botTherrLi>li:nth-child(3){  margin-top: 20px;  height: 40px;line-height: 40px;}
  .app1-O-botTherrLi>li:nth-child(3)>div{  width: 33.3333333%;float: left;text-align: center;cursor: pointer;  }
  .app1-O-botTherrLi>li:nth-child(3)>div:nth-child(1){  background-color: #e84e40;  }
  .app1-O-botTherrLi>li:nth-child(3)>div:nth-child(2){  background-color: #ffa726;  }
  .app1-O-botTherrLi>li:nth-child(3)>div:nth-child(3){  background-color: #9ccc65;  }
  .app1-O-botTherrLi>li:nth-child(4){  height: 100px;}
  .botTherrLiLeft{  width: 150px;text-align: center;  padding-top: 20px;}
  .botTherrLiRight textarea{  display: block;  width: 650px;  margin-top: 20px;font-size: 16px;  height: 150px;border: 1px solid #bbb;}
  .botTherrLiRight{  width: 650px;  }
  .app1-O-botTherrLi>li:nth-child(2){  height: 500px;}
  .botTherrcompile{  width: 650px;  height: 500px;  }
  .botTherrcompile>div:nth-child(1){  height: 150px;border: 1px solid #bbb;}
  .botTherrcompile>div:nth-child(2) textarea{  height: 350px;border: 1px solid #bbb;  width: 650px;}
  textarea{  padding-left: 10px;  padding-top: 10px;}
</style>