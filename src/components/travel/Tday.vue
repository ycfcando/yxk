<template>
  <div class="Tdaybox">
    <div class="dayone">
      <img :src="first.image" alt="" />
      <span class="tf">{{ first.day }}</span>
      <span class="to">{{ first.month }}</span>
      <div class="ftitle">{{ first.title }}</div>
      <div class="fbottom">{{ first.subTitle }}</div>
    </div>
    <p class="dayday" v-for="(item, index) in list" :key="index">
      <span class="ddtitle">{{ item.title }}</span>
      <span class="ddbottom">{{ item.subTitle }}</span>
      <img :src="item.image" alt="" />
    </p>
  </div>
</template>
<script>
export default {
  props: {
    plate: Object,
    default: {},
  },
  computed: {
    list() {
      if (this.plate) {
        return this.plate.plateList;
      } else {
        return [];
      }
    },
    first() {
      if (this.plate) {
        return this.plate.plateFirst;
      } else {
        return [];
      }
    },
  },
};
</script>
<style lang="less" scoped>
.Tdaybox {
  width: 355px;
  height: 260px;
  margin: 25px 10px 0px 10px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .dayone {
    position: relative;
    width: 235px;
    height: 136px;
    background: rgba(223, 96, 23, 0.685);
    border-top-left-radius: 20px;
    color: #fff;

    .tf {
      position: absolute;
      z-index: 3;
      left: 15px;
      top: 10px;
      font-size: 25px;
    }
    .to {
      position: absolute;
      z-index: 3;
      left: 15px;
      top: 45px;
      font-size: 21px;
    }

    .ftitle {
      position: absolute;
      z-index: 3;
      left: 0px;
       bottom: 28px;
      height: 24px;
      background: rgba(0, 0, 0, 0.65);
      padding: 0px 13px;
      font-size: 18px;
      font-weight: 700;
    }
    .fbottom {
      position: absolute;
      left: 8px;
      bottom: 5px;
      font-size: 12px;
    }
    > img {
      position: absolute;
      width: 100%;
      height: 100%;
      border-top-left-radius: 20px;
    }
  }

  .ddtitle {
    position: absolute;
    z-index: 3;
    left: 0px;
    bottom: 28px;
    height: 24px;
    color: #fff;
    background: rgba(0, 0, 0, 0.65);
    padding: 0px 13px;
    font-size: 18px;
    font-weight: 700;
  }
  .ddbottom {
    position: absolute;
    left: 10px;
    bottom: 5px;
    color: #fff;
    font-size: 12px;
  }
  p:nth-of-type(1) {
    width: 115px;
    height: 136px;
    border-top-right-radius: 20px;
  }
  p:nth-of-type(2) {
    border-bottom-left-radius: 20px;
    > img {
      border-bottom-left-radius: 20px;
    }
  }
  p:nth-of-type(4) {
    border-bottom-right-radius: 20px;
    > img {
      border-bottom-right-radius: 20px;
    }
  }
  p {
    position: relative;
    width: 115px;
    height: 115px;
    background: rgba(65, 11, 214, 0.76);
    > img {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
}
</style>