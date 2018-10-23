<template>
    <div class="goodsinfo">
        <!-- 商品轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
              <swiper :imageList="lunbotu" :isfull="false"></swiper>
        </div>
      </div>
    </div>

     <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">
          商品的标题
      </div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
              市场价: <del>￥2699</del> &nbsp;&nbsp; 销售价: <span class="moneny">￥2199</span>
          </p>
          <p>  购买数量: </p>  
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small">加入购物车</mt-button>
       
          </p>
        </div>
      </div>
    </div>

  <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：</p>
          <p>库存情况：件</p>
          <p>上架时间：</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large">图文介绍</mt-button>
        <mt-button type="danger" size="large">商品评论</mt-button>
      </div>
    </div>
    </div>
</template>

<script>

import swiper from '../subcomponents/swiper.vue'
export default {
    data(){
        return{
            id: this.$route.params.id,
            lunbotu:[]
        }
    },
    created(){
        this.getLunbotu()
    },
    methods: {
        getLunbotu(){
              this.$http.get('http://027xin.com:8899/api/getthumimages/' + this.id).then(result=>{
                  if(result.body.status===0){
                     this.lunbotu = result.body.message
                  }
              })
        }
    },
    components:{
        swiper
    }
}
</script>

<style lang="scss">
.moneny{
  color: red;
  font-size: 16px;
  font-weight: bold;
}
</style>
