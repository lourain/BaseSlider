<template>
  <div class="bigBox">
      <ul class="slider_box" >
          <li v-for="item in imgs" :key="item">
            <img :src="item" alt="">
          </li>
      </ul>
      <ol>
        <li :class="{'current':index==0}">1</li>
        <li :class="{'current':index==1}">2</li>
        <li :class="{'current':index==2}">3</li>
      </ol>
  </div>
</template>
<script>
export default {
  name: "baseSlider",
  data() {
    return {
      imgs: [
        require("../image/1.jpg"),
        require("../image/2.jpg"),
        require("../image/3.jpg"),
        require("../image/1.jpg")
      ],
      index: 0
    };
  },
  mounted() {
    this.autoPlay()
  },
  methods: {
    autoPlay() {
      let that = this;
      setInterval(function() {
        that.index++;
        that.move();
      }, 3000);
    },
    move() {
      let that = this;
      $(".slider_box").animate({ left: -400 * this.index + "px" }, function() {
        if (that.index >= 3) {
          that.index = 0;
          $(this).css("left", "0px");
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.bigBox {
  width: 400px;
  overflow: hidden;
  position: relative;
  border: 1px solid red;
  .slider_box {
    position: relative;
    display: flex;
    width: 1200px;
    left: 0;
    li {
      list-style-type: none;
    }
    img {
      width: 400px;
    }
  }
}
.current{
  color:yellowgreen;
}
</style>



