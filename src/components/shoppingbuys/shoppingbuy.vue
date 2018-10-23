<template>
    <div class="goods-list">
        <div class="goods-item" v-for="item in goodlist" :key="item.id" @click="goDetail(item.id)">
         <img :src="item.img_url" alt="">
          <h3 class="title">{{ item.title }}</h3>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{ item.sell_price}}</span>
                    <span class="old">￥{{ item.market_price }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{ item.stock_quantity }}件</span>
                </p>
            </div>
    </div>
    <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
    
</template>

<script>
export default {
    data(){
        return{
            goodlist:[],
            pageindex: 1
        }
    },
    created(){
        this.getGoodsList()
    },
    methods: {
        getGoodsList(){
            this.$http.get('http://027xin.com:8899/api/getgoods?pageindex=' + this.pageindex).then(result=>{
                if(result.body.status===0){
                    this.goodlist =this.goodlist.concat(result.body.message)
                }
            })
        },
        getMore(){
            this.pageindex++,
            this.getGoodsList()
        },
        goDetail(id){
                this.$router.push({ path: "/home/goodsinfo/" + id });
        }
    }
};
</script>

<style lang="scss">
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;

  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }
    .info {
      background-color: #eee;
      p {
        margin: 0;
        padding: 0;
      }
      .price {
        .now {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>
