<template>
    <div class="me-main">
        <div class="me-main1">
            <van-nav-bar 
                left-text="发现话题"
                right-text="话题广场 >"  
            />
            <div class="me-main-top">
                <ul>
                    <li class="li-1">
                        <p>遇见周榜</p>
                        <p>-></p>
                    <img src="../../assets/images/meetjx//huati.jpg" alt="">
                    </li>
                    <li v-for="(item,index) in listtopic" :key='index'>
                        <p>{{item.title}}</p>
                        <img :src="item.imgurl" alt="">
                    </li>
                    
                </ul>
            </div>
            <div class="me-main-button">
                <a href="#/meet">
                    <img src="../../assets/images/meetjx/youPK.jpg" alt="">
                </a>
            </div>
        </div>

        

        <div class="me-main2">
            <van-nav-bar 
                left-text="为你推荐"
                right-text="热门  |  最新 "  
            />

            <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
                    
                >
                    <ul class="me2List">
                        <li v-for="(item,index) in list" :key='index'>
                            <img :src="item.imgurl" alt="" v-lazy="item.imgurl">
                            <p class="p1">{{item.mixtitle}}</p>
                            <p class="p2">{{item.title}}</p>
                            <div class="me2-info">
                                <p class="p3">
                                    <img :src="item.head" alt="">
                                    <!-- <span>好久不见</span> -->
                                </p>
                                <span class="me2-sp">{{item.reviewers}}</span>
                                <p class="p4">
                                    <span>赞</span>
                                    <span>{{item.praise}}</span>
                                </p>
                            </div>
                        </li>
                    </ul>

                </van-list>
            </van-pull-refresh>

           
        </div>
        
    </div>

    
</template>

<script>
import { Toast } from 'vant';
import BetterScroll from 'better-scroll'
import { getHotList, getTopicList } from '../../utils/api'
export default {
    data() {
        return {
            msg:true,
            list:[],
            listtopic:[],
            loading: false,
            finished: false,
            isLoading: false,
        }
    },
    mounted(){
        this.getList()
        this.getTopList()
    },

    methods: {
        async getList(){
            const res = await getHotList()
            
            this.list = res.data
            // console.log(res.data)
        },

        async getTopList(){
            const res = await getTopicList()
            
            this.listtopic = res.data
            // console.log(res.data)
            await this.$nextTick()
            let bs = new BetterScroll('.me-main-top', {
                scrollX:true,
                click:true
            })
        },
        onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
            setTimeout(() => {
                for (let i = 0; i < 14; i++) {
                this.list.push(this.list.length + 1);
                }

            // 加载状态结束
            this.loading = false;

            // 数据全部加载完成
            if (this.list.length >= 13) {
            this.finished = true;
            }
        }, 1000);
    },
    onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
        
    },
}
</script>


<style lang="less" scoped>
    .me-main{
       background: #f2f2f2; 
       padding:0 10px ;
    }
    .me-main1{
        background: white;
      .van-nav-bar{
            height: 46px;
           /deep/ .van-nav-bar__text {
                color: #333333;
                font-size:16px ;
            }
        }
        .me-main-top{
            width:100%;
            height: 82px;
            overflow: hidden;
            ul{
                display: inline-flex;
                
                
                li{
                    width: 100px;
                    height: 82px;
                    flex-shrink: 0; 
                    margin-right: 10px;
                    position: relative;
                    img{
                        
                        width: 100%;
                        height: 100%;
                        
                    }
                    p{
                        position: absolute;
                        top: 12px;
                        left: 12px;
                        font-size: 16px;
                        color:#FFFFFF ;
                    }
                }
                .li-1{
                    background: #FFE76D;
                    p:nth-of-type(1){
                        font-size: 20px;
                        font-weight: 900;
                        color: black;
                    }
                    p:nth-of-type(2){
                        background-color: aliceblue;
                        opacity: .5;
                        text-align: center;
                        top:35px;
                        margin-left: 20px;
                        font-weight: 600;
                        margin-top: 6px;
                        color: black;
                    }
                }
            }
        }

        .me-main-button{
            margin-top: 20px;
            width: 350px;
            height: 130px;
            
            
            
            img{
                width: 100%;
                height: 100%;
                margin-left: 15px;

                
            }
        }
    }

    .me-main2{
        margin-top: 25px;
        // background: #e8e8e8;
        .van-nav-bar{
            background-color: #f2f2f2;
           /deep/ .van-nav-bar__text {
                color: #333333;
                font-size:16px ;
            }
        }
        .me2List{
            display: flex;
            flex-wrap: wrap;

            li{
                background-color: white;
                font-size: 16px;
                width: 48%;
                // height: 300px;
                margin-right: 9px;
                margin-bottom: 25px;
                img{
                    width: 100%;
                    height: 150px;
                }
                p{
                    
                    font-size: 14px;
                }
                .p1{
                    text-align: center;
                    margin: 9px 0 12px 0;
                }
                .p2{
                    overflow:hidden;
                    text-overflow: ellipsis;
                    display:-webkit-box;
                    -webkit-line-clamp:2;
                    -webkit-box-orient:vertical;
                }
                .me2-info{
                    margin-top: 9px;
                    height: 40px;
                    // background: red;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .p3{

                        img{
                            width: 33px;
                            height: 33px;
                            border-radius: 17px;
                        }
                        
                    }
                    .me2-sp{
                        font-size: 14px;
                        margin-left: -20px;
                    }
                    .p4{
                       span:nth-of-type(1){
                           border: 1px solid #ccc;
                           margin-right: 8px;
                        }
                    }
                }
               
            }
            li:nth-of-type(2n+2){
                margin-right: 0;
            }
            
            
        }
    }


</style>