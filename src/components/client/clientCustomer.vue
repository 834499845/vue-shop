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
          <div>手机号：</div>
          <input type="text" v-model="name">
        </div>
        <div>
          <div>昵称：</div>
          <input type="text" v-model="phone">
        </div>
        <div>
          <div>来源：</div>
          <select v-model="sourceSelect">
            <option v-for="source in sources">{{source}}</option>
          </select>
        </div>
        <div>
          <div>购次：</div>
          <input type="text" v-model="shopnumber">
        </div>
        <div>
          <button @click="fifler">筛选</button>
          <small @click="fiflerliatten">特别关注</small>
        </div>
      </div>
      <div class="botSeek">
        <ul>
          <li class="fistLi">
            <div>昵称</div>
            <div>来源</div>
            <div>手机号</div>
            <div>购次</div>
            <div>累计消费（元）</div>
            <div>操作</div>
          </li>
          <li v-for="list in lists">
            <div>{{list.name}}</div>
            <div>{{list.laiyu}}</div>
            <div>{{list.phone}}</div>
            <div>{{list.cishu}}</div>
            <div>{{list.xiaofei}}</div>
            <div class="liatten">特别关注</div>
          </li>
          <li class="lastLi"></li>
        </ul>
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
                phone: '',
                name: '',
                shopnumber: '',
                items: ['客户管理'],
                lists: [],
                clients: [{
                    name: '昵称12',
                    laiyu: '一号广告位',
                    phone: '12312341234',
                    cishu: '32',
                    xiaofei: '123'
                }, {
                    name: '昵称32',
                    laiyu: '2号广告位',
                    phone: '12312341234',
                    cishu: '32',
                    xiaofei: '123'
                }, {
                    name: '昵称4',
                    laiyu: '3号广告位',
                    phone: '12312341234',
                    cishu: '32',
                    xiaofei: '123'
                }, {
                    name: '昵称6',
                    laiyu: '4号广告位',
                    phone: '12312341234',
                    cishu: '32',
                    xiaofei: '123'
                }],
                sourceSelect: '一号广告位',
                sources: ['一号广告位', '一号广告位', ]
            }
        },
        created: function() {
            this.lists = this.clients
        },
        methods: {
            greet: function(index) {
                this.isBg = index;
            },
            fifler: function() {
                console.log('筛选', this.name, this.phone, this.sourceSelect, this.shopnumber)
                this.lists = this.clients
                var arr = this.lists;
                var nameStr = this.name
                var phoneStr = this.phone
                var sourceSelectStr = this.sourceSelect
                var shopnumberStr = this.shopnumber
                var newArr = [];
                arr.forEach(function(ele, index) {
                    if (nameStr != '') {
                        if (ele.name.indexOf(nameStr) > -1) {
                            newArr.push(arr[index])
                        }
                    }
                })
                this.lists = newArr;
            },
            fiflerliatten: function() {
                console.log('特别关注')
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
    }
    
    .botTop {
        height: 130px;
        border-bottom: 1px solid #bbb;
    }
    
    .botTop>div {
        height: 40px;
        float: left;
        width: 250px;
        margin-left: 12px;
        display: flex;
        line-height: 40px;
        text-align: center;
        margin-top: 20px;
    }
    
    .botTop>div>div:nth-child(1) {
        width: 80px;
    }
    
    button {
        border-radius: 5px;
        ;
        width: 70px;
        height: 30px;
        border: 1px solid #bbb;
        background-color: #2baf2b;
        margin-top: 5px;
        margin-left: 20px;
        margin-right: 15px;
        cursor: pointer;
    }
    
    select {
        margin: 0;
        padding: 0;
        display: block;
        width: 150px;
        height: 30px;
        border: 1px solid #bbb;
        border-radius: 5px;
        font-size: 16px;
        margin-top: 5px;
    }
    
    input {
        margin-top: 3px;
        width: 180px;
        height: 26px;
        font-size: 17px;
        border: 1px solid #bbb;
        border-radius: 5px;
        line-height: 26px;
    }
    
    .liatten {
        color: #2baf2b;
        cursor: pointer;
    }
    
    .botSeek li {
        display: flex;
        text-align: center;
        height: 60px;
        border-bottom: 1px solid #bbb;
        line-height: 60px;
    }
    
    .botSeek .fastLi {
        height: 40px;
        line-height: 40px;
    }
    
    .botSeek .lastLi {
        height: 40px;
        line-height: 40px;
        border: 0;
    }
    
    .botSeek li>div {
        width: 130px;
    }
    
    small {
        color: #2baf2b;
        cursor: pointer;
    }
</style>