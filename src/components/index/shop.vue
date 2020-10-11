<template>
  <div class="shop">
    <div class="top">
      <div class="wrap">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(val, ind) in flashSales" :key="ind">
            <div>
              <h4>{{ val.title }}</h4>
              <div class="img">
                <img :src="val.image">
                <p>{{ val.productName }}</p>
                <p>
                  <span>￥{{ val.priceLabel }}起</span>
                  <span>{{ val.priceOtherLabel }}</span>
                </p>
                <span>{{ val.stockLabel }}</span>
                <span>{{ val.placeLabel }}</span>
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>

      <div class="left">
        <div class="newDic">
          <h4>{{ newTitle.title }}</h4>
          <div>
            <p>{{ newDic.title}}</p>
            <p>{{ newDic.subTitle }}</p>
          </div>
        </div>
        <div class="kingDic">
          <h4>{{ kingTitle.title }}</h4>
          <div>
            <p>{{ kingDic.title }}</p>
            <p>{{ kingDic.subTitle }}</p>
          </div>
        </div>
      </div>
    </div>
    <ul class="bottom">
      <li 
        v-for="(val, ind) in activityBanner"
        :key="ind"
        :style="{'background-image': 'url('+ val.image +')'}"
      >
        <p>{{ val.title }}</p>
        <p>{{ val.subTitle }}</p>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  computed: {
    flashSales() {
      return this.$store.state.indexData.saleProductList;
    },

    newTitle() {
      if(this.$store.state.indexData.newProduct) {
        return this.$store.state.indexData.newProduct;
      } else {
        return [];
      }
    },

    newDic() {
      if(this.$store.state.indexData.newProduct) {
        return this.$store.state.indexData.newProduct.recommend;
      } else {
        return [];
      }
    },

    kingTitle() {
      if(this.$store.state.indexData.kingProduct) {
        return this.$store.state.indexData.kingProduct;
      }else {
        return {};
      }    
    },

    kingDic() {
      if(this.$store.state.indexData.kingProduct) {
        return this.$store.state.indexData.kingProduct.recommend;
      }else {
        return {};
      }     
    },

    activityBanner() {
      return this.$store.state.indexData.activityBanner;
    }
  }
}

</script>

<style lang="less" scoped>
.shop {
  height: 317px;
  padding: 15px 10px;
  margin-top: 10px;
  background-color: #fff;
  border-radius: 10px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > .top {
    height: 189px;
    border-radius: 10px;
    display: flex;
    > .wrap {
      width: 177px;
      height: 189px;
      padding: 12px 10px 12px 12px;
      background-color: #ff5656;
      .my-swipe {
        height: 100%;      
        div {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          h4 {
            font-size: 15px;
            font-weight: 900;
            color: #fff;
          }
          .img {
            height: 143px;
            position: relative;
            background-color: #fff;
            img {
              display: block;
              width: 100%;
              height: 80px;
            }
            p {
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              &:nth-of-type(1) {
                font-weight: 600;
              }
              & > span {
                vertical-align: middle;
                &:nth-child(1) {
                  color: #ffa41f;
                  font-weight: 600;
                  font-size: 14px;
                }
                &:nth-child(2) {
                  color: #ccc;
                  font-size: 12px;
                  text-decoration: line-through;
                  margin-left: 5px;
                }
              }
            }
            > span:nth-of-type(1) {
              position: absolute;
              top: 0;
              left: 0;
              background-color: #ffa41f;
            }
            > span:nth-of-type(2) {
              padding: 0 5px;
              border-radius: 10px;
              position: absolute;
              top: 60px;
              left: 5px;
              background-color: rgba(0, 0, 0, 0.5);
            }
          }
        }
      }
    }
    > .left {
      width: 177px;
      padding: 0 11px;
      background-color: #ffa41f;
      .newDic {
        height: 93px;
        border-bottom: 1px solid #fff;
        h4 {
          height: 33px;
          line-height: 33px;
          font-weight: 600;
          color: #fff;
          font-size: 14px;
        }
        div {
          height: 50px;
          border-radius: 5px;
          background-color: #fff;
          padding: 0 9px;
          overflow: hidden;
          p {
            font-size: 14px;
            margin-top: 5px;
            height: 19px;
            font-weight: 600;
            &:nth-of-type(2) {
              font-size: 12px;
              color: #ffa41f;
            }
          }
        }
      }
      .kingDic {
        height: 93px;
        h4 {
          height: 33px;
          line-height: 33px;
          font-weight: 600;
          color: #fff;
          font-size: 14px;
        }
        div {
          height: 50px;
          border-radius: 5px;
          background-color: #fff;
          padding: 0 9px;
          overflow: hidden;
          p {
            font-size: 14px;
            margin-top: 5px;
            height: 19px;
            font-weight: 600;
            &:nth-of-type(2) {
              font-size: 12px;
              color: #ffa41f;
            }
          }
        }
      }
    }
  }
  > .bottom {
    height: 87px;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    li {
      width: 166px;
      height: 100%;
      padding: 8px 9px;
      background-size: 100%;
      p:nth-of-type(1) {
        font-size: 14px;
        font-weight: 700;
        height: 19px;
        line-height: 19px;
      }
      p:nth-of-type(2) {
        font-size: 12px;
        color: #666;
        height: 19px;
        line-height: 19px;
      }
    }
  }
}
</style>