<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div id="app" class="salesDetail">
        <div class="app1-O-top">
            <div class="app1-O-topl">
                <ul>
                    <li><small @click="salesBack">促销中心</small>/{{typeStr}}</li>
                </ul>
            </div>
            <div class="app1-O-topr">
            </div>
        </div>
        <div class="app1-O-bot">
            <div class="botTop">
                <div>
                    <div v-for="(select,index) in selects" :class="{selectBg:isSelect == index}" @click="selectClick(index)">{{select}}</div>
                </div>
                <div>
                    <div><img :src="seekImg" @click="searc" alt=""></div>
                    <div><input type="text" v-model="search" placeholder="搜索"></div>
                </div>
            </div>
            <div>
                <button @click="addPopup">新建{{typeStr}}</button>
            </div>
            <div>
                <ul :class="{'botFave':isSeek,'fave':isFave}">
                    <li class="firstLi">
                        <div>名称</div>
                        <div>面值</div>
                        <div>使用门槛</div>
                        <div>领取限制</div>
                        <div>有效期</div>
                        <div>领取人数</div>
                        <div>已使用</div>
                        <div>操作</div>
                    </li>
                    <li v-for="(list,index) in lists">
                        <div>
                            <p>{{list.name}}</p>
                        </div>
                        <div>{{list.face}}元</div>
                        <div>
                            <p>{{list.silla}}</p>
                        </div>
                        <div>
                            <p>一人一张</p>
                            <p>库存：{{list.gross}}</p>
                        </div>
                        <div>
                            <p>{{list.validDate}}</p>
                            <p>至</p>
                            <p>{{list.loseDate}}</p>
                        </div>
                        <div>{{list.peopleNum}}</div>
                        <div>{{list.yi}}</div>
                        <div class="seekOpearat">
                            <p @click="compile(index)">编辑</p>
                            <p @click="lose(index)">失效</p>
                        </div>
                    </li>
                    <li class="lastLi"></li>
                </ul>
                <ul :class="{'botSend':isSeekSend,'send':isSend}">
                    <li class="firstLi">
                        <div>名称</div>
                        <div>有效期</div>
                        <div>活动状态</div>
                        <div>操作</div>
                    </li>
                    <li v-for="(send,index) in sends">
                        <div>
                            {{send.name}}
                        </div>
                        <div>{{send.validDate}}至{{send.loseDate}}</div>
                        <div>{{send.type}}</div>
                        <div class="seekOpearat">
                            <p @click="compile(index)">编辑</p>
                            <p @click="lose(index)">失效</p>
                        </div>
                    </li>
                    <li class="lastLi"></li>
                </ul>
            </div>
            <!--优惠弹出框-->
            <div class="favepopup" v-show="favePopup">
                <h6>基本信息与规则填写</h6>
                <div class="favepopupTop">
                    <ul>
                        <li>
                            <div>名称：</div>
                            <div><input type="text" v-model="discount.name"></div>
                        </li>
                        <li :class="{'maType':isMaType}">
                            <div>码类型：</div>
                            <div class="radioD">
                                <input type="radio" value="通用" v-model="discount.yard">通用&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="radio" value="一卡一码" v-model="discount.yard">一卡一码
                            </div>
                        </li>
                        <li>
                            <div>{{popupTherr}}：</div>
                            <div><input type="text" v-model="discount.gross"></div>
                        </li>
                        <li>
                            <div>{{popupFour}}：</div>
                            <div><input type="text" v-model="discount.face"></div>
                        </li>
                    </ul>
                </div>
                <div class="favepopupBot">
                    <ul>
                        <li>
                            <div>适用门槛：</div>
                            <div class="faveSill">
                                <div><input type="radio" value="无限制" v-model="discount.sill">无限制</div>
                                <div><input type="radio" value="有限制" v-model="discount.sill">满<input type="text" v-model="discount.sillMoney">元可用</div>
                            </div>
                        </li>
                        <li>
                            <div>每人限领：</div>
                            <div><input type="text" v-model="discount.limit"></div>
                        </li>
                        <li id="time">
                            <div>生效时间：</div>
                            <div>
                                <input type="text" v-model.number="wornYear" pattern="(19|20)\d{2}">年
                                <input type="text" v-model.number="wornMonth" pattern="([1-9]|0[1-9]|1[0-2])">月
                                <input type="text" v-model.number="wornDay" pattern="([1-9]|0[1-9]|1[0-9]|2[0-9]|3[0-1])">日
                            </div>
                        </li>
                        <li id="time">
                            <div>失效时间：</div>
                            <div>
                                <input type="text" v-model.number="newYear" pattern="(19|20)\d{2}">年
                                <input type="text" v-model.number="newMonth" pattern="([1-9]|0[1-9]|1[0-2])">月
                                <input type="text" v-model.number="newDay" pattern="([1-9]|0[1-9]|1[0-9]|2[0-9]|3[0-1])">日
                            </div>
                        </li>
                        <li>
                            <div>适用对象：</div>
                            <div class="radioD">
                                <input type="radio" value="全程通用" v-model="discount.apply">全程通用&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="radio" value="指定商品" v-model="discount.apply">指定商品
                            </div>
                        </li>
                        <li>
                            <div></div>
                            <div class="lastCheck">
                                <input type="checkbox" v-model="discount.original">仅原价购买商品时可用
                            </div>
                        </li>
                        <li id="PopuplastLi">
                            注：红色项均为必填或必选项，通用码由运营设定一串10字以上的字符串
                        </li>
                    </ul>
                </div>
                <div class="faveBut">
                    <div @click="callOff">取消</div>
                    <div @click="submitAA">保存</div>
                </div>

            </div>
            <!--满减送弹出-->
            <div class="sendpopup" v-show="sendPopup">
                <h3>设置满减/送</h3>
                <div>
                    <ul>
                        <li class="sendpOne">
                            <h6>基本信息</h6>
                            <div>
                                <div>
                                    <div>活动名称：</div><input type="text" v-model="subtract.name">
                                </div>
                                <div>
                                    <div>生效时间：</div>
                                    <div>
                                        <input type="text" v-model.number="wornYear" pattern="(19|20)\d{2}">年
                                        <input type="text" v-model.number="wornMonth" pattern="([1-9]|0[1-9]|1[0-2])">月
                                        <input type="text" v-model.number="wornDay" pattern="([1-9]|0[1-9]|1[0-9]|2[0-9]|3[0-1])">日
                                        至：
                                        <input type="text" v-model.number="newYear" pattern="(19|20)\d{2}">年
                                        <input type="text" v-model.number="newMonth" pattern="(0[1-9]|1[0-2])">月
                                        <input type="text" v-model.number="newDay" pattern="([1-9]|0[1-9]|1[0-9]|2[0-9]|3[0-1])">日
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="sendpTwo">
                            <h6>优惠设置</h6>
                            <div>
                                <div>
                                    <input type="radio" value="普通优惠" v-model="subtract.rank">普通优惠
                                    <input type="radio" value="多级优惠" v-model="subtract.rank">多级优惠
                                </div>
                                <div class="sendpTwoLi">
                                    <ul>
                                        <li>
                                            <div>层级</div>
                                            <div>优惠门槛</div>
                                            <div>优惠方式</div>
                                        </li>
                                        <li>
                                            <div>一级</div>
                                            <div class="TwoLiInput">满<input type="text" v-model="subtract.sillMoney">元</div>
                                            <div>
                                                <div><input type="radio" value="减现金" v-model="subtract.favorable">减现金</div>
                                                <div><input type="radio" value="包邮" v-model="subtract.favorable">包邮</div>
                                                <div><input type="radio" value="优惠券" v-model="subtract.favorable">优惠券</div>
                                                <div><input type="radio" value="赠品" v-model="subtract.favorable">赠品</div>
                                                <div><input type="radio" value="会员" v-model="subtract.favorable">会员</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="sendpTherr">
                            <h6>活动设置</h6>
                            <div>
                                <div><input type="radio" value="全场商品" v-model="subtract.select">全场商品</div>
                                <div><input type="radio" value="指定商品" v-model="subtract.select">指定商品</div>
                            </div>
                        </li>
                        <li>
                            <div class="faveBut">
                                <div @click="callOff">取消</div>
                                <div @click="submitAA">保存</div>
                            </div>
                        </li>
                        <li class="sendpLastLi">

                        </li>
                    </ul>
                </div>
            </div>
            <!--拼团弹出-->
            <div class="tourpopup" v-show="tourPopup">
                <ul>
                    <li>
                        <div>选择商品：</div>
                        <div><img src="" alt=""></div>添加商品
                    </li>
                    <li>
                        <div>活动名称：</div>
                        <div><input type="text" v-model="tour.name"></div>
                    </li>
                    <li>
                        <div>生效时间：</div>
                        <div>
                            <input type="text" v-model.number="wornYear" pattern="(19|20)\d{2}">年
                            <input type="text" v-model.number="wornMonth" pattern="([1-9]|0[1-9]|1[0-2])">月
                            <input type="text" v-model.number="wornDay" pattern="([1-9]|1[0-9]|2[0-9]|3[0-1])">日 至：
                            <input type="text" v-model.number="newYear" pattern="(19|20)\d{2}">年
                            <input type="text" v-model.number="newMonth" pattern="([1-9]|0[1-9]|1[0-2])">月
                            <input type="text" v-model.number="newDay" pattern="([1-9]|1[0-9]|2[0-9]|3[0-1])">日
                        </div>
                    </li>
                    <li>
                        <div>参团人数：</div>
                        <div><input type="text" v-model="tour.peopleNumber">人</div>
                    </li>
                    <li>
                        <div>商品限购：</div>
                        <div><input type="radio" value="限购" v-model="tour.house"></div>
                        <div><input type="text" v-model="tour.houseStr">&nbsp;&nbsp;&nbsp;件/人</div>
                    </li>
                    <li>
                        <div>模拟成团：</div>
                        <div>
                            <div><input type="radio" value="模拟成团" v-model="tour.simulate">开启模拟成团</div>
                            <div>
                                <p>(开启模拟成团后，若活动截止时间前十分钟仍未到达开团人数，系统将模拟买家凑足人数)</p>
                            </div>
                        </div>
                    </li>
                    <li class="tourpopuplastLi">
                        <div>团购优惠：</div>
                        <div>
                            <ul>
                                <li>
                                    <div>商品原价</div>
                                    <div>团购价格</div>
                                    <div>库存数量</div>
                                </li>
                                <li v-for="purchasing in purchasings">
                                    <div>{{purchasing.money}}元</div>
                                    <div><input type="text" v-model="tour.group">&nbsp;元</div>
                                    <div>{{purchasing.num}}</div>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <div class="faveBut">
                    <div @click="callOff">取消</div>
                    <div @click="submitAA">保存</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex'
    export default {
        name: 'salesDetail',
        data() {
            return {
                isBg: 0,
                isSelect: 0,
                isSeek: true,
                isSeekSend: true,
                isFave: true,
                isSend: false,
                favePopup: false,
                sendPopup: false,
                tourPopup: false,
                isMaType: false,
                compileOrNew: '',
                popupTherr: '发送总量',
                popupFour: '面值',
                tools: ['优惠券', '优惠码', '满减/送', '多人拼团', '团购', '支付有礼', '限时折扣', '订单返现', '优惠套餐', '秒杀', '赠品', '多人成团', '找人代付', '我要送礼'],
                shares: ['微信', '微博', 'QQ', '圈子'],
                typeStr: '优惠券',
                selects: ['全部', '未开始', '进行中', '已结束'],
                // seekImg: require('src/img/seek.png'),
                lists: [
                    { name: '如果你无法简洁的表达你的说明那么只能说明你还不够了解他', face: '2', sill: '', silla: '满66元可以使用', gross: '1111', sillMoney: '66', validDate: '2016-12-12 12:21', loseDate: '2017-01-12 19:21', peopleNum: '12', yi: '8', apply: '1', original: true, yard: '通用' },
                    { name: '如果你无法不够了解他', face: '2', silla: '满66元可以使用', gross: '1111', sill: '', sillMoney: '66', validDate: '2016-12-12 12:21', loseDate: '2017-02-12 19:21', peopleNum: '12', yi: '8', apply: '2', original: false, yard: '一卡一码' },
                ],
                sends: [
                    { name: '如果你无法1', type: '正在进行中', validDate: '2016-12-12 12:21', loseDate: '2016-12-02 19:21', },
                    { name: '如果你无法2', type: '正在进行中', validDate: '2016-12-12 12:21', loseDate: '2016-12-03 19:21', },
                    { name: '如果你无法3', type: '正在进行中', validDate: '2016-12-12 12:21', loseDate: '2017-12-04 19:21', },
                    { name: '如果你无法4', type: '正在进行中', validDate: '2016-12-12 12:21', loseDate: '2016-12-12 19:21', }
                ],
                purchasings: [
                    { money: '50', num: '999' }
                ],
                search: '',
                wornYear: "",
                wornMonth: "",
                wornDay: "",
                newYear: "",
                newMonth: "",
                newDay: "",
                checkedIndex: '',
                // 优惠券
                discount: {
                    name: '',//名称
                    gross: '',//发送总量 或者 库存
                    face: '',//面值
                    yard: '',//码类型
                    sill: '',//使用门槛
                    sillMoney: '1',//使用门槛 满多少元可用
                    silla: '',//使用门槛完成状态
                    limit: '',//每人限领
                    validDate: '',//生效时间
                    loseDate: '',//失效时间
                    original: '',//原价购买时可用
                    apply: ''//使用对象
                },
                // 满减送
                subtract: {
                    name: '',//活动名称
                    favorable: '',//优惠项目
                    rank: '',//优惠级别
                    select: '',//指定商品
                    sillMoney: '0',//优惠门槛
                    validDate: '',//生效时间
                    loseDate: '',//失效时间
                },
                // 团购
                tour: {
                    name: '',//名称
                    peopleNumber: '',//参团人数
                    house: '',//是否限购
                    houseStr: '',//商品限购人数
                    simulate: '',//模拟成团
                    group: '',//团购优惠价格
                    validDate: '',//开始时间
                    loseDate: ''//结束时间
                }
            }
        },
        computed: mapState(['selesObj']),
        created: function () {
            var index = this.$route.query.cid;
            this.typeStr = this.tools[index];
            if (index <= 1) {
                this.isFave = false
                this.isSend = true
            } else {
                var sendDates = this.sends
                var timestamp = new Date().getTime();
                sendDates.forEach(function (ele, ind) {
                    var timeStr = ele.loseDate.split(' ')[0].replace(/-/g, '/');
                    var loseDateStr = new Date(timeStr)
                    if (loseDateStr >= timestamp) {
                        ele.type = '正在进行中'
                    } else {
                        ele.type = '已经进行完成'
                    }
                })
                this.isFave = true
                this.isSend = false
            }
        },
        methods: {
            greet: function (index) {
                this.isBg = index;
            },
            // 切换
            selectClick: function (index) {
                this.isSelect = index;
            },
            // 返回
            salesBack: function () {
                var ur = "/details/sales/sacenter"
                this.$router.push({
                    path: ur
                })
            },
            // 显示添加框
            addPopup: function () {
                this.compileOrNew = 'new'
                var discountObj = this.discount
                for (var key in discountObj) {
                    delete discountObj[key];
                }
                var subtractObj = this.subtract
                for (var key in subtractObj) {
                    delete subtractObj[key];
                }
                var tourObj = this.tour
                for (var key in tourObj) {
                    delete tourObj[key];
                }
                this.wornYear = ''
                this.wornMonth = ''
                this.wornDay = ''
                this.newYear = ''
                this.newMonth = ''
                this.newDay = ''
                var index = this.$route.query.cid;
                if (index == 0) {
                    this.isMaType = true
                    this.favePopup = true;
                }
                if (index == 1) {
                    this.favePopup = true;
                    this.isMaType = false
                    this.popupTherr = '库存'
                    this.popupFour = '面值'
                }
                if (index == 2) {
                    this.sendPopup = true;
                }
                if (index == 3) {
                    this.tourPopup = true;
                }
            },
            // 隐藏弹出框
            callOff: function () {
                var index = this.$route.query.cid;
                if (this.compileOrNew == 'new') {
                    this.favePopup = false;
                    this.sendPopup = false;
                    this.tourPopup = false;
                } else {
                    if (index == 0) {
                        var discountObj = {}
                        var obj = this.discount
                        for (var key in obj) {
                            discountObj[key] = obj[key]
                        }
                        this.lists.splice(this.checkedIndex, 1, discountObj)
                        for (var key in obj) {
                            delete obj[key];
                        }
                        this.favePopup = false;
                        this.sendPopup = false;
                        this.tourPopup = false;
                    }
                    if (index == 1) {
                        var discountObj = {}
                        var obj = this.discount
                        for (var key in obj) {
                            discountObj[key] = obj[key]
                        }
                        this.lists.splice(this.checkedIndex, 1, discountObj)
                        for (var key in obj) {
                            delete obj[key];
                        }
                        this.favePopup = false;
                        this.sendPopup = false;
                        this.tourPopup = false;
                    }
                    if (index == 2) {
                        var discountObj = {}
                        var obj = this.subtract
                        for (var key in obj) {
                            discountObj[key] = obj[key]
                        }
                        this.sends.splice(this.checkedIndex, 1, discountObj)
                        for (var key in obj) {
                            delete obj[key];
                        }
                        this.favePopup = false;
                        this.sendPopup = false;
                        this.tourPopup = false;
                    }
                    if (index == 3) {
                        var discountObj = {}
                        var obj = this.tour
                        for (var key in obj) {
                            discountObj[key] = obj[key]
                        }
                        this.sends  .splice(this.checkedIndex, 1, discountObj)
                        for (var key in obj) {
                            delete obj[key];
                        }
                        this.favePopup = false;
                        this.sendPopup = false;
                        this.tourPopup = false;
                    }
                }

            },
            // 搜索
            searc: function () {
                console.log('搜索', this.search)
            },
            // 编辑
            compile: function (index) {
                console.log('编辑', index)
                this.checkedIndex = index;
                this.compileOrNew = 'compole'
                var count = this.$route.query.cid;
                if (count == 0) {
                    var compileObj = this.lists[index];
                    var validDates = compileObj.validDate.split(' ')[0].split('-')
                    var loseDates = compileObj.loseDate.split(' ')[0].split('-')
                    this.wornYear = validDates[0]
                    this.wornMonth = validDates[1]
                    this.wornDay = validDates[2]
                    this.newYear = loseDates[0]
                    this.newMonth = loseDates[1]
                    this.newDay = loseDates[2]

                    if (compileObj.silla.length >= 4) {
                        compileObj.sill = '有限制'
                    } else {
                        compileObj.sill = '无限制'
                        compileObj.sillMoney = '0'
                    }
                    if (compileObj.apply == '1') {
                        compileObj.apply = '全程通用'
                    } else {
                        compileObj.apply = '指定商品'
                    }
                    this.discount = compileObj

                    this.isMaType = true
                    this.favePopup = true;
                }
                if (count == 1) {
                    var compileObj = this.lists[index];
                    var validDates = compileObj.validDate.split(' ')[0].split('-')
                    var loseDates = compileObj.loseDate.split(' ')[0].split('-')
                    this.wornYear = validDates[0]
                    this.wornMonth = validDates[1]
                    this.wornDay = validDates[2]
                    this.newYear = loseDates[0]
                    this.newMonth = loseDates[1]
                    this.newDay = loseDates[2]
                    if (compileObj.silla.length >= 4) {
                        compileObj.sill = '有限制'
                    } else {
                        compileObj.sill = '无限制'
                        compileObj.sillMoney = '0'
                    }
                    if (compileObj.apply == '1') {
                        compileObj.apply = '全程通用'
                    } else {
                        compileObj.apply = '指定商品'
                    }
                    this.discount = compileObj

                    this.favePopup = true;
                    this.isMaType = false
                    this.popupTherr = '库存'
                    this.popupFour = '面值'
                }
                if (count == 2) {
                    var compileObj = this.sends[index];
                    var validDates = compileObj.validDate.split(' ')[0].split('-')
                    this.wornYear = validDates[0]
                    this.wornMonth = validDates[1]
                    this.wornDay = validDates[2]
                    var loseDates = compileObj.loseDate.split(' ')[0].split('-')
                    this.newYear = loseDates[0]
                    this.newMonth = loseDates[1]
                    this.newDay = loseDates[2]

                    this.subtract = compileObj

                    this.sendPopup = true;
                }
                if (count == 3) {
                    var compileObj = this.sends[index];
                    var validDates = compileObj.validDate.split(' ')[0].split('-')
                    this.wornYear = validDates[0]
                    this.wornMonth = validDates[1]
                    this.wornDay = validDates[2]
                    var loseDates = compileObj.loseDate.split(' ')[0].split('-')
                    this.newYear = loseDates[0]
                    this.newMonth = loseDates[1]
                    this.newDay = loseDates[2]
                    this.tour = compileObj

                    this.tourPopup = true;
                }
                this.SelesCompile({ data }).then((data) => {
                    if (data.code == '200') {
                    } else {
                        console.log(data.message);
                    }
                }).catch((data) => {
                    console.log(data.message)
                })
            },
            // 失效
            lose: function (index) {
                console.log('失效', index)
                var count = this.$route.query.cid;
                if (count == 0) {
                    this.lists.splice(index, 1);
                }
                if (count == 1) {
                    this.lists.splice(index, 1);
                }
                if (count == 2) {
                    this.sends.splice(index, 1);
                }
                if (count == 3) {
                    this.sends.splice(index, 1);
                }
                this.SelesDelect({ data }).then((data) => {
                    if (data.code == '200') {
                    } else {
                        console.log(data.message);
                    }
                }).catch((data) => {
                    console.log(data.message)
                })
            },
            //保存
            submitAA: function () {
                if (/^(19|20)\d{2}$/.test(this.wornYear) == true && /^(0[1-9]|[1-9]|1[0-2])$/.test(this.wornMonth) && /^([1-9]|0[1-9]|1[0-9]|2[0-9]|3[0-1])$/.test(this.wornDay)) {
                    var wornStr = this.wornYear + '-' + this.wornMonth + '-' + this.wornDay + ' 00:00'
                    var newStr = this.newYear + '-' + this.newMonth + '-' + this.newDay + ' 00:00'
                    this.discount.validDate = wornStr;
                    this.discount.loseDate = newStr;
                    this.subtract.validDate = wornStr;
                    this.subtract.loseDate = newStr;
                    this.tour.validDate = wornStr;
                    this.tour.loseDate = newStr;
                    if (this.discount.sill == '无限制' || this.discount.sillMoney == '0' || this.discount.sillMoney == undefined) {
                        this.discount.silla = '无限制'
                    } else {
                        this.discount.silla = '满' + this.discount.sillMoney + '元可以使用'
                    }
                    var index = this.$route.query.cid;

                    if (this.compileOrNew == 'compole') {
                        if (index == 0) {
                            if (this.discount.name != '') {
                                this.favePopup = false;
                                this.sendPopup = false;
                                this.tourPopup = false;
                            } else {
                                alert('名称不能为空')
                            }
                        }
                        if (index == 1) {
                            if (this.discount.name != '') {
                                this.favePopup = false;
                                this.sendPopup = false;
                                this.tourPopup = false;
                            } else {
                                alert('名称不能为空')
                            }
                        }
                        if (index == 2) {
                            if (this.subtract.name != '') {
                                this.favePopup = false;
                                this.sendPopup = false;
                                this.tourPopup = false;
                            } else {
                                alert('名称不能为空')
                            }
                        }
                        if (index == 3) {
                            if (this.tour.name != '') {
                                this.favePopup = false;
                                this.sendPopup = false;
                                this.tourPopup = false;
                            } else {
                                alert('名称不能为空')
                            }
                        }
                    }
                    if (this.compileOrNew == 'new') {
                        if (index == 0) {
                            if (this.discount.name != '') {
                                var discountObj = {}
                                var obj = this.discount
                                for (var key in obj) {
                                    discountObj[key] = obj[key]
                                }
                                this.lists.push(discountObj)
                                this.favePopup = false;
                                this.sendPopup = false;
                                this.tourPopup = false;
                            } else {
                                alert('名称不能为空')
                            }
                        }
                        if (index == 1) {
                            if (this.discount.name != '') {
                                var discountObj = {}
                                var obj = this.discount
                                for (var key in obj) {
                                    discountObj[key] = obj[key]
                                }
                                this.lists.push(discountObj)
                                this.favePopup = false;
                                this.sendPopup = false;
                                this.tourPopup = false;
                            } else {
                                alert('名称不能为空')
                            }
                        }
                        if (index == 2) {
                            if (this.subtract.name != '') {
                                var discountObj = {}
                                var obj = this.subtract
                                for (var key in obj) {
                                    discountObj[key] = obj[key]
                                }
                                this.sends.push(discountObj)
                                this.favePopup = false;
                                this.sendPopup = false;
                                this.tourPopup = false;
                            } else {
                                alert('名称不能为空')
                            }
                        }
                        if (index == 3) {
                            if (this.tour.name != '') {
                                var discountObj = {}
                                var obj = this.tour
                                for (var key in obj) {
                                    discountObj[key] = obj[key]
                                }
                                this.sends.push(discountObj)
                                this.favePopup = false;
                                this.sendPopup = false;
                                this.tourPopup = false;
                            } else {
                                alert('名称不能为空')
                            }
                        }
                    }
                    if (index <= 1) {
                    } else {
                        var sendDates = this.sends
                        var timestamp = new Date().getTime();
                        sendDates.forEach(function (ele, ind) {
                            var timeStr = ele.loseDate.split(' ')[0].replace(/-/g, '/');
                            var loseDateStr = new Date(timeStr)
                            if (loseDateStr >= timestamp) {
                                ele.type = '正在进行中'
                            } else {
                                ele.type = '已经进行完成'
                            }
                        })
                    }
                } else {
                    alert('日期输入错误')
                }

                // 保存
                var data = {}
                this.SelesConserve(data).then((data) => {
                    if (data.code == '200') {
                    } else {
                        console.log(data.message);
                    }
                }).catch((data) => {
                    console.log(data.message)
                })
            },
            // 编辑
            ...mapActions(['SelesCompile']),
            // 删除
            ...mapActions(['SelesDelect']),
            // 保存
            ...mapActions(['SelesConserve']),
        }
    }
</script>

<style scoped>
    .app1-O {height: 100%;}
    .app1-O-top {height: 48px;border: 1px solid #bbb;border-left: 0;width: 100%;display: flex;justify-content: space-between;}
    .app1-O-topl>ul>li {float: left;line-height: 50px;margin-left: 30px;cursor: pointer;font-size: 14px;margin-right: 10px;height: 43px;}
    .app1-O-topl>ul>li>small {font-size: 15px;color: #2baf2b;}
    .app1-O-topl>ul .appLBg {border-bottom: 5px solid #3949ab;color: #20a0ff;}
    .app1-O-bot {margin-top: 20px;margin-left: 20px;width: 800px;border: 1px solid #bbb;min-height: 800px;position: relative;}

    input {width: 45px;height: 20px;font-size: 17px;border: 1px solid #bbb;border-radius: 5px;line-height: 20px;}
    .selectBg{background-color: #ffa726;}
    button {color: white;height: 30px;border: 1px solid #bbb;background-color: #2baf2b;text-align: center;line-height: 30px;border-radius: 5px;cursor: pointer;}
    .botTop{display: flex;height: 40px;justify-content: space-between;}
    .botTop>div:nth-child(1)>div{width: 100px;height: 40px;border: 1px solid #bbb;cursor: pointer;line-height: 40px;text-align: center;float: left;}
    .botTop>div:nth-child(2){width: 150px;display: flex;height: 40px;line-height: 40px;}
    .botTop>div:nth-child(2) img{margin-top: 7px;cursor: pointer;}
    .botTop>div:nth-child(2) input{width: 100px;text-align: left;padding-left: 10px;}
    .app1-O-bot>div:nth-child(2){height: 60px;line-height: 60px;padding-left: 20px;border-bottom: 1px solid #bbb;}
    .fave{display: none;}
    .send{display: none;}
    .botFave>li{display: flex;height: 100px;text-align: center;border-bottom: 1px solid #bbb;overflow: hidden;line-height: 100px;}
    p{margin: 0;padding: 0;line-height: 16px;}
    .botFave li>div{width: 100px;font-size: 14px;}
    .botFave li>div:nth-child(3){width: 140px;}
    .botFave li>div:nth-child(3)>p{margin-top: 20px;}
    .botFave li>div:nth-child(4){width: 110px;}
    .botFave li>div:nth-child(4)>p{margin-top: 15px;}
    .botFave li>div:nth-child(5){width: 160px;}
    .botFave li>div:nth-child(5)>p{margin-top: 13px;}
    .botFave .seekOpearat>p{margin-top: 20px;color: #2baf2b;cursor: pointer;}
    .botFave .firstLi{height: 40px;line-height: 40px;}
    .botFave .lastLi{height: 40px;}
    .botSend li{display: flex;height: 60px;text-align: center;border-bottom: 1px solid #bbb;overflow: hidden;line-height: 60px;}
    .botSend li>div{width: 150px;text-align: center;}
    .botSend li>div:nth-child(2){width: 260px;}
    .botSend li>div:nth-child(1){width: 235px;}
    .botSend .firstLi{height: 40px;line-height: 40px;}
    .botSend .lastLi{height: 40px;}
    .botSend .seekOpearat>p{margin-top: 10px;color: #2baf2b;cursor: pointer;}
    h6{font-size: 14px;height: 50px;margin: 0;padding: 0;line-height: 50px;padding-left: 30px;}
    /*优惠弹出框-------------------------------------------------*/
    .favepopup{position: absolute;top: 54px;left: 40px;width: 690px;min-height: 570px;border: 1px solid #bbb;background-color: white;box-shadow: 0 0 3px #990;border-radius: 5px;}
    .favepopup li{height: 30px;width: 100%;display: flex;line-height: 30px;margin-top: 10px;}
    .favepopup li>div:nth-child(1){margin-left: 20px;width: 120px;padding-left: 20px;color: red;}
    .favepopupTop li:nth-child(2)>div:nth-child(2){display: flex;}
    .favepopupTop li:nth-child(1)>div:nth-child(2) input{width: 200px;}
    .favepopupTop .radioD input{height: 20px;display: block;margin: 0;padding: 0;width: 20px;margin-top: 5px;margin-right: 5px;}
    .favepopupBot .radioD{display: flex;}
    .favepopupBot .radioD input{height: 20px;display: block;margin: 0;padding: 0;width: 20px;margin-top: 5px;margin-left: 5px;margin-right: 5px;}
    .favepopup input{width: 200px;height: 20px;font-size: 17px;border: 1px solid #bbb;border-radius: 5px;line-height: 20px;padding-left: 7px;font-size: 15px;}
    .favepopupTop .maType{display: none;}
    .favepopup .favepopupBot li:nth-child(1){height: 60px;}
    .faveSill div:nth-child(1){width: 500px;height: 30px;display: flex;}
    .faveSill div:nth-child(2){width: 500px;height: 30px;display: flex;}
    .favepopup .favepopupBot .faveSill div:nth-child(2) input[type="text"]{height: 20px;margin-top: 5px;margin-left: 10px;margin-right: 10px;width: 80px;padding-left: 7px;font-size: 15px;}
    .favepopup .favepopupBot .faveSill input{height: 20px;display: block;margin: 0;padding: 0;width: 20px;margin-top: 5px;margin-right: 5px;}
    input[type="checkbox"]{height: 20px;display: block;margin: 0;padding: 0;width:20px;margin-top: 5px;margin-right: 5px;}
    .lastCheck{width: 500px;display: flex;}
    #PopuplastLi{width: 600px;text-align: right;color: red;font-size: 13px;overflow: hidden;padding-left: 270px;}
    .faveBut{height: 40px;margin-top: 15px;display: flex;}
    .faveBut>div{width: 50%;text-align: center;line-height: 40px;color: white;cursor: pointer;}
    .faveBut>div:nth-child(1){background-color: #ffa726;}
    .faveBut>div:nth-child(2){background-color: #2baf2b;}
    #time input{width: 40px;}
    /*满减送弹出框---------------------------------------------------*/
    .sendpopup{position: absolute;top: 52px;left: 0px;width: 800px;min-height: 600px;background-color: white;overflow: hidden;}
    .sendpopup h3{margin: 0;padding: 0;height: 40px;background-color: #bbb;color: white;font-size: 14px;line-height: 40px;width: 100%;padding-left: 30px;}
    .sendpOne{height: 130px;}
    .sendpOne>div{height: 80px;overflow: hidden;}
    .sendpOne>div>div{height: 40px;line-height: 40px;margin-left: 30px;display: flex;}
    .sendpOne>div>div:nth-child(1) input{width: 200px;margin-top: 9px;}
    .sendpOne>div>div:nth-child(1)>div:nth-child(1){color: red;}
    .sendpOne>div>div:nth-child(2)>div:nth-child(1){color: red;}
    .sendpTwo{height: 300px;overflow: hidden;}
    .sendpTwo .TwoLiInput input{width: 100px;}
    .sendpTwo>div{height: 250px;margin-left: 30px;}
    .sendpTwo>div>div:nth-child(1){height: 40px;line-height: 40px;display: flex;}
    .sendpTwoLi li{display: flex;border-bottom: 1px solid #bbb;text-align: center;border-left: 1px solid #bbb;}
    .sendpTwoLi li:nth-child(1){border-top: 1px solid #bbb;height: 40px;line-height: 40px;}
    .sendpTwoLi li>div:nth-child(1){width: 150px;}
    .sendpTwoLi li>div:nth-child(2){width: 250px;}
    .sendpTwoLi li>div:nth-child(3){width: 350px;}
    .sendpTwoLi li:nth-child(2)>div:nth-child(2){line-height: 150px;}
    .sendpTwoLi li:nth-child(2)>div:nth-child(1){line-height: 150px;}
    .sendpTwoLi li:nth-child(2)>div:nth-child(3)>div{width: 350px;height: 30px;display: flex;line-height: 30px;text-align: center;padding-left: 130px;overflow: hidden;}
    .sendpTwoLi li:nth-child(2)>div:nth-child(3)>div input{height: 20px;display: block;margin: 0;padding: 0;width: 20px;margin-top: 5px;margin-right: 5px;}
    .sendpTwo>div>div:nth-child(1) input{height: 20px;display: block;margin: 0;padding: 0;width: 20px;margin-top: 10px;margin-right: 5px;margin-left: 5px;}

    .sendpTherr>div{height: 80px;padding-left: 30px;}
    .sendpTherr>div>div{display: flex;margin-top: 5px;}
    .sendpBut{height: 100px;border: 1px solid red;}
    .sendpLastLi{height: 200px;}
    /*拼团弹出框----------------------------------------------*/
    .tourpopup{position: absolute;top: 54px;left: 20px;width: 660px;min-height: 538px;border: 1px solid #bbb;background-color: white;border-radius: 5px;box-shadow: 0 0 3px #999;}
    .tourpopup>ul>li{display: flex;min-height: 40px;margin-top: 15px;margin-left: 10px;}
    .tourpopup>ul>li>div:nth-child(1){width: 100px;margin-left: 20px;color: red;}
    .tourpopup>ul>li:nth-child(1)>div:nth-child(2){width: 100px;height: 100px;border: 1px solid #bbb;}
    .tourpopup p{font-size: 14px;}
    .tourpopup>ul>li:nth-child(2)>div:nth-child(2) input{width: 190px;}
    .tourpopup>ul>li:nth-child(4)>div:nth-child(2) input{width: 100px;margin-right: 10px;}
    .tourpopup>ul>li:nth-child(6)>div:nth-child(2)>div:nth-child(1){display: flex;height: 30px;line-height: 30px;padding-left: 7px;}
    .tourpopup>ul>li:nth-child(6)>div:nth-child(2)>div:nth-child(1) input{height: 20px;display: block;margin: 0;padding: 0;width: 20px;margin-top: 5px;margin-right: 15px;margin-left: 14px;}
    .tourpopuplastLi>div:nth-child(2){width: 500px;}
    .tourpopuplastLi>div:nth-child(2) li{display: flex;height: 50px;border: 1px solid #bbb;line-height: 50px;text-align: center;}
    .tourpopuplastLi>div:nth-child(2) li:nth-child(1){border-bottom: 0;}
    .tourpopuplastLi>div:nth-child(2) li>div{width: 170px;}
    .tourpopuplastLi>div:nth-child(2) li>div input{width: 70px;}
</style>