<template>
    <div class="me-footer">
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item icon="location-o" dot>杭州</van-tabbar-item>
            <van-tabbar-item icon="notes-o" badge="5">遇见</van-tabbar-item>
            <van-tabbar-item icon="volume-o" badge="20">社区</van-tabbar-item>
            <van-tabbar-item icon="friends-o" badge="2">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>


<script>
export default {
    data() {
        return {
            active: 0,
        }
    },
}
</script>



<style lang="less" scoped>
    .me-footer{
        margin-top: 40px;
    }
</style>