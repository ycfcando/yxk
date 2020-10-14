<template>
  <div class="week">
    <nav>
      <span 
        v-for="(val, ind) in weekList" 
        :key="ind" 
        @click="changeData(ind)"
        :class="{active: dataIndex == ind}"
      >
        {{ val.title }}
      </span>
    </nav>
    <van-swipe 
      class="my-swipe"
      indicator-color="white"
      :loop="false"
    >
      <van-swipe-item 
        v-for="(val, ind) in item" 
        :key="ind"
      >
        <ul class="item">
          <li v-for="(v, i) in val" :key="i">
            <div class="img">
              <img :src="imgArr[i]">
              <p>
                <span>{{ v.placeLabel }}</span>
                <span>{{ v.days }}</span>
              </p>
              <span>￥{{ v.priceLabel }}</span>
            </div>
            <p>{{ v.simpleName }}</p>
          </li>
        </ul>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>

export default {

  data() {
    return {
      dataIndex: 0,
      imgArr: [
        require('../../assets/images/weeklocal/item1.jpg'),
        require('../../assets/images/weeklocal/item2.jpg'),
        require('../../assets/images/weeklocal/item3.jpg'),
        require('../../assets/images/weeklocal/item4.jpg'),
        require('../../assets/images/weeklocal/item5.jpg'),
        require('../../assets/images/weeklocal/item6.jpg'),
        require('../../assets/images/weeklocal/item7.jpg'),
        require('../../assets/images/weeklocal/item8.jpg'),
        require('../../assets/images/weeklocal/item9.jpg'),
        require('../../assets/images/weeklocal/item10.jpg'),
        require('../../assets/images/weeklocal/item11.jpg'),
        require('../../assets/images/weeklocal/item12.jpg'),
        require('../../assets/images/weeklocal/item14.png'),
        require('../../assets/images/weeklocal/item15.jpg'),
        require('../../assets/images/weeklocal/item16.jpg'),
        require('../../assets/images/weeklocal/item17.jpg'),
        require('../../assets/images/weeklocal/item18.jpg')
      ]
    }
  },
  
  computed: {
    weekList() {
      if (this.$store.state.indexData.aroundLump) {
        return this.$store.state.indexData.aroundLump.weekList;
      } else {
        return [];
      }
    },

    item() {
      if (this.$store.state.indexData.aroundLump) {
        let res = this.$store.state.indexData.aroundLump.weekList[this.dataIndex].productList;
        let arr = [];
        arr.length = Math.ceil(res.length / 6);
        for(let i = 0; i < arr.length; i++){
          arr[i]= res.slice(i * 6, i * 6 + 6);
        }
        return arr;
      } else {
        return [];
      }
    }
  },

  methods: {
    changeData(ind) {
      this.dataIndex = ind;
    }
  }
}

</script>

<style lang="less" scoped>

.week {
  nav {
    display: flex;
    height: 45px;
    flex-wrap: nowrap;
    align-items: center;
    > span {
      height: 25px;
      font-size: 12px;
      margin: 0 5px;
      border: 1px solid #eee;
      border-radius: 15px;
      padding: 0 5px;
      line-height: 25px;
    }
    .active {
      font-weight: 600;
      color: #e6ac00;
    }
  }
  .my-swipe {
    height: 262px;
    ul {
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      > li {
        width: 116px;
        height: 127px;
        > .img {
          width: 100%;
          height: 87px;
          position: relative;
          img {
            width: 100%;
            height: 100%;
            display: block;
          }
          p {
            height: 17px;
            line-height: 12px;
            position: absolute;
            top: 0;
            right: 0;
            background-color: rgba(47,41,32,.8);
            span {
              font-size: 12px;
              vertical-align: middle;
              color: #fff;
            }
          }
          > span {
            font-size: 12px;
            position: absolute;
            bottom: 0;
            left: 0;
            color: #fff;
          }
        }
        > p {
          font-size: 12px;
          font-weight: 900;
          margin: 6px 0 0 6px;
        }
      }
    }
  }
}
</style>