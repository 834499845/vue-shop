<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id="app" class="app1-O">
    <div class="app1-O-top">
      <div class="app1-O-topl">
        <ul>
          <li class="appLBg">公共广告/广告编辑</li>
        </ul>
      </div>
      <div class="app1-O-topr">
      </div>

    </div>
    <div class="app1-O-bot">
      <ul>
        <li class="LiOne">
          <div>
            <div class="addLione"></div>
            <small>添加一个广告，建议尺寸640px</small>
          </div>

          <div>
            <div class="LioneColor">显示方式：</div>
            <div>
              <select>
                  <option v-for="way in ways">{{way}}</option>
              </select>
            </div>
          </div>

          <div>
            <div class="LioneColor">显示大小：</div>
            <div>
              <select>
                  <option v-for="size in sizes">{{size}}</option>
                </select>
            </div>
          </div>

          <div>
            <div class="LioneColor">显示顺序：</div>
            <div>
              <select>
           <option v-for="order in orders">{{order}}</option>
         </select>
            </div>
          </div>
        </li>
        <li>
          <div @click="back">取消</div>
          <div @click="add">保存</div>
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
        items: ['公共广告'],
        ways: ['轮播', '固定'],
        sizes: ['实际大小', '默认大小'],
        orders: ['第一位', '第二位', '第三位',]
      }
    },
    methods: {
      // 取消
      back: function () {
        var ur = "/details/homepage/advertisement";
        this.$router.push({ path: ur })
      },
      // 保存
      add: function () {
        consloe.log('保存')
      }
    }
  }
</script>

<style scoped>
  .app1-O{height: 100%;min-height: 575px;}

  .app1-O-top{height: 48px;border: 1px solid #bbb; border-left: 0;width: 100%;display: flex;justify-content: space-between;}
  .app1-O-topl>ul>li{float: left;line-height: 46px;margin-left: 30px;cursor: pointer;font-size: 14px;margin-right: 10px;height: 43px;}
  .app1-O-topl>ul .appLBg{border-bottom: 5px solid #3949ab;color: #20a0ff;}

  .app1-O-bot{margin-top: 20px;margin-left: 20px;width: 800px;border: 1px solid #bbb;}
  .LiOne{height:330px;}
  .LiOne select{display:block;width:150px;height:40px;border:1px solid #bbb;border-radius:5px;}
  .LiOne>div{display:flex;width:100%;margin-left:30px;}
  .LiOne>div:nth-child(1){height:150px;line-height:150px;margin-top:30px;}
  .LiOne>div:nth-child(1)>div{height:130px;width:300px;border:1px solid #bbb;border-radius:5px;}
  .LiOne>div:nth-child(2){height:50px;line-height:50px;}
  .LiOne>div:nth-child(3){height:50px;line-height:50px;}
  .LiOne>div:nth-child(4){height:50px;line-height:50px;}
  .LioneColor{color: #e51c23;}
  .app1-O-bot>ul>li:nth-child(2){display:flex;height:40px;line-height:40px;}
  .app1-O-bot>ul>li:nth-child(2)>div{text-align:center;width:50%;color:#fff;cursor: pointer;}
  .app1-O-bot>ul>li:nth-child(2)>div:nth-child(1){background-color:#ff7043;}
  .app1-O-bot>ul>li:nth-child(2)>div:nth-child(2){background-color:#2baf2b;}
</style>