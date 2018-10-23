import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import HomeContainer from '@/components/tabbar/HomeContainer.vue'
import MemberContainer from '@/components/tabbar/MemberContainer.vue'
import SearchContainer from '@/components/tabbar/SearchContainer.vue'
import ShopcarContainer from '@/components/tabbar/ShopcarContainer.vue'
import NewList  from '@/components/news/NewList.vue'
import newsinfo from '@/components/news/Newinfo.vue'
import photolist from '@/components/photos/PhotoList.vue'
import photoinfo from '@/components/photos/photoinfo.vue'
import shoppingbuy from '@/components/shoppingbuys/shoppingbuy.vue'
import goodsinfo from '@/components/shoppingbuys/goodsinfo.vue'

export default new Router({
  routes: [
      {path: '/',redirect: '/home'},
      {path: '/home',component: HomeContainer},
     {path: '/shopping', component: ShopcarContainer },
     {path: '/search', component: SearchContainer },
     {path: '/member',component: MemberContainer},
     {path: '/home/newlist',component: NewList},
     {path: '/home/newsinfo/:id',component: newsinfo},
     {path: '/home/photolist',component:photolist},
    {path: '/home/photoinfo/:id',component: photoinfo},
    {path: '/home/shoppingbuy',component: shoppingbuy},
    {path: '/home/goodsinfo/:id',component: goodsinfo }
  ],
   linkActiveClass: 'mui-active'
})
