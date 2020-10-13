<template>
  <div class="flowTab">
    <nav>
      <span
        v-for="(item, index) of ttTag"
        :key="index"
        @click="changeType(listId[index])"
      >
        {{ item.title }}
      </span>
    </nav>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      :offset="0"
      @load="onLoad"
      class="content"
      v-if="ttDate && ttDate[0]"
    >
      <van-cell v-for="(val, ind) in ttDate" :key="ind" class="van-clearfix">
        <li>
          <div class="img">
            <img :src="val.dataDetail.image" />
            <span>{{ val.dataDetail.placeLabel }}</span>
          </div>
          <p>{{ val.dataDetail.title }}</p>
          <p>
            {{ val.dataDetail.productType }}·{{ val.dataDetail.productCat }}·{{
              val.dataDetail.days
            }}
          </p>
          <p>
            <span v-for="(v, i) in val.dataDetail.liangdian" :key="i">
              {{ v }}
            </span>
          </p>
          <p class="price">
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
  props: {
    flowTags: Object,
    default: {},
  },
  data() {
    return {
      list: [10],
      loading: false,
      finished: false,
      count: 1,
      listId: [],
      firstType: 608,
    };
  },
  computed: {
    ttTag() {
      if (this.flowTags) {
        return this.flowTags.firstTypeList;
      } else {
        return [];
      }
    },
    ttDate() {
      if (this.$store.state.ttList) {
        return this.$store.state.ttList;
      } else {
        return [];
      }
    },
  },
  watch: {
    ttDate() {
      this.loading = false;
    },
  },
  mounted() {
    this.$store.dispatch("getTravelTt", {
      sitecode: 1,
      city_id: 1,
    });
  },
  methods: {
    onLoad() {
      this.$nextTick(() => {
        this.count++;
        console.log(this.count);
        this.$store.dispatch("getTravelTt", {
          sitecode: 1,
          city_id: 1,
          firstType: 608,
          secondType: 0,
          page: this.count,
        });
        if (this.$store.state.ttList >= 60) {
          this.finished = true;
        }
      });
    },
    changeType(val) {
      this.$store.state.ttList = [];
      this.count = 1;
      if (val) {
        this.firstType = val;
      }
      this.$store.dispatch("getTravelTt", {
        sitecode: 1,
        city_id: 1,
        firstType: this.firstType,
        secondType: 0,
        page: this.count,
      });
      for (let i = 608; i <= 612; i++) {
        this.listId.push(i);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.flowTab {
  margin-top: 40px;
  nav {
    padding-bottom: 20px;
    height: 40px;
    display: flex;
    align-items: center;
    overflow: auto;
    span {
      margin: 0 10px;
      flex-wrap: nowrap;
      flex-shrink: 0;
      font-size: 18px;
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
          img {
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
        > p {
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