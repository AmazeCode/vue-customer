import Vue from 'vue'
import App from './App.vue'

import {store} from './store/store'

new Vue({
  //前面的store是一个属性，后边的store是store.js中export的store
  store:store,
  el: '#app',
  render: h => h(App)
})
