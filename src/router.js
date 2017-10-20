/**
 * Created by LangK on 2016/12/19.
 */

import VueRouter from 'vue-router'

import Commodity from './components/commodity/commodity.vue'
import Commoditydb from './components/commodity/commoditydb.vue'
import Compilea from './components/commodity/commoditycompile.vue'
import Commodityclass from './components/commodity/commodityclass.vue'

import Order from './components/order/order.vue'
import General from './components/order/orderGeneral.vue'
import All from './components/order/orderAll.vue'
import Safeguard from './components/order/orderSafeguard.vue'
import Evaluate from './components/order/orderEvaluate.vue'

import Sales from './components/sales/sales.vue'
import Sacenter from './components/sales/salesSacenter.vue'
import SalesDetail from './components/sales/salesDetail.vue'

import Property from './components/property/property.vue'
import Income from './components/property/propertyIncome.vue'
import Transaction from './components/property/propertyTransaction.vue'
import Bill from './components/property/propertyBill.vue'

import Datas from './components/datas/datas.vue'
import Roughly from './components/datas/datasRoughly.vue'
import Flow from './components/datas/datasFlow.vue'
import Dcommodity from './components/datas/datasCommodity.vue'
import Deal from './components/datas/datasDeal.vue'

import Client from './components/client/client.vue'
import Customer from './components/client/clientCustomer.vue'

import Homepage from './components/homepage/homepage.vue'
import Advertisement from './components/homepage/homepageAdvertisement.vue'
import Homepageadd from './components/homepage/homepageadd.vue'

import Store from './components/store/store.vue'
import Storecollect from './components/store/storeStorecollect.vue'
import Datacollect from './components/store/storeDatacollect.vue'

import Details from './components/Details.vue'

export default [
  { path: '/', redirect: '/details/commodity' },
  // { path: '/details', redirect: '/details/commodity' },
  // { path: '/details/commodity', redirect: '/details/commodity/commoditydb' },
  // { path: '/details/order', redirect: '/details/order/general' },
  // { path: '/details/sales', redirect: '/details/sales/sacenter' },
  // { path: '/details/property', redirect: '/details/property/income' },
  // { path: '/details/datas', redirect: '/details/datas/roughly' },
  // { path: '/details/client', redirect: '/details/client/customer' },
  // { path: '/details/homepage', redirect: '/details/homepage/advertisement' },
  // { path: '/details/store', redirect: '/details/store/storecollect' },
  // { path: '/details', redirect: '/details/commodity' },
  {
    path: '/details', component: Details,
    children: [
      {
        path: 'commodity', component: Commodity,
        children: [
          {path: 'commoditydb', component: Commoditydb},
          { path: 'commodityclass', component: Commodityclass },
          { path: 'compil', component: Compilea }
        ]
      },
      {
        path: 'order', component: Order,
        children: [
          { path: 'general', component: General },
          { path: 'all', component: All },
          { path: 'safeguard', component: Safeguard },
          { path: 'evaluate', component: Evaluate }
        ]
      },
      {
        path: 'sales', component: Sales,
        children: [
          { path: 'sacenter', component: Sacenter },
          { path: 'salesdetail', component: SalesDetail }
        ]
      },
      {
        path: 'property', component: Property,
        children: [
          { path: 'income', component: Income },
          { path: 'transaction', component: Transaction },
          { path: 'bill', component: Bill }
        ]
      },
      {
        path: 'datas', component: Datas,
        children: [
          { path: 'roughly', component: Roughly },
          { path: 'flow', component: Flow },
          { path: 'commodity', component: Dcommodity },
          { path: 'deal', component: Deal }
        ]
      },
      {
        path: 'client', component: Client,
        children: [
          { path: 'customer', component: Customer },
        ]
      },
      {
        path: 'homepage', component: Homepage,
        children: [
          { path: 'advertisement', component: Advertisement },
          { path: 'homepageadd', component: Homepageadd }

        ]
      },
      {
        path: 'store', component: Store,
        children: [
          { path: 'storecollect', component: Storecollect },
          { path: 'datacollect', component: Datacollect },
        ]
      },
    ]
  }
]

