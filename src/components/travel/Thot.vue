<template>
  <div class="t-hot">
    <div class="t-hot-title">
      <p>人气尖货</p>
      <span class="bangdan"> 查看榜单 > </span>
    </div>
    <div class="t-hot-list">
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <div class="hot-list-top">
            <i class="first" v-if="item.pid === 20088">
              <img src="../../assets/images/hotking.png" alt="" />
            </i>
            <i class="paiming">
              <img src="../../assets/images/hotone.png" alt="" />
            </i>
            <div class="over">{{ item.numLabel }}</div>
            <i class="huohuo">
              <img src="../../assets/images/hhhh.png" alt="" />
            </i>
            <img :src="item.image" alt="" />
          </div>
          <div class="hot-list-foot">
            <p class="hot-list-foot-title">
              {{ item.productCat }}·{{ item.placeLabel }}
            </p>
            <p class="hot-list-foot-name">{{ item.title }}</p>
            <div class="hot-list-foot-box">
              <p class="hot-list-foot-price">
                <span class="hot-p-star">￥</span>
                <span class="hot-p-num">{{ item.priceLabel }} </span>
                <span class="hot-p-end">起</span>
              </p>
              <p class="hot-list-foot-time">{{ item.days }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import BetterScroll from "better-scroll";
export default {
  props: {
    tongList: Object,
    default: {},
  },
  computed: {
    list() {
      if (this.tongList) {
        // return this.tongList.productList;
        if (this.tongList.productList) {
          return this.tongList.productList;
        } else if (this.tongList.topProduct) {
          return this.tongList.topProduct;
        } else {
          return [];
        }
      } else {
        return [];
      }
    },
  },
  watch: {
    list() {
      this.$nextTick(() => {
        let bs = new BetterScroll(".t-hot-list", {
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
<style lang="less" scope>
.t-hot {
  width: 375px;
  height: 238px;
  .t-hot-title {
    display: flex;
    height: 50px;
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
  .t-hot-list {
    width: 100%;
    height: 178px;
    overflow: hidden;
    ul {
      display: inline-flex;
      margin-left: 10px;
      > li {
        position: relative;
        width: 150px;
        height: 178px;
        margin: 0 10px 10px 0px;

        .hot-list-top {
          position: relative;
          width: 150px;
          height: 100px;
          .first {
            position: absolute;
            left: 0;
            top: 0;
            z-index: 99;
            width: 18px;
            height: 19px;
            > img {
              position: absolute;
              left: -5px;
              top: -7px;
              width: 100%;
              height: 100%;
            }
          }
          .paiming {
            width: 27px;
            height: 27px;
            position: absolute;
            > img {
              position: absolute;
              width: 100%;
              height: 100%;
            }
          }
          .over {
            width: 105px;
            height: 15px;
            background: linear-gradient(90deg, #ff795a, #fe3c22);
            position: absolute;
            left: 0;
            bottom: 0;
            border-top-right-radius: 10px;
            font-size: 12px;
            color: #fff;
            text-indent: 17px;
          }
          .huohuo {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 15px;
            height: 18px;
            > img {
              position: absolute;
              left: 3px;
              bottom: 0;
              width: 100%;
              height: 100%;
            }
          }
          > img {
            width: 150px;
            height: 100px;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
          }
        }
        .hot-list-foot {
          position: relative;
          height: 78px;
          .hot-list-foot-title {
            padding: 5px 7px;
            font-size: 12px;
            color: #9e9e9e;
          }
          .hot-list-foot-name {
            padding: 0 7px;
            font-size: 16px;
            color: #333;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            font-weight: 700;
          }

          .hot-list-foot-box {
            width: 100%;
            position: absolute;
            left: 7px;
            bottom: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .hot-list-foot-price {
              display: inline-block;
              line-height: 20px;
              .hot-p-star {
                font-weight: 700;
                font-size: 13px;
                color: #ff7100;
              }
              .hot-p-num {
                font-weight: 700;
                font-size: 16px;
                color: #ff7100;
              }
              .hot-p-end {
                font-size: 12px;
                color: #9e9e9e;
              }
            }
            .hot-list-foot-time {
              display: inline-block;
              font-size: 12px;
              color: #9e9e9e;
              margin-right: 17px;
              margin-top: 5px;
            }
          }
        }
      }
    }
  }
}
</style>