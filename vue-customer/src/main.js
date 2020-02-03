// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//引入路由模块
import VueRouter from 'vue-router'
//引入vue-resource
import VueResource from 'vue-resource'
//import App from './App'

//引入组件
import Customers from './components/Customers'
import About from './components/About'
import Add from './components/Add'
import CustomerDetails from './components/CustomerDetails'
import Edit from './components/Edit'

Vue.config.productionTip = false

//使用路由
Vue.use(VueRouter)
//使用VueResource
Vue.use(VueResource)

//设置路由
const router = new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    { path:"/",component:Customers},
    { path:"/about",component:About},
    { path:"/add",component:Add},
    { path:"/customer/:id",component:CustomerDetails},
    { path:"/edit/:id",component:Edit}
  ]
})
/* eslint-disable no-new */
new Vue({
  router
}).$mount("#app")
