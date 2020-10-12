<template>
  <div class="tmdd">
    <div class="t-mdd-title">
      <p>当季目的地</p>
      <span class="bangdan"> 查看榜单 > </span>
    </div>
    <div class="t-mdd-list">
      <ul>
        <li v-for="(item, index) in mddList" :key="index">
          <img :src="item.image" alt="" />
          <h5>{{ item.title }}</h5>
          <p>
            <span>{{ item.subTitle }}</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";

export default {
  props: ["mddList"],
  watch: {
    mddList() {
      this.dong(); 
    }
  },
  methods: {
    dong() {
      this.$nextTick(() => {
        let bs = new BetterScroll(".t-mdd-list", {
          scrollY: false,
          scrollX: true,
          click: true,
        });
        bs;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.tmdd {
  width: 375px;
  height: 180px;
}
.t-mdd-title {
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
  > span {
    color: #9e9e9e;
    font-size: 14px;
    margin-right: 10px;
  }
}
.t-mdd-list {
  width: 100%;
  height: 135px;
  overflow: hidden;
  color: #ffffff;
  ul {
    display: inline-flex;
    > li {
      position: relative;
      width: 100px;
      height: 135px;
      margin: 0 10px;
      background: #000;
      > img {
        position: absolute;
        width: 100%;
        height: 100%;
      }
      > p {
        position: absolute;
        font-size: 12px;
        z-index: 3;
        text-overflow: ellipsis;
        white-space: nowrap;
        background: rgba(247, 248, 250, 0.35);
        padding: 2px 7px;
        border-radius: 5px;
        left: 50%;
        transform: translate(-50%);
        top: 110px;
        opacity: 0.8;
      }
      h5 {
        position: absolute;
        color: #fff;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
        font-weight: 700;
        left: 50%;
        transform: translate(-50%);
        top: 85px;
        z-index: 3;
      }
    }
  }
}
</style>