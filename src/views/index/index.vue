<template>
  <main class="index">

    <div class="searchCity">
      <span>杭州<van-icon name="arrow-down"/></span>
      <van-search placeholder="梅里转山节" class="search"/>
    </div>

    <div class="hotSearch">
      <p>热搜</p>
      <span>光雾山</span>
      <span>神农架</span>
      <span>涠洲岛</span>
      <span>丹巴</span>
    </div>

    <div class="banner">
      <van-swipe 
      class="my-swipe" 
      :autoplay="3000"
      indicator-color="#fed101"
      >
        <van-swipe-item v-for="(val, ind) in bannerItem" :key="ind">
          <img :src="val.image">
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="mainNav">
      <div v-for="(val, ind) in staticData.icon" :key="ind">
        <img :src="val.img">
        <span>{{ val.name }}</span>
      </div>
    </div>

    <van-grid class="secondNav">
      <van-grid-item v-for="(val, ind) in staticData.secondNav" :key="ind" class="wrap">
        <div>
          <span>{{ val.title }}</span>
          <span>{{ val.content }}</span>
        </div>
      </van-grid-item>
    </van-grid>

    <div class="week-local">
      <div class="tabwrap">
        <button 
          v-for="(val, ind) in tabList" 
          :key="ind"
          @click="pathTab(ind)"
          :class="{active: act==ind}"
        >
          {{ val.typeName }}
        </button>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>

    <shop/>

    <minority/>

    <dest/>

    <flow-tab/>
  </main>
</template>

<script>

import { getIcon } from '../../utils/api';
import shop from '../../components/index/shop';
import minority from '../../components/index/minority';
import dest from '../../components/index/dest';
import flowTab from '../../components/index/flowTab';

export default {
  data() {
    return {
      // bannerItem: [],
      staticData: {},
      act: 0
    }
  },

  mounted() {
    //index数据
    this.$store.dispatch('getIndex');

    getIcon()
    .then(res => {
      this.staticData = res.data;
    })
    .catch(error => {
      console.log(error);
    });
  },

  computed: {
    //banner数据
    bannerItem() {
      return this.$store.state.indexData.flashImageList;
    },
    //weekandlocal数据
    tabList() {
      if (this.$store.state.indexData.aroundLump) {
        return this.$store.state.indexData.aroundLump.tabList;
      } else {
        return [];
      }
    }
  },

  methods: {
    pathTab(ind) {
      this.act = ind;
      ind ? this.$router.push('/local') : this.$router.push('/week');
    }
  },

  components: {
    shop,
    minority,
    dest,
    flowTab
  }

}
</script>

<style lang="less" scoped>
.index {
  background-color: #f5f5f5;
}

.searchCity {
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  background-color: #ffdd40;
  span {
    font-size: 15px;
    font-weight: bolder;
    padding-left: 10px;
  }
  .search {
    height: 45px;
    flex-grow: 1;
  }
  .van-search {
    background-color: transparent;
  }
  .van-search__content {
    border-radius: 45px;
  }
}

.hotSearch {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #ffdd40;
  p {
    font-size: 13px;
  }
  span {
    width: 74px;
    height: 20px;
    background-color: #ffeea0;
    border-radius: 20px;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.banner {
  display: flex;
  justify-content: center;
  background-image: linear-gradient(#ffdd40 80%, white 80%, white 100%);
  .my-swipe  {
    width: 355px;
    border-radius: 5px;
    .van-swipe-item {
      width: 100%;
      font-size: 0;
      img {
        display: block;
        width: 100%;
      }
    }
  }
  /deep/ .van-swipe__indicator {
    opacity: 1;
    background-color: #ddd;
    transition: background-color .2s;
    border-radius: 6px;
  }
  /deep/ .van-swipe__indicator--active {
    width: 10px;
  }
}

.mainNav {
  height: 70px;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    > img {
      width: 44px;
      height: 44px;
    }
    > span {
      font-size: 12px;
    }
  }
}

.secondNav {
  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    span {
      font-size: 12px;
      margin-top: 10px;
      font-weight: 900;
    }
  }
  /deep/ .van-grid-item__content--center {
    width: 100%;
    height: 100%;
  }
}

.week-local {
  margin-top: 10px;
  border-radius: 10px;
  background-color: white;
  > .tabwrap {
    display: flex;
    height: 44px;
    background-color: #eee;
    > button {
      border: none;
      background-color: #eeeeee;
      flex-grow: 1;
      font-size: 16px;
      font-weight: 900;
    }
    .active {    
      background-color: #fff;
    }
  }
}
</style>