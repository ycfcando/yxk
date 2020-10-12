<template>
    <div class="body">
        <div class="header">
            <div class="header__enshrine"></div>
            <van-icon :class="{ actives: isActives }" name="star-o" @click="chang"/>
            <div class="photography">
                <img src="../../assets/images/图片小标@2x.png">
                <span>摄影</span> 
            </div>
        </div>
        <div class="middle">
            <div class="header__tow">
                杭州之美，除了集江南神韵于一身的西湖十景人文 景观同样丰富多彩，素体春晓、平湖秋月、灵隐寺
                <van-icon name="play" />
            </div>
            <div class="ul-wrap">
                <ul class="ul">
                    <li v-for="(item,index) in ulli" :key="index">
                        <p class="ulone">
                            {{item.title}}
                            <van-icon name="play" />
                        </p>
                        <p class="ultwo">{{item.message}}</p>
                    </li>
                </ul>
            </div>
            <div class="ul-middle">
                <ul>
                    <li v-for="(item, index) in tabsList" 
                        :key="index" 
                        :class="{ active: activeIndex === index }"
                        @click="tabsChange(index)">
                        {{ item.title }}
                    </li>
                </ul>
            </div>
            <div class="ul-scenic">
                <ul class="ul">
                    <li v-for="(item,index) in ul_scenic_li" :key="index">
                        <p><img :src="item.imgUrl"></p>
                        <p>{{item.title}}</p>
                    </li>
                </ul>
            </div>
        </div> 
        <div class="bottom">
            <div class="ul-particulars ">
                <ul>
                    <li v-for="(item, index) in ul_particulars_li" 
                        :key="index" 
                        :class="{ particulars_active: particulars_activeIndex === index }"
                        @click="particulars_Change(index, item.url)">
                        {{ item.title }}
                        <div class="underLine" v-if="particulars_activeIndex === index"></div>
                    </li>
                </ul>
            </div>
            <div class="ul-libertinism">
                <ul>
                    <li v-for="(item, index) in ul_libertinism_li" 
                        :key="index" 
                        :class="{ libertinism_active: libertinism_activeIndex === index }"
                        @click="libertinism_Change(index, item.url)">
                        {{ item.title }}
                    </li>
                    <van-icon name="filter-o" />
                </ul>
            </div>
            <div class="been">
                <img src="../../assets/images/脚印@2x.png">
                <span>去过</span> 
            </div>
        </div>
        <my-tabs />
    </div>
</template>

<script>
import MyTabs from "../../components/hz.sy.mine/Tabsdata.vue";
export default {
   data() {
       return {
            isActive: true,
            hasError: false,
            ulli:[
                {
                        title:'最佳季节',
                        message:'9-11月：天气秋高气爽，满陇桂雨的桂桂'
                },
                {
                        title:'建议游玩',
                        message:'西湖以一山、二塔、三岛、三堤、五胡、'
                },
                {
                        title:'最佳季节',
                        message:'9-11月：天气秋高气爽，满陇桂雨的桂桂'
                }
            ],
            tabsList: [
                {
                title: '热门景点',
                // url: '/hot'
                },
                {
                title: '附近景点',
                // url: '/nearby'
                }
            ],
            activeIndex: 0,
            ul_scenic_li:[
                {
                    imgUrl: require('@/assets/images/西湖@2x.png'),
                    title: '西湖'
                },
                {
                    imgUrl: require('@/assets/images/西湖@2x.png'),
                    title: '灵隐寺'
                },
                {
                    imgUrl: require('@/assets/images/西湖@2x.png'),
                    title: '雷峰塔'
                },
                {
                    imgUrl: require('@/assets/images/西湖@2x.png'),
                    title: '西溪湿地'
                },
            ],
            ul_particulars_li:[
                {
                    title: '预定',
                    url: '/hot'
                },
                {
                    title: '旅图',
                    url: '/hot'
                },
                {
                    title: '攻略',
                    url: '/hot'
                },
                {
                    title: '游记',
                    url: '/hot'
                },
                {
                    title: '视频',
                    url: '/hot'
                },
            ],
            particulars_activeIndex:0,
            ul_libertinism_li:[
                {
                    title: '当地玩乐',
                    url: '/hot'
                },
                {
                    title: '主题玩法',
                    url: '/hot'
                },
                {
                    title: '自由行',
                    url: '/hot'
                },
                {
                    title: '同城',
                    url: '/hot'
                },
                {
                    title: '筛选',
                    url: '/hot'
                },
            ],
            libertinism_activeIndex:0,
            isActives:false
       }
    },
    components: {
        MyTabs,
    },
    methods: {
    // tabsChange(i, url) {
    //   this.activeIndex = i;
    //   this.$router.push(url)
    // }
    tabsChange(i) {
      this.activeIndex = i;
    },
    particulars_Change(i){
        this.particulars_activeIndex = i;
    },
    libertinism_Change(i){
        this.libertinism_activeIndex = i;
    },
    chang(){
        this.isActives=!this.isActives
    }
  }
};
</script>
<style lang='less' scoped>
.body{
    background: #f7f7f7;
    .actives{
        color:yellow
    }
    .header{
        position: relative;
        padding-left: 15px;
        height: 200px;
        background: url(../../assets/images/杭州背景图@2x.png) 50% no-repeat;
        background-size: cover;
        .header__enshrine{
            margin: 10px;
            float: right;
            width:20px;
            height:20px;
            background:  url(../../assets/images/分享APP@2x.png) 50% no-repeat;
            background-size: cover;
        }
        .van-icon{
            position: absolute;
            top: 7px;
            right: 38px;
            font-size: 24px;
        }
        .photography{
            position: absolute;
            bottom: 50px;
            right: 0px;
            width: 95px;
            height: 40px;
            background: rgba(39, 39, 40, 0.4);
            border-bottom-left-radius: 25px;
            border-top-left-radius: 25px;
            img{
                position: absolute;
                top: 7px;
                left: 8px;
                width: 30px; 
            }
            span{
                position: absolute;
                right: 8px;
                top: 7px;
                font-size: 20px;
                color: #fff;
            }
        }
    }
    .middle{
        background: #fff;
        margin-top: 10px;
        border-radius: 10px;
    }
    .header__tow{
        position: relative;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        width: 351px;
        font-size: 16px;
        margin: 0 10px;
        padding-top: 13px;
        .van-icon{
            position: absolute;
            top: 9px;
            right: -3px;
        }
    }
    .ul-wrap {
        width: 100%;
        overflow: auto;
        ul{
            display: inline-flex;
            margin-left: 11px;
            margin: 10px;
            li{
                width: 140px;
                height: 85px;
                margin-right: 10px;
                flex-shrink: 0;
                background-color: #fff;
                border-radius: 15px;
                background: rgba(204, 204, 204,0.4);
            }
            .ulone{
                font-size: 18px;
                padding-left: 10px;
                padding-top: 10px;
            }
            .ultwo{
                padding-left: 10px;
                padding-top: 10px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                height: 44px;
                line-height: 17px;
                font-size: 15px;
                color: #333;
                overflow: hidden;
            }
        }
    }
    .ul-middle{
        ul{
            margin-left: 11px;
            li{
                float: left;
                width: 85px;
                height: 30px;
                margin-right: 10px;
                flex-shrink: 0;
                background-color: #fff;
                border-radius: 15px;
                font-size: 14px;
                text-align: center;
                line-height: 30px;
                
            }
            .active {
                background-color:yellow;
            }
        } 
    }
    .ul-scenic{
        width: 100%;
        overflow: auto;
        ul{
            display: inline-flex;
            margin: 10px 0 0 11px;
            li{
                width: 140px;
                height: 122px;
                margin-right: 10px;
                flex-shrink: 0;
                font-size: 14px;
                text-align: center;
                img{
                    width: 100%;
                    border-radius: 15px;
                }
            }
        }
    }
    .bottom{
        background: #fff;
        margin-top: 10px;
        border-radius: 10px;
    }
    .ul-particulars{
        background: #fff;
        margin-top: 10px;
        border-radius: 10px;
        ul {
            display: flex;
            align-items: center;
            height: 100%;
            font-size: 18px;
            color: #000;
            border-bottom: 2px solid #ccc;
            li {
                height: 100%;
                position: relative;
                margin: 19px;
                .underLine {
                    position: absolute;
                    width: 25px;
                    height: 3px;
                    border-radius: 1.5px;
                    background: orange;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                }
            }
        }
    }
    .ul-libertinism{
        ul {
            display: flex;
            align-items: center;
            height: 100%;
            font-size: 18px;
            color: #000;
            border-bottom: 1px solid #ccc;
            li {
                width: 100px;
                margin: 10px;
                height: 30px;
                position: relative;
                font-size: 12px;
                color: #ccc;
                text-align: center;
                line-height: 30px;    
            }
            .libertinism_active{
                color: black;
                border: 1px solid orange;
                border-radius: 15px;
                background-color: #ffffcc;
            }
            .van-icon{
                position: absolute;
                right: 12px;
            }
        }
    }
    .been{
        position: absolute;
        bottom: 201px;
        right: 0px;
        width: 78px;
        height: 33px;
        background: #ffcc33;
        border-bottom-left-radius: 25px;
        border-top-left-radius: 25px;
        img{
            position: absolute;
            top: 7px;
            left: 8px;
            width: 18px; 
        }
        span{
            position: absolute;
            right: 8px;
            top: 7px;
            font-size: 14px;
            color: black;
            font-weight: 700;
        }
    }
}    
</style>
