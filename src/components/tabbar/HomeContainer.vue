<template>
    <div>

    <!-- 轮播图坑 -->
  <swiper :imageList="imageList" :isfull="true"></swiper>


     <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newlist">
                <img src="../../assets/images/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
                <img src="../../assets/images/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/shoppingbuy">
                <img src="../../assets/images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../assets/images/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../assets/images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../assets/images/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div></a></li>
     </ul> 
</div>

</template>

<script>

import swiper from '../subcomponents/swiper.vue'
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      imageList: []
    };
  },
  created() {
    this.getlunbo();
  },
  methods: {
    getlunbo() {
      this.$http.get("http://027xin.com:8899/api/getlunbo").then(result => {
      
        if (result.body.status === 0) {
          this.imageList = result.body.message;
        } else {
          Toast("数据加载失败...");
        }
      });
    }
  },
  components:{
    swiper
  }

};
</script>

<style lang="scss" scoped>

.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  img {
    width: 60px;
    height: 60px;
  }
  .mui-media-body{
    font-size: 13px;
  }
}
</style>
