<template> 
    <div class="box-com">
        <section class="heade">
            <p>杭州</p>
            <van-search
                v-model="value"
                placeholder="请输入您想要去的地方"
                input-align="center"
            />
        </section>

        <section class="swipers">
            <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img v-lazy="image" />
                </van-swipe-item>
            </van-swipe>
        </section>


        <section class="taps">
            <article class="taplist">
                <aside v-for="(item,index) in list" :key="index">
                    
                    <p>{{item.title}}</p>
                    <img src="https://file.40017.cn/appresource/image/touch/home/icon_hotel.png" alt="">
                </aside>
            </article>
        </section>

        <section class="Spiderman">
            <div class="sp-top">
                <img src="http://gallery.youxiake.com/Public/Data/upload/productimg/202010/13/5f851c72514bb.jpg?imageslim" alt="">
            </div>
            <div class="sq-title">疫情过去，我们去旅行吧（北方）</div>
            <div class="sq-bottom">
                
                <div class="bottomlist">
                    <div class="sq-left">
                        <img src="https://tvax1.sinaimg.cn/crop.0.0.996.996.50/0067OxYlly8gdiiy03pgzj30ro0roabv.jpg?KID=imgbed,tva&Expires=1602594561&ssig=lDDBRuCbOn" alt="">
                        <span class="sq-user">我要去北方</span>
                        <span class="sq-address">在北京</span>
                    </div>
                    <div class="sq-right"> 
                        <p>
                            <van-icon name="eye-o" />
                            <span>256</span>
                            
                        </p>
                        <p>
                            <van-icon name="chat-o" />
                            <span>999</span>
                        </p>
                    </div>
                </div>
                
            </div>
            <div class="more">更多</div>
        </section>

        <section class="elect">
            <article class="electlist" v-for="(item,index) in electlist " :key="index">
                <aside class="elect-top">
                    <span>{{item.title}}</span>
                    <img :src="item.imgurl" alt="">
                </aside>
                <aside class="elect-bottom">
                    <div class="bottomlist">
                    <div class="sq-left">
                        <img :src="item.Head" alt="">
                        <span class="sq-user">{{item.reviewers}}</span>
                        <span class="sq-address">{{item.addres}}</span>
                    </div>
                    <div class="sq-right"> 
                        <p>
                            <van-icon name="eye-o" />
                            <span>{{item.reply}}</span>
                            
                        </p>
                        <p>
                            <van-icon name="chat-o" />
                            <span>{{item.viewnem}}</span>
                        </p>
                    </div>
                </div>
                </aside>
            </article>
        </section>

        <section class="reward">
            <div class="sp-top">
                <img src="../../assets/images/bfjl.jpg" alt="">
            </div>
            <div class="sq-title">旅游界的奥斯卡之2019游侠客内线路颁发奖励现场</div>
            <div class="sq-bottom">
                
                <div class="bottomlist">
                    <div class="sq-left">
                        <!-- <img src="https://tvax1.sinaimg.cn/crop.0.0.996.996.50/0067OxYlly8gdiiy03pgzj30ro0roabv.jpg?KID=imgbed,tva&Expires=1602594561&ssig=lDDBRuCbOn" alt=""> -->
                        <van-icon name="location-o" />
                        <span class="sq-address">华山</span>
                    </div>
                    <div class="sq-right"> 
                        <p>
                            <van-icon name="eye-o" />
                            <span>3683</span>
                            
                        </p>
                        <p>
                            <van-icon name="chat-o" />
                            <span>9828</span>
                        </p>
                    </div>
                </div>
                
            </div>
            
        </section>

        <section class="hot">
            <van-nav-bar
                left-text="当季热门"
                right-text="查看更多" 
            />
            <aside class="package__scroller">
                    <ul class="mNewScrollX" >
                        <li v-for="(item,index) in hotlist" :key="index">
                            <img :src="item.imgurl" alt="">
                            <p>{{item.title}}</p>
                            <p>{{item.sort}}</p>
                        </li>
                    </ul>
                </aside>
        </section>

        <section class="elect">
            <article class="electlist" v-for="(item,index) in electlist " :key="index">
                <aside class="elect-top">
                    <span>{{item.title}}</span>
                    <img :src="item.imgurl" alt="">
                </aside>
                <aside class="elect-bottom">
                    <div class="bottomlist">
                    <div class="sq-left">
                        <img :src="item.Head" alt="">
                        <span class="sq-user">{{item.reviewers}}</span>
                        <span class="sq-address">{{item.addres}}</span>
                    </div>
                    <div class="sq-right"> 
                        <p>
                            <van-icon name="eye-o" />
                            <span>{{item.reply}}</span>
                            
                        </p>
                        <p>
                            <van-icon name="chat-o" />
                            <span>{{item.viewnem}}</span>
                        </p>
                    </div>
                </div>
                </aside>
            </article>
        </section>

    </div>
</template>

<script>
import Vue from 'vue';
import { Lazyload } from 'vant';

import { getComtabs } from '../../utils/api'

Vue.use(Lazyload);
export default {
   data() {
    return {
      images: [
        'https://qimg4.youxiake.com/upload/202009/17/27601600321473.jpg?imageslim',
        'https://qimg4.youxiake.com/upload/202009/10/99361599710392.jpg?imageslim',
        'https://qimg4.youxiake.com/upload/202009/17/27601600321473.jpg?imageslim',
        'https://qimg4.youxiake.com/upload/202009/10/99361599710392.jpg?imageslim',
        'https://qimg4.youxiake.com/upload/202009/17/27601600321473.jpg?imageslim',
        'https://qimg4.youxiake.com/upload/202009/10/99361599710392.jpg?imageslim',
      ],
      value:'',
      list:[],
      electlist:[],
      hotlist:[]

      
    };
  }, 
  mounted(){
      this.gettablist()
      
  },
  methods:{
      async gettablist(){
          const res = await getComtabs()
          this.list =res.data.data.tab 
          this.electlist = res.data.data.elect
          this.hotlist = res.data.data.hot
          console.log(this.hotlist)
      }
  }
}
</script>


<style lang="less" scoped>
    .box-com{
        width: 100%;
        padding: 0 9px;
        
        .heade{

            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 65px;
            width: 100%;
            // background: blue;
            p{
                font-size: 12px;
            }
            .van-search{
                width: 320px;
                // border-radius: 12px;
                .van-search__content{
                    border-radius: 15px;
                }
            }
            
        }
        .swipers{
            width: 100%;
            height: 150px;
            img{
               width: 100%;
                height: 180px; 
            }
        }

        .taps{
            .taplist{
                display: flex;
                margin-top: 50px;
                aside{
                    flex-shrink: 1;
                    width: 80px;
                    height: 70px;
                    // text-align: center;
                    border-radius: 12px;
                    border: 1px solid rgb(206, 206, 206);
                    margin-right: 10px;
                    position: relative;
                    p{
                        text-align: center;
                        font-size: 16px;
                        line-height: 70px;
                    }
                    img{
                        position: absolute;
                        bottom: 3px;
                        right: 9px;
                        width: 16px;
                        height:16px
                    };
                }
            }

        }

        .Spiderman{
            margin-top: 25px;
            .sp-top{
                width: 100%;
                height: 150px;
                img{
                    width: 100%;
                   height: 200px; 
                }
            }
            .sq-title{
                margin-top: 60px;
                // margin-bottom: 5px;
                font-size: 20px;
                font-weight: 900;
                text-align: center;
            }
            .sq-bottom{
                font-size: 14px;
                
                .bottomlist{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .sq-left{
                        img{
                            width: 25px;
                            height: 25px;
                            border-radius: 12px;
                            vertical-align:middle ;
                            
                        }
                        span{
                            margin-left: 9px;
                           margin-bottom: 5px;
                           line-height: 50px;
                           
                            
                        }
                    }
                    .sq-right{
                        display: flex;
                        align-items: flex-end;
                        p{
                            margin-right: 15px;
                        }
                    }
                }
            }
            .more{
                // border: 1px solid black;
                background: rgb(236, 236, 236);
                font-size: 15px;
                width: 90px;
                padding: 10px;
                text-align: center;
                margin: 20px auto;
                border-radius: 25px;
            }
        }

        .elect{
            
            .electlist{
                border-bottom: 1px solid rgb(218, 217, 217);
                margin-bottom: 12px;
                .elect-top{
                    height: 120px;
                    width: 100%;
                    // background: chartreuse;
                    display: flex;
                    span{
                        
                        height: 100px;
                        font-size: 23px;
                        font-weight: 900;
                        letter-spacing: 1px;
                        margin-top: 10px;
                        display: -webkit-box;
                        overflow: hidden;
                        white-space: normal !important;
                        text-overflow: ellipsis;
                        word-wrap: break-word;
                        -webkit-line-clamp: 4;
                        -webkit-box-orient: vertical
                    }
                    img{
                        width:50%;
                        height: 120px;
                    }
                }
                .elect-bottom{
                    font-size: 14px;
                    .bottomlist{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .sq-left{
                        img{
                            width: 25px;
                            height: 25px;
                            border-radius: 12px;
                            vertical-align:middle ;
                            
                        }
                        span{
                            margin-left: 9px;
                           margin-bottom: 5px;
                           line-height: 50px;
                           
                            
                        }
                    }
                    .sq-right{
                        display: flex;
                        align-items: flex-end;
                        p{
                            margin-right: 15px;
                        }
                    }
                }
                }
            }
        }

        .reward{
            margin-top: 25px;
            .sp-top{
                width: 100%;
                height: 150px;
                img{
                    width: 100%;
                   height: 200px; 
                }
            }
            .sq-title{
                padding: 0 5px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                margin-top: 60px;
                // margin-bottom: 5px;
                font-size: 16px;
                font-weight: 900;
                text-align: center;
            }
            .sq-bottom{
                font-size: 14px;
                
                .bottomlist{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .sq-left{
                        img{
                            width: 25px;
                            height: 25px;
                            border-radius: 12px;
                            vertical-align:middle ;
                            
                        }
                        span{
                            margin-left: 9px;
                           margin-bottom: 5px;
                           line-height: 50px;
                           
                            
                        }
                    }
                    .sq-right{
                        display: flex;
                        align-items: flex-end;
                        p{
                            margin-right: 15px;
                        }
                    }
                }
            }
            .more{
                // border: 1px solid black;
                background: rgb(236, 236, 236);
                font-size: 15px;
                width: 90px;
                padding: 10px;
                text-align: center;
                margin: 20px auto;
                border-radius: 25px;
            }
        }

        .hot{
            margin-bottom: 150px;
            border-top: 1px solid rgb(241, 241, 241);
            /deep/ .van-nav-bar__text{
                font-size: 20px;
                color: black;

            }
           /deep/ .van-nav-bar__right{
               .van-nav-bar__text{
                   font-size: 14px;
               }
                
            }
            .package__scroller{
                    float: left;
                    width: 100%;
                    
                    .mNewScrollX{
                        width: 100%;
                        // font-size: 13px;
                        display: flex;
                        // flex-wrap: nowrap;
                        overflow: auto;
                        width:100% 
                    }
                    li{
                        width: 140px;
                        border: 1px solid rgb(231, 231, 231);
                        text-align: center;
                        margin-right: 10px;
                        flex-shrink: 0;
                        position: relative;
                        img{
                            width: 100%;
                            height: 120px;
                        }
                        p:nth-of-type(1){
                            
                            height: 25px;
                            font-size: 15px;
                            
                            position: absolute;
                            left: 30%;
                            bottom: 10px;
                            border-radius:0 0 20px 20px;
                            color: #fff;
                            
                            padding: 3px 3px;
                        }
                       
                        
                        p:nth-of-type(2){
                            width: 50px;
                            height: 25px;
                            background-color: rgb(244, 58, 72);
                            position: absolute;
                            top: -1px;
                            right: 45%;
                            border-radius:0 0 20px 20px;
                            color: #fff;
                            font-size: .16rem;
                            padding: 3px 3px;
                        }
                    }
                    
                    
                }
            }
        }
        
    
</style>