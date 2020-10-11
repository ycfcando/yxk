<template>
  <div class="t-top">
    <div class="t-top-title">
      <img src="../../assets/images/topr.png" alt="" class="t-top-r" />
      <span>周边游</span>
      <img src="../../assets/images/topl.png" alt="" class="t-top-l" />
    </div>
    <div class="t-top-sou">搜索目的地/关键词</div>
    <div class="s">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in bannerList" :key="index">
          <img :src="item" alt="" />
          <!-- <van-swipe-item
          v-for="(item, index) in tongList.flashList"
          :key="index"
        >
          <img :src="item.image" alt="" /> -->
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tongList"],
  data() {
    return {
      bannerList: [
        require("../../assets/images/b1.jpg"),
        require("../../assets/images/b2.jpg"),
        require("../../assets/images/b3.jpg"),
        require("../../assets/images/b4.jpg"),
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.t-top {
  width: 375px;
  height: 270px;
  background: url(../../assets/images/topbg.png) no-repeat;
  background-size: 100%;
  .t-top-title {
    position: relative;
    height: 40px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    > img {
      width: 25px;
      height: 25px;
    }
    > span {
      font-size: 18px;
      font-weight: 700;
    }
    .t-top-r {
      margin-left: 5px;
    }
    .t-top-l {
      margin-right: 5px;
    }
  }
  .t-top-sou {
    width: 355px;
    height: 30px;
    margin: auto;
    text-align: center;
    background: hsla(0, 0%, 100%, 0.25);
    margin-top: 14px;
    margin-bottom: 12px;
    border-radius: 30px;
    font-size: 14px;
    color: #fff;
    line-height: 33px;
  }
  .s {
    position: relative;
    width: 355px;
    height: 155px;
    margin: auto;
    border-radius: 20px;
    .my-swipe .van-swipe-item {
      width: 100%;
      height: 155px;
      border-radius: 20px;
      > img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
      }
    }
  }
}
</style>