<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id="app" class="orderApp">
    <div class="orderNav">
      <span>首页&nbsp;&nbsp;></span>
      <span>订单管理&nbsp;&nbsp;></span>
      <span>所有订单</span>
    </div>
    <div class="orderMain">
      <ul>
        <li class="Mlist">
          <div>
            <div class="Msearch">
              <div @click="seekUser">
                <span class="glyphicon glyphicon-search"></span>
              </div>
              <div>
                <input @keyup="inputSeek" type="text" v-model="seekValue" placeholder="请输入搜索内容">
              </div>
              <!--<div @click="allUser">
                重&nbsp;置
              </div>-->
            </div>
            <div class="Madd" @click="addUser">
              <span class="glyphicon glyphicon-plus"></span>
              <button>添加用户</button>
            </div>
          </div>
          <div class="MlistCont">
            <div>
              <ul class="MlistContLi">
                <li class="MlastLi">
                  <div>姓名</div>
                  <div>性别</div>
                  <div>年龄</div>
                  <div>籍贯</div>
                  <div>国籍</div>
                  <div>创建时间</div>
                  <div>操作</div>
                </li>
                <li v-for="(list,index) in lists" class="contLi">
                  <div>{{list.name}}</div>
                  <div>{{list.sex}}</div>
                  <div>{{list.age}}</div>
                  <div>{{list.native}}</div>
                  <div>{{list.nationality}}</div>
                  <div>{{list.creationtime}}</div>
                  <div class="MListOperation">
                    <div @click="delUser(index)">删除</div>
                    <div @click="updetaUser(index)">修改</div>
                    <div @click="delaitUser(index)">详情</div>
                  </div>
                </li>
                <li class="lastTwoLi"></li>
                <li class="lastLi">
                  <div class="lastSel">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]"
                      :page-size="pageSizeNum" layout="total, sizes, prev, pager, next" :total="totalNum">
                      </el-pagination>
                  </div>
                  <div class="lastPag">
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!--添加弹窗-->
    <div class="addPopup" v-show="addPopupShow">
      <div class="addmessage">
        <div>
          <span>{{addOrUp}}用户</span>
          <span @click="closeUser">X</span>
        </div>
        <div>
          <div class="addLeft">姓名：</div>
          <div class="addRight">
            <input type="text" v-model="namevalue" placeholder="请输入姓名">
          </div>
        </div>
        <div>
          <div class="addLeft">年龄：</div>
          <div class="addRight">
            <input type="text" v-model="agevalue" placeholder="请输入年龄">
          </div>
        </div>
        <div>
          <div class="addLeft">性别：</div>
          <div class="addRight">
            <el-radio class="radio" v-model="radio" label="1">男</el-radio>
            <el-radio class="radio" v-model="radio" label="2">女</el-radio>
          </div>
        </div>
        <div>
          <div class="addLeft">籍贯：</div>
          <div class="addRight">
            <el-select v-model="provincevalue" placeholder="请选择省份">
              <el-option v-for="item in provinces" :label="item" :value="item">
              </el-option>
            </el-select>
            <el-select v-model="cityvalue" placeholder="请选择城市">
              <el-option v-for="item in citys" :label="item" :value="item">
              </el-option>
            </el-select>
          </div>
        </div>
        <div>
          <div class="addLeft">国籍：</div>
          <div class="addRight">
            <el-select v-model="nationalityvalue" placeholder="请选择国籍">
              <el-option v-for="item in nationalitys" :label="item" :value="item">
              </el-option>
            </el-select>
          </div>
        </div>
        <div>
          <div class="addLeft">创建时间：</div>
          <div class="addRight">
            <el-date-picker v-model="creationtimeValue" type="date" placeholder="选择日期" :picker-options="pickerOptions">
            </el-date-picker>
          </div>
        </div>
        <div>
          <div class="addLeft">备注：</div>
          <div class="addRight">
            <textarea v-model="textvalue">

            </textarea>
          </div>
        </div>
        <div class="popupLog">
          <button @click="add">{{addOrUp}}</button>
          <button @click="closeUser">取消</button>
        </div>
      </div>
    </div>
    <!--删除操作-->
    <div class="delPopup" v-show="delPopupShow">
      <div>
        <span>提示</span>
        <span @click="closeUser">X</span>
      </div>
      <div>
        你确定要删除姓名为：<b>{{delName}}</b>&nbsp;的用户吗？
      </div>
      <div>
        <button @click="del">确认</button>
        <button @click="closeUser">取消</button>
      </div>
    </div>
    <!--详细信息-->
    <div class="addPopup" v-show="detailPopupShow">
      <div class="addmessage" v-for="detail in details">
        <h3>用户详情</h3>
        <div>
          <div class="addLeft">姓名：</div>
          <div class="addRight">
            {{detail.name}}
          </div>
        </div>
        <div>
          <div class="addLeft">年龄：</div>
          <div class="addRight">
            {{detail.sex}}
          </div>
        </div>
        <div>
          <div class="addLeft">性别：</div>
          <div class="addRight">
            {{detail.age}}
          </div>
        </div>
        <div>
          <div class="addLeft">籍贯：</div>
          <div class="addRight">
            {{detail.native}}
          </div>
        </div>
        <div>
          <div class="addLeft">国籍：</div>
          <div class="addRight">
            {{detail.nationality}}
          </div>
        </div>
        <div>
          <div class="addLeft">创建时间：</div>
          <div class="addRight">
            {{detail.creationtime}}
          </div>
        </div>
        <div>
          <div class="addLeft">备注：</div>
          <div class="addRight">
            {{detail.text}}
          </div>
        </div>
        <div class="popupLog">
          <button @click="closeUser">关闭</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        name: 'orderApp',
        data() {
            return {
                items: [{
                    "name": '订单管理',
                    'but': ''
                }, {
                    "name": '订单概况',
                    'but': 'general'
                }, {
                    "name": '所有订单',
                    'but': 'all'
                }, {
                    "name": '维权订单',
                    'but': 'safeguard'
                }, {
                    "name": '评价订单',
                    'but': 'evaluate'
                }],
                lists: [{
                    name: '1张三',
                    sex: '男',
                    age: '20',
                    native: '陕西-西安',
                    nationality: '中国',
                    creationtime: '2017-12-09',
                    text: '张三111'
                }, {
                    name: '1李四',
                    sex: '女',
                    age: '21',
                    native: '陕西-咸阳',
                    nationality: '中国',
                    creationtime: '2017-12-19',
                    text: '李四111'
                }, {
                    name: '1王五',
                    sex: '男',
                    age: '22',
                    native: '陕西-汉中',
                    nationality: '中国',
                    creationtime: '2017-12-29',
                    text: '王五111'
                }, {
                    name: '1刘大力',
                    sex: '女',
                    age: '23',
                    native: '陕西-榆林',
                    nationality: '中国',
                    creationtime: '2017-12-11',
                    text: '刘大力111'
                }, {
                    name: '1张铁蛋',
                    sex: '男',
                    age: '24',
                    native: '陕西-宝鸡',
                    nationality: '中国',
                    creationtime: '2017-12-18',
                    text: '张铁蛋111'
                }, {
                    name: '1张三',
                    sex: '男',
                    age: '25',
                    native: '陕西-西安',
                    nationality: '中国',
                    creationtime: '2017-12-09',
                    text: '张三2222'
                }, {
                    name: '1李四',
                    sex: '女',
                    age: '26',
                    native: '陕西-咸阳',
                    nationality: '中国',
                    creationtime: '2017-12-19',
                    text: '李四222'
                }, {
                    name: '1王五',
                    sex: '男',
                    age: '27',
                    native: '陕西-汉中',
                    nationality: '中国',
                    creationtime: '2017-12-29',
                    text: '王五2222'
                }, {
                    name: '1刘大力',
                    sex: '女',
                    age: '28',
                    native: '陕西-榆林',
                    nationality: '中国',
                    creationtime: '2017-12-11',
                    text: '刘大力2222'
                }, {
                    name: '1张铁蛋',
                    sex: '男',
                    age: '29',
                    native: '陕西-宝鸡',
                    nationality: '中国',
                    creationtime: '2017-12-18',
                    text: '张铁蛋2222'
                }, {
                    name: '2张三',
                    sex: '男',
                    age: '20',
                    native: '陕西-西安',
                    nationality: '中国',
                    creationtime: '2017-12-09',
                    text: '张三111'
                }, {
                    name: '2李四',
                    sex: '女',
                    age: '21',
                    native: '陕西-咸阳',
                    nationality: '中国',
                    creationtime: '2017-12-19',
                    text: '李四111'
                }, {
                    name: '2王五',
                    sex: '男',
                    age: '22',
                    native: '陕西-汉中',
                    nationality: '中国',
                    creationtime: '2017-12-29',
                    text: '王五111'
                }, {
                    name: '2刘大力',
                    sex: '女',
                    age: '23',
                    native: '陕西-榆林',
                    nationality: '中国',
                    creationtime: '2017-12-11',
                    text: '刘大力111'
                }, {
                    name: '2张铁蛋',
                    sex: '男',
                    age: '24',
                    native: '陕西-宝鸡',
                    nationality: '中国',
                    creationtime: '2017-12-18',
                    text: '张铁蛋111'
                }, {
                    name: '2张三',
                    sex: '男',
                    age: '25',
                    native: '陕西-西安',
                    nationality: '中国',
                    creationtime: '2017-12-09',
                    text: '张三2222'
                }, {
                    name: '2李四',
                    sex: '女',
                    age: '26',
                    native: '陕西-咸阳',
                    nationality: '中国',
                    creationtime: '2017-12-19',
                    text: '李四222'
                }, {
                    name: '2王五',
                    sex: '男',
                    age: '27',
                    native: '陕西-汉中',
                    nationality: '中国',
                    creationtime: '2017-12-29',
                    text: '王五2222'
                }, {
                    name: '2刘大力',
                    sex: '女',
                    age: '28',
                    native: '陕西-榆林',
                    nationality: '中国',
                    creationtime: '2017-12-11',
                    text: '刘大力2222'
                }, {
                    name: '2张铁蛋',
                    sex: '男',
                    age: '29',
                    native: '陕西-宝鸡',
                    nationality: '中国',
                    creationtime: '2017-12-18',
                    text: '张铁蛋2222'
                }, {
                    name: '3张三',
                    sex: '男',
                    age: '20',
                    native: '陕西-西安',
                    nationality: '中国',
                    creationtime: '2017-12-09',
                    text: '张三111'
                }, {
                    name: '3李四',
                    sex: '女',
                    age: '21',
                    native: '陕西-咸阳',
                    nationality: '中国',
                    creationtime: '2017-12-19',
                    text: '李四111'
                }, {
                    name: '3王五',
                    sex: '男',
                    age: '22',
                    native: '陕西-汉中',
                    nationality: '中国',
                    creationtime: '2017-12-29',
                    text: '王五111'
                }, {
                    name: '3刘大力',
                    sex: '女',
                    age: '23',
                    native: '陕西-榆林',
                    nationality: '中国',
                    creationtime: '2017-12-11',
                    text: '刘大力111'
                }, {
                    name: '3张铁蛋',
                    sex: '男',
                    age: '24',
                    native: '陕西-宝鸡',
                    nationality: '中国',
                    creationtime: '2017-12-18',
                    text: '张铁蛋111'
                }, {
                    name: '3张三',
                    sex: '男',
                    age: '25',
                    native: '陕西-西安',
                    nationality: '中国',
                    creationtime: '2017-12-09',
                    text: '张三2222'
                }, {
                    name: '3李四',
                    sex: '女',
                    age: '26',
                    native: '陕西-咸阳',
                    nationality: '中国',
                    creationtime: '2017-12-19',
                    text: '李四222'
                }, {
                    name: '3王五',
                    sex: '男',
                    age: '27',
                    native: '陕西-汉中',
                    nationality: '中国',
                    creationtime: '2017-12-29',
                    text: '王五2222'
                }, {
                    name: '3刘大力',
                    sex: '女',
                    age: '28',
                    native: '陕西-榆林',
                    nationality: '中国',
                    creationtime: '2017-12-11',
                    text: '刘大力2222'
                }, {
                    name: '3张铁蛋',
                    sex: '男',
                    age: '29',
                    native: '陕西-宝鸡',
                    nationality: '中国',
                    creationtime: '2017-12-18',
                    text: '张铁蛋2222'
                }, {
                    name: '4张三',
                    sex: '男',
                    age: '20',
                    native: '陕西-西安',
                    nationality: '中国',
                    creationtime: '2017-12-09',
                    text: '张三111'
                }, {
                    name: '4李四',
                    sex: '女',
                    age: '21',
                    native: '陕西-咸阳',
                    nationality: '中国',
                    creationtime: '2017-12-19',
                    text: '李四111'
                }, {
                    name: '4王五',
                    sex: '男',
                    age: '22',
                    native: '陕西-汉中',
                    nationality: '中国',
                    creationtime: '2017-12-29',
                    text: '王五111'
                }, {
                    name: '4刘大力',
                    sex: '女',
                    age: '23',
                    native: '陕西-榆林',
                    nationality: '中国',
                    creationtime: '2017-12-11',
                    text: '刘大力111'
                }, {
                    name: '4张铁蛋',
                    sex: '男',
                    age: '24',
                    native: '陕西-宝鸡',
                    nationality: '中国',
                    creationtime: '2017-12-18',
                    text: '张铁蛋111'
                }, {
                    name: '4张三',
                    sex: '男',
                    age: '25',
                    native: '陕西-西安',
                    nationality: '中国',
                    creationtime: '2017-12-09',
                    text: '张三2222'
                }, ],
                listCopy: [{
                        name: '1张三',
                        sex: '男',
                        age: '20',
                        native: '陕西-西安',
                        nationality: '中国',
                        creationtime: '2017-12-09',
                        text: '张三111'
                    }, {
                        name: '1李四',
                        sex: '女',
                        age: '21',
                        native: '陕西-咸阳',
                        nationality: '中国',
                        creationtime: '2017-12-19',
                        text: '李四111'
                    }, {
                        name: '1王五',
                        sex: '男',
                        age: '22',
                        native: '陕西-汉中',
                        nationality: '中国',
                        creationtime: '2017-12-29',
                        text: '王五111'
                    }, {
                        name: '1刘大力',
                        sex: '女',
                        age: '23',
                        native: '陕西-榆林',
                        nationality: '中国',
                        creationtime: '2017-12-11',
                        text: '刘大力111'
                    }, {
                        name: '1张铁蛋',
                        sex: '男',
                        age: '24',
                        native: '陕西-宝鸡',
                        nationality: '中国',
                        creationtime: '2017-12-18',
                        text: '张铁蛋111'
                    }, {
                        name: '1张三',
                        sex: '男',
                        age: '25',
                        native: '陕西-西安',
                        nationality: '中国',
                        creationtime: '2017-12-09',
                        text: '张三2222'
                    }, {
                        name: '1李四',
                        sex: '女',
                        age: '26',
                        native: '陕西-咸阳',
                        nationality: '中国',
                        creationtime: '2017-12-19',
                        text: '李四222'
                    }, {
                        name: '1王五',
                        sex: '男',
                        age: '27',
                        native: '陕西-汉中',
                        nationality: '中国',
                        creationtime: '2017-12-29',
                        text: '王五2222'
                    }, {
                        name: '1刘大力',
                        sex: '女',
                        age: '28',
                        native: '陕西-榆林',
                        nationality: '中国',
                        creationtime: '2017-12-11',
                        text: '刘大力2222'
                    }, {
                        name: '1张铁蛋',
                        sex: '男',
                        age: '29',
                        native: '陕西-宝鸡',
                        nationality: '中国',
                        creationtime: '2017-12-18',
                        text: '张铁蛋2222'
                    }, {
                        name: '2张三',
                        sex: '男',
                        age: '20',
                        native: '陕西-西安',
                        nationality: '中国',
                        creationtime: '2017-12-09',
                        text: '张三111'
                    }, {
                        name: '2李四',
                        sex: '女',
                        age: '21',
                        native: '陕西-咸阳',
                        nationality: '中国',
                        creationtime: '2017-12-19',
                        text: '李四111'
                    }, {
                        name: '2王五',
                        sex: '男',
                        age: '22',
                        native: '陕西-汉中',
                        nationality: '中国',
                        creationtime: '2017-12-29',
                        text: '王五111'
                    }, {
                        name: '2刘大力',
                        sex: '女',
                        age: '23',
                        native: '陕西-榆林',
                        nationality: '中国',
                        creationtime: '2017-12-11',
                        text: '刘大力111'
                    }, {
                        name: '2张铁蛋',
                        sex: '男',
                        age: '24',
                        native: '陕西-宝鸡',
                        nationality: '中国',
                        creationtime: '2017-12-18',
                        text: '张铁蛋111'
                    }, {
                        name: '2张三',
                        sex: '男',
                        age: '25',
                        native: '陕西-西安',
                        nationality: '中国',
                        creationtime: '2017-12-09',
                        text: '张三2222'
                    }, {
                        name: '2李四',
                        sex: '女',
                        age: '26',
                        native: '陕西-咸阳',
                        nationality: '中国',
                        creationtime: '2017-12-19',
                        text: '李四222'
                    }, {
                        name: '2王五',
                        sex: '男',
                        age: '27',
                        native: '陕西-汉中',
                        nationality: '中国',
                        creationtime: '2017-12-29',
                        text: '王五2222'
                    }, {
                        name: '2刘大力',
                        sex: '女',
                        age: '28',
                        native: '陕西-榆林',
                        nationality: '中国',
                        creationtime: '2017-12-11',
                        text: '刘大力2222'
                    }, {
                        name: '2张铁蛋',
                        sex: '男',
                        age: '29',
                        native: '陕西-宝鸡',
                        nationality: '中国',
                        creationtime: '2017-12-18',
                        text: '张铁蛋2222'
                    }, {
                        name: '3张三',
                        sex: '男',
                        age: '20',
                        native: '陕西-西安',
                        nationality: '中国',
                        creationtime: '2017-12-09',
                        text: '张三111'
                    }, {
                        name: '3李四',
                        sex: '女',
                        age: '21',
                        native: '陕西-咸阳',
                        nationality: '中国',
                        creationtime: '2017-12-19',
                        text: '李四111'
                    }, {
                        name: '3王五',
                        sex: '男',
                        age: '22',
                        native: '陕西-汉中',
                        nationality: '中国',
                        creationtime: '2017-12-29',
                        text: '王五111'
                    }, {
                        name: '3刘大力',
                        sex: '女',
                        age: '23',
                        native: '陕西-榆林',
                        nationality: '中国',
                        creationtime: '2017-12-11',
                        text: '刘大力111'
                    }, {
                        name: '3张铁蛋',
                        sex: '男',
                        age: '24',
                        native: '陕西-宝鸡',
                        nationality: '中国',
                        creationtime: '2017-12-18',
                        text: '张铁蛋111'
                    }, {
                        name: '3张三',
                        sex: '男',
                        age: '25',
                        native: '陕西-西安',
                        nationality: '中国',
                        creationtime: '2017-12-09',
                        text: '张三2222'
                    }, {
                        name: '3李四',
                        sex: '女',
                        age: '26',
                        native: '陕西-咸阳',
                        nationality: '中国',
                        creationtime: '2017-12-19',
                        text: '李四222'
                    }, {
                        name: '3王五',
                        sex: '男',
                        age: '27',
                        native: '陕西-汉中',
                        nationality: '中国',
                        creationtime: '2017-12-29',
                        text: '王五2222'
                    }, {
                        name: '3刘大力',
                        sex: '女',
                        age: '28',
                        native: '陕西-榆林',
                        nationality: '中国',
                        creationtime: '2017-12-11',
                        text: '刘大力2222'
                    }, {
                        name: '3张铁蛋',
                        sex: '男',
                        age: '29',
                        native: '陕西-宝鸡',
                        nationality: '中国',
                        creationtime: '2017-12-18',
                        text: '张铁蛋2222'
                    }, {
                        name: '4张三',
                        sex: '男',
                        age: '20',
                        native: '陕西-西安',
                        nationality: '中国',
                        creationtime: '2017-12-09',
                        text: '张三111'
                    }, {
                        name: '4李四',
                        sex: '女',
                        age: '21',
                        native: '陕西-咸阳',
                        nationality: '中国',
                        creationtime: '2017-12-19',
                        text: '李四111'
                    }, {
                        name: '4王五',
                        sex: '男',
                        age: '22',
                        native: '陕西-汉中',
                        nationality: '中国',
                        creationtime: '2017-12-29',
                        text: '王五111'
                    }, {
                        name: '4刘大力',
                        sex: '女',
                        age: '23',
                        native: '陕西-榆林',
                        nationality: '中国',
                        creationtime: '2017-12-11',
                        text: '刘大力111'
                    }, {
                        name: '4张铁蛋',
                        sex: '男',
                        age: '24',
                        native: '陕西-宝鸡',
                        nationality: '中国',
                        creationtime: '2017-12-18',
                        text: '张铁蛋111'
                    }, {
                        name: '4张三',
                        sex: '男',
                        age: '25',
                        native: '陕西-西安',
                        nationality: '中国',
                        creationtime: '2017-12-09',
                        text: '张三2222'
                    },

                ],
                details: [],
                listSeek: [],
                currentPage: 1,
                totalNum: 120,
                pageSizeNum: 10,
                count: '',
                addPopupShow: false,
                delPopupShow: false,
                detailPopupShow: false,
                delName: '张三',
                addOrUp: '添加',
                nationalitys: [
                    '中国', '外国'
                ],
                provinces: [
                    '陕西', '山西', '江苏', '河北', '甘肃', '四川'
                ],
                citys: [
                    '西安', '太原', '苏州', '石家庄', '兰州', '玉树'
                ],
                pickerOptions: {
                    disabledDate(time) {
                        return false;
                    }
                },
                radio: '1',
                creationtimeValue: '',
                nationalityvalue: '',
                cityvalue: '',
                provincevalue: '',
                textvalue: '',
                namevalue: '',
                agevalue: '',
                seekValue: '',
            }
        },
        created: function() {
            // 初始化分页
            var pageLists = this.lists;
            var page = this.pageSizeNum
            this.lists = pageLists.slice(0, page)
            this.totalNum = pageLists.length
        },
        methods: {
            // 设置每页个数
            handleSizeChange(val) {
                var pageLists
                if (this.seekValue != '') {
                    pageLists = this.listSeek;
                } else {
                    pageLists = this.listCopy;
                }
                this.pageSizeNum = val;
                this.lists = pageLists.slice(0, val)
            },
            // 点击分页
            handleCurrentChange(val) {
                var pageLists;
                if (this.seekValue != '') {
                    pageLists = this.listSeek;
                } else {
                    pageLists = this.listCopy;
                }
                var page = this.pageSizeNum
                var startPage = (val - 1) * page
                var endPage = val * page
                this.lists = pageLists.slice(startPage, endPage)
            },
            // 开启添加
            addUser: function() {
                this.addPopupShow = true;
                this.delPopupShow = false;
                this.addOrUp = '添加'
            },
            // 取消或返回关闭
            closeUser: function() {
                this.addPopupShow = false;
                this.delPopupShow = false;
                this.detailPopupShow = false;
                this.textvalue = ''
                this.radio = ''
                this.namevalue = ''
                this.agevalue = ''
                this.cityvalue = ''
                this.provincevalue = ''
                this.creationtimeValue = ''
                this.nationalityvalue = ''
            },
            // 添加
            add: function() {
                var str = this.addOrUp

                function dateFun(date) {
                    var year = date.getFullYear() < 10 ? '0' + date.getFullYear() : date.getFullYear()
                    var month = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()
                    var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
                    var timeStr = year + '-' + month + '-' + day
                    return timeStr
                }
                if (str == "添加") {
                    var date, creationtimeValue
                    if (this.creationtimeValue == '' || this.creationtimeValue == undefined) {
                        date = new Date()
                    } else {
                        creationtimeValue = this.creationtimeValue
                        date = new Date(creationtimeValue.getTime())
                    }
                    var timeStr = dateFun(date)
                    var radio = this.radio == 1 ? '男' : '女'
                    var nationalityvalue = this.nationalityvalue
                    var cityvalue = this.cityvalue
                    var provincevalue = this.provincevalue
                    var textvalue = this.textvalue
                    var namevalue = this.namevalue
                    var agevalue = this.agevalue
                    var nativeStr = provincevalue + '-' + cityvalue;
                    var addObj = {
                        name: namevalue,
                        sex: radio,
                        age: agevalue,
                        native: nativeStr,
                        nationality: nationalityvalue,
                        creationtime: timeStr,
                        text: textvalue
                    }
                    var lists = this.lists;
                    lists.push(addObj)
                    this.listCopy.push(addObj)
                    this.addPopupShow = false;
                } else {
                    var ind = this.count
                    var timeStr;
                    if (this.creationtimeValue == undefined) {
                        var dateStr = new Date()
                        timeStr = dateFun(dateStr)
                    } else {
                        if (this.creationtimeValue.length == undefined) {
                            var creationtimeValue = this.creationtimeValue
                            var dateStr = new Date(creationtimeValue.getTime())
                            timeStr = dateFun(dateStr)
                        } else {
                            timeStr = this.creationtimeValue
                        }
                    }
                    var radio = this.radio == 1 ? '男' : '女'
                    var nationalityvalue = this.nationalityvalue
                    var cityvalue = this.cityvalue
                    var provincevalue = this.provincevalue
                    var textvalue = this.textvalue
                    var namevalue = this.namevalue
                    var agevalue = this.agevalue
                    var nativeStr = provincevalue + '-' + cityvalue;
                    var upObj = {
                        name: namevalue,
                        sex: radio,
                        age: agevalue,
                        native: nativeStr,
                        nationality: nationalityvalue,
                        creationtime: timeStr,
                        text: textvalue
                    }
                    var lists = this.lists;
                    lists.splice(ind, 1, upObj)
                    this.listCopy.splice(ind, 1, upObj)
                    this.addPopupShow = false;
                }
            },
            // 搜索
            seekUser: function() {
                var arr = this.listCopy;
                var seaStr = this.seekValue;
                var searchs = []
                var seeks = []
                arr.forEach(function(ele) {
                    var str = ''
                    for (var key in ele) {
                        str += ele[key]
                    }
                    searchs.push(str);
                    if (searchs.length == arr.length) {
                        searchs.forEach(function(ele, index) {
                            if (ele.indexOf(seaStr) > -1) {
                                seeks.push(arr[index])
                            }
                        })
                    }
                })
                var page = this.pageSizeNum
                this.lists = seeks.slice(0, page)
                this.listSeek = seeks
                this.totalNum = seeks.length
            },
            // 实时搜索
            inputSeek: function() {
                if (this.seekValue != '') {
                    var arr = this.listCopy;
                    var seaStr = this.seekValue;
                    var searchs = []
                    var seeks = []
                    arr.forEach(function(ele) {
                        var str = ''
                        for (var key in ele) {
                            str += ele[key]
                        }
                        searchs.push(str);
                        if (searchs.length == arr.length) {
                            searchs.forEach(function(ele, index) {
                                if (ele.indexOf(seaStr) > -1) {
                                    seeks.push(arr[index])
                                }
                            })
                        }
                    })
                    var page = this.pageSizeNum
                    this.lists = seeks.slice(0, page)
                    this.listSeek = seeks
                    this.totalNum = seeks.length
                } else {
                    var pageLists = this.listCopy;
                    var page = this.pageSizeNum
                    this.lists = pageLists.slice(0, page)
                    this.totalNum = pageLists.length
                    this.currentPage = 1
                }
            },
            // 删除开启
            delUser: function(index) {
                this.delPopupShow = true
                this.count = index
                this.delName = this.lists[index].name
            },
            // 删除
            del: function() {
                var cou = this.count;
                this.lists.splice(cou, 1)
                this.delPopupShow = false;
                this.listCopy.splice(cou, 1)
                var pageLists = this.listCopy;
                var page = this.pageSizeNum
                this.lists = pageLists.slice(0, page)
                this.totalNum = pageLists.length
            },
            // 更新
            updetaUser: function(index) {
                this.addOrUp = '更新'
                this.textvalue = ''
                this.radio = ''
                this.namevalue = ''
                this.agevalue = ''
                this.cityvalue = ''
                this.provincevalue = ''
                this.creationtimeValue = ''
                this.nationalityvalue = ''
                var updataObj = this.lists[index];
                this.radio = updataObj.sex == '男' ? '1' : '2'
                this.creationtimeValue = updataObj.creationtime
                this.nationalityvalue = updataObj.nationality
                var citys = updataObj.native.split('-');
                var cityStr = citys[1]
                var provinceStr = citys[0]
                this.cityvalue = cityStr
                this.provincevalue = provinceStr
                this.textvalue = updataObj.text
                this.namevalue = updataObj.name
                this.agevalue = updataObj.age
                this.count = index
                this.addPopupShow = true;
                this.delPopupShow = false;
            },
            // 详情
            delaitUser: function(index) {
                this.detailPopupShow = true
                this.details = [];
                this.details.push(this.lists[index])
            },
            //显示全部重置
            allUser: function() {
                // 重置
                var pageLists = this.listCopy;
                var page = this.pageSizeNum
                this.lists = pageLists.slice(0, page)
                this.totalNum = pageLists.length
            }
        }
    }
</script>
<style scoped>
    .orderApp {}
    
    .orderNav {
        height: 55px;
        width: 100%;
        background-color: #f6f8f8;
        overflow: hidden;
        line-height: 55px;
        padding-left: 25px;
    }
    
    .orderNav span {
        font-size: 16px;
        font-family: "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        color: #1f2d3d;
        cursor: pointer;
    }
    
    .orderNav span:last-of-type {
        color: #99a9bf;
    }
    
    .orderMain {
        background-color: #f0f3f4;
    }
    
    .orderApp>ul>li {
        min-height: 500px;
        width: 100%;
    }
    
    #maps {
        width: 100%;
        height: 500px;
    }
    
    .Mlist {
        margin-bottom: 40px;
        background-color: white;
    }
    
    .Mlist>div:nth-child(1) {
        height: 51px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #eff2f7;
        box-shadow: 0 1px 1px #e5e9f2;
    }
    
    .Madd {
        display: flex;
        height: 35px;
        background-color: #20a0ff;
        overflow: hidden;
        margin-top: 9px;
        border-radius: 4px;
        margin-right: 30px;
    }
    
    .Madd button {
        height: 35px;
        width: 76px;
        border: 0;
        line-height: 35px;
        font-size: 16px;
        color: white;
        background-color: #20a0ff;
        display: block;
        text-align: left;
    }
    
    .Madd span {
        font-size: 15px;
        padding-left: 5px;
        line-height: 35px;
        display: inline-block;
        width: 18px;
        height: 35px;
    }
    
    .Msearch {
        width: 400px;
        height: 50px;
        margin-left: 40px;
        display: flex;
        line-height: 50px;
        overflow: hidden;
    }
    
    .Msearch input {
        width: 200px;
        height: 36px;
        border: 0;
        font-size: 16px;
        padding-left: 5px;
        outline: none
    }
    
    .Msearch>div:nth-child(1) {
        position: relative;
        width: 35px;
        height: 44px;
        top: 0;
        left: 0;
    }
    
    .Msearch>div:nth-child(2) {
        cursor: pointer;
    }
    
    .Msearch span {
        font-size: 19px;
        line-height: 30px;
        margin-top: 9px;
        margin-left: 3px;
    }
    
    .Msearch>div:nth-child(1):before {
        position: absolute;
        top: 40px;
        left: 0px;
        height: 2px;
        width: 220px;
        background-color: #d3dce6;
        content: "";
    }
    
    .Msearch>div:nth-child(3) {
        width: 80px;
        height: 35px;
        margin-left: 50px;
        line-height: 35px;
        margin-top: 8px;
        box-shadow: 0 1px 1px #1d8ce0;
        background-color: #1d8ce0;
        border-radius: 3px;
        text-align: center;
        font-size: 16px;
        color: white;
        cursor: pointer;
    }
    
    .MlistCont {
        width: 100%;
        min-height: 650px;
        background-color: #e5e9f2;
        overflow: hidden;
    }
    
    .MlistCont>div {
        width: 98%;
        min-width: 650px;
        margin: 0 auto;
        border: 1px solid #f9fafc;
        box-shadow: 1px 1px 1px #f9fafc;
        min-height: 500px;
        margin-top: 30px;
        background-color: white;
        border-radius: 3px;
    }
    
    .MlistContLi li {
        height: 50px;
        line-height: 50px;
        display: flex;
        text-align: center;
        overflow: hidden;
        border-bottom: 1px solid #e5e9f2;
        margin: 0;
        padding: 0;
    }
    
    .MlistContLi ul {
        border: 1px solid white;
    }
    
    .MlistContLi li>div {
        width: 8%;
        height: 50px;
    }
    
    .MlistContLi .contLi:hover {
        background-color: #eff2f7;
    }
    
    .MlistContLi li>div:nth-child(1) {
        width: 14%;
    }
    
    .MlistContLi li>div:nth-child(4) {
        width: 15%;
    }
    
    .MlistContLi li>div:nth-child(5) {
        width: 10%;
    }
    
    .MlistContLi li>div:nth-child(6) {
        width: 25%;
    }
    
    .MlistContLi li>div:nth-child(7) {
        width: 27%;
    }
    
    .MlistContLi .MlastLi {
        height: 40px;
        line-height: 40px;
        border-bottom: 2px solid #e5e9f2;
        font-weight: 600;
    }
    
    .MlistContLi .lastTwoLi {
        height: 20px;
        border: 0;
    }
    
    .MListOperation {
        display: flex;
    }
    
    .MListOperation>div {
        width: 33%;
        font-size: 16px;
        cursor: pointer;
    }
    
    .MListOperation>div:nth-child(1) {
        color: #ff4949;
    }
    
    .MListOperation>div:nth-child(2) {
        color: #f7ba2a;
    }
    
    .MListOperation>div:nth-child(3) {
        color: #1d8ce0;
    }
    
    .MlistContLi .lastLi {
        height: 50px;
        border-top: 1px solid #d3dce6;
        border-bottom: 0;
        display: flex;
        justify-content: space-between;
    }
    
    .MlistContLi .lastLi .lastSel {
        width: 530px;
        height: 35px;
        margin-top: 10px;
    }
    
    .MlistContLi .lastLi .lastPag {
        width: 50px;
        height: 35px;
        margin-top: 5px;
    }
    /*添加弹窗---------------------------------------*/
    
    .addPopup {
        position: fixed;
        top: -50px;
        left: 0;
        width: 100%;
        height: calc(100vh + 100px);
        background-color: rgba(229, 233, 242, 0.7);
        overflow: hidden;
        z-index: 10000;
    }
    
    .addmessage {
        width: 650px;
        background-color: white;
        height: 600px;
        margin: 60px auto;
        border-radius: 5px;
        overflow: hidden;
    }
    
    .addmessage>div {
        border-bottom: 1px solid white;
        display: flex;
        width: 100%;
        height: 50px;
        line-height: 50px;
        margin-top: 10px;
    }
    
    .addmessage>div:nth-child(1) {
        height: 50px;
        margin: 0;
        padding: 0;
        text-align: center;
        font-size: 18px;
        display: flex;
        justify-content: space-between;
    }
    
    .addmessage>div:nth-child(1)>span:nth-child(1) {
        font-weight: 600;
        color: #000;
        padding-left: 30px;
        font-size: 20px;
    }
    
    .addmessage>div:nth-child(1)>span:nth-child(2) {
        font-weight: 100;
        color: #d3dce6;
        padding-right: 10px;
        cursor: pointer;
    }
    
    h3 {
        min-height: 50px;
        line-height: 50px;
        margin: 0;
        padding: 0;
        text-align: center;
    }
    
    .addLeft {
        width: 150px;
        text-align: center;
        font-size: 16px;
    }
    
    .addRight {
        width: 490px;
        margin-left: 5px;
        padding-top: 5px;
        overflow: hidden;
    }
    
    .addmessage>div:nth-child(3) .addRight {
        padding: 0px;
    }
    
    .addmessage>div:nth-child(2) .addRight {
        padding: 0px;
    }
    
    .addmessage>div:nth-child(4) .addRight {
        padding: 0px;
    }
    
    .addmessage>div:nth-child(8) .addRight {
        padding: 0px;
    }
    
    .addRight input {
        width: 400px;
        height: 35px;
        border: 1px solid #d3dce6;
        margin: 0;
        padding: 0;
        border-radius: 3px;
        padding-left: 10px;
        outline: none
    }
    
    .radio {
        margin: 0;
        padding: 0;
    }
    
    .addRight textarea {
        width: 480px;
        height: 92px;
        border: 1px solid #99a9bf;
        border-radius: 5px;
        font-size: 16px;
        padding: 0;
        line-height: 20px;
        padding-left: 5px;
        padding-top: 5px;
    }
    
    .addmessage>div:nth-child(8) {
        height: 100px;
    }
    
    .addmessage .popupLog {
        display: flex;
        justify-content: center;
    }
    
    .popupLog button {
        width: 90px;
        height: 40px;
        background-color: #20a0ff;
        line-height: 40px;
        color: white;
        font-size: 16px;
        margin-right: 15px;
        margin-left: 15px;
        margin-top: 5px;
        border-radius: 3px;
    }
    
    .popupLog button:nth-child(1) {
        background-color: #13ce66;
        border: 1px solid #13ce66;
    }
    
    .popupLog button:nth-child(2) {
        background-color: #ff4949;
        border: 1px solid #ff4949;
    }
    /*删除弹框------------------------------------------------*/
    
    .delPopup {
        position: fixed;
        top: 110px;
        left: 400px;
        width: 480px;
        height: 250px;
        background-color: white;
        border-radius: 5px;
        border: 1px solid #f4f5f6;
        box-shadow: 0 2px 2px #f4f5f6;
    }
    
    .delPopup>div:nth-child(1) {
        height: 50px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        line-height: 50px;
    }
    
    .delPopup>div:nth-child(1)>span:nth-child(1) {
        color: #f7ba2a;
        font-size: 16px;
        font-weight: 700;
        margin-left: 30px;
    }
    
    .delPopup>div:nth-child(1)>span:nth-child(2) {
        font-size: 18px;
        font-weight: 100;
        margin-right: 10px;
        color: #d3dce6;
        cursor: pointer;
    }
    
    .delPopup>div:nth-child(2) {
        height: 140px;
        width: 100%;
        line-height: 140px;
        text-align: center;
        border-top: 1px solid #f4f5f6;
        color: #000;
        font-size: 22px;
    }
    
    .delPopup>div:nth-child(2) b {
        color: red;
    }
    
    .delPopup>div:nth-child(3) {
        height: 55px;
        width: 100%;
        border-top: 1px solid #f4f5f6;
        line-height: 55px;
        text-align: right;
    }
    
    .delPopup>div:nth-child(3) button {
        width: 90px;
        height: 40px;
        background-color: #20a0ff;
        line-height: 40px;
        color: white;
        font-size: 16px;
        margin-right: 15px;
        margin-left: 15px;
        margin-top: 10px;
        border-radius: 3px;
        border: 0;
    }
    
    .delPopup>div:nth-child(3) button:nth-child(1) {
        background-color: #546a79;
    }
    
    .delPopup>div:nth-child(3) button:nth-child(2) {
        background-color: #20a0ff;
    }
</style>