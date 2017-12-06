<template>
  <swiper :options="swiperOption"  ref="mySwiper">  
   <swiper-slide v-for="(item,index) in items" :key="index"> 
     <img :src="item" class="index_img">
   </swiper-slide>  
   <!-- 这是轮播的小圆点 -->  
   <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "slider",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      items: [
        require("../image/1.jpg"),
        require("../image/2.jpg"),
        require("../image/3.jpg")
      ],
      swiperOption: {
        // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        pagination: ".swiper-pagination",
        slidesPerView: "auto",
        direction:"horizontal",
        // autoplay: true,
        centeredSlides: true,
        loop: true,
        paginationClickable: true,
        watchSlidesVisibility:true,
        onSlideChangeEnd: swiper => {
          //这个位置放swiper的回调方法
          this.page = swiper.realIndex + 1;
          this.index = swiper.realIndex;
        },
        swiperSlides: [1, 2, 3]
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // you can use current swiper instance object to do something(swiper methods)
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  }
};
</script>
<style scoped>
   /* .index_img{
       width: 100%;
       height:100%;
   }  */
</style>

