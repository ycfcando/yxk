<template>
    <!-- <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        offset="0"
    > -->
    <div>
        <div class="mUserCenterRecommend__body">
            <ul>
                <li v-for="(item,index) in bannerList" :key="index" class="mUserCenterRecommend__line"  @click="toDetail(item.pid)">
                <a href="#" >
                    <span></span>
                    <div class="line__pic" >
                    <img src="../../assets/images/假图@2x.png" alt="">
                    </div>
                    <div>
                    <div class="line__title">{{item.name}}</div>
                    <div class="gtdays">跟团游{{item.theme_label}}{{item.days}}</div>
                    <div class="minprice_registered">
                        <span class="minprice">￥{{item.minprice}}起</span>
                        <span class="registered">{{item.people_count}}人已报名</span>
                    </div>
                    </div>
                </a>
                </li>
            </ul>
        </div>
    </div>    
    <!-- </van-list> -->
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
   data() {
       return {
            // loading: false,
            // finished: false,
            // count: 4,
            // total: 10
       }
   },
    computed: {
        ...mapState({
            bannerList: 'bannerList',
            // page: 'page'
        })
    },
    // watch: {
    //     bannerList(val, oldVal) {
    //         // this.loading = false
    //         if (val.length - oldVal.length === this.count) {
    //             this.loading = false
    //         } else {
    //             this.finished = true
    //         }
    //     }
    // },
    mounted() {
        this.getBannerList()
    },
    methods: {
        ...mapActions([
            'getBannerList'
        ]),
        // onLoad() {
        //     this.loading = true
        //     this.getBannerList({
        //         page: this.page,
        //         count: this.count
        //     })
        // },
        toDetail(id) {
            this.$router.push('/detail/' + id)
            console.log(id)
        }
    },
};
</script>
<style lang='less' scoped>
.mUserCenterRecommend__body {
    overflow: hidden;
    .mUserCenterRecommend__line {
      width: 167px;
      margin: 10px;
      background-color: #fff;
      float: left;
      border-radius: 14px;
      img{
        position: relative;
        width: 100%;
        height: 100px;
        border-top-left-radius: 14px;
        border-top-right-radius: 14px;
        background-size: cover;
        box-sizing: border-box;
      }
      .line__title {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        margin-top: 10px;
        padding: 0 10px;
        height: 40px;
        line-height: 19px;
        font-size: 12px;
        color: #333;
        overflow: hidden;
      }
      .gtdays{
        margin-top: 10px;
        font-size: 10px;
      }
      .minprice_registered{
        position: relative;
        .minprice{
        font-size: 16px;
        color: #ff7100;
        }
        .registered{
          position: absolute;
          right: 6px;
          bottom: 4px;
          padding: 3px 1px;
          font-size: 12px;
          color: #999;
          background: #eee;
        }     
      }
    }
  }
</style>
