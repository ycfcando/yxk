<template>
    <div class="me-box">
       
        <div class="me-search">
            <!-- <img src="../../assets/images/meetjx/meetJX-2.jpg" alt=""> -->
            <img src="../../assets/images/meetjx/meetJX-2.jpg" alt="">
            <van-search v-model="value" placeholder="夏日海岛推举" />
        </div>
        <van-tabs v-model="activeName" background="#FFDC40">
            <van-tab title="关注" name="a"></van-tab>
            <van-tab title="发现" name="b"></van-tab>
            <van-tab title="精选" name="c"></van-tab>
            <van-tab title="短视频" name="a"></van-tab>
        </van-tabs>
        


        
    </div>
</template>


<script>
export default {
   data() {
       return {
        value:'',
        activeName: 'a'
       }
   }, 
}


</script>

<style lang="less" scoped>
    .me-box{
        width: 100%;
        // height: 270px;
        background:#FFDC40;
        padding-top: 18px;
        

        .van-search{
            width: 280px;
            // margin: auto;
            border-radius: 12px;
            padding: 5px;
            height: 30px; 
            .van-search__content{
                border-radius: 12px;
            }
        }
        .me-search{
            display: flex;
            align-items: center;
            justify-content: space-around;
            img{
                width: 36px;
                height: 36px;
            }   
        }
       .van-tabs{
           margin-top: 25px;
           padding: 15px 45px; 
          /deep/ .van-tab--active{
              font-size: 20px;
              padding-bottom: 5px;
              font-weight: bold;
           }
           
           /deep/ .van-tab__text{
              font-size: 19px; 
              font-weight: 900px;
              
           }
        }
        
          
       }    
    
        
    
    
</style>