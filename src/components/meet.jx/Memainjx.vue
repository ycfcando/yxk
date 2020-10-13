<template>
    <div class="me-mainjx">
        
        <div class="top-ren">
            <ul class="left-tx">
                <li>
                    <img src="../../assets/images/meetjx/rmtx.jpg" alt="">
                </li>
                <li>
                    <img src="../../assets/images/meetjx/rmtx.jpg" alt="">
                </li>
                <li>
                    <img src="../../assets/images/meetjx/rmtx.jpg" alt="">
                </li>
            </ul>   
            <div class="right-rp">
                <p class="right-p1">红人榜</p>
                <p class="right-p2">11.11更新</p>

            </div>
        </div>
        <ul class="me2List">
               <li v-for="(item,index) in list" :key='index'>
                    <img :src="item.imgurl" alt="">
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
    </div>
</template>


<script>

import { getHotList} from '../../utils/api'
export default {
    data() {
        return {
            msg:true,
            list:[]
            
        }
    },
    mounted(){
        this.getList()
        
    },

    methods: {
        async getList(){
            const res = await getHotList()
            
            this.list = res.data
            // console.log(res.data)
        }
    }
        
}
</script>



<style lang="less" scoped>
    .me-mainjx{
        padding: 0 10px;
        background-color: #f2f2f2;
        .top-ren{

            padding-top: 15px;
            padding-bottom: 15px;
            display: flex;
            justify-content: space-between;
            .left-tx{
                display: flex;
               li{
                   width: 55px;
                   height: 55px;
                   margin-right: 8px;
                   img{
                       width:100%;
                       height: 100%;
                       border-radius: 50%;
                   }
               } 
            }
            .right-rp{
                font-size: 18px;
                margin-right: 20px;
                text-align: center;
                .right-p1{
                    font-weight: bold;
                }
                .right-p2{
                    font-size: 14px;
                    background: #ffdc40;
                    margin-top: 10px;
                }

            }
        }

        .me2List{
            // margin-top: 20px;
           
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
                    font-size: 18px;
                    font-weight: 600;
                    padding: 0 10px;
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