<template>
  <div class="flowTab">
    <nav>
      <span 
        v-for="(val, ind) of flowTab"
        :key="ind"
        @click="changeType(type[ind])"
        :class="{act: cType == type[ind]}"
      >
        {{ val.typeName }}
      </span>
    </nav>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      :offset="0"
      @load="onLoad"
      class="content" 
      v-if="flowData[0] && flowData[0].dataDetail"
    >
      <van-cell
        v-for="(val, ind) in flowData"
        :key="ind"
        class="van-clearfix"
      >
        <li @click="detail(val.dataDetail.pid)">
          <div class="img" :class="{imgBig: ind == 0}">
            <!-- <img 
              :src="val.dataDetail.image" 
              :class="{imgBig: ind == 0}"
            > -->
            <van-image
              lazy-load
              :src="val.dataDetail.image" 
              :class="{imgBig: ind == 0}"
              class="image"
            />
            <span>{{ val.dataDetail.placeLabel }}</span>
          </div>
          <p v-if="ind != 0">{{ val.dataDetail.title }}</p>
          <p v-if="ind > 1">{{ val.dataDetail.productType }}·{{ val.dataDetail.productCat }}·{{ val.dataDetail.days }}</p>
          <p>
            <span 
              v-for="(v, i) in val.dataDetail.liangdian"
              :key="i"
            >
              {{ v }}
            </span>
          </p>
          <p class="price" v-if="ind > 1">
            <span>￥{{ val.dataDetail.priceLabel }}</span>
            <span>{{ val.dataDetail.numLabel }}</span>
          </p>
        </li>
      </van-cell>
    </van-list>
  </div>
</template>

<script>

export default {

  data() {
    return {
      list: [10],
      loading: false,
      finished: false,
      count: 1,
      type: [1],
      cType: 1,
      lasy: 'https://img.yzcdn.cn/vant/apple-1.jpg'
    }
  },

  computed: {
    flowTab() {
      if(this.$store.state.indexData.flowTabList) {
        return this.$store.state.indexData.flowTabList;
      } else {
        return [];
      }
    },
    flowData() {
      if(this.$store.state.flowData) {
        return this.$store.state.flowData;
      } else {
        return [];
      }
    }
  },

  watch: {
    flowData() {
      this.loading = false;
    }
  },

  mounted() {
    this.$store.dispatch('getFlow', {
        sitecode: 1,
        city_id: 1,
        type: this.cType,
        page: this.count
    });
    for(let i = 0; i < 12; i++){
      this.type.push(402 + i);
    }
  },

  methods: {
    onLoad() {
      this.$nextTick(() => {
        this.count++;
        console.log(this.count);
        this.$store.dispatch('getFlow', {
          sitecode: 1,
          city_id: 1,
          type: 1,
          page: this.count
        });

        if (this.$store.state.flowData >= 60) {
            this.finished = true;
        }
      });   
    },
  
    changeType(val) {
      this.$store.state.flowData = []
      this.count = 1;
      this.cType = val;
      this.$store.dispatch('getFlow', {
        sitecode: 1,
        city_id: 1,
        type: this.cType,
        page: this.count
      });
    },

    detail(id) {
      this.$router.push('/detail/'+ id);
    }
  }
}

</script>

<style lang="less" scoped>
.flowTab {
  nav {
    height: 40px;
    display: flex;
    align-items: center;
    overflow: auto;
    span {
      margin: 0 10px;
      flex-wrap: nowrap;
      flex-shrink: 0;
      font-size: 14px;
    }
    .act {
      color: #e39e30;
      font-weight: 600;
    }
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    .van-clearfix {
      flex-shrink: 0;
      height: 261px;
      width: 172px;
      border-radius: 10px;
      background-color: #fff;
      margin-bottom: 10px;
      padding: 0;
      li {
        .img {
          height: 130px;
          position: relative;
          .image {
            display: block;
            width: 100%;
            height: 130px;
          }
          .imgBig {
            width: 100%;
            height: 100%;
          }
          span {
            position: absolute;
            top: 0;
            left: 0;
            font-size: 12px;
            color: #fff;
            background-color: #000;
            opacity: 0.4;
          }
        }
        .imgBig {
          width: 100%;
          height: 100%;
        }
        >p {
          font-size: 14px;
          padding: 12px 8px 0 12px;
          line-height: 18px;
          &:nth-of-type(1) {
            font-weight: 600;
            overflow: hidden;
            display: -webkit-box;
            text-overflow: ellipsis;
            margin-bottom: 8px;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          &:nth-of-type(2) {
            font-size: 12px;
            padding-top: 0;
            color: #999;
            line-height: 12px;
          }
          &:nth-of-type(3) {
            white-space: nowrap;
            overflow: hidden;
            padding-top: 5px;
            > span {
              display: inline-block;
              border: 1px solid #e39e30;
              color: #e39e30;
              font-size: 12px;
              padding: 0 5px;
              line-height: 100%;
              margin-right: 5px;
            }
          }
          &:nth-of-type(4) {
            display: flex;
            justify-content: space-between;
            > span {
              display: flex;
              align-items: center;
              &:nth-of-type(1) {
                font-size: 17px;
                color: #ff7100;
                font-weight: 600;
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
  }
}
</style>