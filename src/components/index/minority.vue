<template>
  <div class="minority">
    <div class="head">
      <p>{{ minorityTitle.title }}</p>
      <p>{{ minorityTitle.subTitle }}</p>
    </div>
    <ul class="content">
      <li 
        v-for="(val, ind) in minorityData"
        :key="ind"
        :style="{'background-image': 'url('+ imgArr[ind] +')'}"
      >
        <h4>{{ val.title }}</h4>
        <p>{{ val.subTitle }}</p>
      </li>
    </ul>
  </div>
</template>

<script>

export default {

  data() {
    return {
      imgArr: [
        require('../../assets/images/dest/b1.jpg'),
        require('../../assets/images/dest/b2.jpg'),
        require('../../assets/images/dest/b3.jpg'),
        require('../../assets/images/dest/b4.jpg'),
        require('../../assets/images/dest/b5.jpg'),
        require('../../assets/images/dest/b6.jpg'),
      ]
    }
  },

  computed: {
    minorityTitle() {
      if(this.$store.state.indexData.minority) {
        return this.$store.state.indexData.minority;
      } else {
        return {};
      }
    },

    minorityData() {
      if(this.$store.state.indexData.minority) {
        return this.$store.state.indexData.minority.data;
      } else {
        return []
      }
    }
  }
}

</script>

<style lang="less" scoped>
.minority {
  background-color: #fff;
  margin-top: 10px;
  border-radius: 10px;
  .head {
    height: 44px;
    padding: 0px 16px;
    display: flex;
    align-items: center;
    p:nth-of-type(1) {
      font-size: 16px;
      font-weight: 600;
    }
    p:nth-of-type(2) {
      margin-left: 10px;
      font-size: 14px;
      background-color: #fff3ea;
      color: #ff9e51;;
    }
  }
  .content {
    height: 152px;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    overflow: auto;
    padding-bottom: 15px;
    li {
      width: 125px;
      height: 100%;
      flex-wrap: nowrap;
      flex-shrink: 0;
      background-size: 125px 152px;
      position: relative;
      text-align: center;
      background: #ccc;
      h4 {
        position: absolute;
        bottom: 40px;
        left: 0;
        width: 100%;
        font-size: 16px;
        color: #fff;
        font-weight: 600;
      }
      p {
        position: absolute;
        bottom: 20px;
        left: 0;
        width: 100%;
        font-size: 12px;
        color: #fff;
        font-weight: 600;
        opacity: 0.6;
      }
    }
  }
}
</style>