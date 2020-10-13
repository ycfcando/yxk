<template>
  <div class="body">
    <div class="mUserCenterHeader">
      <div class="header__box">
        <div class="header__above">
          <div class="header__message"></div>
          <div class="header__instrument"></div>
          </div>
        <div class="header__avatar"></div>
        <div 
          class="header__login" 
          @click="$router.push('/login')"
          v-if="!user"
        >
          去登录/注册
          <span>
            新用户注册送388元大礼包
          </span>
        </div>
        <div 
          class="header__login"
          v-else
        >
          {{ user }}
          <span>
            新用户注册送388元大礼包
          </span>
        </div>
        <ul>
          <li v-for="itme in ulli" :key="itme">
            <p class="ullip">{{ js }}</p>
            <p>{{itme}}</p>
          </li>
          <li>
            <p><img :src="mrqd"></p>
            <p>每日签到</p> 
          </li>
        </ul>
      </div>
    </div>
    <div class="mUserCenterOrders">
      <div class="mUserCenterOrders__head">
        <b>出行订单</b>
        <span>全部</span>
      </div>
      <div class="mUserCenterOrders__container">
        <div class="mUserCenterOrders__box" v-for="(itme,index) in divli" :key="index">
          <p><img :src="itme.imgUrl"></p>
          <p>{{itme.title}}</p>
        </div>
      </div>
    </div>
    <div class="mUserCenterWallet" >
      <img src="@/assets/images/活动@2x.png" alt="">
    </div>
    <div class="mUserCenterService">
      <div class="mUserCenterService__head">我的服务</div>
      <div class="mUserCenterService__container">
        <div class="mUserCenterService_row">
          <a href="#" v-for="(itme,index) in ali" :key="index">
            <p><img :src="itme.imgUrl"></p>
            <p>{{itme.title}}</p>
          </a>
        </div>
        <div class="mUserCenterService_row">
          <a href="#" v-for="(itme,index) in towali" :key="index">
            <p><img :src="itme.imgUrl"></p>
            <p>{{itme.title}}</p>
          </a>
        </div>
      </div>
    </div>
    <div class="mUserCenterRecommend">
      <div class="mUserCenterRecommend__head">
        <img src="../../assets/images/精选推荐@2x.png">
        <span>精选推荐</span>
      </div>
    </div>
    <my-tabs />
    <!-- <div class="mUserCenterRecommend__body">
      <ul>
        <li v-for="(item,index) in bannerList" :key="index" class="mUserCenterRecommend__line">
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
      
    </div> -->
  </div>
    
</template>

<script>
// import { mapState, mapActions } from 'vuex'
import MyTabs from "../../components/hz.sy.mine/Tabsdata.vue";
export default {
  data() {
      return {
        js:0,
        ulli:['收藏','浏览','动态'],
        mrqd:require('@/assets/images/每日签到@2x.png'),
        divli:[
          {
            imgUrl: require('@/assets/images/代付款@2x.png'),
            title: '待付款'
          },
          {
            imgUrl: require('@/assets/images/报名成功@2x.png'),
            title: '报名成功'
          },
          {
            imgUrl: require('@/assets/images/替补@2x.png'),
            title: '替补'
          },
          {
            imgUrl: require('@/assets/images/待评价@2x.png'),
            title: '待评价'
          },
          {
            imgUrl: require('@/assets/images/退款@2x.png'),
            title: '退款/取消'
          }
          ],
        ali:[
            {
              imgUrl: require('@/assets/images/签证订单@2x.png'),
              title: '签证订单'
            },
            {
              imgUrl: require('@/assets/images/集市订单@2x.png'),
              title: '集市订单'
            },
            {
              imgUrl: require('@/assets/images/集市购物车@2x.png'),
              title: '集市购物车'
            },
            {
              imgUrl: require('@/assets/images/常用信息@2x.png'),
              title: '常用信息'
            },
          ],
        towali:[
            {
              imgUrl: require('@/assets/images/分享APP@2x.png'),
              title: '分享APP'
            },
            {
              imgUrl: require('@/assets/images/在线客服@2x.png'),
              title: '在线客服'
            },
            {
              imgUrl: require('@/assets/images/意见建议@2x.png'),
              title: '意见建议'
            },
          ],
      }
  },
  components: {
    MyTabs,
  },

  computed: {
    user() {
      return sessionStorage.getItem('phone');
    }
  },
  created() {
    if(this.$route.params.phone != ':phone') {
      sessionStorage.setItem('phone', this.$route.params.phone);
    }
  }
  // computed: {
  //   ...mapState({
  //     bannerList: 'bannerList',
  //   })
  // },
  // mounted() {
  //   this.getBannerList()
  // },
  // methods: {
  //   ...mapActions([
  //     'getBannerList'
  //   ]),
  // }
};
</script>
<style lang='less' scoped>
.body{
  background: #f7f7f7;
  .mUserCenterHeader{
    position: relative;
    padding-left: 15px;
    height: 200px;
    background: url(../../assets/images/img1.a81f2d5.png) 50% no-repeat;
    background-size: cover;
    .header__box{
      overflow: hidden;
      > ul {
        position: absolute;
        top: 130px;
        left: 39px;
        li>p{
          text-align: center;
          font-size: 16px;
          font-weight: 700;
        }
        >li{
          margin: 0px 20px 10px;
          float: left;
          font-size: 16px;
          font-weight: 700;
          img{
            width: 30px;
          }
        }
        .ullip{
          margin-top: 6px;
          margin-bottom: 3px;
        }
      }
    }
    .header__message{
      margin: 10px;
      float: right;
      width:20px;
      height:20px;
      background:  url(../../assets/images/消息@2x.png) 50% no-repeat;
      background-size: cover;
    }
    .header__instrument{
      margin: 10px 15px;
      float: right;
      width:20px;
      height:20px;
      background:  url(../../assets/images/工具@2x.png) 50% no-repeat;
      background-size: cover;
    }
    .header__avatar {
      margin-top: 50px;
      margin-right: 30px;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: #aaa url(../../assets/images/默认图1@2x.png) 50% no-repeat;
      background-size: cover;
    }
    .header__login {
      position: absolute;
      top: 70px;
      left: 120px;
      font-size: 24px;
      font-weight: 700;
      color: #000;
      span {
      position: absolute;
      left: 0;
      bottom: -26px;
      width: 164px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      font-size: 12px;
      color: #fff;
      border-radius: 25px;
      background: linear-gradient(90deg, #ff6000, #ffa32c);
    }
    }
  }
  .mUserCenterOrders{
    margin: 20px;
    padding: 10px;
    background: #fff;
    .mUserCenterOrders__head {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      b {
        font-size: 18px;
        color: #000;
      }
      span {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        align-items: center;
        font-size: 16px;
        color: #333;
      }
    }
    .mUserCenterOrders__container {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .mUserCenterOrders__box {
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 30px;
        img{
          width: 30px;
          height: 30px;
        }
        p {
          margin-top: 10px;
          font-size: 14px;
          color: #333;
        } 
      }
    }
  }  
  .mUserCenterWallet{
    img{
      padding: 0 10px;
      height: 70px;
      width: 100%;
    }
  }
  .mUserCenterService {
    margin-top: 10px;
    padding: 14px 20px 0 30px;
    background: #fff;
    .mUserCenterService__head {
      font-size: 16px;
      font-weight: 700;
      color: #000;
    }
    .mUserCenterService__container {
      margin-top: 24px;
      .mUserCenterService_row {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        justify-content: space-between;
        align-items: center;
        // padding-bottom: 60px;
        img{
          width: 20px;
          height: 20px;
        }
        p {
          margin-top: 15px;
          font-size: 12px;
          color: #333;
          text-align: center;
        } 
      }
    }
  }
  .mUserCenterRecommend{
    // display: -webkit-box;
    // display: -ms-flexbox;
    // display: flex;
    // align-items: center;
    // width: 100%;
    .mUserCenterRecommend__head {
      width: 100%;
      height: 50px;
      position: relative;
      img{
        width: 129px;
        height: 20px;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
      }
      span{
        font-size: 18px;
        padding: 40%;
      }
    }
  }
  // .mUserCenterRecommend__body {
  //   overflow: hidden;
  //   .mUserCenterRecommend__line {
  //     width: 167px;
  //     margin: 10px;
  //     background-color: #fff;
  //     float: left;
  //     border-radius: 14px;
  //     // .line__pic {
  //     //   position: relative;
  //     //   width: 187px;
  //     //   height: 60px;
  //     //   border-radius: 30px;
  //     //   background: #fff9db 50% no-repeat;
  //     //   background-size: cover;
  //     //   box-sizing: border-box;
  //     // }
  //     img{
  //       position: relative;
  //       width: 100%;
  //       height: 100px;
  //       border-top-left-radius: 14px;
  //       border-top-right-radius: 14px;
  //       background-size: cover;
  //       box-sizing: border-box;
  //     }
  //     .line__title {
  //       display: -webkit-box;
  //       -webkit-box-orient: vertical;
  //       -webkit-line-clamp: 2;
  //       margin-top: .1rem;
  //       padding: 0 .1rem;
  //       height: .67rem;
  //       line-height: .34rem;
  //       font-size: .28rem;
  //       color: #333;
  //       overflow: hidden;
  //     }
  //     .gtdays{
  //       margin-top: 10px;
  //       font-size: 10px;
  //     }
  //     .minprice_registered{
  //       position: relative;
  //       .minprice{
  //       font-size: 16px;
  //       color: #ff7100;
  //       }
  //       .registered{
  //         position: absolute;
  //         right: 6px;
  //         bottom: 4px;
  //         padding: 3px 1px;
  //         font-size: 12px;
  //         color: #999;
  //         background: #eee;
  //       }     
  //     }
  //   }
  // }
}  
</style>
