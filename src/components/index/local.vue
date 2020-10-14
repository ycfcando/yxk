<template>
  <div class="local">
    <div>
      <div class="top" v-if="localData.upList">
        <article class="left">
          <img src="../../assets/images/hot1.jpg">
          <p>{{ localData.upList[0].subTitle }}</p>
          <span>{{ localData.upList[0].title }}</span>
        </article>
        <article class="right">
          <img src="../../assets/images/hot2.jpg">
          <span>{{ localData.upList[1].title }}</span>
        </article>
      </div>
      <ul class="bottom">
        <li v-for="(val, ind) in localData.downList" :key="ind">
          <img src="../../assets/images/hot3.jpg">
          <p>{{ val.title }}</p>
          <p>{{ val.subTitle }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    localData() {
      if(this.$store.state.indexData.aroundLump) {
        return this.$store.state.indexData.aroundLump.local;
      } else {
        return [];
      }
    }
  }
}
</script>

<style lang="less" scoped>
.local{
  padding: 10px;
  > div {
    border-radius: 10px;
    height: 290px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > .top {
      height: 116px;
      display: flex;
      justify-content: space-between;
      > .left {
        width: 236px;
        height: 100%;
        position: relative;
        > img {
          display: block;
          width: 100%;
          height: 100%;
          border: none;
        }
        > p {
          position: absolute;
          top: 0;
          left: 0;
          background-color: #5bd07e;
          color: #fff;
          font-size: 13px;
        }
        > span {
          position: absolute;
          bottom: 0;
          left: 0;
          color: #fff;
          font-size: 13px;
        }
      }
      > .right {
        width: 116px;
        height: 100%;
        position: relative;
        > img {
          width: 100%;
          height: 100%;
          display: block;
        }
        > span {
          position: absolute;
          bottom: 0;
          left: 0;
          color: #fff;
          font-size: 13px;
        }
      }
    }
    > .bottom {
      display: flex;
      justify-content: space-between;
      > li {
        width: 116px;
        > img {
          display: block;
          width: 100%;
          height: 116px;
        }
        > p {
          margin-top: 5px;
          &:nth-of-type(1) {
            font-size: 14px;
            font-weight: 900;
          }
          &:nth-of-type(2) {
            font-size: 12px;
            color: #999;
          }
        }
      }
    }
  }
}
</style>