<template>
     <div class="photoinfo-container">
    <h3>{{ photoinfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ photoinfo.add_time | dateFormat }}</span>
      <span>点击：{{ photoinfo.click }}次</span>
    </p>

    <hr>

    <!-- 缩略图区域 --> 
     <div class="thumbs">
         <vue-preview :slides="slide1"></vue-preview>
      <!-- <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)" :key="item.src"> -->
    </div>

    <!-- 图片内容区域 -->
    <div class="content" v-html="photoinfo.content"></div>

    <!-- 放置一个现成的 评论子组件 -->
    <cmt-box :id="id"></cmt-box>
  </div>
</template>

<script>
import comment from "../subcomponents/comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      photoinfo: {},
      slide1: [
        {
          src:
            "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg",
          msrc:
            "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg",
          alt: "picture1",
          title: "Image Caption 1",
          w: 600,
          h: 400
        }
      ]
    };
  },
  created() {
    this.getPhotoInfo();
    this.getInfoImg()
  },
  
  components: {
    // 注册 评论子组件
    "cmt-box": comment
  },
  methods: {
    getPhotoInfo() {
      this.$http
        .get("http://027xin.com:8899/api/getimageInfo/" + this.id)
        .then(result => {
          if (result.body.status === 0) {
            this.photoinfo == result.body.message[0];
          }
        });
    },
    getInfoImg() {
      this.$http
        .get("http://027xin.com:8899/api/getthumimages/" + this.id)
        .then(result => {
          if (result.body.status === 0) {
            result.body.message.forEach(item => {
              item.w = 600;
              item.h = 400;
              item.msrc=item.src
              console.log(result.body)
            });
            this.slide1 = result.body.message
            console.log(123)
          }
        });
    }
  }
};
</script>

<style lang="scss" >
.photoinfo-container {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }

  .content {
    font-size: 13px;
    line-height: 30px;
    display: inline-block;

  }
  .thumbs{
    figure{
        display: inline-block;
        margin: 0;
      }
  }
  img{
        margin: 10px;
        box-shadow: 0 0 8px #999;
        height: 6.25rem;
        }
  }
</style>
