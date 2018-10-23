// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'  
Vue.use(MintUI)
// 导入格式化时间的插件
import moment from 'moment'
//定义全局的过滤器
Vue.filter('dateFormat', function(datastr,pattern ="YYYY-MM-DD HH:mm:ss"){
  return moment(datastr).format(pattern)
})

import './assets/mui/css/mui.min.css'
import './assets/mui/css/icons-extra.css'
import { Header } from 'mint-ui'

import { Swipe, SwipeItem } from 'mint-ui'

import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.emulateJSON = true;  
/* eslint-disable no-new */
import VuePreview from 'vue-preview'

// defalut install
Vue.use(VuePreview)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
