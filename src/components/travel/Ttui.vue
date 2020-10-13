<template>
  <div class="t-tui">
    <div class="t-tui-title">
      <p>小众推荐</p>
    </div>
    <ul class="t-tui-box">
      <li v-for="(item, index) in recommendList" :key="index">
        <img :src="item.image" alt="" />
        <p class="t-tui-box-t">
          {{ item.title }}
        </p>
        <p class="t-tui-box-st">
          <span> {{ item.subTitle }}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["recommendList"],
};
</script>

<style lang="less" scoped>
.t-tui {
  width: 375px;
  height: 275px;
  padding: 25px 10px 0px 10px;
  .t-tui-title {
    display: flex;
    height: 45px;
    justify-content: space-between;
    align-items: center;
    > P {
      font-size: 20px;
      margin-left: 10px;
      font-weight: bolder;
      color: #333;
    }
  }
  .t-tui-box {
    width: 355px;
    height: 216px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
    li {
      position: relative;
      width: 115px;
      height: 102px;
      background: rgb(37, 3, 65);
      border-radius: 10px;
      > img {
        width: 100%;
        height: 100%;
      }
      .t-tui-box-st {
        position: absolute;
        z-index: 3;
        width: 87px;
        font-size: 12px;
        bottom: 18px;
        left: 10px;
        color: #ffffff;
        white-space: nowrap;
        overflow: hidden;
        font-weight: 500;
      }
      .t-tui-box-t {
        position: absolute;
        z-index: 3;
        font-size: 16px;
        bottom: 38px;
        left: 10px;
        color: #ffffff;
        white-space: nowrap;
        overflow: hidden;
        font-weight: 700;
      }
      &:nth-child(1) {
        width: 175px;
        height: 102px;
        background: rgb(50, 87, 1);
      }
      &:nth-child(2) {
        width: 175px;
        height: 102px;
        background: rgb(50, 87, 1);
      }
    }
  }
}
</style>