<template>
  <van-tabbar v-model="active" :placeholder='true' active-color="#000" class="footNav">
    <van-tabbar-item 
      v-for="(val, ind) of fIcon" 
      :key="ind"
      @click="tabs(val.path)"
    >
      <span>{{ val.name }}</span>
      <template #icon="props">
        <img :src="props.active ? val.imgH : val.img" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      fIcon:[
        {
          img: require('../../assets/icon/index/shouye1.png'),
          imgH: require('../../assets/icon/index/shouye2.png'),
          name: '首页',
          path: '/index'
        },
        {
          img: require('../../assets/icon/index/hangzhou1.png'),
          imgH: require('../../assets/icon/index/hangzhou2.png'),
          name: '杭州',
          path: '/hangzhou'
        },
        {
          img: require('../../assets/icon/index/yujian1.png'),
          imgH: require('../../assets/icon/index/yujian2.png'),
          name: '遇见',
          path: '/meet'
        },{
          img: require('../../assets/icon/index/shequ1.png'),
          imgH: require('../../assets/icon/index/shequ2.png'),
          name: '社区',
          path: '/community'
        },
        {
          img: require('../../assets/icon/index/wode1.png'),
          imgH: require('../../assets/icon/index/wode2.png'),         
          name: '我的',
          path: '/mine/:phone'
        }
      ],
      bool: 0
    }
  },

  methods: {
    tabs(path) {
      sessionStorage.setItem('tabInd', this.active);
      this.$router.push(path);
    }
  },

  created() {
    if(!sessionStorage.getItem('tabInd')) {
      sessionStorage.setItem('tabInd', 0);
      this.active = parseInt(sessionStorage.getItem('tabInd'));
    } else {
      this.active = parseInt(sessionStorage.getItem('tabInd'));
      console.log(this.active);
    }
  }
}
</script>

<style lang="less" scoped>
.footNav {
  display: flex;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 55px;
  background-color: white;
  z-index: 98;
  > div {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    span {
      font-size: 12px;
      color: rgb(153, 153, 153);
    }
    img {
      width: 25px;
      height: 25px;
    }
    .active {
      color: black;
    }
  }
}
</style>