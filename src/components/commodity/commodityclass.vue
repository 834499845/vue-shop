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
    <div class="app1-T-bot">
      <div><button>新建分类</button></div>
      <div class="app1-T-til">
        <ul>
          <li class="Li">
            <div class="liD nt">
              <div>分类名称</div>
              <div>类级</div>
              <div>商品数量</div>
              <div>创建时间</div>
              <div>操作</div>
            </div>
          </li>
          <li v-for="(litm,index) in litms" class="Li">
            <div class="liD oneLi">
              <div>{{litm.class}}</div>
              <div>{{litm.jibie}}</div>
              <div>{{litm.num}}</div>
              <div>{{litm.time}}</div>
              <div><small @click="commClassCompile(index)">编辑-</small><small @click="commClassPack(index)">{{aaa == index ? '收起' : '展示' }}-</small>
                <small
                  @click="commClassDelete(index)">删除</small>
              </div>
            </div>
            <div v-if="(litm.er == 'no')" :class="{'YtwoLi':isYtwoLi != index}">
              <ul>
                <li v-for="(erji,index) in litm.erji" class="Li">
                  <div class="liD twoLi">
                    <div>{{erji.class}}</div>
                    <div>{{erji.jibie}}</div>
                    <div>{{erji.num}}</div>
                    <div>{{erji.time}}</div>
                    <div><small @click="commClassCompile(index)">编辑-</small><small @click="commClassPack(index)">展开-</small>
                      <small @click="commClassDelete(index)">删除</small>
                    </div>
                  </div>
                </li>
                <li class="twoLiLast"></li>
              </ul>
            </div>

            <div v-else class="NtwoLi">
            </div>

          </li>

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
        isBg: 0,
        items: ['商品分类'],
        aaa: 1111111111111,
        litms: [
          {
            class: '数码家电', jibie: '一级', num: '145', time: '1017-23-21 15:34',
            er: "no",
            erji: [{ class: '电脑', jibie: '二级', num: '145', time: '1017-23-21 15:34' }]
          },
          {
            class: '数码家电1', jibie: '一级', num: '145', time: '1017-23-21 15:34',
            er: "no",
            erji: [{ class: '电脑11', jibie: '二级', num: '145', time: '1017-23-21 15:34' }, { class: '电脑12', jibie: '二级', num: '145', time: '1017-23-21 15:34' }, { class: '电脑13', jibie: '二级', num: '145', time: '1017-23-21 15:34' }]
          },
          { class: '数码家电2', jibie: '一级', num: '145', time: '1017-23-21 15:34' },
        ],
        isYtwoLi: 10000000000
      }
    },
    created: function () {
      var path = this.$route.path;
      if (path.split('/')[2] == 'commodityclass') {
        this.isBg = 2;
      }
    },
    methods: {
      greet: function (index) {
        this.isBg = index;
      },
      commClassCompile: function (index) {
        var pathStr = this.$route.path.split('/')[3]
        if (pathStr == 'commoditydb') {
          pathStr = 'ku'
        } else {
          pathStr = 'le'
        }
        var url = "/details/commodity/compil"
        this.$router.push({ path: url, query: { cid: index, pathStr: pathStr } })
      },

      commClassPack: function (index) {
        if (this.aaa == index) {
          this.aaa = 11111111111111111
          this.isYtwoLi = 11111111111111
        } else {
          this.aaa = index;
          this.isYtwoLi = index;
        }
      },
      commClassDelete: function (index) {
        console.log('删除', index)
      },
    }
  }
</script>

<style scoped>
  .app1-O{height: 100%;min-height: 575px;}

  .app1-O-top{height: 48px;width: 755px;border: 1px solid #bbb; border-left: 0;width: 100%;display: flex;justify-content: space-between;}
  .app1-O-topl>ul>li{float: left;line-height: 46px;margin-left: 30px;cursor: pointer;font-size: 14px;margin-right: 10px;height: 43px;}
  .app1-O-topl>ul .appLBg{border-bottom: 5px solid #3949ab;color: #20a0ff;}

  .app1-T-bot{margin-top: 20px;margin-left: 20px;width: 800px;border: 1px solid #bbb;height: 480px;}
  .app1-T-bot>div:nth-child(1)>button{width: 100px;background-color: #2baf2b;border: 1px solid #0a8f08;line-height: 27px;color: white;font-size: 12px;height: 30px;border-radius: 3px;}
  .app1-T-bot>div:nth-child(1){line-height: 50px;height: 50px;  margin-left: 30px;}

  .Li{text-align: center;font-size: 14px;line-height: 50px;width: 800px;}
  .app1-T-til>ul>li .nt{border: 1px solid #bbb;height:30px;line-height: 30px;border-left: 0;border-right: 0;}
  .app1-T-til>ul li .twoLi{border: 0;}
  .app1-T-til>ul li .twoLi:after{position: absolute;bottom: 0;right: 0;
  width: 96%;height: 1px;background-color: #bbb;content: "";}
  .Li .NtwoLi{display: none;}
  .app1-T-til>ul li .YtwoLi{display: none;}
  .twoLiLast{height: 20px;border: 0;border-bottom: 1px solid #bbb;}

  .Li .liD{position: relative;height: 50px;width: 800px;
  border-bottom: 1px solid #bbb;}
  .liD>div:nth-child(1){position: absolute;top: 0;left: 0px;
    width: 200px;}
  .liD>div:nth-child(2){position: absolute;top: 0;left: 190px;
    width: 70px;}
  .liD>div:nth-child(3){position: absolute;top: 0;left: 300px;width: 140px;}
  .liD>div:nth-child(4){position: absolute;top: 0;left: 430px;width: 200px;}
  .liD>div:nth-child(5){position: absolute;top: 0;left: 650px;
    width: 140px;}
  .liD>div:nth-child(5)>small{color: #2baf2b;cursor: pointer;}

</style>