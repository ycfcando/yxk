<template>
    <div class="swiper">
        <div class="tup">
            <p class="p1">
              <van-icon name="arrow-left" />  
            </p>
            <p class="p2">
              <van-icon name="contact" /> 
            </p>
            
        </div>
        <van-swipe @change="onChange">
            <van-swipe-item>
                <img src="http://gallery.youxiake.com/Public/Data/upload/productimg/201905/10/5cd553ad001a1.jpg?imageslim" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="http://gallery.youxiake.com/Public/Data/upload/productimg/201906/18/5d08441e6c752.jpg?imageslim" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="http://gallery.youxiake.com/Public/Data/upload/productimg/201812/26/5c22eb654e518.jpg?imageslim" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="http://gallery.youxiake.com/Public/Data/upload/productimg/201812/26/5c22eb0939836.jpg?imageslim" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="http://gallery.youxiake.com/Public/Data/upload/productimg/201812/26/5c22eb30820f1.jpg?imageslim" alt="">
            </van-swipe-item>
            <template #indicator>
                <div class="custom-indicator">
                {{ current + 1 }}/5
                </div>
            </template>
        </van-swipe>

        <div class="banner_type">
            跟团游 · 大巴团 · 户外游 · 7天6晚
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
  },
};
</script>



<style lang="less" scoped>
    .swiper{
        position: relative;
        .tup{
            position: absolute;
            top: 12px;
            z-index: 999;
            padding: 8px 20px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            p{
                background: rgba(27, 27, 27, 0.4);
                
                text-align: center;
                border-radius: 50%;
                font-size: 22px;
                color: rgb(236, 236, 236);
                
                

            }
            
            

        }
        img{
            width: 100%;
            height: 211px;
        }
        /deep/ .custom-indicator{
            color: rgb(221, 220, 221);
            margin-right: 15px;
            margin-bottom: 6px;
            
        }
         .custom-indicator {
            position: absolute;
            right: 5px;
            bottom: 5px;
            padding: 2px 5px;
            font-size: 12px;
            background: rgba(0, 0, 0, 0.1);
        }

        .banner_type{
            position: absolute;
            bottom: 13px;
            font-size: 12px;
            color: white;
            padding-left: 15px;
        }
    }
</style>