<template>
<div>
    <mt-swipe :auto="4000" >
        <mt-swipe-item v-for="(item,index) in imageList" :key="index">
            <img :src="item.img||item.src" :class="{'full':isfull}">
        </mt-swipe-item>
    </mt-swipe>
    
    </div>
</template>

<script>
    export default {
        props: ['imageList','isfull']
    }
</script>

<style lang="scss">
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
      text-align: center;
    img {
      height: 100%;
    }
  }
}

.full{
    width: 100%;
}

</style>
