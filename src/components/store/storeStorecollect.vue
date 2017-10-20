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
          <div>商品名称：<input type="text" v-model="name"></div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div>商家电话：<input type="text" v-model="phone"></div>
        </div>
        <div>
          <div class="botTopSele">
            营业范围：
            <select v-model="provinceSelect">
               <option v-for="province in provinces">{{province}}</option>
             </select>
            <select v-model="citySelect">
               <option v-for="city in citys" v-bind:value="city">{{city}}</option>
            </select>
          </div>
          <div @click="filtrate">筛选</div>
          <div @click="addStore">新增商铺</div>
        </div>
      </div>
      <div class="botBot">
        <ul>
          <li class="fistLi">
            <div>商铺名称</div>
            <div>商铺区域</div>
            <div>联系方式</div>
            <div>创建日期</div>
            <div>在线商品数</div>
            <div>账号</div>
            <div>操作</div>
          </li>
          <li v-for="manage in manages">
            <div>{{manage.name}}</div>
            <div>{{manage.sheng}}/{{manage.shi}}</div>
            <div>
              <p>{{manage.username}}</p>
              <p>{{manage.phone}}</p>
            </div>
            <div>{{manage.time}}</div>
            <div>{{manage.num}}</div>
            <div>{{manage.account}}</div>
            <div class="liHeadel"><small @click="shutLi">关闭</small><small @click="UpLi">-进入</small></div>
          </li>
        </ul>
      </div>
      <div class="addPopup" v-show="isAddPopup">
        <h3>新增商铺</h3>
        <form>
          <div class="addInput">
            <div>
              <div>商铺名称：</div>
              <div><input type="text" v-model="storeName"></div>
            </div>
            <div>
              <div>商铺名称：</div>
              <div>
                <select v-model="addProvinceSelect">
                   <option v-for="province in provinces">{{province}}</option>
                </select>
                <select v-model="addCitySelect">
                    <option v-for="city in citys">{{city}}</option>
                </select>
              </div>
            </div>
            <div>
              <div>商铺名称：</div>
              <div><input type="text" v-model="addName" placeholder="输入负责人姓名"><input type="text" v-model="addPhone" placeholder="输入负责人手机号"></div>
            </div>
            <div>
              <div>商铺名称：</div>
              <div><input type="text" v-model="addAccount" placeholder="分配账号"><input type="text" v-model="addPswd" placeholder="输入初始密码"></div>
            </div>
          </div>
          <div class="faveBut">
            <div @click="remAddPopup">取消</div>
            <div @click="save">保存</div>
          </div>
        </form>
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
        name: '',
        phone: '',
        provinceSelect: '省份',
        citySelect: '城市',
        addProvinceSelect: '省份',
        addCitySelect: '城市',
        addName: '',
        addPhone: '',
        addAccount:'',
        addPswd:'',
        storeName:'',
        items: ['商铺管理'],
        provinces: ['省份', '陕西', '河北'],
        citys: ['城市', '西安', '石家庄'],
        isAddPopup: false,
        manages: [
          { name: '亿点', sheng: '陕西', shi: '西安', username: '大宝', phone: '12312341234', time: '1111-11-11', num: '321312', account: '1233121212312' },
          { name: '亿点', sheng: '陕西', shi: '西安', username: '大宝', phone: '12312341234', time: '1111-11-11', num: '321312', account: '1233121212312' }
        ]
      }
    },
    methods: {
      greet: function (index) {
        this.isBg = index;
      },
      addStore: function () {
        this.isAddPopup = true
      },
      remAddPopup: function () {
        this.isAddPopup = false
      },
      shutLi: function () {
        console.log('关闭')
      },
      UpLi: function () {
        console.log('进入')
      },
      filtrate: function () {
        console.log('筛选')
        console.log(this.name, this.phone, this.provinceSelect, this.citySelect)
      },
      save: function () {
        console.log('添加')
        console.log(this.storeName,this.addName, this.addPhone, this.addProvinceSelect, this.addCitySelect, this.addAccount, this.addPswd)
      }
    }
  }
</script>

<style scoped>
  .app1-O{height: 100%;min-height: 575px;}

  .app1-O-top{height: 48px;border: 1px solid #bbb; border-left: 0;width: 100%;display: flex;justify-content: space-between;}
  .app1-O-topl>ul>li{float: left;line-height: 46px;margin-left: 30px;cursor: pointer;font-size: 14px;margin-right: 10px;height: 43px;}
  .app1-O-topl>ul .appLBg{border-bottom: 5px solid #3949ab;color: #20a0ff;}

  .app1-O-bot{margin-top: 20px;margin-left: 20px;width: 800px;border: 1px solid #bbb;min-height: 480px;overflow: hidden;position: relative;}
  .botTop{height:150px;}
  .botTop select{display:block;width:150px;height:40px;border:1px solid #bbb;border-radius:5px;margin-top: 15px;margin-right: 20px;font-size: 16px;}
  .botTop input{width: 200px;height: 30px;font-size: 17px;border: 1px solid #bbb;border-radius: 5px;}
  .botTop>div{display: flex;height: 70px;line-height: 70px;margin-left: 20px;}
  .botTop>div:nth-child(2)>div{margin-left: 20px;}
  .botTop>div:nth-child(2)>div:nth-child(1){margin-left: 0px;}
  .botTop>div:nth-child(2)>div:nth-child(2){height: 40px;line-height: 40px;margin-top: 12px;border: 1px solid #bbb;width: 100px;text-align: center;border-radius: 5px;background-color: #2baf2b;cursor: pointer;}
  .botTop>div:nth-child(2)>div:nth-child(3){height: 40px;line-height: 40px;margin-top: 12px;border: 1px solid #bbb;background-color: #ffa726;width: 100px;text-align: center;border-radius: 5px;cursor: pointer;}
  .botTopSele{display: flex;}
  .botBot li{display: flex;border-bottom: 1px solid #bbb;text-align: center;height: 100px;line-height: 100px;overflow: hidden;}
  .botBot>ul .fistLi{height: 40px;line-height: 40px;border-top: 1px solid #bbb;}
  .botBot>ul>li>div{width: 125px;}
  .botBot>ul>li>div:nth-child(3)>p{height: 25px;line-height: 25px;}
  .botBot .liHeadel>small{color: #259b24;cursor: pointer;}

  .addPopup{position: absolute;top: 20px;left: 30px;width: 600px;min-height: 250px;border: 1px solid #bbb;box-shadow: 0 0 3px #999;background-color: white;border-radius: 4px;overflow: hidden;}
  h3{height: 40px;line-height: 40px;margin: 0;padding: 0;padding-left: 10px;font-size: 16px;}
  .addInput>div{display: flex;margin-top: 15px;margin-left: 30px;height: 40px;line-height: 40px;}
  .addInput>div>div:nth-child(2){display: flex;}
  select{display:block;width:90px;height:25px;border:1px solid #bbb;border-radius:5px;margin-right: 20px;font-size: 16px;line-height: 25px;margin-top: 6px;text-align: center;}
  .faveBut{height: 40px;margin-top: 35px;display: flex;}
  .faveBut>div{width: 50%;text-align: center;line-height: 40px;color: white;cursor: pointer;}
  .faveBut>div:nth-child(1){background-color: #ffa726;}
  .faveBut>div:nth-child(2){background-color: #2baf2b;}
  input {width: 185px;height: 28px;font-size: 17px;border: 1px solid #bbb;border-radius: 5px;padding-left: 10px;font-size: 15px;line-height: 28px;margin-right: 15px;margin-top: 5px;}

</style>