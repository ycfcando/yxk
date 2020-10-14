<template>
  <div class="dest">
    <div class="head">
      <p>{{ desTitle.title }}</p>
      <p>{{ desTitle.subTitle }}</p>
    </div>

    <nav>
      <span 
        v-for="(val, ind) in desTab" 
        :key="ind"
        @click="tab = ind"
        :class="{tab: tab == ind}"
      >
        {{ val.tabName }}
      </span>
    </nav>

    <ul class="content">
      <li 
        v-for="(val, ind) in desData"
        :key="ind"
        :style="{'background-image': 'url('+ val.image +')'}"
      >
        <h4>{{ val.title }}</h4>
        <p>{{ val.subTitle }}</p>
      </li>
    </ul>

    <ul class="list">
      <li></li>
    </ul>
  </div>
</template>

<script>

export default {

  data() {
    return {
      tab: 0
    }
  },

  computed: {
    desTitle() {
      if(this.$store.state.indexData.destination) {
        return this.$store.state.indexData.destination;
      } else {
        return {};
      }
    },

    desTab() {
      if(this.$store.state.indexData.destination) {
        return this.$store.state.indexData.destination.tabList;
      } else {
        return []
      }
    },

    desData() {
      if(this.$store.state.indexData.destination) {
        return this.$store.state.indexData.destination.tabList[this.tab].data;
      } else {
        return []
      }
    }
  }
}

</script>

<style lang="less" scoped>
.dest {
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
  nav {
    height: 40px;
    display: flex;
    span {
      width: 80px;
      height: 30px;
      font-size: 14px;
      color: #666;
      margin-left: 10px;
      border: 1px solid #ccc;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .tab {
      font-weight: 600;
      color: #e6ac52;
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
      flex-wrap: nowrap;
      flex-shrink: 0;
      background-size: 100%;
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